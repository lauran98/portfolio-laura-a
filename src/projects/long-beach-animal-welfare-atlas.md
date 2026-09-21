---
title: Long Beach Animal Welfare Atlas
summary: Open-data spatial targeting for community-cat spay/neuter programs.
category: Spatial analysis
status: In progress
year: 2026
role: Solo — analysis, data, and web map
featured: true

tools: [Python, GeoPandas, MapLibre, QGIS]
skills: [Hotspot analysis, Access-gap analysis, Data aggregation, Web mapping]

thumbnail: ""
thumbnailAlt: ""

problem: >-
  Long Beach rescues and the city shelter have limited spay/neuter capacity and
  no map showing where to concentrate it.
approach: >-
  Hotspot and access-gap analysis on the City's open shelter-intake data,
  privacy-aggregated, published as an interactive map.
result: >-
  An open, reusable targeting tool showing where intervention does the most
  good, with impact tracked over time.

# Links stay empty until they point at something real. Blank fields do not
# render, so nothing advertises a repository or a live map before it exists.
githubUrl: ""
interactiveMapUrl: ""
reportUrl: ""
dataUrl: ""

dataSources:
  - name: City of Long Beach open shelter-intake data
    url: ""
  - name: US Census Bureau — American Community Survey block groups
    url: ""

stages:
  - { name: Idea,        state: done }
  - { name: Data,        state: done }
  - { name: Processing,  state: current }
  - { name: Analysis,    state: todo }
  - { name: Cartography, state: todo }
  - { name: Published,   state: todo }

primaryMap:
  src: ""
  alt: ""
  caption: The primary intake-density map will be added once the analysis is complete.
---

## Research question

Where in Long Beach would additional spay/neuter capacity reduce shelter intake
the most, and which of those areas are currently furthest from an existing
low-cost clinic?

## Data

The analysis is built on the City of Long Beach's open animal-shelter intake
records, joined to American Community Survey block groups for population and
income context. Intake records are aggregated before mapping so that no
individual address is identifiable.

*Data-source links will be added here once the working dataset is finalised.*

## Methods

*To be completed as the analysis progresses.* The intended workflow is:

1. Clean and geocode the intake records, discarding rows without a usable location.
2. Aggregate intake counts to block groups and normalise by household count.
3. Run a hotspot analysis to find statistically significant clusters of intake.
4. Build an access-gap surface from travel distance to existing low-cost clinics.
5. Combine the two into a simple targeting score, and publish it as a web map.

## Results

*Pending.* This section will carry the finished maps, the targeting score, and
a short written read of what the pattern actually shows.

## Limitations

Shelter-intake records describe animals that reached the shelter, not the whole
free-roaming population — areas with low intake may reflect low reporting rather
than low need. Any targeting score built from this data inherits that bias, and
the published map will say so plainly.

## What I learned

*To be written up once the project is further along.*

## Future improvements

Track intake over time in the same areas after intervention, so the map becomes
a before/after record rather than only a targeting tool.
