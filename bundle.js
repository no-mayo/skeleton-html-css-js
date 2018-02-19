/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Welcome to index.js
//
// You can write ES6 here! It will be compiled by webpack using Babel into ES5.
//
// ヽ(´▽`)/

// Stricter checking of small-but-often-problematic JS errors


// Instruct webpack to do Sass compilation

var sass = __webpack_require__(0);

// Load dependencies
var userAgent = new UserAgent().parse(navigator.userAgent);

// Store any other constant values for this project
var greeting = "Hola World";

document.addEventListener("DOMContentLoaded", function () {
  var greetingEl = document.querySelector(".js-greeting");
  var loadingOverlay = document.querySelector(".js-overlay");

  if (greetingEl) {
    greetingEl.innerText = greeting;
  }

  // Use the userAgent information to add useful classes to the body element,
  // which can be used to finely adjust styling when needed
  applyUserAgentClasses(userAgent);

  // Fade-out any loading-overlay once the page has 'settled'
  if (loadingOverlay) {
    loadingOverlay.classList.remove("visible"); // this class has an animation
    window.setTimeout(function () {
      loadingOverlay.style.display = "none";
    }, 500); // after the animation has finished
  }
});

function applyUserAgentClasses(userAgent) {
  document.body.classList.add(userAgent.browser.toLowerCase());

  if (userAgent.isDesktop) {
    document.body.classList.add("desktop");
  } else if (userAgent.isMobile) {
    document.body.classList.add("mobile");
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map