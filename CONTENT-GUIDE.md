# How to update your site

This guide assumes no coding. Every task below is "edit one file, save, done."

**The one rule that matters:** when you save a change to the `main` branch, the
site rebuilds and republishes itself automatically, in about a minute. You never
run a build, upload files, or touch a server.

Your site lives at **https://lauran98.github.io/portfolio-laura-a/**

---

## The easiest way to edit: directly on GitHub.com

You do not need to install anything.

1. Go to https://github.com/lauran98/portfolio-laura-a
2. Click into the file you want to change.
3. Click the **pencil icon** (top right of the file) to edit it.
4. Make your change.
5. Scroll to the bottom, type a short note about what you changed
   (e.g. "Add urban heat project"), and click **Commit changes**.
6. Wait about a minute, then reload your site. The change is live.

That's the whole publishing process. Steps 5 and 6 are what "publishing" means
everywhere else in this guide.

### Checking that it worked

Click the **Actions** tab at the top of the repository. The most recent entry
shows a spinning dot while it builds, then a green check when your change is
live. A red X means something in the file was mistyped — click it to see the
error, or undo your last change and try again.

---

## Where everything lives

| What you want to change | File to edit |
|---|---|
| Your name, title, email, links, availability | `src/_data/site.json` |
| A project (or adding one) | a file in `src/projects/` |
| Your skills and levels | `src/_data/skillGroups.json` |
| The Maps & Visualizations gallery | `src/_data/maps.json` |
| Your résumé | `src/_data/resume.json` |
| About page wording | `src/about.njk` |
| Contact page wording | `src/contact.njk` |
| Home page wording | `src/index.njk` |
| Images and the résumé PDF | `src/assets/images/`, `src/assets/documents/` |

---

## Add a new project

**This is one file. You never edit anything else.**

1. Open **`PROJECT-TEMPLATE.md`** in the repository and copy everything in it.
2. Go to the `src/projects/` folder on GitHub and click **Add file → Create new file**.
3. Name the file after the project, in lowercase with hyphens, ending in `.md`:
   `urban-heat-island-study.md`. **That file name becomes the web address**
   (`.../projects/urban-heat-island-study/`).
4. Paste the template in and fill it out.
5. Commit. The project now appears on the Projects page, in the filters, and on
   the home page automatically.

### The part between the two `---` lines

That block at the top is the project's settings. A few things to know:

- **Keep the spacing.** Indentation is meaningful. If a line is indented two
  spaces in the template, keep it indented two spaces.
- **Blank is fine.** `githubUrl: ""` means "no link yet," and the site simply
  won't show a GitHub link. It will not show a broken or empty one. Fill it in
  later and the link appears on its own.
- **`status`** must be one of: `Planned`, `In progress`, `Completed`,
  `Updating`, `Archived`, `Placeholder`. Spelled exactly like that.
- **`category`** must be one of: `Cartography`, `Spatial analysis`,
  `Web mapping`, `Remote sensing`, `Python/GIS automation`,
  `Data visualization`, `Environmental GIS`, `Urban GIS`,
  `Transportation GIS`.
- **`featured: true`** puts the project in the big slot on the home page. Only
  the newest featured project appears there, so set the old one back to `false`.
- If a value contains a colon (`:`), wrap the whole value in quotes:
  `title: "Phase 2: corridor review"`.

### The part below the second `---`

That's the write-up, in plain Markdown:

- `## Heading` makes a section heading.
- `**bold**`, `*italic*`.
- A line starting with `- ` makes a bullet; `1. ` makes a numbered list.
- A blank line between paragraphs.

Keep the headings from the template (Research question, Data, Methods, Results,
Limitations, What I learned, Future improvements) so projects read consistently
— but delete any you genuinely have nothing to say about.

---

## Replace or add an image

1. Go to `src/assets/images/` on GitHub and click **Add file → Upload files**.
   Making a folder per project keeps it tidy: `src/assets/images/lb-atlas/`.
2. Drag the image in and commit.
3. In the project file, point at it:

   ```
   thumbnail: /assets/images/lb-atlas/thumb.png
   thumbnailAlt: Map of Long Beach shaded by shelter intake density
   ```

**Two things worth doing every time:**

- **Always write the `Alt` text.** One sentence describing what the map shows —
  not "map image." Someone using a screen reader gets only that sentence, and
  search engines read it too.
- **Shrink the file first.** Aim for under 300 KB. A card thumbnail only needs
  to be about 800 px wide; a main map about 1600 px. Preview on your Mac can do
  this: open the image, then Tools → Adjust Size. Large images are the single
  most common reason a portfolio site feels slow.

---

## Edit a project's text

Open the project's file in `src/projects/`, click the pencil, change the words,
commit. That's it.

---

## Add a GitHub or map link to a project

In the project's file, fill in whichever applies:

```
githubUrl: "https://github.com/lauran98/long-beach-atlas"
interactiveMapUrl: "https://lauran98.github.io/long-beach-atlas/"
reportUrl: ""
dataUrl: ""
```

The links appear in the project's sidebar as soon as you fill them in. While
they're empty, nothing about a repository or a live map is shown at all — so the
site never advertises something that doesn't exist yet.

---

## Add your résumé PDF (download button)

1. Upload the PDF to `src/assets/documents/`.
2. In `src/_data/site.json`, set:

   ```
   "resumeFile": "/assets/documents/laura-aguilera-resume.pdf",
   ```

The **Download résumé (PDF)** button appears on the Résumé page automatically.
Until then, the page shows a small "Downloadable PDF to be added" note instead
of a button that doesn't work.

To update the résumé text on the page itself, edit `src/_data/resume.json`.

---

## Change your name, email, or links

Everything personal lives in **`src/_data/site.json`** and is used everywhere on
the site — header, footer, contact page, link previews. Change it once, it
changes everywhere.

```
"email": "l_123aguilera@hotmail.com",
"linkedin": "https://www.linkedin.com/in/laura-aguilera-",
"github": "https://github.com/lauran98",
"availability": "Available for contract & subcontract work",
"available": true,
```

Set `"available": false` to hide the availability badge everywhere.

Add `"profileImage": "/assets/images/laura.jpg"` and your photo appears on the
About page. Leave it `""` and that space simply isn't there.

---

## Add a skill

Open `src/_data/skillGroups.json`. Find the group, add a line:

```
{ "name": "PostGIS", "level": "Developing" },
```

`level` must be one of: `Advanced`, `Comfortable`, `Developing`, `Exploring`.

Optional extras on any skill:

```
{ "name": "PostGIS", "level": "Developing",
  "note": "Short sentence about how you use it.",
  "project": "/projects/some-project/", "projectName": "Some Project" }
```

To add a whole new group, copy an existing `{ "group": ..., "skills": [...] }`
block. **Watch the commas** — every entry needs a comma after it except the last
one in a list.

---

## Add a map to the Maps & Visualizations gallery

Open `src/_data/maps.json` and add an entry. The gallery handles both maps
hosted on this site and maps that live somewhere else:

```
{
  "title": "Transit Need Index, Beloit WI",
  "context": "Block-group index combining five measures of transit need.",
  "year": "2025",
  "software": "ArcGIS Pro",
  "image": "/assets/images/maps/transit-need.png",
  "imageAlt": "Choropleth map of Beloit shaded by transit need index",
  "externalUrl": "",
  "project": "",
  "projectName": "",
  "placeholder": false
}
```

- For an **externally hosted** interactive map (ArcGIS Online, StoryMaps,
  Tableau Public, a Leaflet or MapLibre map on another site), set `externalUrl`
  and leave `image` blank if you don't have a still. Nothing has to be hosted
  here.
- Set `"placeholder": false` on real entries — that's what removes the
  "Placeholder" label.
- Delete the three placeholder entries once you have real ones.

---

## Publishing changes

Covered at the top, but to say it once more plainly:

**Commit on `main` → wait about a minute → the site is updated.**

If you ever work on the files on your own computer instead of on GitHub.com, the
sequence is `git add .`, then `git commit -m "what changed"`, then `git push`.

---

## If something breaks

Almost every build failure is one of these:

1. **A missing or extra comma** in a `.json` file. In JSON, every item needs a
   comma after it *except the last one*.
2. **A missing quote mark** — JSON values need `"quotes around them"`.
3. **Wrong indentation** in the top block of a project file.
4. **A colon inside a value** that isn't quoted. Use
   `title: "Phase 2: corridor review"`.

**How to undo:** on GitHub, open the file, click the **History** button, find
the version from before your change, and click the **...** menu → **Revert**.
Or simply edit the file again and put it back the way it was. Nothing is ever
lost, and the live site keeps showing the last version that built successfully.

---

## Working on your own computer (optional)

You do not need this — everything above works in a browser. But if you want to
preview changes before publishing:

1. Install Node.js from https://nodejs.org (the LTS version).
2. Open Terminal, and run these once:

```bash
git clone https://github.com/lauran98/portfolio-laura-a.git
cd portfolio-laura-a
npm install
```

3. Then each time you want to preview:

```bash
npm start
```

Open the address it prints (usually http://localhost:8080). The page reloads as
you save. Press `Ctrl+C` to stop.
