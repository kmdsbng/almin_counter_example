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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// LICENSE : MIT


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Payload =
/**
 * @param {*} type
 */
exports.Payload = function Payload(_ref) {
    var type = _ref.type;

    _classCallCheck(this, Payload);

    this.type = type;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(38);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {// LICENSE : MIT


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Dispatcher = exports.ON_DISPATCH = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _assert = __webpack_require__(1);

var assert = _interopRequireWildcard(_assert);

var _events = __webpack_require__(35);

var _DispatcherPayloadMeta = __webpack_require__(5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * @private
 */
var ON_DISPATCH = exports.ON_DISPATCH = "__ON_DISPATCH__";
/**
 * Dispatcher is the **central** event bus system.
 *
 * `Dispatcher` class  have these method.
 *
 * - `onDispatch(function(payload){ });`
 * - `dispatch(payload);`
 *
 * It is similar with EventEmitter of Node.js
 * But, Dispatcher use `payload` object as arguments.
 *
 * ## Payload
 *
 * `payload` object must have `type` property.
 * Following object is a minimal `payload` object.
 *
 * ```json
 * {
 *     "type": "type"
 * }
 * ```
 *
 * Also, You can put any property to payload object.
 *
 * ```json
 * {
 *     "type": "show",
 *     "value": "value"
 * }
 * ```
 *
 * ### FAQ
 *
 * Q. Why Almin use `payload` object instead `emit(key, ...args)`?
 *
 * A. It is for optimization and limitation.
 * If apply emit style, we should cast `...args` for passing other dispatcher at every time.
 * So, Almin use `payload` object instead of it without casting.
 */

var Dispatcher = exports.Dispatcher = function (_EventEmitter) {
    _inherits(Dispatcher, _EventEmitter);

    /**
     * if `v` is instance of Dispatcher, return true
     */
    Dispatcher.isDispatcher = function isDispatcher(v) {
        if (v instanceof Dispatcher) {
            return true;
        } else if ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && typeof v.onDispatch === "function" && typeof v.dispatch === "function") {
            return true;
        }
        return false;
    };
    /**
     * constructor not have arguments.
     **/


    function Dispatcher() {
        _classCallCheck(this, Dispatcher);

        // suppress: memory leak warning of EventEmitter
        // Dispatcher can listen more than 10 events
        var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

        _this.setMaxListeners(0);
        return _this;
    }
    /**
     * Add `handler`(subscriber) to Dispatcher and return unsubscribe function
     *
     * ### Example
     *
     * ```js
     * const dispatcher = new Dispatcher();
     * const unsubscribe = dispatcher.onDispatch((payload, meta) => {});
     * unsubscribe(); // release handler
     * ```
     */


    Dispatcher.prototype.onDispatch = function onDispatch(handler) {
        this.on(ON_DISPATCH, handler);
        return this.removeListener.bind(this, ON_DISPATCH, handler);
    };
    /**
     * Dispatch `payload` to subscribers.
     */


    Dispatcher.prototype.dispatch = function dispatch(payload, meta) {
        if (process.env.NODE_ENV !== "production") {
            assert.ok(payload !== undefined && payload !== null, "payload should not null or undefined");
            assert.ok(typeof payload.type !== "undefined", "payload's `type` should be required");
            if (meta !== undefined) {
                assert.ok(meta instanceof _DispatcherPayloadMeta.DispatcherPayloadMetaImpl, "`meta` object is internal arguments.");
            }
        }
        // `meta` must be generated by system
        if (meta instanceof _DispatcherPayloadMeta.DispatcherPayloadMetaImpl) {
            this.emit(ON_DISPATCH, payload, meta);
        } else {
            // the `payload` object generated by user
            var dispatchOnlyMeta = new _DispatcherPayloadMeta.DispatcherPayloadMetaImpl({
                dispatcher: this,
                isTrusted: false
            });
            this.emit(ON_DISPATCH, payload, dispatchOnlyMeta);
        }
    };
    /**
     * Delegate payload object to other dispatcher.
     *
     * ### Example
     *
     * ```js
     * const a = new Dispatcher();
     * const b = new Dispatcher();
     * // Delegate `a` to `b`
     * a.pipe(b);
     * // dispatch and `b` can receive it.
     * a.dispatch({ type : "a" });
     * ```
     */


    Dispatcher.prototype.pipe = function pipe(toDispatcher) {
        var fromName = this.constructor.name;
        var toName = toDispatcher.constructor.name;
        var displayName = "delegate-payload:" + fromName + "-to-" + toName;
        var delegatePayload = function delegatePayload(payload, meta) {
            delegatePayload.displayName = displayName;
            toDispatcher.dispatch(payload, meta);
        };
        return this.onDispatch(delegatePayload);
    };

    return Dispatcher;
}(_events.EventEmitter);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// LICENSE : MIT


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ErrorPayload = exports.TYPE = undefined;
exports.isErrorPayload = isErrorPayload;

var _Payload2 = __webpack_require__(0);

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 *  XXX: This is exported for an unit testing.
 *  DO NOT USE THIS in your application.
 */
var TYPE = exports.TYPE = "ALMIN__ErrorPayload__";
/**
 * This payload is executed
 */

var ErrorPayload = exports.ErrorPayload = function (_Payload) {
    _inherits(ErrorPayload, _Payload);

    function ErrorPayload(_ref) {
        var error = _ref.error;

        _classCallCheck(this, ErrorPayload);

        var _this = _possibleConstructorReturn(this, _Payload.call(this, { type: TYPE }));

        _this.error = error;
        return _this;
    }

    return ErrorPayload;
}(_Payload2.Payload);

function isErrorPayload(v) {
    return v.type === TYPE;
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// LICENSE : MIT

/**
 * Internal implementation
 * @private
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DispatcherPayloadMetaImpl = exports.DispatcherPayloadMetaImpl = function DispatcherPayloadMetaImpl(args) {
    _classCallCheck(this, DispatcherPayloadMetaImpl);

    this.useCase = args.useCase || null;
    this.dispatcher = args.dispatcher === undefined ? null : args.dispatcher;
    this.parentUseCase = args.parentUseCase || null;
    this.timeStamp = Date.now();
    this.isTrusted = args.isTrusted;
    this.isUseCaseFinished = args.isUseCaseFinished !== undefined ? args.isUseCaseFinished : false;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// LICENSE : MIT


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CompletedPayload = exports.TYPE = undefined;
exports.isCompletedPayload = isCompletedPayload;

var _Payload2 = __webpack_require__(0);

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 *  XXX: This is exported for an unit testing.
 *  DO NOT USE THIS in your application.
 */
var TYPE = exports.TYPE = "ALMIN__COMPLETED_EACH_USECASE__";

var CompletedPayload = exports.CompletedPayload = function (_Payload) {
    _inherits(CompletedPayload, _Payload);

    function CompletedPayload(_ref) {
        var value = _ref.value;

        _classCallCheck(this, CompletedPayload);

        var _this = _possibleConstructorReturn(this, _Payload.call(this, { type: TYPE }));

        _this.value = value;
        return _this;
    }

    return CompletedPayload;
}(_Payload2.Payload);

function isCompletedPayload(v) {
    return v.type === TYPE;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// LICENSE : MIT


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DidExecutedPayload = exports.TYPE = undefined;
exports.isDidExecutedPayload = isDidExecutedPayload;

var _Payload2 = __webpack_require__(0);

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 *  XXX: This is exported for an unit testing.
 *  DO NOT USE THIS in your application.
 */
var TYPE = exports.TYPE = "ALMIN__DID_EXECUTED_EACH_USECASE__";

var DidExecutedPayload = exports.DidExecutedPayload = function (_Payload) {
    _inherits(DidExecutedPayload, _Payload);

    function DidExecutedPayload(_ref) {
        var value = _ref.value;

        _classCallCheck(this, DidExecutedPayload);

        var _this = _possibleConstructorReturn(this, _Payload.call(this, { type: TYPE }));

        _this.value = value;
        return _this;
    }

    return DidExecutedPayload;
}(_Payload2.Payload);

function isDidExecutedPayload(v) {
    return v.type === TYPE;
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// LICENSE : MIT


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WillExecutedPayload = exports.TYPE = undefined;
exports.isWillExecutedPayload = isWillExecutedPayload;

var _Payload2 = __webpack_require__(0);

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 *  XXX: This is exported for an unit testing.
 *  DO NOT USE THIS in your application.
 */
var TYPE = exports.TYPE = "ALMIN__WILL_EXECUTED_EACH_USECASE__";

var WillExecutedPayload = exports.WillExecutedPayload = function (_Payload) {
    _inherits(WillExecutedPayload, _Payload);

    function WillExecutedPayload(_ref) {
        var _ref$args = _ref.args,
            args = _ref$args === undefined ? [] : _ref$args;

        _classCallCheck(this, WillExecutedPayload);

        var _this = _possibleConstructorReturn(this, _Payload.call(this, { type: TYPE }));

        _this.args = args;
        return _this;
    }

    return WillExecutedPayload;
}(_Payload2.Payload);

function isWillExecutedPayload(v) {
    return v.type === TYPE;
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// LICENSE : MIT

// constants

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NanSymbolMark = {};

function encodeKey(key) {
    var isNotNumber = typeof key === "number" && key !== key;
    return isNotNumber ? NanSymbolMark : key;
}

function decodeKey(encodedKey) {
    return encodedKey === NanSymbolMark ? NaN : encodedKey;
}

/**
 * ES6 Map like object.
 * See [Map - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map "Map - JavaScript | MDN")
 */

var MapLike = function () {
    function MapLike() {
        var _this = this;

        var entries = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        _classCallCheck(this, MapLike);

        /**
         * @type {Array}
         * @private
         */
        this._keys = [];
        /**
         *
         * @type {Array}
         * @private
         */
        this._values = [];
        entries.forEach(function (entry) {
            if (!Array.isArray(entry)) {
                throw new Error("should be `new MapLike([ [key, value] ])`");
            }
            if (entry.length !== 2) {
                throw new Error("should be `new MapLike([ [key, value] ])`");
            }
            _this.set(entry[0], entry[1]);
        });
    }

    /**
     * return map size
     * @returns {Number}
     */


    _createClass(MapLike, [{
        key: "entries",


        /**
         * entries [[key, value], [key, value]] value
         * @returns {Array}
         */
        value: function entries() {
            var _this2 = this;

            return this.keys().map(function (key) {
                var value = _this2.get(key);
                return [decodeKey(key), value];
            });
        }

        /**
         * get keys
         * @returns {Array}
         */

    }, {
        key: "keys",
        value: function keys() {
            return this._keys.filter(function (value) {
                return value !== undefined;
            }).map(decodeKey);
        }

        /**
         * get values
         * @returns {Array}
         */

    }, {
        key: "values",
        value: function values() {
            return this._values.slice();
        }

        /**
         * @param {*} key - The key of the element to return from the Map object.
         * @returns {*}
         */

    }, {
        key: "get",
        value: function get(key) {
            var idx = this._keys.indexOf(encodeKey(key));
            return idx !== -1 ? this._values[idx] : undefined;
        }

        /**
         * has value of key
         * @param {*} key - The key of the element to return from the Map object.
         * @returns {boolean}
         */

    }, {
        key: "has",
        value: function has(key) {
            return this._keys.indexOf(encodeKey(key)) !== -1;
        }

        /**
         * set value for key
         * @param {*} key - The key of the element to return from the Map object.
         * @param {*} value
         * @return {MapLike}
         */

    }, {
        key: "set",
        value: function set(key, value) {
            var idx = this._keys.indexOf(encodeKey(key));
            if (idx !== -1) {
                this._values[idx] = value;
            } else {
                this._keys.push(encodeKey(key));
                this._values.push(value);
            }
            return this;
        }

        /**
         * delete value for key
         * @param {*} key - The key of the element to return from the Map object.
         * @returns {boolean}
         */

    }, {
        key: "delete",
        value: function _delete(key) {
            var idx = this._keys.indexOf(encodeKey(key));
            if (idx === -1) {
                return false;
            }
            this._keys.splice(idx, 1);
            this._values.splice(idx, 1);
            return true;
        }

        /**
         * clear defined key,value
         * @returns {MapLike}
         */

    }, {
        key: "clear",
        value: function clear() {
            this._keys = [];
            this._values = [];
            return this;
        }

        /**
         * forEach map
         * @param {function(value, key, map)} handler
         * @param {*} [thisArg]
         */

    }, {
        key: "forEach",
        value: function forEach(handler, thisArg) {
            var _this3 = this;

            this.keys().forEach(function (key) {
                // value, key, map
                handler(_this3.get(key), key, thisArg || _this3);
            });
        }
    }, {
        key: "size",
        get: function get() {
            return this._values.filter(function (value) {
                return value !== undefined;
            }).length;
        }
    }]);

    return MapLike;
}();

exports.default = MapLike;
module.exports = exports["default"];


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// LICENSE : MIT


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Store = exports.defaultStoreName = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Dispatcher2 = __webpack_require__(2);

var _shallowEqualObject = __webpack_require__(18);

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var STATE_CHANGE_EVENT = "STATE_CHANGE_EVENT";
/**
 * @type {string}
 * @private
 */
var defaultStoreName = exports.defaultStoreName = "<Anonymous-Store>";
/**
 * Store hold the state of your application.
 *
 * Typically, `Store` has a parts of the whole state tree of your application.
 * `StoreGroup` is the the whole state tree.
 *
 * It means that `StoreGroup` is a collection of `Store` instances.
 *
 * A UseCase `dispatch(payload)` and `Store` can receive it.
 *
 * ### Abstraction Code
 *
 * This is imagination code. (It will not work.)
 *
 * ```js
 * abcUseCase
 *  .dispatch({
 *      type: "ABC",
 *      value: "value"
 *  });
 *
 * abcStore
 *  .onDispatch(({ type, value }) => {
 *      console.log(type);  // "ABC"
 *      console.log(value); // 42
 *  });
 * ```
 *
 * ### Example
 *
 * To implement store, you have to inherit `Store` class.
 *
 * ```js
 * class YourStore extends Store {
 *    constructor(){
 *       super();
 *       this.state = {
 *          foo : "bar"
 *       };
 *    }
 *    getState(){
 *      return {
 *          yourStore: this.state
 *      };
 *    }
 * }
 * ```
 */

var Store = exports.Store = function (_Dispatcher) {
    _inherits(Store, _Dispatcher);

    /**
     * Constructor not have arguments.
     */
    function Store() {
        _classCallCheck(this, Store);

        var _this = _possibleConstructorReturn(this, _Dispatcher.call(this));

        var own = _this.constructor;
        /**
         * @type {string} Store name
         */
        _this.name = own.displayName || own.name || defaultStoreName;
        return _this;
    }
    /**
     * Return true if the `v` is store like.
     */


    Store.isStore = function isStore(v) {
        if (v instanceof Store) {
            return true;
        } else if ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && typeof v.getState === "function" && typeof v.onChange === "function") {
            return true;
        }
        return false;
    };
    /**
     * Update own state property if needed.
     * If `this.shouldStateUpdate(currentState, newState)` return true, update `this.state` property with `newState`.
     */


    Store.prototype.setState = function setState(newState) {
        if (this.shouldStateUpdate(this.state, newState)) {
            this.state = newState;
            this.emitChange();
        }
    };
    /**
     * If the prev/next state is difference, should return true.
     *
     * Use Shallow Object Equality Test by default.
     * <https://github.com/sebmarkbage/ecmascript-shallow-equal>
     */


    Store.prototype.shouldStateUpdate = function shouldStateUpdate(prevState, nextState) {
        return !(0, _shallowEqualObject.shallowEqual)(prevState, nextState);
    };
    /**
     * Subscribe change event of the store.
     * When `Store#emitChange()` is called, then call subscribers.
     *
     * ### Example
     *
     * ```js
     * store.onChange((changingStores) => {
     *    console.log(changingStores); // [store]
     * });
     *
     * store.emitChange();
     * ```
     */


    Store.prototype.onChange = function onChange(cb) {
        this.on(STATE_CHANGE_EVENT, cb);
        return this.removeListener.bind(this, STATE_CHANGE_EVENT, cb);
    };
    /**
     * Emit "change" event to subscribers.
     * If you want to notify changing ot tha store, call `Store#emitChange()`.
     */


    Store.prototype.emitChange = function emitChange() {
        this.emit(STATE_CHANGE_EVENT, [this]);
    };
    /**
     * Release all event handlers
     */


    Store.prototype.release = function release() {
        this.removeAllListeners(STATE_CHANGE_EVENT);
    };

    return Store;
}(_Dispatcher2.Dispatcher);
// Implement assertion


Store.prototype.getState = function () {
    throw new Error(this.name + " should be implemented Store#getState(): Object");
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// LICENSE : MIT


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UseCase = exports.defaultUseCaseName = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dispatcher2 = __webpack_require__(2);

var _UseCaseContext = __webpack_require__(32);

var _DispatcherPayloadMeta = __webpack_require__(5);

var _ErrorPayload = __webpack_require__(4);

var _UseCaseIdGenerator = __webpack_require__(17);

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var defaultUseCaseName = exports.defaultUseCaseName = "<Anonymous-UseCase>";
/**
 * A `UseCase` class is inherited Dispatcher.
 * The user implement own user-case that is inherited UseCase class
 *
 * It similar to ActionCreator on Flux.
 *
 * ### Example
 *
 * ```js
 * import {UseCase} from "almin";
 * class AwesomeUseCase extends UseCase {
 *    execute(){
 *       // implementation own use-case
 *   }
 * }
 * ```
 */

var UseCase = exports.UseCase = function (_Dispatcher) {
    _inherits(UseCase, _Dispatcher);

    /**
     * Return true if the `v` is a UseCase-like.
     */
    UseCase.isUseCase = function isUseCase(v) {
        if (v instanceof UseCase) {
            return true;
        } else if ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && typeof v.execute === "function") {
            return true;
        }
        return false;
    };
    /**
     * Constructor not have arguments.
     */


    function UseCase() {
        _classCallCheck(this, UseCase);

        var _this = _possibleConstructorReturn(this, _Dispatcher.call(this));

        _this.id = (0, _UseCaseIdGenerator.generateNewId)();
        var own = _this.constructor;
        _this.name = own.displayName || own.name || defaultUseCaseName;
        return _this;
    }
    /**
     * Get `context` of UseCase.
     * You can execute sub UseCase using UseCaseContext object.
     *
     * See following for more details.
     *
     * - [UseCaseContext](https://almin.js.org/docs/api/UseCaseContext.html)
     * - [Nesting UseCase](https://almin.js.org/docs/tips/nesting-usecase.html)
     *
     * ### Example
     *
     * ```js
     * // Parent -> ChildUseCase
     * export class ParentUseCase extends UseCase {
     *     execute() {
     *         // execute child use-case using UseCaseContext object.
     *         return this.context.useCase(new ChildUseCase()).execute();
     *     }
     * }
     * export class ChildUseCase extends UseCase {
     *     execute() {
     *         this.dispatch({
     *             type: "ChildUseCase"
     *         });
     *     }
     * }
     * ```
     */


    /**
     * `UseCase#execute()` method should be overwrite by subclass.
     *
     * ### Example
     *
     * ```js
     * class AwesomeUseCase extends UseCase {
     *    execute(){
     *       // implementation own use-case
     *   }
     * }
     * ```
     *
     *  FIXME: mark this as `abstract` property.
     */
    UseCase.prototype.execute = function execute() {
        throw new TypeError("should be overwrite " + this.constructor.name + "#execute()");
    };
    /**
     * Dispatch `payload` object.
     *
     * `Store` or `Context` can receive the `payload` object.n
     */


    UseCase.prototype.dispatch = function dispatch(payload, meta) {
        // system dispatch has meta
        // But, when meta is empty, the `payload` object generated by user
        var useCaseMeta = meta ? meta : new _DispatcherPayloadMeta.DispatcherPayloadMetaImpl({
            // this dispatch payload generated by this UseCase
            useCase: this,
            // dispatcher is the UseCase
            dispatcher: this,
            // parent is the same with UseCase. because this useCase dispatch the payload
            parentUseCase: null,
            // the user create this payload
            isTrusted: false,
            // Always false because the payload is dispatched from this working useCase.
            isUseCaseFinished: false
        });
        _Dispatcher.prototype.dispatch.call(this, payload, useCaseMeta);
    };
    /**
     * `errorHandler` is called with error when error is thrown.
     */


    UseCase.prototype.onError = function onError(errorHandler) {
        return this.onDispatch(function (payload) {
            if ((0, _ErrorPayload.isErrorPayload)(payload)) {
                errorHandler(payload.error);
            }
        });
    };
    /**
     * Throw error payload.
     *
     * You can use it instead of `throw new Error()`
     * This error event is caught by dispatcher.
     */


    UseCase.prototype.throwError = function throwError(error) {
        var meta = new _DispatcherPayloadMeta.DispatcherPayloadMetaImpl({
            useCase: this,
            dispatcher: this,
            isTrusted: true,
            isUseCaseFinished: false
        });
        var payload = new _ErrorPayload.ErrorPayload({
            error: error
        });
        this.dispatch(payload, meta);
    };

    _createClass(UseCase, [{
        key: "context",
        get: function get() {
            return new _UseCaseContext.UseCaseContext(this);
        }
    }]);

    return UseCase;
}(_Dispatcher2.Dispatcher);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// MIT © 2016-present azu


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreGroupTypes = exports.WillExecutedPayload = exports.ErrorPayload = exports.ChangedPayload = exports.Payload = exports.DidExecutedPayload = exports.CompletedPayload = exports.Context = exports.UseCase = exports.StoreGroup = exports.Store = exports.Dispatcher = undefined;

var _Dispatcher = __webpack_require__(2);

Object.defineProperty(exports, "Dispatcher", {
  enumerable: true,
  get: function get() {
    return _Dispatcher.Dispatcher;
  }
});

var _Store = __webpack_require__(11);

Object.defineProperty(exports, "Store", {
  enumerable: true,
  get: function get() {
    return _Store.Store;
  }
});

var _StoreGroup = __webpack_require__(27);

Object.defineProperty(exports, "StoreGroup", {
  enumerable: true,
  get: function get() {
    return _StoreGroup.StoreGroup;
  }
});

var _UseCase = __webpack_require__(12);

Object.defineProperty(exports, "UseCase", {
  enumerable: true,
  get: function get() {
    return _UseCase.UseCase;
  }
});

var _Context = __webpack_require__(26);

Object.defineProperty(exports, "Context", {
  enumerable: true,
  get: function get() {
    return _Context.Context;
  }
});

var _CompletedPayload = __webpack_require__(6);

Object.defineProperty(exports, "CompletedPayload", {
  enumerable: true,
  get: function get() {
    return _CompletedPayload.CompletedPayload;
  }
});

var _DidExecutedPayload = __webpack_require__(7);

Object.defineProperty(exports, "DidExecutedPayload", {
  enumerable: true,
  get: function get() {
    return _DidExecutedPayload.DidExecutedPayload;
  }
});

var _Payload = __webpack_require__(0);

Object.defineProperty(exports, "Payload", {
  enumerable: true,
  get: function get() {
    return _Payload.Payload;
  }
});

var _ChangedPayload = __webpack_require__(34);

Object.defineProperty(exports, "ChangedPayload", {
  enumerable: true,
  get: function get() {
    return _ChangedPayload.ChangedPayload;
  }
});

var _ErrorPayload = __webpack_require__(4);

Object.defineProperty(exports, "ErrorPayload", {
  enumerable: true,
  get: function get() {
    return _ErrorPayload.ErrorPayload;
  }
});

var _WillExecutedPayload = __webpack_require__(8);

Object.defineProperty(exports, "WillExecutedPayload", {
  enumerable: true,
  get: function get() {
    return _WillExecutedPayload.WillExecutedPayload;
  }
});

var _StoreGroupTypes = __webpack_require__(29);

var StoreGroupTypes = _interopRequireWildcard(_StoreGroupTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.StoreGroupTypes = StoreGroupTypes;
// For TypeScript


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {// LICENSE : MIT


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FunctionalUseCase = exports.defaultUseCaseName = undefined;

var _Dispatcher2 = __webpack_require__(2);

var _UseCaseIdGenerator = __webpack_require__(17);

var _DispatcherPayloadMeta = __webpack_require__(5);

var _ErrorPayload = __webpack_require__(4);

var _assert = __webpack_require__(1);

var assert = _interopRequireWildcard(_assert);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var defaultUseCaseName = exports.defaultUseCaseName = "<Functiona-UseCase>";
var getFunctionalExecute = function getFunctionalExecute(functionalUseCase, context) {
    try {
        var execute = functionalUseCase(context);
        if (process.env.NODE_ENV !== "production") {
            assert.ok(typeof execute === "function", "Functional UseCase should return a executor function.");
        }
        return execute;
    } catch (error) {
        if (process.env.NODE_ENV !== "production") {
            console.error("Warning(UseCase): This is wrong Functional UseCase.\nExample:\n    \n    const useCase = ({ dispatcher }) => {\n        return (args) => {\n            // execute\n        }\n    };\n    \n    context.useCase(useCase).execute(\"args\");\n");
        }
        throw error;
    }
};
/**
 * Functional version of UseCase class.
 * The user pass a function as UseCase
 * @example
 *
 * const functionalUseCase = ({ dispatcher }) => {
 *   return (...args) => {
 *      dispatcher.dispatch({ type: "fire" });
 *   }
 * }
 *
 */

var FunctionalUseCase = exports.FunctionalUseCase = function (_Dispatcher) {
    _inherits(FunctionalUseCase, _Dispatcher);

    function FunctionalUseCase(functionUseCase, dispatcher) {
        _classCallCheck(this, FunctionalUseCase);

        var _this = _possibleConstructorReturn(this, _Dispatcher.call(this));

        var context = {
            dispatcher: dispatcher
        };
        _this.dispatcher = dispatcher;
        /*
            const functionalUseCase = ({ dispatcher }) => {
                return (...args) => { } // <= executor
            }
         */
        _this.executor = getFunctionalExecute(functionUseCase, context);
        _this.id = (0, _UseCaseIdGenerator.generateNewId)();
        _this.name = functionUseCase.displayName || functionUseCase.name || defaultUseCaseName;
        return _this;
    }
    /**
     * execute functional UseCase
     */


    FunctionalUseCase.prototype.execute = function execute() {
        return this.executor.apply(this, arguments);
    };
    /**
     * implementation throwError
     * @param error
     */


    FunctionalUseCase.prototype.throwError = function throwError(error) {
        var meta = new _DispatcherPayloadMeta.DispatcherPayloadMetaImpl({
            useCase: this,
            dispatcher: this,
            isTrusted: true,
            isUseCaseFinished: false
        });
        var payload = new _ErrorPayload.ErrorPayload({
            error: error
        });
        this.dispatch(payload, meta);
    };

    return FunctionalUseCase;
}(_Dispatcher2.Dispatcher);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// MIT © 2017 azu

/**
 * shouldStateUpdate logic.
 * use Store#shouldStateUpdate if it is implemented in the Store.
 * In other case, use strict equal `===` by default.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
var shouldStateUpdate = exports.shouldStateUpdate = function shouldStateUpdate(store, prevState, nextState) {
    if (typeof store.shouldStateUpdate === "function") {
        return store.shouldStateUpdate(prevState, nextState);
    }
    return prevState !== nextState;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {// LICENSE : MIT


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UseCaseExecutor = undefined;

var _assert = __webpack_require__(1);

var assert = _interopRequireWildcard(_assert);

var _DispatcherPayloadMeta = __webpack_require__(5);

var _UseCaseInstanceMap = __webpack_require__(33);

var _CompletedPayload = __webpack_require__(6);

var _DidExecutedPayload = __webpack_require__(7);

var _WillExecutedPayload = __webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// payloads


/**
 * When child is completed after parent did completed, display warning warning message
 * @private
 */
var warningUseCaseIsAlreadyReleased = function warningUseCaseIsAlreadyReleased(parentUseCase, useCase, payload, meta) {
    console.error("Warning(UseCase): " + useCase.name + "'s parent UseCase(" + parentUseCase.name + ") is already released.\nThis UseCase(" + useCase.name + ") will not work correctly.\nhttps://almin.js.org/docs/warnings/usecase-is-already-released.html\n", payload, meta);
};
/**
 * `UseCaseExecutor` is a helper class for executing UseCase.
 *
 * You can not create the instance of UseCaseExecutor directory.
 * You can get the instance by `Context#useCase(useCase)`,
 *
 * @private
 */

var UseCaseExecutor = exports.UseCaseExecutor = function () {
    /**
     * @param   useCase
     * @param   parent
     *      parent is parent of `useCase`
     * @param   dispatcher
     * @public
     *
     * **internal** documentation
     */
    function UseCaseExecutor(_ref) {
        var useCase = _ref.useCase,
            parent = _ref.parent,
            dispatcher = _ref.dispatcher;

        _classCallCheck(this, UseCaseExecutor);

        if (process.env.NODE_ENV !== "production") {
            // execute and finish =>
            var useCaseName = useCase.name;
            assert.ok(typeof useCaseName === "string", "UseCase instance should have constructor.name " + useCase);
            assert.ok(typeof useCase.execute === "function", "UseCase instance should have #execute function: " + useCaseName);
        }
        this._useCase = useCase;
        this._parentUseCase = parent;
        this._dispatcher = dispatcher;
        this._releaseHandlers = [];
        // delegate userCase#onDispatch to central dispatcher
        var unListenHandler = this._useCase.pipe(this._dispatcher);
        this._releaseHandlers.push(unListenHandler);
    }
    /**
     * @param   [args] arguments of the UseCase
     */


    UseCaseExecutor.prototype._willExecute = function _willExecute(args) {
        // Add instance to manager
        // It should be removed when it will be completed.
        _UseCaseInstanceMap.UseCaseInstanceMap.set(this._useCase, this);
        var payload = new _WillExecutedPayload.WillExecutedPayload({
            args: args
        });
        var meta = new _DispatcherPayloadMeta.DispatcherPayloadMetaImpl({
            useCase: this._useCase,
            dispatcher: this._dispatcher,
            parentUseCase: this._parentUseCase,
            isTrusted: true,
            isUseCaseFinished: false
        });
        this._dispatcher.dispatch(payload, meta);
        // Warning: parentUseCase is already released
        if (process.env.NODE_ENV !== "production") {
            if (this._parentUseCase && !_UseCaseInstanceMap.UseCaseInstanceMap.has(this._parentUseCase)) {
                warningUseCaseIsAlreadyReleased(this._parentUseCase, this._useCase, payload, meta);
            }
        }
    };
    /**
     * dispatch did execute each UseCase
     */


    UseCaseExecutor.prototype._didExecute = function _didExecute(isFinished, value) {
        var payload = new _DidExecutedPayload.DidExecutedPayload({
            value: value
        });
        var meta = new _DispatcherPayloadMeta.DispatcherPayloadMetaImpl({
            useCase: this._useCase,
            dispatcher: this._dispatcher,
            parentUseCase: this._parentUseCase,
            isTrusted: true,
            isUseCaseFinished: isFinished
        });
        this._dispatcher.dispatch(payload, meta);
    };
    /**
     * dispatch complete each UseCase
     * @param   [value] unwrapped result value of the useCase executed
     */


    UseCaseExecutor.prototype._complete = function _complete(value) {
        var payload = new _CompletedPayload.CompletedPayload({
            value: value
        });
        var meta = new _DispatcherPayloadMeta.DispatcherPayloadMetaImpl({
            useCase: this._useCase,
            dispatcher: this._dispatcher,
            parentUseCase: this._parentUseCase,
            isTrusted: true,
            isUseCaseFinished: true
        });
        this._dispatcher.dispatch(payload, meta);
        // Warning: parentUseCase is already released
        if (process.env.NODE_ENV !== "production") {
            if (this._parentUseCase && !_UseCaseInstanceMap.UseCaseInstanceMap.has(this._parentUseCase)) {
                warningUseCaseIsAlreadyReleased(this._parentUseCase, this._useCase, payload, meta);
            }
        }
        // Delete the reference from instance manager
        // It prevent leaking of instance.
        _UseCaseInstanceMap.UseCaseInstanceMap.delete(this._useCase);
    };
    /**
     * called the {@link handler} with useCase when the useCase will do.
     * @param   handler
     */


    UseCaseExecutor.prototype.onWillExecuteEachUseCase = function onWillExecuteEachUseCase(handler) {
        var releaseHandler = this._dispatcher.onDispatch(function onWillExecute(payload, meta) {
            if ((0, _WillExecutedPayload.isWillExecutedPayload)(payload)) {
                handler(payload, meta);
            }
        });
        this._releaseHandlers.push(releaseHandler);
        return releaseHandler;
    };
    /**
     * called the `handler` with useCase when the useCase is executed.
     * @param   handler
     */


    UseCaseExecutor.prototype.onDidExecuteEachUseCase = function onDidExecuteEachUseCase(handler) {
        var releaseHandler = this._dispatcher.onDispatch(function onDidExecuted(payload, meta) {
            if ((0, _DidExecutedPayload.isDidExecutedPayload)(payload)) {
                handler(payload, meta);
            }
        });
        this._releaseHandlers.push(releaseHandler);
        return releaseHandler;
    };
    /**
     * called the `handler` with useCase when the useCase is completed.
     * @param   handler
     * @returns
     */


    UseCaseExecutor.prototype.onCompleteExecuteEachUseCase = function onCompleteExecuteEachUseCase(handler) {
        var releaseHandler = this._dispatcher.onDispatch(function onCompleted(payload, meta) {
            if ((0, _CompletedPayload.isCompletedPayload)(payload)) {
                handler(payload, meta);
            }
        });
        this._releaseHandlers.push(releaseHandler);
        return releaseHandler;
    };

    UseCaseExecutor.prototype.execute = function execute() {
        var _useCase,
            _this = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        this._willExecute(args);
        var result = (_useCase = this._useCase).execute.apply(_useCase, args);
        var isResultPromise = result && typeof result.then == "function";
        // if the UseCase return a promise, almin recognize the UseCase as continuous.
        // In other word, If the UseCase want to continue, please return a promise object.
        var isUseCaseFinished = !isResultPromise;
        // Sync call didExecute
        this._didExecute(isUseCaseFinished, result);
        // Async call complete
        return Promise.resolve(result).then(function (result) {
            _this._complete(result);
            _this.release();
        }).catch(function (error) {
            _this._useCase.throwError(error);
            _this._complete();
            _this.release();
            return Promise.reject(error);
        });
    };
    /**
     * release all events handler.
     * You can call this when no more call event handler
     */


    UseCaseExecutor.prototype.release = function release() {
        this._releaseHandlers.forEach(function (releaseHandler) {
            return releaseHandler();
        });
        this._releaseHandlers.length = 0;
    };

    return UseCaseExecutor;
}();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * UseCase incremental count is for Unique ID.
 */
var _UseCaseCount = 0;
/**
 * create new id
 */
var generateNewId = exports.generateNewId = function generateNewId() {
  _UseCaseCount++;
  return String(_UseCaseCount);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// MIT © 2017 azu
var hasOwn = Object.prototype.hasOwnProperty;
// Object.is ponyfill
exports.is = function (x, y) {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    }
    else {
        return x !== x && y !== y;
    }
};
exports.shallowEqual = function (objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== "object" || objA === null ||
        typeof objB !== "object" || objB === null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwn.call(objB, keysA[i]) || !exports.is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(10);
var almin_1 = __webpack_require__(13);
var CounterStore_1 = __webpack_require__(25);
var Counter_1 = __webpack_require__(22);
var dispatcher = new almin_1.Dispatcher();
var counterStore = new CounterStore_1.CounterStore();
var storeGroup = new almin_1.StoreGroup({
    "counter": counterStore
});
var appContext = new almin_1.Context({
    dispatcher: dispatcher,
    store: storeGroup
});
;
;
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.state = appContext.getState();
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        // when change store, update component
        var onChangeHandler = function () {
            _this.setState(appContext.getState());
        };
        appContext.onChange(onChangeHandler);
    };
    App.prototype.render = function () {
        /**
         * Where is "CounterState" come from?
         * It is `key` of counterStore in StoreGroup.
         *
         * ```
         * const storeGroup = new StoreGroup({
         *   "counter": counterStore
         * });
         * ```
         * @type {CounterState}
         */
        var counterState = this.state.counter;
        //return <div>Hello</div>;
        return React.createElement(Counter_1.default, { appContext: appContext, counterState: counterState });
    };
    return App;
}(React.Component));
exports.default = App;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(10);
var IncrementalCounterUseCase_1 = __webpack_require__(39);
;
var CounterComponent = (function (_super) {
    __extends(CounterComponent, _super);
    function CounterComponent(props) {
        return _super.call(this, props) || this;
    }
    CounterComponent.prototype.incrementCounter = function () {
        var context = this.props.appContext;
        context.useCase(new IncrementalCounterUseCase_1.default()).execute();
    };
    CounterComponent.prototype.render = function () {
        var counterState = this.props.counterState;
        return (React.createElement("div", null,
            React.createElement("button", { onClick: this.incrementCounter.bind(this) }, "Increment Counter"),
            React.createElement("p", null,
                "Count: ",
                counterState.count)));
    };
    return CounterComponent;
}(React.Component));
exports.default = CounterComponent;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// LICENSE : MIT

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(10);
var ReactDOM = __webpack_require__(21);
var App_1 = __webpack_require__(20);
ReactDOM.render(React.createElement(App_1.default, null), document.getElementById("js-app"));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;
var CounterState = (function () {
    function CounterState(_a) {
        var count = _a.count;
        this.count = count;
    }
    CounterState.prototype.reduce = function (payload) {
        switch (payload.type) {
            case 'increment':
                return new CounterState({
                    count: this.count + 1
                });
            default:
                return this;
        }
    };
    return CounterState;
}());
exports.CounterState = CounterState;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var almin_1 = __webpack_require__(13);
var CounterState_1 = __webpack_require__(24);
var CounterStore = (function (_super) {
    __extends(CounterStore, _super);
    function CounterStore() {
        var _this = _super.call(this) || this;
        _this.state = new CounterState_1.CounterState({
            count: 0
        });
        return _this;
    }
    CounterStore.prototype.receivePayload = function (payload) {
        this.setState(this.state.reduce(payload));
    };
    CounterStore.prototype.getState = function () {
        return this.state;
    };
    return CounterStore;
}(almin_1.Store));
exports.CounterStore = CounterStore;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// LICENSE : MIT


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Context = undefined;

var _assert = __webpack_require__(1);

var assert = _interopRequireWildcard(_assert);

var _UseCase = __webpack_require__(12);

var _Store = __webpack_require__(11);

var _UseCaseExecutor = __webpack_require__(16);

var _StoreGroupValidator = __webpack_require__(30);

var _CompletedPayload = __webpack_require__(6);

var _DidExecutedPayload = __webpack_require__(7);

var _ErrorPayload = __webpack_require__(4);

var _WillExecutedPayload = __webpack_require__(8);

var _FunctionalUseCase = __webpack_require__(14);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// payloads


/**
 * Context class provide observing and communicating with **Store** and **UseCase**.
 */
var Context = function () {
    /**
     * `dispatcher` is an instance of `Dispatcher`.
     * `store` is an instance of StoreLike implementation
     *
     * ### Example
     *
     * It is minimal initialization.
     *
     * ```js
     * const context = new Context({
     *   dispatcher: new Dispatcher(),
     *   store: new Store()
     * });
     * ```
     *
     * In real case, you can pass `StoreGroup` instead of `Store`.
     *
     * ```js
     * const storeGroup = new StoreGroup([
     *   new AStore(), new BStore(), new CStore()
     * ]);
     * const context = new Context({
     *   dispatcher: new Dispatcher(),
     *   store: new Store()
     * });
     * ```
     */
    function Context(_ref) {
        var _this = this;

        var dispatcher = _ref.dispatcher,
            store = _ref.store;

        _classCallCheck(this, Context);

        _StoreGroupValidator.StoreGroupValidator.validateInstance(store);
        // central dispatcher
        this._dispatcher = dispatcher;
        this._storeGroup = store;
        /**
         * callable release handlers
         * @type {Function[]}
         * @private
         */
        this._releaseHandlers = [];
        // Implementation Note:
        // Delegate dispatch event to Store|StoreGroup from Dispatcher
        // StoreGroup call each Store#receivePayload, but pass directly Store is not.
        // So, Context check the store instance has implementation of `Store#receivePayload` and pass payload to it.
        // See https://github.com/almin/almin/issues/190
        if (this._storeGroup instanceof _Store.Store) {
            // Dispatch Flow: Dispatcher -> Store(and receivePayload fallback)
            // Notes: You should not depended on this implementation in production.
            var hasReceivePayload = typeof this._storeGroup.receivePayload === "function";
            var releaseHandler = this._dispatcher.onDispatch(function (payload, meta) {
                _this._storeGroup.dispatch(payload, meta);
                if (hasReceivePayload) {
                    // StoreLike has not receivePayload, but Store may has receivePayload
                    _this._storeGroup.receivePayload(payload);
                }
            });
            this._releaseHandlers.push(releaseHandler);
        } else {
            // Dispatch Flow: Dispatcher -> StoreGroup
            // StoreGroup should have implement that StoreGroup -> Stores
            var _releaseHandler = this._dispatcher.pipe(this._storeGroup);
            this._releaseHandlers.push(_releaseHandler);
        }
    }
    /**
     * Return state value of StoreGroup or Store.
     *
     * ### Example
     *
     * If you pass `StoreGroup` to `store` of Constructor,
     * `Context#getState()` return the state object that merge each stores's state.
     *
     * ```js
     * const state = context.getState();
     * console.log(state);
     * // { aState, bState }
     * ```
     */


    Context.prototype.getState = function getState() {
        return this._storeGroup.getState();
    };
    /**
     * If anyone store that is passed to constructor is changed, then call `onChange`.
     * `onChange` arguments is an array of `Store` instances.
     *
     * It returns unSubscribe function.
     * If you want to release handler, the returned function.
     *
     * ### Example
     *
     * ```js
     * const unSubscribe = context.onChange(changingStores => {
     *   console.log(changingStores); // Array<Store>
     * });
     * ```
     */


    Context.prototype.onChange = function onChange(handler) {
        return this._storeGroup.onChange(handler);
    };

    Context.prototype.useCase = function useCase(_useCase) {
        // instance of UseCase
        if (_UseCase.UseCase.isUseCase(_useCase)) {
            return new _UseCaseExecutor.UseCaseExecutor({
                useCase: _useCase,
                parent: null,
                dispatcher: this._dispatcher
            });
        } else if (typeof _useCase === "function") {
            // When pass UseCase constructor itself, throw assertion error
            assert.ok(Object.getPrototypeOf && Object.getPrototypeOf(_useCase) !== _UseCase.UseCase, "Context#useCase argument should be instance of UseCase.\nThe argument is UseCase constructor itself: " + _useCase);
            // function to be FunctionalUseCase
            var functionalUseCase = new _FunctionalUseCase.FunctionalUseCase(_useCase, this._dispatcher);
            return new _UseCaseExecutor.UseCaseExecutor({
                useCase: functionalUseCase,
                parent: null,
                dispatcher: this._dispatcher
            });
        }
        throw new Error("Context#useCase argument should be UseCase: " + _useCase);
    };
    /**
     * Register `handler` function to Context.
     * `handler` is called when each useCases will execute.
     */


    Context.prototype.onWillExecuteEachUseCase = function onWillExecuteEachUseCase(handler) {
        var releaseHandler = this._dispatcher.onDispatch(function (payload, meta) {
            if ((0, _WillExecutedPayload.isWillExecutedPayload)(payload)) {
                handler(payload, meta);
            }
        });
        this._releaseHandlers.push(releaseHandler);
        return releaseHandler;
    };
    /**
     * Register `handler` function to Context.
     * `handler` is called the `handler` with user-defined payload object when the UseCase dispatch with payload.
     * This `onDispatch` is not called at built-in event. It is filtered by Context.
     * If you want to *All* dispatched event and use listen directly your `dispatcher` object.
     * In other word, listen the dispatcher of `new Context({dispatcher})`.
     *
     * ### Example
     *
     * ```js
     * const dispatchUseCase = ({dispatcher}) => {
     *   return () => dispatcher.dispatch({ type: "fired-payload" });
     * };
     * context.onDispatch((payload, meta) => {
     *   console.log(payload); // { type: "fired-payload" }
     * });
     *
     * context.useCase(dispatchUseCase).execute();
     * ```
     */


    Context.prototype.onDispatch = function onDispatch(handler) {
        var releaseHandler = this._dispatcher.onDispatch(function (payload, meta) {
            // call handler, if payload's type is not built-in event.
            // It means that `onDispatch` is called when dispatching user event.
            if (!meta.isTrusted) {
                handler(payload, meta);
            }
        });
        this._releaseHandlers.push(releaseHandler);
        return releaseHandler;
    };
    /**
     * `handler` is called when each useCases are executed.
     */


    Context.prototype.onDidExecuteEachUseCase = function onDidExecuteEachUseCase(handler) {
        var releaseHandler = this._dispatcher.onDispatch(function (payload, meta) {
            if ((0, _DidExecutedPayload.isDidExecutedPayload)(payload)) {
                handler(payload, meta);
            }
        });
        this._releaseHandlers.push(releaseHandler);
        return releaseHandler;
    };
    /**
     * `handler` is called when each useCases are completed.
     * This `handler` is always called asynchronously.
     */


    Context.prototype.onCompleteEachUseCase = function onCompleteEachUseCase(handler) {
        var releaseHandler = this._dispatcher.onDispatch(function (payload, meta) {
            if ((0, _CompletedPayload.isCompletedPayload)(payload)) {
                handler(payload, meta);
            }
        });
        this._releaseHandlers.push(releaseHandler);
        return releaseHandler;
    };
    /**
     * `handler` is called when some UseCase throw Error.
     *
     * Throwing Error is following case:
     *
     * - Throw exception in a UseCase
     * - Return rejected promise in a UseCase
     * - Call `UseCase#throwError(error)`
     */


    Context.prototype.onErrorDispatch = function onErrorDispatch(handler) {
        var releaseHandler = this._dispatcher.onDispatch(function (payload, meta) {
            if ((0, _ErrorPayload.isErrorPayload)(payload)) {
                handler(payload, meta);
            }
        });
        this._releaseHandlers.push(releaseHandler);
        return releaseHandler;
    };
    /**
     * Release all events handler in Context.
     * You can call this when no more call event handler
     */


    Context.prototype.release = function release() {
        var storeGroup = this._storeGroup;
        if (storeGroup) {
            storeGroup.release();
        }
        this._releaseHandlers.forEach(function (releaseHandler) {
            return releaseHandler();
        });
        this._releaseHandlers.length = 0;
    };

    return Context;
}();

exports.Context = Context;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {// MIT © 2017 azu


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StoreGroup = exports.InitializedPayload = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _assert = __webpack_require__(1);

var assert = _interopRequireWildcard(_assert);

var _mapLike = __webpack_require__(9);

var _mapLike2 = _interopRequireDefault(_mapLike);

var _Payload2 = __webpack_require__(0);

var _ErrorPayload = __webpack_require__(4);

var _WillExecutedPayload = __webpack_require__(8);

var _DidExecutedPayload = __webpack_require__(7);

var _CompletedPayload = __webpack_require__(6);

var _shallowEqualObject = __webpack_require__(18);

var _Dispatcher2 = __webpack_require__(2);

var _StoreStateMap = __webpack_require__(31);

var _Store = __webpack_require__(11);

var _StoreGroupEmitChangeChecker = __webpack_require__(28);

var _StoreGroupUtils = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var CHANGE_STORE_GROUP = "CHANGE_STORE_GROUP";
/**
 * Initialized Payload
 * This is exported for an unit testing.
 * DO NOT USE THIS in your application.
 */

var InitializedPayload = exports.InitializedPayload = function (_Payload) {
    _inherits(InitializedPayload, _Payload);

    function InitializedPayload() {
        _classCallCheck(this, InitializedPayload);

        return _possibleConstructorReturn(this, _Payload.call(this, { type: "Almin__InitializedPayload__" }));
    }

    return InitializedPayload;
}(_Payload2.Payload);
// InitializedPayload for passing to Store if the state change is not related payload.


var initializedPayload = new InitializedPayload();
/**
 * assert: check arguments of constructor.
 */
var assertConstructorArguments = function assertConstructorArguments(arg) {
    var message = "Should initialize this StoreGroup with a stateName-store mapping object.\nconst aStore = new AStore();\nconst bStore = new BStore();\n// A arguments is stateName-store mapping object like { stateName: store }\nconst storeGroup = new CQRSStoreGroup({\n    a: aStore,\n    b: bStore\n});\nconsole.log(storeGroup.getState());\n// { a: \"a value\", b: \"b value\" }\n";
    assert.ok((typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "object" && arg !== null && !Array.isArray(arg), message);
    var keys = Object.keys(arg);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = arg[key];
        // Don't checking for accepting string or symbol.
        // assert.ok(typeof key === "string", `key should be string type: ${key}: ${value}` + "\n" + message);
        assert.ok(_Store.Store.isStore(value), "value should be instance of Store: " + key + ": " + value + "\n" + message);
    }
};
/**
 * StoreGroup is a parts of read-model.
 *
 * StoreGroup has separated two phase in a life-cycle.
 * These are called Write phase and Read phase.
 *
 * StoreGroup often does write phase and, then read phase.
 *
 * ## Write phase
 *
 * StoreGroup notify update timing for each stores.
 *
 * It means that call each `Store#receivePayload()`.
 *
 * ### When
 *
 * - Initialize StoreGroup
 * - A parts of life-cycle during execute UseCase
 * - Force update StoreGroup
 *
 * ### What does store?
 *
 * - Store update own state if needed
 *
 * ### What does not store?
 *
 * - Store should not directly assign to state instead of using `Store#setState`
 *
 * ## Read phase
 *
 * StoreGroup read the state from each stores.
 *
 * It means that call each `Store#getState()`.
 *
 * ### When
 *
 * - Initialize StoreGroup
 * - A parts of life-cycle during execute UseCase
 * - Force update StoreGroup
 * - Some store call `Store#emitChange`
 *
 * ### What does store?
 *
 * - Store return own state
 *
 * ### What does not store?
 *
 * - Does not update own state
 * - Please update own state in write phase
 *
 * ### Notes
 *
 * #### Pull-based: Recompute every time value is needed
 *
 * Pull-based Store has only getState.
 * Just create the state and return it when `getState` is called.
 *
 * #### Push-based: Recompute when a source value changes
 *
 * Push-based Store have to create the state and save it.
 * Just return the state when `getState` is called.
 * It is similar with cache system.
 *
 */

var StoreGroup = exports.StoreGroup = function (_Dispatcher) {
    _inherits(StoreGroup, _Dispatcher);

    /**
     * Initialize this StoreGroup with a stateName-store mapping object.
     *
     * The rule of initializing StoreGroup is that "define the state name of the store".
     *
     * ## Example
     *
     * Initialize with store-state mapping object.
     *
     * ```js
     * class AStore extends Store {
     *     getState() {
     *         return "a value";
     *     }
     * }
     * class BStore extends Store {
     *     getState() {
     *         return "b value";
     *     }
     * }
     * const aStore = new AStore();
     * const bStore = new BStore();
     * const storeGroup = new CQRSStoreGroup({
     *     a: aStore, // stateName: store
     *     b: bStore
     * });
     * console.log(storeGroup.getState());
     * // { a: "a value", b: "b value" }
     * ```
     */
    function StoreGroup(stateStoreMapping) {
        _classCallCheck(this, StoreGroup);

        var _this2 = _possibleConstructorReturn(this, _Dispatcher.call(this));

        _this2.stateStoreMapping = stateStoreMapping;
        // stores that are changed compared by previous state.
        _this2._changingStores = [];
        // all functions to release handlers
        _this2._releaseHandlers = [];
        _this2.storeGroupEmitChangeChecker = new _StoreGroupEmitChangeChecker.StoreGroupEmitChangeChecker();
        if (process.env.NODE_ENV !== "production") {
            assertConstructorArguments(stateStoreMapping);
        }
        _this2._storeStateMap = (0, _StoreStateMap.createStoreStateMap)(stateStoreMapping);
        // pull stores from mapping if arguments is mapping.
        _this2.stores = _this2._storeStateMap.stores;
        _this2._workingUseCaseMap = new _mapLike2.default();
        _this2._finishedUseCaseMap = new _mapLike2.default();
        _this2._stateCacheMap = new _mapLike2.default();
        // Implementation Note:
        // Dispatch -> pipe -> Store#emitChange() if it is needed
        //          -> this.onDispatch -> If anyone store is changed, this.emitChange()
        // each pipe to dispatching
        _this2.stores.forEach(function (store) {
            // observe Store
            var unRegisterHandler = _this2._registerStore(store);
            _this2._releaseHandlers.push(unRegisterHandler);
            // delegate dispatching
            var pipeHandler = _this2.pipe(store);
            _this2._releaseHandlers.push(pipeHandler);
        });
        // after dispatching, and then emitChange
        var unObserveHandler = _this2._observeDispatchedPayload();
        _this2._releaseHandlers.push(unObserveHandler);
        // default state
        _this2.state = _this2.initializeGroupState(_this2.stores, initializedPayload);
        return _this2;
    }
    /**
     * If exist working UseCase, return true
     */


    /**
     * Return the state object that merge each stores's state
     */
    StoreGroup.prototype.getState = function getState() {
        return this.state;
    };

    StoreGroup.prototype.initializeGroupState = function initializeGroupState(stores, payload) {
        // 1. write in read
        this.writePhaseInRead(stores, payload);
        // 2. read in read
        return this.readPhaseInRead(stores);
    };
    // write phase
    // Each store updates own state


    StoreGroup.prototype.writePhaseInRead = function writePhaseInRead(stores, payload) {
        for (var i = 0; i < stores.length; i++) {
            var store = stores[i];
            // reduce state by prevSate with payload if it is implemented
            if (typeof store.receivePayload === "function") {
                store.receivePayload(payload);
            }
        }
    };
    // read phase
    // Get state from each store


    StoreGroup.prototype.readPhaseInRead = function readPhaseInRead(stores) {
        var groupState = {};
        for (var i = 0; i < stores.length; i++) {
            var store = stores[i];
            var prevState = this._stateCacheMap.get(store);
            var nextState = store.getState();
            // if the prev/next state is same, not update the state.
            var stateName = this._storeStateMap.get(store);
            if (process.env.NODE_ENV !== "production") {
                assert.ok(stateName !== undefined, "Store:" + store.name + " is not registered in constructor.\nBut, " + store.name + "#getState() was called.");
                this.storeGroupEmitChangeChecker.warningIfStatePropertyIsModifiedDirectly(store, prevState, nextState);
                // nextState has confirmed and release the `store` from the checker
                this.storeGroupEmitChangeChecker.unMark(store);
            }
            // the state is not changed, set prevState as state of the store
            if (!(0, _StoreGroupUtils.shouldStateUpdate)(store, prevState, nextState)) {
                groupState[stateName] = prevState;
                continue;
            }
            // Update cache
            this._stateCacheMap.set(store, nextState);
            // Changing flag On
            this._addChangingStateOfStores(store);
            // Set state
            groupState[stateName] = nextState;
        }
        return groupState;
    };
    /**
     * Use `shouldStateUpdate()` to let StoreGroup know if a event is not affected.
     * The default behavior is to emitChange on every life-cycle change,
     * and in the vast majority of cases you should rely on the default behavior.
     * Default behavior is shallow-equal prev/next state.
     *
     * ## Example
     *
     * If you want to use `Object.is` to equal states, overwrite following.
     *
     * ```js
     * shouldStateUpdate(prevState, nextState) {
     *    return !Object.is(prevState, nextState)
     * }
     * ```
     */


    StoreGroup.prototype.shouldStateUpdate = function shouldStateUpdate(prevState, nextState) {
        return !(0, _shallowEqualObject.shallowEqual)(prevState, nextState);
    };
    /**
     * Emit change if the state is changed.
     * If call with no-arguments, use ChangedPayload by default.
     */


    StoreGroup.prototype.emitChange = function emitChange() {
        this.tryToUpdateStoreGroupState();
    };
    // write and read -> emitChange if needed


    StoreGroup.prototype.sendPayloadAndTryEmit = function sendPayloadAndTryEmit(payload) {
        this.writePhaseInRead(this.stores, payload);
        this.tryToUpdateStoreGroupState();
    };
    // read -> emitChange if needed


    StoreGroup.prototype.tryToUpdateStoreGroupState = function tryToUpdateStoreGroupState() {
        this._pruneChangingStateOfStores();
        var nextState = this.readPhaseInRead(this.stores);
        if (!this.shouldStateUpdate(this.state, nextState)) {
            return;
        }
        this.state = nextState;
        // emit changes
        var changingStores = this._changingStores.slice();
        this.emit(CHANGE_STORE_GROUP, changingStores);
    };
    /**
     * Observe changes of the store group.
     *
     * onChange workflow: https://code2flow.com/mHFviS
     */


    StoreGroup.prototype.onChange = function onChange(handler) {
        this.on(CHANGE_STORE_GROUP, handler);
        var releaseHandler = this.removeListener.bind(this, CHANGE_STORE_GROUP, handler);
        this._releaseHandlers.push(releaseHandler);
        return releaseHandler;
    };
    /**
     * Release all events handler.
     * You can call this when no more call event handler
     */


    StoreGroup.prototype.release = function release() {
        this._releaseHandlers.forEach(function (releaseHandler) {
            return releaseHandler();
        });
        this._releaseHandlers.length = 0;
        this._pruneChangingStateOfStores();
    };
    /**
     * register store and listen onChange.
     * If you release store, and do call `release` method.
     */


    StoreGroup.prototype._registerStore = function _registerStore(store) {
        var _this3 = this;

        var onChangeHandler = function onChangeHandler() {
            if (_this3.existWorkingUseCase) {
                if (process.env.NODE_ENV !== "production") {
                    var prevState = _this3._stateCacheMap.get(store);
                    var nextState = store.getState();
                    _this3.storeGroupEmitChangeChecker.mark(store, prevState, nextState);
                }
                // DO NOT tryEmitChange in transaction UseCase
            } else {
                // if not exist working UseCases, immediate invoke emitChange.
                _this3.tryToUpdateStoreGroupState();
            }
        };
        if (process.env.NODE_ENV !== "production") {
            onChangeHandler.displayName = store.name + "#onChange->handler";
        }
        return store.onChange(onChangeHandler);
    };
    /**
     * Observe all payload.
     */


    StoreGroup.prototype._observeDispatchedPayload = function _observeDispatchedPayload() {
        var _this4 = this;

        var observeChangeHandler = function observeChangeHandler(payload, meta) {
            if (!meta.isTrusted) {
                _this4.sendPayloadAndTryEmit(payload);
            } else if ((0, _ErrorPayload.isErrorPayload)(payload)) {
                _this4.sendPayloadAndTryEmit(payload);
            } else if ((0, _WillExecutedPayload.isWillExecutedPayload)(payload) && meta.useCase) {
                _this4._workingUseCaseMap.set(meta.useCase.id, true);
            } else if ((0, _DidExecutedPayload.isDidExecutedPayload)(payload) && meta.useCase) {
                if (meta.isUseCaseFinished) {
                    _this4._finishedUseCaseMap.set(meta.useCase.id, true);
                }
                _this4.sendPayloadAndTryEmit(payload);
            } else if ((0, _CompletedPayload.isCompletedPayload)(payload) && meta.useCase && meta.isUseCaseFinished) {
                _this4._workingUseCaseMap.delete(meta.useCase.id);
                // if the useCase is already finished, doesn't emitChange in CompletedPayload
                // In other word, If the UseCase that return non-promise value, doesn't emitChange in CompletedPayload
                if (_this4._finishedUseCaseMap.has(meta.useCase.id)) {
                    _this4._finishedUseCaseMap.delete(meta.useCase.id);
                    return;
                }
                _this4.sendPayloadAndTryEmit(payload);
            }
        };
        return this.onDispatch(observeChangeHandler);
    };

    StoreGroup.prototype._addChangingStateOfStores = function _addChangingStateOfStores(store) {
        if (this._changingStores.indexOf(store) === -1) {
            this._changingStores.push(store);
        }
    };

    StoreGroup.prototype._pruneChangingStateOfStores = function _pruneChangingStateOfStores() {
        this._changingStores = [];
    };

    _createClass(StoreGroup, [{
        key: "existWorkingUseCase",
        get: function get() {
            return this._workingUseCaseMap.size > 0;
        }
    }, {
        key: "isInitializedWithStateNameMap",
        get: function get() {
            return this._storeStateMap.size > 0;
        }
    }]);

    return StoreGroup;
}(_Dispatcher2.Dispatcher);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StoreGroupEmitChangeChecker = undefined;

var _mapLike = __webpack_require__(9);

var _mapLike2 = _interopRequireDefault(_mapLike);

var _StoreGroupUtils = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // MIT © 2017 azu


// ====
// Note: This module doesn't show warning in production
// ====
/**
 * Warning: check immutability state between prevState and nextState.
 * If the store call `Store#emitChange()` and the state of store is not changed, show warning
 * https://github.com/almin/almin/issues/151
 * https://github.com/almin/almin/pull/205
 */
var warningIfChangingStoreIsNotImmutable = function warningIfChangingStoreIsNotImmutable(store, prevState, nextState) {
    // If the store emitChange, check immutability
    var isStateChanged = (0, _StoreGroupUtils.shouldStateUpdate)(store, prevState, nextState);
    if (isStateChanged) {
        return;
    }
    console.error("Warning(Store): " + store.name + " does call emitChange(). \nBut, this store's state is not changed.\nStore's state should be immutable value.\nPrev State:", prevState, "Next State:", nextState);
};
/**
 * Warning: check immutability of the `store`'s state
 * If the store's `state` property is directly modified, show warning message.
 * We recommenced to use `Store#setState` for updating state of store.
 * https://github.com/almin/almin/issues/151
 */
var _warningIfStatePropertyIsModifiedDirectly = function _warningIfStatePropertyIsModifiedDirectly(store, prevState, nextState) {
    // If the store return **changed** state, but shouldStateUpdate return false.
    // This checker aim to find updating that is not reflected to UI.
    if (!store.hasOwnProperty("state")) {
        return;
    }
    // store.state is not same with getState value
    // It means `store.state` is not related with getState
    if (store.state !== nextState) {
        return;
    }
    var isStateReferenceReplaced = prevState !== nextState;
    var isStateUpdated = (0, _StoreGroupUtils.shouldStateUpdate)(store, prevState, nextState);
    var isStateChangedButShouldNotUpdate = isStateReferenceReplaced && !isStateUpdated;
    if (isStateChangedButShouldNotUpdate) {
        console.error("Warning(Store): " + store.name + "#state property is replace by difference value, but this change **does not** reflect to view.\nBecause, " + store.name + "#shouldStateUpdate(prevState, store.state) has returned **false**.\n\nIt means that the variance is present between " + store.name + "#state property and shouldStateUpdate.\nYou should update the state vis `Store#setState` method.\n\nFor example, you should update the state by following:\n\n    this.setState(newState);\n    \n    // OR\n\n    if(this.shouldStateUpdate(this.state, newState)){\n        this.state = newState;\n    }\n", "prevState", prevState, "nextState", nextState);
    }
};
/**
 * Check the usage of Store#emitChange.
 * If the store call `Store#emitChange()` but the state of store is not changed, show warning.
 * https://github.com/almin/almin/issues/151
 * https://github.com/almin/almin/pull/205
 */

var StoreGroupEmitChangeChecker = exports.StoreGroupEmitChangeChecker = function () {
    function StoreGroupEmitChangeChecker() {
        _classCallCheck(this, StoreGroupEmitChangeChecker);

        // store/state cache map for emitChange
        this._emitChangeStateCacheMap = new _mapLike2.default();
    }
    /**
     * mark `store` as `emitChange`ed store in a UseCase life-cycle
     *
     * Warning: Show warning message if the `store`'s state is not changed.
     */


    StoreGroupEmitChangeChecker.prototype.mark = function mark(store, cachedPrevState, nextState) {
        // prevState for emitChange.
        var previousEmitChangedState = this._emitChangeStateCacheMap.get(store);
        var prevState = previousEmitChangedState || cachedPrevState;
        // Check immutability of state
        warningIfChangingStoreIsNotImmutable(store, prevState, nextState);
        this._emitChangeStateCacheMap.set(store, nextState);
    };
    /**
     * Is this `store` marked by the checker?
     */


    StoreGroupEmitChangeChecker.prototype.isMarked = function isMarked(store) {
        return this._emitChangeStateCacheMap.has(store);
    };
    /**
     * unMark `store` at end of a useCase life-cycle
     * When the nextState is confirmed, should call it.
     */


    StoreGroupEmitChangeChecker.prototype.unMark = function unMark(store) {
        this._emitChangeStateCacheMap.delete(store);
    };
    /**
     * Warning: Show warning message if the `store`'s state is modified directly.
     * We recommenced to use `Store#setState` for updating state of store.
     *
     * ## Example
     *
     * ```js
     * class MyStore extends Store {
     *  receivePayload(){
     *      // direct modified
     *      this.state = { value: "next" }
     *  }
     * }
     * ```
     */


    StoreGroupEmitChangeChecker.prototype.warningIfStatePropertyIsModifiedDirectly = function warningIfStatePropertyIsModifiedDirectly(store, prevState, nextState) {
        // TODO: We could not support mixed updating style for store.
        // If `Store#emitChange` and directly update state in `receivePayload` is mixed,
        // we can't validate correctness of the state
        if (!this.isMarked(store)) {
            _warningIfStatePropertyIsModifiedDirectly(store, prevState, nextState);
        }
    };

    return StoreGroupEmitChangeChecker;
}();


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreToState = StoreToState;
/**
 * Utility type function that create state mapping from store mapping.
 *
 * DO NOT USE the returned value.
 * It should be used for typing.
 *
 * ## Example
 *
 * ```ts
 * import { StoreGroupTypes } from "almin";
 * // store mapping
 * const storeMapping = {
 *    appState: new AppStore({ appRepository }),
 *    counterState: new CounterStore({ appRepository })
 * };
 * // state mapping
 * const stateMapping = StoreGroupTypes.StoreToState(storeMapping);
 * // typeof StoreGroup state
 * export type AppStoreGroupState = typeof stateMapping;
 * ```
 */
function StoreToState(mapping) {
  return mapping;
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// LICENSE : MIT


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreGroupValidator = undefined;

var _assert = __webpack_require__(1);

var assert = _interopRequireWildcard(_assert);

var _Dispatcher = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 StoreGroup

 - must have `#onChange((stores) => {}): void`
 - must have `#getState(): Object`
 - may have `#release(): void`

 */
var StoreGroupValidator = exports.StoreGroupValidator = function () {
  function StoreGroupValidator() {
    _classCallCheck(this, StoreGroupValidator);
  }

  /**
   * validate the instance is StoreGroup-like object
   * Context treat StoreGroup like object as StoreGroup.
   */
  StoreGroupValidator.validateInstance = function validateInstance(storeGroup) {
    assert.ok(storeGroup !== undefined, "store should not be undefined");
    assert.ok(_Dispatcher.Dispatcher.isDispatcher(storeGroup), "storeGroup should inherit CoreEventEmitter");
    assert.ok(typeof storeGroup.onChange === "function", "StoreGroup should have #onChange method");
    assert.ok(typeof storeGroup.getState === "function", "StoreGroup should have #getState method");
    // #release is optional
    assert.ok(typeof storeGroup.release === "undefined" || typeof storeGroup.release === "function", "StoreGroup may have #release method");
  };

  return StoreGroupValidator;
}();


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StoreStateMap = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createStoreStateMap = createStoreStateMap;

var _mapLike = __webpack_require__(9);

var _mapLike2 = _interopRequireDefault(_mapLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } // MIT © 2017 azu


/**
 * TODO: make strong type
 */
var StoreStateMap = exports.StoreStateMap = function (_MapLike) {
    _inherits(StoreStateMap, _MapLike);

    function StoreStateMap() {
        _classCallCheck(this, StoreStateMap);

        return _possibleConstructorReturn(this, _MapLike.apply(this, arguments));
    }

    _createClass(StoreStateMap, [{
        key: "stores",
        get: function get() {
            return this.keys();
        }
    }, {
        key: "stateNames",
        get: function get() {
            return this.values();
        }
    }]);

    return StoreStateMap;
}(_mapLike2.default);
/**
 * Create StateStoreMap from mapping object
 *
 * ## Mapping object
 *
 * - key: state name
 * - value: store instance
 *
 * ```js
 * var mapping = {
 *  "stateName": store
 * }
 * ```
 */


function createStoreStateMap(mappingObject) {
    var map = new StoreStateMap();
    var keys = Object.keys(mappingObject);
    for (var i = 0; i < keys.length; i++) {
        var stateName = keys[i];
        var store = mappingObject[stateName];
        map.set(store, stateName);
    }
    return map;
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {// LICENSE : MIT


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UseCaseContext = undefined;

var _UseCase = __webpack_require__(12);

var _UseCaseExecutor = __webpack_require__(16);

var _FunctionalUseCase = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assert = __webpack_require__(1);
/**
 * Maybe, `UseCaseContext` is invisible from Public API.
 *
 * `UseCase#context` return UseCaseContext insteadof Context.
 * It has limitation as against to Context.
 * Because, `UseCaseContext` is for `UseCase`, is not for `Context`.
 *
 * ```js
 * class ParentUseCase extends UseCase {
 *     execute() {
 *         this.context; // <= This is a instance of UseCaseContext
 *     }
 * }
 * ```
 */

var UseCaseContext = function () {
    /**
     * `dispatcher` is often parent `UseCase`.
     * The user can not create this instance directly.
     * The user can access this via `UseCase#context`
     *
     * **internal**
     */
    function UseCaseContext(dispatcher) {
        _classCallCheck(this, UseCaseContext);

        this._dispatcher = dispatcher;
    }

    UseCaseContext.prototype.useCase = function useCase(_useCase) {
        if (process.env.NODE_ENV !== "production") {
            assert(_useCase !== this._dispatcher, "the useCase(" + _useCase + ") should not equal this useCase(" + this._dispatcher + ")");
        }
        if (_UseCase.UseCase.isUseCase(_useCase)) {
            return new _UseCaseExecutor.UseCaseExecutor({
                useCase: _useCase,
                parent: _UseCase.UseCase.isUseCase(this._dispatcher) ? this._dispatcher : null,
                dispatcher: this._dispatcher
            });
        } else if (typeof _useCase === "function") {
            if (process.env.NODE_ENV !== "production") {
                // When pass UseCase constructor itself, throw assertion error
                assert.ok(Object.getPrototypeOf && Object.getPrototypeOf(_useCase) !== _UseCase.UseCase, "Context#useCase argument should be instance of UseCase.\nThe argument is UseCase constructor itself: " + _useCase);
            }
            // function to be FunctionalUseCase
            var functionalUseCase = new _FunctionalUseCase.FunctionalUseCase(_useCase, this._dispatcher);
            return new _UseCaseExecutor.UseCaseExecutor({
                useCase: functionalUseCase,
                parent: _UseCase.UseCase.isUseCase(this._dispatcher) ? this._dispatcher : null,
                dispatcher: this._dispatcher
            });
        }
        throw new Error("UseCaseContext#useCase argument should be UseCase: " + _useCase);
    };

    return UseCaseContext;
}();

exports.UseCaseContext = UseCaseContext;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UseCaseInstanceMap = undefined;

var _mapLike = __webpack_require__(9);

var _mapLike2 = _interopRequireDefault(_mapLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

## UseCase instance lifecycle

Each UseCase instance is managed by UseCaseInstanceMap.

P: Parent UseCase
C: Child UseCase
Add: Add instance to UseCaseInstanceMap
Delete: Remove instance from UseCaseInstanceMap

    Add P         Delete P   Delete C
    |---------------|          |
    P    |                     |
         C---------------------|
      Add C              |
                         |
                     Point X

If C refer to P on `Point X`, it will not be working correctly.
Almin will say that `This P(parent UseCase) is already released!"

See also https://almin.js.org/docs/warnings/usecase-is-already-released.html
 */
/**
 * This Map maintains a mapping instance of UseCase
 * A UseCase will execute and add it to this map.
 * A UseCase was completed and remove it from this map.
 */
var UseCaseInstanceMap = exports.UseCaseInstanceMap = new _mapLike2.default();


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// LICENSE : MIT


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangedPayload = exports.TYPE = undefined;

var _Payload2 = __webpack_require__(0);

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 *  XXX: This is exported for an unit testing.
 *  DO NOT USE THIS in your application.
 */
var TYPE = exports.TYPE = "ALMIN__ChangedPayload__";
/**
 * ChangePayload is that represent something is changed.
 * Often, Store is changed.
 */

var ChangedPayload = exports.ChangedPayload = function (_Payload) {
  _inherits(ChangedPayload, _Payload);

  function ChangedPayload() {
    _classCallCheck(this, ChangedPayload);

    return _possibleConstructorReturn(this, _Payload.call(this, { type: TYPE }));
  }

  return ChangedPayload;
}(_Payload2.Payload);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 36 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(37);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(36);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19), __webpack_require__(3)))

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_almin__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_almin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_almin__);




class IncrementalCounterUseCase extends __WEBPACK_IMPORTED_MODULE_0_almin__["UseCase"] {
    // IncrementalCounterUseCase dispatch "increment" ----> Store
    // UseCase should implement #execute method
    execute() {
      this.dispatch({
        type: "increment"
      });
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = IncrementalCounterUseCase;





/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map