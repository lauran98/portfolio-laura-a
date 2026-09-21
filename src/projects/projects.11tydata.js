// Settings shared by every project file in this folder.
//
// Because of this file, a project's own Markdown file does not need to say
// which layout to use or how its web address is built — it only carries the
// content. Adding a project really is adding one file.

module.exports = {
  layout: "layouts/project.njk",
  tags: "projects",

  eleventyComputed: {
    // The page address. By default it comes from the file name, so
    // `urban-heat-island-study.md` becomes /projects/urban-heat-island-study/.
    // Setting `slug:` in a project's front-matter overrides that.
    permalink: (data) => `/projects/${data.slug || data.page.fileSlug}/`,

    // Project pages share their summary as the page description used by search
    // engines and link previews.
    description: (data) => data.description || data.summary,

    // A project thumbnail doubles as its social-share image.
    socialImage: (data) => data.socialImage || data.thumbnail || null,

    ogType: () => "article",
  },
};
