---
# ---------------------------------------------------------------------------
# PROJECT TEMPLATE — copy this file into src/projects/ and rename it.
#
# The file name becomes the web address. `urban-heat-island-study.md` becomes
#   .../projects/urban-heat-island-study/
# Use lowercase letters and hyphens only — no spaces, no capitals.
#
# This file lives OUTSIDE src/, so it is never published. It is here to copy.
#
# Every field below is optional except `title`, `summary`, `category` and
# `status`. Leave a field as "" and the site simply does not show it — you will
# not get an empty label or a dead link.
# ---------------------------------------------------------------------------

title: The Project Name
summary: One sentence, plain language, that says what this project is.

# Pick ONE category, spelled exactly as in this list:
#   Cartography · Spatial analysis · Web mapping · Remote sensing
#   Python/GIS automation · Data visualization · Environmental GIS
#   Urban GIS · Transportation GIS
category: Spatial analysis

# Pick ONE status, spelled exactly as in this list:
#   Planned · In progress · Completed · Updating · Archived · Placeholder
status: In progress

# A year, or a range like "2023 to 2025". Newest projects sort to the top.
# (This field is called `year`, not `date` — see the note at the end.)
year: 2026

role: Solo — analysis, data, and web map

# `true` puts this project in the Featured slot on the home page.
# Only the newest featured project is shown there.
featured: false

tools: [ArcGIS Pro, Python, QGIS]
skills: [Spatial joins, Network analysis]

# Preview image for the card and for link previews when the page is shared.
# Put the file in src/assets/images/ and write the path as shown.
thumbnail: ""
thumbnailAlt: ""

# The three-line story shown on the card and at the top of the project page.
problem: >-
  What was wrong, missing, or undecided.
approach: >-
  What you did about it.
result: >-
  What came out of it.

# Links. Leave blank until they point at something real.
githubUrl: ""
interactiveMapUrl: ""
reportUrl: ""
dataUrl: ""

dataSources:
  - name: Name of the dataset
    url: ""

# OPTIONAL progress indicator. Delete this whole block if you do not want it.
# Not every project runs through every stage — only list the stages this
# project actually has. `state` is done, current, or todo.
stages:
  - { name: Idea,        state: done }
  - { name: Data,        state: done }
  - { name: Processing,  state: current }
  - { name: Analysis,    state: todo }
  - { name: Cartography, state: todo }
  - { name: Published,   state: todo }

# OPTIONAL main map image.
primaryMap:
  src: ""
  alt: ""
  caption: ""

# OPTIONAL extra images. Delete if unused.
# gallery:
#   - src: /assets/images/my-project/detail.png
#     alt: Describe what the map shows
#     caption: A short caption

# OPTIONAL embedded interactive map. Delete if unused.
# The description matters: it is what makes the map understandable to someone
# who cannot or does not interact with it.
# embeds:
#   - url: https://example.com/embed/my-map
#     title: Intake density map
#     description: An interactive version of the map above, with per-block-group figures on hover.
#     externalUrl: https://example.com/my-map

# OPTIONAL before/after pair. Delete if unused.
# comparison:
#   heading: Before and after
#   before: { src: "", alt: "", label: "Before", caption: "" }
#   after:  { src: "", alt: "", label: "After",  caption: "" }

# OPTIONAL collapsible technical detail. Delete if unused.
# technical:
#   - { label: Coordinate system, value: "NAD 1983 StatePlane California VI" }
#   - { label: Software, value: "ArcGIS Pro 3.3, Python 3.11" }
---

## Research question

What you set out to answer.

## Data

Where the data came from and anything important about its quality or limits.

## Methods

How you did it. A numbered list works well here.

## Results

What the analysis actually showed.

## Limitations

What this work does not prove, and where the data is weak. This section is
worth writing — it reads as competence, not weakness.

## What I learned

## Future improvements

---

NOTE ON `year` vs `date`: the website builder reserves the word `date` for its
own use and rejects anything that is not a precise calendar date, which would
break the build on a perfectly reasonable entry like "2023 to 2025". This site
uses `year` instead, which accepts a year, a range, or nothing at all.
