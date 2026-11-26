# Tahir Aslam — Portfolio

Single-page personal portfolio built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**, ready for deployment on **Vercel**.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Add your resume PDF at `public/Tahir_Aslam_Resume.pdf` so the **Download Resume** button serves your resume directly.

3. (Optional) Copy `.env.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_SITE_URL=https://your-portfolio-domain.vercel.app
FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Editing Content

All portfolio copy, skills, projects, experience entries, and social links live in one file:

- `src/data/portfolio.ts`

To replace the project GitHub link placeholders, update each project's `githubUrl` and set `isPlaceholderLink: false`.

## Production Check

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Keep the default Next.js build settings (`next build`).
4. Add environment variables in **Settings → Environment Variables**:
   - `NEXT_PUBLIC_SITE_URL` — your Vercel or custom domain (e.g. `https://tahir-aslam.vercel.app`)
   - `FORMSPREE_ENDPOINT` — your Formspree endpoint for contact form email delivery
5. Click **Deploy**.
