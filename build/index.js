/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/row.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/row.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const row = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M9.2 6.5H4V8h5.2c.3 0 .5.2.5.5v7c0 .3-.2.5-.5.5H4v1.5h5.2c1.1 0 2-.9 2-2v-7c0-1.1-.8-2-2-2zM14.8 8H20V6.5h-5.2c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2H20V16h-5.2c-.3 0-.5-.2-.5-.5v-7c-.1-.3.2-.5.5-.5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (row);
//# sourceMappingURL=row.js.map

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variant_columns_responsive_borders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variant-columns-responsive-borders.js */ "./src/variant-columns-responsive-borders.js");
/* harmony import */ var _variant_scrolling_row_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variant-scrolling-row.js */ "./src/variant-scrolling-row.js");
/* harmony import */ var _variant_partners_query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variant-partners-query.js */ "./src/variant-partners-query.js");
/* harmony import */ var _variant_careers_query_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variant-careers-query.js */ "./src/variant-careers-query.js");
/* harmony import */ var _variant_row_3colDesktop_2colMobile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variant-row-3colDesktop-2colMobile.js */ "./src/variant-row-3colDesktop-2colMobile.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");







/***/ }),

/***/ "./src/variant-careers-query.js":
/*!**************************************!*\
  !*** ./src/variant-careers-query.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/query', {
  name: 'careers-query',
  title: 'Job Query',
  description: 'Displays a list of jobs',
  scope: ['inserter'],
  keywords: ['query', 'career', 'jobs'],
  attributes: {
    className: 'careers-query',
    namespace: 'careers-query',
    query: {
      postType: 'careers',
      perPage: 100,
      offset: 0
    }
  },
  allowedControls: [],
  innerBlocks: [['core/post-template', {}, [['core/group', {
    className: 'careers-query-wrapper',
    style: {
      "spacing": {
        "padding": {
          "top": "0",
          "right": "0",
          "left": "0",
          "bottom": "var:preset|spacing|s"
        }
      }
    }
  }, [['create-block/careers-block']]]]], ['core/query-no-results', {
    className: 'careers-query-no-results',
    title: 'No Jobs Found',
    description: 'There are no jobs available at this time. Please check back later.'
  }]]
});

/***/ }),

/***/ "./src/variant-columns-responsive-borders.js":
/*!***************************************************!*\
  !*** ./src/variant-columns-responsive-borders.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__);



const threeColRespBordersIcon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.SVG, {
  xmlns: "http://www.w3.org/2000/SVG",
  viewBox: "0 0 48 48"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_2__.Path, {
  d: "M14.7 35h1.4v1h-1.4zM20.4 35h-.9V13h.9v-1h-3.3v1h.4v22h-.4v1h3.3zM12.4 35h1.4v1h-1.4zM26 12h1.4v1H26zM36.5 35h1.6v1h-1.6zM21.3 12h1.4v1h-1.4zM10 35h1.4v1H10zM14.7 12h1.4v1h-1.4zM12.4 12h1.4v1h-1.4zM10 12h1.4v1H10zM23.7 12h1.4v1h-1.4zM34 35h1.6v1H34zM31.5 35h1.6v1h-1.6zM36.5 12h1.6v1h-1.6zM26 35h1.4v1H26zM21.3 35h1.4v1h-1.4zM34 12h1.6v1H34zM23.7 35h1.4v1h-1.4zM30.6 35h-.1V13h.1v-1h-2.2v1h.1v22h-.1v1h2.2zM31.5 12h1.6v1h-1.6zM7 31.3h1v1.6H7zM8 14.2V13h1.1v-1H9c-1.1 0-2 .9-2 2v.2h1zM7 26h1v1.6H7zM7 28.6h1v1.6H7zM7 20.6h1v1.6H7zM8 34H7c0 1.1.9 2 2 2h.1v-1H8v-1zM7 23.3h1v1.6H7zM7 15.3h1v1.6H7zM7 18h1v1.6H7zM40 26h1v1.6h-1zM40 31.3h1v1.6h-1zM40 28.6h1v1.6h-1zM40 23.3h1v1.6h-1zM40 14.2h1V14c0-1.1-.9-2-2-2v1h1v1.2zM40 34v1h-1v1c1.1 0 2-.9 2-2h-1zM40 15.3h1v1.6h-1zM40 18h1v1.6h-1zM40 20.6h1v1.6h-1z"
}));
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockVariation)('core/columns', {
  name: 'three-columns-with-responsive-borders',
  title: '3 cols with responsive borders',
  description: 'borders between columns, but gone on mobile',
  icon: threeColRespBordersIcon,
  innerBlocks: [['core/column'], ['core/column'], ['core/column']],
  scope: ['block'],
  keywords: ['columns', 'borders'],
  attributes: {
    className: 'three-columns-with-responsive-borders'
  }
});

/***/ }),

/***/ "./src/variant-partners-query.js":
/*!***************************************!*\
  !*** ./src/variant-partners-query.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/query', {
  name: 'partners-query',
  title: 'Partner Query',
  description: 'Displays a list of partners',
  scope: ['inserter'],
  keywords: ['query', 'partner'],
  attributes: {
    className: 'partners-query',
    namespace: 'partners-query',
    query: {
      postType: 'partners',
      perPage: 20,
      offset: 0
    }
  },
  allowedControls: [],
  innerBlocks: [['core/post-template', {}, [['core/group', {
    className: 'partners-query-wrapper has-base-color has-contrast-background-color has-text-color has-background',
    style: {
      "spacing": {
        "padding": {
          "top": "0",
          "right": "0",
          "left": "0",
          "bottom": "var:preset|spacing|s"
        }
      }
    }
  }, [['core/post-content']]]]], ['core/query-no-results'], ['core/group', {
    className: 'navigation',
    layout: {
      type: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'space-between'
    }
  }, [['core/button', {
    text: 'left',
    className: 'partner-nav-left is-style-outline'
  }], ['core/button', {
    text: 'right',
    className: 'partner-nav-right is-style-outline'
  }]]]],
  isActive: _ref => {
    let {
      namespace,
      query
    } = _ref;
    return namespace === 'partners-query' && query.postType === 'partners';
  }
});

/***/ }),

/***/ "./src/variant-row-3colDesktop-2colMobile.js":
/*!***************************************************!*\
  !*** ./src/variant-row-3colDesktop-2colMobile.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/row.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/group', {
  name: 'row-3colDesktop-2colMobile',
  title: 'row that has 3 columns on desktop nd 2 on mobile',
  description: 'a row for icons and stuff that has 3 columns on desktop and 2 on mobile',
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
  scope: ['block', 'inserter', 'transform'],
  keywords: ['row', 'scrolling', 'scroll'],
  attributes: {
    className: 'row-3colDesktop-2colMobile',
    layout: {
      type: 'flex',
      flexWrap: 'wrap'
    }
  }
});

/***/ }),

/***/ "./src/variant-scrolling-row.js":
/*!**************************************!*\
  !*** ./src/variant-scrolling-row.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/row.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/group', {
  name: 'scrolling-row',
  title: 'row that scrolls horizontally',
  description: 'A simple way to display a row of content that scroll horizontally',
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
  scope: ['block', 'inserter', 'transform'],
  keywords: ['row', 'scrolling', 'scroll'],
  attributes: {
    className: 'has-horizontal-scrolling',
    layout: {
      type: 'flex',
      flexWrap: 'nowrap'
    }
  },
  isActive: blockAttributes => blockAttributes.layout?.type === 'flex' && (!blockAttributes.layout?.orientation || blockAttributes.layout?.orientation === 'horizontal')
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwoodoo_block_variants"] = globalThis["webpackChunkwoodoo_block_variants"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map