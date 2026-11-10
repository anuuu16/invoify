# Commands

Invoify is a Next.js app that builds invoices in the browser and renders them to PDF on its own server (Puppeteer + Chromium).
Invoice data stays in the browser (encrypted local storage); there's no database. Licence: MIT, see `LICENSE`.
It needs **Node 20 or newer** and npm (the lockfile is `package-lock.json`).

## Setup

```
npm ci                                # installs from package-lock.json; Puppeteer downloads its own Chrome here
```

If the Chrome download is blocked, install without it and point Puppeteer at a Chrome that's already on the machine:

```
PUPPETEER_SKIP_DOWNLOAD=1 npm ci
export PUPPETEER_EXECUTABLE_PATH="$(command -v google-chrome || command -v chromium)"
```

No `.env` is needed. `NODEMAILER_EMAIL` / `NODEMAILER_PW` are only for "send by email"; everything else works without them.

## Run

```
npm run dev                           # http://localhost:3000 (the app is at /en, /de, …)
npm run build && npm start            # production build; another port: npm start -- -p 3100
```

## Check

```
npx tsc --noEmit                      # types
npm run lint                          # ESLint (next lint)
npm run format:check                  # Prettier; to fix: npm run format
npm test                              # Vitest unit tests (none yet; add files named *.test.ts / *.test.tsx)
npx vitest run <path>                 # one test file
```

A component test can use the browser-like environment by starting the file with `// @vitest-environment jsdom`
(`@testing-library/react` is installed). Imports use the `@/` alias like the app.

Before any change, `npm run lint` passes with 27 warnings and `npm run format:check` reports 80 files; both are in the code
as it stands.

## End-to-end tests (Playwright)

```
npx playwright install chromium       # once
npm run test:e2e                      # builds, starts the app on :3000, runs e2e/ on a desktop and a 375 px mobile viewport
```
