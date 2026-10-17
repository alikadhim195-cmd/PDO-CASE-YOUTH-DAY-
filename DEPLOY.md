# Hawrah North Case Desk — deploy

The Netlify site already exists on your account:
  name:    pdo-case-desk
  site id: 0ef8a6a6-fc5d-48b7-a74b-4adc3c388795
  url:     https://pdo-case-desk.netlify.app

## Deploy (one time, ~2 minutes)

In a terminal, inside this folder:

    npm install
    npx netlify-cli login
    npx netlify-cli deploy --prod --site 0ef8a6a6-fc5d-48b7-a74b-4adc3c388795

The login step opens a browser and asks you to authorise. Nothing else to set up —
the shared state uses Netlify Blobs, which is already part of your account.

## Using it

  Panel (the table):   https://pdo-case-desk.netlify.app/?room=a
  Case desk (you):     same link, choose "Case desk" on the first screen

Rooms A, B and C are three separate sessions on the same site, so three
directors can run at once, or you can rehearse in B and keep A clean.

## Changing the case content

Everything is in public/index.html:
  CATALOGUE  — what can be bought, what it costs, what the answer says
  INJECTS    — the story events and when they fire
  the constants at the top — credits and the minute marks

Redeploy with the same command after any edit.

## Phone case desk (AI chat per person)

- Each case has its own link: `/case/1` (Case 1). QR codes for all cases: `/qr.html`.
- Every phone gets its own private chat; nothing is shared between phones and nothing is stored on the server.
- The AI needs one setting in Netlify: **Project configuration → Environment variables → Add `ANTHROPIC_API_KEY`** (an Anthropic API key), then redeploy.
  Without it the desk still works in "simple matching" mode (keyword based).
- Optional: `DESK_MODEL` to change the model (default `claude-haiku-5-5`).
- The case diagnosis lives only in `netlify/cases/` (server side); it is never sent to phones.
