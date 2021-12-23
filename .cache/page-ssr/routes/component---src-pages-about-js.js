"use strict";
exports.id = "component---src-pages-about-js";
exports.ids = ["component---src-pages-about-js"];
exports.modules = {

/***/ "./src/components/layout.module.css":
/*!******************************************!*\
  !*** ./src/components/layout.module.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "headingContainer": () => (/* binding */ headingContainer),
/* harmony export */   "headingTagline": () => (/* binding */ headingTagline),
/* harmony export */   "heading": () => (/* binding */ heading),
/* harmony export */   "headingImage": () => (/* binding */ headingImage),
/* harmony export */   "headingLink": () => (/* binding */ headingLink),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "siteTitle": () => (/* binding */ siteTitle),
/* harmony export */   "navLinks": () => (/* binding */ navLinks),
/* harmony export */   "navLinkItem": () => (/* binding */ navLinkItem),
/* harmony export */   "navLinkText": () => (/* binding */ navLinkText),
/* harmony export */   "navLinkTextActive": () => (/* binding */ navLinkTextActive),
/* harmony export */   "video": () => (/* binding */ video),
/* harmony export */   "videoContent": () => (/* binding */ videoContent),
/* harmony export */   "post": () => (/* binding */ post),
/* harmony export */   "postFocus": () => (/* binding */ postFocus),
/* harmony export */   "postHeader": () => (/* binding */ postHeader),
/* harmony export */   "postTitle": () => (/* binding */ postTitle),
/* harmony export */   "postTags": () => (/* binding */ postTags),
/* harmony export */   "postTagContainer": () => (/* binding */ postTagContainer),
/* harmony export */   "tagContent": () => (/* binding */ tagContent)
/* harmony export */ });
// Exports
var container = "layout-module--container--eLBMS";
var headingContainer = "layout-module--heading-container--ezb4G";
var headingTagline = "layout-module--heading-tagline--5N5Mf";
var heading = "layout-module--heading--8VjLO";
var headingImage = "layout-module--heading-image--4HnCR";
var headingLink = "layout-module--heading-link--GV0R0";
var main = "layout-module--main--5VKR9";
var siteTitle = "layout-module--site-title--5N6mf";
var navLinks = "layout-module--nav-links--EROwB";
var navLinkItem = "layout-module--nav-link-item--pfCo2";
var navLinkText = "layout-module--nav-link-text--ac2nV";
var navLinkTextActive = "layout-module--nav-link-text-active--Vi5nz";
var video = "layout-module--video--qE80G";
var videoContent = "layout-module--video-content--FYuV5";
var post = "layout-module--post--WJJr3";
var postFocus = "layout-module--post-focus--9Z+4h";
var postHeader = "layout-module--post-header--CAqmD";
var postTitle = "layout-module--post-title--NrVGv";
var postTags = "layout-module--post-tags--Y9yWN";
var postTagContainer = "layout-module--post-tag-container--TSPht";
var tagContent = "layout-module--tag-content--DJB7r";


/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3159585216_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3159585216.json */ "./public/page-data/sq/d/3159585216.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ "./src/components/layout.module.css");





const Layout = ({
  pageTitle,
  children
}) => {
  const data = _public_page_data_sq_d_3159585216_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, pageTitle, " | ", data.site.siteMetadata.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("header", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.headingContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/",
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.headingLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.headingImage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.heading
  }, data.site.siteMetadata.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.headingTagline
  }, "Tips and tricks for your Figma design workflow"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinks
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/",
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkText,
    activeClassName: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkTextActive
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/about",
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkText,
    activeClassName: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkTextActive,
    partiallyActive: true
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/tips",
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkText,
    activeClassName: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.navLinkTextActive,
    partiallyActive: true
  }, "Tips")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3__.heading
  }, pageTitle), children));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
// Step 1: Import React

 // Step 2: Define your component

const AboutPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageTitle: "About"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Hi, I'm the creator of this site."));
}; // Step 3: Export your component


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ }),

/***/ "./public/page-data/sq/d/3159585216.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3159585216.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"FigClips"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-js.js.map