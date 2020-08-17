const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Documents\\GitHub\\gatsby\\learning-gatsby\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Documents\\GitHub\\gatsby\\learning-gatsby\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("D:\\Documents\\GitHub\\gatsby\\learning-gatsby\\src\\pages\\about.js"))),
  "component---src-pages-events-js": hot(preferDefault(require("D:\\Documents\\GitHub\\gatsby\\learning-gatsby\\src\\pages\\events.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Documents\\GitHub\\gatsby\\learning-gatsby\\src\\pages\\index.js"))),
  "component---src-templates-article-js": hot(preferDefault(require("D:\\Documents\\GitHub\\gatsby\\learning-gatsby\\src\\templates\\article.js"))),
  "component---src-templates-articles-js": hot(preferDefault(require("D:\\Documents\\GitHub\\gatsby\\learning-gatsby\\src\\templates\\articles.js"))),
  "component---src-templates-subjects-js": hot(preferDefault(require("D:\\Documents\\GitHub\\gatsby\\learning-gatsby\\src\\templates\\subjects.js")))
}

