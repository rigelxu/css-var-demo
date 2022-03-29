import cssVars from "css-vars-ponyfill";
import { css_beautify } from "js-beautify";

import "./base.css";
import "./demo.css";

cssVars({
  // DEMO: Process only demo.css file
  include: 'style[id*="demo.css"]',
  // DEMO: Treat modern browsers as legacy
  onlyLegacy: false,

  // DEMO: Toggles to see results
  // ----------------------------------------
  // preserveStatic: false,
  // preserveVars: true,
  // updateURLs: false,
  // variables: { '--color': 'purple' },
  // ----------------------------------------

  onSuccess(cssText, elm, url) {
    const srcElm = document.querySelector("#src");

    srcElm.textContent += cssText;
  },
  onComplete(cssText, styleNodes, cssVariables, benchmark) {
    const outElm = document.querySelector("#out");

    // Format CSS (external library)
    cssText = css_beautify(cssText);

    // Update <code> tag with CSS result
    outElm.textContent = cssText;
  }
});
