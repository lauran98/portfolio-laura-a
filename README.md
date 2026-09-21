# portfolio-laura-a

GIS portfolio for **Laura N. Aguilera Martin** — GIS Specialist III,
transportation and public sector geospatial solutions.

**Live site:** https://lauran98.github.io/portfolio-laura-a/

> Adding or editing content? You want **[CONTENT-GUIDE.md](CONTENT-GUIDE.md)**,
> which is written in plain language and assumes no coding. This file is the
> technical reference.

---

## What this is

A static site built with [Eleventy](https://www.11ty.dev/) (11ty). There is no
database, no backend, and no hosting bill. Each project is a single Markdown
file; the site builds itself into plain HTML and is served by GitHub Pages.

**Adding a project means adding one file** to `src/projects/`. Nothing else
needs to be touched — the card grid, the filters, the home page, the project
page, and the sitemap all pick it up from that one file.

## Repository layout

```
portfolio-laura-a/
├── .eleventy.js            # Build configuration (path prefix, collections, filters)
├── package.json            # Dependencies and the npm scripts
├── PROJECT-TEMPLATE.md     # Copy this to create a new project (not published)
├── CONTENT-GUIDE.md        # Plain-language editing guide
├── .github/workflows/
│   └── deploy.yml          # Builds and publishes on every push to main
└── src/
    ├── index.njk           # Home
    ├── about.njk  projects.njk  skills.njk
    ├── maps.njk   resume.njk    contact.njk
    ├── 404.njk             # Custom not-found page
    ├── favicon.svg  robots.txt
    ├── _data/              # Site-wide content, edited as plain data
    │   ├── site.json       # Name, title, email, links, availability
    │   ├── nav.json        # The navigation menu
    │   ├── skillGroups.json
    │   ├── resume.json
    │   └── maps.json
    ├── _includes/
    │   ├── layouts/        # base · page · project
    │   └── partials/       # nav · footer · contours · markers · project-card
    ├── projects/           # ONE MARKDOWN FILE PER PROJECT
    │   └── projects.11tydata.js   # Shared settings for every project
    └── assets/{css,js,images,documents}
```

## Running it locally

Requires [Node.js](https://nodejs.org/) 20 or newer (the deploy uses 24).

```bash
npm install
npm start
```

Eleventy serves the site and reloads on save. Because the published site lives
in a sub-folder, the dev server also uses that prefix — follow the URL it
prints.

To produce a build as it will be deployed:

```bash
npm run build       # output in _site/, with the /portfolio-laura-a/ prefix
```

To build for serving from a domain root (a custom domain, or Vercel):

```bash
npm run build:local # same output, but links resolve from /
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs
dependencies, runs `npm run build`, and publishes `_site/` to GitHub Pages over
HTTPS. Typical time from commit to live is about a minute.

### One-time GitHub Pages setup

In the repository: **Settings → Pages → Build and deployment → Source**, choose
**GitHub Actions**. (Not "Deploy from a branch" — the site needs a build step.)

### The path prefix

GitHub Pages serves this repository from a sub-folder
(`/portfolio-laura-a/`), so `.eleventy.js` sets `pathPrefix` to match, and every
internal link in a template goes through Eleventy's `url` filter. That filter is
what keeps links correct.

The prefix is read from the `PATH_PREFIX` environment variable, so nothing needs
editing to move the site:

| Where it's hosted | What to set |
|---|---|
| GitHub Pages at `/portfolio-laura-a/` | nothing — this is the default |
| A custom domain, or the user site `lauran98.github.io` | `PATH_PREFIX=/` |
| Vercel / Netlify | `PATH_PREFIX=/` |

Also update `"url"` in `src/_data/site.json`, which is used for canonical links
and link-preview metadata.

### Moving to Vercel later

1. Import the repository in Vercel.
2. Build command `npm run build`, output directory `_site`.
3. Add an environment variable `PATH_PREFIX` = `/`.
4. Update `"url"` in `src/_data/site.json` to the new domain.

No code changes are needed.

## How the project data model works

`src/projects/projects.11tydata.js` applies to every file in that folder and
sets the layout, the collection tag, and the URL — so a project's own file
carries only content. The URL comes from the file name
(`my-project.md` → `/projects/my-project/`) unless the file sets `slug:`.

The `projects` collection is sorted newest-first on the `year` field.

> **Why `year` and not `date`:** Eleventy reserves `date` and rejects values it
> cannot parse as a calendar date. A natural entry like `2023 to 2025` would
> fail the build with an opaque error, so this site uses `year`, which accepts a
> single year, a range, or nothing.

Filter buttons on the Projects page are generated from the categories and tools
actually present across the project files, via the `uniqueField` filter in
`.eleventy.js`. Adding a project with a new tool adds that filter button
automatically.

## Accessibility and performance notes

- Colour never carries meaning alone — every status and category marker pairs
  its colour with a visible text label.
- The mobile menu is progressive enhancement: with JavaScript unavailable the
  navigation still renders as a list, and the footer repeats every link.
- Project filtering is likewise progressive — the filter panel is hidden until
  its script runs, so there are never controls that do nothing.
- The hero motif is inline SVG (about 2 KB) rather than an image.
- Images are lazy-loaded. Keep uploads small; see CONTENT-GUIDE.md.
- Large GIS datasets do not belong in this repository — link out to GitHub
  Releases, cloud storage, or a data portal via a project's `dataUrl`.

## Not yet filled in

- `resumeFile` in `src/_data/site.json` — the Download résumé button appears
  once a PDF is added.
- `profileImage` in `src/_data/site.json`.
- `socialImage` in `src/_data/site.json` — an image for link previews.
- The three placeholder projects in `src/projects/` and the three placeholder
  entries in `src/_data/maps.json`.
- Project thumbnails and map images.
