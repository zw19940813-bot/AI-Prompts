# AI Prompt Refinement

A premium English editorial site about AI prompt refinement and AI video generation, built for Vercel.

## Local Development

```bash
npm install
npm run dev
```

## Deploy

Upload the full project to a GitHub repository, import it in Vercel, and deploy.

## Content Admin

The site can read articles from Sanity. If Sanity is not configured, it falls back to the sample articles in `lib/articles.ts`.

Create these environment variables in Vercel:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-06-25
NEXT_PUBLIC_SANITY_STUDIO_URL=https://your-project.sanity.studio
SANITY_API_TOKEN=
```

Use `sanity/article-schema.js` as the Article schema in Sanity Studio.

After setup, publish articles in Sanity. The website refreshes content every 60 seconds.
