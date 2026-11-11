# Long Island Ink Tattoos & Piercings website

React + Vite, no extra runtime dependencies.

## Run
    npm install
    npm run dev        # local development
    npm run build      # outputs dist/
    npm run preview    # test the production build

## Deploy (Vercel or Cloudflare Pages)
Build command `npm run build`, output directory `dist`. No env vars, no client-side routing (single page), so no rewrite rules are needed.

## After you have the live HTTPS URL
1. Add `<link rel="canonical" href="https://YOUR-URL/">` and `"url": "https://YOUR-URL/"` in the JSON-LD in `index.html`.
2. Add `public/sitemap.xml` with that URL and a `Sitemap:` line in `public/robots.txt`.
3. Verify the site in Google Search Console, then add the URL under "Add website" on the Google Maps listing (owner must be authorized). Approval is decided by Google.

## Updating info
Edit `src/data/businessInfo.js` and keep the JSON-LD in `index.html` in sync.

## Photos
Facebook and Instagram block automated downloads, so none were pulled. Save owner-approved photos into `public/photos/` and list them in `photos` in `businessInfo.js`; the "Our work" section appears automatically. Do not use the Google Maps or customer photos without permission.

## Needs verification
- "All piercings $50": taken from the Google listing title; confirm what it covers (jewelry, etc.).
- Wednesday hours (the listing showed a Veterans Day holiday note).
- Artist names appear only in customer reviews, so none are listed.
