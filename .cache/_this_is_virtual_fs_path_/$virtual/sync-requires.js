
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/timgale/Documents/Side Projects/figclips/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/timgale/Documents/Side Projects/figclips/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/timgale/Documents/Side Projects/figclips/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/timgale/Documents/Side Projects/figclips/src/pages/index.js")),
  "component---src-pages-tips-index-js": preferDefault(require("/Users/timgale/Documents/Side Projects/figclips/src/pages/tips/index.js")),
  "component---src-pages-tips-mdx-slug-js": preferDefault(require("/Users/timgale/Documents/Side Projects/figclips/src/pages/tips/{mdx.slug}.js")),
  "component---src-templates-tags-js": preferDefault(require("/Users/timgale/Documents/Side Projects/figclips/src/templates/tags.js"))
}

