"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
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
/* harmony export */   "postFocus": () => (/* binding */ postFocus)
/* harmony export */ });
// Exports
var container = "layout-module--container--eLBMS";
var headingContainer = "layout-module--heading-container--ezb4G";
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


/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout.module.css */ "./src/components/layout.module.css");
// Step 1: Import React

 // import Layout from '../components/layout'
// import { StaticImage } from 'gatsby-plugin-image'

 // Step 2: Define your component

const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _components_layout_module_css__WEBPACK_IMPORTED_MODULE_2__.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "FigClips | Figma tips and resources"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _components_layout_module_css__WEBPACK_IMPORTED_MODULE_2__.headingContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: _components_layout_module_css__WEBPACK_IMPORTED_MODULE_2__.headingLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: _components_layout_module_css__WEBPACK_IMPORTED_MODULE_2__.headingImage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: _components_layout_module_css__WEBPACK_IMPORTED_MODULE_2__.heading
  }, "FigClips"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _components_layout_module_css__WEBPACK_IMPORTED_MODULE_2__.main
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Check back soon"))) // <Layout pageTitle="Home">
  //   <p>Welcome to FigClips! Your regular dose of Figma tips.</p>
  //   <StaticImage
  //     alt="Text image"
  //     src="https://via.placeholder.com/500"
  //   />
  // </Layout>
  ;
}; // Step 3: Export your component


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map