// AI case desk: one private chat per phone. The phone sends its own short history;
// nothing is stored here. Needs ANTHROPIC_API_KEY set in Netlify environment variables.
import * as case1 from "../cases/case1.mts";

export const config = { path: "/api/desk" };

const CASES: Record<string, { RULES: string; RELEASABLE: string[] }> = { "1": case1 };
const MODEL = process.env.DESK_MODEL || "claude-haiku-5-5";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" }
  });
}

export default async (req: Request) => {
  if (req.method !== "POST") return json({ error: "POST only" }, 405);
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return json({ error: "no_key" }, 503);

  let body: any;
  try { body = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
  const c = CASES[String(body?.case || "")];
  if (!c) return json({ error: "unknown_case" }, 400);

  const question = String(body?.question || "").trim().slice(0, 400);
  if (!question) return json({ error: "empty" }, 400);
  const released = (Array.isArray(body?.released) ? body.released : [])
    .map(String).filter((id: string) => c.RELEASABLE.includes(id));

  // Short history from the phone: alternating user / assistant text, oldest first
  const history = (Array.isArray(body?.history) ? body.history : [])
    .slice(-6)
    .filter((t: any) => t && (t.role === "user" || t.role === "assistant") && typeof t.content === "string")
    .map((t: any) => ({ role: t.role, content: t.content.slice(0, 600) }));
  while (history.length && history[0].role !== "user") history.shift();
  if (history.length && history[history.length - 1].role === "user") history.pop();

  const messages = [
    ...history,
    { role: "user", content: `Already released to this YP: ${released.join(", ") || "none"}.\nQuestion: ${question}` }
  ];

  let res: Response;
  try {
    res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({ model: MODEL, max_tokens: 300, system: c.RULES, messages })
    });
  } catch {
    return json({ error: "upstream" }, 502);
  }
  if (!res.ok) return json({ error: "upstream", status: res.status }, 502);

  const data: any = await res.json();
  const text: string = (data?.content || []).filter((b: any) => b.type === "text").map((b: any) => b.text).join("");
  let out: any = null;
  try { out = JSON.parse(text); } catch {
    const m = text.match(/\{[\s\S]*\}/);
    if (m) { try { out = JSON.parse(m[0]); } catch { out = null; } }
  }
  if (!out || typeof out.reply !== "string") return json({ reply: text.slice(0, 400) || "The file has nothing on that.", release: [] });

  const release = (Array.isArray(out.release) ? out.release : [])
    .map(String).filter((id: string) => c.RELEASABLE.includes(id) && !released.includes(id)).slice(0, 2);
  return json({ reply: out.reply.slice(0, 600), release });
};
