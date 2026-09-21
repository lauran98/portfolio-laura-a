// Eleventy configuration.
//
// Two things here are worth knowing if you ever move the site:
//
// 1. PATH_PREFIX. GitHub Pages serves this repo at
//    https://lauran98.github.io/portfolio-laura-a/ — note the sub-folder. Eleventy
//    needs to know about that sub-folder so links don't break. If the site ever
//    moves to a custom domain or to Vercel (where it would live at the root),
//    set PATH_PREFIX=/ and nothing else has to change.
//
// 2. Every internal link in a template runs through the `url` filter, e.g.
//    href="{{ '/about/' | url }}". That filter is what applies the prefix above.

module.exports = function (eleventyConfig) {
  // Static files are copied through untouched.
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  // Re-run the dev server when CSS or JS changes.
  eleventyConfig.addWatchTarget("src/assets/");

  // --- Collections -------------------------------------------------------

  // Every project, newest first. A project is any .md file in src/projects/.
  eleventyConfig.addCollection("projects", (collection) =>
    collection
      .getFilteredByTag("projects")
      .sort((a, b) => projectSortKey(b) - projectSortKey(a))
  );

  // The subset flagged `featured: true` in front-matter.
  eleventyConfig.addCollection("featuredProjects", (collection) =>
    collection
      .getFilteredByTag("projects")
      .filter((item) => item.data.featured)
      .sort((a, b) => projectSortKey(b) - projectSortKey(a))
  );

  // --- Filters -----------------------------------------------------------

  // Turn a list of projects into the sorted, de-duplicated set of values found
  // in one of their fields. Used to build the filter buttons on /projects/ so
  // that adding a project with a new tool or category needs no code change.
  eleventyConfig.addFilter("uniqueField", (projects, field) => {
    const seen = new Set();
    for (const project of projects || []) {
      const value = project.data[field];
      for (const entry of Array.isArray(value) ? value : [value]) {
        if (entry) seen.add(String(entry));
      }
    }
    return [...seen].sort((a, b) => a.localeCompare(b));
  });

  // Lowercase, hyphenated version of a label, for use in HTML attributes.
  eleventyConfig.addFilter("handle", (value) =>
    String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  );

  return {
    pathPrefix: process.env.PATH_PREFIX || "/portfolio-laura-a/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};

// Projects are sorted by their `year` field, newest first.
//
// The field is called `year` rather than `date` on purpose: Eleventy reserves
// `date` for its own use and rejects anything that is not a real date, which
// would make a perfectly reasonable entry like `2023 to 2025` break the build
// with a confusing error. `year` accepts a single year, a range, or nothing.
//
// The value may be "2026", "2023 to 2025", or missing, so take the last
// 4-digit year found in it and fall back to 0.
function projectSortKey(item) {
  const years = String(item.data.year || "").match(/\d{4}/g);
  return years ? Number(years[years.length - 1]) : 0;
}
