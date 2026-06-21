# Tsegts Temuujin — Portfolio

Personal portfolio site for [supertsegts.github.io](https://supertsegts.github.io).

## Stack

- Next.js 15 (static export)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static files are output to `out/`.

## Deploy

Push to `main`. GitHub Actions builds and deploys automatically.

**First-time setup:** In repo Settings → Pages → Source, select **GitHub Actions**.

## Customize

Edit content in [`src/data/portfolio.ts`](src/data/portfolio.ts) — name, bio, links, project copy, and email.

Add screenshots to `public/images/be-alive/` and `public/images/neural-network/` when available.
