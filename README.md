# KelasKita — Eduwebmu Clone (Vibe Coding & AI Agent)

> Clone 1:1 https://eduwebmu.com dengan variasi brand **KelasKita** (palet indigo `#4f46e5` / cyan `#06b6d4`, light theme, bukan hitam/orange) · Live di **https://eduwebmu-clone.vercel.app** · Stack Next.js 16 + Tailwind 4 + TypeScript

![KelasKita preview](public/preview.png)

Platform katalog kelas + checkout QRIS/VA (DOKU) + member area + AI Tools kredit — dibangun ulang dari audit 7 section eduwebmu.com, dummy content, siap sambung Clerk / NeonDB / BunnyCDN.

---

## ✨ Fitur (yang sudah jalan)

- **Landing 7 section** — hero VIBE CODING & AI AGENT (2 CTA + 3 stat 1.980+ member / 622 PRD) + grid kelas 2+2 + alur 4 langkah + 3 AI Tools (PRD / MVP / AGENTS.md) + instruktur + FAQ
- **Katalog** — `src/lib/data.ts` 4 kelas dummy (LMS, n8n, AI Agent, Next.js), filter kategori Automation / Vibe Coding, badge diskon 30–40%
- **Detail kelas** — `/course/[slug]` kurikulum + box harga, related
- **Checkout** — `/checkout/[slug]` UI QRIS/VA dummy (siap sambung DOKU via `qris-saurus`)
- **Route lain** — `/courses`, `/tutorial`, `/community`, `/faq`, `/prd-generator`, `/mvp-generator`, `/agents-generator`, `/login` (placeholder, 22 routes total)
- **Navbar/Footer** — logo K indigo, hamburger `min-h-11` (44 px tap target), footer links `py-1.5`
- **Mobile** — 390 px no overflow, input `text-base` (16 px anti-zoom iOS), viewport `width=device-width, initial-scale=1`

## 🛠️ Stack

- **Next.js 16** (App Router) + **Tailwind CSS 4** + **TypeScript** + **ESLint**
- **BunnyCDN**, **NeonDB Postgres**, **Clerk auth** — placeholder (env ready, belum wiring)
- **DOKU** — QRIS / VA via adapter `qris-saurus` (creds via Vercel env, jangan paste di chat)
- Deploy **Vercel** native (`next.config.ts` tanpa `@opennextjs/cloudflare`); artefak CF (`wrangler.jsonc`, `open-next.config.ts`) diabaikan di Vercel

## 🎨 Branding

| Token | Value | Pakai |
|---|---|---|
| `--background` | `#ffffff` | page bg |
| `--foreground` | `#0f172a` | text |
| `--primary` | `#4f46e5` | CTA, logo K, accent |
| `--primary-soft` | `#ede9fe` | badge, soft bg |
| `--accent` | `#06b6d4` | secondary |
| `--muted` | `#f1f5f9` | card muted |
| `--border` | `#e2e8f0` | hairline |

Lihat `src/app/globals.css`. Font Geist Sans, light theme variasi dari eduwebmu (hitam/orange → indigo/cyan).

## 🚀 Local dev

```bash
bun install        # atau npm / pnpm
bun dev            # http://localhost:3000
bun run build      # 22 routes — static + dynamic
```

Env (jangan commit, set di Vercel Dashboard → Settings → Environment Variables):

```
DOKU_CLIENT_ID=[REDACTED]
DOKU_SECRET_KEY=***
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=[REDACTED]
CLERK_SECRET_KEY=***
DATABASE_URL=postgres://***
BUNNYCDN_*=***
```

> Kredensial tidak boleh lewat chat — log Discord/Telegram tersimpan.

## ☁️ Deploy

### Vercel (aktif)

```bash
vercel --prod      # live: https://eduwebmu-clone.vercel.app
```

`*.vercel.app` public (`ssoProtection: null`). Custom domain `naufalputra.web.id` dilepas — hanya `vercel.app` dipakai.

### Cloudflare Pages (opsional, via OpenNext)

```bash
bunx opennextjs-cloudflare build && bunx opennextjs-cloudflare deploy
```

Butuh `wrangler login` lokal, `wrangler.jsonc` name `eduwebmu-clone` compat `nodejs_compat`. Zip CF-ready 93 KB (exclude `node_modules/.next/.open-next/.wrangler/.git`).

## 📁 Struktur

```
src/
  app/
    layout.tsx              # Geist + Navbar/Footer
    page.tsx                # landing 7 section
    globals.css             # vars indigo/cyan
    courses/page.tsx        # listing + filter
    course/[slug]/page.tsx  # detail kurikulum + harga
    checkout/[slug]/page.tsx ×4
    tutorial|community|faq|prd-generator|mvp-generator|agents-generator|login
  components/
    Navbar.tsx  Footer.tsx  CourseCard.tsx
  lib/
    data.ts                 # 4 courses + stats 1.980 / 622
public/
wrangler.jsonc  open-next.config.ts  next.config.ts
```

## 🔜 Roadmap

- [ ] Clerk wiring (`/auth/login` redirect) + protected `/learn`
- [ ] NeonDB + Prisma — courses, orders, enrollments
- [ ] DOKU webhook `/api/doku/webhook` + QRIS polling
- [ ] AI Tools kredit (LLM untuk PRD/MVP/AGENTS.md) — 1 / 0.33 / 0.33
- [ ] Member area sertifikat + admin panel
- [ ] BunnyCDN untuk asset video/cover

## 🙏 Kredit

- Source design: https://eduwebmu.com (diaudit via browser capture 2026-10-11)
- Payment ref: `naufalirfan/qris-saurus` (DOKU QRIS dynamic)
- Built with [Next.js](https://nextjs.org) · Deployed on [Vercel](https://vercel.com)

---

MIT — bebas pakai untuk belajar. PR & issue welcome.
