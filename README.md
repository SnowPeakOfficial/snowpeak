This is a [Next.js](https://nextjs.org) project for SnowPeak.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment variables

Create a `.env.local` like:

```
NEXT_PUBLIC_SITE_URL=https://snowpeak.ca
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=owner@example.com
CONTACT_FROM_EMAIL=contact@snowpeak.ca
```

## Contact API

- POST `/api/contact` with `{ name, email, projectType, budget, timeline, description, turnstileToken }`.
- Validates input (Zod), verifies Turnstile CAPTCHA, and emails via Resend.
