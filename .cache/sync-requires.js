
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/timgale/Documents/Side Projects/figclips/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/timgale/Documents/Side Projects/figclips/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/timgale/Documents/Side Projects/figclips/src/pages/about.js")),
  "component---src-pages-blog-index-js": preferDefault(require("/Users/timgale/Documents/Side Projects/figclips/src/pages/blog/index.js")),
  "component---src-pages-blog-mdx-slug-js": preferDefault(require("/Users/timgale/Documents/Side Projects/figclips/src/pages/blog/{mdx.slug}.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/timgale/Documents/Side Projects/figclips/src/pages/index.js"))
}

