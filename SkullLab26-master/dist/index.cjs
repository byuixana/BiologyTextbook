'use strict';

var React$1 = require('react');
var jsxRuntime = require('react/jsx-runtime');
var ReactDOM = require('react-dom');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React$1);

/**
 * A header component that displays a section title.
 *
 * @typedef {object} HeaderProps
 * @property {string} sectionTitle - The title to display in the header
 * 
 * @returns {JSX.Element} A header with the section title
 */

function Header(_ref) {
  let {
    sectionTitle
  } = _ref;
  return /*#__PURE__*/React.createElement("header", {
    className: "flex justify-center  bg-[#1a5e80] items-center w-screen min-h-9 h-16"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "sectionTitle",
    className: "font-bold text-white"
  }, " ", sectionTitle, " "));
}

function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _extends$2() {
  return _extends$2 = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$2.apply(null, arguments);
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) {
      _defineProperty$1(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive$1(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

const SelectionContext = /*#__PURE__*/React$1.createContext(0);
function SelectionContextProvider(_ref) {
  let {
    children,
    initialSelectedItem = {},
    data
  } = _ref;
  // Hooks
  const [selectedItem, setSelected] = React$1.useState(initialSelectedItem);
  const [allItems, setAllItems] = React$1.useState([]);

  // Define outside the component to avoid recreation on every render
  const traverseChildren = function (children) {
    let parentID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!children) return [];
    let childItems = [];
    for (const child of children) {
      childItems.push(_objectSpread2(_objectSpread2({}, child), {}, {
        parentID: parentID
      }));
      if (child.children && child.children.length > 0) {
        childItems.push(...traverseChildren(child.children, child.id));
      }
    }
    return childItems;
  };
  const traverseJSON = sections => {
    if (!sections || !Array.isArray(sections)) return [];
    let items = [];
    for (const section of sections) {
      var _section$data;
      if (((_section$data = section.data) === null || _section$data === void 0 ? void 0 : _section$data.length) > 0) {
        items.push(...traverseChildren(section.data, null));
      }
    }
    return items;
  };

  // Inside your component:
  React$1.useEffect(() => {
    console.log("Data in context provider:", data);
    if (data !== null && data !== void 0 && data.sections) {
      // ← check for sections
      const allItems = traverseJSON(data.sections); // ← pass data.sections
      console.log("ITEMS:", allItems);
      // const initialItem = allItems.find(item => item.id === initialSelectedItem.id);
      // setSelected(initialItem || initialSelectedItem);
      setAllItems(allItems);
    }
  }, [data, initialSelectedItem]);

  // Provider
  return /*#__PURE__*/React.createElement(SelectionContext.Provider, {
    value: {
      selectedItem,
      setSelected,
      allItems
    }
  }, children);
}

/**
 * Hook to access the selection context.
 * 
 * @returns {object} An object containing selectedItem and setSelected function
 * @throws {Error} If used outside of SelectionContextProvider
 */
function useSelectionContext() {
  return React$1.useContext(SelectionContext);
}

function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var propTypes = {exports: {}};

var reactIs$3 = {exports: {}};

var reactIs_production_min$1 = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min$1;

function requireReactIs_production_min$1 () {
	if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
	hasRequiredReactIs_production_min$1 = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min$1.AsyncMode=l;reactIs_production_min$1.ConcurrentMode=m;reactIs_production_min$1.ContextConsumer=k;reactIs_production_min$1.ContextProvider=h;reactIs_production_min$1.Element=c;reactIs_production_min$1.ForwardRef=n;reactIs_production_min$1.Fragment=e;reactIs_production_min$1.Lazy=t;reactIs_production_min$1.Memo=r;reactIs_production_min$1.Portal=d;
	reactIs_production_min$1.Profiler=g;reactIs_production_min$1.StrictMode=f;reactIs_production_min$1.Suspense=p;reactIs_production_min$1.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min$1.isConcurrentMode=A;reactIs_production_min$1.isContextConsumer=function(a){return z(a)===k};reactIs_production_min$1.isContextProvider=function(a){return z(a)===h};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min$1.isForwardRef=function(a){return z(a)===n};reactIs_production_min$1.isFragment=function(a){return z(a)===e};reactIs_production_min$1.isLazy=function(a){return z(a)===t};
	reactIs_production_min$1.isMemo=function(a){return z(a)===r};reactIs_production_min$1.isPortal=function(a){return z(a)===d};reactIs_production_min$1.isProfiler=function(a){return z(a)===g};reactIs_production_min$1.isStrictMode=function(a){return z(a)===f};reactIs_production_min$1.isSuspense=function(a){return z(a)===p};
	reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min$1.typeOf=z;
	return reactIs_production_min$1;
}

var reactIs_development$2 = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development$2;

function requireReactIs_development$2 () {
	if (hasRequiredReactIs_development$2) return reactIs_development$2;
	hasRequiredReactIs_development$2 = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development$2.AsyncMode = AsyncMode;
	reactIs_development$2.ConcurrentMode = ConcurrentMode;
	reactIs_development$2.ContextConsumer = ContextConsumer;
	reactIs_development$2.ContextProvider = ContextProvider;
	reactIs_development$2.Element = Element;
	reactIs_development$2.ForwardRef = ForwardRef;
	reactIs_development$2.Fragment = Fragment;
	reactIs_development$2.Lazy = Lazy;
	reactIs_development$2.Memo = Memo;
	reactIs_development$2.Portal = Portal;
	reactIs_development$2.Profiler = Profiler;
	reactIs_development$2.StrictMode = StrictMode;
	reactIs_development$2.Suspense = Suspense;
	reactIs_development$2.isAsyncMode = isAsyncMode;
	reactIs_development$2.isConcurrentMode = isConcurrentMode;
	reactIs_development$2.isContextConsumer = isContextConsumer;
	reactIs_development$2.isContextProvider = isContextProvider;
	reactIs_development$2.isElement = isElement;
	reactIs_development$2.isForwardRef = isForwardRef;
	reactIs_development$2.isFragment = isFragment;
	reactIs_development$2.isLazy = isLazy;
	reactIs_development$2.isMemo = isMemo;
	reactIs_development$2.isPortal = isPortal;
	reactIs_development$2.isProfiler = isProfiler;
	reactIs_development$2.isStrictMode = isStrictMode;
	reactIs_development$2.isSuspense = isSuspense;
	reactIs_development$2.isValidElementType = isValidElementType;
	reactIs_development$2.typeOf = typeOf;
	  })();
	}
	return reactIs_development$2;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs$3.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs$3.exports = requireReactIs_production_min$1();
	} else {
	  reactIs$3.exports = requireReactIs_development$2();
	}
	return reactIs$3.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

const UNINITIALIZED$1 = {};

/**
 * A React.useRef() that is initialized with a function. Note that it accepts an optional
 * initialization argument, so the initialization function doesn't need to be an inline closure.
 *
 * @usage
 *   const ref = useRefWithInit(sortColumns, columns)
 */

function useRefWithInit(init, initArg) {
  const ref = React__namespace.useRef(UNINITIALIZED$1);
  if (ref.current === UNINITIALIZED$1) {
    ref.current = init(initArg);
  }
  return ref;
}

/**
 * Merges refs into a single memoized callback ref or `null`.
 * This makes sure multiple refs are updated together and have the same value.
 *
 * This function accepts up to four refs. If you need to merge more, or have an unspecified number of refs to merge,
 * use `useMergedRefsN` instead.
 */

function useMergedRefs(a, b, c, d) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChange(forkRef, a, b, c, d)) {
    update(forkRef, [a, b, c, d]);
  }
  return forkRef.callback;
}
function createForkRef() {
  return {
    callback: null,
    cleanup: null,
    refs: []
  };
}
function didChange(forkRef, a, b, c, d) {
  // prettier-ignore
  return forkRef.refs[0] !== a || forkRef.refs[1] !== b || forkRef.refs[2] !== c || forkRef.refs[3] !== d;
}
function update(forkRef, refs) {
  forkRef.refs = refs;
  if (refs.every(ref => ref == null)) {
    forkRef.callback = null;
    return;
  }
  forkRef.callback = instance => {
    if (forkRef.cleanup) {
      forkRef.cleanup();
      forkRef.cleanup = null;
    }
    if (instance != null) {
      const cleanupCallbacks = Array(refs.length).fill(null);
      for (let i = 0; i < refs.length; i += 1) {
        const ref = refs[i];
        if (ref == null) {
          continue;
        }
        switch (typeof ref) {
          case 'function':
            {
              const refCleanup = ref(instance);
              if (typeof refCleanup === 'function') {
                cleanupCallbacks[i] = refCleanup;
              }
              break;
            }
          case 'object':
            {
              ref.current = instance;
              break;
            }
        }
      }
      forkRef.cleanup = () => {
        for (let i = 0; i < refs.length; i += 1) {
          const ref = refs[i];
          if (ref == null) {
            continue;
          }
          switch (typeof ref) {
            case 'function':
              {
                const cleanupCallback = cleanupCallbacks[i];
                if (typeof cleanupCallback === 'function') {
                  cleanupCallback();
                } else {
                  ref(null);
                }
                break;
              }
            case 'object':
              {
                ref.current = null;
                break;
              }
          }
        }
      };
    }
  };
}

// src/devModeChecks/identityFunctionCheck.ts
var runIdentityFunctionCheck = (resultFunc, inputSelectorsResults, outputSelectorResult) => {
  if (inputSelectorsResults.length === 1 && inputSelectorsResults[0] === outputSelectorResult) {
    let isInputSameAsOutput = false;
    try {
      const emptyObject = {};
      if (resultFunc(emptyObject) === emptyObject)
        isInputSameAsOutput = true;
    } catch {
    }
    if (isInputSameAsOutput) {
      let stack = void 0;
      try {
        throw new Error();
      } catch (e) {
        ({ stack } = e);
      }
      console.warn(
        "The result function returned its own inputs without modification. e.g\n`createSelector([state => state.todos], todos => todos)`\nThis could lead to inefficient memoization and unnecessary re-renders.\nEnsure transformation logic is in the result function, and extraction logic is in the input selectors.",
        { stack }
      );
    }
  }
};

// src/devModeChecks/inputStabilityCheck.ts
var runInputStabilityCheck = (inputSelectorResultsObject, options, inputSelectorArgs) => {
  const { memoize, memoizeOptions } = options;
  const { inputSelectorResults, inputSelectorResultsCopy } = inputSelectorResultsObject;
  const createAnEmptyObject = memoize(() => ({}), ...memoizeOptions);
  const areInputSelectorResultsEqual = createAnEmptyObject.apply(null, inputSelectorResults) === createAnEmptyObject.apply(null, inputSelectorResultsCopy);
  if (!areInputSelectorResultsEqual) {
    let stack = void 0;
    try {
      throw new Error();
    } catch (e) {
      ({ stack } = e);
    }
    console.warn(
      "An input selector returned a different result when passed same arguments.\nThis means your output selector will likely run more frequently than intended.\nAvoid returning a new reference inside your input selector, e.g.\n`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)`",
      {
        arguments: inputSelectorArgs,
        firstInputs: inputSelectorResults,
        secondInputs: inputSelectorResultsCopy,
        stack
      }
    );
  }
};

// src/devModeChecks/setGlobalDevModeChecks.ts
var globalDevModeChecks = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};

// src/utils.ts
var NOT_FOUND = /* @__PURE__ */ Symbol("NOT_FOUND");
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
  if (typeof func !== "function") {
    throw new TypeError(errorMessage);
  }
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
  if (typeof object !== "object") {
    throw new TypeError(errorMessage);
  }
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
  if (!array.every((item) => typeof item === "function")) {
    const itemTypes = array.map(
      (item) => typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item
    ).join(", ");
    throw new TypeError(`${errorMessage}[${itemTypes}]`);
  }
}
var ensureIsArray = (item) => {
  return Array.isArray(item) ? item : [item];
};
function getDependencies(createSelectorArgs) {
  const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
  assertIsArrayOfFunctions(
    dependencies,
    `createSelector expects all input-selectors to be functions, but received the following types: `
  );
  return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
  const inputSelectorResults = [];
  const { length } = dependencies;
  for (let i = 0; i < length; i++) {
    inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
  }
  return inputSelectorResults;
}
var getDevModeChecksExecutionInfo = (firstRun, devModeChecks) => {
  const { identityFunctionCheck, inputStabilityCheck } = {
    ...globalDevModeChecks,
    ...devModeChecks
  };
  return {
    identityFunctionCheck: {
      shouldRun: identityFunctionCheck === "always" || identityFunctionCheck === "once" && firstRun,
      run: runIdentityFunctionCheck
    },
    inputStabilityCheck: {
      shouldRun: inputStabilityCheck === "always" || inputStabilityCheck === "once" && firstRun,
      run: runInputStabilityCheck
    }
  };
};

// src/lruMemoize.ts
function createSingletonCache(equals) {
  let entry;
  return {
    get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    },
    put(key, value) {
      entry = { key, value };
    },
    getEntries() {
      return entry ? [entry] : [];
    },
    clear() {
      entry = void 0;
    }
  };
}
function createLruCache(maxSize, equals) {
  let entries = [];
  function get(key) {
    const cacheIndex = entries.findIndex((entry) => equals(key, entry.key));
    if (cacheIndex > -1) {
      const entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      entries.unshift({ key, value });
      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }
  function getEntries() {
    return entries;
  }
  function clear() {
    entries = [];
  }
  return { get, put, getEntries, clear };
}
var referenceEqualityCheck = (a, b) => a === b;
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
    const { length } = prev;
    for (let i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }
    return true;
  };
}
function lruMemoize(func, equalityCheckOrOptions) {
  const providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : { equalityCheck: equalityCheckOrOptions };
  const {
    equalityCheck = referenceEqualityCheck,
    maxSize = 1,
    resultEqualityCheck
  } = providedOptions;
  const comparator = createCacheKeyComparator(equalityCheck);
  let resultsCount = 0;
  const cache = maxSize <= 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    let value = cache.get(arguments);
    if (value === NOT_FOUND) {
      value = func.apply(null, arguments);
      resultsCount++;
      if (resultEqualityCheck) {
        const entries = cache.getEntries();
        const matchingEntry = entries.find(
          (entry) => resultEqualityCheck(entry.value, value)
        );
        if (matchingEntry) {
          value = matchingEntry.value;
          resultsCount !== 0 && resultsCount--;
        }
      }
      cache.put(arguments, value);
    }
    return value;
  }
  memoized.clearCache = () => {
    cache.clear();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}

// src/weakMapMemoize.ts
var StrongRef = class {
  constructor(value) {
    this.value = value;
  }
  deref() {
    return this.value;
  }
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
  return {
    s: UNTERMINATED,
    v: void 0,
    o: null,
    p: null
  };
}
function weakMapMemoize(func, options = {}) {
  let fnNode = createCacheNode();
  const { resultEqualityCheck } = options;
  let lastResult;
  let resultsCount = 0;
  function memoized() {
    let cacheNode = fnNode;
    const { length } = arguments;
    for (let i = 0, l = length; i < l; i++) {
      const arg = arguments[i];
      if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
        let objectCache = cacheNode.o;
        if (objectCache === null) {
          cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
        }
        const objectNode = objectCache.get(arg);
        if (objectNode === void 0) {
          cacheNode = createCacheNode();
          objectCache.set(arg, cacheNode);
        } else {
          cacheNode = objectNode;
        }
      } else {
        let primitiveCache = cacheNode.p;
        if (primitiveCache === null) {
          cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
        }
        const primitiveNode = primitiveCache.get(arg);
        if (primitiveNode === void 0) {
          cacheNode = createCacheNode();
          primitiveCache.set(arg, cacheNode);
        } else {
          cacheNode = primitiveNode;
        }
      }
    }
    const terminatedNode = cacheNode;
    let result;
    if (cacheNode.s === TERMINATED) {
      result = cacheNode.v;
    } else {
      result = func.apply(null, arguments);
      resultsCount++;
      if (resultEqualityCheck) {
        const lastResultValue = lastResult?.deref?.() ?? lastResult;
        if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
          result = lastResultValue;
          resultsCount !== 0 && resultsCount--;
        }
        const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
        lastResult = needsWeakRef ? new Ref(result) : result;
      }
    }
    terminatedNode.s = TERMINATED;
    terminatedNode.v = result;
    return result;
  }
  memoized.clearCache = () => {
    fnNode = createCacheNode();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}

// src/createSelectorCreator.ts
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
  const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
    memoize: memoizeOrOptions,
    memoizeOptions: memoizeOptionsFromArgs
  } : memoizeOrOptions;
  const createSelector2 = (...createSelectorArgs) => {
    let recomputations = 0;
    let dependencyRecomputations = 0;
    let lastResult;
    let directlyPassedOptions = {};
    let resultFunc = createSelectorArgs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = createSelectorArgs.pop();
    }
    assertIsFunction(
      resultFunc,
      `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`
    );
    const combinedOptions = {
      ...createSelectorCreatorOptions,
      ...directlyPassedOptions
    };
    const {
      memoize,
      memoizeOptions = [],
      argsMemoize = weakMapMemoize,
      argsMemoizeOptions = [],
      devModeChecks = {}
    } = combinedOptions;
    const finalMemoizeOptions = ensureIsArray(memoizeOptions);
    const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
    const dependencies = getDependencies(createSelectorArgs);
    const memoizedResultFunc = memoize(function recomputationWrapper() {
      recomputations++;
      return resultFunc.apply(
        null,
        arguments
      );
    }, ...finalMemoizeOptions);
    let firstRun = true;
    const selector = argsMemoize(function dependenciesChecker() {
      dependencyRecomputations++;
      const inputSelectorResults = collectInputSelectorResults(
        dependencies,
        arguments
      );
      lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
      if (process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck, inputStabilityCheck } = getDevModeChecksExecutionInfo(firstRun, devModeChecks);
        if (identityFunctionCheck.shouldRun) {
          identityFunctionCheck.run(
            resultFunc,
            inputSelectorResults,
            lastResult
          );
        }
        if (inputStabilityCheck.shouldRun) {
          const inputSelectorResultsCopy = collectInputSelectorResults(
            dependencies,
            arguments
          );
          inputStabilityCheck.run(
            { inputSelectorResults, inputSelectorResultsCopy },
            { memoize, memoizeOptions: finalMemoizeOptions },
            arguments
          );
        }
        if (firstRun)
          firstRun = false;
      }
      return lastResult;
    }, ...finalArgsMemoizeOptions);
    return Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      dependencyRecomputations: () => dependencyRecomputations,
      resetDependencyRecomputations: () => {
        dependencyRecomputations = 0;
      },
      lastResult: () => lastResult,
      recomputations: () => recomputations,
      resetRecomputations: () => {
        recomputations = 0;
      },
      memoize,
      argsMemoize
    });
  };
  Object.assign(createSelector2, {
    withTypes: () => createSelector2
  });
  return createSelector2;
}
var createSelector$1 = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);

// src/createStructuredSelector.ts
var createStructuredSelector = Object.assign(
  (inputSelectorsObject, selectorCreator = createSelector$1) => {
    assertIsObject(
      inputSelectorsObject,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`
    );
    const inputSelectorKeys = Object.keys(inputSelectorsObject);
    const dependencies = inputSelectorKeys.map(
      (key) => inputSelectorsObject[key]
    );
    const structuredSelector = selectorCreator(
      dependencies,
      (...inputSelectorResults) => {
        return inputSelectorResults.reduce((composition, value, index) => {
          composition[inputSelectorKeys[index]] = value;
          return composition;
        }, {});
      }
    );
    return structuredSelector;
  },
  { withTypes: () => createStructuredSelector }
);

/* eslint-disable no-underscore-dangle */ // __cacheKey__

const reselectCreateSelector = createSelectorCreator({
  memoize: lruMemoize,
  memoizeOptions: {
    maxSize: 1,
    equalityCheck: Object.is
  }
});
/* eslint-disable id-denylist */
const createSelector = (a, b, c, d, e, f, g, h, ...other) => {
  if (other.length > 0) {
    throw new Error('Unsupported number of selectors');
  }
  let selector;
  if (a && b && c && d && e && f && g && h) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      const vc = c(state, a1, a2, a3);
      const vd = d(state, a1, a2, a3);
      const ve = e(state, a1, a2, a3);
      const vf = f(state, a1, a2, a3);
      const vg = g(state, a1, a2, a3);
      return h(va, vb, vc, vd, ve, vf, vg, a1, a2, a3);
    };
  } else if (a && b && c && d && e && f && g) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      const vc = c(state, a1, a2, a3);
      const vd = d(state, a1, a2, a3);
      const ve = e(state, a1, a2, a3);
      const vf = f(state, a1, a2, a3);
      return g(va, vb, vc, vd, ve, vf, a1, a2, a3);
    };
  } else if (a && b && c && d && e && f) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      const vc = c(state, a1, a2, a3);
      const vd = d(state, a1, a2, a3);
      const ve = e(state, a1, a2, a3);
      return f(va, vb, vc, vd, ve, a1, a2, a3);
    };
  } else if (a && b && c && d && e) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      const vc = c(state, a1, a2, a3);
      const vd = d(state, a1, a2, a3);
      return e(va, vb, vc, vd, a1, a2, a3);
    };
  } else if (a && b && c && d) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      const vc = c(state, a1, a2, a3);
      return d(va, vb, vc, a1, a2, a3);
    };
  } else if (a && b && c) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      const vb = b(state, a1, a2, a3);
      return c(va, vb, a1, a2, a3);
    };
  } else if (a && b) {
    selector = (state, a1, a2, a3) => {
      const va = a(state, a1, a2, a3);
      return b(va, a1, a2, a3);
    };
  } else if (a) {
    selector = a;
  } else {
    throw new Error('Missing arguments');
  }
  return selector;
};
/* eslint-enable id-denylist */

const createSelectorMemoizedWithOptions = options => (...inputs) => {
  const cache = new WeakMap();
  let nextCacheId = 1;
  const combiner = inputs[inputs.length - 1];
  const nSelectors = inputs.length - 1 || 1;
  // (s1, s2, ..., sN, a1, a2, a3) => { ... }
  const argsLength = Math.max(combiner.length - nSelectors, 0);
  if (argsLength > 3) {
    throw new Error('Unsupported number of arguments');
  }

  // prettier-ignore
  const selector = (state, a1, a2, a3) => {
    let cacheKey = state.__cacheKey__;
    if (!cacheKey) {
      cacheKey = {
        id: nextCacheId
      };
      state.__cacheKey__ = cacheKey;
      nextCacheId += 1;
    }
    let fn = cache.get(cacheKey);
    if (!fn) {
      const selectors = inputs.length === 1 ? [x => x, combiner] : inputs;
      let reselectArgs = inputs;
      const selectorArgs = [undefined, undefined, undefined];
      switch (argsLength) {
        case 0:
          break;
        case 1:
          {
            reselectArgs = [...selectors.slice(0, -1), () => selectorArgs[0], combiner];
            break;
          }
        case 2:
          {
            reselectArgs = [...selectors.slice(0, -1), () => selectorArgs[0], () => selectorArgs[1], combiner];
            break;
          }
        case 3:
          {
            reselectArgs = [...selectors.slice(0, -1), () => selectorArgs[0], () => selectorArgs[1], () => selectorArgs[2], combiner];
            break;
          }
        default:
          throw new Error('Unsupported number of arguments');
      }
      fn = reselectCreateSelector(...reselectArgs);
      fn.selectorArgs = selectorArgs;
      cache.set(cacheKey, fn);
    }

    /* eslint-disable no-fallthrough */

    switch (argsLength) {
      case 3:
        fn.selectorArgs[2] = a3;
      case 2:
        fn.selectorArgs[1] = a2;
      case 1:
        fn.selectorArgs[0] = a1;
    }
    switch (argsLength) {
      case 0:
        return fn(state);
      case 1:
        return fn(state, a1);
      case 2:
        return fn(state, a1, a2);
      case 3:
        return fn(state, a1, a2, a3);
      default:
        throw new Error('unreachable');
    }
  };
  return selector;
};
const createSelectorMemoized = createSelectorMemoizedWithOptions();

var shim = {exports: {}};

var useSyncExternalStoreShim_production = {};

/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreShim_production;

function requireUseSyncExternalStoreShim_production () {
	if (hasRequiredUseSyncExternalStoreShim_production) return useSyncExternalStoreShim_production;
	hasRequiredUseSyncExternalStoreShim_production = 1;
	var React = React$1;
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is,
	  useState = React.useState,
	  useEffect = React.useEffect,
	  useLayoutEffect = React.useLayoutEffect,
	  useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
	  var value = getSnapshot(),
	    _useState = useState({ inst: { value: value, getSnapshot: getSnapshot } }),
	    inst = _useState[0].inst,
	    forceUpdate = _useState[1];
	  useLayoutEffect(
	    function () {
	      inst.value = value;
	      inst.getSnapshot = getSnapshot;
	      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	    },
	    [subscribe, value, getSnapshot]
	  );
	  useEffect(
	    function () {
	      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	      return subscribe(function () {
	        checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	      });
	    },
	    [subscribe]
	  );
	  useDebugValue(value);
	  return value;
	}
	function checkIfSnapshotChanged(inst) {
	  var latestGetSnapshot = inst.getSnapshot;
	  inst = inst.value;
	  try {
	    var nextValue = latestGetSnapshot();
	    return !objectIs(inst, nextValue);
	  } catch (error) {
	    return true;
	  }
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
	  return getSnapshot();
	}
	var shim =
	  "undefined" === typeof window ||
	  "undefined" === typeof window.document ||
	  "undefined" === typeof window.document.createElement
	    ? useSyncExternalStore$1
	    : useSyncExternalStore$2;
	useSyncExternalStoreShim_production.useSyncExternalStore =
	  void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
	return useSyncExternalStoreShim_production;
}

var useSyncExternalStoreShim_development = {};

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreShim_development;

function requireUseSyncExternalStoreShim_development () {
	if (hasRequiredUseSyncExternalStoreShim_development) return useSyncExternalStoreShim_development;
	hasRequiredUseSyncExternalStoreShim_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function is(x, y) {
	      return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	    }
	    function useSyncExternalStore$2(subscribe, getSnapshot) {
	      didWarnOld18Alpha ||
	        void 0 === React.startTransition ||
	        ((didWarnOld18Alpha = true),
	        console.error(
	          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
	        ));
	      var value = getSnapshot();
	      if (!didWarnUncachedGetSnapshot) {
	        var cachedValue = getSnapshot();
	        objectIs(value, cachedValue) ||
	          (console.error(
	            "The result of getSnapshot should be cached to avoid an infinite loop"
	          ),
	          (didWarnUncachedGetSnapshot = true));
	      }
	      cachedValue = useState({
	        inst: { value: value, getSnapshot: getSnapshot }
	      });
	      var inst = cachedValue[0].inst,
	        forceUpdate = cachedValue[1];
	      useLayoutEffect(
	        function () {
	          inst.value = value;
	          inst.getSnapshot = getSnapshot;
	          checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	        },
	        [subscribe, value, getSnapshot]
	      );
	      useEffect(
	        function () {
	          checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	          return subscribe(function () {
	            checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	          });
	        },
	        [subscribe]
	      );
	      useDebugValue(value);
	      return value;
	    }
	    function checkIfSnapshotChanged(inst) {
	      var latestGetSnapshot = inst.getSnapshot;
	      inst = inst.value;
	      try {
	        var nextValue = latestGetSnapshot();
	        return !objectIs(inst, nextValue);
	      } catch (error) {
	        return true;
	      }
	    }
	    function useSyncExternalStore$1(subscribe, getSnapshot) {
	      return getSnapshot();
	    }
	    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
	      "function" ===
	        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
	      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
	    var React = React$1,
	      objectIs = "function" === typeof Object.is ? Object.is : is,
	      useState = React.useState,
	      useEffect = React.useEffect,
	      useLayoutEffect = React.useLayoutEffect,
	      useDebugValue = React.useDebugValue,
	      didWarnOld18Alpha = false,
	      didWarnUncachedGetSnapshot = false,
	      shim =
	        "undefined" === typeof window ||
	        "undefined" === typeof window.document ||
	        "undefined" === typeof window.document.createElement
	          ? useSyncExternalStore$1
	          : useSyncExternalStore$2;
	    useSyncExternalStoreShim_development.useSyncExternalStore =
	      void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
	    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
	      "function" ===
	        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
	      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	  })();
	return useSyncExternalStoreShim_development;
}

if (process.env.NODE_ENV === 'production') {
  shim.exports = requireUseSyncExternalStoreShim_production();
} else {
  shim.exports = requireUseSyncExternalStoreShim_development();
}

var shimExports = shim.exports;

var withSelector = {exports: {}};

var withSelector_production = {};

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredWithSelector_production;

function requireWithSelector_production () {
	if (hasRequiredWithSelector_production) return withSelector_production;
	hasRequiredWithSelector_production = 1;
	var React = React$1,
	  shim = shimExports;
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is,
	  useSyncExternalStore = shim.useSyncExternalStore,
	  useRef = React.useRef,
	  useEffect = React.useEffect,
	  useMemo = React.useMemo,
	  useDebugValue = React.useDebugValue;
	withSelector_production.useSyncExternalStoreWithSelector = function (
	  subscribe,
	  getSnapshot,
	  getServerSnapshot,
	  selector,
	  isEqual
	) {
	  var instRef = useRef(null);
	  if (null === instRef.current) {
	    var inst = { hasValue: false, value: null };
	    instRef.current = inst;
	  } else inst = instRef.current;
	  instRef = useMemo(
	    function () {
	      function memoizedSelector(nextSnapshot) {
	        if (!hasMemo) {
	          hasMemo = true;
	          memoizedSnapshot = nextSnapshot;
	          nextSnapshot = selector(nextSnapshot);
	          if (void 0 !== isEqual && inst.hasValue) {
	            var currentSelection = inst.value;
	            if (isEqual(currentSelection, nextSnapshot))
	              return (memoizedSelection = currentSelection);
	          }
	          return (memoizedSelection = nextSnapshot);
	        }
	        currentSelection = memoizedSelection;
	        if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
	        var nextSelection = selector(nextSnapshot);
	        if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
	          return (memoizedSnapshot = nextSnapshot), currentSelection;
	        memoizedSnapshot = nextSnapshot;
	        return (memoizedSelection = nextSelection);
	      }
	      var hasMemo = false,
	        memoizedSnapshot,
	        memoizedSelection,
	        maybeGetServerSnapshot =
	          void 0 === getServerSnapshot ? null : getServerSnapshot;
	      return [
	        function () {
	          return memoizedSelector(getSnapshot());
	        },
	        null === maybeGetServerSnapshot
	          ? void 0
	          : function () {
	              return memoizedSelector(maybeGetServerSnapshot());
	            }
	      ];
	    },
	    [getSnapshot, getServerSnapshot, selector, isEqual]
	  );
	  var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
	  useEffect(
	    function () {
	      inst.hasValue = true;
	      inst.value = value;
	    },
	    [value]
	  );
	  useDebugValue(value);
	  return value;
	};
	return withSelector_production;
}

var withSelector_development = {};

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredWithSelector_development;

function requireWithSelector_development () {
	if (hasRequiredWithSelector_development) return withSelector_development;
	hasRequiredWithSelector_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function is(x, y) {
	      return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	    }
	    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
	      "function" ===
	        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
	      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
	    var React = React$1,
	      shim = shimExports,
	      objectIs = "function" === typeof Object.is ? Object.is : is,
	      useSyncExternalStore = shim.useSyncExternalStore,
	      useRef = React.useRef,
	      useEffect = React.useEffect,
	      useMemo = React.useMemo,
	      useDebugValue = React.useDebugValue;
	    withSelector_development.useSyncExternalStoreWithSelector = function (
	      subscribe,
	      getSnapshot,
	      getServerSnapshot,
	      selector,
	      isEqual
	    ) {
	      var instRef = useRef(null);
	      if (null === instRef.current) {
	        var inst = { hasValue: false, value: null };
	        instRef.current = inst;
	      } else inst = instRef.current;
	      instRef = useMemo(
	        function () {
	          function memoizedSelector(nextSnapshot) {
	            if (!hasMemo) {
	              hasMemo = true;
	              memoizedSnapshot = nextSnapshot;
	              nextSnapshot = selector(nextSnapshot);
	              if (void 0 !== isEqual && inst.hasValue) {
	                var currentSelection = inst.value;
	                if (isEqual(currentSelection, nextSnapshot))
	                  return (memoizedSelection = currentSelection);
	              }
	              return (memoizedSelection = nextSnapshot);
	            }
	            currentSelection = memoizedSelection;
	            if (objectIs(memoizedSnapshot, nextSnapshot))
	              return currentSelection;
	            var nextSelection = selector(nextSnapshot);
	            if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
	              return (memoizedSnapshot = nextSnapshot), currentSelection;
	            memoizedSnapshot = nextSnapshot;
	            return (memoizedSelection = nextSelection);
	          }
	          var hasMemo = false,
	            memoizedSnapshot,
	            memoizedSelection,
	            maybeGetServerSnapshot =
	              void 0 === getServerSnapshot ? null : getServerSnapshot;
	          return [
	            function () {
	              return memoizedSelector(getSnapshot());
	            },
	            null === maybeGetServerSnapshot
	              ? void 0
	              : function () {
	                  return memoizedSelector(maybeGetServerSnapshot());
	                }
	          ];
	        },
	        [getSnapshot, getServerSnapshot, selector, isEqual]
	      );
	      var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
	      useEffect(
	        function () {
	          inst.hasValue = true;
	          inst.value = value;
	        },
	        [value]
	      );
	      useDebugValue(value);
	      return value;
	    };
	    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
	      "function" ===
	        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
	      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	  })();
	return withSelector_development;
}

if (process.env.NODE_ENV === 'production') {
  withSelector.exports = requireWithSelector_production();
} else {
  withSelector.exports = requireWithSelector_development();
}

var withSelectorExports = withSelector.exports;

var reactMajor = parseInt(React__namespace.version, 10);

/* Some tests fail in R18 with the raw useSyncExternalStore. It may be possible to make it work
 * but for now we only enable it for R19+. */
const canUseRawUseSyncExternalStore = reactMajor >= 19;
const useStoreImplementation = canUseRawUseSyncExternalStore ? useStoreR19 : useStoreLegacy;
function useStore(store, selector, a1, a2, a3) {
  return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
  const getSelection = React__namespace.useCallback(() => selector(store.getSnapshot(), a1, a2, a3), [store, selector, a1, a2, a3]);
  return shimExports.useSyncExternalStore(store.subscribe, getSelection, getSelection);
}
function useStoreLegacy(store, selector, a1, a2, a3) {
  return withSelectorExports.useSyncExternalStoreWithSelector(store.subscribe, store.getSnapshot, store.getSnapshot, state => selector(state, a1, a2, a3));
}

const UNINITIALIZED = {};

/**
 * A React.useRef() that is initialized lazily with a function. Note that it accepts an optional
 * initialization argument, so the initialization function doesn't need to be an inline closure.
 *
 * @usage
 *   const ref = useLazyRef(sortColumns, columns)
 */
function useLazyRef(init, initArg) {
  const ref = React__namespace.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}

const EMPTY$1 = [];

/**
 * A React.useEffect equivalent that runs once, when the component is mounted.
 */
function useOnMount$1(fn) {
  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
  /* eslint-disable react-hooks/exhaustive-deps */
  React__namespace.useEffect(fn, EMPTY$1);
  /* eslint-enable react-hooks/exhaustive-deps */
}

/* eslint-disable no-cond-assign */

class Store {
  // HACK: `any` fixes adding listeners that accept partial state.

  // Internal state to handle recursive `setState()` calls

  static create(state) {
    return new Store(state);
  }
  constructor(state) {
    this.state = state;
    this.listeners = new Set();
    this.updateTick = 0;
  }
  subscribe = fn => {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  };

  /**
   * Returns the current state snapshot. Meant for usage with `useSyncExternalStore`.
   * If you want to access the state, use the `state` property instead.
   */
  getSnapshot = () => {
    return this.state;
  };
  setState(newState) {
    this.state = newState;
    this.updateTick += 1;
    const currentTick = this.updateTick;
    const it = this.listeners.values();
    let result;
    while (result = it.next(), !result.done) {
      if (currentTick !== this.updateTick) {
        // If the tick has changed, a recursive `setState` call has been made,
        // and it has already notified all listeners.
        return;
      }
      const listener = result.value;
      listener(newState);
    }
  }
  update(changes) {
    for (const key in changes) {
      if (!Object.is(this.state[key], changes[key])) {
        this.setState(_extends$1({}, this.state, changes));
        return;
      }
    }
  }
  set(key, value) {
    if (!Object.is(this.state[key], value)) {
      this.setState(_extends$1({}, this.state, {
        [key]: value
      }));
    }
  }
  use = (() => (selector, a1, a2, a3) => {
    return useStore(this, selector, a1, a2, a3);
  })();
}

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

/* eslint no-restricted-syntax: 0, prefer-template: 0, guard-for-in: 0
   ---
   These rules are preventing the performance optimizations below.
 */

/**
 * Compose classes from multiple sources.
 *
 * @example
 * ```tsx
 * const slots = {
 *  root: ['root', 'primary'],
 *  label: ['label'],
 * };
 *
 * const getUtilityClass = (slot) => `MuiButton-${slot}`;
 *
 * const classes = {
 *   root: 'my-root-class',
 * };
 *
 * const output = composeClasses(slots, getUtilityClass, classes);
 * // {
 * //   root: 'MuiButton-root MuiButton-primary my-root-class',
 * //   label: 'MuiButton-label',
 * // }
 * ```
 *
 * @param slots a list of classes for each possible slot
 * @param getUtilityClass a function to resolve the class based on the slot name
 * @param classes the input classes from props
 * @returns the resolved classes for all slots
 */
function composeClasses(slots, getUtilityClass, classes = undefined) {
  const output = {};
  for (const slotName in slots) {
    const slot = slots[slotName];
    let buffer = '';
    let start = true;
    for (let i = 0; i < slot.length; i += 1) {
      const value = slot[i];
      if (value) {
        buffer += (start === true ? '' : ' ') + getUtilityClass(value);
        start = false;
        if (classes && classes[value]) {
          buffer += ' ' + classes[value];
        }
      }
    }
    output[slotName] = buffer;
  }
  return output;
}

/**
 * WARNING: Don't import this directly. It's imported by the code generated by
 * `@mui/interal-babel-plugin-minify-errors`. Make sure to always use string literals in `Error`
 * constructors to ensure the plugin works as expected. Supported patterns include:
 *   throw new Error('My message');
 *   throw new Error(`My message: ${foo}`);
 *   throw new Error(`My message: ${foo}` + 'another string');
 *   ...
 * @param {number} code
 */
function formatMuiErrorMessage(code, ...args) {
  const url = new URL(`https://mui.com/production-error/?code=${code}`);
  args.forEach(arg => url.searchParams.append('args[]', arg));
  return `Minified MUI error #${code}; visit ${url} for the full message.`;
}

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error(process.env.NODE_ENV !== "production" ? 'MUI: `capitalize(string)` expects a string argument.' : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var reactIs$2 = {exports: {}};

var reactIs_production = {};

/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production;

function requireReactIs_production () {
	if (hasRequiredReactIs_production) return reactIs_production;
	hasRequiredReactIs_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	  REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"),
	  REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function typeOf(object) {
	  if ("object" === typeof object && null !== object) {
	    var $$typeof = object.$$typeof;
	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        switch (((object = object.type), object)) {
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	          case REACT_SUSPENSE_LIST_TYPE:
	          case REACT_VIEW_TRANSITION_TYPE:
	            return object;
	          default:
	            switch (((object = object && object.$$typeof), object)) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	                return object;
	              case REACT_CONSUMER_TYPE:
	                return object;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }
	}
	reactIs_production.ContextConsumer = REACT_CONSUMER_TYPE;
	reactIs_production.ContextProvider = REACT_CONTEXT_TYPE;
	reactIs_production.Element = REACT_ELEMENT_TYPE;
	reactIs_production.ForwardRef = REACT_FORWARD_REF_TYPE;
	reactIs_production.Fragment = REACT_FRAGMENT_TYPE;
	reactIs_production.Lazy = REACT_LAZY_TYPE;
	reactIs_production.Memo = REACT_MEMO_TYPE;
	reactIs_production.Portal = REACT_PORTAL_TYPE;
	reactIs_production.Profiler = REACT_PROFILER_TYPE;
	reactIs_production.StrictMode = REACT_STRICT_MODE_TYPE;
	reactIs_production.Suspense = REACT_SUSPENSE_TYPE;
	reactIs_production.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	reactIs_production.isContextConsumer = function (object) {
	  return typeOf(object) === REACT_CONSUMER_TYPE;
	};
	reactIs_production.isContextProvider = function (object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	};
	reactIs_production.isElement = function (object) {
	  return (
	    "object" === typeof object &&
	    null !== object &&
	    object.$$typeof === REACT_ELEMENT_TYPE
	  );
	};
	reactIs_production.isForwardRef = function (object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	};
	reactIs_production.isFragment = function (object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	};
	reactIs_production.isLazy = function (object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	};
	reactIs_production.isMemo = function (object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	};
	reactIs_production.isPortal = function (object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	};
	reactIs_production.isProfiler = function (object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	};
	reactIs_production.isStrictMode = function (object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	};
	reactIs_production.isSuspense = function (object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	};
	reactIs_production.isSuspenseList = function (object) {
	  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	};
	reactIs_production.isValidElementType = function (type) {
	  return "string" === typeof type ||
	    "function" === typeof type ||
	    type === REACT_FRAGMENT_TYPE ||
	    type === REACT_PROFILER_TYPE ||
	    type === REACT_STRICT_MODE_TYPE ||
	    type === REACT_SUSPENSE_TYPE ||
	    type === REACT_SUSPENSE_LIST_TYPE ||
	    ("object" === typeof type &&
	      null !== type &&
	      (type.$$typeof === REACT_LAZY_TYPE ||
	        type.$$typeof === REACT_MEMO_TYPE ||
	        type.$$typeof === REACT_CONTEXT_TYPE ||
	        type.$$typeof === REACT_CONSUMER_TYPE ||
	        type.$$typeof === REACT_FORWARD_REF_TYPE ||
	        type.$$typeof === REACT_CLIENT_REFERENCE ||
	        void 0 !== type.getModuleId))
	    ? true
	    : false;
	};
	reactIs_production.typeOf = typeOf;
	return reactIs_production;
}

var reactIs_development$1 = {};

/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development$1;

function requireReactIs_development$1 () {
	if (hasRequiredReactIs_development$1) return reactIs_development$1;
	hasRequiredReactIs_development$1 = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function typeOf(object) {
	      if ("object" === typeof object && null !== object) {
	        var $$typeof = object.$$typeof;
	        switch ($$typeof) {
	          case REACT_ELEMENT_TYPE:
	            switch (((object = object.type), object)) {
	              case REACT_FRAGMENT_TYPE:
	              case REACT_PROFILER_TYPE:
	              case REACT_STRICT_MODE_TYPE:
	              case REACT_SUSPENSE_TYPE:
	              case REACT_SUSPENSE_LIST_TYPE:
	              case REACT_VIEW_TRANSITION_TYPE:
	                return object;
	              default:
	                switch (((object = object && object.$$typeof), object)) {
	                  case REACT_CONTEXT_TYPE:
	                  case REACT_FORWARD_REF_TYPE:
	                  case REACT_LAZY_TYPE:
	                  case REACT_MEMO_TYPE:
	                    return object;
	                  case REACT_CONSUMER_TYPE:
	                    return object;
	                  default:
	                    return $$typeof;
	                }
	            }
	          case REACT_PORTAL_TYPE:
	            return $$typeof;
	        }
	      }
	    }
	    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	      REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"),
	      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	    reactIs_development$1.ContextConsumer = REACT_CONSUMER_TYPE;
	    reactIs_development$1.ContextProvider = REACT_CONTEXT_TYPE;
	    reactIs_development$1.Element = REACT_ELEMENT_TYPE;
	    reactIs_development$1.ForwardRef = REACT_FORWARD_REF_TYPE;
	    reactIs_development$1.Fragment = REACT_FRAGMENT_TYPE;
	    reactIs_development$1.Lazy = REACT_LAZY_TYPE;
	    reactIs_development$1.Memo = REACT_MEMO_TYPE;
	    reactIs_development$1.Portal = REACT_PORTAL_TYPE;
	    reactIs_development$1.Profiler = REACT_PROFILER_TYPE;
	    reactIs_development$1.StrictMode = REACT_STRICT_MODE_TYPE;
	    reactIs_development$1.Suspense = REACT_SUSPENSE_TYPE;
	    reactIs_development$1.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	    reactIs_development$1.isContextConsumer = function (object) {
	      return typeOf(object) === REACT_CONSUMER_TYPE;
	    };
	    reactIs_development$1.isContextProvider = function (object) {
	      return typeOf(object) === REACT_CONTEXT_TYPE;
	    };
	    reactIs_development$1.isElement = function (object) {
	      return (
	        "object" === typeof object &&
	        null !== object &&
	        object.$$typeof === REACT_ELEMENT_TYPE
	      );
	    };
	    reactIs_development$1.isForwardRef = function (object) {
	      return typeOf(object) === REACT_FORWARD_REF_TYPE;
	    };
	    reactIs_development$1.isFragment = function (object) {
	      return typeOf(object) === REACT_FRAGMENT_TYPE;
	    };
	    reactIs_development$1.isLazy = function (object) {
	      return typeOf(object) === REACT_LAZY_TYPE;
	    };
	    reactIs_development$1.isMemo = function (object) {
	      return typeOf(object) === REACT_MEMO_TYPE;
	    };
	    reactIs_development$1.isPortal = function (object) {
	      return typeOf(object) === REACT_PORTAL_TYPE;
	    };
	    reactIs_development$1.isProfiler = function (object) {
	      return typeOf(object) === REACT_PROFILER_TYPE;
	    };
	    reactIs_development$1.isStrictMode = function (object) {
	      return typeOf(object) === REACT_STRICT_MODE_TYPE;
	    };
	    reactIs_development$1.isSuspense = function (object) {
	      return typeOf(object) === REACT_SUSPENSE_TYPE;
	    };
	    reactIs_development$1.isSuspenseList = function (object) {
	      return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	    };
	    reactIs_development$1.isValidElementType = function (type) {
	      return "string" === typeof type ||
	        "function" === typeof type ||
	        type === REACT_FRAGMENT_TYPE ||
	        type === REACT_PROFILER_TYPE ||
	        type === REACT_STRICT_MODE_TYPE ||
	        type === REACT_SUSPENSE_TYPE ||
	        type === REACT_SUSPENSE_LIST_TYPE ||
	        ("object" === typeof type &&
	          null !== type &&
	          (type.$$typeof === REACT_LAZY_TYPE ||
	            type.$$typeof === REACT_MEMO_TYPE ||
	            type.$$typeof === REACT_CONTEXT_TYPE ||
	            type.$$typeof === REACT_CONSUMER_TYPE ||
	            type.$$typeof === REACT_FORWARD_REF_TYPE ||
	            type.$$typeof === REACT_CLIENT_REFERENCE ||
	            void 0 !== type.getModuleId))
	        ? true
	        : false;
	    };
	    reactIs_development$1.typeOf = typeOf;
	  })();
	return reactIs_development$1;
}

if (process.env.NODE_ENV === 'production') {
  reactIs$2.exports = requireReactIs_production();
} else {
  reactIs$2.exports = requireReactIs_development$1();
}

var reactIsExports$1 = reactIs$2.exports;

// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
function isPlainObject(item) {
  if (typeof item !== 'object' || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (/*#__PURE__*/React__namespace.isValidElement(source) || reactIsExports$1.isValidElementType(source) || !isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach(key => {
    output[key] = deepClone(source[key]);
  });
  return output;
}

/**
 * Merge objects deeply.
 * It will shallow copy React elements.
 *
 * If `options.clone` is set to `false` the source object will be merged directly into the target object.
 *
 * @example
 * ```ts
 * deepmerge({ a: { b: 1 }, d: 2 }, { a: { c: 2 }, d: 4 });
 * // => { a: { b: 1, c: 2 }, d: 4 }
 * ````
 *
 * @param target The target object.
 * @param source The source object.
 * @param options The merge options.
 * @param options.clone Set to `false` to merge the source object directly into the target object.
 * @returns The merged object.
 */
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? {
    ...target
  } : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      if (/*#__PURE__*/React__namespace.isValidElement(source[key]) || reactIsExports$1.isValidElementType(source[key])) {
        output[key] = source[key];
      } else if (isPlainObject(source[key]) &&
      // Avoid prototype pollution
      Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false // No need to clone deep, it's way faster.
  });
}

const responsivePropType = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.array]) : {};

/**
 * For using in `sx` prop to sort the breakpoint from low to high.
 * Note: this function does not work and will not support multiple units.
 *       e.g. input: { '@container (min-width:300px)': '1rem', '@container (min-width:40rem)': '2rem' }
 *            output: { '@container (min-width:40rem)': '2rem', '@container (min-width:300px)': '1rem' } // since 40 < 300 even though 40rem > 300px
 */
function sortContainerQueries(theme, css) {
  if (!theme.containerQueries) {
    return css;
  }
  const sorted = Object.keys(css).filter(key => key.startsWith('@container')).sort((a, b) => {
    const regex = /min-width:\s*([0-9.]+)/;
    return +(a.match(regex)?.[1] || 0) - +(b.match(regex)?.[1] || 0);
  });
  if (!sorted.length) {
    return css;
  }
  return sorted.reduce((acc, key) => {
    const value = css[key];
    delete acc[key];
    acc[key] = value;
    return acc;
  }, {
    ...css
  });
}
function isCqShorthand(breakpointKeys, value) {
  return value === '@' || value.startsWith('@') && (breakpointKeys.some(key => value.startsWith(`@${key}`)) || !!value.match(/^@\d/));
}
function getContainerQuery(theme, shorthand) {
  const matches = shorthand.match(/^@([^/]+)?\/?(.+)?$/);
  if (!matches) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${shorthand})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.\n` + 'For example, `@sm` or `@600` or `@40rem/sidebar`.' : formatMuiErrorMessage(18, `(${shorthand})`));
    }
    return null;
  }
  const [, containerQuery, containerName] = matches;
  const value = Number.isNaN(+containerQuery) ? containerQuery || 0 : +containerQuery;
  return theme.containerQueries(containerName).up(value);
}
function cssContainerQueries(themeInput) {
  const toContainerQuery = (mediaQuery, name) => mediaQuery.replace('@media', name ? `@container ${name}` : '@container');
  function attachCq(node, name) {
    node.up = (...args) => toContainerQuery(themeInput.breakpoints.up(...args), name);
    node.down = (...args) => toContainerQuery(themeInput.breakpoints.down(...args), name);
    node.between = (...args) => toContainerQuery(themeInput.breakpoints.between(...args), name);
    node.only = (...args) => toContainerQuery(themeInput.breakpoints.only(...args), name);
    node.not = (...args) => {
      const result = toContainerQuery(themeInput.breakpoints.not(...args), name);
      if (result.includes('not all and')) {
        // `@container` does not work with `not all and`, so need to invert the logic
        return result.replace('not all and ', '').replace('min-width:', 'width<').replace('max-width:', 'width>').replace('and', 'or');
      }
      return result;
    };
  }
  const node = {};
  const containerQueries = name => {
    attachCq(node, name);
    return node;
  };
  attachCq(containerQueries);
  return {
    ...themeInput,
    containerQueries
  };
}

// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.
const values$1 = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screen
};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values$1[key]}px)`
};
const defaultContainerQueries = {
  containerQueries: containerName => ({
    up: key => {
      let result = typeof key === 'number' ? key : values$1[key] || key;
      if (typeof result === 'number') {
        result = `${result}px`;
      }
      return containerName ? `@container ${containerName} (min-width:${result})` : `@container (min-width:${result})`;
    }
  })
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (isCqShorthand(themeBreakpoints.keys, breakpoint)) {
        const containerKey = getContainerQuery(theme.containerQueries ? theme : defaultContainerQueries, breakpoint);
        if (containerKey) {
          acc[containerKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
        }
      }
      // key is breakpoint
      else if (Object.keys(themeBreakpoints.values || values$1).includes(breakpoint)) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  const breakpointsInOrder = breakpointsInput.keys?.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style);
}

function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  // Check if CSS variables are used
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split('.').reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style$1(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? {
    [prop]: responsivePropType
  } : {};
  fn.filterProps = [prop];
  return fn;
}

function memoize$1(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}

const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
};

// memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec
const getCssProperties = memoize$1(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  const themeSpacing = getPath(theme, themeKey, true) ?? defaultValue;
  if (typeof themeSpacing === 'number' || typeof themeSpacing === 'string') {
    return val => {
      if (typeof val === 'string') {
        return val;
      }
      if (process.env.NODE_ENV !== 'production') {
        if (typeof val !== 'number') {
          console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${val}.`);
        }
      }
      if (typeof themeSpacing === 'string') {
        if (themeSpacing.startsWith('var(') && val === 0) {
          return 0;
        }
        if (themeSpacing.startsWith('var(') && val === 1) {
          return themeSpacing;
        }
        return `calc(${val} * ${themeSpacing})`;
      }
      return themeSpacing * val;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return val => {
      if (typeof val === 'string') {
        return val;
      }
      const abs = Math.abs(val);
      if (process.env.NODE_ENV !== 'production') {
        if (!Number.isInteger(abs)) {
          console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.` + `You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join('\n'));
        } else if (abs > themeSpacing.length - 1) {
          console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join('\n'));
        }
      }
      const transformed = themeSpacing[abs];
      if (val >= 0) {
        return transformed;
      }
      if (typeof transformed === 'number') {
        return -transformed;
      }
      if (typeof transformed === 'string' && transformed.startsWith('var(')) {
        return `calc(-1 * ${transformed})`;
      }
      return `-${transformed}`;
    };
  }
  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }
  if (process.env.NODE_ENV !== 'production') {
    console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, 'It should be a number, an array or a function.'].join('\n'));
  }
  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8, 'spacing');
}
function getValue(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }
  return transformer(propValue);
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (!keys.includes(prop)) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
}
function margin(props) {
  return style(props, marginKeys);
}
margin.propTypes = process.env.NODE_ENV !== 'production' ? marginKeys.reduce((obj, key) => {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};
margin.filterProps = marginKeys;
function padding(props) {
  return style(props, paddingKeys);
}
padding.propTypes = process.env.NODE_ENV !== 'production' ? paddingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};
padding.filterProps = paddingKeys;
process.env.NODE_ENV !== 'production' ? spacingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};

function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? styles.reduce((acc, style) => Object.assign(acc, style.propTypes), {}) : {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}

function borderTransform(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
  return style$1({
    prop,
    themeKey: 'borders',
    transform
  });
}
const border = createBorderStyle('border', borderTransform);
const borderTop = createBorderStyle('borderTop', borderTransform);
const borderRight = createBorderStyle('borderRight', borderTransform);
const borderBottom = createBorderStyle('borderBottom', borderTransform);
const borderLeft = createBorderStyle('borderLeft', borderTransform);
const borderColor = createBorderStyle('borderColor');
const borderTopColor = createBorderStyle('borderTopColor');
const borderRightColor = createBorderStyle('borderRightColor');
const borderBottomColor = createBorderStyle('borderBottomColor');
const borderLeftColor = createBorderStyle('borderLeftColor');
const outline = createBorderStyle('outline', borderTransform);
const outlineColor = createBorderStyle('outlineColor');

// false positive
// eslint-disable-next-line react/function-component-definition
const borderRadius = props => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4, 'borderRadius');
    const styleFromPropValue = propValue => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = process.env.NODE_ENV !== 'production' ? {
  borderRadius: responsivePropType
} : {};
borderRadius.filterProps = ['borderRadius'];
compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);

// false positive
// eslint-disable-next-line react/function-component-definition
const gap = props => {
  if (props.gap !== undefined && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'gap');
    const styleFromPropValue = propValue => ({
      gap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = process.env.NODE_ENV !== 'production' ? {
  gap: responsivePropType
} : {};
gap.filterProps = ['gap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const columnGap = props => {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'columnGap');
    const styleFromPropValue = propValue => ({
      columnGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  columnGap: responsivePropType
} : {};
columnGap.filterProps = ['columnGap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const rowGap = props => {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'rowGap');
    const styleFromPropValue = propValue => ({
      rowGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  rowGap: responsivePropType
} : {};
rowGap.filterProps = ['rowGap'];
const gridColumn = style$1({
  prop: 'gridColumn'
});
const gridRow = style$1({
  prop: 'gridRow'
});
const gridAutoFlow = style$1({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = style$1({
  prop: 'gridAutoColumns'
});
const gridAutoRows = style$1({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = style$1({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = style$1({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = style$1({
  prop: 'gridTemplateAreas'
});
const gridArea = style$1({
  prop: 'gridArea'
});
compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

function paletteTransform(value, userValue) {
  if (userValue === 'grey') {
    return userValue;
  }
  return value;
}
const color = style$1({
  prop: 'color',
  themeKey: 'palette',
  transform: paletteTransform
});
const bgcolor = style$1({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const backgroundColor = style$1({
  prop: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
compose(color, bgcolor, backgroundColor);

function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = style$1({
  prop: 'width',
  transform: sizingTransform
});
const maxWidth = props => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      const breakpoint = props.theme?.breakpoints?.values?.[propValue] || values$1[propValue];
      if (!breakpoint) {
        return {
          maxWidth: sizingTransform(propValue)
        };
      }
      if (props.theme?.breakpoints?.unit !== 'px') {
        return {
          maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
        };
      }
      return {
        maxWidth: breakpoint
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = style$1({
  prop: 'minWidth',
  transform: sizingTransform
});
const height = style$1({
  prop: 'height',
  transform: sizingTransform
});
const maxHeight = style$1({
  prop: 'maxHeight',
  transform: sizingTransform
});
const minHeight = style$1({
  prop: 'minHeight',
  transform: sizingTransform
});
style$1({
  prop: 'size',
  cssProperty: 'width',
  transform: sizingTransform
});
style$1({
  prop: 'size',
  cssProperty: 'height',
  transform: sizingTransform
});
const boxSizing = style$1({
  prop: 'boxSizing'
});
compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

const defaultSxConfig = {
  // borders
  border: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderTop: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderRight: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderBottom: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderLeft: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderColor: {
    themeKey: 'palette'
  },
  borderTopColor: {
    themeKey: 'palette'
  },
  borderRightColor: {
    themeKey: 'palette'
  },
  borderBottomColor: {
    themeKey: 'palette'
  },
  borderLeftColor: {
    themeKey: 'palette'
  },
  outline: {
    themeKey: 'borders',
    transform: borderTransform
  },
  outlineColor: {
    themeKey: 'palette'
  },
  borderRadius: {
    themeKey: 'shape.borderRadius',
    style: borderRadius
  },
  // palette
  color: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  // spacing
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: value => ({
      '@media print': {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: 'zIndex'
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: 'shadows'
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: 'font'
  },
  fontFamily: {
    themeKey: 'typography'
  },
  fontSize: {
    themeKey: 'typography'
  },
  fontStyle: {
    themeKey: 'typography'
  },
  fontWeight: {
    themeKey: 'typography'
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: 'typography'
  }
};

function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config) {
    const props = {
      [prop]: val,
      theme
    };
    const options = config[prop];
    if (!options) {
      return {
        [prop]: val
      };
    }
    const {
      cssProperty = prop,
      themeKey,
      transform,
      style
    } = options;
    if (val == null) {
      return null;
    }

    // TODO v6: remove, see https://github.com/mui/material-ui/pull/38123
    if (themeKey === 'typography' && val === 'inherit') {
      return {
        [prop]: val
      };
    }
    const themeMapping = getPath(theme, themeKey) || {};
    if (style) {
      return style(props);
    }
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, val, styleFromPropValue);
  }
  function styleFunctionSx(props) {
    const {
      sx,
      theme = {},
      nested
    } = props || {};
    if (!sx) {
      return null; // Emotion & styled-components will neglect null
    }
    const config = theme.unstable_sxConfig ?? defaultSxConfig;

    /*
     * Receive `sxInput` as object or callback
     * and then recursively check keys & values to create media query object styles.
     * (the result will be used in `styled`)
     */
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === 'function') {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== 'object') {
        // value
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css = emptyBreakpoints;
      Object.keys(sxObject).forEach(styleKey => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== undefined) {
          if (typeof value === 'object') {
            if (config[styleKey]) {
              css = merge(css, getThemeValue(styleKey, value, theme, config));
            } else {
              const breakpointsValues = handleBreakpoints({
                theme
              }, value, x => ({
                [styleKey]: x
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css[styleKey] = styleFunctionSx({
                  sx: value,
                  theme,
                  nested: true
                });
              } else {
                css = merge(css, breakpointsValues);
              }
            }
          } else {
            css = merge(css, getThemeValue(styleKey, value, theme, config));
          }
        }
      });
      if (!nested && theme.modularCssLayers) {
        return {
          '@layer sx': sortContainerQueries(theme, removeUnusedBreakpoints(breakpointsKeys, css))
        };
      }
      return sortContainerQueries(theme, removeUnusedBreakpoints(breakpointsKeys, css));
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ['sx'];

const splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  const config = props?.theme?.unstable_sxConfig ?? defaultSxConfig;
  Object.keys(props).forEach(prop => {
    if (config[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};
function extendSxProp$1(props) {
  const {
    sx: inSx,
    ...other
  } = props;
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!isPlainObject(result)) {
        return systemProps;
      }
      return {
        ...systemProps,
        ...result
      };
    };
  } else {
    finalSx = {
      ...systemProps,
      ...inSx
    };
  }
  return {
    ...otherProps,
    sx: finalSx
  };
}

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  } // this function should always return with a value
  // TS can't understand it though so we make it stop complaining here


  return undefined;
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    this.tags.forEach(function (tag) {
      var _tag$parentNode;

      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';
var LAYER = '@layer';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? charat(characters, position++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character);
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice(index, position)
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && charat(characters, length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1;
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent), declarations);
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
						if (property > 0 && (strlen(characters) - length))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children);
							else
								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children);
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';
	var length = sizeof(children);

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break
		case IMPORT: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case RULESET: element.value = element.props.join(',');
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection);

	return function (element, index, children, callback) {
		var output = '';

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || '';

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element);
	}
}

var weakMemoize = function weakMemoize(func) {
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // Use non-null assertion because we just checked that the cache `has` it
      // This allows us to remove `undefined` from the return value
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var isBrowser$4 = typeof document !== 'undefined';

var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (token(character)) {
      break;
    }

    next();
  }

  return slice(begin, position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value;
  var parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch (hash(value, length)) {
    // color-adjust
    case 5103:
      return WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order

    case 6165:
      return WEBKIT + value + MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ':', ':' + WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch (charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return WEBKIT + value + MS + value + value;
  }

  return value;
}

var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case DECLARATION:
      element["return"] = prefix(element.value, element.length);
      break;

    case KEYFRAMES:
      return serialize([copy(element, {
        value: replace(element.value, '@', '@' + WEBKIT)
      })], callback);

    case RULESET:
      if (element.length) return combine(element.props, function (value) {
        switch (match(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return serialize([copy(element, {
              props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return serialize([copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var getServerStylisCache = isBrowser$4 ? undefined : weakMemoize(function () {
  return memoize(function () {
    return {};
  });
});
var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if (isBrowser$4 && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }

      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  if (isBrowser$4) {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' ');

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (!getServerStylisCache) {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return serialize(compile(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stringify];

    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

    var _stylis = function _stylis(styles) {
      return serialize(compile(styles), _serializer);
    };

    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

if (process.env.NODE_ENV === 'production') {
  reactIs$1.exports = requireReactIs_production_min();
} else {
  reactIs$1.exports = requireReactIs_development();
}

var reactIsExports = reactIs$1.exports;

var reactIs = reactIsExports;
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

var isBrowser$3 = typeof document !== 'undefined';

function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else if (className) {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$3 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser$3 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$3 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  var componentSelector = interpolation;

  if (componentSelector.__emotion_styles !== undefined) {

    return componentSelector;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        var keyframes = interpolation;

        if (keyframes.anim === 1) {
          cursor = {
            name: keyframes.name,
            styles: keyframes.styles,
            next: cursor
          };
          return keyframes.name;
        }

        var serializedStyles = interpolation;

        if (serializedStyles.styles !== undefined) {
          var next = serializedStyles.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = serializedStyles.styles + ";";
          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  var asString = interpolation;

  if (registered == null) {
    return asString;
  }

  var cached = registered[asString];
  return cached !== undefined ? cached : asString;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];

      if (typeof value !== 'object') {
        var asString = value;

        if (registered != null && registered[asString] !== undefined) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

                string += key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g; // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list

var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;

    styles += asTemplateStringsArr[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      var templateStringsArr = strings;

      styles += templateStringsArr[i];
    }
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
}

var isBrowser$2 = typeof document !== 'undefined';

var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = React__namespace['useInsertion' + 'Effect'] ? React__namespace['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = !isBrowser$2 ? syncFallback : useInsertionEffect || syncFallback;

var isBrowser$1 = typeof document !== 'undefined';

var EmotionCacheContext = /* #__PURE__ */React__namespace.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);

EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  return /*#__PURE__*/React$1.forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = React$1.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

if (!isBrowser$1) {
  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = React$1.useContext(EmotionCacheContext);

      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = createCache({
          key: 'css'
        });
        return /*#__PURE__*/React__namespace.createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}

var ThemeContext = /* #__PURE__ */React__namespace.createContext({});

var hasOwn = {}.hasOwnProperty;

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {

  var newProps = {};

  for (var _key in props) {
    if (hasOwn.call(props, _key)) {
      newProps[_key] = props[_key];
    }
  }

  newProps[typePropName] = type; // Runtime labeling is an opt-in feature because:

  return newProps;
};

var Insertion$1 = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  if (!isBrowser$1 && rules !== undefined) {
    var _ref2;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/React__namespace.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles, undefined, React__namespace.useContext(ThemeContext));

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var _key2 in props) {
    if (hasOwn.call(props, _key2) && _key2 !== 'css' && _key2 !== typePropName && (true )) {
      newProps[_key2] = props[_key2];
    }
  }

  newProps.className = className;

  if (ref) {
    newProps.ref = ref;
  }

  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(Insertion$1, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/React__namespace.createElement(WrappedComponent, newProps));
});

var Emotion$1 = Emotion;

var jsx = function jsx(type, props) {
  // eslint-disable-next-line prefer-rest-params
  var args = arguments;

  if (props == null || !hasOwn.call(props, 'css')) {
    return React__namespace.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion$1;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }

  return React__namespace.createElement.apply(null, createElementArgArray);
};

(function (_jsx) {
  var JSX;

  (function (_JSX) {})(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
})(jsx || (jsx = {}));

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}

// eslint-disable-next-line no-undef
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var isBrowser = typeof document !== 'undefined';

var testOmitPropsOnStringTag = isPropValid;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  if (!isBrowser && rules !== undefined) {
    var _ref2;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/React__namespace.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var createStyled$1 = function createStyled(tag, options) {

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      // eslint-disable-next-line prefer-spread
      styles.push.apply(styles, args);
    } else {
      var templateStringsArr = args[0];

      styles.push(templateStringsArr[0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {

        styles.push(args[i], templateStringsArr[i]);
      }
    }

    var Styled = withEmotionCache(function (props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = React__namespace.useContext(ThemeContext);
      }

      if (typeof props.className === 'string') {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if (finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;

      if (ref) {
        newProps.ref = ref;
      }

      return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(Insertion, {
        cache: cache,
        serialized: serialized,
        isStringTag: typeof FinalTag === 'string'
      }), /*#__PURE__*/React__namespace.createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {

        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      var newStyled = createStyled(nextTag, _extends$1({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      }));
      return newStyled.apply(void 0, styles);
    };

    return Styled;
  };
};

var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// bind it to avoid mutating the original function
var styled$2 = createStyled$1.bind(null);
tags.forEach(function (tagName) {
  styled$2[tagName] = styled$2(tagName);
});

/**
 * @mui/styled-engine v7.3.7
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function styled$1(tag, options) {
  const stylesFactory = styled$2(tag, options);
  if (process.env.NODE_ENV !== 'production') {
    return (...styles) => {
      const component = typeof tag === 'string' ? `"${tag}"` : 'component';
      if (styles.length === 0) {
        console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join('\n'));
      } else if (styles.some(style => style === undefined)) {
        console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
      }
      return stylesFactory(...styles);
    };
  }
  return stylesFactory;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function internal_mutateStyles(tag, processor) {
  // Emotion attaches all the styles as `__emotion_styles`.
  // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
  if (Array.isArray(tag.__emotion_styles)) {
    tag.__emotion_styles = processor(tag.__emotion_styles);
  }
}

// Emotion only accepts an array, but we want to avoid allocations
const wrapper = [];
// eslint-disable-next-line @typescript-eslint/naming-convention
function internal_serializeStyles(styles) {
  wrapper[0] = styles;
  return serializeStyles(wrapper);
}

// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
const sortBreakpointsValues = values => {
  const breakpointsAsArray = Object.keys(values).map(key => ({
    key,
    val: values[key]
  })) || [];
  // Sort in ascending order
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return {
      ...acc,
      [obj.key]: obj.val
    };
  }, {});
};

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536 // large screen
    },
    unit = 'px',
    step = 5,
    ...other
  } = breakpoints;
  const sortedValues = sortBreakpointsValues(values);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    // handle first and last key separately, for better readability
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
  }
  return {
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit,
    ...other
  };
}

const shape = {
  borderRadius: 4
};

// The different signatures imply different meaning for their arguments that can't be expressed structurally.
// We express the difference with variable names.

function createSpacing(spacingInput = 8,
// Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
// Smaller components, such as icons, can align to a 4dp grid.
// https://m2.material.io/design/layout/understanding-layout.html
transform = createUnarySpacing({
  spacing: spacingInput
})) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  }
  const spacing = (...argsInput) => {
    if (process.env.NODE_ENV !== 'production') {
      if (!(argsInput.length <= 4)) {
        console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
      }
    }
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(argument => {
      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  };
  spacing.mui = true;
  return spacing;
}

/**
 * A universal utility to style components with multiple color modes. Always use it from the theme object.
 * It works with:
 *  - [Basic theme](https://mui.com/material-ui/customization/dark-mode/)
 *  - [CSS theme variables](https://mui.com/material-ui/customization/css-theme-variables/overview/)
 *  - Zero-runtime engine
 *
 * Tips: Use an array over object spread and place `theme.applyStyles()` last.
 *
 * With the styled function:
 * ✅ [{ background: '#e5e5e5' }, theme.applyStyles('dark', { background: '#1c1c1c' })]
 * 🚫 { background: '#e5e5e5', ...theme.applyStyles('dark', { background: '#1c1c1c' })}
 *
 * With the sx prop:
 * ✅ [{ background: '#e5e5e5' }, theme => theme.applyStyles('dark', { background: '#1c1c1c' })]
 * 🚫 { background: '#e5e5e5', ...theme => theme.applyStyles('dark', { background: '#1c1c1c' })}
 *
 * @example
 * 1. using with `styled`:
 * ```jsx
 *   const Component = styled('div')(({ theme }) => [
 *     { background: '#e5e5e5' },
 *     theme.applyStyles('dark', {
 *       background: '#1c1c1c',
 *       color: '#fff',
 *     }),
 *   ]);
 * ```
 *
 * @example
 * 2. using with `sx` prop:
 * ```jsx
 *   <Box sx={[
 *     { background: '#e5e5e5' },
 *     theme => theme.applyStyles('dark', {
 *        background: '#1c1c1c',
 *        color: '#fff',
 *      }),
 *     ]}
 *   />
 * ```
 *
 * @example
 * 3. theming a component:
 * ```jsx
 *   extendTheme({
 *     components: {
 *       MuiButton: {
 *         styleOverrides: {
 *           root: ({ theme }) => [
 *             { background: '#e5e5e5' },
 *             theme.applyStyles('dark', {
 *               background: '#1c1c1c',
 *               color: '#fff',
 *             }),
 *           ],
 *         },
 *       }
 *     }
 *   })
 *```
 */
function applyStyles(key, styles) {
  // @ts-expect-error this is 'any' type
  const theme = this;
  if (theme.vars) {
    if (!theme.colorSchemes?.[key] || typeof theme.getColorSchemeSelector !== 'function') {
      return {};
    }
    // If CssVarsProvider is used as a provider, returns '*:where({selector}) &'
    let selector = theme.getColorSchemeSelector(key);
    if (selector === '&') {
      return styles;
    }
    if (selector.includes('data-') || selector.includes('.')) {
      // '*' is required as a workaround for Emotion issue (https://github.com/emotion-js/emotion/issues/2836)
      selector = `*:where(${selector.replace(/\s*&$/, '')}) &`;
    }
    return {
      [selector]: styles
    };
  }
  if (theme.palette.mode === key) {
    return styles;
  }
  return {};
}

function createTheme$1(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {},
    ...other
  } = options;
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: {
      mode: 'light',
      ...paletteInput
    },
    spacing,
    shape: {
      ...shape,
      ...shapeInput
    }
  }, other);
  muiTheme = cssContainerQueries(muiTheme);
  muiTheme.applyStyles = applyStyles;
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = {
    ...defaultSxConfig,
    ...other?.unstable_sxConfig
  };
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}

function isObjectEmpty$1(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme$2(defaultTheme = null) {
  const contextTheme = React__namespace.useContext(ThemeContext);
  return !contextTheme || isObjectEmpty$1(contextTheme) ? defaultTheme : contextTheme;
}

const systemDefaultTheme$1 = createTheme$1();
function useTheme$1(defaultTheme = systemDefaultTheme$1) {
  return useTheme$2(defaultTheme);
}

const defaultGenerator = componentName => componentName;
const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
const ClassNameGenerator = createClassNameGenerator();

const globalStateClasses = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected'
};
function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
}

function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
  const result = {};
  slots.forEach(slot => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}

function getFunctionComponentName(Component, fallback = '') {
  return Component.displayName || Component.name || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
}

/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName
 */
function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }
  if (typeof Component === 'string') {
    return Component;
  }
  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
  if (typeof Component === 'object') {
    switch (Component.$$typeof) {
      case reactIsExports$1.ForwardRef:
        return getWrappedName(Component, Component.render, 'ForwardRef');
      case reactIsExports$1.Memo:
        return getWrappedName(Component, Component.type, 'memo');
      default:
        return undefined;
    }
  }
  return undefined;
}

function preprocessStyles(input) {
  const {
    variants,
    ...style
  } = input;
  const result = {
    variants,
    style: internal_serializeStyles(style),
    isProcessed: true
  };

  // Not supported on styled-components
  if (result.style === style) {
    return result;
  }
  if (variants) {
    variants.forEach(variant => {
      if (typeof variant.style !== 'function') {
        variant.style = internal_serializeStyles(variant.style);
      }
    });
  }
  return result;
}

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-labels */
/* eslint-disable no-lone-blocks */

const systemDefaultTheme = createTheme$1();

// Update /system/styled/#api in case if this changes
function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
function shallowLayer(serialized, layerName) {
  if (layerName && serialized && typeof serialized === 'object' && serialized.styles && !serialized.styles.startsWith('@layer') // only add the layer if it is not already there.
  ) {
    serialized.styles = `@layer ${layerName}{${String(serialized.styles)}}`;
  }
  return serialized;
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (_props, styles) => styles[slot];
}
function attachTheme(props, themeId, defaultTheme) {
  props.theme = isObjectEmpty(props.theme) ? defaultTheme : props.theme[themeId] || props.theme;
}
function processStyle(props, style, layerName) {
  /*
   * Style types:
   *  - null/undefined
   *  - string
   *  - CSS style object: { [cssKey]: [cssValue], variants }
   *  - Processed style object: { style, variants, isProcessed: true }
   *  - Array of any of the above
   */

  const resolvedStyle = typeof style === 'function' ? style(props) : style;
  if (Array.isArray(resolvedStyle)) {
    return resolvedStyle.flatMap(subStyle => processStyle(props, subStyle, layerName));
  }
  if (Array.isArray(resolvedStyle?.variants)) {
    let rootStyle;
    if (resolvedStyle.isProcessed) {
      rootStyle = layerName ? shallowLayer(resolvedStyle.style, layerName) : resolvedStyle.style;
    } else {
      const {
        variants,
        ...otherStyles
      } = resolvedStyle;
      rootStyle = layerName ? shallowLayer(internal_serializeStyles(otherStyles), layerName) : otherStyles;
    }
    return processStyleVariants(props, resolvedStyle.variants, [rootStyle], layerName);
  }
  if (resolvedStyle?.isProcessed) {
    return layerName ? shallowLayer(internal_serializeStyles(resolvedStyle.style), layerName) : resolvedStyle.style;
  }
  return layerName ? shallowLayer(internal_serializeStyles(resolvedStyle), layerName) : resolvedStyle;
}
function processStyleVariants(props, variants, results = [], layerName = undefined) {
  let mergedState; // We might not need it, initialized lazily

  variantLoop: for (let i = 0; i < variants.length; i += 1) {
    const variant = variants[i];
    if (typeof variant.props === 'function') {
      mergedState ??= {
        ...props,
        ...props.ownerState,
        ownerState: props.ownerState
      };
      if (!variant.props(mergedState)) {
        continue;
      }
    } else {
      for (const key in variant.props) {
        if (props[key] !== variant.props[key] && props.ownerState?.[key] !== variant.props[key]) {
          continue variantLoop;
        }
      }
    }
    if (typeof variant.style === 'function') {
      mergedState ??= {
        ...props,
        ...props.ownerState,
        ownerState: props.ownerState
      };
      results.push(layerName ? shallowLayer(internal_serializeStyles(variant.style(mergedState)), layerName) : variant.style(mergedState));
    } else {
      results.push(layerName ? shallowLayer(internal_serializeStyles(variant.style), layerName) : variant.style);
    }
  }
  return results;
}
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme = systemDefaultTheme,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  function styleAttachTheme(props) {
    attachTheme(props, themeId, defaultTheme);
  }
  const styled = (tag, inputOptions = {}) => {
    // If `tag` is already a styled component, filter out the `sx` style function
    // to prevent unnecessary styles generated by the composite components.
    internal_mutateStyles(tag, styles => styles.filter(style => style !== styleFunctionSx));
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot)),
      ...options
    } = inputOptions;
    const layerName = componentName && componentName.startsWith('Mui') || !!componentSlot ? 'components' : 'custom';

    // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver :
    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
    const skipSx = inputSkipSx || false;
    let shouldForwardPropOption = shouldForwardProp;

    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    if (componentSlot === 'Root' || componentSlot === 'root') {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      // any other slot specified
      shouldForwardPropOption = slotShouldForwardProp;
    } else if (isStringTag(tag)) {
      // for string (html) tag, preserve the behavior in emotion & styled-components.
      shouldForwardPropOption = undefined;
    }
    const defaultStyledResolver = styled$1(tag, {
      shouldForwardProp: shouldForwardPropOption,
      label: generateStyledLabel(componentName, componentSlot),
      ...options
    });
    const transformStyle = style => {
      // - On the server Emotion doesn't use React.forwardRef for creating components, so the created
      //   component stays as a function. This condition makes sure that we do not interpolate functions
      //   which are basically components used as a selectors.
      // - `style` could be a styled component from a babel plugin for component selectors, This condition
      //   makes sure that we do not interpolate them.
      if (style.__emotion_real === style) {
        return style;
      }
      if (typeof style === 'function') {
        return function styleFunctionProcessor(props) {
          return processStyle(props, style, props.theme.modularCssLayers ? layerName : undefined);
        };
      }
      if (isPlainObject(style)) {
        const serialized = preprocessStyles(style);
        return function styleObjectProcessor(props) {
          if (!serialized.variants) {
            return props.theme.modularCssLayers ? shallowLayer(serialized.style, layerName) : serialized.style;
          }
          return processStyle(props, serialized, props.theme.modularCssLayers ? layerName : undefined);
        };
      }
      return style;
    };
    const muiStyledResolver = (...expressionsInput) => {
      const expressionsHead = [];
      const expressionsBody = expressionsInput.map(transformStyle);
      const expressionsTail = [];

      // Preprocess `props` to set the scoped theme value.
      // This must run before any other expression.
      expressionsHead.push(styleAttachTheme);
      if (componentName && overridesResolver) {
        expressionsTail.push(function styleThemeOverrides(props) {
          const theme = props.theme;
          const styleOverrides = theme.components?.[componentName]?.styleOverrides;
          if (!styleOverrides) {
            return null;
          }
          const resolvedStyleOverrides = {};

          // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
          // eslint-disable-next-line guard-for-in
          for (const slotKey in styleOverrides) {
            resolvedStyleOverrides[slotKey] = processStyle(props, styleOverrides[slotKey], props.theme.modularCssLayers ? 'theme' : undefined);
          }
          return overridesResolver(props, resolvedStyleOverrides);
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsTail.push(function styleThemeVariants(props) {
          const theme = props.theme;
          const themeVariants = theme?.components?.[componentName]?.variants;
          if (!themeVariants) {
            return null;
          }
          return processStyleVariants(props, themeVariants, [], props.theme.modularCssLayers ? 'theme' : undefined);
        });
      }
      if (!skipSx) {
        expressionsTail.push(styleFunctionSx);
      }

      // This function can be called as a tagged template, so the first argument would contain
      // CSS `string[]` values.
      if (Array.isArray(expressionsBody[0])) {
        const inputStrings = expressionsBody.shift();

        // We need to add placeholders in the tagged template for the custom functions we have
        // possibly added (attachTheme, overrides, variants, and sx).
        const placeholdersHead = new Array(expressionsHead.length).fill('');
        const placeholdersTail = new Array(expressionsTail.length).fill('');
        let outputStrings;
        // prettier-ignore
        {
          outputStrings = [...placeholdersHead, ...inputStrings, ...placeholdersTail];
          outputStrings.raw = [...placeholdersHead, ...inputStrings.raw, ...placeholdersTail];
        }

        // The only case where we put something before `attachTheme`
        expressionsHead.unshift(outputStrings);
      }
      const expressions = [...expressionsHead, ...expressionsBody, ...expressionsTail];
      const Component = defaultStyledResolver(...expressions);
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      if (process.env.NODE_ENV !== 'production') {
        Component.displayName = generateDisplayName(componentName, componentSlot, tag);
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
  return styled;
}
function generateDisplayName(componentName, componentSlot, tag) {
  if (componentName) {
    return `${componentName}${capitalize(componentSlot || '')}`;
  }
  return `Styled(${getDisplayName(tag)})`;
}
function generateStyledLabel(componentName, componentSlot) {
  let label;
  if (process.env.NODE_ENV !== 'production') {
    if (componentName) {
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      label = `${componentName}-${lowercaseFirstLetter(componentSlot || 'Root')}`;
    }
  }
  return label;
}
function isObjectEmpty(object) {
  // eslint-disable-next-line
  for (const _ in object) {
    return false;
  }
  return true;
}

// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
  return typeof tag === 'string' &&
  // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}
function lowercaseFirstLetter(string) {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
}

/**
 * Add keys, values of `defaultProps` that does not exist in `props`
 * @param defaultProps
 * @param props
 * @param mergeClassNameAndStyle If `true`, merges `className` and `style` props instead of overriding them.
 *   When `false` (default), props override defaultProps. When `true`, `className` values are concatenated
 *   and `style` objects are merged with props taking precedence.
 * @returns resolved props
 */
function resolveProps(defaultProps, props, mergeClassNameAndStyle = false) {
  const output = {
    ...props
  };
  for (const key in defaultProps) {
    if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
      const propName = key;
      if (propName === 'components' || propName === 'slots') {
        output[propName] = {
          ...defaultProps[propName],
          ...output[propName]
        };
      } else if (propName === 'componentsProps' || propName === 'slotProps') {
        const defaultSlotProps = defaultProps[propName];
        const slotProps = props[propName];
        if (!slotProps) {
          output[propName] = defaultSlotProps || {};
        } else if (!defaultSlotProps) {
          output[propName] = slotProps;
        } else {
          output[propName] = {
            ...slotProps
          };
          for (const slotKey in defaultSlotProps) {
            if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
              const slotPropName = slotKey;
              output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName], mergeClassNameAndStyle);
            }
          }
        }
      } else if (propName === 'className' && mergeClassNameAndStyle && props.className) {
        output.className = clsx(defaultProps?.className, props?.className);
      } else if (propName === 'style' && mergeClassNameAndStyle && props.style) {
        output.style = {
          ...defaultProps?.style,
          ...props?.style
        };
      } else if (output[propName] === undefined) {
        output[propName] = defaultProps[propName];
      }
    }
  }
  return output;
}

function getThemeProps$1(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return resolveProps(theme.components[name].defaultProps, props);
}

function useThemeProps$3({
  props,
  name,
  defaultTheme,
  themeId
}) {
  let theme = useTheme$1(defaultTheme);
  {
    theme = theme[themeId] || theme;
  }
  return getThemeProps$1({
    theme,
    name,
    props
  });
}

/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */
const useEnhancedEffect = typeof window !== 'undefined' ? React__namespace.useLayoutEffect : React__namespace.useEffect;

function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.max(min, Math.min(val, max));
}

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clampWrapper(value, min = 0, max = 1) {
  if (process.env.NODE_ENV !== 'production') {
    if (value < min || value > max) {
      console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`);
    }
  }
  return clamp(value, min, max);
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
function hexToRgb(color) {
  color = color.slice(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }
  if (process.env.NODE_ENV !== 'production') {
    if (color.length !== color.trim().length) {
      console.error(`MUI: The color: "${color}" is invalid. Make sure the color input doesn't contain leading/trailing space.`);
    }
  }
  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */
function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }
  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }
  const marker = color.indexOf('(');
  const type = color.substring(0, marker);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(type)) {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${color}\` color.\n` + 'The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().' : formatMuiErrorMessage(9, color));
  }
  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;
  if (type === 'color') {
    values = values.split(' ');
    colorSpace = values.shift();
    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].slice(1);
    }
    if (!['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(colorSpace)) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${colorSpace}\` color space.\n` + 'The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.' : formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values = values.split(',');
  }
  values = values.map(value => parseFloat(value));
  return {
    type,
    values,
    colorSpace
  };
}

/**
 * Returns a channel created from the input color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
 */
const colorChannel = color => {
  const decomposedColor = decomposeColor(color);
  return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.includes('hsl') && idx !== 0 ? `${val}%` : val).join(' ');
};
const private_safeColorChannel = (color, warning) => {
  try {
    return colorChannel(color);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
};

/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function recomposeColor(color) {
  const {
    type,
    colorSpace
  } = color;
  let {
    values
  } = color;
  if (type.includes('rgb')) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.includes('hsl')) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  if (type.includes('color')) {
    values = `${colorSpace} ${values.join(' ')}`;
  } else {
    values = `${values.join(', ')}`;
  }
  return `${type}(${values})`;
}

/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */
function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let type = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === 'hsl' || color.type === 'hsla' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    if (color.type !== 'color') {
      val /= 255; // normalized
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function alpha(color, value) {
  color = decomposeColor(color);
  value = clampWrapper(value);
  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  if (color.type === 'color') {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }
  return recomposeColor(color);
}
function private_safeAlpha(color, value, warning) {
  try {
    return alpha(color, value);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
}

/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.includes('hsl')) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.includes('rgb') || color.type.includes('color')) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeDarken(color, coefficient, warning) {
  try {
    return darken(color, coefficient);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
}

/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.includes('hsl')) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.includes('rgb')) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.includes('color')) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeLighten(color, coefficient, warning) {
  try {
    return lighten(color, coefficient);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
}

/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color, coefficient = 0.15) {
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
function private_safeEmphasize(color, coefficient, warning) {
  try {
    return emphasize(color, coefficient);
  } catch (error) {
    return color;
  }
}

const RtlContext = /*#__PURE__*/React__namespace.createContext();
process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  value: PropTypes.bool
} : void 0;
const useRtl = () => {
  const value = React__namespace.useContext(RtlContext);
  return value ?? false;
};

const PropsContext = /*#__PURE__*/React__namespace.createContext(undefined);
process.env.NODE_ENV !== "production" ? {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  value: PropTypes.object
} : void 0;
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name]) {
    return props;
  }
  const config = theme.components[name];
  if (config.defaultProps) {
    // compatible with v5 signature
    return resolveProps(config.defaultProps, props, theme.components.mergeClassNameAndStyle);
  }
  if (!config.styleOverrides && !config.variants) {
    // v6 signature, no property 'defaultProps'
    return resolveProps(config, props, theme.components.mergeClassNameAndStyle);
  }
  return props;
}
function useDefaultProps$1({
  props,
  name
}) {
  const ctx = React__namespace.useContext(PropsContext);
  return getThemeProps({
    props,
    name,
    theme: {
      components: ctx
    }
  });
}

let globalId = 0;

// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React__namespace.useState(idOverride);
  const id = idOverride || defaultId;
  React__namespace.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}

// See https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379 for why
const safeReact = {
  ...React__namespace
};
const maybeReactUseId = safeReact.useId;

/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride) {
  // React.useId() is only available from React 17.0.0.
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride ?? reactId;
  }

  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride);
}

/* eslint-disable @typescript-eslint/naming-convention */

// We need to pass an argument as `{ theme }` for PigmentCSS, but we don't want to
// allocate more objects.
const arg = {
  theme: undefined
};

/**
 * Memoize style function on theme.
 * Intended to be used in styled() calls that only need access to the theme.
 */
function unstable_memoTheme(styleFn) {
  let lastValue;
  let lastTheme;
  return function styleMemoized(props) {
    let value = lastValue;
    if (value === undefined || props.theme !== lastTheme) {
      arg.theme = props.theme;
      value = preprocessStyles(styleFn(arg));
      lastValue = value;
      lastTheme = props.theme;
    }
    return value;
  };
}

/**
 * The benefit of this function is to help developers get CSS var from theme without specifying the whole variable
 * and they does not need to remember the prefix (defined once).
 */
function createGetCssVar$1(prefix = '') {
  function appendVar(...vars) {
    if (!vars.length) {
      return '';
    }
    const value = vars[0];
    if (typeof value === 'string' && !value.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)) {
      return `, var(--${prefix ? `${prefix}-` : ''}${value}${appendVar(...vars.slice(1))})`;
    }
    return `, ${value}`;
  }

  // AdditionalVars makes `getCssVar` less strict, so it can be use like this `getCssVar('non-mui-variable')` without type error.
  const getCssVar = (field, ...fallbacks) => {
    return `var(--${prefix ? `${prefix}-` : ''}${field}${appendVar(...fallbacks)})`;
  };
  return getCssVar;
}

/**
 * This function create an object from keys, value and then assign to target
 *
 * @param {Object} obj : the target object to be assigned
 * @param {string[]} keys
 * @param {string | number} value
 *
 * @example
 * const source = {}
 * assignNestedKeys(source, ['palette', 'primary'], 'var(--palette-primary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)' } }
 *
 * @example
 * const source = { palette: { primary: 'var(--palette-primary)' } }
 * assignNestedKeys(source, ['palette', 'secondary'], 'var(--palette-secondary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)', secondary: 'var(--palette-secondary)' } }
 */
const assignNestedKeys = (obj, keys, value, arrayKeys = []) => {
  let temp = obj;
  keys.forEach((k, index) => {
    if (index === keys.length - 1) {
      if (Array.isArray(temp)) {
        temp[Number(k)] = value;
      } else if (temp && typeof temp === 'object') {
        temp[k] = value;
      }
    } else if (temp && typeof temp === 'object') {
      if (!temp[k]) {
        temp[k] = arrayKeys.includes(k) ? [] : {};
      }
      temp = temp[k];
    }
  });
};

/**
 *
 * @param {Object} obj : source object
 * @param {Function} callback : a function that will be called when
 *                   - the deepest key in source object is reached
 *                   - the value of the deepest key is NOT `undefined` | `null`
 *
 * @example
 * walkObjectDeep({ palette: { primary: { main: '#000000' } } }, console.log)
 * // ['palette', 'primary', 'main'] '#000000'
 */
const walkObjectDeep = (obj, callback, shouldSkipPaths) => {
  function recurse(object, parentKeys = [], arrayKeys = []) {
    Object.entries(object).forEach(([key, value]) => {
      if (!shouldSkipPaths || shouldSkipPaths && !shouldSkipPaths([...parentKeys, key])) {
        if (value !== undefined && value !== null) {
          if (typeof value === 'object' && Object.keys(value).length > 0) {
            recurse(value, [...parentKeys, key], Array.isArray(value) ? [...arrayKeys, key] : arrayKeys);
          } else {
            callback([...parentKeys, key], value, arrayKeys);
          }
        }
      }
    });
  }
  recurse(obj);
};
const getCssValue = (keys, value) => {
  if (typeof value === 'number') {
    if (['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some(prop => keys.includes(prop))) {
      // CSS property that are unitless
      return value;
    }
    const lastKey = keys[keys.length - 1];
    if (lastKey.toLowerCase().includes('opacity')) {
      // opacity values are unitless
      return value;
    }
    return `${value}px`;
  }
  return value;
};

/**
 * a function that parse theme and return { css, vars }
 *
 * @param {Object} theme
 * @param {{
 *  prefix?: string,
 *  shouldSkipGeneratingVar?: (objectPathKeys: Array<string>, value: string | number) => boolean
 * }} options.
 *  `prefix`: The prefix of the generated CSS variables. This function does not change the value.
 *
 * @returns {{ css: Object, vars: Object }} `css` is the stylesheet, `vars` is an object to get css variable (same structure as theme).
 *
 * @example
 * const { css, vars } = parser({
 *   fontSize: 12,
 *   lineHeight: 1.2,
 *   palette: { primary: { 500: 'var(--color)' } }
 * }, { prefix: 'foo' })
 *
 * console.log(css) // { '--foo-fontSize': '12px', '--foo-lineHeight': 1.2, '--foo-palette-primary-500': 'var(--color)' }
 * console.log(vars) // { fontSize: 'var(--foo-fontSize)', lineHeight: 'var(--foo-lineHeight)', palette: { primary: { 500: 'var(--foo-palette-primary-500)' } } }
 */
function cssVarsParser(theme, options) {
  const {
    prefix,
    shouldSkipGeneratingVar
  } = options || {};
  const css = {};
  const vars = {};
  const varsWithDefaults = {};
  walkObjectDeep(theme, (keys, value, arrayKeys) => {
    if (typeof value === 'string' || typeof value === 'number') {
      if (!shouldSkipGeneratingVar || !shouldSkipGeneratingVar(keys, value)) {
        // only create css & var if `shouldSkipGeneratingVar` return false
        const cssVar = `--${prefix ? `${prefix}-` : ''}${keys.join('-')}`;
        const resolvedValue = getCssValue(keys, value);
        Object.assign(css, {
          [cssVar]: resolvedValue
        });
        assignNestedKeys(vars, keys, `var(${cssVar})`, arrayKeys);
        assignNestedKeys(varsWithDefaults, keys, `var(${cssVar}, ${resolvedValue})`, arrayKeys);
      }
    }
  }, keys => keys[0] === 'vars' // skip 'vars/*' paths
  );
  return {
    css,
    vars,
    varsWithDefaults
  };
}

function prepareCssVars(theme, parserConfig = {}) {
  const {
    getSelector = defaultGetSelector,
    disableCssColorScheme,
    colorSchemeSelector: selector,
    enableContrastVars
  } = parserConfig;
  // @ts-ignore - ignore components do not exist
  const {
    colorSchemes = {},
    components,
    defaultColorScheme = 'light',
    ...otherTheme
  } = theme;
  const {
    vars: rootVars,
    css: rootCss,
    varsWithDefaults: rootVarsWithDefaults
  } = cssVarsParser(otherTheme, parserConfig);
  let themeVars = rootVarsWithDefaults;
  const colorSchemesMap = {};
  const {
    [defaultColorScheme]: defaultScheme,
    ...otherColorSchemes
  } = colorSchemes;
  Object.entries(otherColorSchemes || {}).forEach(([key, scheme]) => {
    const {
      vars,
      css,
      varsWithDefaults
    } = cssVarsParser(scheme, parserConfig);
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap[key] = {
      css,
      vars
    };
  });
  if (defaultScheme) {
    // default color scheme vars should be merged last to set as default
    const {
      css,
      vars,
      varsWithDefaults
    } = cssVarsParser(defaultScheme, parserConfig);
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap[defaultColorScheme] = {
      css,
      vars
    };
  }
  function defaultGetSelector(colorScheme, cssObject) {
    let rule = selector;
    if (selector === 'class') {
      rule = '.%s';
    }
    if (selector === 'data') {
      rule = '[data-%s]';
    }
    if (selector?.startsWith('data-') && !selector.includes('%s')) {
      // 'data-joy-color-scheme' -> '[data-joy-color-scheme="%s"]'
      rule = `[${selector}="%s"]`;
    }
    if (colorScheme) {
      if (rule === 'media') {
        if (theme.defaultColorScheme === colorScheme) {
          return ':root';
        }
        const mode = colorSchemes[colorScheme]?.palette?.mode || colorScheme;
        return {
          [`@media (prefers-color-scheme: ${mode})`]: {
            ':root': cssObject
          }
        };
      }
      if (rule) {
        if (theme.defaultColorScheme === colorScheme) {
          return `:root, ${rule.replace('%s', String(colorScheme))}`;
        }
        return rule.replace('%s', String(colorScheme));
      }
    }
    return ':root';
  }
  const generateThemeVars = () => {
    let vars = {
      ...rootVars
    };
    Object.entries(colorSchemesMap).forEach(([, {
      vars: schemeVars
    }]) => {
      vars = deepmerge(vars, schemeVars);
    });
    return vars;
  };
  const generateStyleSheets = () => {
    const stylesheets = [];
    const colorScheme = theme.defaultColorScheme || 'light';
    function insertStyleSheet(key, css) {
      if (Object.keys(css).length) {
        stylesheets.push(typeof key === 'string' ? {
          [key]: {
            ...css
          }
        } : key);
      }
    }
    insertStyleSheet(getSelector(undefined, {
      ...rootCss
    }), rootCss);
    const {
      [colorScheme]: defaultSchemeVal,
      ...other
    } = colorSchemesMap;
    if (defaultSchemeVal) {
      // default color scheme has to come before other color schemes
      const {
        css
      } = defaultSchemeVal;
      const cssColorSheme = colorSchemes[colorScheme]?.palette?.mode;
      const finalCss = !disableCssColorScheme && cssColorSheme ? {
        colorScheme: cssColorSheme,
        ...css
      } : {
        ...css
      };
      insertStyleSheet(getSelector(colorScheme, {
        ...finalCss
      }), finalCss);
    }
    Object.entries(other).forEach(([key, {
      css
    }]) => {
      const cssColorSheme = colorSchemes[key]?.palette?.mode;
      const finalCss = !disableCssColorScheme && cssColorSheme ? {
        colorScheme: cssColorSheme,
        ...css
      } : {
        ...css
      };
      insertStyleSheet(getSelector(key, {
        ...finalCss
      }), finalCss);
    });
    if (enableContrastVars) {
      stylesheets.push({
        ':root': {
          // use double underscore to indicate that these are private variables
          '--__l-threshold': '0.7',
          '--__l': 'clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)',
          '--__a': 'clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)' // 0.87 is the default alpha value for black text.
        }
      });
    }
    return stylesheets;
  };
  return {
    vars: themeVars,
    generateThemeVars,
    generateStyleSheets
  };
}

/* eslint-disable import/prefer-default-export */
function createGetColorSchemeSelector(selector) {
  return function getColorSchemeSelector(colorScheme) {
    if (selector === 'media') {
      if (process.env.NODE_ENV !== 'production') {
        if (colorScheme !== 'light' && colorScheme !== 'dark') {
          console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${colorScheme}'.`);
        }
      }
      return `@media (prefers-color-scheme: ${colorScheme})`;
    }
    if (selector) {
      if (selector.startsWith('data-') && !selector.includes('%s')) {
        return `[${selector}="${colorScheme}"] &`;
      }
      if (selector === 'class') {
        return `.${colorScheme} &`;
      }
      if (selector === 'data') {
        return `[data-${colorScheme}] &`;
      }
      return `${selector.replace('%s', colorScheme)} &`;
    }
    return '&';
  };
}

const common = {
  black: '#000',
  white: '#fff'
};

const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161'
};

const purple = {
  50: '#f3e5f5',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  700: '#7b1fa2'};

const red = {
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  700: '#d32f2f',
  800: '#c62828'};

const orange = {
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  700: '#f57c00',
  900: '#e65100'};

const blue = {
  50: '#e3f2fd',
  200: '#90caf9',
  400: '#42a5f5',
  700: '#1976d2',
  800: '#1565c0'};

const lightBlue = {
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  700: '#0288d1',
  900: '#01579b'};

const green = {
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20'};

function getLight() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.6)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common.white,
      default: common.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const light = getLight();
function getDark() {
  return {
    text: {
      primary: common.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: '#121212',
      default: '#121212'
    },
    action: {
      active: common.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const dark = getDark();
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function mixLightOrDark(colorSpace, intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = `color-mix(in ${colorSpace}, ${intent.main}, #fff ${(tonalOffsetLight * 100).toFixed(0)}%)`;
    } else if (direction === 'dark') {
      intent.dark = `color-mix(in ${colorSpace}, ${intent.main}, #000 ${(tonalOffsetDark * 100).toFixed(0)}%)`;
    }
  }
}
function getDefaultPrimary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: blue[200],
      light: blue[50],
      dark: blue[400]
    };
  }
  return {
    main: blue[700],
    light: blue[400],
    dark: blue[800]
  };
}
function getDefaultSecondary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: purple[200],
      light: purple[50],
      dark: purple[400]
    };
  }
  return {
    main: purple[500],
    light: purple[300],
    dark: purple[700]
  };
}
function getDefaultError(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: red[500],
      light: red[300],
      dark: red[700]
    };
  }
  return {
    main: red[700],
    light: red[400],
    dark: red[800]
  };
}
function getDefaultInfo(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: lightBlue[400],
      light: lightBlue[300],
      dark: lightBlue[700]
    };
  }
  return {
    main: lightBlue[700],
    light: lightBlue[500],
    dark: lightBlue[900]
  };
}
function getDefaultSuccess(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: green[400],
      light: green[300],
      dark: green[700]
    };
  }
  return {
    main: green[800],
    light: green[500],
    dark: green[900]
  };
}
function getDefaultWarning(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: orange[400],
      light: orange[300],
      dark: orange[700]
    };
  }
  return {
    main: '#ed6c02',
    // closest to orange[800] that pass 3:1.
    light: orange[500],
    dark: orange[900]
  };
}

// Use the same name as the experimental CSS `contrast-color` function.
function contrastColor(background) {
  return `oklch(from ${background} var(--__l) 0 h / var(--__a))`;
}
function createPalette(palette) {
  const {
    mode = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2,
    colorSpace,
    ...other
  } = palette;
  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode);

  // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
  function getContrastText(background) {
    if (colorSpace) {
      return contrastColor(background);
    }
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    if (process.env.NODE_ENV !== 'production') {
      const contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }
    return contrastText;
  }
  const augmentColor = ({
    color,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color = {
      ...color
    };
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }
    if (!color.hasOwnProperty('main')) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.\n` + `The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : formatMuiErrorMessage(11, name ? ` (${name})` : '', mainShade));
    }
    if (typeof color.main !== 'string') {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.\n` + `\`color.main\` should be a string, but \`${JSON.stringify(color.main)}\` was provided instead.\n` + '\n' + 'Did you intend to use one of the following approaches?\n' + '\n' + 'import { green } from "@mui/material/colors";\n' + '\n' + 'const theme1 = createTheme({ palette: {\n' + '  primary: green,\n' + '} });\n' + '\n' + 'const theme2 = createTheme({ palette: {\n' + '  primary: { main: green[500] },\n' + '} });' : formatMuiErrorMessage(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
    }
    if (colorSpace) {
      mixLightOrDark(colorSpace, color, 'light', lightShade, tonalOffset);
      mixLightOrDark(colorSpace, color, 'dark', darkShade, tonalOffset);
    } else {
      addLightOrDark(color, 'light', lightShade, tonalOffset);
      addLightOrDark(color, 'dark', darkShade, tonalOffset);
    }
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
    return color;
  };
  let modeHydrated;
  if (mode === 'light') {
    modeHydrated = getLight();
  } else if (mode === 'dark') {
    modeHydrated = getDark();
  }
  if (process.env.NODE_ENV !== 'production') {
    if (!modeHydrated) {
      console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
    }
  }
  const paletteOutput = deepmerge({
    // A collection of common colors.
    common: {
      ...common
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: 'primary'
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: 'secondary',
      mainShade: 'A400',
      lightShade: 'A200',
      darkShade: 'A700'
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: 'error'
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: 'warning'
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: 'info'
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: 'success'
    }),
    // The grey colors.
    grey,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset,
    // The light and dark mode object.
    ...modeHydrated
  }, other);
  return paletteOutput;
}

function prepareTypographyVars(typography) {
  const vars = {};
  const entries = Object.entries(typography);
  entries.forEach(entry => {
    const [key, value] = entry;
    if (typeof value === 'object') {
      vars[key] = `${value.fontStyle ? `${value.fontStyle} ` : ''}${value.fontVariant ? `${value.fontVariant} ` : ''}${value.fontWeight ? `${value.fontWeight} ` : ''}${value.fontStretch ? `${value.fontStretch} ` : ''}${value.fontSize || ''}${value.lineHeight ? `/${value.lineHeight} ` : ''}${value.fontFamily || ''}`;
    }
  });
  return vars;
}

function createMixins(breakpoints, mixins) {
  return {
    toolbar: {
      minHeight: 56,
      [breakpoints.up('xs')]: {
        '@media (orientation: landscape)': {
          minHeight: 48
        }
      },
      [breakpoints.up('sm')]: {
        minHeight: 64
      }
    },
    ...mixins
  };
}

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
  textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

/**
 * @see @link{https://m2.material.io/design/typography/the-type-system.html}
 * @see @link{https://m2.material.io/design/typography/understanding-typography.html}
 */
function createTypography(palette, typography) {
  const {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2,
    ...other
  } = typeof typography === 'function' ? typography(palette) : typography;
  if (process.env.NODE_ENV !== 'production') {
    if (typeof fontSize !== 'number') {
      console.error('MUI: `fontSize` is required to be a number.');
    }
    if (typeof htmlFontSize !== 'number') {
      console.error('MUI: `htmlFontSize` is required to be a number.');
    }
  }
  const coef = fontSize / 14;
  const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => ({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...(fontFamily === defaultFontFamily ? {
      letterSpacing: `${round(letterSpacing / size)}em`
    } : {}),
    ...casing,
    ...allVariants
  });
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit'
    }
  };
  return deepmerge({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    ...variants
  }, other, {
    clone: false // No need to clone deep
  });
}

const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
}

// Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

// Follow https://m2.material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height) {
  if (!height) {
    return 0;
  }
  const constant = height / 36;

  // https://www.desmos.com/calculator/vbrp3ggqet
  return Math.min(Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10), 3000);
}
function createTransitions(inputTransitions) {
  const mergedEasing = {
    ...easing,
    ...inputTransitions.easing
  };
  const mergedDuration = {
    ...duration,
    ...inputTransitions.duration
  };
  const create = (props = ['all'], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0,
      ...other
    } = options;
    if (process.env.NODE_ENV !== 'production') {
      const isString = value => typeof value === 'string';
      const isNumber = value => !Number.isNaN(parseFloat(value));
      if (!isString(props) && !Array.isArray(props)) {
        console.error('MUI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
      }
      if (!isString(easingOption)) {
        console.error('MUI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString(delay)) {
        console.error('MUI: Argument "delay" must be a number or a string.');
      }
      if (typeof options !== 'object') {
        console.error(['MUI: Secong argument of transition.create must be an object.', "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join('\n'));
      }
      if (Object.keys(other).length !== 0) {
        console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(',')}].`);
      }
    }
    return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
  };
  return {
    getAutoHeightDuration,
    create,
    ...inputTransitions,
    easing: mergedEasing,
    duration: mergedDuration
  };
}

// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};

/* eslint-disable import/prefer-default-export */
function isSerializable(val) {
  return isPlainObject(val) || typeof val === 'undefined' || typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number' || Array.isArray(val);
}

/**
 * `baseTheme` usually comes from `createTheme()` or `extendTheme()`.
 *
 * This function is intended to be used with zero-runtime CSS-in-JS like Pigment CSS
 * For example, in a Next.js project:
 *
 * ```js
 * // next.config.js
 * const { extendTheme } = require('@mui/material/styles');
 *
 * const theme = extendTheme();
 * // `.toRuntimeSource` is Pigment CSS specific to create a theme that is available at runtime.
 * theme.toRuntimeSource = stringifyTheme;
 *
 * module.exports = withPigment({
 *  theme,
 * });
 * ```
 */
function stringifyTheme(baseTheme = {}) {
  const serializableTheme = {
    ...baseTheme
  };
  function serializeTheme(object) {
    const array = Object.entries(object);
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < array.length; index++) {
      const [key, value] = array[index];
      if (!isSerializable(value) || key.startsWith('unstable_')) {
        delete object[key];
      } else if (isPlainObject(value)) {
        object[key] = {
          ...value
        };
        serializeTheme(object[key]);
      }
    }
  }
  serializeTheme(serializableTheme);
  return `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(serializableTheme, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}

function coefficientToPercentage(coefficient) {
  if (typeof coefficient === 'number') {
    return `${(coefficient * 100).toFixed(0)}%`;
  }
  return `calc((${coefficient}) * 100%)`;
}

// This can be removed when moved to `color-mix()` entirely.
const parseAddition = str => {
  if (!Number.isNaN(+str)) {
    return +str;
  }
  const numbers = str.match(/\d*\.?\d+/g);
  if (!numbers) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += +numbers[i];
  }
  return sum;
};
function attachColorManipulators(theme) {
  Object.assign(theme, {
    alpha(color, coefficient) {
      const obj = this || theme;
      if (obj.colorSpace) {
        return `oklch(from ${color} l c h / ${typeof coefficient === 'string' ? `calc(${coefficient})` : coefficient})`;
      }
      if (obj.vars) {
        // To preserve the behavior of the CSS theme variables
        // In the future, this could be replaced by `color-mix` (when https://caniuse.com/?search=color-mix reaches 95%).
        return `rgba(${color.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, 'var(--$1Channel)')} / ${typeof coefficient === 'string' ? `calc(${coefficient})` : coefficient})`;
      }
      return alpha(color, parseAddition(coefficient));
    },
    lighten(color, coefficient) {
      const obj = this || theme;
      if (obj.colorSpace) {
        return `color-mix(in ${obj.colorSpace}, ${color}, #fff ${coefficientToPercentage(coefficient)})`;
      }
      return lighten(color, coefficient);
    },
    darken(color, coefficient) {
      const obj = this || theme;
      if (obj.colorSpace) {
        return `color-mix(in ${obj.colorSpace}, ${color}, #000 ${coefficientToPercentage(coefficient)})`;
      }
      return darken(color, coefficient);
    }
  });
}
function createThemeNoVars(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput,
    mixins: mixinsInput = {},
    spacing: spacingInput,
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {},
    shape: shapeInput,
    colorSpace,
    ...other
  } = options;
  if (options.vars &&
  // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  options.generateThemeVars === undefined) {
    throw new Error(process.env.NODE_ENV !== "production" ? 'MUI: `vars` is a private field used for CSS variables support.\n' +
    // #host-reference
    'Please use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature.' : formatMuiErrorMessage(20));
  }
  const palette = createPalette({
    ...paletteInput,
    colorSpace
  });
  const systemTheme = createTheme$1(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: {
      ...zIndex
    }
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  if (process.env.NODE_ENV !== 'production') {
    // TODO v6: Refactor to use globalStateClassesMapping from @mui/utils once `readOnly` state class is used in Rating component.
    const stateClasses = ['active', 'checked', 'completed', 'disabled', 'error', 'expanded', 'focused', 'focusVisible', 'required', 'selected'];
    const traverse = (node, component) => {
      let key;

      // eslint-disable-next-line guard-for-in
      for (key in node) {
        const child = node[key];
        if (stateClasses.includes(key) && Object.keys(child).length > 0) {
          if (process.env.NODE_ENV !== 'production') {
            const stateClass = generateUtilityClass('', key);
            console.error([`MUI: The \`${component}\` component increases ` + `the CSS specificity of the \`${key}\` internal state.`, 'You can not override it like this: ', JSON.stringify(node, null, 2), '', `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
              root: {
                [`&.${stateClass}`]: child
              }
            }, null, 2), '', 'https://mui.com/r/state-classes-guide'].join('\n'));
          }
          // Remove the style to prevent global conflicts.
          node[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach(component => {
      const styleOverrides = muiTheme.components[component].styleOverrides;
      if (styleOverrides && component.startsWith('Mui')) {
        traverse(styleOverrides, component);
      }
    });
  }
  muiTheme.unstable_sxConfig = {
    ...defaultSxConfig,
    ...other?.unstable_sxConfig
  };
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  muiTheme.toRuntimeSource = stringifyTheme; // for Pigment CSS integration

  attachColorManipulators(muiTheme);
  return muiTheme;
}

// Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
function getOverlayAlpha(elevation) {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return Math.round(alphaValue * 10) / 1000;
}

const defaultDarkOverlays = [...Array(25)].map((_, index) => {
  if (index === 0) {
    return 'none';
  }
  const overlay = getOverlayAlpha(index);
  return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
});
function getOpacity(mode) {
  return {
    inputPlaceholder: mode === 'dark' ? 0.5 : 0.42,
    inputUnderline: mode === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: mode === 'dark' ? 0.2 : 0.12,
    switchTrack: mode === 'dark' ? 0.3 : 0.38
  };
}
function getOverlays(mode) {
  return mode === 'dark' ? defaultDarkOverlays : [];
}
function createColorScheme(options) {
  const {
    palette: paletteInput = {
      mode: 'light'
    },
    // need to cast to avoid module augmentation test
    opacity,
    overlays,
    colorSpace,
    ...other
  } = options;
  // need to cast because `colorSpace` is considered internal at the moment.
  const palette = createPalette({
    ...paletteInput,
    colorSpace
  });
  return {
    palette,
    opacity: {
      ...getOpacity(palette.mode),
      ...opacity
    },
    overlays: overlays || getOverlays(palette.mode),
    ...other
  };
}

function shouldSkipGeneratingVar(keys) {
  return !!keys[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) ||
  // ends with sxConfig
  keys[0] === 'palette' && !!keys[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}

/**
 * @internal These variables should not appear in the :root stylesheet when the `defaultColorScheme="dark"`
 */
const excludeVariablesFromRoot = cssVarPrefix => [...[...Array(25)].map((_, index) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}overlays-${index}`), `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkBg`, `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkColor`];

var defaultGetSelector = theme => (colorScheme, css) => {
  const root = theme.rootSelector || ':root';
  const selector = theme.colorSchemeSelector;
  let rule = selector;
  if (selector === 'class') {
    rule = '.%s';
  }
  if (selector === 'data') {
    rule = '[data-%s]';
  }
  if (selector?.startsWith('data-') && !selector.includes('%s')) {
    // 'data-mui-color-scheme' -> '[data-mui-color-scheme="%s"]'
    rule = `[${selector}="%s"]`;
  }
  if (theme.defaultColorScheme === colorScheme) {
    if (colorScheme === 'dark') {
      const excludedVariables = {};
      excludeVariablesFromRoot(theme.cssVarPrefix).forEach(cssVar => {
        excludedVariables[cssVar] = css[cssVar];
        delete css[cssVar];
      });
      if (rule === 'media') {
        return {
          [root]: css,
          [`@media (prefers-color-scheme: dark)`]: {
            [root]: excludedVariables
          }
        };
      }
      if (rule) {
        return {
          [rule.replace('%s', colorScheme)]: excludedVariables,
          [`${root}, ${rule.replace('%s', colorScheme)}`]: css
        };
      }
      return {
        [root]: {
          ...css,
          ...excludedVariables
        }
      };
    }
    if (rule && rule !== 'media') {
      return `${root}, ${rule.replace('%s', String(colorScheme))}`;
    }
  } else if (colorScheme) {
    if (rule === 'media') {
      return {
        [`@media (prefers-color-scheme: ${String(colorScheme)})`]: {
          [root]: css
        }
      };
    }
    if (rule) {
      return rule.replace('%s', String(colorScheme));
    }
  }
  return root;
};

function assignNode(obj, keys) {
  keys.forEach(k => {
    if (!obj[k]) {
      obj[k] = {};
    }
  });
}
function setColor(obj, key, defaultValue) {
  if (!obj[key] && defaultValue) {
    obj[key] = defaultValue;
  }
}
function toRgb(color) {
  if (typeof color !== 'string' || !color.startsWith('hsl')) {
    return color;
  }
  return hslToRgb(color);
}
function setColorChannel(obj, key) {
  if (!(`${key}Channel` in obj)) {
    // custom channel token is not provided, generate one.
    // if channel token can't be generated, show a warning.
    obj[`${key}Channel`] = private_safeColorChannel(toRgb(obj[key]), `MUI: Can't create \`palette.${key}Channel\` because \`palette.${key}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` + '\n' + `To suppress this warning, you need to explicitly provide the \`palette.${key}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`);
  }
}
function getSpacingVal(spacingInput) {
  if (typeof spacingInput === 'number') {
    return `${spacingInput}px`;
  }
  if (typeof spacingInput === 'string' || typeof spacingInput === 'function' || Array.isArray(spacingInput)) {
    return spacingInput;
  }
  return '8px';
}
const silent = fn => {
  try {
    return fn();
  } catch (error) {
    // ignore error
  }
  return undefined;
};
const createGetCssVar = (cssVarPrefix = 'mui') => createGetCssVar$1(cssVarPrefix);
function attachColorScheme$1(colorSpace, colorSchemes, scheme, restTheme, colorScheme) {
  if (!scheme) {
    return undefined;
  }
  scheme = scheme === true ? {} : scheme;
  const mode = colorScheme === 'dark' ? 'dark' : 'light';
  if (!restTheme) {
    colorSchemes[colorScheme] = createColorScheme({
      ...scheme,
      palette: {
        mode,
        ...scheme?.palette
      },
      colorSpace
    });
    return undefined;
  }
  const {
    palette,
    ...muiTheme
  } = createThemeNoVars({
    ...restTheme,
    palette: {
      mode,
      ...scheme?.palette
    },
    colorSpace
  });
  colorSchemes[colorScheme] = {
    ...scheme,
    palette,
    opacity: {
      ...getOpacity(mode),
      ...scheme?.opacity
    },
    overlays: scheme?.overlays || getOverlays(mode)
  };
  return muiTheme;
}

/**
 * A default `createThemeWithVars` comes with a single color scheme, either `light` or `dark` based on the `defaultColorScheme`.
 * This is better suited for apps that only need a single color scheme.
 *
 * To enable built-in `light` and `dark` color schemes, either:
 * 1. provide a `colorSchemeSelector` to define how the color schemes will change.
 * 2. provide `colorSchemes.dark` will set `colorSchemeSelector: 'media'` by default.
 */
function createThemeWithVars(options = {}, ...args) {
  const {
    colorSchemes: colorSchemesInput = {
      light: true
    },
    defaultColorScheme: defaultColorSchemeInput,
    disableCssColorScheme = false,
    cssVarPrefix = 'mui',
    nativeColor = false,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar$1 = shouldSkipGeneratingVar,
    colorSchemeSelector: selector = colorSchemesInput.light && colorSchemesInput.dark ? 'media' : undefined,
    rootSelector = ':root',
    ...input
  } = options;
  const firstColorScheme = Object.keys(colorSchemesInput)[0];
  const defaultColorScheme = defaultColorSchemeInput || (colorSchemesInput.light && firstColorScheme !== 'light' ? 'light' : firstColorScheme);
  const getCssVar = createGetCssVar(cssVarPrefix);
  const {
    [defaultColorScheme]: defaultSchemeInput,
    light: builtInLight,
    dark: builtInDark,
    ...customColorSchemes
  } = colorSchemesInput;
  const colorSchemes = {
    ...customColorSchemes
  };
  let defaultScheme = defaultSchemeInput;

  // For built-in light and dark color schemes, ensure that the value is valid if they are the default color scheme.
  if (defaultColorScheme === 'dark' && !('dark' in colorSchemesInput) || defaultColorScheme === 'light' && !('light' in colorSchemesInput)) {
    defaultScheme = true;
  }
  if (!defaultScheme) {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${defaultColorScheme}\` option is either missing or invalid.` : formatMuiErrorMessage(21, defaultColorScheme));
  }

  // The reason to use `oklch` is that it is the most perceptually uniform color space and widely supported.
  let colorSpace;
  if (nativeColor) {
    colorSpace = 'oklch';
  }

  // Create the palette for the default color scheme, either `light`, `dark`, or custom color scheme.
  const muiTheme = attachColorScheme$1(colorSpace, colorSchemes, defaultScheme, input, defaultColorScheme);
  if (builtInLight && !colorSchemes.light) {
    attachColorScheme$1(colorSpace, colorSchemes, builtInLight, undefined, 'light');
  }
  if (builtInDark && !colorSchemes.dark) {
    attachColorScheme$1(colorSpace, colorSchemes, builtInDark, undefined, 'dark');
  }
  let theme = {
    defaultColorScheme,
    ...muiTheme,
    cssVarPrefix,
    colorSchemeSelector: selector,
    rootSelector,
    getCssVar,
    colorSchemes,
    font: {
      ...prepareTypographyVars(muiTheme.typography),
      ...muiTheme.font
    },
    spacing: getSpacingVal(input.spacing)
  };
  Object.keys(theme.colorSchemes).forEach(key => {
    const palette = theme.colorSchemes[key].palette;
    const setCssVarColor = cssVar => {
      const tokens = cssVar.split('-');
      const color = tokens[1];
      const colorToken = tokens[2];
      return getCssVar(cssVar, palette[color][colorToken]);
    };

    // attach black & white channels to common node
    if (palette.mode === 'light') {
      setColor(palette.common, 'background', '#fff');
      setColor(palette.common, 'onBackground', '#000');
    }
    if (palette.mode === 'dark') {
      setColor(palette.common, 'background', '#000');
      setColor(palette.common, 'onBackground', '#fff');
    }
    function colorMix(method, color, coefficient) {
      if (colorSpace) {
        let mixer;
        if (method === private_safeAlpha) {
          mixer = `transparent ${((1 - coefficient) * 100).toFixed(0)}%`;
        }
        if (method === private_safeDarken) {
          mixer = `#000 ${(coefficient * 100).toFixed(0)}%`;
        }
        if (method === private_safeLighten) {
          mixer = `#fff ${(coefficient * 100).toFixed(0)}%`;
        }
        return `color-mix(in ${colorSpace}, ${color}, ${mixer})`;
      }
      return method(color, coefficient);
    }

    // assign component variables
    assignNode(palette, ['Alert', 'AppBar', 'Avatar', 'Button', 'Chip', 'FilledInput', 'LinearProgress', 'Skeleton', 'Slider', 'SnackbarContent', 'SpeedDialAction', 'StepConnector', 'StepContent', 'Switch', 'TableCell', 'Tooltip']);
    if (palette.mode === 'light') {
      setColor(palette.Alert, 'errorColor', colorMix(private_safeDarken, palette.error.light, 0.6));
      setColor(palette.Alert, 'infoColor', colorMix(private_safeDarken, palette.info.light, 0.6));
      setColor(palette.Alert, 'successColor', colorMix(private_safeDarken, palette.success.light, 0.6));
      setColor(palette.Alert, 'warningColor', colorMix(private_safeDarken, palette.warning.light, 0.6));
      setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-main'));
      setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-main'));
      setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-main'));
      setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-main'));
      setColor(palette.Alert, 'errorFilledColor', silent(() => palette.getContrastText(palette.error.main)));
      setColor(palette.Alert, 'infoFilledColor', silent(() => palette.getContrastText(palette.info.main)));
      setColor(palette.Alert, 'successFilledColor', silent(() => palette.getContrastText(palette.success.main)));
      setColor(palette.Alert, 'warningFilledColor', silent(() => palette.getContrastText(palette.warning.main)));
      setColor(palette.Alert, 'errorStandardBg', colorMix(private_safeLighten, palette.error.light, 0.9));
      setColor(palette.Alert, 'infoStandardBg', colorMix(private_safeLighten, palette.info.light, 0.9));
      setColor(palette.Alert, 'successStandardBg', colorMix(private_safeLighten, palette.success.light, 0.9));
      setColor(palette.Alert, 'warningStandardBg', colorMix(private_safeLighten, palette.warning.light, 0.9));
      setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
      setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
      setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
      setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
      setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-100'));
      setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-400'));
      setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-300'));
      setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-A100'));
      setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-400'));
      setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-700'));
      setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-700'));
      setColor(palette.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)');
      setColor(palette.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)');
      setColor(palette.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)');
      setColor(palette.LinearProgress, 'primaryBg', colorMix(private_safeLighten, palette.primary.main, 0.62));
      setColor(palette.LinearProgress, 'secondaryBg', colorMix(private_safeLighten, palette.secondary.main, 0.62));
      setColor(palette.LinearProgress, 'errorBg', colorMix(private_safeLighten, palette.error.main, 0.62));
      setColor(palette.LinearProgress, 'infoBg', colorMix(private_safeLighten, palette.info.main, 0.62));
      setColor(palette.LinearProgress, 'successBg', colorMix(private_safeLighten, palette.success.main, 0.62));
      setColor(palette.LinearProgress, 'warningBg', colorMix(private_safeLighten, palette.warning.main, 0.62));
      setColor(palette.Skeleton, 'bg', colorSpace ? colorMix(private_safeAlpha, palette.text.primary, 0.11) : `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.11)`);
      setColor(palette.Slider, 'primaryTrack', colorMix(private_safeLighten, palette.primary.main, 0.62));
      setColor(palette.Slider, 'secondaryTrack', colorMix(private_safeLighten, palette.secondary.main, 0.62));
      setColor(palette.Slider, 'errorTrack', colorMix(private_safeLighten, palette.error.main, 0.62));
      setColor(palette.Slider, 'infoTrack', colorMix(private_safeLighten, palette.info.main, 0.62));
      setColor(palette.Slider, 'successTrack', colorMix(private_safeLighten, palette.success.main, 0.62));
      setColor(palette.Slider, 'warningTrack', colorMix(private_safeLighten, palette.warning.main, 0.62));
      const snackbarContentBackground = colorSpace ? colorMix(private_safeDarken, palette.background.default, 0.6825) // use `0.6825` instead of `0.8` to match the contrast ratio of JS implementation
      : private_safeEmphasize(palette.background.default, 0.8);
      setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
      setColor(palette.SnackbarContent, 'color', silent(() => colorSpace ? dark.text.primary : palette.getContrastText(snackbarContentBackground)));
      setColor(palette.SpeedDialAction, 'fabHoverBg', private_safeEmphasize(palette.background.paper, 0.15));
      setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-400'));
      setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-400'));
      setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-common-white'));
      setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-100'));
      setColor(palette.Switch, 'primaryDisabledColor', colorMix(private_safeLighten, palette.primary.main, 0.62));
      setColor(palette.Switch, 'secondaryDisabledColor', colorMix(private_safeLighten, palette.secondary.main, 0.62));
      setColor(palette.Switch, 'errorDisabledColor', colorMix(private_safeLighten, palette.error.main, 0.62));
      setColor(palette.Switch, 'infoDisabledColor', colorMix(private_safeLighten, palette.info.main, 0.62));
      setColor(palette.Switch, 'successDisabledColor', colorMix(private_safeLighten, palette.success.main, 0.62));
      setColor(palette.Switch, 'warningDisabledColor', colorMix(private_safeLighten, palette.warning.main, 0.62));
      setColor(palette.TableCell, 'border', colorMix(private_safeLighten, colorMix(private_safeAlpha, palette.divider, 1), 0.88));
      setColor(palette.Tooltip, 'bg', colorMix(private_safeAlpha, palette.grey[700], 0.92));
    }
    if (palette.mode === 'dark') {
      setColor(palette.Alert, 'errorColor', colorMix(private_safeLighten, palette.error.light, 0.6));
      setColor(palette.Alert, 'infoColor', colorMix(private_safeLighten, palette.info.light, 0.6));
      setColor(palette.Alert, 'successColor', colorMix(private_safeLighten, palette.success.light, 0.6));
      setColor(palette.Alert, 'warningColor', colorMix(private_safeLighten, palette.warning.light, 0.6));
      setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-dark'));
      setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-dark'));
      setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-dark'));
      setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-dark'));
      setColor(palette.Alert, 'errorFilledColor', silent(() => palette.getContrastText(palette.error.dark)));
      setColor(palette.Alert, 'infoFilledColor', silent(() => palette.getContrastText(palette.info.dark)));
      setColor(palette.Alert, 'successFilledColor', silent(() => palette.getContrastText(palette.success.dark)));
      setColor(palette.Alert, 'warningFilledColor', silent(() => palette.getContrastText(palette.warning.dark)));
      setColor(palette.Alert, 'errorStandardBg', colorMix(private_safeDarken, palette.error.light, 0.9));
      setColor(palette.Alert, 'infoStandardBg', colorMix(private_safeDarken, palette.info.light, 0.9));
      setColor(palette.Alert, 'successStandardBg', colorMix(private_safeDarken, palette.success.light, 0.9));
      setColor(palette.Alert, 'warningStandardBg', colorMix(private_safeDarken, palette.warning.light, 0.9));
      setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
      setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
      setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
      setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
      setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-900'));
      setColor(palette.AppBar, 'darkBg', setCssVarColor('palette-background-paper')); // specific for dark mode
      setColor(palette.AppBar, 'darkColor', setCssVarColor('palette-text-primary')); // specific for dark mode
      setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-600'));
      setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-800'));
      setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-700'));
      setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-700'));
      setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-300'));
      setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-300'));
      setColor(palette.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)');
      setColor(palette.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)');
      setColor(palette.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)');
      setColor(palette.LinearProgress, 'primaryBg', colorMix(private_safeDarken, palette.primary.main, 0.5));
      setColor(palette.LinearProgress, 'secondaryBg', colorMix(private_safeDarken, palette.secondary.main, 0.5));
      setColor(palette.LinearProgress, 'errorBg', colorMix(private_safeDarken, palette.error.main, 0.5));
      setColor(palette.LinearProgress, 'infoBg', colorMix(private_safeDarken, palette.info.main, 0.5));
      setColor(palette.LinearProgress, 'successBg', colorMix(private_safeDarken, palette.success.main, 0.5));
      setColor(palette.LinearProgress, 'warningBg', colorMix(private_safeDarken, palette.warning.main, 0.5));
      setColor(palette.Skeleton, 'bg', colorSpace ? colorMix(private_safeAlpha, palette.text.primary, 0.13) : `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.13)`);
      setColor(palette.Slider, 'primaryTrack', colorMix(private_safeDarken, palette.primary.main, 0.5));
      setColor(palette.Slider, 'secondaryTrack', colorMix(private_safeDarken, palette.secondary.main, 0.5));
      setColor(palette.Slider, 'errorTrack', colorMix(private_safeDarken, palette.error.main, 0.5));
      setColor(palette.Slider, 'infoTrack', colorMix(private_safeDarken, palette.info.main, 0.5));
      setColor(palette.Slider, 'successTrack', colorMix(private_safeDarken, palette.success.main, 0.5));
      setColor(palette.Slider, 'warningTrack', colorMix(private_safeDarken, palette.warning.main, 0.5));
      const snackbarContentBackground = colorSpace ? colorMix(private_safeLighten, palette.background.default, 0.985) // use `0.985` instead of `0.98` to match the contrast ratio of JS implementation
      : private_safeEmphasize(palette.background.default, 0.98);
      setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
      setColor(palette.SnackbarContent, 'color', silent(() => colorSpace ? light.text.primary : palette.getContrastText(snackbarContentBackground)));
      setColor(palette.SpeedDialAction, 'fabHoverBg', private_safeEmphasize(palette.background.paper, 0.15));
      setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-600'));
      setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-600'));
      setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-grey-300'));
      setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-600'));
      setColor(palette.Switch, 'primaryDisabledColor', colorMix(private_safeDarken, palette.primary.main, 0.55));
      setColor(palette.Switch, 'secondaryDisabledColor', colorMix(private_safeDarken, palette.secondary.main, 0.55));
      setColor(palette.Switch, 'errorDisabledColor', colorMix(private_safeDarken, palette.error.main, 0.55));
      setColor(palette.Switch, 'infoDisabledColor', colorMix(private_safeDarken, palette.info.main, 0.55));
      setColor(palette.Switch, 'successDisabledColor', colorMix(private_safeDarken, palette.success.main, 0.55));
      setColor(palette.Switch, 'warningDisabledColor', colorMix(private_safeDarken, palette.warning.main, 0.55));
      setColor(palette.TableCell, 'border', colorMix(private_safeDarken, colorMix(private_safeAlpha, palette.divider, 1), 0.68));
      setColor(palette.Tooltip, 'bg', colorMix(private_safeAlpha, palette.grey[700], 0.92));
    }

    // MUI X - DataGrid needs this token.
    setColorChannel(palette.background, 'default');

    // added for consistency with the `background.default` token
    setColorChannel(palette.background, 'paper');
    setColorChannel(palette.common, 'background');
    setColorChannel(palette.common, 'onBackground');
    setColorChannel(palette, 'divider');
    Object.keys(palette).forEach(color => {
      const colors = palette[color];

      // The default palettes (primary, secondary, error, info, success, and warning) errors are handled by the above `createTheme(...)`.

      if (color !== 'tonalOffset' && colors && typeof colors === 'object') {
        // Silent the error for custom palettes.
        if (colors.main) {
          setColor(palette[color], 'mainChannel', private_safeColorChannel(toRgb(colors.main)));
        }
        if (colors.light) {
          setColor(palette[color], 'lightChannel', private_safeColorChannel(toRgb(colors.light)));
        }
        if (colors.dark) {
          setColor(palette[color], 'darkChannel', private_safeColorChannel(toRgb(colors.dark)));
        }
        if (colors.contrastText) {
          setColor(palette[color], 'contrastTextChannel', private_safeColorChannel(toRgb(colors.contrastText)));
        }
        if (color === 'text') {
          // Text colors: text.primary, text.secondary
          setColorChannel(palette[color], 'primary');
          setColorChannel(palette[color], 'secondary');
        }
        if (color === 'action') {
          // Action colors: action.active, action.selected
          if (colors.active) {
            setColorChannel(palette[color], 'active');
          }
          if (colors.selected) {
            setColorChannel(palette[color], 'selected');
          }
        }
      }
    });
  });
  theme = args.reduce((acc, argument) => deepmerge(acc, argument), theme);
  const parserConfig = {
    prefix: cssVarPrefix,
    disableCssColorScheme,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar$1,
    getSelector: defaultGetSelector(theme),
    enableContrastVars: nativeColor
  };
  const {
    vars,
    generateThemeVars,
    generateStyleSheets
  } = prepareCssVars(theme, parserConfig);
  theme.vars = vars;
  Object.entries(theme.colorSchemes[theme.defaultColorScheme]).forEach(([key, value]) => {
    theme[key] = value;
  });
  theme.generateThemeVars = generateThemeVars;
  theme.generateStyleSheets = generateStyleSheets;
  theme.generateSpacing = function generateSpacing() {
    return createSpacing(input.spacing, createUnarySpacing(this));
  };
  theme.getColorSchemeSelector = createGetColorSchemeSelector(selector);
  theme.spacing = theme.generateSpacing();
  theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar$1;
  theme.unstable_sxConfig = {
    ...defaultSxConfig,
    ...input?.unstable_sxConfig
  };
  theme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  theme.toRuntimeSource = stringifyTheme; // for Pigment CSS integration

  return theme;
}

// eslint-disable-next-line consistent-return
function attachColorScheme(theme, scheme, colorScheme) {
  if (!theme.colorSchemes) {
    return undefined;
  }
  if (colorScheme) {
    theme.colorSchemes[scheme] = {
      ...(colorScheme !== true && colorScheme),
      palette: createPalette({
        ...(colorScheme === true ? {} : colorScheme.palette),
        mode: scheme
      }) // cast type to skip module augmentation test
    };
  }
}

/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready-to-use theme object.
 */
function createTheme(options = {},
// cast type to skip module augmentation test
...args) {
  const {
    palette,
    cssVariables = false,
    colorSchemes: initialColorSchemes = !palette ? {
      light: true
    } : undefined,
    defaultColorScheme: initialDefaultColorScheme = palette?.mode,
    ...other
  } = options;
  const defaultColorSchemeInput = initialDefaultColorScheme || 'light';
  const defaultScheme = initialColorSchemes?.[defaultColorSchemeInput];
  const colorSchemesInput = {
    ...initialColorSchemes,
    ...(palette ? {
      [defaultColorSchemeInput]: {
        ...(typeof defaultScheme !== 'boolean' && defaultScheme),
        palette
      }
    } : undefined)
  };
  if (cssVariables === false) {
    if (!('colorSchemes' in options)) {
      // Behaves exactly as v5
      return createThemeNoVars(options, ...args);
    }
    let paletteOptions = palette;
    if (!('palette' in options)) {
      if (colorSchemesInput[defaultColorSchemeInput]) {
        if (colorSchemesInput[defaultColorSchemeInput] !== true) {
          paletteOptions = colorSchemesInput[defaultColorSchemeInput].palette;
        } else if (defaultColorSchemeInput === 'dark') {
          // @ts-ignore to prevent the module augmentation test from failing
          paletteOptions = {
            mode: 'dark'
          };
        }
      }
    }
    const theme = createThemeNoVars({
      ...options,
      palette: paletteOptions
    }, ...args);
    theme.defaultColorScheme = defaultColorSchemeInput;
    theme.colorSchemes = colorSchemesInput;
    if (theme.palette.mode === 'light') {
      theme.colorSchemes.light = {
        ...(colorSchemesInput.light !== true && colorSchemesInput.light),
        palette: theme.palette
      };
      attachColorScheme(theme, 'dark', colorSchemesInput.dark);
    }
    if (theme.palette.mode === 'dark') {
      theme.colorSchemes.dark = {
        ...(colorSchemesInput.dark !== true && colorSchemesInput.dark),
        palette: theme.palette
      };
      attachColorScheme(theme, 'light', colorSchemesInput.light);
    }
    return theme;
  }
  if (!palette && !('light' in colorSchemesInput) && defaultColorSchemeInput === 'light') {
    colorSchemesInput.light = true;
  }
  return createThemeWithVars({
    ...other,
    colorSchemes: colorSchemesInput,
    defaultColorScheme: defaultColorSchemeInput,
    ...(typeof cssVariables !== 'boolean' && cssVariables)
  }, ...args);
}

const defaultTheme = createTheme();

var THEME_ID = '$$material';

function useTheme() {
  const theme = useTheme$1(defaultTheme);
  if (process.env.NODE_ENV !== 'production') {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React__namespace.useDebugValue(theme);
  }
  return theme[THEME_ID] || theme;
}

// copied from @mui/system/createStyled
function slotShouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}

const rootShouldForwardProp = prop => slotShouldForwardProp(prop) && prop !== 'classes';

const styled = createStyled({
  themeId: THEME_ID,
  defaultTheme,
  rootShouldForwardProp
});

// eslint-disable-next-line @typescript-eslint/naming-convention
function internal_createExtendSxProp() {
  return extendSxProp$1;
}

const memoTheme = unstable_memoTheme;

process.env.NODE_ENV !== "production" ? {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  value: PropTypes.object.isRequired
} : void 0;
function useDefaultProps(params) {
  return useDefaultProps$1(params);
}

/**
 * Merges refs into a single memoized callback ref or `null`.
 *
 * ```tsx
 * const rootRef = React.useRef<Instance>(null);
 * const refFork = useForkRef(rootRef, props.ref);
 *
 * return (
 *   <Root {...props} ref={refFork} />
 * );
 * ```
 *
 * @param {Array<React.Ref<Instance> | undefined>} refs The ref array.
 * @returns {React.RefCallback<Instance> | null} The new ref callback.
 */
function useForkRef(...refs) {
  const cleanupRef = React__namespace.useRef(undefined);
  const refEffect = React__namespace.useCallback(instance => {
    const cleanups = refs.map(ref => {
      if (ref == null) {
        return null;
      }
      if (typeof ref === 'function') {
        const refCallback = ref;
        const refCleanup = refCallback(instance);
        return typeof refCleanup === 'function' ? refCleanup : () => {
          refCallback(null);
        };
      }
      ref.current = instance;
      return () => {
        ref.current = null;
      };
    });
    return () => {
      cleanups.forEach(refCleanup => refCleanup?.());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
  return React__namespace.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return value => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = undefined;
      }
      if (value != null) {
        cleanupRef.current = refEffect(value);
      }
    };
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- intentionally ignoring that the dependency array must be an array literal
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}

/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || isHostComponent(elementType)) {
    return otherProps;
  }
  return {
    ...otherProps,
    ownerState: {
      ...otherProps.ownerState,
      ...ownerState
    }
  };
}

/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}

/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps$1(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = clsx(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
    const mergedStyle = {
      ...additionalProps?.style,
      ...externalForwardedProps?.style,
      ...externalSlotProps?.style
    };
    const props = {
      ...additionalProps,
      ...externalForwardedProps,
      ...externalSlotProps
    };
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = extractEventHandlers({
    ...externalForwardedProps,
    ...externalSlotProps
  });
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = clsx(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
  const mergedStyle = {
    ...internalSlotProps?.style,
    ...additionalProps?.style,
    ...externalForwardedProps?.style,
    ...externalSlotProps?.style
  };
  const props = {
    ...internalSlotProps,
    ...additionalProps,
    ...otherPropsWithoutEventHandlers,
    ...componentsPropsWithoutEventHandlers
  };
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}

/**
 * An internal function to create a Material UI slot.
 *
 * This is an advanced version of Base UI `useSlotProps` because Material UI allows leaf component to be customized via `component` prop
 * while Base UI does not need to support leaf component customization.
 *
 * @param {string} name: name of the slot
 * @param {object} parameters
 * @returns {[Slot, slotProps]} The slot's React component and the slot's props
 *
 * Note: the returned slot's props
 * - will never contain `component` prop.
 * - might contain `as` prop.
 */
function useSlot(
/**
 * The slot's name. All Material UI components should have `root` slot.
 *
 * If the name is `root`, the logic behaves differently from other slots,
 * e.g. the `externalForwardedProps` are spread to `root` slot but not other slots.
 */
name, parameters) {
  const {
    className,
    elementType: initialElementType,
    ownerState,
    externalForwardedProps,
    internalForwardedProps,
    shouldForwardComponentProp = false,
    ...useSlotPropsParams
  } = parameters;
  const {
    component: rootComponent,
    slots = {
      [name]: undefined
    },
    slotProps = {
      [name]: undefined
    },
    ...other
  } = externalForwardedProps;
  const elementType = slots[name] || initialElementType;

  // `slotProps[name]` can be a callback that receives the component's ownerState.
  // `resolvedComponentsProps` is always a plain object.
  const resolvedComponentsProps = resolveComponentProps(slotProps[name], ownerState);
  const {
    props: {
      component: slotComponent,
      ...mergedProps
    },
    internalRef
  } = mergeSlotProps$1({
    className,
    ...useSlotPropsParams,
    externalForwardedProps: name === 'root' ? other : undefined,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = useForkRef(internalRef, resolvedComponentsProps?.ref, parameters.ref);
  const LeafComponent = name === 'root' ? slotComponent || rootComponent : slotComponent;
  const props = appendOwnerState(elementType, {
    ...(name === 'root' && !rootComponent && !slots[name] && internalForwardedProps),
    ...(name !== 'root' && !slots[name] && internalForwardedProps),
    ...mergedProps,
    ...(LeafComponent && !shouldForwardComponentProp && {
      as: LeafComponent
    }),
    ...(LeafComponent && shouldForwardComponentProp && {
      component: LeafComponent
    }),
    ref
  }, ownerState);
  return [elementType, props];
}

/**
 * Type guard to check if the object has a "main" property of type string.
 *
 * @param obj - the object to check
 * @returns boolean
 */
function hasCorrectMainProperty(obj) {
  return typeof obj.main === 'string';
}
/**
 * Checks if the object conforms to the SimplePaletteColorOptions type.
 * The minimum requirement is that the object has a "main" property of type string, this is always checked.
 * Optionally, you can pass additional properties to check.
 *
 * @param obj - The object to check
 * @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
 * @returns boolean
 */
function checkSimplePaletteColorValues(obj, additionalPropertiesToCheck = []) {
  if (!hasCorrectMainProperty(obj)) {
    return false;
  }
  for (const value of additionalPropertiesToCheck) {
    if (!obj.hasOwnProperty(value) || typeof obj[value] !== 'string') {
      return false;
    }
  }
  return true;
}

/**
 * Creates a filter function used to filter simple palette color options.
 * The minimum requirement is that the object has a "main" property of type string, this is always checked.
 * Optionally, you can pass additional properties to check.
 *
 * @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
 * @returns ([, value]: [any, PaletteColorOptions]) => boolean
 */
function createSimplePaletteValueFilter(additionalPropertiesToCheck = []) {
  return ([, value]) => value && checkSimplePaletteColorValues(value, additionalPropertiesToCheck);
}

function getTypeByValue(value) {
  const valueType = typeof value;
  switch (valueType) {
    case 'number':
      if (Number.isNaN(value)) {
        return 'NaN';
      }
      if (!Number.isFinite(value)) {
        return 'Infinity';
      }
      if (value !== Math.floor(value)) {
        return 'float';
      }
      return 'number';
    case 'object':
      if (value === null) {
        return 'null';
      }
      return value.constructor.name;
    default:
      return valueType;
  }
}
function requiredInteger(props, propName, componentName, location) {
  const propValue = props[propName];
  if (propValue == null || !Number.isInteger(propValue)) {
    const propType = getTypeByValue(propValue);
    return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
  }
  return null;
}
function validator(props, propName, componentName, location) {
  const propValue = props[propName];
  if (propValue === undefined) {
    return null;
  }
  return requiredInteger(props, propName, componentName, location);
}
function validatorNoop() {
  return null;
}
validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;
const integerPropType = process.env.NODE_ENV === 'production' ? validatorNoop : validator;

function chainPropTypes(propType1, propType2) {
  if (process.env.NODE_ENV === 'production') {
    return () => null;
  }
  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

function getPaperUtilityClass(slot) {
  return generateUtilityClass('MuiPaper', slot);
}
generateUtilityClasses('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);

const useUtilityClasses$b = ownerState => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, !square && 'rounded', variant === 'elevation' && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
};
const PaperRoot = styled('div', {
  name: 'MuiPaper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]];
  }
})(memoTheme(({
  theme
}) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.primary,
  transition: theme.transitions.create('box-shadow'),
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.square,
    style: {
      borderRadius: theme.shape.borderRadius
    }
  }, {
    props: {
      variant: 'outlined'
    },
    style: {
      border: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: {
      variant: 'elevation'
    },
    style: {
      boxShadow: 'var(--Paper-shadow)',
      backgroundImage: 'var(--Paper-overlay)'
    }
  }]
})));
const Paper = /*#__PURE__*/React__namespace.forwardRef(function Paper(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiPaper'
  });
  const theme = useTheme();
  const {
    className,
    component = 'div',
    elevation = 1,
    square = false,
    variant = 'elevation',
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    elevation,
    square,
    variant
  };
  const classes = useUtilityClasses$b(ownerState);
  if (process.env.NODE_ENV !== 'production') {
    if (theme.shadows[elevation] === undefined) {
      console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join('\n'));
    }
  }
  return /*#__PURE__*/jsxRuntime.jsx(PaperRoot, {
    as: component,
    ownerState: ownerState,
    className: clsx(classes.root, className),
    ref: ref,
    ...other,
    style: {
      ...(variant === 'elevation' && {
        '--Paper-shadow': (theme.vars || theme).shadows[elevation],
        ...(theme.vars && {
          '--Paper-overlay': theme.vars.overlays?.[elevation]
        }),
        ...(!theme.vars && theme.palette.mode === 'dark' && {
          '--Paper-overlay': `linear-gradient(${alpha('#fff', getOverlayAlpha(elevation))}, ${alpha('#fff', getOverlayAlpha(elevation))})`
        })
      }),
      ...other.style
    }
  });
});
process.env.NODE_ENV !== "production" ? Paper.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: chainPropTypes(integerPropType, props => {
    const {
      elevation,
      variant
    } = props;
    if (elevation > 0 && variant === 'outlined') {
      return new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
    }
    return null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: PropTypes.bool,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['elevation', 'outlined']), PropTypes.string])
} : void 0;

function getAlertUtilityClass(slot) {
  return generateUtilityClass('MuiAlert', slot);
}
const alertClasses = generateUtilityClasses('MuiAlert', ['root', 'action', 'icon', 'message', 'filled', 'colorSuccess', 'colorInfo', 'colorWarning', 'colorError', 'filledSuccess', 'filledInfo', 'filledWarning', 'filledError', 'outlined', 'outlinedSuccess', 'outlinedInfo', 'outlinedWarning', 'outlinedError', 'standard', 'standardSuccess', 'standardInfo', 'standardWarning', 'standardError']);

function getSvgIconUtilityClass(slot) {
  return generateUtilityClass('MuiSvgIcon', slot);
}
generateUtilityClasses('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);

const useUtilityClasses$a = ownerState => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ['root', color !== 'inherit' && `color${capitalize(color)}`, `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = styled('svg', {
  name: 'MuiSvgIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'inherit' && styles[`color${capitalize(ownerState.color)}`], styles[`fontSize${capitalize(ownerState.fontSize)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  userSelect: 'none',
  width: '1em',
  height: '1em',
  display: 'inline-block',
  flexShrink: 0,
  transition: theme.transitions?.create?.('fill', {
    duration: (theme.vars ?? theme).transitions?.duration?.shorter
  }),
  variants: [{
    props: props => !props.hasSvgAsChild,
    style: {
      // the <svg> will define the property that has `currentColor`
      // for example heroicons uses fill="none" and stroke="currentColor"
      fill: 'currentColor'
    }
  }, {
    props: {
      fontSize: 'inherit'
    },
    style: {
      fontSize: 'inherit'
    }
  }, {
    props: {
      fontSize: 'small'
    },
    style: {
      fontSize: theme.typography?.pxToRem?.(20) || '1.25rem'
    }
  }, {
    props: {
      fontSize: 'medium'
    },
    style: {
      fontSize: theme.typography?.pxToRem?.(24) || '1.5rem'
    }
  }, {
    props: {
      fontSize: 'large'
    },
    style: {
      fontSize: theme.typography?.pxToRem?.(35) || '2.1875rem'
    }
  },
  // TODO v5 deprecate color prop, v6 remove for sx
  ...Object.entries((theme.vars ?? theme).palette).filter(([, value]) => value && value.main).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars ?? theme).palette?.[color]?.main
    }
  })), {
    props: {
      color: 'action'
    },
    style: {
      color: (theme.vars ?? theme).palette?.action?.active
    }
  }, {
    props: {
      color: 'disabled'
    },
    style: {
      color: (theme.vars ?? theme).palette?.action?.disabled
    }
  }, {
    props: {
      color: 'inherit'
    },
    style: {
      color: undefined
    }
  }]
})));
const SvgIcon = /*#__PURE__*/React__namespace.forwardRef(function SvgIcon(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiSvgIcon'
  });
  const {
    children,
    className,
    color = 'inherit',
    component = 'svg',
    fontSize = 'medium',
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = '0 0 24 24',
    ...other
  } = props;
  const hasSvgAsChild = /*#__PURE__*/React__namespace.isValidElement(children) && children.type === 'svg';
  const ownerState = {
    ...props,
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  };
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses$a(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(SvgIconRoot, {
    as: component,
    className: clsx(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref,
    ...more,
    ...other,
    ...(hasSvgAsChild && children.props),
    ownerState: ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /*#__PURE__*/jsxRuntime.jsx("title", {
      children: titleAccess
    }) : null]
  });
});
process.env.NODE_ENV !== "production" ? SvgIcon.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'large', 'medium', 'small']), PropTypes.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: PropTypes.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: PropTypes.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: PropTypes.string
} : void 0;
SvgIcon.muiName = 'SvgIcon';

function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /*#__PURE__*/jsxRuntime.jsx(SvgIcon, {
      "data-testid": process.env.NODE_ENV !== 'production' ? `${displayName}Icon` : undefined,
      ref: ref,
      ...props,
      children: path
    });
  }
  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon.muiName;
  return /*#__PURE__*/React__namespace.memo(/*#__PURE__*/React__namespace.forwardRef(Component));
}

function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  const propFullNameSafe = propFullName || propName;
  if (typeof props[propName] !== 'undefined') {
    return new Error(`The prop \`${propFullNameSafe}\` is not supported. Please remove it.`);
  }
  return null;
}

function useControlled(props) {
  const {
    controlled,
    default: defaultProp,
    name,
    state = 'value'
  } = props;
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = React__namespace.useRef(controlled !== undefined);
  const [valueState, setValue] = React__namespace.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (process.env.NODE_ENV !== 'production') {
    React__namespace.useEffect(() => {
      if (isControlled !== (controlled !== undefined)) {
        console.error([`MUI: A component is changing the ${isControlled ? '' : 'un'}controlled ${state} state of ${name} to be ${isControlled ? 'un' : ''}controlled.`, 'Elements should not switch from uncontrolled to controlled (or vice versa).', `Decide between using a controlled or uncontrolled ${name} ` + 'element for the lifetime of the component.', "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", 'More info: https://fb.me/react-controlled-components'].join('\n'));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = React__namespace.useRef(defaultProp);
    React__namespace.useEffect(() => {
      if (!isControlled && JSON.stringify(defaultProp) !== JSON.stringify(defaultValue)) {
        console.error([`MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` + `To suppress this warning opt to use a controlled ${name}.`].join('\n'));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  const setValueIfUncontrolled = React__namespace.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);

  // TODO: provide overloads for the useControlled function to account for the case where either
  // controlled or default is not undefined.
  // In that case the return type should be [T, React.Dispatch<React.SetStateAction<T>>]
  // otherwise it should be [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>]
  return [value, setValueIfUncontrolled];
}

/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */

function useEventCallback(fn) {
  const ref = React__namespace.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return React__namespace.useRef((...args) =>
  // @ts-expect-error hide `this`
  (0, ref.current)(...args)).current;
}

// Brought from [Base UI](https://github.com/mui/base-ui/blob/master/packages/react/src/merge-props/mergeProps.ts#L119)
// Use it directly from Base UI once it's a package dependency.
function isEventHandler(key, value) {
  // This approach is more efficient than using a regex.
  const thirdCharCode = key.charCodeAt(2);
  return key[0] === 'o' && key[1] === 'n' && thirdCharCode >= 65 /* A */ && thirdCharCode <= 90 /* Z */ && typeof value === 'function';
}
function mergeSlotProps(externalSlotProps, defaultSlotProps) {
  if (!externalSlotProps) {
    return defaultSlotProps;
  }
  function extractHandlers(externalSlotPropsValue, defaultSlotPropsValue) {
    const handlers = {};
    Object.keys(defaultSlotPropsValue).forEach(key => {
      if (isEventHandler(key, defaultSlotPropsValue[key]) && typeof externalSlotPropsValue[key] === 'function') {
        // only compose the handlers if both default and external slot props match the event handler
        handlers[key] = (...args) => {
          externalSlotPropsValue[key](...args);
          defaultSlotPropsValue[key](...args);
        };
      }
    });
    return handlers;
  }
  if (typeof externalSlotProps === 'function' || typeof defaultSlotProps === 'function') {
    return ownerState => {
      const defaultSlotPropsValue = typeof defaultSlotProps === 'function' ? defaultSlotProps(ownerState) : defaultSlotProps;
      const externalSlotPropsValue = typeof externalSlotProps === 'function' ? externalSlotProps({
        ...ownerState,
        ...defaultSlotPropsValue
      }) : externalSlotProps;
      const className = clsx(ownerState?.className, defaultSlotPropsValue?.className, externalSlotPropsValue?.className);
      const handlers = extractHandlers(externalSlotPropsValue, defaultSlotPropsValue);
      return {
        ...defaultSlotPropsValue,
        ...externalSlotPropsValue,
        ...handlers,
        ...(!!className && {
          className
        }),
        ...(defaultSlotPropsValue?.style && externalSlotPropsValue?.style && {
          style: {
            ...defaultSlotPropsValue.style,
            ...externalSlotPropsValue.style
          }
        }),
        ...(defaultSlotPropsValue?.sx && externalSlotPropsValue?.sx && {
          sx: [...(Array.isArray(defaultSlotPropsValue.sx) ? defaultSlotPropsValue.sx : [defaultSlotPropsValue.sx]), ...(Array.isArray(externalSlotPropsValue.sx) ? externalSlotPropsValue.sx : [externalSlotPropsValue.sx])]
        })
      };
    };
  }
  const typedDefaultSlotProps = defaultSlotProps;
  const handlers = extractHandlers(externalSlotProps, typedDefaultSlotProps);
  const className = clsx(typedDefaultSlotProps?.className, externalSlotProps?.className);
  return {
    ...defaultSlotProps,
    ...externalSlotProps,
    ...handlers,
    ...(!!className && {
      className
    }),
    ...(typedDefaultSlotProps?.style && externalSlotProps?.style && {
      style: {
        ...typedDefaultSlotProps.style,
        ...externalSlotProps.style
      }
    }),
    ...(typedDefaultSlotProps?.sx && externalSlotProps?.sx && {
      sx: [...(Array.isArray(typedDefaultSlotProps.sx) ? typedDefaultSlotProps.sx : [typedDefaultSlotProps.sx]), ...(Array.isArray(externalSlotProps.sx) ? externalSlotProps.sx : [externalSlotProps.sx])]
    })
  };
}

const refType = PropTypes.oneOfType([PropTypes.func, PropTypes.object]);

function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef$1(props, propName, componentName, location, propFullName) {
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null ||
  // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === 'undefined') {
    return null;
  }
  let warningHint;

  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */
  if (typeof propValue === 'function' && !isClassComponent(propValue)) {
    warningHint = 'Did you accidentally provide a plain function component instead?';
  }
  if (propValue === React__namespace.Fragment) {
    warningHint = 'Did you accidentally provide a React.Fragment instead?';
  }
  if (warningHint !== undefined) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element type that can hold a ref. ${warningHint} ` + 'For more information see https://mui.com/r/caveat-with-refs-guide');
  }
  return null;
}
var elementTypeAcceptingRef = chainPropTypes(PropTypes.elementType, elementTypeAcceptingRef$1);

/**
 * Returns a boolean indicating if the event's target has :focus-visible
 */
function isFocusVisible(element) {
  try {
    return element.matches(':focus-visible');
  } catch (error) {
    // Do not warn on jsdom tests, otherwise all tests that rely on focus have to be skipped
    // Tests that rely on `:focus-visible` will still have to be skipped in jsdom
    if (process.env.NODE_ENV !== 'production' && !window.navigator.userAgent.includes('jsdom')) {
      console.warn(['MUI: The `:focus-visible` pseudo class is not supported in this browser.', 'Some components rely on this feature to work properly.'].join('\n'));
    }
  }
  return false;
}

/**
 * Lazy initialization container for the Ripple instance. This improves
 * performance by delaying mounting the ripple until it's needed.
 */
class LazyRipple {
  /** React ref to the ripple instance */

  /** If the ripple component should be mounted */

  /** Promise that resolves when the ripple component is mounted */

  /** If the ripple component has been mounted */

  /** React state hook setter */

  static create() {
    return new LazyRipple();
  }
  static use() {
    /* eslint-disable */
    const ripple = useLazyRef(LazyRipple.create).current;
    const [shouldMount, setShouldMount] = React__namespace.useState(false);
    ripple.shouldMount = shouldMount;
    ripple.setShouldMount = setShouldMount;
    React__namespace.useEffect(ripple.mountEffect, [shouldMount]);
    /* eslint-enable */

    return ripple;
  }
  constructor() {
    this.ref = {
      current: null
    };
    this.mounted = null;
    this.didMount = false;
    this.shouldMount = false;
    this.setShouldMount = null;
  }
  mount() {
    if (!this.mounted) {
      this.mounted = createControlledPromise();
      this.shouldMount = true;
      this.setShouldMount(this.shouldMount);
    }
    return this.mounted;
  }
  mountEffect = () => {
    if (this.shouldMount && !this.didMount) {
      if (this.ref.current !== null) {
        this.didMount = true;
        this.mounted.resolve();
      }
    }
  };

  /* Ripple API */

  start(...args) {
    this.mount().then(() => this.ref.current?.start(...args));
  }
  stop(...args) {
    this.mount().then(() => this.ref.current?.stop(...args));
  }
  pulsate(...args) {
    this.mount().then(() => this.ref.current?.pulsate(...args));
  }
}
function useLazyRipple() {
  return LazyRipple.use();
}
function createControlledPromise() {
  let resolve;
  let reject;
  const p = new Promise((resolveFn, rejectFn) => {
    resolve = resolveFn;
    reject = rejectFn;
  });
  p.resolve = resolve;
  p.reject = reject;
  return p;
}

function _objectWithoutPropertiesLoose$1(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;

var TransitionGroupContext = React$1.createContext(null);

var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) forceReflow(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React$1.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React$1.cloneElement(React$1.Children.only(children), childProps))
    );
  };

  return Transition;
}(React$1.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === 'undefined' ? PropTypes.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop$1() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop$1,
  onEntering: noop$1,
  onEntered: noop$1,
  onExit: noop$1,
  onExiting: noop$1,
  onExited: noop$1
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && React$1.isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) React$1.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return React$1.cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!React$1.isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = React$1.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = React$1.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = React$1.cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && React$1.isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = React$1.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends$1({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose$1(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/React$1.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/React$1.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React$1.createElement(Component, props, children));
  };

  return TransitionGroup;
}(React$1.Component);

TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: PropTypes.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: PropTypes.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: PropTypes.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: PropTypes.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: PropTypes.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: PropTypes.func
} : {};
TransitionGroup.defaultProps = defaultProps;

class Timeout {
  static create() {
    return new Timeout();
  }
  currentId = null;

  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn();
    }, delay);
  }
  clear = () => {
    if (this.currentId !== null) {
      clearTimeout(this.currentId);
      this.currentId = null;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
}
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount$1(timeout.disposeEffect);
  return timeout;
}

function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = React__namespace.useState(false);
  const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  React__namespace.useEffect(() => {
    if (!inProp && onExited != null) {
      // react-transition-group#onExited
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return undefined;
  }, [onExited, inProp, timeout]);
  return /*#__PURE__*/jsxRuntime.jsx("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /*#__PURE__*/jsxRuntime.jsx("span", {
      className: childClassName
    })
  });
}
process.env.NODE_ENV !== "production" ? Ripple.propTypes /* remove-proptypes */ = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: PropTypes.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: PropTypes.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: PropTypes.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: PropTypes.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: PropTypes.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: PropTypes.number,
  /**
   * exit delay
   */
  timeout: PropTypes.number.isRequired
} : void 0;

const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);

const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`;
const exitKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
const pulsateKeyframe = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
const TouchRippleRoot = styled('span', {
  name: 'MuiTouchRipple',
  slot: 'Root'
})({
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: 'inherit'
});

// This `styled()` function invokes keyframes. `styled-components` only supports keyframes
// in string templates. Do not convert these styles in JS object as it will break.
const TouchRippleRipple = styled(Ripple, {
  name: 'MuiTouchRipple',
  slot: 'Ripple'
})`
  opacity: 0;
  position: absolute;

  &.${touchRippleClasses.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${enterKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  &.${touchRippleClasses.ripplePulsate} {
    animation-duration: ${({
  theme
}) => theme.transitions.duration.shorter}ms;
  }

  & .${touchRippleClasses.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${touchRippleClasses.childLeaving} {
    opacity: 0;
    animation-name: ${exitKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  & .${touchRippleClasses.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${pulsateKeyframe};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`;

/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */
const TouchRipple = /*#__PURE__*/React__namespace.forwardRef(function TouchRipple(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTouchRipple'
  });
  const {
    center: centerProp = false,
    classes = {},
    className,
    ...other
  } = props;
  const [ripples, setRipples] = React__namespace.useState([]);
  const nextKey = React__namespace.useRef(0);
  const rippleCallback = React__namespace.useRef(null);
  React__namespace.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);

  // Used to filter out mouse emulated events on mobile.
  const ignoringMouseDown = React__namespace.useRef(false);
  // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.
  const startTimer = useTimeout();

  // This is the hook called once the previous timeout is ready.
  const startTimerCommit = React__namespace.useRef(null);
  const container = React__namespace.useRef(null);
  const startCommit = React__namespace.useCallback(params => {
    const {
      pulsate,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples(oldRipples => [...oldRipples, /*#__PURE__*/jsxRuntime.jsx(TouchRippleRipple, {
      classes: {
        ripple: clsx(classes.ripple, touchRippleClasses.ripple),
        rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
        ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
        child: clsx(classes.child, touchRippleClasses.child),
        childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
        childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate,
      rippleX: rippleX,
      rippleY: rippleY,
      rippleSize: rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = React__namespace.useCallback((event = {}, options = {}, cb = () => {}) => {
    const {
      pulsate = false,
      center = centerProp || options.pulsate,
      fakeElement = false // For test purposes
    } = options;
    if (event?.type === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if (event?.type === 'touchstart') {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };

    // Get the size of the ripple
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event === undefined || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);

      // For some reason the animation is broken on Mobile Chrome if the size is even.
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }

    // Touch devices
    if (event?.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = () => {
          startCommit({
            pulsate,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        // Delay the execution of the ripple effect.
        // We have to make a tradeoff with this delay value.
        startTimer.start(DELAY_RIPPLE, () => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        });
      }
    } else {
      startCommit({
        pulsate,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit, startTimer]);
  const pulsate = React__namespace.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = React__namespace.useCallback((event, cb) => {
    startTimer.clear();

    // The touch interaction occurs too quickly.
    // We still want to show ripple effect.
    if (event?.type === 'touchend' && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.start(0, () => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples(oldRipples => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, [startTimer]);
  React__namespace.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /*#__PURE__*/jsxRuntime.jsx(TouchRippleRoot, {
    className: clsx(touchRippleClasses.root, classes.root, className),
    ref: container,
    ...other,
    children: /*#__PURE__*/jsxRuntime.jsx(TransitionGroup, {
      component: null,
      exit: true,
      children: ripples
    })
  });
});
process.env.NODE_ENV !== "production" ? TouchRipple.propTypes /* remove-proptypes */ = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string
} : void 0;

function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass('MuiButtonBase', slot);
}
const buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);

const useUtilityClasses$9 = ownerState => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
const ButtonBaseRoot = styled('button', {
  name: 'MuiButtonBase',
  slot: 'Root'
})({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  // Reset
  WebkitAppearance: 'none',
  // Reset
  textDecoration: 'none',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.
  },
  [`&.${buttonBaseClasses.disabled}`]: {
    pointerEvents: 'none',
    // Disable link interactions
    cursor: 'default'
  },
  '@media print': {
    colorAdjust: 'exact'
  }
});

/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */
const ButtonBase = /*#__PURE__*/React__namespace.forwardRef(function ButtonBase(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiButtonBase'
  });
  const {
    action,
    centerRipple = false,
    children,
    className,
    component = 'button',
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    focusVisibleClassName,
    LinkComponent = 'a',
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type,
    ...other
  } = props;
  const buttonRef = React__namespace.useRef(null);
  const ripple = useLazyRipple();
  const handleRippleRef = useForkRef(ripple.ref, touchRippleRef);
  const [focusVisible, setFocusVisible] = React__namespace.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React__namespace.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const enableTouchRipple = ripple.shouldMount && !disableRipple && !disabled;
  React__namespace.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple) {
      ripple.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, ripple]);
  const handleMouseDown = useRippleHandler(ripple, 'start', onMouseDown, disableTouchRipple);
  const handleContextMenu = useRippleHandler(ripple, 'stop', onContextMenu, disableTouchRipple);
  const handleDragLeave = useRippleHandler(ripple, 'stop', onDragLeave, disableTouchRipple);
  const handleMouseUp = useRippleHandler(ripple, 'stop', onMouseUp, disableTouchRipple);
  const handleMouseLeave = useRippleHandler(ripple, 'stop', event => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  }, disableTouchRipple);
  const handleTouchStart = useRippleHandler(ripple, 'start', onTouchStart, disableTouchRipple);
  const handleTouchEnd = useRippleHandler(ripple, 'stop', onTouchEnd, disableTouchRipple);
  const handleTouchMove = useRippleHandler(ripple, 'stop', onTouchMove, disableTouchRipple);
  const handleBlur = useRippleHandler(ripple, 'stop', event => {
    if (!isFocusVisible(event.target)) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback(event => {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    if (isFocusVisible(event.target)) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };
  const handleKeyDown = useEventCallback(event => {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !event.repeat && focusVisible && event.key === ' ') {
      ripple.stop(event, () => {
        ripple.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }

    // Keyboard accessibility for non interactive elements
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback(event => {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && focusVisible && !event.defaultPrevented) {
      ripple.stop(event, () => {
        ripple.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }

    // Keyboard accessibility for non interactive elements
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === 'button' && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === 'button') {
    const hasFormAttributes = !!other.formAction;
    // ButtonBase was defaulting to type="button" when no type prop was provided, which prevented form submission and broke formAction functionality.
    // The fix checks for form-related attributes and skips the default type to allow the browser's natural submit behavior (type="submit").
    buttonProps.type = type === undefined && !hasFormAttributes ? 'button' : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = 'button';
    }
    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
    }
  }
  const handleRef = useForkRef(ref, buttonRef);
  const ownerState = {
    ...props,
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  };
  const classes = useUtilityClasses$9(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(ButtonBaseRoot, {
    as: ComponentProp,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    onBlur: handleBlur,
    onClick: onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type: type,
    ...buttonProps,
    ...other,
    children: [children, enableTouchRipple ? /*#__PURE__*/jsxRuntime.jsx(TouchRipple, {
      ref: handleRippleRef,
      center: centerRipple,
      ...TouchRippleProps
    }) : null]
  });
});
function useRippleHandler(ripple, rippleAction, eventCallback, skipRippleAction = false) {
  return useEventCallback(event => {
    if (eventCallback) {
      eventCallback(event);
    }
    if (!skipRippleAction) {
      ripple[rippleAction](event);
    }
    return true;
  });
}
process.env.NODE_ENV !== "production" ? ButtonBase.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: refType,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: PropTypes.bool,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: PropTypes.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: PropTypes.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * @ignore
   */
  formAction: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * @ignore
   */
  href: PropTypes /* @typescript-to-proptypes-ignore */.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: PropTypes.elementType,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  onContextMenu: PropTypes.func,
  /**
   * @ignore
   */
  onDragLeave: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes.func,
  /**
   * @ignore
   */
  onMouseDown: PropTypes.func,
  /**
   * @ignore
   */
  onMouseLeave: PropTypes.func,
  /**
   * @ignore
   */
  onMouseUp: PropTypes.func,
  /**
   * @ignore
   */
  onTouchEnd: PropTypes.func,
  /**
   * @ignore
   */
  onTouchMove: PropTypes.func,
  /**
   * @ignore
   */
  onTouchStart: PropTypes.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * @default 0
   */
  tabIndex: PropTypes.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: PropTypes.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.shape({
      pulsate: PropTypes.func.isRequired,
      start: PropTypes.func.isRequired,
      stop: PropTypes.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: PropTypes.oneOfType([PropTypes.oneOf(['button', 'reset', 'submit']), PropTypes.string])
} : void 0;

function getCircularProgressUtilityClass(slot) {
  return generateUtilityClass('MuiCircularProgress', slot);
}
generateUtilityClasses('MuiCircularProgress', ['root', 'determinate', 'indeterminate', 'colorPrimary', 'colorSecondary', 'svg', 'track', 'circle', 'circleDeterminate', 'circleIndeterminate', 'circleDisableShrink']);

const SIZE = 44;
const circularRotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
const circularDashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`;

// This implementation is for supporting both Styled-components v4+ and Pigment CSS.
// A global animation has to be created here for Styled-components v4+ (https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#12).
// which can be done by checking typeof indeterminate1Keyframe !== 'string' (at runtime, Pigment CSS transform keyframes`` to a string).
const rotateAnimation = typeof circularRotateKeyframe !== 'string' ? css`
        animation: ${circularRotateKeyframe} 1.4s linear infinite;
      ` : null;
const dashAnimation = typeof circularDashKeyframe !== 'string' ? css`
        animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
      ` : null;
const useUtilityClasses$8 = ownerState => {
  const {
    classes,
    variant,
    color,
    disableShrink
  } = ownerState;
  const slots = {
    root: ['root', variant, `color${capitalize(color)}`],
    svg: ['svg'],
    track: ['track'],
    circle: ['circle', `circle${capitalize(variant)}`, disableShrink && 'circleDisableShrink']
  };
  return composeClasses(slots, getCircularProgressUtilityClass, classes);
};
const CircularProgressRoot = styled('span', {
  name: 'MuiCircularProgress',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`color${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  display: 'inline-block',
  variants: [{
    props: {
      variant: 'determinate'
    },
    style: {
      transition: theme.transitions.create('transform')
    }
  }, {
    props: {
      variant: 'indeterminate'
    },
    style: rotateAnimation || {
      animation: `${circularRotateKeyframe} 1.4s linear infinite`
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  }))]
})));
const CircularProgressSVG = styled('svg', {
  name: 'MuiCircularProgress',
  slot: 'Svg'
})({
  display: 'block' // Keeps the progress centered
});
const CircularProgressCircle = styled('circle', {
  name: 'MuiCircularProgress',
  slot: 'Circle',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.circle, styles[`circle${capitalize(ownerState.variant)}`], ownerState.disableShrink && styles.circleDisableShrink];
  }
})(memoTheme(({
  theme
}) => ({
  stroke: 'currentColor',
  variants: [{
    props: {
      variant: 'determinate'
    },
    style: {
      transition: theme.transitions.create('stroke-dashoffset')
    }
  }, {
    props: {
      variant: 'indeterminate'
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: '80px, 200px',
      strokeDashoffset: 0 // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant === 'indeterminate' && !ownerState.disableShrink,
    style: dashAnimation || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`
    }
  }]
})));
const CircularProgressTrack = styled('circle', {
  name: 'MuiCircularProgress',
  slot: 'Track'
})(memoTheme(({
  theme
}) => ({
  stroke: 'currentColor',
  opacity: (theme.vars || theme).palette.action.activatedOpacity
})));

/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */
const CircularProgress = /*#__PURE__*/React__namespace.forwardRef(function CircularProgress(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiCircularProgress'
  });
  const {
    className,
    color = 'primary',
    disableShrink = false,
    enableTrackSlot = false,
    size = 40,
    style,
    thickness = 3.6,
    value = 0,
    variant = 'indeterminate',
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    disableShrink,
    size,
    thickness,
    value,
    variant,
    enableTrackSlot
  };
  const classes = useUtilityClasses$8(ownerState);
  const circleStyle = {};
  const rootStyle = {};
  const rootProps = {};
  if (variant === 'determinate') {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(value);
    circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
    rootStyle.transform = 'rotate(-90deg)';
  }
  return /*#__PURE__*/jsxRuntime.jsx(CircularProgressRoot, {
    className: clsx(classes.root, className),
    style: {
      width: size,
      height: size,
      ...rootStyle,
      ...style
    },
    ownerState: ownerState,
    ref: ref,
    role: "progressbar",
    ...rootProps,
    ...other,
    children: /*#__PURE__*/jsxRuntime.jsxs(CircularProgressSVG, {
      className: classes.svg,
      ownerState: ownerState,
      viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
      children: [enableTrackSlot ? /*#__PURE__*/jsxRuntime.jsx(CircularProgressTrack, {
        className: classes.track,
        ownerState: ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness,
        "aria-hidden": "true"
      }) : null, /*#__PURE__*/jsxRuntime.jsx(CircularProgressCircle, {
        className: classes.circle,
        style: circleStyle,
        ownerState: ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness
      })]
    })
  });
});
process.env.NODE_ENV !== "production" ? CircularProgress.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: chainPropTypes(PropTypes.bool, props => {
    if (props.disableShrink && props.variant && props.variant !== 'indeterminate') {
      return new Error('MUI: You have provided the `disableShrink` prop ' + 'with a variant other than `indeterminate`. This will have no effect.');
    }
    return null;
  }),
  /**
   * If `true`, a track circle slot is mounted to show a subtle background for the progress.
   * The `size` and `thickness` apply to the track slot to be consistent with the progress circle.
   * @default false
   */
  enableTrackSlot: PropTypes.bool,
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: PropTypes.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: PropTypes.oneOf(['determinate', 'indeterminate'])
} : void 0;

function getIconButtonUtilityClass(slot) {
  return generateUtilityClass('MuiIconButton', slot);
}
const iconButtonClasses = generateUtilityClasses('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorError', 'colorInfo', 'colorSuccess', 'colorWarning', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge', 'loading', 'loadingIndicator', 'loadingWrapper']);

const useUtilityClasses$7 = ownerState => {
  const {
    classes,
    disabled,
    color,
    edge,
    size,
    loading
  } = ownerState;
  const slots = {
    root: ['root', loading && 'loading', disabled && 'disabled', color !== 'default' && `color${capitalize(color)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`],
    loadingIndicator: ['loadingIndicator'],
    loadingWrapper: ['loadingWrapper']
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = styled(ButtonBase, {
  name: 'MuiIconButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.loading && styles.loading, ownerState.color !== 'default' && styles[`color${capitalize(ownerState.color)}`], ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`], styles[`size${capitalize(ownerState.size)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  textAlign: 'center',
  flex: '0 0 auto',
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: '50%',
  color: (theme.vars || theme).palette.action.active,
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  }),
  variants: [{
    props: props => !props.disableRipple,
    style: {
      '--IconButton-hoverBg': theme.alpha((theme.vars || theme).palette.action.active, (theme.vars || theme).palette.action.hoverOpacity),
      '&:hover': {
        backgroundColor: 'var(--IconButton-hoverBg)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    }
  }, {
    props: {
      edge: 'start'
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: 'start',
      size: 'small'
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: 'end'
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: 'end',
      size: 'small'
    },
    style: {
      marginRight: -3
    }
  }]
})), memoTheme(({
  theme
}) => ({
  variants: [{
    props: {
      color: 'inherit'
    },
    style: {
      color: 'inherit'
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()) // check all the used fields in the style below
  .map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()) // check all the used fields in the style below
  .map(([color]) => ({
    props: {
      color
    },
    style: {
      '--IconButton-hoverBg': theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: 'small'
    },
    style: {
      padding: 5,
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: 'large'
    },
    style: {
      padding: 12,
      fontSize: theme.typography.pxToRem(28)
    }
  }],
  [`&.${iconButtonClasses.disabled}`]: {
    backgroundColor: 'transparent',
    color: (theme.vars || theme).palette.action.disabled
  },
  [`&.${iconButtonClasses.loading}`]: {
    color: 'transparent'
  }
})));
const IconButtonLoadingIndicator = styled('span', {
  name: 'MuiIconButton',
  slot: 'LoadingIndicator'
})(({
  theme
}) => ({
  display: 'none',
  position: 'absolute',
  visibility: 'visible',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: (theme.vars || theme).palette.action.disabled,
  variants: [{
    props: {
      loading: true
    },
    style: {
      display: 'flex'
    }
  }]
}));

/**
 * Refer to the [Icons](/material-ui/icons/) section of the documentation
 * regarding the available icon options.
 */
const IconButton = /*#__PURE__*/React__namespace.forwardRef(function IconButton(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiIconButton'
  });
  const {
    edge = false,
    children,
    className,
    color = 'default',
    disabled = false,
    disableFocusRipple = false,
    size = 'medium',
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    ...other
  } = props;
  const loadingId = useId(idProp);
  const loadingIndicator = loadingIndicatorProp ?? /*#__PURE__*/jsxRuntime.jsx(CircularProgress, {
    "aria-labelledby": loadingId,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    edge,
    color,
    disabled,
    disableFocusRipple,
    loading,
    loadingIndicator,
    size
  };
  const classes = useUtilityClasses$7(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(IconButtonRoot, {
    id: loading ? loadingId : idProp,
    className: clsx(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled || loading,
    ref: ref,
    ...other,
    ownerState: ownerState,
    children: [typeof loading === 'boolean' &&
    /*#__PURE__*/
    // use plain HTML span to minimize the runtime overhead
    jsxRuntime.jsx("span", {
      className: classes.loadingWrapper,
      style: {
        display: 'contents'
      },
      children: /*#__PURE__*/jsxRuntime.jsx(IconButtonLoadingIndicator, {
        className: classes.loadingIndicator,
        ownerState: ownerState,
        children: loading && loadingIndicator
      })
    }), children]
  });
});
process.env.NODE_ENV !== "production" ? IconButton.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: chainPropTypes(PropTypes.node, props => {
    const found = React__namespace.Children.toArray(props.children).some(child => /*#__PURE__*/React__namespace.isValidElement(child) && child.props.onClick);
    if (found) {
      return new Error(['MUI: You are providing an onClick event listener to a child of a button element.', 'Prefer applying it to the IconButton directly.', 'This guarantees that the whole <button> will be responsive to click events.'].join('\n'));
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'default', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: PropTypes.oneOf(['end', 'start', false]),
  /**
   * @ignore
   */
  id: PropTypes.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: PropTypes.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: PropTypes.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

var SuccessOutlinedIcon = createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), 'SuccessOutlined');

var ReportProblemOutlinedIcon = createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), 'ReportProblemOutlined');

var ErrorOutlineIcon = createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutline');

var InfoOutlinedIcon = createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), 'InfoOutlined');

var CloseIcon = createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');

const useUtilityClasses$6 = ownerState => {
  const {
    variant,
    color,
    severity,
    classes
  } = ownerState;
  const slots = {
    root: ['root', `color${capitalize(color || severity)}`, `${variant}${capitalize(color || severity)}`, `${variant}`],
    icon: ['icon'],
    message: ['message'],
    action: ['action']
  };
  return composeClasses(slots, getAlertUtilityClass, classes);
};
const AlertRoot = styled(Paper, {
  name: 'MuiAlert',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize(ownerState.color || ownerState.severity)}`]];
  }
})(memoTheme(({
  theme
}) => {
  const getColor = theme.palette.mode === 'light' ? theme.darken : theme.lighten;
  const getBackgroundColor = theme.palette.mode === 'light' ? theme.lighten : theme.darken;
  return {
    ...theme.typography.body2,
    backgroundColor: 'transparent',
    display: 'flex',
    padding: '6px 16px',
    variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(['light'])).map(([color]) => ({
      props: {
        colorSeverity: color,
        variant: 'standard'
      },
      style: {
        color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
        backgroundColor: theme.vars ? theme.vars.palette.Alert[`${color}StandardBg`] : getBackgroundColor(theme.palette[color].light, 0.9),
        [`& .${alertClasses.icon}`]: theme.vars ? {
          color: theme.vars.palette.Alert[`${color}IconColor`]
        } : {
          color: theme.palette[color].main
        }
      }
    })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(['light'])).map(([color]) => ({
      props: {
        colorSeverity: color,
        variant: 'outlined'
      },
      style: {
        color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
        border: `1px solid ${(theme.vars || theme).palette[color].light}`,
        [`& .${alertClasses.icon}`]: theme.vars ? {
          color: theme.vars.palette.Alert[`${color}IconColor`]
        } : {
          color: theme.palette[color].main
        }
      }
    })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(['dark'])).map(([color]) => ({
      props: {
        colorSeverity: color,
        variant: 'filled'
      },
      style: {
        fontWeight: theme.typography.fontWeightMedium,
        ...(theme.vars ? {
          color: theme.vars.palette.Alert[`${color}FilledColor`],
          backgroundColor: theme.vars.palette.Alert[`${color}FilledBg`]
        } : {
          backgroundColor: theme.palette.mode === 'dark' ? theme.palette[color].dark : theme.palette[color].main,
          color: theme.palette.getContrastText(theme.palette[color].main)
        })
      }
    }))]
  };
}));
const AlertIcon = styled('div', {
  name: 'MuiAlert',
  slot: 'Icon'
})({
  marginRight: 12,
  padding: '7px 0',
  display: 'flex',
  fontSize: 22,
  opacity: 0.9
});
const AlertMessage = styled('div', {
  name: 'MuiAlert',
  slot: 'Message'
})({
  padding: '8px 0',
  minWidth: 0,
  overflow: 'auto'
});
const AlertAction = styled('div', {
  name: 'MuiAlert',
  slot: 'Action'
})({
  display: 'flex',
  alignItems: 'flex-start',
  padding: '4px 0 0 16px',
  marginLeft: 'auto',
  marginRight: -8
});
const defaultIconMapping = {
  success: /*#__PURE__*/jsxRuntime.jsx(SuccessOutlinedIcon, {
    fontSize: "inherit"
  }),
  warning: /*#__PURE__*/jsxRuntime.jsx(ReportProblemOutlinedIcon, {
    fontSize: "inherit"
  }),
  error: /*#__PURE__*/jsxRuntime.jsx(ErrorOutlineIcon, {
    fontSize: "inherit"
  }),
  info: /*#__PURE__*/jsxRuntime.jsx(InfoOutlinedIcon, {
    fontSize: "inherit"
  })
};
const Alert = /*#__PURE__*/React__namespace.forwardRef(function Alert(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiAlert'
  });
  const {
    action,
    children,
    className,
    closeText = 'Close',
    color,
    components = {},
    componentsProps = {},
    icon,
    iconMapping = defaultIconMapping,
    onClose,
    role = 'alert',
    severity = 'success',
    slotProps = {},
    slots = {},
    variant = 'standard',
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    severity,
    variant,
    colorSeverity: color || severity
  };
  const classes = useUtilityClasses$6(ownerState);
  const externalForwardedProps = {
    slots: {
      closeButton: components.CloseButton,
      closeIcon: components.CloseIcon,
      ...slots
    },
    slotProps: {
      ...componentsProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = useSlot('root', {
    ref,
    shouldForwardComponentProp: true,
    className: clsx(classes.root, className),
    elementType: AlertRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    additionalProps: {
      role,
      elevation: 0
    }
  });
  const [IconSlot, iconSlotProps] = useSlot('icon', {
    className: classes.icon,
    elementType: AlertIcon,
    externalForwardedProps,
    ownerState
  });
  const [MessageSlot, messageSlotProps] = useSlot('message', {
    className: classes.message,
    elementType: AlertMessage,
    externalForwardedProps,
    ownerState
  });
  const [ActionSlot, actionSlotProps] = useSlot('action', {
    className: classes.action,
    elementType: AlertAction,
    externalForwardedProps,
    ownerState
  });
  const [CloseButtonSlot, closeButtonProps] = useSlot('closeButton', {
    elementType: IconButton,
    externalForwardedProps,
    ownerState
  });
  const [CloseIconSlot, closeIconProps] = useSlot('closeIcon', {
    elementType: CloseIcon,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/jsxRuntime.jsxs(RootSlot, {
    ...rootSlotProps,
    children: [icon !== false ? /*#__PURE__*/jsxRuntime.jsx(IconSlot, {
      ...iconSlotProps,
      children: icon || iconMapping[severity]
    }) : null, /*#__PURE__*/jsxRuntime.jsx(MessageSlot, {
      ...messageSlotProps,
      children: children
    }), action != null ? /*#__PURE__*/jsxRuntime.jsx(ActionSlot, {
      ...actionSlotProps,
      children: action
    }) : null, action == null && onClose ? /*#__PURE__*/jsxRuntime.jsx(ActionSlot, {
      ...actionSlotProps,
      children: /*#__PURE__*/jsxRuntime.jsx(CloseButtonSlot, {
        size: "small",
        "aria-label": closeText,
        title: closeText,
        color: "inherit",
        onClick: onClose,
        ...closeButtonProps,
        children: /*#__PURE__*/jsxRuntime.jsx(CloseIconSlot, {
          fontSize: "small",
          ...closeIconProps
        })
      })
    }) : null]
  });
});
process.env.NODE_ENV !== "production" ? Alert.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: PropTypes.node,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: PropTypes.string,
  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: PropTypes.shape({
    CloseButton: PropTypes.elementType,
    CloseIcon: PropTypes.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: PropTypes.shape({
    closeButton: PropTypes.object,
    closeIcon: PropTypes.object
  }),
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   * Set to `false` to remove the `icon`.
   */
  icon: PropTypes.node,
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: PropTypes.shape({
    error: PropTypes.node,
    info: PropTypes.node,
    success: PropTypes.node,
    warning: PropTypes.node
  }),
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: PropTypes.func,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: PropTypes.string,
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    action: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    closeButton: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    closeIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    message: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    action: PropTypes.elementType,
    closeButton: PropTypes.elementType,
    closeIcon: PropTypes.elementType,
    icon: PropTypes.elementType,
    message: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['filled', 'outlined', 'standard']), PropTypes.string])
} : void 0;

function getTypographyUtilityClass(slot) {
  return generateUtilityClass('MuiTypography', slot);
}
generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);

const v6Colors = {
  primary: true,
  secondary: true,
  error: true,
  info: true,
  success: true,
  warning: true,
  textPrimary: true,
  textSecondary: true,
  textDisabled: true
};
const extendSxProp = internal_createExtendSxProp();
const useUtilityClasses$5 = ownerState => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, ownerState.align !== 'inherit' && `align${capitalize(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};
const TypographyRoot = styled('span', {
  name: 'MuiTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(memoTheme(({
  theme
}) => ({
  margin: 0,
  variants: [{
    props: {
      variant: 'inherit'
    },
    style: {
      // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
      font: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit'
    }
  }, ...Object.entries(theme.typography).filter(([variant, value]) => variant !== 'inherit' && value && typeof value === 'object').map(([variant, value]) => ({
    props: {
      variant
    },
    style: value
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), ...Object.entries(theme.palette?.text || {}).filter(([, value]) => typeof value === 'string').map(([color]) => ({
    props: {
      color: `text${capitalize(color)}`
    },
    style: {
      color: (theme.vars || theme).palette.text[color]
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.align !== 'inherit',
    style: {
      textAlign: 'var(--Typography-textAlign)'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.noWrap,
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.gutterBottom,
    style: {
      marginBottom: '0.35em'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.paragraph,
    style: {
      marginBottom: 16
    }
  }]
})));
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
};
const Typography = /*#__PURE__*/React__namespace.forwardRef(function Typography(inProps, ref) {
  const {
    color,
    ...themeProps
  } = useDefaultProps({
    props: inProps,
    name: 'MuiTypography'
  });
  const isSxColor = !v6Colors[color];
  // TODO: Remove `extendSxProp` in v7
  const props = extendSxProp({
    ...themeProps,
    ...(isSxColor && {
      color
    })
  });
  const {
    align = 'inherit',
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping,
    ...other
  } = props;
  const ownerState = {
    ...props,
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  };
  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  const classes = useUtilityClasses$5(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(TypographyRoot, {
    as: Component,
    ref: ref,
    className: clsx(classes.root, className),
    ...other,
    ownerState: ownerState,
    style: {
      ...(align !== 'inherit' && {
        '--Typography-textAlign': align
      }),
      ...other.style
    }
  });
});
process.env.NODE_ENV !== "production" ? Typography.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning', 'textPrimary', 'textSecondary', 'textDisabled']), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: PropTypes.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: PropTypes.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: PropTypes.bool,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']), PropTypes.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: PropTypes /* @typescript-to-proptypes-ignore */.object
} : void 0;

/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false,
    ...other
  } = parameters;
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps$1({
    ...other,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = useForkRef(internalRef, resolvedComponentsProps?.ref, parameters.additionalProps?.ref);
  const props = appendOwnerState(elementType, {
    ...mergedProps,
    ref
  }, ownerState);
  return props;
}

const warnedOnceCache = new Set();

/**
 * Logs a message to the console on development mode. The warning will only be logged once.
 *
 * The message is the log's cache key. Two identical messages will only be logged once.
 *
 * This function is a no-op in production.
 *
 * @param message the message to log
 * @param gravity the gravity of the warning. Defaults to `'warning'`.
 * @returns
 */
function warnOnce(message, gravity = 'warning') {
  if (process.env.NODE_ENV === 'production') {
    return;
  }
  const cleanMessage = Array.isArray(message) ? message.join('\n') : message;
  if (!warnedOnceCache.has(cleanMessage)) {
    warnedOnceCache.add(cleanMessage);
    if (gravity === 'error') {
      console.error(cleanMessage);
    } else {
      console.warn(cleanMessage);
    }
  }
}

function getRichTreeViewUtilityClass(slot) {
  return generateUtilityClass('MuiRichTreeView', slot);
}
generateUtilityClasses('MuiRichTreeView', ['root', 'item', 'itemContent', 'itemGroupTransition', 'itemIconContainer', 'itemLabel', 'itemCheckbox', 'itemLabelInput']);

function useThemeProps$2({
  props,
  name
}) {
  return useThemeProps$3({
    props,
    name,
    defaultTheme,
    themeId: THEME_ID
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createUseThemeProps(name) {
  return useThemeProps$2;
}

const EMPTY_ARRAY = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});

/**
 * @ignore - internal component.
 */
const TreeViewContext = /*#__PURE__*/React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") TreeViewContext.displayName = "TreeViewContext";
const useTreeViewContext = () => {
  const context = React__namespace.useContext(TreeViewContext);
  if (context == null) {
    throw new Error(['MUI X: Could not find the Tree View context.', 'It looks like you rendered your component outside of a SimpleTreeView or RichTreeView parent component.', 'This can also happen if you are bundling multiple versions of the Tree View.'].join('\n'));
  }
  return context;
};

/**
 * @ignore - internal component.
 */
const TreeViewStyleContext = /*#__PURE__*/React__namespace.createContext({
  classes: {},
  slots: {},
  slotProps: {}
});
if (process.env.NODE_ENV !== "production") TreeViewStyleContext.displayName = "TreeViewStyleContext";
const useTreeViewStyleContext = () => {
  return React__namespace.useContext(TreeViewStyleContext);
};

const useTreeViewBuildContext = parameters => {
  const {
    store,
    apiRef,
    rootRef
  } = parameters;
  const publicAPI = useRefWithInit(() => store.buildPublicAPI()).current;
  initializeInputApiRef(publicAPI, apiRef);
  const runItemPlugins = React__namespace.useCallback(itemPluginProps => {
    let finalRootRef = null;
    let finalContentRef = null;
    const pluginPropEnhancers = [];
    const pluginPropEnhancersNames = {};
    store.itemPluginManager.listPlugins().forEach(itemPlugin => {
      const itemPluginResponse = itemPlugin({
        props: itemPluginProps,
        rootRef: finalRootRef,
        contentRef: finalContentRef
      });
      if (itemPluginResponse?.rootRef) {
        finalRootRef = itemPluginResponse.rootRef;
      }
      if (itemPluginResponse?.contentRef) {
        finalContentRef = itemPluginResponse.contentRef;
      }
      if (itemPluginResponse?.propsEnhancers) {
        pluginPropEnhancers.push(itemPluginResponse.propsEnhancers);

        // Prepare a list of all the slots which are enhanced by at least one plugin
        Object.keys(itemPluginResponse.propsEnhancers).forEach(propsEnhancerName => {
          pluginPropEnhancersNames[propsEnhancerName] = true;
        });
      }
    });
    const resolvePropsEnhancer = currentSlotName => currentSlotParams => {
      const enhancedProps = {};
      pluginPropEnhancers.forEach(propsEnhancersForCurrentPlugin => {
        const propsEnhancerForCurrentPluginAndSlot = propsEnhancersForCurrentPlugin[currentSlotName];
        if (propsEnhancerForCurrentPluginAndSlot != null) {
          Object.assign(enhancedProps, propsEnhancerForCurrentPluginAndSlot(currentSlotParams));
        }
      });
      return enhancedProps;
    };
    const propsEnhancers = Object.fromEntries(Object.keys(pluginPropEnhancersNames).map(propEnhancerName => [propEnhancerName, resolvePropsEnhancer(propEnhancerName)]));
    return {
      contentRef: finalContentRef,
      rootRef: finalRootRef,
      propsEnhancers
    };
  }, [store]);
  const wrapItem = React__namespace.useCallback(({
    itemId,
    children,
    idAttribute
  }) => {
    let finalChildren = children;
    const itemsWrapper = store.itemPluginManager.listWrappers();

    // The wrappers are reversed to ensure that the first wrapper is the outermost one.
    for (let i = itemsWrapper.length - 1; i >= 0; i -= 1) {
      const itemWrapper = itemsWrapper[i];
      finalChildren = itemWrapper({
        store: store,
        itemId,
        children: finalChildren,
        idAttribute
      });
    }
    return finalChildren;
  }, [store]);
  return React__namespace.useMemo(() => ({
    runItemPlugins,
    wrapItem,
    publicAPI,
    store,
    rootRef
  }), [runItemPlugins, wrapItem, publicAPI, store, rootRef]);
};
function initializeInputApiRef(publicAPI, apiRef) {
  if (apiRef != null && apiRef.current == null) {
    apiRef.current = publicAPI;
  }
}

/**
 * Sets up the contexts for the underlying Tree Item components.
 *
 * @ignore - do not document.
 */
function TreeViewProvider(props) {
  const {
    store,
    apiRef,
    rootRef,
    classes = EMPTY_OBJECT,
    slots = EMPTY_OBJECT,
    slotProps = EMPTY_OBJECT,
    children
  } = props;
  const contextValue = useTreeViewBuildContext({
    store,
    apiRef,
    rootRef
  });
  const styleContextValue = React__namespace.useMemo(() => ({
    classes,
    slots: {
      collapseIcon: slots.collapseIcon,
      expandIcon: slots.expandIcon,
      endIcon: slots.endIcon
    },
    slotProps: {
      collapseIcon: slotProps.collapseIcon,
      expandIcon: slotProps.expandIcon,
      endIcon: slotProps.endIcon
    }
  }), [classes, slots.collapseIcon, slots.expandIcon, slots.endIcon, slotProps.collapseIcon, slotProps.expandIcon, slotProps.endIcon]);
  return /*#__PURE__*/jsxRuntime.jsx(TreeViewContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsxRuntime.jsx(TreeViewStyleContext.Provider, {
      value: styleContextValue,
      children: children
    })
  });
}

const is = Object.is;

/**
 * Fast shallow compare for objects.
 * @returns true if objects are equal.
 */
function fastObjectShallowCompare(a, b) {
  if (a === b) {
    return true;
  }
  if (!(a instanceof Object) || !(b instanceof Object)) {
    return false;
  }
  let aLength = 0;
  let bLength = 0;

  /* eslint-disable guard-for-in */
  for (const key in a) {
    aLength += 1;
    if (!is(a[key], b[key])) {
      return false;
    }
    if (!(key in b)) {
      return false;
    }
  }

  /* eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars */
  for (const _ in b) {
    bLength += 1;
  }
  return aLength === bLength;
}

function getTransitionProps(props, options) {
  const {
    timeout,
    easing,
    style = {}
  } = props;
  return {
    duration: style.transitionDuration ?? (typeof timeout === 'number' ? timeout : timeout[options.mode] || 0),
    easing: style.transitionTimingFunction ?? (typeof easing === 'object' ? easing[options.mode] : easing),
    delay: style.transitionDelay
  };
}

function getCollapseUtilityClass(slot) {
  return generateUtilityClass('MuiCollapse', slot);
}
generateUtilityClasses('MuiCollapse', ['root', 'horizontal', 'vertical', 'entered', 'hidden', 'wrapper', 'wrapperInner']);

const useUtilityClasses$4 = ownerState => {
  const {
    orientation,
    classes
  } = ownerState;
  const slots = {
    root: ['root', `${orientation}`],
    entered: ['entered'],
    hidden: ['hidden'],
    wrapper: ['wrapper', `${orientation}`],
    wrapperInner: ['wrapperInner', `${orientation}`]
  };
  return composeClasses(slots, getCollapseUtilityClass, classes);
};
const CollapseRoot = styled('div', {
  name: 'MuiCollapse',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.orientation], ownerState.state === 'entered' && styles.entered, ownerState.state === 'exited' && !ownerState.in && ownerState.collapsedSize === '0px' && styles.hidden];
  }
})(memoTheme(({
  theme
}) => ({
  height: 0,
  overflow: 'hidden',
  transition: theme.transitions.create('height'),
  variants: [{
    props: {
      orientation: 'horizontal'
    },
    style: {
      height: 'auto',
      width: 0,
      transition: theme.transitions.create('width')
    }
  }, {
    props: {
      state: 'entered'
    },
    style: {
      height: 'auto',
      overflow: 'visible'
    }
  }, {
    props: {
      state: 'entered',
      orientation: 'horizontal'
    },
    style: {
      width: 'auto'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.state === 'exited' && !ownerState.in && ownerState.collapsedSize === '0px',
    style: {
      visibility: 'hidden'
    }
  }]
})));
const CollapseWrapper = styled('div', {
  name: 'MuiCollapse',
  slot: 'Wrapper'
})({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: 'flex',
  width: '100%',
  variants: [{
    props: {
      orientation: 'horizontal'
    },
    style: {
      width: 'auto',
      height: '100%'
    }
  }]
});
const CollapseWrapperInner = styled('div', {
  name: 'MuiCollapse',
  slot: 'WrapperInner'
})({
  width: '100%',
  variants: [{
    props: {
      orientation: 'horizontal'
    },
    style: {
      width: 'auto',
      height: '100%'
    }
  }]
});

/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/material-ui/react-stepper/#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Collapse = /*#__PURE__*/React__namespace.forwardRef(function Collapse(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiCollapse'
  });
  const {
    addEndListener,
    children,
    className,
    collapsedSize: collapsedSizeProp = '0px',
    component,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    orientation = 'vertical',
    slots = {},
    slotProps = {},
    style,
    timeout = duration.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition,
    ...other
  } = props;
  const ownerState = {
    ...props,
    orientation,
    collapsedSize: collapsedSizeProp
  };
  const classes = useUtilityClasses$4(ownerState);
  const theme = useTheme();
  const timer = useTimeout();
  const wrapperRef = React__namespace.useRef(null);
  const autoTransitionDuration = React__namespace.useRef();
  const collapsedSize = typeof collapsedSizeProp === 'number' ? `${collapsedSizeProp}px` : collapsedSizeProp;
  const isHorizontal = orientation === 'horizontal';
  const size = isHorizontal ? 'width' : 'height';
  const nodeRef = React__namespace.useRef(null);
  const handleRef = useForkRef(ref, nodeRef);
  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current;

      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const getWrapperSize = () => wrapperRef.current ? wrapperRef.current[isHorizontal ? 'clientWidth' : 'clientHeight'] : 0;
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    if (wrapperRef.current && isHorizontal) {
      // Set absolute position to get the size of collapsed content
      wrapperRef.current.style.position = 'absolute';
    }
    node.style[size] = collapsedSize;
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    const wrapperSize = getWrapperSize();
    if (wrapperRef.current && isHorizontal) {
      // After the size is read reset the position back to default
      wrapperRef.current.style.position = '';
    }
    const {
      duration: transitionDuration,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    if (timeout === 'auto') {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
    }
    node.style[size] = `${wrapperSize}px`;
    node.style.transitionTimingFunction = transitionTimingFunction;
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback((node, isAppearing) => {
    node.style[size] = 'auto';
    if (onEntered) {
      onEntered(node, isAppearing);
    }
  });
  const handleExit = normalizedTransitionCallback(node => {
    node.style[size] = `${getWrapperSize()}px`;
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleExiting = normalizedTransitionCallback(node => {
    const wrapperSize = getWrapperSize();
    const {
      duration: transitionDuration,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    if (timeout === 'auto') {
      // TODO: rename getAutoHeightDuration to something more generic (width support)
      // Actually it just calculates animation duration based on size
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
    }
    node.style[size] = collapsedSize;
    node.style.transitionTimingFunction = transitionTimingFunction;
    if (onExiting) {
      onExiting(node);
    }
  });
  const handleAddEndListener = next => {
    if (timeout === 'auto') {
      timer.start(autoTransitionDuration.current || 0, next);
    }
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };
  const externalForwardedProps = {
    slots,
    slotProps,
    component
  };
  const [RootSlot, rootSlotProps] = useSlot('root', {
    ref: handleRef,
    className: clsx(classes.root, className),
    elementType: CollapseRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      style: {
        [isHorizontal ? 'minWidth' : 'minHeight']: collapsedSize,
        ...style
      }
    }
  });
  const [WrapperSlot, wrapperSlotProps] = useSlot('wrapper', {
    ref: wrapperRef,
    className: classes.wrapper,
    elementType: CollapseWrapper,
    externalForwardedProps,
    ownerState
  });
  const [WrapperInnerSlot, wrapperInnerSlotProps] = useSlot('wrapperInner', {
    className: classes.wrapperInner,
    elementType: CollapseWrapperInner,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/jsxRuntime.jsx(TransitionComponent, {
    in: inProp,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef: nodeRef,
    timeout: timeout === 'auto' ? null : timeout,
    ...other,
    children: (state, {
      ownerState: incomingOwnerState,
      ...restChildProps
    }) => {
      const stateOwnerState = {
        ...ownerState,
        state
      };
      return /*#__PURE__*/jsxRuntime.jsx(RootSlot, {
        ...rootSlotProps,
        className: clsx(rootSlotProps.className, {
          'entered': classes.entered,
          'exited': !inProp && collapsedSize === '0px' && classes.hidden
        }[state]),
        ownerState: stateOwnerState,
        ...restChildProps,
        children: /*#__PURE__*/jsxRuntime.jsx(WrapperSlot, {
          ...wrapperSlotProps,
          ownerState: stateOwnerState,
          children: /*#__PURE__*/jsxRuntime.jsx(WrapperInnerSlot, {
            ...wrapperInnerSlotProps,
            ownerState: stateOwnerState,
            children: children
          })
        })
      });
    }
  });
});
process.env.NODE_ENV !== "production" ? Collapse.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: PropTypes.func,
  /**
   * The content node to be collapsed.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * @default '0px'
   */
  collapsedSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: PropTypes.oneOfType([PropTypes.shape({
    enter: PropTypes.string,
    exit: PropTypes.string
  }), PropTypes.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool,
  /**
   * @ignore
   */
  onEnter: PropTypes.func,
  /**
   * @ignore
   */
  onEntered: PropTypes.func,
  /**
   * @ignore
   */
  onEntering: PropTypes.func,
  /**
   * @ignore
   */
  onExit: PropTypes.func,
  /**
   * @ignore
   */
  onExited: PropTypes.func,
  /**
   * @ignore
   */
  onExiting: PropTypes.func,
  /**
   * The transition orientation.
   * @default 'vertical'
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    wrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    wrapperInner: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    root: PropTypes.elementType,
    wrapper: PropTypes.elementType,
    wrapperInner: PropTypes.elementType
  }),
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default duration.standard
   */
  timeout: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })])
} : void 0;
if (Collapse) {
  Collapse.muiSupportAuto = true;
}

/**
 * @ignore - internal component.
 */
const FormControlContext = /*#__PURE__*/React__namespace.createContext(undefined);
if (process.env.NODE_ENV !== 'production') {
  FormControlContext.displayName = 'FormControlContext';
}

function useFormControl() {
  return React__namespace.useContext(FormControlContext);
}

function getSwitchBaseUtilityClass(slot) {
  return generateUtilityClass('PrivateSwitchBase', slot);
}
generateUtilityClasses('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);

const useUtilityClasses$3 = ownerState => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', edge && `edge${capitalize(edge)}`],
    input: ['input']
  };
  return composeClasses(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = styled(ButtonBase, {
  name: 'MuiSwitchBase'
})({
  padding: 9,
  borderRadius: '50%',
  variants: [{
    props: {
      edge: 'start',
      size: 'small'
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === 'start' && ownerState.size !== 'small',
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: 'end',
      size: 'small'
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === 'end' && ownerState.size !== 'small',
    style: {
      marginRight: -12
    }
  }]
});
const SwitchBaseInput = styled('input', {
  name: 'MuiSwitchBase',
  shouldForwardProp: rootShouldForwardProp
})({
  cursor: 'inherit',
  position: 'absolute',
  opacity: 0,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});

/**
 * @ignore - internal component.
 */
const SwitchBase = /*#__PURE__*/React__namespace.forwardRef(function SwitchBase(props, ref) {
  const {
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    defaultChecked,
    disabled: disabledProp,
    disableFocusRipple = false,
    edge = false,
    icon,
    id,
    inputProps,
    inputRef,
    name,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required = false,
    tabIndex,
    type,
    value,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  });
  const muiFormControl = useFormControl();
  const handleFocus = event => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = event => {
    // Workaround for https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented || readOnly) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      // TODO v6: remove the second argument.
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === 'checkbox' || type === 'radio';
  const ownerState = {
    ...props,
    checked,
    disabled,
    disableFocusRipple,
    edge
  };
  const classes = useUtilityClasses$3(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      input: inputProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = useSlot('root', {
    ref,
    elementType: SwitchBaseRoot,
    className: classes.root,
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      ...externalForwardedProps,
      component: 'span',
      ...other
    },
    getSlotProps: handlers => ({
      ...handlers,
      onFocus: event => {
        handlers.onFocus?.(event);
        handleFocus(event);
      },
      onBlur: event => {
        handlers.onBlur?.(event);
        handleBlur(event);
      }
    }),
    ownerState,
    additionalProps: {
      centerRipple: true,
      focusRipple: !disableFocusRipple,
      disabled,
      role: undefined,
      tabIndex: null
    }
  });
  const [InputSlot, inputSlotProps] = useSlot('input', {
    ref: inputRef,
    elementType: SwitchBaseInput,
    className: classes.input,
    externalForwardedProps,
    getSlotProps: handlers => ({
      ...handlers,
      onChange: event => {
        handlers.onChange?.(event);
        handleInputChange(event);
      }
    }),
    ownerState,
    additionalProps: {
      autoFocus,
      checked: checkedProp,
      defaultChecked,
      disabled,
      id: hasLabelFor ? id : undefined,
      name,
      readOnly,
      required,
      tabIndex,
      type,
      ...(type === 'checkbox' && value === undefined ? {} : {
        value
      })
    }
  });
  return /*#__PURE__*/jsxRuntime.jsxs(RootSlot, {
    ...rootSlotProps,
    children: [/*#__PURE__*/jsxRuntime.jsx(InputSlot, {
      ...inputSlotProps
    }), checked ? checkedIcon : icon]
  });
});

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
process.env.NODE_ENV !== "production" ? SwitchBase.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  defaultChecked: PropTypes.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: PropTypes.oneOf(['end', 'start', false]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType,
  /*
   * @ignore
   */
  name: PropTypes.string,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: PropTypes.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    input: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
  /**
   * @ignore
   */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The input component prop `type`.
   */
  type: PropTypes.string.isRequired,
  /**
   * The value of the component.
   */
  value: PropTypes.any
} : void 0;

var CheckBoxOutlineBlankIcon = createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), 'CheckBoxOutlineBlank');

var CheckBoxIcon = createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckBox');

var IndeterminateCheckBoxIcon = createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), 'IndeterminateCheckBox');

function getCheckboxUtilityClass(slot) {
  return generateUtilityClass('MuiCheckbox', slot);
}
const checkboxClasses = generateUtilityClasses('MuiCheckbox', ['root', 'checked', 'disabled', 'indeterminate', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium']);

const useUtilityClasses$2 = ownerState => {
  const {
    classes,
    indeterminate,
    color,
    size
  } = ownerState;
  const slots = {
    root: ['root', indeterminate && 'indeterminate', `color${capitalize(color)}`, `size${capitalize(size)}`]
  };
  const composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);
  return {
    ...classes,
    // forward the disabled and checked classes to the SwitchBase
    ...composedClasses
  };
};
const CheckboxRoot = styled(SwitchBase, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiCheckbox',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.indeterminate && styles.indeterminate, styles[`size${capitalize(ownerState.size)}`], ownerState.color !== 'default' && styles[`color${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  variants: [{
    props: {
      color: 'default',
      disableRipple: false
    },
    style: {
      '&:hover': {
        backgroundColor: theme.alpha((theme.vars || theme).palette.action.active, (theme.vars || theme).palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      disableRipple: false
    },
    style: {
      '&:hover': {
        backgroundColor: theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
        color: (theme.vars || theme).palette[color].main
      },
      [`&.${checkboxClasses.disabled}`]: {
        color: (theme.vars || theme).palette.action.disabled
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: false
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      '&:hover': {
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    }
  }]
})));
const defaultCheckedIcon = /*#__PURE__*/jsxRuntime.jsx(CheckBoxIcon, {});
const defaultIcon = /*#__PURE__*/jsxRuntime.jsx(CheckBoxOutlineBlankIcon, {});
const defaultIndeterminateIcon = /*#__PURE__*/jsxRuntime.jsx(IndeterminateCheckBoxIcon, {});
const Checkbox = /*#__PURE__*/React__namespace.forwardRef(function Checkbox(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiCheckbox'
  });
  const {
    checkedIcon = defaultCheckedIcon,
    color = 'primary',
    icon: iconProp = defaultIcon,
    indeterminate = false,
    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
    inputProps,
    size = 'medium',
    disableRipple = false,
    className,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const icon = indeterminate ? indeterminateIconProp : iconProp;
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  const ownerState = {
    ...props,
    disableRipple,
    color,
    indeterminate,
    size
  };
  const classes = useUtilityClasses$2(ownerState);
  const externalInputProps = slotProps.input ?? inputProps;
  const [RootSlot, rootSlotProps] = useSlot('root', {
    ref,
    elementType: CheckboxRoot,
    className: clsx(classes.root, className),
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      slots,
      slotProps,
      ...other
    },
    ownerState,
    additionalProps: {
      type: 'checkbox',
      icon: /*#__PURE__*/React__namespace.cloneElement(icon, {
        fontSize: icon.props.fontSize ?? size
      }),
      checkedIcon: /*#__PURE__*/React__namespace.cloneElement(indeterminateIcon, {
        fontSize: indeterminateIcon.props.fontSize ?? size
      }),
      disableRipple,
      slots,
      slotProps: {
        input: mergeSlotProps(typeof externalInputProps === 'function' ? externalInputProps(ownerState) : externalInputProps, {
          'data-indeterminate': indeterminate
        })
      }
    }
  });
  return /*#__PURE__*/jsxRuntime.jsx(RootSlot, {
    ...rootSlotProps,
    classes: classes
  });
});
process.env.NODE_ENV !== "production" ? Checkbox.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: PropTypes.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: PropTypes.node,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: PropTypes.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: PropTypes.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: PropTypes.object,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: PropTypes.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: PropTypes.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['medium', 'small']), PropTypes.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    input: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: PropTypes.any
} : void 0;

const TREE_VIEW_ROOT_PARENT_ID = '__TREE_VIEW_ROOT_PARENT_ID__';
const buildSiblingIndexes = siblings => {
  const siblingsIndexLookup = {};
  siblings.forEach((childId, index) => {
    siblingsIndexLookup[childId] = index;
  });
  return siblingsIndexLookup;
};

/**
 * Check if an item is disabled.
 * This method should only be used in selectors that are checking if several items are disabled.
 * Otherwise, use the `itemsSelector.isItemDisabled` selector.
 * @returns
 */
const isItemDisabled = (itemMetaLookup, itemId) => {
  if (itemId == null) {
    return false;
  }
  let itemMeta = itemMetaLookup[itemId];

  // This can be called before the item has been added to the item map.
  if (!itemMeta) {
    return false;
  }
  if (itemMeta.disabled) {
    return true;
  }
  while (itemMeta.parentId != null) {
    itemMeta = itemMetaLookup[itemMeta.parentId];
    if (!itemMeta) {
      return false;
    }
    if (itemMeta.disabled) {
      return true;
    }
  }
  return false;
};
function buildItemsLookups(parameters) {
  const {
    storeParameters,
    items,
    parentId,
    depth,
    isItemExpandable,
    otherItemsMetaLookup
  } = parameters;
  const metaLookup = {};
  const modelLookup = {};
  const orderedChildrenIds = [];
  const itemsChildren = [];
  const processItem = item => {
    const id = storeParameters.getItemId ? storeParameters.getItemId(item) : item.id;
    checkId({
      id,
      parentId,
      item,
      itemMetaLookup: otherItemsMetaLookup,
      siblingsMetaLookup: metaLookup
    });
    const label = storeParameters.getItemLabel ? storeParameters.getItemLabel(item) : item.label;
    if (label == null) {
      throw new Error(['MUI X: The Tree View component requires all items to have a `label` property.', 'Alternatively, you can use the `getItemLabel` prop to specify a custom label for each item.', 'An item was provided without label in the `items` prop:', JSON.stringify(item)].join('\n'));
    }
    const children = (storeParameters.getItemChildren ? storeParameters.getItemChildren(item) : item.children) || [];
    itemsChildren.push({
      id,
      children
    });
    modelLookup[id] = item;
    metaLookup[id] = {
      id,
      label,
      parentId,
      idAttribute: undefined,
      expandable: isItemExpandable(item, children),
      disabled: storeParameters.isItemDisabled ? storeParameters.isItemDisabled(item) : false,
      selectable: storeParameters.isItemSelectionDisabled ? !storeParameters.isItemSelectionDisabled(item) : true,
      depth
    };
    orderedChildrenIds.push(id);
  };
  for (const item of items) {
    processItem(item);
  }
  return {
    metaLookup,
    modelLookup,
    orderedChildrenIds,
    childrenIndexes: buildSiblingIndexes(orderedChildrenIds),
    itemsChildren
  };
}
function checkId({
  id,
  parentId,
  item,
  itemMetaLookup,
  siblingsMetaLookup
}) {
  if (id == null) {
    throw new Error(['MUI X: The Tree View component requires all items to have a unique `id` property.', 'Alternatively, you can use the `getItemId` prop to specify a custom id for each item.', 'An item was provided without id in the `items` prop:', JSON.stringify(item)].join('\n'));
  }
  if (siblingsMetaLookup[id] != null ||
  // Ignore items with the same parent id, because it's the same item from the previous generation.
  itemMetaLookup[id] != null && itemMetaLookup[id].parentId !== parentId) {
    throw new Error(['MUI X: The Tree View component requires all items to have a unique `id` property.', 'Alternatively, you can use the `getItemId` prop to specify a custom id for each item.', `Two items were provided with the same id in the \`items\` prop: "${id}"`].join('\n'));
  }
}

const EMPTY_CHILDREN = [];
const itemsSelectors = {
  /**
   * Gets the DOM structure of the Tree View.
   */
  domStructure: createSelector(state => state.domStructure),
  /**
   * Checks whether the disabled items are focusable.
   */
  disabledItemFocusable: createSelector(state => state.disabledItemsFocusable),
  /**
   * Gets the meta-information of all items.
   */
  itemMetaLookup: createSelector(state => state.itemMetaLookup),
  /**
   * Gets the ordered children ids of all items.
   */
  itemOrderedChildrenIdsLookup: createSelector(state => state.itemOrderedChildrenIdsLookup),
  /**
   * Gets the meta-information of an item.
   */
  itemMeta: createSelector((state, itemId) => state.itemMetaLookup[itemId ?? TREE_VIEW_ROOT_PARENT_ID] ?? null),
  /**
   * Gets the ordered children ids of an item.
   */
  itemOrderedChildrenIds: createSelector((state, itemId) => state.itemOrderedChildrenIdsLookup[itemId ?? TREE_VIEW_ROOT_PARENT_ID] ?? EMPTY_CHILDREN),
  /**
   * Gets the model of an item.
   */
  itemModel: createSelector((state, itemId) => state.itemModelLookup[itemId]),
  /**
   * Checks whether an item is disabled.
   */
  isItemDisabled: createSelector((state, itemId) => isItemDisabled(state.itemMetaLookup, itemId)),
  /**
   * Gets the index of an item in its parent's children.
   */
  itemIndex: createSelector((state, itemId) => {
    const itemMeta = state.itemMetaLookup[itemId];
    if (itemMeta == null) {
      return -1;
    }
    const parentIndexes = state.itemChildrenIndexesLookup[itemMeta.parentId ?? TREE_VIEW_ROOT_PARENT_ID];
    return parentIndexes[itemMeta.id];
  }),
  /**
   * Gets the id of an item's parent.
   */
  itemParentId: createSelector((state, itemId) => state.itemMetaLookup[itemId]?.parentId ?? null),
  /**
   * Gets the depth of an item (items at the root level have a depth of 0).
   */
  itemDepth: createSelector((state, itemId) => state.itemMetaLookup[itemId]?.depth ?? 0),
  /**
   * Checks whether an item can be focused.
   */
  canItemBeFocused: createSelector((state, itemId) => state.disabledItemsFocusable || !isItemDisabled(state.itemMetaLookup, itemId)),
  /**
   * Gets the identation between an item and its children.
   */
  itemChildrenIndentation: createSelector(state => state.itemChildrenIndentation)
};

const treeIdSelector = createSelector(state => state.providedTreeId ?? state.treeId);
const idSelectors = {
  /**
   * Get the id attribute of the tree view.
   */
  treeId: treeIdSelector,
  /**
   * Generate the id attribute (i.e.: the `id` attribute passed to the DOM element) of a Tree Item.
   * If the user explicitly defined an id attribute, it will be returned.
   * Otherwise, the method creates a unique id for the item based on the Tree View id attribute and the item `itemId`
   */
  treeItemIdAttribute: createSelector(treeIdSelector, (treeId, itemId, providedIdAttribute) => {
    if (providedIdAttribute != null) {
      return providedIdAttribute;
    }
    return `${treeId ?? ''}-${itemId}`;
  })
};

class TreeViewItemsPlugin {
  // We can't type `store`, otherwise we get the following TS error:
  // 'items' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.
  constructor(store) {
    this.store = store;
  }

  /**
   * Determines if the items state should be rebuilt based on the new and previous parameters.
   */
  static shouldRebuildItemsState = (newParameters, previousParameters) => {
    return ['items', 'isItemDisabled', 'isItemSelectionDisabled', 'getItemId', 'getItemLabel', 'getItemChildren'].some(key => {
      const typedKey = key;
      return newParameters[typedKey] !== previousParameters[typedKey];
    });
  };

  /**
   * Builds the state properties derived from the `items` prop.
   */
  static buildItemsStateIfNeeded = parameters => {
    const itemMetaLookup = {};
    const itemModelLookup = {};
    const itemOrderedChildrenIdsLookup = {};
    const itemChildrenIndexesLookup = {};
    function processSiblings(items, parentId, depth) {
      const parentIdWithDefault = parentId ?? TREE_VIEW_ROOT_PARENT_ID;
      const {
        metaLookup,
        modelLookup,
        orderedChildrenIds,
        childrenIndexes,
        itemsChildren
      } = buildItemsLookups({
        storeParameters: parameters,
        items,
        parentId,
        depth,
        isItemExpandable: (item, children) => !!children && children.length > 0,
        otherItemsMetaLookup: itemMetaLookup
      });
      Object.assign(itemMetaLookup, metaLookup);
      Object.assign(itemModelLookup, modelLookup);
      itemOrderedChildrenIdsLookup[parentIdWithDefault] = orderedChildrenIds;
      itemChildrenIndexesLookup[parentIdWithDefault] = childrenIndexes;
      for (const item of itemsChildren) {
        processSiblings(item.children || [], item.id, depth + 1);
      }
    }
    processSiblings(parameters.items, null, 0);
    return {
      itemMetaLookup,
      itemModelLookup,
      itemOrderedChildrenIdsLookup,
      itemChildrenIndexesLookup
    };
  };

  /**
   * Get the item with the given id.
   * When used in the Simple Tree View, it returns an object with the `id` and `label` properties.
   * @param {TreeViewItemId} itemId The id of the item to retrieve.
   * @returns {R} The item with the given id.
   */
  getItem = itemId => itemsSelectors.itemModel(this.store.state, itemId);

  /**
   * Get all the items in the same format as provided by `props.items`.
   * @returns {R[]} The items in the tree.
   */
  getItemTree = () => {
    const getItemFromItemId = itemId => {
      const item = itemsSelectors.itemModel(this.store.state, itemId);
      const itemToMutate = _extends$1({}, item);
      const newChildren = itemsSelectors.itemOrderedChildrenIds(this.store.state, itemId);
      if (newChildren.length > 0) {
        itemToMutate.children = newChildren.map(getItemFromItemId);
      } else {
        delete itemToMutate.children;
      }
      return itemToMutate;
    };
    return itemsSelectors.itemOrderedChildrenIds(this.store.state, null).map(getItemFromItemId);
  };

  /**
   * Get the ids of a given item's children.
   * Those ids are returned in the order they should be rendered.
   * To get the root items, pass `null` as the `itemId`.
   * @param {TreeViewItemId | null} itemId The id of the item to get the children of.
   * @returns {TreeViewItemId[]} The ids of the item's children.
   */
  getItemOrderedChildrenIds = itemId => itemsSelectors.itemOrderedChildrenIds(this.store.state, itemId);

  /** * Get the id of the parent item.
   * @param {TreeViewItemId} itemId The id of the item to whose parentId we want to retrieve.
   * @returns {TreeViewItemId | null} The id of the parent item.
   */
  getParentId = itemId => {
    const itemMeta = itemsSelectors.itemMeta(this.store.state, itemId);
    return itemMeta?.parentId || null;
  };

  /**
   * Toggle the disabled state of the item with the given id.
   * @param {object} parameters The params of the method.
   * @param {TreeViewItemId } parameters.itemId The id of the item to get the children of.
   * @param {boolean } parameters.shouldBeDisabled true if the item should be disabled.
   */
  setIsItemDisabled = ({
    itemId,
    shouldBeDisabled
  }) => {
    if (!this.store.state.itemMetaLookup[itemId]) {
      return;
    }
    const itemMetaLookup = _extends$1({}, this.store.state.itemMetaLookup);
    itemMetaLookup[itemId] = _extends$1({}, itemMetaLookup[itemId], {
      disabled: shouldBeDisabled ?? !itemMetaLookup[itemId].disabled
    });
    this.store.set('itemMetaLookup', itemMetaLookup);
  };
  buildPublicAPI = () => {
    return {
      getItem: this.getItem,
      getItemDOMElement: this.getItemDOMElement,
      getItemOrderedChildrenIds: this.getItemOrderedChildrenIds,
      getItemTree: this.getItemTree,
      getParentId: this.getParentId,
      setIsItemDisabled: this.setIsItemDisabled
    };
  };

  /**
   * Get the DOM element of the item with the given id.
   * @param {TreeViewItemId} itemId The id of the item to get the DOM element of.
   * @returns {HTMLElement | null} The DOM element of the item with the given id.
   */
  getItemDOMElement = itemId => {
    const itemMeta = itemsSelectors.itemMeta(this.store.state, itemId);
    if (itemMeta == null) {
      return null;
    }
    const idAttribute = idSelectors.treeItemIdAttribute(this.store.state, itemId, itemMeta.idAttribute);
    return document.getElementById(idAttribute);
  };

  /**
   * Add an array of items to the tree.
   * @param {SetItemChildrenParameters<R>} args The items to add to the tree and information about their ancestors.
   */
  setItemChildren = ({
    items,
    parentId,
    getChildrenCount
  }) => {
    const parentIdWithDefault = parentId ?? TREE_VIEW_ROOT_PARENT_ID;
    const parentDepth = parentId == null ? -1 : itemsSelectors.itemDepth(this.store.state, parentId);
    const {
      metaLookup,
      modelLookup,
      orderedChildrenIds,
      childrenIndexes
    } = buildItemsLookups({
      storeParameters: this.store.parameters,
      items,
      parentId,
      depth: parentDepth + 1,
      isItemExpandable: getChildrenCount ? item => getChildrenCount(item) !== 0 : () => false,
      otherItemsMetaLookup: itemsSelectors.itemMetaLookup(this.store.state)
    });
    this.store.update({
      itemModelLookup: _extends$1({}, this.store.state.itemModelLookup, modelLookup),
      itemMetaLookup: _extends$1({}, this.store.state.itemMetaLookup, metaLookup),
      itemOrderedChildrenIdsLookup: _extends$1({}, this.store.state.itemOrderedChildrenIdsLookup, {
        [parentIdWithDefault]: orderedChildrenIds
      }),
      itemChildrenIndexesLookup: _extends$1({}, this.store.state.itemChildrenIndexesLookup, {
        [parentIdWithDefault]: childrenIndexes
      })
    });
  };

  /**
   * Remove the children of an item.
   * @param {TreeViewItemId | null} parentId The id of the item to remove the children of.
   */
  removeChildren = parentId => {
    const itemMetaLookup = this.store.state.itemMetaLookup;
    const newMetaMap = Object.keys(itemMetaLookup).reduce((acc, key) => {
      const item = itemMetaLookup[key];
      if (item.parentId === parentId) {
        return acc;
      }
      return _extends$1({}, acc, {
        [item.id]: item
      });
    }, {});
    const newItemOrderedChildrenIdsLookup = _extends$1({}, this.store.state.itemOrderedChildrenIdsLookup);
    const newItemChildrenIndexesLookup = _extends$1({}, this.store.state.itemChildrenIndexesLookup);
    const cleanId = parentId ?? TREE_VIEW_ROOT_PARENT_ID;
    delete newItemChildrenIndexesLookup[cleanId];
    delete newItemOrderedChildrenIdsLookup[cleanId];
    this.store.update({
      itemMetaLookup: newMetaMap,
      itemOrderedChildrenIdsLookup: newItemOrderedChildrenIdsLookup,
      itemChildrenIndexesLookup: newItemChildrenIndexesLookup
    });
  };

  /**
   * Callback fired when the `content` slot of a given Tree Item is clicked.
   * @param {React.MouseEvent} event The DOM event that triggered the change.
   * @param {TreeViewItemId} itemId The id of the item being clicked.
   */
  handleItemClick = (event, itemId) => {
    this.store.parameters.onItemClick?.(event, itemId);
  };
}

const expandedItemMapSelector = createSelectorMemoized(state => state.expandedItems, expandedItems => {
  const expandedItemsMap = new Map();
  expandedItems.forEach(id => {
    expandedItemsMap.set(id, true);
  });
  return expandedItemsMap;
});
const expansionSelectors = {
  /**
   * Gets the expanded items as provided to the component.
   */
  expandedItemsRaw: createSelector(state => state.expandedItems),
  /**
   * Gets the expanded items as a Map.
   */
  expandedItemsMap: expandedItemMapSelector,
  /**
   * Gets the items to render as a flat list (the descendants of an expanded item are listed as siblings of the item).
   */
  flatList: createSelectorMemoized(itemsSelectors.itemOrderedChildrenIdsLookup, expandedItemMapSelector, (itemOrderedChildrenIds, expandedItemsMap) => {
    function appendChildren(itemId) {
      if (!expandedItemsMap.has(itemId)) {
        return [itemId];
      }
      const itemsWithDescendants = [itemId];
      const children = itemOrderedChildrenIds[itemId] || [];
      for (const childId of children) {
        itemsWithDescendants.push(...appendChildren(childId));
      }
      return itemsWithDescendants;
    }
    return (itemOrderedChildrenIds[TREE_VIEW_ROOT_PARENT_ID] ?? []).flatMap(appendChildren);
  }),
  /**
   * Gets the slot that triggers the item's expansion when clicked.
   */
  triggerSlot: createSelector(state => state.expansionTrigger),
  /**
   * Checks whether an item is expanded.
   */
  isItemExpanded: createSelector(expandedItemMapSelector, (expandedItemsMap, itemId) => expandedItemsMap.has(itemId)),
  /**
   * Checks whether an item is expandable.
   */
  isItemExpandable: createSelector(itemsSelectors.itemMeta, (itemMeta, _itemId) => itemMeta?.expandable ?? false)
};

const selectedItemsSelector = createSelectorMemoized(state => state.selectedItems, selectedItemsRaw => {
  if (Array.isArray(selectedItemsRaw)) {
    return selectedItemsRaw;
  }
  if (selectedItemsRaw != null) {
    return [selectedItemsRaw];
  }
  return [];
});
const selectedItemsMapSelector = createSelectorMemoized(selectedItemsSelector, selectedItems => {
  const selectedItemsMap = new Map();
  selectedItems.forEach(id => {
    selectedItemsMap.set(id, true);
  });
  return selectedItemsMap;
});
const isItemSelectableSelector = createSelector((state, itemId) => state.itemMetaLookup[itemId]?.selectable ?? true);
const selectionSelectors = {
  /**
   * Gets the selected items as provided to the component.
   */
  selectedItemsRaw: createSelector(state => state.selectedItems),
  /**
   * Gets the selected items as an array.
   */
  selectedItems: selectedItemsSelector,
  /**
   * Gets the selected items as a Map.
   */
  selectedItemsMap: selectedItemsMapSelector,
  /**
   * Checks whether selection is enabled.
   */
  enabled: createSelector(state => !state.disableSelection),
  /**
   * Checks whether multi selection is enabled.
   */
  isMultiSelectEnabled: createSelector(state => state.multiSelect),
  /**
   * Checks whether checkbox selection is enabled.
   */
  isCheckboxSelectionEnabled: createSelector(state => state.checkboxSelection),
  /**
   * Gets the selection propagation rules.
   */
  propagationRules: createSelector(state => state.selectionPropagation),
  /**
   * Checks whether an item is selected.
   */
  isItemSelected: createSelector(selectedItemsMapSelector, (selectedItemsMap, itemId) => selectedItemsMap.has(itemId)),
  /**
   * Checks whether the selection feature is enabled for an item.
   * Returns `true` when selection is enabled on the Tree View and the item is selectable (even if the item is disabled).
   */
  isFeatureEnabledForItem: createSelector(isItemSelectableSelector, state => !state.disableSelection, (isItemSelectable, isSelectionEnabled, _itemId) => isSelectionEnabled && isItemSelectable),
  /**
   * Checks whether an item can be selected (if selection is enabled, if the item is not disabled, and if the item is selectable).
   */
  canItemBeSelected: createSelector(itemsSelectors.isItemDisabled, isItemSelectableSelector, state => !state.disableSelection, (isItemDisabled, isItemSelectable, isSelectionEnabled, _itemId) => isSelectionEnabled && !isItemDisabled && isItemSelectable),
  /**
   * Checks whether an item is selectable based on the `isItemSelectionDisabled` prop.
   */
  isItemSelectable: isItemSelectableSelector
};

const defaultFocusableItemIdSelector = createSelectorMemoized(selectionSelectors.selectedItems, expansionSelectors.expandedItemsMap, itemsSelectors.itemMetaLookup, itemsSelectors.disabledItemFocusable, state => itemsSelectors.itemOrderedChildrenIds(state, null), (selectedItems, expandedItemsMap, itemMetaLookup, disabledItemsFocusable, orderedRootItemIds) => {
  const firstSelectedItem = selectedItems.find(itemId => {
    if (!disabledItemsFocusable && isItemDisabled(itemMetaLookup, itemId)) {
      return false;
    }
    const itemMeta = itemMetaLookup[itemId];
    return itemMeta && (itemMeta.parentId == null || expandedItemsMap.has(itemMeta.parentId));
  });
  if (firstSelectedItem != null) {
    return firstSelectedItem;
  }
  const firstNavigableItem = orderedRootItemIds.find(itemId => disabledItemsFocusable || !isItemDisabled(itemMetaLookup, itemId));
  if (firstNavigableItem != null) {
    return firstNavigableItem;
  }
  return null;
});
const focusSelectors = {
  /**
   * Gets the item that should be sequentially focusable (usually with the Tab key).
   * At any point in time, there is a single item that can be sequentially focused in the Tree View.
   * This item is the first selected item (that is both visible and navigable), if any, or the first navigable item if no item is selected.
   */
  defaultFocusableItemId: defaultFocusableItemIdSelector,
  /**
   * Checks whether an item is the default focusable item.
   */
  isItemTheDefaultFocusableItem: createSelector(defaultFocusableItemIdSelector, (defaultFocusableItemId, itemId) => defaultFocusableItemId === itemId),
  /**
   * Gets the id of the item that is currently focused.
   */
  focusedItemId: createSelector(state => state.focusedItemId),
  /**
   * Checks whether an item is focused.
   */
  isItemFocused: createSelector((state, itemId) => state.focusedItemId === itemId)
};

const lazyLoadingSelectors = {
  /**
   * Checks if the lazy loaded state is empty.
   */
  isEmpty: createSelector(state => {
    if (state.lazyLoadedItems == null) {
      return true;
    }
    return Object.keys(state.lazyLoadedItems.loading).length === 0 && Object.keys(state.lazyLoadedItems.errors).length === 0;
  }),
  /**
   * Checks whether an item is loading.
   */
  isItemLoading: createSelector((state, itemId) => state.lazyLoadedItems?.loading[itemId ?? TREE_VIEW_ROOT_PARENT_ID] ?? false),
  /**
   * Checks whether an item has errors.
   */
  itemHasError: createSelector((state, itemId) => !!state.lazyLoadedItems?.errors[itemId ?? TREE_VIEW_ROOT_PARENT_ID]),
  /**
   * Get an item error.
   */
  itemError: createSelector((state, itemId) => state.lazyLoadedItems?.errors[itemId ?? TREE_VIEW_ROOT_PARENT_ID])
};

const labelSelectors = {
  /**
   * Checks whether an item is editable.
   */
  isItemEditable: createSelector(state => state.isItemEditable, itemsSelectors.itemModel, (isItemEditable, itemModel, _itemId) => {
    if (!itemModel || isItemEditable == null) {
      return false;
    }
    if (typeof isItemEditable === 'boolean') {
      return isItemEditable;
    }
    return isItemEditable(itemModel);
  }),
  /**
   * Checks whether an item is being edited.
   */
  isItemBeingEdited: createSelector((state, itemId) => itemId == null ? false : state.editedItemId === itemId),
  /**
   * Checks whether any item is being edited.
   */
  isAnyItemBeingEdited: createSelector(state => !!state.editedItemId)
};

const itemHasChildren = reactChildren => {
  if (Array.isArray(reactChildren)) {
    return reactChildren.length > 0 && reactChildren.some(itemHasChildren);
  }
  return Boolean(reactChildren);
};
const useTreeItemUtils = ({
  itemId,
  children
}) => {
  const {
    store,
    publicAPI
  } = useTreeViewContext();
  const isItemExpandable = useStore(store, expansionSelectors.isItemExpandable, itemId);
  const isLoading = useStore(store, lazyLoadingSelectors.isItemLoading, itemId);
  const hasError = useStore(store, lazyLoadingSelectors.itemHasError, itemId);
  const isExpandable = itemHasChildren(children) || isItemExpandable;
  const isExpanded = useStore(store, expansionSelectors.isItemExpanded, itemId);
  const isFocused = useStore(store, focusSelectors.isItemFocused, itemId);
  const isSelected = useStore(store, selectionSelectors.isItemSelected, itemId);
  const isDisabled = useStore(store, itemsSelectors.isItemDisabled, itemId);
  const isEditing = useStore(store, labelSelectors.isItemBeingEdited, itemId);
  const isEditable = useStore(store, labelSelectors.isItemEditable, itemId);
  const status = {
    expandable: isExpandable,
    expanded: isExpanded,
    focused: isFocused,
    selected: isSelected,
    disabled: isDisabled,
    editing: isEditing,
    editable: isEditable,
    loading: isLoading,
    error: hasError
  };
  const handleExpansion = event => {
    if (status.disabled) {
      return;
    }
    if (!status.focused) {
      store.focus.focusItem(event, itemId);
    }
    const multiple = selectionSelectors.isMultiSelectEnabled(store.state) && (event.shiftKey || event.ctrlKey || event.metaKey);

    // If already expanded and trying to toggle selection don't close
    if (status.expandable && !(multiple && expansionSelectors.isItemExpanded(store.state, itemId))) {
      // make sure the children selection is propagated again
      store.expansion.setItemExpansion({
        event,
        itemId
      });
    }
  };
  const handleSelection = event => {
    if (!selectionSelectors.canItemBeSelected(store.state, itemId)) {
      return;
    }
    if (!status.focused && !status.editing) {
      store.focus.focusItem(event, itemId);
    }
    const multiple = selectionSelectors.isMultiSelectEnabled(store.state) && (event.shiftKey || event.ctrlKey || event.metaKey);
    if (multiple) {
      if (event.shiftKey) {
        store.selection.expandSelectionRange(event, itemId);
      } else {
        store.selection.setItemSelection({
          event,
          itemId,
          keepExistingSelection: true
        });
      }
    } else {
      store.selection.setItemSelection({
        event,
        itemId,
        shouldBeSelected: true
      });
    }
  };
  const handleCheckboxSelection = event => {
    const hasShift = event.nativeEvent.shiftKey;
    const isMultiSelectEnabled = selectionSelectors.isMultiSelectEnabled(store.state);
    if (isMultiSelectEnabled && hasShift) {
      store.selection.expandSelectionRange(event, itemId);
    } else {
      store.selection.setItemSelection({
        event,
        itemId,
        keepExistingSelection: isMultiSelectEnabled,
        shouldBeSelected: event.target.checked
      });
    }
  };
  const toggleItemEditing = () => {
    // If the store doesn't support label editing, do nothing
    if (!store.labelEditing) {
      return;
    }
    if (isEditing) {
      store.labelEditing.setEditedItem(null);
    } else {
      store.labelEditing.setEditedItem(itemId);
    }
  };
  const handleSaveItemLabel = (event, newLabel) => {
    // If the store doesn't support label editing, do nothing
    if (!store.labelEditing) {
      return;
    }

    // As a side effect of `instance.focusItem` called here and in `handleCancelItemLabelEditing` the `labelInput` is blurred
    // The `onBlur` event is triggered, which calls `handleSaveItemLabel` again.
    // To avoid creating an unwanted behavior we need to check if the item is being edited before calling `updateItemLabel`
    if (labelSelectors.isItemBeingEdited(store.state, itemId)) {
      store.labelEditing.updateItemLabel(itemId, newLabel);
      toggleItemEditing();
      store.focus.focusItem(event, itemId);
    }
  };
  const handleCancelItemLabelEditing = event => {
    // If the store doesn't support label editing, do nothing
    if (!store.labelEditing) {
      return;
    }
    if (labelSelectors.isItemBeingEdited(store.state, itemId)) {
      toggleItemEditing();
      store.focus.focusItem(event, itemId);
    }
  };
  const interactions = {
    handleExpansion,
    handleSelection,
    handleCheckboxSelection,
    toggleItemEditing,
    handleSaveItemLabel,
    handleCancelItemLabelEditing
  };
  return {
    interactions,
    status,
    publicAPI
  };
};

const TreeViewItemDepthContext = /*#__PURE__*/React__namespace.createContext(() => -1);
if (process.env.NODE_ENV !== "production") TreeViewItemDepthContext.displayName = "TreeViewItemDepthContext";

const getLastNavigableItemInArray = (state, items) => {
  // Equivalent to Array.prototype.findLastIndex
  let itemIndex = items.length - 1;
  while (itemIndex >= 0 && !itemsSelectors.canItemBeFocused(state, items[itemIndex])) {
    itemIndex -= 1;
  }
  if (itemIndex === -1) {
    return undefined;
  }
  return items[itemIndex];
};
const getPreviousNavigableItem = (state, itemId) => {
  const itemMeta = itemsSelectors.itemMeta(state, itemId);
  if (!itemMeta) {
    return null;
  }
  const siblings = itemsSelectors.itemOrderedChildrenIds(state, itemMeta.parentId);
  const itemIndex = itemsSelectors.itemIndex(state, itemId);

  // TODO: What should we do if the parent is not navigable?
  if (itemIndex === 0) {
    return itemMeta.parentId;
  }

  // Finds the previous navigable sibling.
  let previousNavigableSiblingIndex = itemIndex - 1;
  while (!itemsSelectors.canItemBeFocused(state, siblings[previousNavigableSiblingIndex]) && previousNavigableSiblingIndex >= 0) {
    previousNavigableSiblingIndex -= 1;
  }
  if (previousNavigableSiblingIndex === -1) {
    // If we are at depth 0, then it means all the items above the current item are not navigable.
    if (itemMeta.parentId == null) {
      return null;
    }

    // Otherwise, we can try to go up a level and find the previous navigable item.
    return getPreviousNavigableItem(state, itemMeta.parentId);
  }

  // Finds the last navigable ancestor of the previous navigable sibling.
  let currentItemId = siblings[previousNavigableSiblingIndex];
  let lastNavigableChild = getLastNavigableItemInArray(state, itemsSelectors.itemOrderedChildrenIds(state, currentItemId));
  while (expansionSelectors.isItemExpanded(state, currentItemId) && lastNavigableChild != null) {
    currentItemId = lastNavigableChild;
    lastNavigableChild = getLastNavigableItemInArray(state, itemsSelectors.itemOrderedChildrenIds(state, currentItemId));
  }
  return currentItemId;
};
const getNextNavigableItem = (state, itemId) => {
  // If the item is expanded and has some navigable children, return the first of them.
  if (expansionSelectors.isItemExpanded(state, itemId)) {
    const firstNavigableChild = itemsSelectors.itemOrderedChildrenIds(state, itemId).find(childId => itemsSelectors.canItemBeFocused(state, childId));
    if (firstNavigableChild != null) {
      return firstNavigableChild;
    }
  }
  let itemMeta = itemsSelectors.itemMeta(state, itemId);
  while (itemMeta != null) {
    // Try to find the first navigable sibling after the current item.
    const siblings = itemsSelectors.itemOrderedChildrenIds(state, itemMeta.parentId);
    const currentItemIndex = itemsSelectors.itemIndex(state, itemMeta.id);
    if (currentItemIndex < siblings.length - 1) {
      let nextItemIndex = currentItemIndex + 1;
      while (!itemsSelectors.canItemBeFocused(state, siblings[nextItemIndex]) && nextItemIndex < siblings.length - 1) {
        nextItemIndex += 1;
      }
      if (itemsSelectors.canItemBeFocused(state, siblings[nextItemIndex])) {
        return siblings[nextItemIndex];
      }
    }

    // If the sibling does not exist, go up a level to the parent and try again.
    itemMeta = itemsSelectors.itemMeta(state, itemMeta.parentId);
  }
  return null;
};
const getLastNavigableItem = state => {
  let itemId = null;
  while (itemId == null || expansionSelectors.isItemExpanded(state, itemId)) {
    const children = itemsSelectors.itemOrderedChildrenIds(state, itemId);
    const lastNavigableChild = getLastNavigableItemInArray(state, children);

    // The item has no navigable children.
    if (lastNavigableChild == null) {
      return itemId;
    }
    itemId = lastNavigableChild;
  }
  return itemId;
};
const getFirstNavigableItem = state => itemsSelectors.itemOrderedChildrenIds(state, null).find(itemId => itemsSelectors.canItemBeFocused(state, itemId));

/**
 * This is used to determine the start and end of a selection range so
 * we can get the items between the two border items.
 *
 * It finds the items' common ancestor using
 * a naive implementation of a lowest common ancestor algorithm
 * (https://en.wikipedia.org/wiki/Lowest_common_ancestor).
 * Then compares the ancestor's 2 children that are ancestors of itemA and ItemB
 * so we can compare their indexes to work out which item comes first in a depth first search.
 * (https://en.wikipedia.org/wiki/Depth-first_search)
 *
 * Another way to put it is which item is shallower in a trémaux tree
 * https://en.wikipedia.org/wiki/Tr%C3%A9maux_tree
 */
const findOrderInTremauxTree = (state, itemAId, itemBId) => {
  if (itemAId === itemBId) {
    return [itemAId, itemBId];
  }
  const itemMetaA = itemsSelectors.itemMeta(state, itemAId);
  const itemMetaB = itemsSelectors.itemMeta(state, itemBId);
  if (!itemMetaA || !itemMetaB) {
    return [itemAId, itemBId];
  }
  if (itemMetaA.parentId === itemMetaB.id || itemMetaB.parentId === itemMetaA.id) {
    return itemMetaB.parentId === itemMetaA.id ? [itemMetaA.id, itemMetaB.id] : [itemMetaB.id, itemMetaA.id];
  }
  const aFamily = [itemMetaA.id];
  const bFamily = [itemMetaB.id];
  let aAncestor = itemMetaA.parentId;
  let bAncestor = itemMetaB.parentId;
  let aAncestorIsCommon = bFamily.indexOf(aAncestor) !== -1;
  let bAncestorIsCommon = aFamily.indexOf(bAncestor) !== -1;
  let continueA = true;
  let continueB = true;
  while (!bAncestorIsCommon && !aAncestorIsCommon) {
    if (continueA) {
      aFamily.push(aAncestor);
      aAncestorIsCommon = bFamily.indexOf(aAncestor) !== -1;
      continueA = aAncestor !== null;
      if (!aAncestorIsCommon && continueA) {
        aAncestor = itemsSelectors.itemParentId(state, aAncestor);
      }
    }
    if (continueB && !aAncestorIsCommon) {
      bFamily.push(bAncestor);
      bAncestorIsCommon = aFamily.indexOf(bAncestor) !== -1;
      continueB = bAncestor !== null;
      if (!bAncestorIsCommon && continueB) {
        bAncestor = itemsSelectors.itemParentId(state, bAncestor);
      }
    }
  }
  const commonAncestor = aAncestorIsCommon ? aAncestor : bAncestor;
  const ancestorFamily = itemsSelectors.itemOrderedChildrenIds(state, commonAncestor);
  const aSide = aFamily[aFamily.indexOf(commonAncestor) - 1];
  const bSide = bFamily[bFamily.indexOf(commonAncestor) - 1];
  return ancestorFamily.indexOf(aSide) < ancestorFamily.indexOf(bSide) ? [itemAId, itemBId] : [itemBId, itemAId];
};
const getNonDisabledItemsInRange = (state, itemAId, itemBId) => {
  const getNextItem = itemId => {
    // If the item is expanded and has some children, return the first of them.
    if (expansionSelectors.isItemExpandable(state, itemId) && expansionSelectors.isItemExpanded(state, itemId)) {
      return itemsSelectors.itemOrderedChildrenIds(state, itemId)[0];
    }
    let itemMeta = itemsSelectors.itemMeta(state, itemId);
    while (itemMeta != null) {
      // Try to find the first navigable sibling after the current item.
      const siblings = itemsSelectors.itemOrderedChildrenIds(state, itemMeta.parentId);
      const currentItemIndex = itemsSelectors.itemIndex(state, itemMeta.id);
      if (currentItemIndex < siblings.length - 1) {
        return siblings[currentItemIndex + 1];
      }

      // If the item is the last of its siblings, go up a level to the parent and try again.
      itemMeta = itemMeta.parentId ? itemsSelectors.itemMeta(state, itemMeta.parentId) : null;
    }
    throw new Error('Invalid range');
  };
  const [first, last] = findOrderInTremauxTree(state, itemAId, itemBId);
  const items = [first];
  let current = first;
  while (current !== last) {
    current = getNextItem(current);
    if (!itemsSelectors.isItemDisabled(state, current)) {
      items.push(current);
    }
  }
  return items;
};
const getAllNavigableItems = state => {
  let item = getFirstNavigableItem(state);
  const navigableItems = [];
  while (item != null) {
    navigableItems.push(item);
    item = getNextNavigableItem(state, item);
  }
  return navigableItems;
};

/**
 * Checks if the target is in a descendant of this item.
 * This can prevent from firing some logic on the ancestors on the interacted item when the event handler is on the root.
 * @param {HTMLElement} target The target to check
 * @param {HTMLElement | null} itemRoot The root of the item to check if the event target is in its descendants
 * @returns {boolean} Whether the target is in a descendant of this item
 */
const isTargetInDescendants = (target, itemRoot) => {
  return itemRoot !== target.closest('*[role="treeitem"]');
};

class TreeViewExpansionPlugin {
  // We can't type `store`, otherwise we get the following TS error:
  // 'expansion' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.
  constructor(store) {
    this.store = store;
  }
  setExpandedItems = (event, value) => {
    if (this.store.parameters.expandedItems === undefined) {
      this.store.set('expandedItems', value);
    }
    this.store.parameters.onExpandedItemsChange?.(event, value);
  };

  /**
   * Check if an item is expanded.
   * @param {TreeViewItemId} itemId The id of the item to check.
   * @returns {boolean} `true` if the item is expanded, `false` otherwise.
   */
  isItemExpanded = itemId => expansionSelectors.isItemExpanded(this.store.state, itemId);
  buildPublicAPI = () => {
    return {
      isItemExpanded: this.isItemExpanded,
      setItemExpansion: this.setItemExpansion
    };
  };

  /**
   * Change the expansion status of a given item.
   * @param {object} parameters The parameters of the method.
   * @param {TreeViewItemId} parameters.itemId The id of the item to expand of collapse.
   * @param {React.SyntheticEvent} parameters.event The DOM event that triggered the change.
   * @param {boolean} parameters.shouldBeExpanded If `true` the item will be expanded. If `false` the item will be collapsed. If not defined, the item's expansion status will be the toggled.
   */
  setItemExpansion = ({
    itemId,
    event = null,
    shouldBeExpanded
  }) => {
    const isExpandedBefore = expansionSelectors.isItemExpanded(this.store.state, itemId);
    const cleanShouldBeExpanded = shouldBeExpanded ?? !isExpandedBefore;
    if (isExpandedBefore === cleanShouldBeExpanded) {
      return;
    }
    const eventParameters = {
      isExpansionPrevented: false,
      shouldBeExpanded: cleanShouldBeExpanded,
      itemId
    };
    this.store.publishEvent('beforeItemToggleExpansion', eventParameters, event);
    if (eventParameters.isExpansionPrevented) {
      return;
    }
    this.applyItemExpansion({
      itemId,
      event,
      shouldBeExpanded: cleanShouldBeExpanded
    });
  };

  /**
   * Apply the new expansion status of a given item.
   * Is used by the `setItemExpansion` method and by the `useTreeViewLazyLoading` plugin.
   * Unlike `setItemExpansion`, this method does not trigger the lazy loading.
   * @param {object} parameters The parameters of the method.
   * @param {TreeViewItemId} parameters.itemId The id of the item to expand of collapse.
   * @param {React.SyntheticEvent | null} parameters.event The DOM event that triggered the change.
   * @param {boolean} parameters.shouldBeExpanded If `true` the item will be expanded. If `false` the item will be collapsed.
   */
  applyItemExpansion = ({
    itemId,
    event,
    shouldBeExpanded
  }) => {
    const oldExpanded = expansionSelectors.expandedItemsRaw(this.store.state);
    let newExpanded;
    if (shouldBeExpanded) {
      newExpanded = [itemId].concat(oldExpanded);
    } else {
      newExpanded = oldExpanded.filter(id => id !== itemId);
    }
    this.store.parameters.onItemExpansionToggle?.(event, itemId, shouldBeExpanded);
    this.setExpandedItems(event, newExpanded);
  };

  /**
   * Expand all the siblings (i.e.: the items that have the same parent) of a given item.
   * @param {React.SyntheticEvent} event The DOM event that triggered the change.
   * @param {TreeViewItemId} itemId The id of the item whose siblings will be expanded.
   */
  expandAllSiblings = (event, itemId) => {
    const itemMeta = itemsSelectors.itemMeta(this.store.state, itemId);
    if (itemMeta == null) {
      return;
    }
    const siblings = itemsSelectors.itemOrderedChildrenIds(this.store.state, itemMeta.parentId);
    const diff = siblings.filter(child => expansionSelectors.isItemExpandable(this.store.state, child) && !expansionSelectors.isItemExpanded(this.store.state, child));
    const newExpanded = expansionSelectors.expandedItemsRaw(this.store.state).concat(diff);
    if (diff.length > 0) {
      if (this.store.parameters.onItemExpansionToggle) {
        diff.forEach(newlyExpandedItemId => {
          this.store.parameters.onItemExpansionToggle(event, newlyExpandedItemId, true);
        });
      }
      this.setExpandedItems(event, newExpanded);
    }
  };

  /**
   * Mark a list of items as expandable.
   * @param {TreeViewItemId[]} items The ids of the items to mark as expandable.
   */
  addExpandableItems = items => {
    const newItemMetaLookup = _extends$1({}, this.store.state.itemMetaLookup);
    for (const itemId of items) {
      newItemMetaLookup[itemId] = _extends$1({}, newItemMetaLookup[itemId], {
        expandable: true
      });
    }
    this.store.set('itemMetaLookup', newItemMetaLookup);
  };
}

class TreeViewFocusPlugin {
  // We can't type `store`, otherwise we get the following TS error:
  // 'focus' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.
  constructor(store) {
    this.store = store;

    // Whenever the items change, we need to ensure the focused item is still present.
    this.store.registerStoreEffect(itemsSelectors.itemMetaLookup, () => {
      const focusedItemId = focusSelectors.focusedItemId(store.state);
      if (focusedItemId == null) {
        return;
      }
      const hasItemBeenRemoved = !itemsSelectors.itemMeta(store.state, focusedItemId);
      if (!hasItemBeenRemoved) {
        return;
      }
      const defaultFocusableItemId = focusSelectors.defaultFocusableItemId(store.state);
      if (defaultFocusableItemId == null) {
        this.setFocusedItemId(null);
        return;
      }
      this.applyItemFocus(null, defaultFocusableItemId);
    });
  }
  setFocusedItemId = itemId => {
    const focusedItemId = focusSelectors.focusedItemId(this.store.state);
    if (focusedItemId === itemId) {
      return;
    }
    this.store.set('focusedItemId', itemId);
  };
  applyItemFocus = (event, itemId) => {
    this.store.items.getItemDOMElement(itemId)?.focus();
    this.setFocusedItemId(itemId);
    this.store.parameters.onItemFocus?.(event, itemId);
  };
  buildPublicAPI = () => {
    return {
      focusItem: this.focusItem
    };
  };

  /**
   * Focus the item with the given id.
   *
   * If the item is the child of a collapsed item, then this method will do nothing.
   * Make sure to expand the ancestors of the item before calling this method if needed.
   * @param {React.SyntheticEvent | null} event The DOM event that triggered the change.
   * @param {TreeViewItemId} itemId The id of the item to focus.
   */
  focusItem = (event, itemId) => {
    // If we receive an itemId, and it is visible, the focus will be set to it
    const itemMeta = itemsSelectors.itemMeta(this.store.state, itemId);
    const isItemVisible = itemMeta && (itemMeta.parentId == null || expansionSelectors.isItemExpanded(this.store.state, itemMeta.parentId));
    if (isItemVisible) {
      this.applyItemFocus(event, itemId);
    }
  };

  /**
   * Remove the focus from the currently focused item (both from the internal state and the DOM).
   */
  removeFocusedItem = () => {
    const focusedItemId = focusSelectors.focusedItemId(this.store.state);
    if (focusedItemId == null) {
      return;
    }
    const itemMeta = itemsSelectors.itemMeta(this.store.state, focusedItemId);
    if (itemMeta) {
      const itemElement = this.store.items.getItemDOMElement(focusedItemId);
      if (itemElement) {
        itemElement.blur();
      }
    }
    this.setFocusedItemId(null);
  };

  /**
   * Event handler to fire when the `root` slot of the Tree View is focused.
   * @param {React.MouseEvent} event The DOM event that triggered the change.
   */
  handleRootFocus = event => {
    if (event.defaultMuiPrevented) {
      return;
    }

    // if the event bubbled (which is React specific) we don't want to steal focus
    const defaultFocusableItemId = focusSelectors.defaultFocusableItemId(this.store.state);
    if (event.target === event.currentTarget && defaultFocusableItemId != null) {
      this.applyItemFocus(event, defaultFocusableItemId);
    }
  };

  /**
   * Event handler to fire when the `root` slot of the Tree View is blurred.
   * @param {React.MouseEvent} event The DOM event that triggered the change.
   */
  handleRootBlur = event => {
    if (event.defaultMuiPrevented) {
      return;
    }
    this.setFocusedItemId(null);
  };
}

const selectorCheckboxSelectionStatus = createSelector((state, itemId) => {
  if (selectionSelectors.isItemSelected(state, itemId)) {
    return 'checked';
  }
  let hasSelectedDescendant = false;
  let hasUnSelectedDescendant = false;
  const traverseDescendants = itemToTraverseId => {
    if (itemToTraverseId !== itemId) {
      if (selectionSelectors.isItemSelected(state, itemToTraverseId)) {
        hasSelectedDescendant = true;
      } else {
        hasUnSelectedDescendant = true;
      }
    }
    itemsSelectors.itemOrderedChildrenIds(state, itemToTraverseId).forEach(traverseDescendants);
  };
  traverseDescendants(itemId);
  const shouldSelectBasedOnDescendants = selectionSelectors.propagationRules(state).parents;
  if (shouldSelectBasedOnDescendants) {
    if (hasSelectedDescendant && hasUnSelectedDescendant) {
      return 'indeterminate';
    }
    if (hasSelectedDescendant && !hasUnSelectedDescendant) {
      return 'checked';
    }
    return 'empty';
  }
  if (hasSelectedDescendant) {
    return 'indeterminate';
  }
  return 'empty';
});
const useSelectionItemPlugin = ({
  props
}) => {
  const {
    itemId
  } = props;
  const {
    store
  } = useTreeViewContext();
  const isCheckboxSelectionEnabled = useStore(store, selectionSelectors.isCheckboxSelectionEnabled);
  const isFeatureEnabledForItem = useStore(store, selectionSelectors.isFeatureEnabledForItem, itemId);
  const canItemBeSelected = useStore(store, selectionSelectors.canItemBeSelected, itemId);
  const selectionStatus = useStore(store, selectorCheckboxSelectionStatus, itemId);
  return {
    propsEnhancers: {
      root: () => {
        // https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
        let ariaChecked;
        if (selectionStatus === 'checked') {
          // - each selected node has aria-checked set to true.
          ariaChecked = true;
        } else if (selectionStatus === 'indeterminate') {
          ariaChecked = 'mixed';
        } else if (!canItemBeSelected) {
          // - if the tree contains nodes that are not selectable, aria-checked is not present on those nodes.
          ariaChecked = undefined;
        } else {
          // - all nodes that are selectable but not selected have aria-checked set to false.
          ariaChecked = false;
        }
        return {
          'aria-checked': ariaChecked
        };
      },
      checkbox: ({
        externalEventHandlers,
        interactions
      }) => {
        const handleChange = event => {
          externalEventHandlers.onChange?.(event);
          if (event.defaultMuiPrevented) {
            return;
          }
          if (!selectionSelectors.canItemBeSelected(store.state, itemId)) {
            return;
          }
          interactions.handleCheckboxSelection(event);
        };
        return {
          tabIndex: -1,
          onChange: handleChange,
          visible: isCheckboxSelectionEnabled && isFeatureEnabledForItem,
          disabled: !canItemBeSelected,
          checked: selectionStatus === 'checked',
          indeterminate: selectionStatus === 'indeterminate'
        };
      }
    }
  };
};

class TreeViewSelectionPlugin {
  lastSelectedItem = null;
  lastSelectedRange = {};

  // We can't type `store`, otherwise we get the following TS error:
  // 'selection' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.
  constructor(store) {
    this.store = store;
    store.itemPluginManager.register(useSelectionItemPlugin, null);
  }
  setSelectedItems = (event, newModel, additionalItemsToPropagate) => {
    const {
      selectionPropagation = EMPTY_OBJECT,
      selectedItems,
      onItemSelectionToggle,
      onSelectedItemsChange
    } = this.store.parameters;
    const oldModel = selectionSelectors.selectedItemsRaw(this.store.state);
    let cleanModel;
    const isMultiSelectEnabled = selectionSelectors.isMultiSelectEnabled(this.store.state);
    if (isMultiSelectEnabled && (selectionPropagation.descendants || selectionPropagation.parents)) {
      cleanModel = propagateSelection({
        store: this.store,
        selectionPropagation,
        newModel: newModel,
        oldModel: oldModel,
        additionalItemsToPropagate
      });
    } else {
      cleanModel = newModel;
    }
    if (onItemSelectionToggle) {
      if (isMultiSelectEnabled) {
        const changes = getAddedAndRemovedItems({
          store: this.store,
          newModel: cleanModel,
          oldModel: oldModel
        });
        if (onItemSelectionToggle) {
          changes.added.forEach(itemId => {
            onItemSelectionToggle(event, itemId, true);
          });
          changes.removed.forEach(itemId => {
            onItemSelectionToggle(event, itemId, false);
          });
        }
      } else if (cleanModel !== oldModel) {
        if (oldModel != null) {
          onItemSelectionToggle(event, oldModel, false);
        }
        if (cleanModel != null) {
          onItemSelectionToggle(event, cleanModel, true);
        }
      }
    }
    if (selectedItems === undefined) {
      this.store.set('selectedItems', cleanModel);
    }
    onSelectedItemsChange?.(event, cleanModel);
  };
  selectRange = (event, [start, end]) => {
    const isMultiSelectEnabled = selectionSelectors.isMultiSelectEnabled(this.store.state);
    if (!isMultiSelectEnabled) {
      return;
    }
    let newSelectedItems = selectionSelectors.selectedItems(this.store.state).slice();

    // If the last selection was a range selection,
    // remove the items that were part of the last range from the model
    if (Object.keys(this.lastSelectedRange).length > 0) {
      newSelectedItems = newSelectedItems.filter(id => !this.lastSelectedRange[id]);
    }

    // Add to the model the items that are part of the new range and not already part of the model.
    const selectedItemsLookup = getLookupFromArray(newSelectedItems);
    const range = getNonDisabledItemsInRange(this.store.state, start, end).filter(id => selectionSelectors.isItemSelectable(this.store.state, id));
    const itemsToAddToModel = range.filter(id => !selectedItemsLookup[id]);
    newSelectedItems = newSelectedItems.concat(itemsToAddToModel);
    this.setSelectedItems(event, newSelectedItems);
    this.lastSelectedRange = getLookupFromArray(range);
  };
  buildPublicAPI = () => {
    return {
      setItemSelection: this.setItemSelection
    };
  };

  /**
   * Select or deselect an item.
   * @param {object} parameters The parameters of the method.
   * @param {TreeViewItemId} parameters.itemId The id of the item to select or deselect.
   * @param {React.SyntheticEvent} parameters.event The DOM event that triggered the change.
   * @param {boolean} parameters.keepExistingSelection If `true`, the other already selected items will remain selected, otherwise, they will be deselected. This parameter is only relevant when `multiSelect` is `true`
   * @param {boolean | undefined} parameters.shouldBeSelected If `true` the item will be selected. If `false` the item will be deselected. If not defined, the item's selection status will be toggled.
   */
  setItemSelection = ({
    itemId,
    event = null,
    keepExistingSelection = false,
    shouldBeSelected
  }) => {
    if (!selectionSelectors.enabled(this.store.state)) {
      return;
    }
    let newSelected;
    const isMultiSelectEnabled = selectionSelectors.isMultiSelectEnabled(this.store.state);
    if (keepExistingSelection) {
      const oldSelected = selectionSelectors.selectedItems(this.store.state);
      const isSelectedBefore = selectionSelectors.isItemSelected(this.store.state, itemId);
      if (isSelectedBefore && (shouldBeSelected === false || shouldBeSelected == null)) {
        newSelected = oldSelected.filter(id => id !== itemId);
      } else if (!isSelectedBefore && (shouldBeSelected === true || shouldBeSelected == null)) {
        newSelected = [itemId].concat(oldSelected);
      } else {
        newSelected = oldSelected;
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (shouldBeSelected === false || shouldBeSelected == null && selectionSelectors.isItemSelected(this.store.state, itemId)) {
        newSelected = isMultiSelectEnabled ? [] : null;
      } else {
        newSelected = isMultiSelectEnabled ? [itemId] : itemId;
      }
    }
    this.setSelectedItems(event, newSelected,
    // If shouldBeSelected === selectionSelectors.isItemSelected(store, itemId), we still want to propagate the select.
    // This is useful when the element is in an indeterminate state.
    [itemId]);
    this.lastSelectedItem = itemId;
    this.lastSelectedRange = {};
  };

  /**
   * Select all the navigable items in the tree.
   * @param {React.SyntheticEvent} event The DOM event that triggered the change.
   */
  selectAllNavigableItems = event => {
    const isMultiSelectEnabled = selectionSelectors.isMultiSelectEnabled(this.store.state);
    if (!isMultiSelectEnabled) {
      return;
    }
    const navigableItems = getAllNavigableItems(this.store.state);
    this.setSelectedItems(event, navigableItems);
    this.lastSelectedRange = getLookupFromArray(navigableItems);
  };

  /**
   * Expand the current selection range up to the given item.
   * @param {React.SyntheticEvent} event The DOM event that triggered the change.
   * @param {TreeViewItemId} itemId The id of the item to expand the selection to.
   */
  expandSelectionRange = (event, itemId) => {
    if (this.lastSelectedItem != null) {
      const [start, end] = findOrderInTremauxTree(this.store.state, itemId, this.lastSelectedItem);
      this.selectRange(event, [start, end]);
    }
  };

  /**
   * Expand the current selection range from the first navigable item to the given item.
   * @param {React.SyntheticEvent} event The DOM event that triggered the change.
   * @param {TreeViewItemId} itemId The id of the item up to which the selection range should be expanded.
   */
  selectRangeFromStartToItem = (event, itemId) => {
    this.selectRange(event, [getFirstNavigableItem(this.store.state), itemId]);
  };

  /**
   * Expand the current selection range from the given item to the last navigable item.
   * @param {React.SyntheticEvent} event The DOM event that triggered the change.
   * @param {TreeViewItemId} itemId The id of the item from which the selection range should be expanded.
   */
  selectRangeFromItemToEnd = (event, itemId) => {
    this.selectRange(event, [itemId, getLastNavigableItem(this.store.state)]);
  };

  /**
   * Update the selection when navigating with ArrowUp / ArrowDown keys.
   * @param {React.SyntheticEvent} event The DOM event that triggered the change.
   * @param {TreeViewItemId} currentItemId The id of the active item before the keyboard navigation.
   * @param {TreeViewItemId} nextItemId The id of the active item after the keyboard navigation.
   */
  selectItemFromArrowNavigation = (event, currentItem, nextItem) => {
    const isMultiSelectEnabled = selectionSelectors.isMultiSelectEnabled(this.store.state);
    if (!isMultiSelectEnabled) {
      return;
    }
    let newSelectedItems = selectionSelectors.selectedItems(this.store.state).slice();
    if (Object.keys(this.lastSelectedRange).length === 0) {
      newSelectedItems.push(nextItem);
      this.lastSelectedRange = {
        [currentItem]: true,
        [nextItem]: true
      };
    } else {
      if (!this.lastSelectedRange[currentItem]) {
        this.lastSelectedRange = {};
      }
      if (this.lastSelectedRange[nextItem]) {
        newSelectedItems = newSelectedItems.filter(id => id !== currentItem);
        delete this.lastSelectedRange[currentItem];
      } else {
        newSelectedItems.push(nextItem);
        this.lastSelectedRange[nextItem] = true;
      }
    }
    this.setSelectedItems(event, newSelectedItems);
  };
}
function propagateSelection({
  store,
  selectionPropagation,
  newModel,
  oldModel,
  additionalItemsToPropagate
}) {
  if (!selectionPropagation.descendants && !selectionPropagation.parents) {
    return newModel;
  }
  let shouldRegenerateModel = false;
  const newModelLookup = getLookupFromArray(newModel);
  const changes = getAddedAndRemovedItems({
    store,
    newModel,
    oldModel
  });
  additionalItemsToPropagate?.forEach(itemId => {
    if (newModelLookup[itemId]) {
      if (!changes.added.includes(itemId)) {
        changes.added.push(itemId);
      }
    } else if (!changes.removed.includes(itemId)) {
      changes.removed.push(itemId);
    }
  });
  changes.added.forEach(addedItemId => {
    if (selectionPropagation.descendants) {
      const selectDescendants = itemId => {
        if (itemId !== addedItemId) {
          shouldRegenerateModel = true;
          newModelLookup[itemId] = true;
        }
        itemsSelectors.itemOrderedChildrenIds(store.state, itemId).forEach(selectDescendants);
      };
      selectDescendants(addedItemId);
    }
    if (selectionPropagation.parents) {
      const checkAllDescendantsSelected = itemId => {
        if (!newModelLookup[itemId]) {
          return false;
        }
        const children = itemsSelectors.itemOrderedChildrenIds(store.state, itemId);
        return children.every(checkAllDescendantsSelected);
      };
      const selectParents = itemId => {
        const parentId = itemsSelectors.itemParentId(store.state, itemId);
        if (parentId == null) {
          return;
        }
        const siblings = itemsSelectors.itemOrderedChildrenIds(store.state, parentId);
        if (siblings.every(checkAllDescendantsSelected)) {
          shouldRegenerateModel = true;
          newModelLookup[parentId] = true;
          selectParents(parentId);
        }
      };
      selectParents(addedItemId);
    }
  });
  changes.removed.forEach(removedItemId => {
    if (selectionPropagation.parents) {
      let parentId = itemsSelectors.itemParentId(store.state, removedItemId);
      while (parentId != null) {
        if (newModelLookup[parentId]) {
          shouldRegenerateModel = true;
          delete newModelLookup[parentId];
        }
        parentId = itemsSelectors.itemParentId(store.state, parentId);
      }
    }
    if (selectionPropagation.descendants) {
      const deSelectDescendants = itemId => {
        if (itemId !== removedItemId) {
          shouldRegenerateModel = true;
          delete newModelLookup[itemId];
        }
        itemsSelectors.itemOrderedChildrenIds(store.state, itemId).forEach(deSelectDescendants);
      };
      deSelectDescendants(removedItemId);
    }
  });
  return shouldRegenerateModel ? Object.keys(newModelLookup) : newModel;
}
function getAddedAndRemovedItems({
  store,
  oldModel,
  newModel
}) {
  const newModelMap = new Map();
  newModel.forEach(id => {
    newModelMap.set(id, true);
  });
  return {
    added: newModel.filter(itemId => !selectionSelectors.isItemSelected(store.state, itemId)),
    removed: oldModel.filter(itemId => !newModelMap.has(itemId))
  };
}
function getLookupFromArray(array) {
  const lookup = {};
  array.forEach(itemId => {
    lookup[itemId] = true;
  });
  return lookup;
}

// TODO v8: Remove the lazy loading plugin from the typing on the community useTreeItem and ask users to pass the TStore generic.

const depthSelector = (state, itemId, depthContext) => {
  if (typeof depthContext === 'function') {
    return depthContext(state, itemId);
  }
  return depthContext;
};
const useTreeItem = parameters => {
  const {
    runItemPlugins,
    publicAPI,
    store
  } = useTreeViewContext();
  const depthContext = React__namespace.useContext(TreeViewItemDepthContext);
  const depth = useStore(store, depthSelector, parameters.itemId, depthContext);
  const {
    id,
    itemId,
    label,
    children,
    rootRef
  } = parameters;
  const {
    rootRef: pluginRootRef,
    contentRef,
    propsEnhancers
  } = runItemPlugins(parameters);
  const {
    interactions,
    status
  } = useTreeItemUtils({
    itemId,
    children
  });
  const rootRefObject = React__namespace.useRef(null);
  const contentRefObject = React__namespace.useRef(null);
  const handleRootRef = useMergedRefs(rootRef, pluginRootRef, rootRefObject);
  const handleContentRef = useMergedRefs(contentRef, contentRefObject);
  const checkboxRef = React__namespace.useRef(null);
  const isCheckboxSelectionEnabled = useStore(store, selectionSelectors.isCheckboxSelectionEnabled);
  const idAttribute = useStore(store, idSelectors.treeItemIdAttribute, itemId, id);
  const shouldBeAccessibleWithTab = useStore(store, focusSelectors.isItemTheDefaultFocusableItem, itemId);
  const sharedPropsEnhancerParams = {
    rootRefObject,
    contentRefObject,
    interactions
  };
  const createRootHandleFocus = otherHandlers => event => {
    otherHandlers.onFocus?.(event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (!status.focused && itemsSelectors.canItemBeFocused(store.state, itemId) && event.currentTarget === event.target) {
      store.focus.focusItem(event, itemId);
    }
  };
  const createRootHandleBlur = otherHandlers => event => {
    otherHandlers.onBlur?.(event);
    if (event.defaultMuiPrevented) {
      return;
    }
    const rootElement = store.items.getItemDOMElement(itemId);

    // Don't blur the root when switching to editing mode
    // the input that triggers the root blur can be either the relatedTarget (when entering editing state) or the target (when exiting editing state)
    // when we enter the editing state, we focus the input -> we don't want to remove the focused item from the state
    if (status.editing ||
    // we can exit the editing state by clicking outside the input (within the Tree Item) or by pressing Enter or Escape -> we don't want to remove the focused item from the state in these cases
    // we can also exit the editing state by clicking on the root itself -> want to remove the focused item from the state in this case
    event.relatedTarget && isTargetInDescendants(event.relatedTarget, rootElement) && (event.target && event.target?.dataset?.element === 'labelInput' && isTargetInDescendants(event.target, rootElement) || event.relatedTarget?.dataset?.element === 'labelInput')) {
      return;
    }
    store.focus.removeFocusedItem();
  };
  const createRootHandleKeyDown = otherHandlers => event => {
    otherHandlers.onKeyDown?.(event);
    if (event.defaultMuiPrevented || event.target?.dataset?.element === 'labelInput') {
      return;
    }
    store.keyboardNavigation.handleItemKeyDown(event, itemId);
  };
  const createLabelHandleDoubleClick = otherHandlers => event => {
    otherHandlers.onDoubleClick?.(event);
    if (event.defaultMuiPrevented) {
      return;
    }
    interactions.toggleItemEditing();
  };
  const createContentHandleClick = otherHandlers => event => {
    otherHandlers.onClick?.(event);
    store.items.handleItemClick(event, itemId);
    if (event.defaultMuiPrevented || checkboxRef.current?.contains(event.target)) {
      return;
    }
    if (expansionSelectors.triggerSlot(store.state) === 'content') {
      interactions.handleExpansion(event);
    }
    if (!isCheckboxSelectionEnabled) {
      interactions.handleSelection(event);
    }
  };
  const createContentHandleMouseDown = otherHandlers => event => {
    otherHandlers.onMouseDown?.(event);
    if (event.defaultMuiPrevented) {
      return;
    }

    // Prevent text selection
    if (event.shiftKey || event.ctrlKey || event.metaKey || status.disabled) {
      event.preventDefault();
    }
  };
  const createIconContainerHandleClick = otherHandlers => event => {
    otherHandlers.onClick?.(event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (expansionSelectors.triggerSlot(store.state) === 'iconContainer') {
      interactions.handleExpansion(event);
    }
  };
  const getContextProviderProps = () => ({
    itemId,
    id
  });
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = _extends$1({}, extractEventHandlers(parameters), extractEventHandlers(externalProps));
    const props = _extends$1({}, externalEventHandlers, {
      ref: handleRootRef,
      role: 'treeitem',
      tabIndex: shouldBeAccessibleWithTab ? 0 : -1,
      id: idAttribute,
      'aria-expanded': status.expandable ? status.expanded : undefined,
      'aria-disabled': status.disabled || undefined
    }, externalProps, {
      style: _extends$1({}, externalProps.style ?? {}, {
        '--TreeView-itemDepth': depth
      }),
      onFocus: createRootHandleFocus(externalEventHandlers),
      onBlur: createRootHandleBlur(externalEventHandlers),
      onKeyDown: createRootHandleKeyDown(externalEventHandlers)
    });
    const enhancedRootProps = propsEnhancers.root?.(_extends$1({}, sharedPropsEnhancerParams, {
      externalEventHandlers
    })) ?? {};
    return _extends$1({}, props, enhancedRootProps);
  };
  const getContentProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers(externalProps);
    const props = _extends$1({}, externalEventHandlers, externalProps, {
      ref: handleContentRef,
      onClick: createContentHandleClick(externalEventHandlers),
      onMouseDown: createContentHandleMouseDown(externalEventHandlers),
      status
    });
    ['expanded', 'selected', 'focused', 'disabled', 'editing', 'editable'].forEach(key => {
      if (status[key]) {
        props[`data-${key}`] = '';
      }
    });
    const enhancedContentProps = propsEnhancers.content?.(_extends$1({}, sharedPropsEnhancerParams, {
      externalEventHandlers
    })) ?? {};
    return _extends$1({}, props, enhancedContentProps);
  };
  const getCheckboxProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers(externalProps);
    const props = _extends$1({}, externalEventHandlers, {
      ref: checkboxRef,
      'aria-hidden': true
    }, externalProps);
    const enhancedCheckboxProps = propsEnhancers.checkbox?.(_extends$1({}, sharedPropsEnhancerParams, {
      externalEventHandlers
    })) ?? {};
    return _extends$1({}, props, enhancedCheckboxProps);
  };
  const getLabelProps = (externalProps = {}) => {
    const externalEventHandlers = _extends$1({}, extractEventHandlers(externalProps));
    const props = _extends$1({}, externalEventHandlers, {
      children: label
    }, externalProps, {
      onDoubleClick: createLabelHandleDoubleClick(externalEventHandlers)
    });
    const enhancedLabelProps = propsEnhancers.label?.(_extends$1({}, sharedPropsEnhancerParams, {
      externalEventHandlers
    })) ?? {};
    return _extends$1({}, enhancedLabelProps, props);
  };
  const getLabelInputProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers(externalProps);
    const enhancedLabelInputProps = propsEnhancers.labelInput?.(_extends$1({}, sharedPropsEnhancerParams, {
      externalEventHandlers
    })) ?? {};
    return _extends$1({}, externalProps, enhancedLabelInputProps);
  };
  const getIconContainerProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers(externalProps);
    return _extends$1({}, externalEventHandlers, externalProps, {
      onClick: createIconContainerHandleClick(externalEventHandlers)
    });
  };
  const getErrorContainerProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers(externalProps);
    return _extends$1({}, externalEventHandlers, externalProps);
  };
  const getLoadingContainerProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers(externalProps);
    return _extends$1({
      size: '12px',
      thickness: 6
    }, externalEventHandlers, externalProps);
  };
  const getGroupTransitionProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers(externalProps);
    const response = _extends$1({}, externalEventHandlers, {
      unmountOnExit: true,
      component: 'ul',
      role: 'group',
      in: status.expanded,
      children
    }, externalProps);
    return response;
  };
  const getDragAndDropOverlayProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers(externalProps);
    const enhancedDragAndDropOverlayProps = propsEnhancers.dragAndDropOverlay?.(_extends$1({}, sharedPropsEnhancerParams, {
      externalEventHandlers
    })) ?? {};
    return _extends$1({}, externalProps, enhancedDragAndDropOverlayProps);
  };
  return {
    getContextProviderProps,
    getRootProps,
    getContentProps,
    getGroupTransitionProps,
    getIconContainerProps,
    getCheckboxProps,
    getLabelProps,
    getLabelInputProps,
    getDragAndDropOverlayProps,
    getErrorContainerProps,
    getLoadingContainerProps,
    rootRef: handleRootRef,
    status,
    publicAPI
  };
};

function getTreeItemUtilityClass(slot) {
  return generateUtilityClass('MuiTreeItem', slot);
}
generateUtilityClasses('MuiTreeItem', ['root', 'content', 'groupTransition', 'iconContainer', 'label', 'checkbox', 'labelInput', 'dragAndDropOverlay', 'errorIcon', 'loadingIcon',
// State classes, will be replaced by data-attrs in the next major
'expanded', 'selected', 'focused', 'disabled', 'editable', 'editing']);

const TreeViewExpandIcon = createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'TreeViewExpandIcon');
const TreeViewCollapseIcon = createSvgIcon(/*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'TreeViewCollapseIcon');

const _excluded$4 = ["ownerState"];
function pickIcon(treeItemIcon, treeViewIcon, fallback) {
  if (treeItemIcon !== undefined) {
    return treeItemIcon;
  }
  if (treeViewIcon !== undefined) {
    return treeViewIcon;
  }
  return fallback;
}
function TreeItemIcon(props) {
  const {
    slots: slotsFromTreeItem,
    slotProps: slotPropsFromTreeItem,
    status
  } = props;
  const {
    slots: slotsFromTreeView,
    slotProps: slotPropsFromTreeView
  } = useTreeViewStyleContext();
  const slots = {
    collapseIcon: pickIcon(slotsFromTreeItem?.collapseIcon, slotsFromTreeView.collapseIcon, TreeViewCollapseIcon),
    expandIcon: pickIcon(slotsFromTreeItem?.expandIcon, slotsFromTreeView.expandIcon, TreeViewExpandIcon),
    endIcon: pickIcon(slotsFromTreeItem?.endIcon, slotsFromTreeView.endIcon),
    icon: slotsFromTreeItem?.icon
  };
  let iconName;
  if (slots?.icon) {
    iconName = 'icon';
  } else if (status.expandable) {
    if (status.expanded) {
      iconName = 'collapseIcon';
    } else {
      iconName = 'expandIcon';
    }
  } else {
    iconName = 'endIcon';
  }
  const Icon = slots[iconName];
  const _useSlotProps = useSlotProps({
      elementType: Icon,
      externalSlotProps: tempOwnerState => _extends$1({}, resolveComponentProps(slotPropsFromTreeView[iconName], tempOwnerState), resolveComponentProps(slotPropsFromTreeItem?.[iconName], tempOwnerState)),
      // TODO: Add proper ownerState
      ownerState: {}
    }),
    iconProps = _objectWithoutPropertiesLoose$1(_useSlotProps, _excluded$4);
  if (!Icon) {
    return null;
  }
  return /*#__PURE__*/jsxRuntime.jsx(Icon, _extends$1({}, iconProps));
}
process.env.NODE_ENV !== "production" ? TreeItemIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  status: PropTypes.shape({
    disabled: PropTypes.bool.isRequired,
    editable: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    expandable: PropTypes.bool.isRequired,
    expanded: PropTypes.bool.isRequired,
    focused: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired
} : void 0;

const TreeItemDragAndDropOverlayRoot = styled('div', {
  name: 'MuiTreeItemDragAndDropOverlay',
  slot: 'Root',
  shouldForwardProp: prop => shouldForwardProp(prop) && prop !== 'action'
})(({
  theme
}) => ({
  position: 'absolute',
  left: 0,
  display: 'flex',
  top: 0,
  bottom: 0,
  right: 0,
  pointerEvents: 'none',
  variants: [{
    props: {
      action: 'make-child'
    },
    style: {
      marginLeft: 'calc(var(--TreeView-indentMultiplier) * var(--TreeView-itemDepth))',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.darkChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.dark, theme.palette.action.focusOpacity)
    }
  }, {
    props: {
      action: 'reorder-above'
    },
    style: {
      marginLeft: 'calc(var(--TreeView-indentMultiplier) * var(--TreeView-itemDepth))',
      borderTop: `1px solid ${(theme.vars || theme).palette.action.active}`
    }
  }, {
    props: {
      action: 'reorder-below'
    },
    style: {
      marginLeft: 'calc(var(--TreeView-indentMultiplier) * var(--TreeView-itemDepth))',
      borderBottom: `1px solid ${(theme.vars || theme).palette.action.active}`
    }
  }, {
    props: {
      action: 'move-to-parent'
    },
    style: {
      marginLeft: 'calc(var(--TreeView-indentMultiplier) * calc(var(--TreeView-itemDepth) - 1))',
      borderBottom: `1px solid ${(theme.vars || theme).palette.action.active}`
    }
  }]
}));
function TreeItemDragAndDropOverlay(props) {
  if (props.action == null) {
    return null;
  }
  return /*#__PURE__*/jsxRuntime.jsx(TreeItemDragAndDropOverlayRoot, _extends$1({}, props));
}
process.env.NODE_ENV !== "production" ? TreeItemDragAndDropOverlay.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  action: PropTypes.oneOf(['make-child', 'move-to-parent', 'reorder-above', 'reorder-below']),
  style: PropTypes.object
} : void 0;

function TreeItemProvider(props) {
  const {
    children,
    itemId,
    id
  } = props;
  const {
    wrapItem,
    store
  } = useTreeViewContext();
  const idAttribute = useStore(store, idSelectors.treeItemIdAttribute, itemId, id);
  return /*#__PURE__*/jsxRuntime.jsx(React__namespace.Fragment, {
    children: wrapItem({
      children,
      itemId,
      store,
      idAttribute
    })
  });
}
process.env.NODE_ENV !== "production" ? TreeItemProvider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: PropTypes.node,
  id: PropTypes.string,
  itemId: PropTypes.string.isRequired
} : void 0;

/**
 * @ignore - internal component.
 */
const TreeItemLabelInput = styled('input', {
  name: 'MuiTreeItem',
  slot: 'LabelInput'
})(({
  theme
}) => _extends$1({}, theme.typography.body1, {
  width: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  border: 'none',
  padding: '0 2px',
  boxSizing: 'border-box',
  '&:focus': {
    outline: `1px solid ${(theme.vars || theme).palette.primary.main}`
  }
}));

const _excluded$3 = ["visible"],
  _excluded2 = ["id", "itemId", "label", "disabled", "disableSelection", "children", "slots", "slotProps", "classes"];
const useThemeProps$1 = createUseThemeProps();
const TreeItemRoot = styled('li', {
  name: 'MuiTreeItem',
  slot: 'Root'
})({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  outline: 0
});
const TreeItemContent = styled('div', {
  name: 'MuiTreeItem',
  slot: 'Content',
  shouldForwardProp: prop => shouldForwardProp(prop) && prop !== 'status'
})(({
  theme
}) => ({
  padding: theme.spacing(0.5, 1),
  paddingLeft: `calc(${theme.spacing(1)} + var(--TreeView-itemChildrenIndentation) * var(--TreeView-itemDepth))`,
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  boxSizing: 'border-box',
  // prevent width + padding to overflow
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  '&[data-disabled]': {
    opacity: (theme.vars || theme).palette.action.disabledOpacity,
    backgroundColor: 'transparent',
    cursor: 'auto'
  },
  '&[data-focused]': {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  '&[data-selected]': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    }
  },
  '&[data-selected][data-focused]': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
  }
}));
const TreeItemLabel = styled('div', {
  name: 'MuiTreeItem',
  slot: 'Label',
  shouldForwardProp: prop => shouldForwardProp(prop) && prop !== 'editable'
})(({
  theme
}) => _extends$1({
  width: '100%',
  boxSizing: 'border-box',
  // prevent width + padding to overflow
  // fixes overflow - see https://github.com/mui/material-ui/issues/27372
  minWidth: 0,
  position: 'relative',
  overflow: 'hidden'
}, theme.typography.body1, {
  variants: [{
    props: ({
      editable
    }) => editable,
    style: {
      paddingLeft: '2px'
    }
  }]
}));
const TreeItemIconContainer = styled('div', {
  name: 'MuiTreeItem',
  slot: 'IconContainer'
})({
  width: 16,
  display: 'flex',
  flexShrink: 0,
  justifyContent: 'center',
  position: 'relative',
  cursor: 'inherit',
  '& svg': {
    fontSize: 18
  }
});
const TreeItemGroupTransition = styled(Collapse, {
  name: 'MuiTreeItem',
  slot: 'GroupTransition',
  overridesResolver: (props, styles) => styles.groupTransition
})({
  margin: 0,
  padding: 0
});
const TreeItemErrorContainer = styled('div', {
  name: 'MuiTreeItem',
  slot: 'ErrorIcon'
})({
  position: 'absolute',
  right: -3,
  width: 7,
  height: 7,
  borderRadius: '50%',
  backgroundColor: 'red'
});
const TreeItemLoadingContainer = styled(CircularProgress, {
  name: 'MuiTreeItem',
  slot: 'LoadingIcon'
})({
  color: 'text.primary'
});
const TreeItemCheckbox = styled(/*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  const {
      visible
    } = props,
    other = _objectWithoutPropertiesLoose$1(props, _excluded$3);
  if (!visible) {
    return null;
  }
  return /*#__PURE__*/jsxRuntime.jsx(Checkbox, _extends$1({}, other, {
    ref: ref
  }));
}), {
  name: 'MuiTreeItem',
  slot: 'Checkbox'
})({
  padding: 0
});
if (process.env.NODE_ENV !== "production") TreeItemCheckbox.displayName = "TreeItemCheckbox";
const useUtilityClasses$1 = classesProp => {
  const {
    classes: classesFromTreeView
  } = useTreeViewStyleContext();
  const classes = _extends$1({}, classesProp, {
    root: clsx(classesProp?.root, classesFromTreeView.root),
    content: clsx(classesProp?.content, classesFromTreeView.itemContent),
    iconContainer: clsx(classesProp?.iconContainer, classesFromTreeView.itemIconContainer),
    checkbox: clsx(classesProp?.checkbox, classesFromTreeView.itemCheckbox),
    label: clsx(classesProp?.label, classesFromTreeView.itemLabel),
    groupTransition: clsx(classesProp?.groupTransition, classesFromTreeView.itemGroupTransition),
    labelInput: clsx(classesProp?.labelInput, classesFromTreeView.itemLabelInput),
    dragAndDropOverlay: clsx(classesProp?.dragAndDropOverlay, classesFromTreeView.itemDragAndDropOverlay),
    errorIcon: clsx(classesProp?.errorIcon, classesFromTreeView.itemErrorIcon),
    loadingIcon: clsx(classesProp?.loadingIcon, classesFromTreeView.itemLoadingIcon)
  });
  const slots = {
    root: ['root'],
    content: ['content'],
    iconContainer: ['iconContainer'],
    checkbox: ['checkbox'],
    label: ['label'],
    groupTransition: ['groupTransition'],
    labelInput: ['labelInput'],
    dragAndDropOverlay: ['dragAndDropOverlay'],
    errorIcon: ['errorIcon'],
    loadingIcon: ['loadingIcon'],
    expanded: ['expanded'],
    editing: ['editing'],
    editable: ['editable'],
    selected: ['selected'],
    focused: ['focused'],
    disabled: ['disabled']
  };
  return composeClasses(slots, getTreeItemUtilityClass, classes);
};
/**
 *
 * Demos:
 *
 * - [Tree View](https://mui.com/x/react-tree-view/)
 *
 * API:
 *
 * - [TreeItem API](https://mui.com/x/api/tree-view/tree-item-2/)
 */
const TreeItem = /*#__PURE__*/React__namespace.forwardRef(function TreeItem(inProps, forwardedRef) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiTreeItem'
  });
  const {
      id,
      itemId,
      label,
      disabled,
      disableSelection,
      children,
      slots = {},
      slotProps = {},
      classes: classesProp
    } = props,
    other = _objectWithoutPropertiesLoose$1(props, _excluded2);
  const {
    getContextProviderProps,
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getCheckboxProps,
    getLabelProps,
    getGroupTransitionProps,
    getLabelInputProps,
    getDragAndDropOverlayProps,
    getErrorContainerProps,
    getLoadingContainerProps,
    status
  } = useTreeItem({
    id,
    itemId,
    children,
    label,
    disabled,
    disableSelection
  });
  const classes = useUtilityClasses$1(classesProp);
  const Root = slots.root ?? TreeItemRoot;
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState: {},
    className: classes.root
  });
  const Content = slots.content ?? TreeItemContent;
  const contentProps = useSlotProps({
    elementType: Content,
    getSlotProps: getContentProps,
    externalSlotProps: slotProps.content,
    ownerState: {},
    className: clsx(classes.content, status.expanded && classes.expanded, status.selected && classes.selected, status.focused && classes.focused, status.disabled && classes.disabled, status.editing && classes.editing, status.editable && classes.editable)
  });
  const IconContainer = slots.iconContainer ?? TreeItemIconContainer;
  const iconContainerProps = useSlotProps({
    elementType: IconContainer,
    getSlotProps: getIconContainerProps,
    externalSlotProps: slotProps.iconContainer,
    ownerState: {},
    className: classes.iconContainer
  });
  const Label = slots.label ?? TreeItemLabel;
  const labelProps = useSlotProps({
    elementType: Label,
    getSlotProps: getLabelProps,
    externalSlotProps: slotProps.label,
    ownerState: {},
    className: classes.label
  });
  const Checkbox = slots.checkbox ?? TreeItemCheckbox;
  const checkboxProps = useSlotProps({
    elementType: Checkbox,
    getSlotProps: getCheckboxProps,
    externalSlotProps: slotProps.checkbox,
    ownerState: {},
    className: classes.checkbox
  });
  const GroupTransition = slots.groupTransition ?? undefined;
  const groupTransitionProps = useSlotProps({
    elementType: GroupTransition,
    getSlotProps: getGroupTransitionProps,
    externalSlotProps: slotProps.groupTransition,
    ownerState: {},
    className: classes.groupTransition
  });
  const LabelInput = slots.labelInput ?? TreeItemLabelInput;
  const labelInputProps = useSlotProps({
    elementType: LabelInput,
    getSlotProps: getLabelInputProps,
    externalSlotProps: slotProps.labelInput,
    ownerState: {},
    className: classes.labelInput
  });
  const DragAndDropOverlay = slots.dragAndDropOverlay ?? TreeItemDragAndDropOverlay;
  const dragAndDropOverlayProps = useSlotProps({
    elementType: DragAndDropOverlay,
    getSlotProps: getDragAndDropOverlayProps,
    externalSlotProps: slotProps.dragAndDropOverlay,
    ownerState: {},
    className: classes.dragAndDropOverlay
  });
  const ErrorIcon = slots.errorIcon ?? TreeItemErrorContainer;
  const errorContainerProps = useSlotProps({
    elementType: ErrorIcon,
    getSlotProps: getErrorContainerProps,
    externalSlotProps: slotProps.errorIcon,
    ownerState: {},
    className: classes.errorIcon
  });
  const LoadingIcon = slots.loadingIcon ?? TreeItemLoadingContainer;
  const loadingContainerProps = useSlotProps({
    elementType: LoadingIcon,
    getSlotProps: getLoadingContainerProps,
    externalSlotProps: slotProps.loadingIcon,
    ownerState: {},
    className: classes.loadingIcon
  });
  return /*#__PURE__*/jsxRuntime.jsx(TreeItemProvider, _extends$1({}, getContextProviderProps(), {
    children: /*#__PURE__*/jsxRuntime.jsxs(Root, _extends$1({}, rootProps, {
      children: [/*#__PURE__*/jsxRuntime.jsxs(Content, _extends$1({}, contentProps, {
        children: [/*#__PURE__*/jsxRuntime.jsxs(IconContainer, _extends$1({}, iconContainerProps, {
          children: [status.error && /*#__PURE__*/jsxRuntime.jsx(ErrorIcon, _extends$1({}, errorContainerProps)), status.loading ? /*#__PURE__*/jsxRuntime.jsx(LoadingIcon, _extends$1({}, loadingContainerProps)) : /*#__PURE__*/jsxRuntime.jsx(TreeItemIcon, {
            status: status,
            slots: slots,
            slotProps: slotProps
          })]
        })), /*#__PURE__*/jsxRuntime.jsx(Checkbox, _extends$1({}, checkboxProps)), status.editing ? /*#__PURE__*/jsxRuntime.jsx(LabelInput, _extends$1({}, labelInputProps)) : /*#__PURE__*/jsxRuntime.jsx(Label, _extends$1({}, labelProps)), /*#__PURE__*/jsxRuntime.jsx(DragAndDropOverlay, _extends$1({}, dragAndDropOverlayProps))]
      })), children && /*#__PURE__*/jsxRuntime.jsx(TreeItemGroupTransition, _extends$1({
        as: GroupTransition
      }, groupTransitionProps))]
    }))
  }));
});
if (process.env.NODE_ENV !== "production") TreeItem.displayName = "TreeItem";
process.env.NODE_ENV !== "production" ? TreeItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes /* @typescript-to-proptypes-ignore */.any,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * If `true`, the item is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the item cannot be selected.
   * @default false
   */
  disableSelection: PropTypes.bool,
  /**
   * The id attribute of the item. If not provided, it will be generated.
   */
  id: PropTypes.string,
  /**
   * The id of the item.
   * Must be unique.
   */
  itemId: PropTypes.string.isRequired,
  /**
   * The label of the item.
   */
  label: PropTypes.node,
  /**
   * Callback fired when the item root is blurred.
   */
  onBlur: PropTypes.func,
  /**
   * This prop isn't supported.
   * Use the `onItemFocus` callback on the tree if you need to monitor an item's focus.
   */
  onFocus: unsupportedProp,
  /**
   * Callback fired when a key is pressed on the keyboard and the tree is in focus.
   */
  onKeyDown: PropTypes.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

const _excluded$2 = ["ownerState"];
const RichTreeViewItemsContext = /*#__PURE__*/React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") RichTreeViewItemsContext.displayName = "RichTreeViewItemsContext";
const selectorNoChildren = () => EMPTY_ARRAY;
const selectorChildrenIdsNull = state => itemsSelectors.itemOrderedChildrenIds(state, null);
const WrappedTreeItem = /*#__PURE__*/React__namespace.memo(function WrappedTreeItem({
  itemSlot,
  itemSlotProps,
  itemId,
  skipChildren
}) {
  const renderItemForRichTreeView = React__namespace.useContext(RichTreeViewItemsContext);
  const {
    store
  } = useTreeViewContext();
  const itemMeta = useStore(store, itemsSelectors.itemMeta, itemId);
  const children = useStore(store, skipChildren ? selectorNoChildren : itemsSelectors.itemOrderedChildrenIds, itemId);
  const Item = itemSlot ?? TreeItem;
  const _useSlotProps = useSlotProps({
      elementType: Item,
      externalSlotProps: itemSlotProps,
      additionalProps: {
        label: itemMeta?.label,
        id: itemMeta?.idAttribute,
        itemId
      },
      ownerState: {
        itemId,
        label: itemMeta?.label
      }
    }),
    itemProps = _objectWithoutPropertiesLoose$1(_useSlotProps, _excluded$2);
  return /*#__PURE__*/jsxRuntime.jsx(Item, _extends$1({}, itemProps, {
    children: children?.map(renderItemForRichTreeView)
  }));
}, fastObjectShallowCompare);
if (process.env.NODE_ENV !== "production") WrappedTreeItem.displayName = "WrappedTreeItem";
function RichTreeViewItems(props) {
  const {
    slots,
    slotProps
  } = props;
  const {
    store
  } = useTreeViewContext();
  const itemSlot = slots?.item;
  const itemSlotProps = slotProps?.item;
  const domStructure = useStore(store, itemsSelectors.domStructure);
  const items = useStore(store, domStructure === 'flat' ? expansionSelectors.flatList : selectorChildrenIdsNull);
  const skipChildren = domStructure === 'flat';
  const renderItem = React__namespace.useCallback(itemId => {
    return /*#__PURE__*/jsxRuntime.jsx(WrappedTreeItem, {
      itemSlot: itemSlot,
      itemSlotProps: itemSlotProps,
      itemId: itemId,
      skipChildren: skipChildren
    }, itemId);
  }, [itemSlot, itemSlotProps, skipChildren]);
  return /*#__PURE__*/jsxRuntime.jsx(RichTreeViewItemsContext.Provider, {
    value: renderItem,
    children: items.map(renderItem)
  });
}

function useTreeViewRootProps(store, forwardedProps, ref) {
  const treeId = useStore(store, idSelectors.treeId);
  const itemChildrenIndentation = useStore(store, itemsSelectors.itemChildrenIndentation);
  const isMultiSelectEnabled = useStore(store, selectionSelectors.isMultiSelectEnabled);
  return otherHandlers => _extends$1({
    ref,
    role: 'tree',
    id: treeId,
    'aria-multiselectable': isMultiSelectEnabled
  }, forwardedProps, otherHandlers, {
    style: _extends$1({}, forwardedProps.style, {
      '--TreeView-itemChildrenIndentation': typeof itemChildrenIndentation === 'number' ? `${itemChildrenIndentation}px` : itemChildrenIndentation
    }),
    onFocus: event => {
      otherHandlers.onFocus?.(event);
      store.focus.handleRootFocus(event);
    },
    onBlur: event => {
      otherHandlers.onBlur?.(event);
      store.focus.handleRootBlur(event);
    }
  });
}

const _excluded$1 = ["apiRef", "slots", "slotProps", "disabledItemsFocusable", "items", "isItemDisabled", "isItemSelectionDisabled", "getItemLabel", "getItemChildren", "getItemId", "onItemClick", "itemChildrenIndentation", "id", "expandedItems", "defaultExpandedItems", "onExpandedItemsChange", "onItemExpansionToggle", "expansionTrigger", "disableSelection", "selectedItems", "defaultSelectedItems", "multiSelect", "checkboxSelection", "selectionPropagation", "onSelectedItemsChange", "onItemSelectionToggle", "onItemFocus", "onItemLabelChange", "isItemEditable"];
function useExtractRichTreeViewParameters(props) {
  const {
      // Props for Provider
      apiRef,
      slots,
      slotProps,
      // Shared parameters
      disabledItemsFocusable,
      items,
      isItemDisabled,
      isItemSelectionDisabled,
      getItemLabel,
      getItemChildren,
      getItemId,
      onItemClick,
      itemChildrenIndentation,
      id,
      expandedItems,
      defaultExpandedItems,
      onExpandedItemsChange,
      onItemExpansionToggle,
      expansionTrigger,
      disableSelection,
      selectedItems,
      defaultSelectedItems,
      multiSelect,
      checkboxSelection,
      selectionPropagation,
      onSelectedItemsChange,
      onItemSelectionToggle,
      onItemFocus,
      // RichTreeViewStore parameters
      onItemLabelChange,
      isItemEditable

      // Forwarded props
    } = props,
    forwardedProps = _objectWithoutPropertiesLoose$1(props, _excluded$1);
  const parameters = React__namespace.useMemo(() => ({
    // Shared parameters
    disabledItemsFocusable,
    items,
    isItemDisabled,
    isItemSelectionDisabled,
    getItemLabel,
    getItemChildren,
    getItemId,
    onItemClick,
    itemChildrenIndentation,
    id,
    expandedItems,
    defaultExpandedItems,
    onExpandedItemsChange,
    onItemExpansionToggle,
    expansionTrigger,
    disableSelection,
    selectedItems,
    defaultSelectedItems,
    multiSelect,
    checkboxSelection,
    selectionPropagation,
    onSelectedItemsChange,
    onItemSelectionToggle,
    onItemFocus,
    // RichTreeViewStore parameters
    onItemLabelChange,
    isItemEditable
  }), [
  // Shared parameters
  disabledItemsFocusable, items, isItemDisabled, isItemSelectionDisabled, getItemLabel, getItemChildren, getItemId, onItemClick, itemChildrenIndentation, id, expandedItems, defaultExpandedItems, onExpandedItemsChange, onItemExpansionToggle, expansionTrigger, disableSelection, selectedItems, defaultSelectedItems, multiSelect, checkboxSelection, selectionPropagation, onSelectedItemsChange, onItemSelectionToggle, onItemFocus,
  // RichTreeViewStore parameters
  onItemLabelChange, isItemEditable]);
  return {
    apiRef,
    slots,
    slotProps,
    parameters,
    forwardedProps
  };
}

const noop = () => {};
const useIsoLayoutEffect = typeof document !== 'undefined' ? React__namespace.useLayoutEffect : noop;

const EMPTY = [];

/**
 * A React.useEffect equivalent that runs once, when the component is mounted.
 */
function useOnMount(fn) {
  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
  /* eslint-disable react-hooks/exhaustive-deps */
  React__namespace.useEffect(fn, EMPTY);
  /* eslint-enable react-hooks/exhaustive-deps */
}

/**
 * Creates a Tree View store and keep it in sync with the provided parameters.
 */
function useTreeViewStore(StoreClass, parameters) {
  const isRtl = useRtl();
  const store = useRefWithInit(() => new StoreClass(_extends$1({}, parameters, {
    isRtl
  }))).current;
  useIsoLayoutEffect(() => store.updateStateFromParameters(_extends$1({}, parameters, {
    isRtl
  })), [store, isRtl, parameters]);
  useOnMount(store.disposeEffect);
  return store;
}

const useLabelEditingItemPlugin = ({
  props
}) => {
  const {
    store
  } = useTreeViewContext();
  const {
    label,
    itemId
  } = props;
  const [labelInputValue, setLabelInputValue] = React__namespace.useState(label);
  const isItemEditable = useStore(store, labelSelectors.isItemEditable, itemId);
  const isItemBeingEdited = useStore(store, labelSelectors.isItemBeingEdited, itemId);
  React__namespace.useEffect(() => {
    if (!isItemBeingEdited) {
      setLabelInputValue(label);
    }
  }, [isItemBeingEdited, label]);
  return {
    propsEnhancers: {
      label: () => ({
        editable: isItemEditable
      }),
      labelInput: ({
        externalEventHandlers,
        interactions
      }) => {
        if (!isItemEditable) {
          return {};
        }
        const handleKeydown = event => {
          externalEventHandlers.onKeyDown?.(event);
          if (event.defaultMuiPrevented) {
            return;
          }
          const target = event.target;
          if (event.key === 'Enter' && target.value) {
            interactions.handleSaveItemLabel(event, target.value);
          } else if (event.key === 'Escape') {
            interactions.handleCancelItemLabelEditing(event);
          }
        };
        const handleBlur = event => {
          externalEventHandlers.onBlur?.(event);
          if (event.defaultMuiPrevented) {
            return;
          }
          if (event.target.value) {
            interactions.handleSaveItemLabel(event, event.target.value);
          }
        };
        const handleInputChange = event => {
          externalEventHandlers.onChange?.(event);
          setLabelInputValue(event.target.value);
        };
        return {
          value: labelInputValue ?? '',
          'data-element': 'labelInput',
          onChange: handleInputChange,
          onKeyDown: handleKeydown,
          onBlur: handleBlur,
          autoFocus: true,
          type: 'text'
        };
      }
    }
  };
};

class TreeViewLabelEditingPlugin {
  constructor(store) {
    this.store = store;
    store.itemPluginManager.register(useLabelEditingItemPlugin, null);
  }
  buildPublicAPI = () => {
    return {
      setEditedItem: this.setEditedItem,
      updateItemLabel: this.updateItemLabel
    };
  };

  /**
   * Set which item is currently being edited.
   * You can pass `null` to exit editing mode.
   * @param {TreeViewItemId | null} itemId The id of the item to edit, or `null` to exit editing mode.
   */
  setEditedItem = itemId => {
    if (itemId !== null && !labelSelectors.isItemEditable(this.store.state, itemId)) {
      return;
    }
    this.store.set('editedItemId', itemId);
  };

  /**
   * Used to update the label of an item.
   * @param {TreeViewItemId} itemId The id of the item to update the label of.
   * @param {string} label The new label of the item.
   */
  updateItemLabel = (itemId, label) => {
    if (!label) {
      throw new Error(['MUI X: The Tree View component requires all items to have a `label` property.', 'The label of an item cannot be empty.', itemId].join('\n'));
    }
    const item = this.store.state.itemMetaLookup[itemId];
    if (item.label === label) {
      return;
    }
    this.store.set('itemMetaLookup', _extends$1({}, this.store.state.itemMetaLookup, {
      [itemId]: _extends$1({}, item, {
        label
      })
    }));
    if (this.store.parameters.onItemLabelChange) {
      this.store.parameters.onItemLabelChange(itemId, label);
    }
  };
}

// Used https://gist.github.com/mudge/5830382 as a starting point.
// See https://github.com/browserify/events/blob/master/events.js for
// the Node.js (https://nodejs.org/api/events.html) polyfill used by webpack.
class EventManager {
  maxListeners = 20;
  warnOnce = false;
  events = {};
  on(eventName, listener, options = {}) {
    let collection = this.events[eventName];
    if (!collection) {
      collection = {
        highPriority: new Map(),
        regular: new Map()
      };
      this.events[eventName] = collection;
    }
    if (options.isFirst) {
      collection.highPriority.set(listener, true);
    } else {
      collection.regular.set(listener, true);
    }
    if (process.env.NODE_ENV !== 'production') {
      const collectionSize = collection.highPriority.size + collection.regular.size;
      if (collectionSize > this.maxListeners && !this.warnOnce) {
        this.warnOnce = true;
        console.warn([`Possible EventEmitter memory leak detected. ${collectionSize} ${eventName} listeners added.`].join('\n'));
      }
    }
  }
  removeListener(eventName, listener) {
    if (this.events[eventName]) {
      this.events[eventName].regular.delete(listener);
      this.events[eventName].highPriority.delete(listener);
    }
  }
  removeAllListeners() {
    this.events = {};
  }
  emit(eventName, ...args) {
    const collection = this.events[eventName];
    if (!collection) {
      return;
    }
    const highPriorityListeners = Array.from(collection.highPriority.keys());
    const regularListeners = Array.from(collection.regular.keys());
    for (let i = highPriorityListeners.length - 1; i >= 0; i -= 1) {
      const listener = highPriorityListeners[i];
      if (collection.highPriority.has(listener)) {
        listener.apply(this, args);
      }
    }
    for (let i = 0; i < regularListeners.length; i += 1) {
      const listener = regularListeners[i];
      if (collection.regular.has(listener)) {
        listener.apply(this, args);
      }
    }
  }
  once(eventName, listener) {
    // eslint-disable-next-line consistent-this
    const that = this;
    this.on(eventName, function oneTimeListener(...args) {
      that.removeListener(eventName, oneTimeListener);
      listener.apply(that, args);
    });
  }
}

const getExpansionTrigger = ({
  isItemEditable,
  expansionTrigger
}) => {
  if (expansionTrigger) {
    return expansionTrigger;
  }
  if (isItemEditable) {
    return 'iconContainer';
  }
  return 'content';
};

/**
 * Returns the properties of the state that are derived from the parameters.
 * This do not contain state properties that don't update whenever the parameters update.
 */
function deriveStateFromParameters$1(parameters) {
  return {
    disabledItemsFocusable: parameters.disabledItemsFocusable ?? false,
    domStructure: 'nested',
    itemChildrenIndentation: parameters.itemChildrenIndentation ?? '12px',
    providedTreeId: parameters.id,
    // TODO: Fix
    expansionTrigger: getExpansionTrigger({
      isItemEditable: parameters.isItemEditable,
      expansionTrigger: parameters.expansionTrigger
    }),
    disableSelection: parameters.disableSelection ?? false,
    multiSelect: parameters.multiSelect ?? false,
    checkboxSelection: parameters.checkboxSelection ?? false,
    selectionPropagation: parameters.selectionPropagation ?? EMPTY_OBJECT
  };
}
function applyModelInitialValue(controlledValue, defaultValue, fallback) {
  if (controlledValue !== undefined) {
    return controlledValue;
  }
  if (defaultValue !== undefined) {
    return defaultValue;
  }
  return fallback;
}
function createMinimalInitialState(parameters) {
  return _extends$1({
    treeId: undefined,
    focusedItemId: null
  }, deriveStateFromParameters$1(parameters), TreeViewItemsPlugin.buildItemsStateIfNeeded(parameters), {
    expandedItems: applyModelInitialValue(parameters.expandedItems, parameters.defaultExpandedItems, []),
    selectedItems: applyModelInitialValue(parameters.selectedItems, parameters.defaultSelectedItems, parameters.multiSelect ? EMPTY_ARRAY : null)
  });
}
let globalTreeViewDefaultId = 0;
const createTreeViewDefaultId = () => {
  globalTreeViewDefaultId += 1;
  return `mui-tree-view-${globalTreeViewDefaultId}`;
};

class TimeoutManager {
  timeoutIds = (() => new Map())();
  intervalIds = (() => new Map())();
  startTimeout = (key, delay, fn) => {
    this.clearTimeout(key);
    const id = setTimeout(() => {
      this.timeoutIds.delete(key);
      fn();
    }, delay); /* Node.js types are enabled in development */

    this.timeoutIds.set(key, id);
  };
  startInterval = (key, delay, fn) => {
    this.clearTimeout(key);
    const id = setInterval(fn, delay); /* Node.js types are enabled in development */

    this.intervalIds.set(key, id);
  };
  clearTimeout = key => {
    const id = this.timeoutIds.get(key);
    if (id != null) {
      clearTimeout(id);
      this.timeoutIds.delete(key);
    }
  };
  clearInterval = key => {
    const id = this.intervalIds.get(key);
    if (id != null) {
      clearInterval(id);
      this.intervalIds.delete(key);
    }
  };
  clearAll = () => {
    this.timeoutIds.forEach(clearTimeout);
    this.timeoutIds.clear();
    this.intervalIds.forEach(clearInterval);
    this.intervalIds.clear();
  };
}

const TYPEAHEAD_TIMEOUT = 500;
class TreeViewKeyboardNavigationPlugin {
  typeaheadQuery = '';

  // We can't type `store`, otherwise we get the following TS error:
  // 'keyboardNavigation' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.
  constructor(store) {
    this.store = store;
    this.labelMap = createLabelMapFromItemMetaLookup(itemsSelectors.itemMetaLookup(this.store.state));

    // Whenever the itemMetaLookup changes, we need to regen the label map.
    this.store.registerStoreEffect(itemsSelectors.itemMetaLookup, (_, itemMetaLookup) => {
      if (this.store.shouldIgnoreItemsStateUpdate()) {
        return;
      }
      this.labelMap = createLabelMapFromItemMetaLookup(itemMetaLookup);
    });
  }
  canToggleItemSelection = itemId => selectionSelectors.canItemBeSelected(this.store.state, itemId);
  canToggleItemExpansion = itemId => {
    return !itemsSelectors.isItemDisabled(this.store.state, itemId) && expansionSelectors.isItemExpandable(this.store.state, itemId);
  };
  getFirstItemMatchingTypeaheadQuery = (itemId, newKey) => {
    const getNextItem = itemIdToCheck => {
      const nextItemId = getNextNavigableItem(this.store.state, itemIdToCheck);
      // We reached the end of the tree, check from the beginning
      if (nextItemId === null) {
        return getFirstNavigableItem(this.store.state);
      }
      return nextItemId;
    };
    const getNextMatchingItemId = query => {
      let matchingItemId = null;
      const checkedItems = {};
      // If query length > 1, first check if current item matches
      let currentItemId = query.length > 1 ? itemId : getNextItem(itemId);
      // The "!checkedItems[currentItemId]" condition avoids an infinite loop when there is no matching item.
      while (matchingItemId == null && !checkedItems[currentItemId]) {
        const itemLabel = this.labelMap[currentItemId];
        if (itemLabel?.startsWith(query)) {
          matchingItemId = currentItemId;
        } else {
          checkedItems[currentItemId] = true;
          currentItemId = getNextItem(currentItemId);
        }
      }
      return matchingItemId;
    };
    const cleanNewKey = newKey.toLowerCase();

    // Try matching with accumulated query + new key
    const concatenatedQuery = `${this.typeaheadQuery}${cleanNewKey}`;

    // check if the entire typed query matches an item
    const concatenatedQueryMatchingItemId = getNextMatchingItemId(concatenatedQuery);
    if (concatenatedQueryMatchingItemId != null) {
      this.typeaheadQuery = concatenatedQuery;
      return concatenatedQueryMatchingItemId;
    }
    const newKeyMatchingItemId = getNextMatchingItemId(cleanNewKey);
    if (newKeyMatchingItemId != null) {
      this.typeaheadQuery = cleanNewKey;
      return newKeyMatchingItemId;
    }
    this.typeaheadQuery = '';
    return null;
  };

  /**
   * Updates the `labelMap` to add/remove the first character of some item's labels.
   * This map is used to navigate the tree using type-ahead search.
   * This method is only used by the `useTreeViewJSXItems` plugin, otherwise the updates are handled internally.
   * @param {(map: TreeViewLabelMap) => TreeViewLabelMap} updater The function to update the map.
   */
  updateLabelMap = callback => {
    this.labelMap = callback(this.labelMap);
  };

  // ARIA specification: https://www.w3.org/WAI/ARIA/apg/patterns/treeview/#keyboardinteraction
  /**
   * Callback fired when a key is pressed on an item.
   * Handles all the keyboard navigation logic.
   * @param {React.KeyboardEvent<HTMLElement> & TreeViewCancellableEvent} event The keyboard event that triggered the callback.
   * @param {TreeViewItemId} itemId The id of the item that the event was triggered on.
   */
  handleItemKeyDown = async (event, itemId) => {
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.altKey || isTargetInDescendants(event.target, event.currentTarget)) {
      return;
    }
    const ctrlPressed = event.ctrlKey || event.metaKey;
    const key = event.key;
    const isMultiSelectEnabled = selectionSelectors.isMultiSelectEnabled(this.store.state);

    // eslint-disable-next-line default-case
    switch (true) {
      // Select the item when pressing "Space"
      case key === ' ' && this.canToggleItemSelection(itemId):
        {
          event.preventDefault();
          if (isMultiSelectEnabled && event.shiftKey) {
            this.store.selection.expandSelectionRange(event, itemId);
          } else {
            this.store.selection.setItemSelection({
              event,
              itemId,
              keepExistingSelection: isMultiSelectEnabled,
              shouldBeSelected: undefined
            });
          }
          break;
        }

      // If the focused item has children, we expand it.
      // If the focused item has no children, we select it.
      case key === 'Enter':
        {
          if (this.store.labelEditing?.setEditedItem && labelSelectors.isItemEditable(this.store.state, itemId) && !labelSelectors.isItemBeingEdited(this.store.state, itemId)) {
            this.store.labelEditing.setEditedItem(itemId);
          } else if (this.canToggleItemExpansion(itemId)) {
            this.store.expansion.setItemExpansion({
              event,
              itemId
            });
            event.preventDefault();
          } else if (this.canToggleItemSelection(itemId)) {
            if (isMultiSelectEnabled) {
              event.preventDefault();
              this.store.selection.setItemSelection({
                event,
                itemId,
                keepExistingSelection: true
              });
            } else if (!selectionSelectors.isItemSelected(this.store.state, itemId)) {
              this.store.selection.setItemSelection({
                event,
                itemId
              });
              event.preventDefault();
            }
          }
          break;
        }

      // Focus the next focusable item
      case key === 'ArrowDown':
        {
          const nextItem = getNextNavigableItem(this.store.state, itemId);
          if (nextItem) {
            event.preventDefault();
            this.store.focus.focusItem(event, nextItem);

            // Multi select behavior when pressing Shift + ArrowDown
            // Toggles the selection state of the next item
            if (isMultiSelectEnabled && event.shiftKey && this.canToggleItemSelection(nextItem)) {
              this.store.selection.selectItemFromArrowNavigation(event, itemId, nextItem);
            }
          }
          break;
        }

      // Focuses the previous focusable item
      case key === 'ArrowUp':
        {
          const previousItem = getPreviousNavigableItem(this.store.state, itemId);
          if (previousItem) {
            event.preventDefault();
            this.store.focus.focusItem(event, previousItem);

            // Multi select behavior when pressing Shift + ArrowUp
            // Toggles the selection state of the previous item
            if (isMultiSelectEnabled && event.shiftKey && this.canToggleItemSelection(previousItem)) {
              this.store.selection.selectItemFromArrowNavigation(event, itemId, previousItem);
            }
          }
          break;
        }

      // If the focused item is expanded, we move the focus to its first child
      // If the focused item is collapsed and has children, we expand it
      case key === 'ArrowRight' && !this.store.parameters.isRtl || key === 'ArrowLeft' && this.store.parameters.isRtl:
        {
          if (ctrlPressed) {
            return;
          }
          if (expansionSelectors.isItemExpanded(this.store.state, itemId)) {
            const nextItemId = getNextNavigableItem(this.store.state, itemId);
            if (nextItemId) {
              this.store.focus.focusItem(event, nextItemId);
              event.preventDefault();
            }
          } else if (this.canToggleItemExpansion(itemId)) {
            this.store.expansion.setItemExpansion({
              event,
              itemId
            });
            event.preventDefault();
          }
          break;
        }

      // If the focused item is expanded, we collapse it
      // If the focused item is collapsed and has a parent, we move the focus to this parent
      case key === 'ArrowLeft' && !this.store.parameters.isRtl || key === 'ArrowRight' && this.store.parameters.isRtl:
        {
          if (ctrlPressed) {
            return;
          }
          if (this.canToggleItemExpansion(itemId) && expansionSelectors.isItemExpanded(this.store.state, itemId)) {
            this.store.expansion.setItemExpansion({
              event,
              itemId
            });
            event.preventDefault();
          } else {
            const parent = itemsSelectors.itemParentId(this.store.state, itemId);
            if (parent) {
              this.store.focus.focusItem(event, parent);
              event.preventDefault();
            }
          }
          break;
        }

      // Focuses the first item in the tree
      case key === 'Home':
        {
          // Multi select behavior when pressing Ctrl + Shift + Home
          // Selects the focused item and all items up to the first item.
          if (this.canToggleItemSelection(itemId) && isMultiSelectEnabled && ctrlPressed && event.shiftKey) {
            this.store.selection.selectRangeFromStartToItem(event, itemId);
          } else {
            this.store.focus.focusItem(event, getFirstNavigableItem(this.store.state));
          }
          event.preventDefault();
          break;
        }

      // Focuses the last item in the tree
      case key === 'End':
        {
          // Multi select behavior when pressing Ctrl + Shirt + End
          // Selects the focused item and all the items down to the last item.
          if (this.canToggleItemSelection(itemId) && isMultiSelectEnabled && ctrlPressed && event.shiftKey) {
            this.store.selection.selectRangeFromItemToEnd(event, itemId);
          } else {
            this.store.focus.focusItem(event, getLastNavigableItem(this.store.state));
          }
          event.preventDefault();
          break;
        }

      // Expand all siblings that are at the same level as the focused item
      case key === '*':
        {
          this.store.expansion.expandAllSiblings(event, itemId);
          event.preventDefault();
          break;
        }

      // Multi select behavior when pressing Ctrl + a
      // Selects all the items
      case String.fromCharCode(event.keyCode) === 'A' && ctrlPressed && isMultiSelectEnabled && selectionSelectors.enabled(this.store.state):
        {
          this.store.selection.selectAllNavigableItems(event);
          event.preventDefault();
          break;
        }

      // Type-ahead
      case !ctrlPressed && !event.shiftKey && isPrintableKey(key):
        {
          this.store.timeoutManager.clearTimeout('typeahead');
          const matchingItem = this.getFirstItemMatchingTypeaheadQuery(itemId, key);
          if (matchingItem != null) {
            this.store.focus.focusItem(event, matchingItem);
            event.preventDefault();
          } else {
            this.typeaheadQuery = '';
          }
          this.store.timeoutManager.startTimeout('typeahead', TYPEAHEAD_TIMEOUT, () => {
            this.typeaheadQuery = '';
          });
          break;
        }
    }
  };
}
function isPrintableKey(string) {
  return !!string && string.length === 1 && !!string.match(/\S/);
}
function createLabelMapFromItemMetaLookup(itemMetaLookup) {
  const labelMap = {};
  const processItem = item => {
    labelMap[item.id] = item.label.toLowerCase();
  };
  Object.values(itemMetaLookup).forEach(processItem);
  return labelMap;
}

/**
 * Manages the registration and application of plugins for the Tree Item.
 * This will be replaced with a proper implementation in the future.
 */
class TreeViewItemPluginManager {
  itemPlugins = [];
  itemWrappers = [];
  register = (plugin, wrapItem) => {
    this.itemPlugins.push(plugin);
    if (wrapItem) {
      this.itemWrappers.push(wrapItem);
    }
  };
  listPlugins = () => this.itemPlugins;
  listWrappers = () => this.itemWrappers;
}

class MinimalTreeViewStore extends Store {
  initialParameters = null;
  eventManager = (() => new EventManager())();
  timeoutManager = (() => new TimeoutManager())();
  itemPluginManager = (() => new TreeViewItemPluginManager())();
  constructor(parameters, instanceName, mapper) {
    const minimalInitialState = createMinimalInitialState(parameters);
    const initialState = mapper.getInitialState(minimalInitialState, parameters);
    super(initialState);
    this.parameters = parameters;
    this.instanceName = instanceName;
    this.mapper = mapper;

    // We mount the plugins in the constructor to make sure all the methods of the store are available to the plugins during their construction.
    this.items = new TreeViewItemsPlugin(this);
    this.focus = new TreeViewFocusPlugin(this);
    this.expansion = new TreeViewExpansionPlugin(this);
    this.selection = new TreeViewSelectionPlugin(this);
    this.keyboardNavigation = new TreeViewKeyboardNavigationPlugin(this);
    if (process.env.NODE_ENV !== 'production') {
      this.initialParameters = parameters;
    }
  }

  /**
   * Builds an object containing the method that should be exposed publicly by the Tree View components.
   */
  buildPublicAPI() {
    return _extends$1({}, this.items.buildPublicAPI(), this.focus.buildPublicAPI(), this.expansion.buildPublicAPI(), this.selection.buildPublicAPI());
  }

  /**
   * Updates the state of the Tree View based on the new parameters provided to the root component.
   */
  updateStateFromParameters(parameters) {
    const updateModel = (mutableNewState, controlledProp, defaultProp) => {
      if (parameters[controlledProp] !== undefined) {
        mutableNewState[controlledProp] = parameters[controlledProp];
      }
      if (process.env.NODE_ENV !== 'production') {
        const defaultValue = parameters[defaultProp];
        const isControlled = parameters[controlledProp] !== undefined;
        const initialDefaultValue = this.initialParameters?.[defaultProp];
        const initialIsControlled = this.initialParameters?.[controlledProp] !== undefined;
        if (initialIsControlled !== isControlled) {
          warnOnce([`MUI X Tree View: A component is changing the ${initialIsControlled ? '' : 'un'}controlled ${controlledProp} state of ${this.instanceName} to be ${initialIsControlled ? 'un' : ''}controlled.`, 'Elements should not switch from uncontrolled to controlled (or vice versa).', `Decide between using a controlled or uncontrolled ${controlledProp} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", 'More info: https://fb.me/react-controlled-components'], 'error');
        } else if (JSON.stringify(initialDefaultValue) !== JSON.stringify(defaultValue)) {
          warnOnce([`MUI X Tree View: A component is changing the default ${controlledProp} state of an uncontrolled ${this.instanceName} after being initialized. `, `To suppress this warning opt to use a controlled ${this.instanceName}.`], 'error');
        }
      }
    };
    const newMinimalState = deriveStateFromParameters$1(parameters);
    updateModel(newMinimalState, 'expandedItems', 'defaultExpandedItems');
    updateModel(newMinimalState, 'selectedItems', 'defaultSelectedItems');
    if (this.state.providedTreeId !== parameters.id || this.state.treeId === undefined) {
      newMinimalState.treeId = createTreeViewDefaultId();
    }
    if (!this.mapper.shouldIgnoreItemsStateUpdate(parameters) && TreeViewItemsPlugin.shouldRebuildItemsState(parameters, this.parameters)) {
      Object.assign(newMinimalState, TreeViewItemsPlugin.buildItemsStateIfNeeded(parameters));
    }
    const newState = this.mapper.updateStateFromParameters(newMinimalState, parameters, updateModel);
    this.update(newState);
    this.parameters = parameters;
  }

  /**
   * Returns a cleanup function that need to be called when the store is destroyed.
   */
  disposeEffect = () => {
    return this.timeoutManager.clearAll;
  };

  /**
   * Whether updates based on `props.items` change should be ignored.
   */
  shouldIgnoreItemsStateUpdate = () => {
    return this.mapper.shouldIgnoreItemsStateUpdate(this.parameters);
  };

  /**
   * Registers an effect to be run when the value returned by the selector changes.
   */
  registerStoreEffect = (selector, effect) => {
    let previousValue = selector(this.state);
    this.subscribe(state => {
      const nextValue = selector(state);
      if (nextValue !== previousValue) {
        effect(previousValue, nextValue);
        previousValue = nextValue;
      }
    });
  };

  /**
   * Publishes an event to all its subscribers.
   */
  publishEvent = (name, params, event) => {
    if (isSyntheticEvent(event) && event.isPropagationStopped()) {
      return;
    }
    this.eventManager.emit(name, params, event);
  };

  /**
   * Subscribe to an event emitted by the store.
   * For now, the subscription is only removed when the store is destroyed.
   */
  subscribeEvent = (eventName, handler) => {
    this.eventManager.on(eventName, handler);
  };
}
function isSyntheticEvent(event) {
  return event.isPropagationStopped !== undefined;
}

const deriveStateFromParameters = parameters => ({
  isItemEditable: parameters.isItemEditable ?? false
});
const parametersToStateMapper = {
  getInitialState: (minimalInitialState, parameters) => _extends$1({}, minimalInitialState, deriveStateFromParameters(parameters), {
    editedItemId: null,
    lazyLoadedItems: null
  }),
  updateStateFromParameters: (newMinimalState, parameters) => {
    const newState = _extends$1({}, newMinimalState, deriveStateFromParameters(parameters));
    return newState;
  },
  shouldIgnoreItemsStateUpdate: () => false
};

class ExtendableRichTreeViewStore extends MinimalTreeViewStore {
  labelEditing = (() => new TreeViewLabelEditingPlugin(this))();

  /**
   * Mapper of the RichTreeViewStore.
   * Can be used by classes extending the RichTreeViewStore to create their own mapper.
   */
  static rawMapper = (() => parametersToStateMapper)();
  buildPublicAPI() {
    return _extends$1({}, super.buildPublicAPI(), this.labelEditing.buildPublicAPI());
  }
}
class RichTreeViewStore extends ExtendableRichTreeViewStore {
  constructor(parameters) {
    super(parameters, 'RichTreeView', parametersToStateMapper);
  }
}

const useThemeProps = createUseThemeProps();
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  return React__namespace.useMemo(() => {
    const slots = {
      root: ['root'],
      item: ['item'],
      itemContent: ['itemContent'],
      itemGroupTransition: ['itemGroupTransition'],
      itemIconContainer: ['itemIconContainer'],
      itemLabel: ['itemLabel'],
      itemLabelInput: ['itemLabelInput'],
      itemCheckbox: ['itemCheckbox']
      // itemDragAndDropOverlay: ['itemDragAndDropOverlay'], => feature not available on this component
      // itemErrorIcon: ['itemErrorIcon'], => feature not available on this component
    };
    return composeClasses(slots, getRichTreeViewUtilityClass, classes);
  }, [classes]);
};
const RichTreeViewRoot = styled('ul', {
  name: 'MuiRichTreeView',
  slot: 'Root'
})({
  padding: 0,
  margin: 0,
  listStyle: 'none',
  outline: 0,
  position: 'relative'
});
/**
 *
 * Demos:
 *
 * - [Tree View](https://mui.com/x/react-tree-view/)
 *
 * API:
 *
 * - [RichTreeView API](https://mui.com/x/api/tree-view/rich-tree-view/)
 */
const RichTreeView = /*#__PURE__*/React__namespace.forwardRef(function RichTreeView(inProps, forwardedRef) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiRichTreeView'
  });
  if (process.env.NODE_ENV !== 'production') {
    if (props.children != null) {
      warnOnce(['MUI X: The Rich Tree View component does not support JSX children.', 'If you want to add items, you need to use the `items` prop.', 'Check the documentation for more details: https://mui.com/x/react-tree-view/rich-tree-view/items/.']);
    }
  }
  const {
    slots,
    slotProps,
    apiRef,
    parameters,
    forwardedProps
  } = useExtractRichTreeViewParameters(props);
  const store = useTreeViewStore(RichTreeViewStore, parameters);
  const ref = React__namespace.useRef(null);
  const handleRef = useMergedRefs(forwardedRef, ref);
  const getRootProps = useTreeViewRootProps(store, forwardedProps, handleRef);
  const classes = useUtilityClasses(props);
  const isLoading = useStore(store, lazyLoadingSelectors.isItemLoading, null);
  const error = useStore(store, lazyLoadingSelectors.itemError, null);
  const Root = slots?.root ?? RichTreeViewRoot;
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps?.root,
    className: classes.root,
    getSlotProps: getRootProps,
    ownerState: props
  });
  if (isLoading) {
    return /*#__PURE__*/jsxRuntime.jsx(Typography, {
      children: "Loading..."
    });
  }
  if (error) {
    return /*#__PURE__*/jsxRuntime.jsx(Alert, {
      severity: "error",
      children: error.message
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx(TreeViewProvider, {
    store: store,
    classes: classes,
    slots: slots,
    slotProps: slotProps,
    apiRef: apiRef,
    rootRef: ref,
    children: /*#__PURE__*/jsxRuntime.jsx(TreeViewItemDepthContext.Provider, {
      value: itemsSelectors.itemDepth,
      children: /*#__PURE__*/jsxRuntime.jsx(Root, _extends$1({}, rootProps, {
        children: /*#__PURE__*/jsxRuntime.jsx(RichTreeViewItems, {
          slots: slots,
          slotProps: slotProps
        })
      }))
    })
  });
});
if (process.env.NODE_ENV !== "production") RichTreeView.displayName = "RichTreeView";
process.env.NODE_ENV !== "production" ? RichTreeView.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The ref object that allows Tree View manipulation. Can be instantiated with `useRichTreeViewApiRef()`.
   */
  apiRef: PropTypes.shape({
    current: PropTypes.shape({
      focusItem: PropTypes.func,
      getItem: PropTypes.func,
      getItemDOMElement: PropTypes.func,
      getItemOrderedChildrenIds: PropTypes.func,
      getItemTree: PropTypes.func,
      getParentId: PropTypes.func,
      isItemExpanded: PropTypes.func,
      setEditedItem: PropTypes.func,
      setIsItemDisabled: PropTypes.func,
      setItemExpansion: PropTypes.func,
      setItemSelection: PropTypes.func,
      updateItemLabel: PropTypes.func
    })
  }),
  /**
   * Whether the Tree View renders a checkbox at the left of its label that allows selecting it.
   * @default false
   */
  checkboxSelection: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * Expanded item ids.
   * Used when the item's expansion is not controlled.
   * @default []
   */
  defaultExpandedItems: PropTypes.arrayOf(PropTypes.string),
  /**
   * Selected item ids. (Uncontrolled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   * @default []
   */
  defaultSelectedItems: PropTypes.any,
  /**
   * Whether the items should be focusable when disabled.
   * @default false
   */
  disabledItemsFocusable: PropTypes.bool,
  /**
   * Whether selection is disabled.
   * @default false
   */
  disableSelection: PropTypes.bool,
  /**
   * Expanded item ids.
   * Used when the item's expansion is controlled.
   */
  expandedItems: PropTypes.arrayOf(PropTypes.string),
  /**
   * The slot that triggers the item's expansion when clicked.
   * @default 'content'
   */
  expansionTrigger: PropTypes.oneOf(['content', 'iconContainer']),
  /**
   * Used to determine the children of a given item.
   *
   * @template R
   * @param {R} item The item to check.
   * @returns {R[]} The children of the item.
   * @default (item) => item.children
   */
  getItemChildren: PropTypes.func,
  /**
   * Used to determine the id of a given item.
   *
   * @template R
   * @param {R} item The item to check.
   * @returns {TreeViewItemId} The id of the item.
   * @default (item) => item.id
   */
  getItemId: PropTypes.func,
  /**
   * Used to determine the string label for a given item.
   *
   * @template R
   * @param {R} item The item to check.
   * @returns {string} The label of the item.
   * @default (item) => item.label
   */
  getItemLabel: PropTypes.func,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: PropTypes.string,
  /**
   * Used to determine if a given item should be disabled.
   * @template R
   * @param {R} item The item to check.
   * @returns {boolean} `true` if the item should be disabled.
   */
  isItemDisabled: PropTypes.func,
  /**
   * Determine if a given item can be edited.
   * @template R
   * @param {R} item The item to check.
   * @returns {boolean} `true` if the item can be edited.
   * @default () => false
   */
  isItemEditable: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  /**
   * Used to determine if a given item should have selection disabled.
   * @template R
   * @param {R} item The item to check.
   * @returns {boolean} `true` if the item should have selection disabled.
   */
  isItemSelectionDisabled: PropTypes.func,
  /**
   * Horizontal indentation between an item and its children.
   * Examples: 24, "24px", "2rem", "2em".
   * @default 12px
   */
  itemChildrenIndentation: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  items: PropTypes.array.isRequired,
  /**
   * Whether multiple items can be selected.
   * @default false
   */
  multiSelect: PropTypes.bool,
  /**
   * Callback fired when Tree Items are expanded/collapsed.
   * @param {React.SyntheticEvent} event The DOM event that triggered the change. Can be null when the change is caused by the `publicAPI.setItemExpansion()` method.
   * @param {TreeViewItemId[]} itemIds The ids of the expanded items.
   */
  onExpandedItemsChange: PropTypes.func,
  /**
   * Callback fired when the `content` slot of a given Tree Item is clicked.
   * @param {React.MouseEvent} event The DOM event that triggered the change.
   * @param {TreeViewItemId} itemId The id of the focused item.
   */
  onItemClick: PropTypes.func,
  /**
   * Callback fired when a Tree Item is expanded or collapsed.
   * @param {React.SyntheticEvent | null} event The DOM event that triggered the change. Can be null when the change is caused by the `publicAPI.setItemExpansion()` method.
   * @param {TreeViewItemId} itemId The itemId of the modified item.
   * @param {boolean} isExpanded `true` if the item has just been expanded, `false` if it has just been collapsed.
   */
  onItemExpansionToggle: PropTypes.func,
  /**
   * Callback fired when a given Tree Item is focused.
   * @param {React.SyntheticEvent | null} event The DOM event that triggered the change. **Warning**: This is a generic event not a focus event.
   * @param {TreeViewItemId} itemId The id of the focused item.
   */
  onItemFocus: PropTypes.func,
  /**
   * Callback fired when the label of an item changes.
   * @param {TreeViewItemId} itemId The id of the item that was edited.
   * @param {string} newLabel The new label of the items.
   */
  onItemLabelChange: PropTypes.func,
  /**
   * Callback fired when a Tree Item is selected or deselected.
   * @param {React.SyntheticEvent} event The DOM event that triggered the change. Can be null when the change is caused by the `publicAPI.setItemSelection()` method.
   * @param {TreeViewItemId} itemId The itemId of the modified item.
   * @param {boolean} isSelected `true` if the item has just been selected, `false` if it has just been deselected.
   */
  onItemSelectionToggle: PropTypes.func,
  /**
   * Callback fired when Tree Items are selected/deselected.
   * @param {React.SyntheticEvent} event The DOM event that triggered the change. Can be null when the change is caused by the `publicAPI.setItemSelection()` method.
   * @param {TreeViewItemId[] | TreeViewItemId} itemIds The ids of the selected items.
   * When `multiSelect` is `true`, this is an array of strings; when false (default) a string.
   */
  onSelectedItemsChange: PropTypes.func,
  /**
   * Selected item ids. (Controlled)
   * When `multiSelect` is true this takes an array of strings; when false (default) a string.
   */
  selectedItems: PropTypes.any,
  /**
   * When `selectionPropagation.descendants` is set to `true`.
   *
   * - Selecting a parent selects all its descendants automatically.
   * - Deselecting a parent deselects all its descendants automatically.
   *
   * When `selectionPropagation.parents` is set to `true`.
   *
   * - Selecting all the descendants of a parent selects the parent automatically.
   * - Deselecting a descendant of a selected parent deselects the parent automatically.
   *
   * Only works when `multiSelect` is `true`.
   * On the <SimpleTreeView />, only the expanded items are considered (since the collapsed item are not passed to the Tree View component at all)
   *
   * @default { parents: false, descendants: false }
   */
  selectionPropagation: PropTypes.shape({
    descendants: PropTypes.bool,
    parents: PropTypes.bool
  }),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

const useTreeItemModel = itemId => {
  const {
    store
  } = useTreeViewContext();
  return useStore(store, itemsSelectors.itemModel, itemId);
};

const SectionTreeItem = /*#__PURE__*/React__namespace.forwardRef(function SectionTreeItem(itemProps, ref) {
  var _item$type, _item$children, _item$child_items;
  const isHeader = itemProps.itemId === "0" || itemProps.itemId === "101";
  const item = useTreeItemModel(itemProps.itemId);
  const itemType = String((_item$type = item === null || item === void 0 ? void 0 : item.type) !== null && _item$type !== void 0 ? _item$type : '').toLowerCase();
  const isNone = itemType === 'none';
  const hasChildren = (item === null || item === void 0 || (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.length) > 0;
  const pageLink = item === null || item === void 0 || (_item$child_items = item.child_items) === null || _item$child_items === void 0 || (_item$child_items = _item$child_items[0]) === null || _item$child_items === void 0 ? void 0 : _item$child_items.page;
  const hasExternalPage = typeof pageLink === 'string' && pageLink.trim() !== '' && pageLink !== 'LINK HERE';
  return /*#__PURE__*/React__namespace.createElement(TreeItem, _extends$2({
    className: "item"
  }, itemProps, {
    ref: ref,
    sx: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
      width: "100%",
      color: 'white',
      '& > .MuiTreeItem-content.Mui-selected, & > .MuiTreeItem-content.Mui-selected:hover, & > .MuiTreeItem-content.Mui-selected.Mui-focused': {
        backgroundColor: '#bfdbfe !important',
        color: '#1a5e80 !important'
      }
    }, isHeader && {
      '& > .MuiTreeItem-content': {
        backgroundColor: 'white',
        borderRadius: '8px',
        color: '#002366',
        fontSize: '1.1rem',
        fontWeight: 600,
        margin: '4px 8px',
        width: 'calc(100% - 16px)'
      }
    }), isNone && !hasChildren && !hasExternalPage && {
      '& > .MuiTreeItem-content': {
        pointerEvents: 'none',
        cursor: 'default',
        backgroundColor: 'transparent !important',
        color: 'white !important'
      },
      '& > .MuiTreeItem-content:hover, & > .MuiTreeItem-content.Mui-focused, & > .MuiTreeItem-content:active, & > .MuiTreeItem-content.Mui-selected, & > .MuiTreeItem-content.Mui-selected:hover': {
        backgroundColor: 'transparent !important',
        color: 'white !important'
      }
    }), isNone && hasChildren && !hasExternalPage && {
      '& > .MuiTreeItem-content': {
        cursor: 'default'
      },
      '& > .MuiTreeItem-content .MuiTreeItem-label': {
        pointerEvents: 'none',
        cursor: 'default'
      }
    }), isNone && hasExternalPage && {
      '& > .MuiTreeItem-content, & > .MuiTreeItem-content .MuiTreeItem-label': {
        pointerEvents: 'auto',
        cursor: 'pointer'
      }
    }), isNone && {
      '& > .MuiTreeItem-content:hover, & > .MuiTreeItem-content.Mui-focused': {
        backgroundColor: 'transparent !important'
      }
    }),
    slotProps: {}
  }));
});

function SectionTreeView(_ref) {
  let {
    data,
    section
  } = _ref;
  // Hooks
  const {
    selectedItem,
    setSelected
  } = useSelectionContext();

  //Helpers
  const createMap = function (data) {
    let map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    data.forEach(item => {
      map[item.id] = item;
      if (item.children && item.children.length > 0) {
        createMap(item.children, map);
      }
    });
    return map;
  };
  const convertIdsToStrings = items => {
    return items.map(item => _objectSpread2(_objectSpread2({}, item), {}, {
      id: String(item.id),
      children: item.children ? convertIdsToStrings(item.children) : []
    }));
  };
  function findItem(id, map) {
    const selectedItem = map[id];
    return selectedItem;
  }

  // In-component variable

  const map = createMap(data);
  const stringIdData = convertIdsToStrings(data);
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(RichTreeView, {
    items: stringIdData,
    selectedItems: selectedItem !== null && selectedItem !== void 0 && selectedItem.id ? String(selectedItem.id) : '',
    onItemClick: (event, itemId) => {
      var _item$type, _item$child_items;
      // Find the element within data
      const item = findItem(itemId, map);
      const itemType = String((_item$type = item === null || item === void 0 ? void 0 : item.type) !== null && _item$type !== void 0 ? _item$type : '').toLowerCase();
      const pageLink = item === null || item === void 0 || (_item$child_items = item.child_items) === null || _item$child_items === void 0 || (_item$child_items = _item$child_items[0]) === null || _item$child_items === void 0 ? void 0 : _item$child_items.page;
      const hasExternalPage = typeof pageLink === 'string' && pageLink.trim() !== '' && pageLink !== 'LINK HERE';

      // Open valid external links regardless of item type.
      if (hasExternalPage) {
        window.open(pageLink, '_blank', 'noopener,noreferrer');
      } else if (itemType === 'none') {
        return;
      } else {
        setSelected(item);
      }
    },
    sx: {
      width: "100%"
    },
    slotProps: {
      treeItem: {}
    },
    slots: {
      expandIcon: () => /*#__PURE__*/React.createElement("div", null, " + "),
      collapseIcon: () => /*#__PURE__*/React.createElement("div", null, " - "),
      item: SectionTreeItem
    }
  }));
}

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React$1.createContext && /*#__PURE__*/React$1.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/React$1.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/React$1.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/React$1.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/React$1.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/React$1.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function HiMenu (props) {
  return GenIcon({"attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
}

/**
 * A slide-in menu component that displays tree views for one or more sections.
 *
 * @typedef {object} SectionMenuProps
 * @property {Array<{id: string, title: string, data: Array}>} sections - Sections from lab_data.json
 *
 * @returns {JSX.Element} A slide-in menu with one tree view per section
 */
function MobileMenu(_ref) {
  let {
    sections
  } = _ref;
  const [open, setOpen] = React$1.useState(false);
  const menu = /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement("button", {
    onClick: () => setOpen(true),
    "aria-label": "Open menu",
    className: "z-50 bg-white rounded p-2 shadow transition",
    style: {
      position: "fixed",
      left: "1rem",
      top: "1rem"
    }
  }, /*#__PURE__*/React$1.createElement(HiMenu, {
    size: 20,
    color: "black"
  })), open && /*#__PURE__*/React$1.createElement("div", {
    onClick: () => setOpen(false),
    style: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.45)",
      zIndex: 999
    }
  }), /*#__PURE__*/React$1.createElement("aside", {
    className: "flex flex-col top-0 left-0 w-72 bg-[#1a5e80] shadow-xl overflow-y-auto",
    style: {
      position: "fixed",
      height: "100vh",
      transform: open ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform 300ms ease-in-out',
      zIndex: 1000
    }
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "flex flex-col gap-2 px-4 py-3 border-b border-white/20 sticky top-0 bg-[#1a5e80] z-10"
  }, /*#__PURE__*/React$1.createElement("a", {
    href: "",
    className: "block w-full text-center px-4 py-2 bg-white hover:bg-gray-100 text-[#1a5e80] font-semibold rounded-lg shadow text-sm"
  }, "Main Menu"), /*#__PURE__*/React$1.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React$1.createElement("span", {
    className: "text-white font-semibold text-base"
  }, "Menu"), /*#__PURE__*/React$1.createElement("button", {
    onClick: () => setOpen(false),
    "aria-label": "Close menu",
    className: "flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 transition"
  }, /*#__PURE__*/React$1.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "white",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React$1.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React$1.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))))), /*#__PURE__*/React$1.createElement("nav", {
    className: "w-full"
  }, sections.map(section => /*#__PURE__*/React$1.createElement(SectionTreeView, {
    key: section.id,
    className: "tree",
    section: section.title,
    data: section.data
  })))));
  return /*#__PURE__*/ReactDOM.createPortal(menu, document.body);
}
function DesktopMenu(_ref2) {
  let {
    sections
  } = _ref2;
  return /*#__PURE__*/React$1.createElement("aside", {
    className: "flex flex-col h-full w-72 bg-[#1a5e80] shadow-md overflow-auto"
  }, /*#__PURE__*/React$1.createElement("div", {
    className: "px-4 py-3 border-b border-white/20"
  }, /*#__PURE__*/React$1.createElement("a", {
    href: "",
    className: "block w-full text-center px-4 py-2 bg-white hover:bg-gray-100 text-[#1a5e80] font-semibold rounded-lg shadow text-sm"
  }, "Main Menu")), /*#__PURE__*/React$1.createElement("nav", {
    className: "w-full flex-1"
  }, sections.map(section => /*#__PURE__*/React$1.createElement(SectionTreeView, {
    key: section.id,
    className: "tree",
    section: section.title,
    data: section.data
  }))));
}
function SectionMenu(_ref3) {
  let {
    sections
  } = _ref3;
  const [isMobile, setIsMobile] = React$1.useState(false);
  React$1.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 850);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, isMobile ? /*#__PURE__*/React$1.createElement(MobileMenu, {
    sections: sections
  }) : /*#__PURE__*/React$1.createElement(DesktopMenu, {
    sections: sections
  }));
}

/**
 * A slide-in menu component that displays a tree view for section navigation.
 *
 * @typedef {object} SectionMenuImproveProps
 * @property {object|Array<object>} data - Section data object with title and data array, or array of section items
 * @property {string} [data.title] - Section title (if data is an object)
 * @property {Array<object>} [data.data] - Array of section items (if data is an object)
 * @property {object} selectedItem - Currently selected item from the tree
 * @property {function} onSelect - Callback function when an item is selected
 * 
 * @returns {JSX.Element} A slide-in menu with tree navigation
 */

function SectionMenuImprove(_ref) {
  let {
    data,
    selectedItem,
    onSelect
  } = _ref;
  //Is the menu open?
  const [open, setOpen] = React$1.useState(false);

  // Hooks

  //Helpers
  // week 1 and 2 will be dictionaries with names
  console.log("Rendering with open =", open);
  const menu = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      console.log("Button clicked, open is:", open);
      setOpen(true);
    },
    className: "z-50 bg-white rounded p-2 transition ",
    style: {
      position: "fixed",
      left: "1rem",
      top: "1rem"
    }
  }, /*#__PURE__*/React.createElement(HiMenu, {
    size: 20,
    color: "black"
  })), /*#__PURE__*/React.createElement("aside", {
    className: "top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300",
    style: {
      position: "fixed",
      transform: open ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform 300ms ease-in-out',
      height: "100vh",
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setOpen(false);
    },
    className: "bg-white rounded p-2 transition",
    style: {
      position: 'absolute',
      right: 0,
      border: 'none',
      borderRadius: '4px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "black",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement(SelectionContextProvider, {
    value: {
      selectedItem,
      setSelected: onSelect
    }
  }, /*#__PURE__*/React.createElement(SectionTreeView, {
    className: "tree",
    section: (data === null || data === void 0 ? void 0 : data.title) || "Section",
    data: Array.isArray(data) ? data : (data === null || data === void 0 ? void 0 : data.data) || []
  })))));
  return /*#__PURE__*/ReactDOM.createPortal(menu, document.body);
}

/**
 * A component that displays video content in an iframe.
 * Loads video URLs from the selected item's 'child_items'.
 *
 * @returns {JSX.Element} An iframe displaying video content or a "No data" message
 */

function VideoPlayer() {
  const {
    selectedItem
  } = useSelectionContext();
  const [videoSource, setSource] = React$1.useState('');
  React$1.useEffect(() => {
    var _selectedItem$child_i;
    const newSource = selectedItem === null || selectedItem === void 0 || (_selectedItem$child_i = selectedItem.child_items) === null || _selectedItem$child_i === void 0 || (_selectedItem$child_i = _selectedItem$child_i[0]) === null || _selectedItem$child_i === void 0 ? void 0 : _selectedItem$child_i.video_link;
    setSource(newSource);
  }, [selectedItem]);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center fit-content bg-black h-screen pb-24"
  }, videoSource ? /*#__PURE__*/React.createElement("iframe", {
    id: "kaltura_player",
    src: videoSource,
    width: "608",
    height: "402",
    allowFullScreen: true,
    allow: "autoplay *; fullscreen *; encrypted-media *",
    sandbox: "allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation",
    style: {
      border: 'none'
    },
    title: "Muscles 11 - Lower Leg"
  }) : /*#__PURE__*/React.createElement("div", null, "No data"));
  // <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/1157612/sp/115761200/embedIframeJs/uiconf_id/41338032/partner_id/1157612?iframeembed=true&amp;playerId=kaltura_player&amp;entry_id=1_ihtaix6d&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&amp;wid=1_mcfzu0dd" width="608" height="402" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Anterior View of the Skull - Anat &amp; Physiology BONES"></iframe>
}

// THIS FILE IS AUTO GENERATED
function FaVolumeUp (props) {
  return GenIcon({"attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},"child":[]}]})(props);
}

/**
 * A component that displays images with navigation buttons and audio playback.
 * Allows users to switch between different image views and play associated audio.
 *
 * @returns {JSX.Element} An image viewer with navigation buttons and audio controls
 */

function ImgWindow() {
  const {
    selectedItem
  } = useSelectionContext();
  const [img, setImg] = React$1.useState(null);

  // Reset the displayed image whenever the selected item changes
  React$1.useEffect(() => {
    var _selectedItem$buttons;
    const firstImg = selectedItem === null || selectedItem === void 0 || (_selectedItem$buttons = selectedItem.buttons) === null || _selectedItem$buttons === void 0 || (_selectedItem$buttons = _selectedItem$buttons[0]) === null || _selectedItem$buttons === void 0 ? void 0 : _selectedItem$buttons.img;
    setImg(typeof firstImg === 'string' ? firstImg : null);
  }, [selectedItem]);

  // Functions
  function playSound() {
    const sound = selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.sound;
    if (!sound) return;
    const audio = new Audio();
    audio.src = sound;
    audio.load();
    audio.play().catch(err => {
      console.error('Audio playback failed:', err, '| src:', audio.src);
    });
  }

  // vars and helpers
  const buttons = (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.buttons) || [];

  // JSX
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full h-screen overflow-hidden flex items-center flex-col bg-black"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 px-6 pt-4 pb-2 w-full justify-center"
  }, buttons.map((button, index) => {
    return button.label ? /*#__PURE__*/React.createElement("button", {
      className: "bg-gray-600 hover:bg-gray-300 px-3 py-1 min-h-7 w-auto max-w-full text-white text-sm leading-tight whitespace-normal break-words rounded",
      key: index,
      onClick: () => button.img ? setImg(button.img) : null
    }, button.label) : null;
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => playSound(),
    className: "w-auto min-h-7 bg-gray-600 py-2 px-4 flex justify-center rounded"
  }, /*#__PURE__*/React.createElement(FaVolumeUp, {
    size: 20,
    color: "white",
    padding: 0,
    margin: 0
  }))), /*#__PURE__*/React.createElement("div", {
    className: "px-6 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-xl mb-2 text-white"
  }, selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label)), /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-5xl h-[65vh] px-4 flex items-center justify-center overflow-hidden"
  }, img ? /*#__PURE__*/React.createElement("img", {
    className: "max-w-full max-h-full w-auto h-auto object-contain",
    key: img,
    src: img,
    alt: (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.label) || 'image'
  }) : /*#__PURE__*/React.createElement("div", {
    className: "text-white"
  }, "No image available")));
}

/**
 * A component that displays lecture content in an iframe.
 * Loads HTML pages from the selected item's buttons.
 *
 * @returns {JSX.Element} An iframe displaying lecture content
 */

function Lecture() {
  const {
    selectedItem
  } = useSelectionContext();
  const [pageSource, setSource] = React$1.useState('');
  React$1.useEffect(() => {
    var _selectedItem$child_i;
    const newSource = (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.load) || (selectedItem === null || selectedItem === void 0 || (_selectedItem$child_i = selectedItem.child_items) === null || _selectedItem$child_i === void 0 || (_selectedItem$child_i = _selectedItem$child_i[0]) === null || _selectedItem$child_i === void 0 ? void 0 : _selectedItem$child_i.load);
    setSource(newSource);
  }, [selectedItem]);
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full"
  }, /*#__PURE__*/React.createElement("iframe", {
    src: pageSource,
    className: "w-full h-full",
    style: {
      border: "none"
    },
    allowFullScreen: true,
    title: "4_1_1_intro_bone_anat"
  }));
}

/**
 * A component that renders different content types based on the selected item.
 * Displays ImgWindow, VideoPlayer, or Lecture components depending on the item type.
 *
 * @returns {JSX.Element} A content window that renders the appropriate component
 */

function ContentWindow() {
  const {
    selectedItem,
    setSelected,
    allItems
  } = useSelectionContext();
  const [toastMessage, setToastMessage] = React$1.useState('');
  const toastTimeout = React$1.useRef(null);
  const showToast = message => {
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    setToastMessage(message);
    toastTimeout.current = setTimeout(() => setToastMessage(''), 2000);
  };
  const clickHandlerPrev = () => {
    const curItemIndex = allItems.findIndex(item => item.id === selectedItem.id);
    if (curItemIndex <= 0) {
      showToast('No previous item');
      return;
    }

    // Walk backwards to find the nearest non-"none" item
    let prevIndex = curItemIndex - 1;
    while (prevIndex >= 0 && ((_allItems$prevIndex = allItems[prevIndex]) === null || _allItems$prevIndex === void 0 ? void 0 : _allItems$prevIndex.type) === "none") {
      var _allItems$prevIndex;
      prevIndex--;
    }
    if (prevIndex <= 0) {
      showToast('No previous item');
      return;
    }
    setSelected(allItems[prevIndex]);
  };
  const clickHandlerNext = () => {
    const curItemIndex = allItems.findIndex(item => item.id === selectedItem.id);
    if (curItemIndex === -1) {
      // ← only block if item not found
      return;
    }

    // Walk forwards to find the nearest non-"none" item
    let nextIndex = curItemIndex + 1;
    while (nextIndex < allItems.length && ((_allItems$nextIndex = allItems[nextIndex]) === null || _allItems$nextIndex === void 0 ? void 0 : _allItems$nextIndex.type) === "none") {
      var _allItems$nextIndex;
      // ← < not >=
      nextIndex++;
    }
    if (nextIndex >= allItems.length) {
      showToast('No next item');
      return;
    }
    setSelected(allItems[nextIndex]);
  };
  React$1.useEffect(() => {
    console.log('Selection updated:', selectedItem);
  }, [selectedItem]);
  function renderContent() {
    if ((selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.type) === 'img') {
      return /*#__PURE__*/React.createElement(ImgWindow, null);
    } else if ((selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.type) === 'video') {
      return /*#__PURE__*/React.createElement(VideoPlayer, null);
    } else {
      return /*#__PURE__*/React.createElement(Lecture, null);
    }
  }

  // Early return if no item
  if (!selectedItem) {
    return /*#__PURE__*/React.createElement("div", {
      className: "bg-red-50 w-64 h-10"
    }, "Select and item"); // or return <div>Select an item</div>
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "relative w-full h-full"
  }, toastMessage && /*#__PURE__*/React.createElement("div", {
    className: "absolute top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded z-20"
  }, toastMessage), /*#__PURE__*/React.createElement("button", {
    className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#1a5e80] text-white p-2 rounded w-6 h-24 m-2",
    onClick: clickHandlerPrev
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: "mx-auto"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }))), renderContent(), /*#__PURE__*/React.createElement("button", {
    className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#1a5e80] text-white p-2 rounded w-6 h-24 m-2",
    onClick: clickHandlerNext
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: "mx-auto"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  }))));
}

exports.ContentWindow = ContentWindow;
exports.Header = Header;
exports.ImgWindow = ImgWindow;
exports.Lecture = Lecture;
exports.SectionMenu = SectionMenu;
exports.SectionMenuImprove = SectionMenuImprove;
exports.SectionTreeItem = SectionTreeItem;
exports.SectionTreeView = SectionTreeView;
exports.SelectionContextProvider = SelectionContextProvider;
exports.VideoPlayer = VideoPlayer;
exports.useSelectionContext = useSelectionContext;
//# sourceMappingURL=index.cjs.map
