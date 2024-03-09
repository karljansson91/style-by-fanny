
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/karl.jansson/Code/style-by-fanny/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/karl.jansson/Code/style-by-fanny/src/pages/404.js")),
  "component---src-pages-about-index-js": preferDefault(require("/Users/karl.jansson/Code/style-by-fanny/src/pages/about/index.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/karl.jansson/Code/style-by-fanny/src/pages/index.js")),
  "component---src-pages-projekt-index-js": preferDefault(require("/Users/karl.jansson/Code/style-by-fanny/src/pages/projekt/index.js")),
  "component---src-pages-tjanster-index-js": preferDefault(require("/Users/karl.jansson/Code/style-by-fanny/src/pages/tjanster/index.js"))
}

