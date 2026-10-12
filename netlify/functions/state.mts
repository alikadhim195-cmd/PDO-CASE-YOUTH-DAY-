import { getStore } from "@netlify/blobs";

export const config = { path: "/api/state" };

function emptyState() {
  return {
    startedAt: 0,
    forced: {},
    blackout: false,
    purchases: {},
    requests: {},
    theory: "",
    theoryMin: null,
    theory2: "",
    theory2Min: null
  };
}

function isPlainObject(v) {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

function deepMerge(base, patch) {
  const out = isPlainObject(base) ? { ...base } : {};
  for (const k of Object.keys(patch || {})) {
    const pv = patch[k];
    if (isPlainObject(pv)) out[k] = deepMerge(out[k], pv);
    else out[k] = pv;
  }
  return out;
}

function roomKey(url) {
  const raw = (url.searchParams.get("room") || "a").toLowerCase();
  const safe = raw.replace(/[^a-z0-9]/g, "").slice(0, 12);
  return "room-" + (safe || "a");
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store"
    }
  });
}

export default async (req: Request) => {
  const url = new URL(req.url);
  const key = roomKey(url);
  const store = getStore({ name: "pdo-case-desk", consistency: "strong" });

  if (req.method === "GET") {
    const data = await store.get(key, { type: "json", consistency: "strong" });
    return json(data || emptyState());
  }

  if (req.method !== "POST") {
    return json({ error: "method_not_allowed" }, 405);
  }

  let patch;
  try {
    patch = await req.json();
  } catch {
    return json({ error: "bad_json" }, 400);
  }

  // Merge-and-write with an ETag guard. The state is a map of distinct keys
  // (one per purchase, one per question), never an incrementing number, so a
  // merge is order-independent; the guard only prevents a lost write.
  const reset = !!(patch && patch.__reset);
  const clean = {};
  for (const k of Object.keys(patch || {})) {
    if (k.slice(0, 2) !== "__") clean[k] = patch[k];
  }

  for (let attempt = 0; attempt < 6; attempt++) {
    const current = await store.getWithMetadata(key, { type: "json", consistency: "strong" });
    const base = reset ? emptyState() : (current && current.data) || emptyState();
    const next = deepMerge(base, clean);

    let result;
    if (current && current.etag) {
      result = await store.setJSON(key, next, { onlyIfMatch: current.etag });
    } else {
      result = await store.setJSON(key, next, { onlyIfNew: true });
    }

    if (result && result.modified) return json(next);
    await new Promise((r) => setTimeout(r, 70 + attempt * 60));
  }

  return json({ error: "write_contended" }, 409);
};
