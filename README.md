# Nitish Kumar Singh — Portfolio

A responsive, resume-driven developer portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Edit portfolio content

Update `src/data/portfolio.ts` to change personal information, skills, experience, education, or certifications. Replace the profile placeholder in `src/components/Portfolio.tsx` when a suitable profile photo is available.

The downloadable resume is stored at `public/resume/Nitish-Kumar-Singh-Resume.pdf`.

## Local development

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Vite.

## Production build

```bash
pnpm build
pnpm preview
```

The optimized static site is written to `dist/`.

## Deploy to Vercel

### Git workflow

1. Push this project to a Git repository on GitHub, GitLab, or Bitbucket.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel will detect the Vite preset. The included `vercel.json` sets the build command to `pnpm build` and output directory to `dist`.
4. Select **Deploy**.

### Vercel CLI

```bash
npm install -g vercel
vercel
```

Run the command from the project root and follow the prompts. After choosing a final domain, replace the relative Open Graph image URL in `index.html` with the full deployed URL for maximum social-sharing compatibility.
