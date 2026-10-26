# Updraft landing page

One-page site for Updraft: pipeline lift for complex climate tech.

- **Design:** Iris's direction C4 · Marker + Ember, approved on the design canvas (Oct 26, 2026).
- **Copy:** Peitho's "Updraft: one-page website copy", with Viv's edits through Oct 26.
- **Stack:** plain HTML, CSS and a few lines of JavaScript. No build step and no dependencies.
  It's a single page, so a framework would add weight without adding anything.
  If the site grows past one page, move it to Astro (the studio default) and keep these files as the starting point.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The page, with all the copy, the SEO tags and structured data (ProfessionalService, Offer, FAQPage) |
| `assets/css/site.css` | Styles. Colour and type tokens are at the top (`:root`) |
| `assets/js/site.js` | Analytics click events and the rising-line animation |
| `assets/fonts/` | Newsreader and Hanken Grotesk, self-hosted and subset to Latin (SIL Open Font License, licences included) |
| `assets/img/` | Headshots, monochrome client logos, sky photo, share image (`og.png`) |
| `favicon.svg`, `robots.txt`, `sitemap.xml` | Site basics |
| `_headers` | Caching and security headers (Cloudflare Pages and Netlify read this file) |

## Editing

- **Copy:** edit the text in `index.html`. Copy changes go through Peitho first.
  The FAQ also appears in the `FAQPage` structured data in the `<head>`. Update both.
- **Booking link:** every "Book a call" button links to `https://calendly.com/hello-vivrames/30min`.
  To change it, find and replace that URL in `index.html`.
- **Colours and fonts:** the tokens at the top of `site.css`. Brand changes go through Iris.

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (Cloudflare Pages)

1. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, then pick `VivRam23/updraft-site`.
2. Build settings: framework **None**, build command **empty**, output directory **`/`**.
3. Deploy. The site goes live at `https://updraft-site.pages.dev`.
4. Custom domain: **Custom domains → Set up a domain**. Then replace `updraft-site.pages.dev` in
   `index.html` (canonical, og:url, og:image, structured data), `robots.txt` and `sitemap.xml`.

Netlify or Vercel work the same way: no build command, publish directory is the repo root.

## Open items

- [ ] Estee's Hanergy figure in USD (currently £7M)
- [ ] Shared contact email for the footer
- [ ] Analytics: add Plausible or GA4 in `<head>`. Events are already wired: `cta_click`, `linkedin_click`, `faq_open`
- [ ] Domain: buy, connect, then update the URLs listed above
- [ ] Logo permission from each company; sharper source files for NewMotion and Hanergy
- [ ] Iris to add the yellow-on-dark text and warm grey to the brand guidelines and issue tokens
- [ ] Answers ready for the two Capture6 claims (four industrial projects; 4× inbound on under $20K)
- [ ] Client quote, when available, under the logo strip
- [ ] Name trademark check before investing further in the mark
