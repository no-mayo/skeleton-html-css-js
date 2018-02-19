// Welcome to index.js
//
// You can write ES6 here! It will be compiled by webpack using Babel into ES5.
//
// ヽ(´▽`)/

// Stricter checking of small-but-often-problematic JS errors
"use strict";

// Instruct webpack to do Sass compilation
const sass = require("../sass/style.scss");

// Load dependencies
const userAgent = new UserAgent().parse(navigator.userAgent);

// Store any other constant values for this project
const greeting = "Hola World";

document.addEventListener("DOMContentLoaded", function() {
  let greetingEl = document.querySelector(".js-greeting");
  let loadingOverlay = document.querySelector(".js-overlay");

  if (greetingEl) {
    greetingEl.innerText = greeting;
  }

  // Use the userAgent information to add useful classes to the body element,
  // which can be used to finely adjust styling when needed
  applyUserAgentClasses(userAgent);

  // Fade-out any loading-overlay once the page has 'settled'
  if (loadingOverlay) {
    loadingOverlay.classList.remove("visible"); // this class has an animation
    window.setTimeout(function() {
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
