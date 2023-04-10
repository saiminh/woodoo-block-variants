/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/variant-partners-query-view.js":
/*!********************************************!*\
  !*** ./src/variant-partners-query-view.js ***!
  \********************************************/
/***/ (() => {

const initParterQueries = () => {
  const pQueries = document.querySelectorAll('.partners-query');
  if (pQueries.length > 0) {
    pQueries.forEach(pQuery => {
      initPartnerQuery(pQuery);
    });
  }
};
const initPartnerQuery = pQuery => {
  const scroller = pQuery.querySelector('.wp-block-post-template');
  const onePost = pQuery.querySelector('.wp-block-post');
  let postDimensions = onePost.getBoundingClientRect();
  const navLeft = pQuery.querySelector('.partner-nav-left');
  const navRight = pQuery.querySelector('.partner-nav-right');
  navLeft.addEventListener('click', () => {
    let currentScroll = scroller.scrollLeft;
    scroller.scrollTo({
      top: 0,
      left: currentScroll - postDimensions.width,
      behavior: 'smooth'
    });
  });
  navRight.addEventListener('click', () => {
    let currentScroll = scroller.scrollLeft;
    scroller.scrollTo({
      top: 0,
      left: currentScroll + postDimensions.width,
      behavior: 'smooth'
    });
  });
  window.addEventListener('resize', () => {
    postDimensions = onePost.getBoundingClientRect();
  });
};
document.addEventListener('DOMContentLoaded', initParterQueries());

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variant_partners_query_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variant-partners-query-view.js */ "./src/variant-partners-query-view.js");
/* harmony import */ var _variant_partners_query_view_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_variant_partners_query_view_js__WEBPACK_IMPORTED_MODULE_0__);

})();

/******/ })()
;
//# sourceMappingURL=view.js.map