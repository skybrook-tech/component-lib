import { jsx, css } from '@emotion/core';
import React__default, { Component, cloneElement, Children, createElement } from 'react';
import ReactDOM__default, { findDOMNode } from 'react-dom';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var interopRequireDefault = createCommonjsModule(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  module.exports = _interopRequireDefault;
});
unwrapExports(interopRequireDefault);

var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
});

var interopRequireWildcard = createCommonjsModule(function (module) {
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function _getRequireWildcardCache() {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || _typeof_1(obj) !== "object" && typeof obj !== "function") {
      return {
        "default": obj
      };
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj["default"] = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  module.exports = _interopRequireWildcard;
});
unwrapExports(interopRequireWildcard);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

var _apply = apply;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
var isArray_1 = isArray;

/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal || freeSelf || Function('return this')();
var _root = root;

/** Built-in value references. */

var Symbol$1 = _root.Symbol;
var _Symbol = Symbol$1;

/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }

  var type = typeof value;

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol_1(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

var _isKey = isKey;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */

var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */

var coreJsData = _root['__core-js_shared__'];
var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }

  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */

function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */

var nativeCreate = _getNative(Object, 'create');
var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */

function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto$3 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */

var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? data[key] !== undefined : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;
var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */

var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */

function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;
var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */

var Map$1 = _getNative(_root, 'Map');
var _Map = Map$1;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash(),
    'map': new (_Map || _ListCache)(),
    'string': new _Hash()
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */

function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */

function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;
var _MapCache = MapCache;

/** Error message constants. */

var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function () {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || _MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = _MapCache;
var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */

var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = memoize_1(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */

var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = _memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
      result.push('');
    }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }

  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */

function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */

function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }

  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

var last_1 = last;

/** Used as references for various `Number` constants. */

var INFINITY$1 = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */

function baseGet(object, path) {
  path = _castPath(path, object);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}

var _baseGet = baseGet;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }

  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

var _baseSlice = baseSlice;

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */

function parent(object, path) {
  return path.length < 2 ? object : _baseGet(object, _baseSlice(path, 0, -1));
}

var _parent = parent;

/**
 * The base implementation of `_.invoke` without support for individual
 * method arguments.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} args The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 */

function baseInvoke(object, path, args) {
  path = _castPath(path, object);
  object = _parent(object, path);
  var func = object == null ? object : object[_toKey(last_1(path))];
  return func == null ? undefined : _apply(func, object, args);
}

var _baseInvoke = baseInvoke;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

var constant_1 = constant;

var defineProperty$1 = function () {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

var _defineProperty$1 = defineProperty$1;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */

var baseSetToString = !_defineProperty$1 ? identity_1 : function (func, string) {
  return _defineProperty$1(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};
var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */

var setToString = _shortOut(_baseSetToString);
var _setToString = setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */

function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/**
 * Invokes the method at `path` of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {...*} [args] The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
 *
 * _.invoke(object, 'a[0].b.c.slice', 1, 3);
 * // => [2, 3]
 */

var invoke = _baseRest(_baseInvoke);
var invoke_1 = invoke;

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

var isNil_1 = isNil;

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/**
 * The function that correctly handles passing refs.
 *
 * @param ref An ref object or function
 * @param node A node that should be passed by ref
 */

var handleRef = function handleRef(ref, node) {
  {
    if (typeof ref === 'string') {
      throw new Error('We do not support refs as string, this is a legacy API and will be likely to be removed in one of the future releases of React.');
    }
  }

  if (typeof ref === 'function') {
    ref(node);
    return;
  }

  if (ref !== null && _typeof(ref) === 'object') {
    ref.current = node;
  }
};

/** Checks that the passed object is a valid React ref object. */

var isRefObject = function isRefObject(ref) {
  return (// https://github.com/facebook/react/blob/v16.8.2/packages/react-reconciler/src/ReactFiberCommitWork.js#L665
    ref !== null && _typeof(ref) === 'object' && ref.hasOwnProperty('current')
  );
};

var nullRefObject = {
  current: null // A map of created ref objects to provide memoization.

};
var refObjects = new WeakMap();
/** Creates a React ref object from existing DOM node. */

var toRefObject = function toRefObject(node) {
  // A "null" is not valid key for a WeakMap
  if (node === null) {
    return nullRefObject;
  }

  if (refObjects.has(node)) {
    return refObjects.get(node);
  }

  var refObject = {
    current: node
  };
  refObjects.set(node, refObject);
  return refObject;
};

var reactIs_development = createCommonjsModule(function (module, exports) {

  {
    (function () {

      Object.defineProperty(exports, '__esModule', {
        value: true
      }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
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
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
      }
      /**
       * Forked from fbjs/warning:
       * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
       *
       * Only change is we use console.warn instead of console.error,
       * and do nothing when 'console' is not supported.
       * This really simplifies the code.
       * ---
       * Similar to invariant but only logs a warning if the condition is not met.
       * This can be used to log issues in development environments in critical
       * paths. Removing the logging code for production environments will keep the
       * same logic and follow the same code paths.
       */


      var lowPriorityWarningWithoutStack = function () {};

      {
        var printWarning = function (format) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });

          if (typeof console !== 'undefined') {
            console.warn(message);
          }

          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
          } catch (x) {}
        };

        lowPriorityWarningWithoutStack = function (condition, format) {
          if (format === undefined) {
            throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
          }

          if (!condition) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }

            printWarning.apply(void 0, [format].concat(args));
          }
        };
      }
      var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

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
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
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

      exports.typeOf = typeOf;
      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isValidElementType = isValidElementType;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
    })();
  }
});
unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_development;
  }
});

var ReactIs = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': reactIs,
	__moduleExports: reactIs
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
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
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty$4.call(from, key)) {
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

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function () {};

{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
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
  {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
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


checkPropTypes.resetWarningCache = function () {
  {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function () {};

{
  printWarning$1 = function (text) {
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

var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
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


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
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
    exact: createStrictShapeTypeChecker
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


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
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
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
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
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

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

      if (!reactIs.isValidElementType(propValue)) {
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
      {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
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
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

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
       printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') ;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
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

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

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
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = objectAssign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

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
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


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
  } // This handles more types than `getPropType`. Only used for error messages.
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
  } // Returns a string that is postfixed to a warning about an invalid type.
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
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  {
    var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod

    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  }
});

var PropTypes = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': propTypes,
	__moduleExports: propTypes
});

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$1(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/** A checker that matches the React.Ref type. */

var refPropType = undefined([undefined, undefined]);

var RefFindNode =
/*#__PURE__*/
function (_React$Component) {
  _inherits$1(RefFindNode, _React$Component);

  function RefFindNode() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$1(this, RefFindNode);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$1(this, (_getPrototypeOf2 = _getPrototypeOf(RefFindNode)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$2(_assertThisInitialized$1(_this), "prevNode", null);

    return _this;
  }

  _createClass$1(RefFindNode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prevNode = findDOMNode(this);
      handleRef(this.props.innerRef, this.prevNode);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var currentNode = findDOMNode(this);

      if (this.prevNode !== currentNode) {
        this.prevNode = currentNode;
        handleRef(this.props.innerRef, currentNode);
      }

      if (prevProps.innerRef !== this.props.innerRef) {
        handleRef(this.props.innerRef, currentNode);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      handleRef(this.props.innerRef, null);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);

  return RefFindNode;
}(Component);

_defineProperty$2(RefFindNode, "displayName", 'RefFindNode');

_defineProperty$2(RefFindNode, "propTypes",  {
  children: undefined,
  innerRef: refPropType.isRequired
} );

var RefForward =
/*#__PURE__*/
function (_React$Component) {
  _inherits$1(RefForward, _React$Component);

  function RefForward() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$1(this, RefForward);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$1(this, (_getPrototypeOf2 = _getPrototypeOf(RefForward)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$2(_assertThisInitialized$1(_this), "handleRefOverride", function (node) {
      var _this$props = _this.props,
          children = _this$props.children,
          innerRef = _this$props.innerRef;
      handleRef(children.ref, node);
      handleRef(innerRef, node);
    });

    return _this;
  }

  _createClass$1(RefForward, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return cloneElement(children, {
        ref: this.handleRefOverride
      });
    }
  }]);

  return RefForward;
}(Component);

_defineProperty$2(RefForward, "displayName", 'RefForward');

_defineProperty$2(RefForward, "propTypes",  {
  children: undefined,
  innerRef: refPropType.isRequired
} );

var Ref = function Ref(props) {
  var children = props.children,
      innerRef = props.innerRef;
  var child = Children.only(children);
  var ElementType = undefined(child) ? RefForward : RefFindNode;
  return createElement(ElementType, {
    innerRef: innerRef
  }, child);
};

Ref.displayName = 'Ref'; // TODO: use Babel plugin for this

{
  Ref.propTypes = {
    children: undefined,
    innerRef: refPropType.isRequired
  };
}



var es = /*#__PURE__*/Object.freeze({
	__proto__: null,
	handleRef: handleRef,
	isRefObject: isRefObject,
	toRefObject: toRefObject,
	Ref: Ref,
	RefFindNode: RefFindNode,
	RefForward: RefForward,
	refPropType: refPropType
});

var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */

  /* global define */
  (function () {

    var hasOwn = {}.hasOwnProperty;

    function classNames() {
      var classes = [];

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;
        var argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = classNames.apply(null, arg);

          if (inner) {
            classes.push(inner);
          }
        } else if (argType === 'object') {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }

      return classes.join(' ');
    }

    if ( module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var objectSpread = _objectSpread;

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

var isUndefined_1 = isUndefined;

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }

    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }

  return number;
}

var _baseClamp = baseClamp;

/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */

function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol_1(value)) {
    return NAN;
  }

  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

var toNumber_1 = toNumber;

/** Used as references for various `Number` constants. */

var INFINITY$2 = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */

function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }

  value = toNumber_1(value);

  if (value === INFINITY$2 || value === -INFINITY$2) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }

  return value === value ? value : 0;
}

var toFinite_1 = toFinite;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */

function toInteger(value) {
  var result = toFinite_1(value),
      remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}

var toInteger_1 = toInteger;

/**
 * Checks if `string` starts with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=0] The position to search from.
 * @returns {boolean} Returns `true` if `string` starts with `target`,
 *  else `false`.
 * @example
 *
 * _.startsWith('abc', 'a');
 * // => true
 *
 * _.startsWith('abc', 'b');
 * // => false
 *
 * _.startsWith('abc', 'b', 1);
 * // => true
 */

function startsWith(string, target, position) {
  string = toString_1(string);
  position = position == null ? 0 : _baseClamp(toInteger_1(position), 0, string.length);
  target = _baseToString(target);
  return string.slice(position, position + target.length) == target;
}

var startsWith_1 = startsWith;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

var _arrayFilter = arrayFilter;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

var _createBaseFor = createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */

var baseFor = _createBaseFor();
var _baseFor = baseFor;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

var _baseTimes = baseTimes;

/** `Object#toString` result references. */

var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */

var objectProto$5 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = _baseIsArguments(function () {
  return arguments;
}()) ? _baseIsArguments : function (value) {
  return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
var isArguments_1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Built-in value references. */

  var Buffer = moduleExports ? _root.Buffer : undefined;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */

  var isBuffer = nativeIsBuffer || stubFalse_1;
  module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */

var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Detect free variable `process` from Node.js. */

  var freeProcess = moduleExports && _freeGlobal.process;
  /** Used to access faster Node.js helpers. */

  var nodeUtil = function () {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      } // Legacy `process.binding('util')` for Node.js < 10.


      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();

  module.exports = nodeUtil;
});

/* Node.js helper references. */

var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */

var objectProto$6 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$6 = objectProto$6.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    _isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$7;
  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeKeys = _overArg(Object.keys, Object);
var _nativeKeys = nativeKeys;

/** Used for built-in method references. */

var objectProto$8 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */

function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */

function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */

function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }

    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }

    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }

    return collection;
  };
}

var _createBaseEach = createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */

var baseEach = _createBaseEach(_baseForOwn);
var _baseEach = baseEach;

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function baseFilter(collection, predicate) {
  var result = [];
  _baseEach(collection, function (value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

var _baseFilter = baseFilter;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */

function stackClear() {
  this.__data__ = new _ListCache();
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Used as the size to enable large array optimizations. */

var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof _ListCache) {
    var pairs = data.__data__;

    if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new _MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;
var _Stack = Stack;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */

function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);

  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */

function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new _MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;
var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}

var _arraySome = arraySome;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */

function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Assume cyclic values are equal.


  var stacked = stack.get(array);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new _SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!_arraySome(other, function (othValue, othIndex) {
        if (!_cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/** Built-in value references. */

var Uint8Array = _root.Uint8Array;
var _Uint8Array = Uint8Array;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;
/** `Object#toString` result references. */

var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$1 = '[object Symbol]';
var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]';
/** Used to convert symbols to primitives and strings. */

var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }

      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag$1:
      var convert = _mapToArray;

    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG$1; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}

var _equalByTag = equalByTag;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

var _arrayPush = arrayPush;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */

function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */

var objectProto$9 = Object.prototype;
/** Built-in value references. */

var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbols = !nativeGetSymbols ? stubArray_1 : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};
var _getSymbols = getSymbols;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */

function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG$2 = 1;
/** Used for built-in method references. */

var objectProto$a = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty$8.call(other, key))) {
      return false;
    }
  } // Assume cyclic values are equal.


  var stacked = stack.get(object);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

/* Built-in method references that are verified to be native. */

var DataView = _getNative(_root, 'DataView');
var _DataView = DataView;

/* Built-in method references that are verified to be native. */

var Promise = _getNative(_root, 'Promise');
var _Promise = Promise;

/* Built-in method references that are verified to be native. */

var Set = _getNative(_root, 'Set');
var _Set = Set;

/* Built-in method references that are verified to be native. */

var WeakMap$1 = _getNative(_root, 'WeakMap');
var _WeakMap = WeakMap$1;

/** `Object#toString` result references. */

var mapTag$2 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';
var dataViewTag$2 = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = _baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2 || _Map && getTag(new _Map()) != mapTag$2 || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag$2 || _WeakMap && getTag(new _WeakMap()) != weakMapTag$1) {
  getTag = function (value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;

        case mapCtorString:
          return mapTag$2;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag$2;

        case weakMapCtorString:
          return weakMapTag$1;
      }
    }

    return result;
  };
}

var _getTag = getTag;

/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG$3 = 1;
/** `Object#toString` result references. */

var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$2 = '[object Object]';
/** Used for built-in method references. */

var objectProto$b = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */

function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag$1 : _getTag(object),
      othTag = othIsArr ? arrayTag$1 : _getTag(other);
  objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$2 : othTag;
  var objIsObj = objTag == objectTag$2,
      othIsObj = othTag == objectTag$2,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack());
    return objIsArr || isTypedArray_1(object) ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack) : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$9.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$9.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new _Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new _Stack());
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */

function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !isObjectLike_1(value) && !isObjectLike_1(other)) {
    return value !== value && other !== other;
  }

  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;

/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;
/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */

function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }

  object = Object(object);

  while (index--) {
    var data = matchData[index];

    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }

  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack();

      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }

      if (!(result === undefined ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack) : result)) {
        return false;
      }
    }
  }

  return true;
}

var _baseIsMatch = baseIsMatch;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */

function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */

function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];
    result[length] = [key, value, _isStrictComparable(value)];
  }

  return result;
}

var _getMatchData = getMatchData;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }

    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

var _matchesStrictComparable = matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */

function baseMatches(source) {
  var matchData = _getMatchData(source);

  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }

  return function (object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */

function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */

function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);
  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);

    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }

    object = object[key];
  }

  if (result || ++index != length) {
    return result;
  }

  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) && (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */

function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;
/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */

function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }

  return function (object) {
    var objValue = get_1(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn_1(object, path) : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

var _baseMatchesProperty = baseMatchesProperty;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */

function basePropertyDeep(path) {
  return function (object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */

function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */

function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }

  if (value == null) {
    return identity_1;
  }

  if (typeof value == 'object') {
    return isArray_1(value) ? _baseMatchesProperty(value[0], value[1]) : _baseMatches(value);
  }

  return property_1(value);
}

var _baseIteratee = baseIteratee;

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */

function filter(collection, predicate) {
  var func = isArray_1(collection) ? _arrayFilter : _baseFilter;
  return func(collection, _baseIteratee(predicate));
}

var filter_1 = filter;

/** `Object#toString` result references. */

var mapTag$3 = '[object Map]',
    setTag$3 = '[object Set]';
/** Used for built-in method references. */

var objectProto$c = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$a = objectProto$c.hasOwnProperty;
/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */

function isEmpty(value) {
  if (value == null) {
    return true;
  }

  if (isArrayLike_1(value) && (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
    return !value.length;
  }

  var tag = _getTag(value);

  if (tag == mapTag$3 || tag == setTag$3) {
    return !value.size;
  }

  if (_isPrototype(value)) {
    return !_baseKeys(value).length;
  }

  for (var key in value) {
    if (hasOwnProperty$a.call(value, key)) {
      return false;
    }
  }

  return true;
}

var isEmpty_1 = isEmpty;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }

  return -1;
}

var _baseFindIndex = baseFindIndex;

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
}

var _strictIndexOf = strictIndexOf;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function baseIndexOf(array, value, fromIndex) {
  return value === value ? _strictIndexOf(array, value, fromIndex) : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf;

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */

function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

var _arrayIncludes = arrayIncludes;

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }

  return false;
}

var _arrayIncludesWith = arrayIncludesWith;

/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMin = Math.min;
/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */

function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? _arrayIncludesWith : _arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];

    if (othIndex && iteratee) {
      array = _arrayMap(array, _baseUnary(iteratee));
    }

    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new _SetCache(othIndex && array) : undefined;
  }

  array = arrays[0];
  var index = -1,
      seen = caches[0];

  outer: while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;
    value = comparator || value !== 0 ? value : 0;

    if (!(seen ? _cacheHas(seen, computed) : includes(result, computed, comparator))) {
      othIndex = othLength;

      while (--othIndex) {
        var cache = caches[othIndex];

        if (!(cache ? _cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
          continue outer;
        }
      }

      if (seen) {
        seen.push(computed);
      }

      result.push(value);
    }
  }

  return result;
}

var _baseIntersection = baseIntersection;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */

function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */

function castArrayLikeObject(value) {
  return isArrayLikeObject_1(value) ? value : [];
}

var _castArrayLikeObject = castArrayLikeObject;

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */

var intersection = _baseRest(function (arrays) {
  var mapped = _arrayMap(arrays, _castArrayLikeObject);
  return mapped.length && mapped[0] === arrays[0] ? _baseIntersection(mapped) : [];
});
var intersection_1 = intersection;

/** Used for built-in method references. */
var objectProto$d = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$b = objectProto$d.hasOwnProperty;
/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */

function baseHas(object, key) {
  return object != null && hasOwnProperty$b.call(object, key);
}

var _baseHas = baseHas;

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */

function has$2(object, path) {
  return object != null && _hasPath(object, path, _baseHas);
}

var has_1 = has$2;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}

var _arrayEach = arrayEach;

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */

function castFunction(value) {
  return typeof value == 'function' ? value : identity_1;
}

var _castFunction = castFunction;

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */

function forEach(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayEach : _baseEach;
  return func(collection, _castFunction(iteratee));
}

var forEach_1 = forEach;

var each = forEach_1;

var AutoControlledComponent_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = exports.getAutoControlledStateValue = exports.getDefaultPropName = void 0;

  var _objectSpread2 = interopRequireDefault(objectSpread);

  var _classCallCheck2 = interopRequireDefault(classCallCheck);

  var _createClass2 = interopRequireDefault(createClass);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf);

  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

  var _inherits2 = interopRequireDefault(inherits);

  var _defineProperty2 = interopRequireDefault(defineProperty);

  var _isUndefined2 = interopRequireDefault(isUndefined_1);

  var _startsWith2 = interopRequireDefault(startsWith_1);

  var _filter2 = interopRequireDefault(filter_1);

  var _isEmpty2 = interopRequireDefault(isEmpty_1);

  var _keys2 = interopRequireDefault(keys_1);

  var _intersection2 = interopRequireDefault(intersection_1);

  var _has2 = interopRequireDefault(has_1);

  var _each2 = interopRequireDefault(each);

  var _invoke2 = interopRequireDefault(invoke_1);

  var getDefaultPropName = function getDefaultPropName(prop) {
    return "default".concat(prop[0].toUpperCase() + prop.slice(1));
  };
  /**
   * Return the auto controlled state value for a give prop. The initial value is chosen in this order:
   *  - regular props
   *  - then, default props
   *  - then, initial state
   *  - then, `checked` defaults to false
   *  - then, `value` defaults to '' or [] if props.multiple
   *  - else, undefined
   *
   *  @param {string} propName A prop name
   *  @param {object} [props] A props object
   *  @param {object} [state] A state object
   *  @param {boolean} [includeDefaults=false] Whether or not to heed the default props or initial state
   */


  exports.getDefaultPropName = getDefaultPropName;

  var getAutoControlledStateValue = function getAutoControlledStateValue(propName, props, state) {
    var includeDefaults = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false; // regular props

    var propValue = props[propName];
    if (propValue !== undefined) return propValue;

    if (includeDefaults) {
      // defaultProps
      var defaultProp = props[getDefaultPropName(propName)];
      if (defaultProp !== undefined) return defaultProp; // initial state - state may be null or undefined

      if (state) {
        var initialState = state[propName];
        if (initialState !== undefined) return initialState;
      }
    } // React doesn't allow changing from uncontrolled to controlled components,
    // default checked/value if they were not present.


    if (propName === 'checked') return false;
    if (propName === 'value') return props.multiple ? [] : ''; // otherwise, undefined
  };

  exports.getAutoControlledStateValue = getAutoControlledStateValue;

  var AutoControlledComponent =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(AutoControlledComponent, _Component);

    function AutoControlledComponent() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, AutoControlledComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(AutoControlledComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "trySetState", function (state, callback) {
        var newState = Object.keys(state).reduce(function (acc, prop) {
          // ignore props defined by the parent
          if (_this.props[prop] !== undefined) return acc;
          acc[prop] = state[prop];
          return acc;
        }, {});
        if (Object.keys(newState).length > 0) _this.setState(newState, callback);
      });
      var autoControlledProps = _this.constructor.autoControlledProps;

      var _state = (0, _invoke2["default"])((0, _assertThisInitialized2["default"])(_this), 'getInitialAutoControlledState', _this.props) || {};

      {
        var _this$constructor = _this.constructor,
            defaultProps = _this$constructor.defaultProps,
            name = _this$constructor.name,
            propTypes = _this$constructor.propTypes; // require static autoControlledProps

        if (!autoControlledProps) {
          console.error("Auto controlled ".concat(name, " must specify a static autoControlledProps array."));
        } // require propTypes


        (0, _each2["default"])(autoControlledProps, function (prop) {
          var defaultProp = getDefaultPropName(prop); // regular prop

          if (!(0, _has2["default"])(propTypes, defaultProp)) {
            console.error("".concat(name, " is missing \"").concat(defaultProp, "\" propTypes validation for auto controlled prop \"").concat(prop, "\"."));
          } // its default prop


          if (!(0, _has2["default"])(propTypes, prop)) {
            console.error("".concat(name, " is missing propTypes validation for auto controlled prop \"").concat(prop, "\"."));
          }
        }); // prevent autoControlledProps in defaultProps
        //
        // When setting state, auto controlled props values always win (so the parent can manage them).
        // It is not reasonable to decipher the difference between props from the parent and defaultProps.
        // Allowing defaultProps results in trySetState always deferring to the defaultProp value.
        // Auto controlled props also listed in defaultProps can never be updated.
        //
        // To set defaults for an AutoControlled prop, you can set the initial state in the
        // constructor or by using an ES7 property initializer:
        // https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers

        var illegalDefaults = (0, _intersection2["default"])(autoControlledProps, (0, _keys2["default"])(defaultProps));

        if (!(0, _isEmpty2["default"])(illegalDefaults)) {
          console.error(['Do not set defaultProps for autoControlledProps. You can set defaults by', 'setting state in the constructor or using an ES7 property initializer', '(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)', "See ".concat(name, " props: \"").concat(illegalDefaults, "\".")].join(' '));
        } // prevent listing defaultProps in autoControlledProps
        //
        // Default props are automatically handled.
        // Listing defaults in autoControlledProps would result in allowing defaultDefaultValue props.


        var illegalAutoControlled = (0, _filter2["default"])(autoControlledProps, function (prop) {
          return (0, _startsWith2["default"])(prop, 'default');
        });

        if (!(0, _isEmpty2["default"])(illegalAutoControlled)) {
          console.error(['Do not add default props to autoControlledProps.', 'Default props are automatically handled.', "See ".concat(name, " autoControlledProps: \"").concat(illegalAutoControlled, "\".")].join(' '));
        }
      } // Auto controlled props are copied to state.
      // Set initial state by copying auto controlled props to state.
      // Also look for the default prop for any auto controlled props (foo => defaultFoo)
      // so we can set initial values from defaults.


      var initialAutoControlledState = autoControlledProps.reduce(function (acc, prop) {
        acc[prop] = getAutoControlledStateValue(prop, _this.props, _state, true);

        {
          var defaultPropName = getDefaultPropName(prop);
          var _name = _this.constructor.name; // prevent defaultFoo={} along side foo={}

          if (!(0, _isUndefined2["default"])(_this.props[defaultPropName]) && !(0, _isUndefined2["default"])(_this.props[prop])) {
            console.error("".concat(_name, " prop \"").concat(prop, "\" is auto controlled. Specify either ").concat(defaultPropName, " or ").concat(prop, ", but not both."));
          }
        }

        return acc;
      }, {});
      _this.state = (0, _objectSpread2["default"])({}, _state, initialAutoControlledState);
      return _this;
    } // eslint-disable-next-line camelcase


    (0, _createClass2["default"])(AutoControlledComponent, [{
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var autoControlledProps = this.constructor.autoControlledProps; // Solve the next state for autoControlledProps

        var newState = autoControlledProps.reduce(function (acc, prop) {
          var isNextDefined = !(0, _isUndefined2["default"])(nextProps[prop]); // if next is defined then use its value

          if (isNextDefined) acc[prop] = nextProps[prop];
          return acc;
        }, {});
        if (Object.keys(newState).length > 0) this.setState(newState);
      }
      /**
       * Safely attempt to set state for props that might be controlled by the user.
       * Second argument is a state object that is always passed to setState.
       * @param {object} state State that corresponds to controlled props.
       * @param {function} [callback] Callback which is called after setState applied.
       */

    }]);
    return AutoControlledComponent;
  }(React__default.Component);

  exports["default"] = AutoControlledComponent;
});
unwrapExports(AutoControlledComponent_1);
var AutoControlledComponent_2 = AutoControlledComponent_1.getAutoControlledStateValue;
var AutoControlledComponent_3 = AutoControlledComponent_1.getDefaultPropName;

var ModernAutoControlledComponent_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _objectSpread2 = interopRequireDefault(objectSpread);

  var _classCallCheck2 = interopRequireDefault(classCallCheck);

  var _createClass2 = interopRequireDefault(createClass);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf);

  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

  var _inherits2 = interopRequireDefault(inherits);

  var _isUndefined2 = interopRequireDefault(isUndefined_1);

  var _startsWith2 = interopRequireDefault(startsWith_1);

  var _filter2 = interopRequireDefault(filter_1);

  var _isEmpty2 = interopRequireDefault(isEmpty_1);

  var _keys2 = interopRequireDefault(keys_1);

  var _intersection2 = interopRequireDefault(intersection_1);

  var _has2 = interopRequireDefault(has_1);

  var _each2 = interopRequireDefault(each);

  var _invoke2 = interopRequireDefault(invoke_1);

  var ModernAutoControlledComponent =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(ModernAutoControlledComponent, _Component);

    function ModernAutoControlledComponent() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, ModernAutoControlledComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ModernAutoControlledComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
      var _this$constructor = _this.constructor,
          autoControlledProps = _this$constructor.autoControlledProps,
          getAutoControlledStateFromProps = _this$constructor.getAutoControlledStateFromProps;
      var state = (0, _invoke2["default"])((0, _assertThisInitialized2["default"])(_this), 'getInitialAutoControlledState', _this.props) || {};

      {
        var _this$constructor2 = _this.constructor,
            defaultProps = _this$constructor2.defaultProps,
            name = _this$constructor2.name,
            propTypes = _this$constructor2.propTypes,
            getDerivedStateFromProps = _this$constructor2.getDerivedStateFromProps; // require usage of getAutoControlledStateFromProps()

        if (getDerivedStateFromProps !== ModernAutoControlledComponent.getDerivedStateFromProps) {
          /* eslint-disable-next-line no-console */
          console.error("Auto controlled ".concat(name, " must specify a static getAutoControlledStateFromProps() instead of getDerivedStateFromProps()."));
        } // require propTypes


        (0, _each2["default"])(autoControlledProps, function (prop) {
          var defaultProp = (0, AutoControlledComponent_1.getDefaultPropName)(prop); // regular prop

          if (!(0, _has2["default"])(propTypes, defaultProp)) {
            console.error("".concat(name, " is missing \"").concat(defaultProp, "\" propTypes validation for auto controlled prop \"").concat(prop, "\"."));
          } // its default prop


          if (!(0, _has2["default"])(propTypes, prop)) {
            console.error("".concat(name, " is missing propTypes validation for auto controlled prop \"").concat(prop, "\"."));
          }
        }); // prevent autoControlledProps in defaultProps
        //
        // When setting state, auto controlled props values always win (so the parent can manage them).
        // It is not reasonable to decipher the difference between props from the parent and defaultProps.
        // Allowing defaultProps results in trySetState always deferring to the defaultProp value.
        // Auto controlled props also listed in defaultProps can never be updated.
        //
        // To set defaults for an AutoControlled prop, you can set the initial state in the
        // constructor or by using an ES7 property initializer:
        // https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers

        var illegalDefaults = (0, _intersection2["default"])(autoControlledProps, (0, _keys2["default"])(defaultProps));

        if (!(0, _isEmpty2["default"])(illegalDefaults)) {
          console.error(['Do not set defaultProps for autoControlledProps. You can set defaults by', 'setting state in the constructor or using an ES7 property initializer', '(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)', "See ".concat(name, " props: \"").concat(illegalDefaults, "\".")].join(' '));
        } // prevent listing defaultProps in autoControlledProps
        //
        // Default props are automatically handled.
        // Listing defaults in autoControlledProps would result in allowing defaultDefaultValue props.


        var illegalAutoControlled = (0, _filter2["default"])(autoControlledProps, function (prop) {
          return (0, _startsWith2["default"])(prop, 'default');
        });

        if (!(0, _isEmpty2["default"])(illegalAutoControlled)) {
          console.error(['Do not add default props to autoControlledProps.', 'Default props are automatically handled.', "See ".concat(name, " autoControlledProps: \"").concat(illegalAutoControlled, "\".")].join(' '));
        }
      } // Auto controlled props are copied to state.
      // Set initial state by copying auto controlled props to state.
      // Also look for the default prop for any auto controlled props (foo => defaultFoo)
      // so we can set initial values from defaults.


      var initialAutoControlledState = autoControlledProps.reduce(function (acc, prop) {
        acc[prop] = (0, AutoControlledComponent_1.getAutoControlledStateValue)(prop, _this.props, state, true);

        {
          var defaultPropName = (0, AutoControlledComponent_1.getDefaultPropName)(prop);
          var _name = _this.constructor.name; // prevent defaultFoo={} along side foo={}

          if (!(0, _isUndefined2["default"])(_this.props[defaultPropName]) && !(0, _isUndefined2["default"])(_this.props[prop])) {
            console.error("".concat(_name, " prop \"").concat(prop, "\" is auto controlled. Specify either ").concat(defaultPropName, " or ").concat(prop, ", but not both."));
          }
        }

        return acc;
      }, {});
      _this.state = (0, _objectSpread2["default"])({}, state, initialAutoControlledState, {
        autoControlledProps: autoControlledProps,
        getAutoControlledStateFromProps: getAutoControlledStateFromProps
      });
      return _this;
    }

    (0, _createClass2["default"])(ModernAutoControlledComponent, null, [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var autoControlledProps = state.autoControlledProps,
            getAutoControlledStateFromProps = state.getAutoControlledStateFromProps; // Solve the next state for autoControlledProps

        var newStateFromProps = autoControlledProps.reduce(function (acc, prop) {
          var isNextDefined = !(0, _isUndefined2["default"])(props[prop]); // if next is defined then use its value

          if (isNextDefined) acc[prop] = props[prop];
          return acc;
        }, {}); // Due to the inheritance of the AutoControlledComponent we should call its
        // getAutoControlledStateFromProps() and merge it with the existing state

        if (getAutoControlledStateFromProps) {
          var computedState = getAutoControlledStateFromProps(props, (0, _objectSpread2["default"])({}, state, newStateFromProps)); // We should follow the idea of getDerivedStateFromProps() and return only modified state

          return (0, _objectSpread2["default"])({}, newStateFromProps, computedState);
        }

        return newStateFromProps;
      }
      /**
       * Override this method to use getDerivedStateFromProps() in child components.
       */

    }, {
      key: "getAutoControlledStateFromProps",
      value: function getAutoControlledStateFromProps() {
        return null;
      }
    }]);
    return ModernAutoControlledComponent;
  }(React__default.Component);

  exports["default"] = ModernAutoControlledComponent;
});
unwrapExports(ModernAutoControlledComponent_1);

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty$1) {
    _defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }

  return accumulator;
}

var _arrayAggregator = arrayAggregator;

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */

function baseAggregator(collection, setter, iteratee, accumulator) {
  _baseEach(collection, function (value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

var _baseAggregator = baseAggregator;

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */

function createAggregator(setter, initializer) {
  return function (collection, iteratee) {
    var func = isArray_1(collection) ? _arrayAggregator : _baseAggregator,
        accumulator = initializer ? initializer() : {};
    return func(collection, setter, _baseIteratee(iteratee), accumulator);
  };
}

var _createAggregator = createAggregator;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the last element responsible for generating the key. The
 * iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * var array = [
 *   { 'dir': 'left', 'code': 97 },
 *   { 'dir': 'right', 'code': 100 }
 * ];
 *
 * _.keyBy(array, function(o) {
 *   return String.fromCharCode(o.code);
 * });
 * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 *
 * _.keyBy(array, 'dir');
 * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
 */

var keyBy = _createAggregator(function (result, value, key) {
  _baseAssignValue(result, key, value);
});
var keyBy_1 = keyBy;

var childMapping = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.mergeChildMappings = exports.getChildMapping = void 0;

  var _slicedToArray2 = interopRequireDefault(slicedToArray);

  var _has2 = interopRequireDefault(has_1);

  var _keys2 = interopRequireDefault(keys_1);

  var _forEach2 = interopRequireDefault(forEach_1);

  var _filter2 = interopRequireDefault(filter_1);

  var _keyBy2 = interopRequireDefault(keyBy_1);
  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {object} children Element's children
   * @return {object} Mapping of key to child
   */


  var getChildMapping = function getChildMapping(children) {
    return (0, _keyBy2["default"])((0, _filter2["default"])(React__default.Children.toArray(children), React__default.isValidElement), 'key');
  };

  exports.getChildMapping = getChildMapping;

  var getPendingKeys = function getPendingKeys(prev, next) {
    var nextKeysPending = {};
    var pendingKeys = [];
    (0, _forEach2["default"])((0, _keys2["default"])(prev), function (prevKey) {
      if (!(0, _has2["default"])(next, prevKey)) {
        pendingKeys.push(prevKey);
        return;
      }

      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    });
    return [nextKeysPending, pendingKeys];
  };

  var getValue = function getValue(key, prev, next) {
    return (0, _has2["default"])(next, key) ? next[key] : prev[key];
  };
  /**
   * When you're adding or removing children some may be added or removed in the same render pass. We want to show *both*
   * since we want to simultaneously animate elements in and out. This function takes a previous set of keys and a new set
   * of keys and merges them with its best guess of the correct ordering.
   *
   * @param {object} prev Prev children as returned from `getChildMapping()`
   * @param {object} next Next children as returned from `getChildMapping()`
   * @return {object} A key set that contains all keys in `prev` and all keys in `next` in a reasonable order
   */


  var mergeChildMappings = function mergeChildMappings() {
    var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var childMapping = {};

    var _getPendingKeys = getPendingKeys(prev, next),
        _getPendingKeys2 = (0, _slicedToArray2["default"])(_getPendingKeys, 2),
        nextKeysPending = _getPendingKeys2[0],
        pendingKeys = _getPendingKeys2[1];

    (0, _forEach2["default"])((0, _keys2["default"])(next), function (nextKey) {
      if ((0, _has2["default"])(nextKeysPending, nextKey)) {
        (0, _forEach2["default"])(nextKeysPending[nextKey], function (pendingKey) {
          childMapping[pendingKey] = getValue(pendingKey, prev, next);
        });
      }

      childMapping[nextKey] = getValue(nextKey, prev, next);
    });
    (0, _forEach2["default"])(pendingKeys, function (pendingKey) {
      childMapping[pendingKey] = getValue(pendingKey, prev, next);
    });
    return childMapping;
  };

  exports.mergeChildMappings = mergeChildMappings;
});
unwrapExports(childMapping);
var childMapping_1 = childMapping.mergeChildMappings;
var childMapping_2 = childMapping.getChildMapping;

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */

function createFind(findIndexFunc) {
  return function (collection, predicate, fromIndex) {
    var iterable = Object(collection);

    if (!isArrayLike_1(collection)) {
      var iteratee = _baseIteratee(predicate);
      collection = keys_1(collection);

      predicate = function (key) {
        return iteratee(iterable[key], key, iterable);
      };
    }

    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

var _createFind = createFind;

/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax$1 = Math.max;
/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */

function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;

  if (!length) {
    return -1;
  }

  var index = fromIndex == null ? 0 : toInteger_1(fromIndex);

  if (index < 0) {
    index = nativeMax$1(length + index, 0);
  }

  return _baseFindIndex(array, _baseIteratee(predicate), index);
}

var findIndex_1 = findIndex;

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */

var find = _createFind(findIndex_1);
var find_1 = find;

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */

function baseSome(collection, predicate) {
  var result;
  _baseEach(collection, function (value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

var _baseSome = baseSome;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */

function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }

  var type = typeof index;

  if (type == 'number' ? isArrayLike_1(object) && _isIndex(index, object.length) : type == 'string' && index in object) {
    return eq_1(object[index], value);
  }

  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */

function some(collection, predicate, guard) {
  var func = isArray_1(collection) ? _arraySome : _baseSome;

  if (guard && _isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }

  return func(collection, _baseIteratee(predicate));
}

var some_1 = some;

var childrenUtils = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isNil = exports.findByType = exports.someByType = void 0;

  var _find2 = interopRequireDefault(find_1);

  var _some2 = interopRequireDefault(some_1);
  /**
   * Determine if child by type exists in children.
   * @param {Object} children The children prop of a component.
   * @param {string|Function} type An html tag name string or React component.
   * @returns {Boolean}
   */


  var someByType = function someByType(children, type) {
    return (0, _some2["default"])(React__default.Children.toArray(children), {
      type: type
    });
  };
  /**
   * Find child by type.
   * @param {Object} children The children prop of a component.
   * @param {string|Function} type An html tag name string or React component.
   * @returns {undefined|Object}
   */


  exports.someByType = someByType;

  var findByType = function findByType(children, type) {
    return (0, _find2["default"])(React__default.Children.toArray(children), {
      type: type
    });
  };
  /**
   * Tests if children are nil in React and Preact.
   * @param {Object} children The children prop of a component.
   * @returns {Boolean}
   */


  exports.findByType = findByType;

  var isNil = function isNil(children) {
    return children === null || children === undefined || Array.isArray(children) && children.length === 0;
  };

  exports.isNil = isNil;
});
unwrapExports(childrenUtils);
var childrenUtils_1 = childrenUtils.isNil;
var childrenUtils_2 = childrenUtils.findByType;
var childrenUtils_3 = childrenUtils.someByType;

var numberToWord_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.numberToWord = numberToWord;
  exports.numberToWordMap = void 0;

  var _typeof2 = interopRequireDefault(_typeof_1);

  var numberToWordMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen'
    /**
     * Return the number word for numbers 1-16.
     * Returns strings or numbers as is if there is no corresponding word.
     * Returns an empty string if value is not a string or number.
     * @param {string|number} value The value to convert to a word.
     * @returns {string}
     */

  };
  exports.numberToWordMap = numberToWordMap;

  function numberToWord(value) {
    var type = (0, _typeof2["default"])(value);

    if (type === 'string' || type === 'number') {
      return numberToWordMap[value] || value;
    }

    return '';
  }
});
unwrapExports(numberToWord_1);
var numberToWord_2 = numberToWord_1.numberToWord;
var numberToWord_3 = numberToWord_1.numberToWordMap;

var classNameBuilders = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useWidthProp = exports.useVerticalAlignProp = exports.useTextAlignProp = exports.useMultipleProp = exports.useKeyOrValueAndKey = exports.useValueAndKey = exports.useKeyOnly = void 0;

  var _typeof2 = interopRequireDefault(_typeof_1);
  /*
   * There are 3 prop patterns used to build up the className for a component.
   * Each utility here is meant for use in a classnames() argument.
   *
   * There is no util for valueOnly() because it would simply return val.
   * Use the prop value inline instead.
   *   <Label size='big' />
   *   <div class="ui big label"></div>
   */

  /**
   * Props where only the prop key is used in the className.
   * @param {*} val A props value
   * @param {string} key A props key
   *
   * @example
   * <Label tag />
   * <div class="ui tag label"></div>
   */


  var useKeyOnly = function useKeyOnly(val, key) {
    return val && key;
  };
  /**
   * Props that require both a key and value to create a className.
   * @param {*} val A props value
   * @param {string} key A props key
   *
   * @example
   * <Label corner='left' />
   * <div class="ui left corner label"></div>
   */


  exports.useKeyOnly = useKeyOnly;

  var useValueAndKey = function useValueAndKey(val, key) {
    return val && val !== true && "".concat(val, " ").concat(key);
  };
  /**
   * Props whose key will be used in className, or value and key.
   * @param {*} val A props value
   * @param {string} key A props key
   *
   * @example Key Only
   * <Label pointing />
   * <div class="ui pointing label"></div>
   *
   * @example Key and Value
   * <Label pointing='left' />
   * <div class="ui left pointing label"></div>
   */


  exports.useValueAndKey = useValueAndKey;

  var useKeyOrValueAndKey = function useKeyOrValueAndKey(val, key) {
    return val && (val === true ? key : "".concat(val, " ").concat(key));
  }; //
  // Prop to className exceptions
  //

  /**
   * The "multiple" prop implements control of visibility and reserved classes for Grid subcomponents.
   *
   * @param {*} val The value of the "multiple" prop
   * @param {*} key A props key
   *
   * @example
   * <Grid.Row only='mobile' />
   * <Grid.Row only='mobile tablet' />
   * <div class="mobile only row"></div>
   * <div class="mobile only tablet only row"></div>
   */


  exports.useKeyOrValueAndKey = useKeyOrValueAndKey;

  var useMultipleProp = function useMultipleProp(val, key) {
    if (!val || val === true) return null;
    return val.replace('large screen', 'large-screen').replace(/ vertically/g, '-vertically').split(' ').map(function (prop) {
      return "".concat(prop.replace('-', ' '), " ").concat(key);
    }).join(' ');
  };
  /**
   * The "textAlign" prop follows the useValueAndKey except when the value is "justified'.
   * In this case, only the class "justified" is used, ignoring the "aligned" class.
   * @param {*} val The value of the "textAlign" prop
   *
   * @example
   * <Container textAlign='justified' />
   * <div class="ui justified container"></div>
   *
   * @example
   * <Container textAlign='left' />
   * <div class="ui left aligned container"></div>
   */


  exports.useMultipleProp = useMultipleProp;

  var useTextAlignProp = function useTextAlignProp(val) {
    return val === 'justified' ? 'justified' : useValueAndKey(val, 'aligned');
  };
  /**
   * The "verticalAlign" prop follows the useValueAndKey.
   *
   * @param {*} val The value of the "verticalAlign" prop
   *
   * @example
   * <Grid verticalAlign='middle' />
   * <div class="ui middle aligned grid"></div>
   */


  exports.useTextAlignProp = useTextAlignProp;

  var useVerticalAlignProp = function useVerticalAlignProp(val) {
    return useValueAndKey(val, 'aligned');
  };
  /**
   * Create "X", "X wide" and "equal width" classNames.
   * "X" is a numberToWord value and "wide" is configurable.
   * @param {*} val The prop value
   * @param {string} [widthClass=''] The class
   * @param {boolean} [canEqual=false] Flag that indicates possibility of "equal" value
   *
   * @example
   * <Grid columns='equal' />
   * <div class="ui equal width grid"></div>
   *
   * <Form widths='equal' />
   * <div class="ui equal width form"></div>
   *
   * <FieldGroup widths='equal' />
   * <div class="equal width fields"></div>
   *
   * @example
   * <Grid columns={4} />
   * <div class="ui four column grid"></div>
   */


  exports.useVerticalAlignProp = useVerticalAlignProp;

  var useWidthProp = function useWidthProp(val) {
    var widthClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var canEqual = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (canEqual && val === 'equal') {
      return 'equal width';
    }

    var valType = (0, _typeof2["default"])(val);

    if ((valType === 'string' || valType === 'number') && widthClass) {
      return "".concat((0, numberToWord_1.numberToWord)(val), " ").concat(widthClass);
    }

    return (0, numberToWord_1.numberToWord)(val);
  };

  exports.useWidthProp = useWidthProp;
});
unwrapExports(classNameBuilders);
var classNameBuilders_1 = classNameBuilders.useWidthProp;
var classNameBuilders_2 = classNameBuilders.useVerticalAlignProp;
var classNameBuilders_3 = classNameBuilders.useTextAlignProp;
var classNameBuilders_4 = classNameBuilders.useMultipleProp;
var classNameBuilders_5 = classNameBuilders.useKeyOrValueAndKey;
var classNameBuilders_6 = classNameBuilders.useValueAndKey;
var classNameBuilders_7 = classNameBuilders.useKeyOnly;

var _mapping = createCommonjsModule(function (module, exports) {
  /** Used to map aliases to their real names. */
  exports.aliasToReal = {
    // Lodash aliases.
    'each': 'forEach',
    'eachRight': 'forEachRight',
    'entries': 'toPairs',
    'entriesIn': 'toPairsIn',
    'extend': 'assignIn',
    'extendAll': 'assignInAll',
    'extendAllWith': 'assignInAllWith',
    'extendWith': 'assignInWith',
    'first': 'head',
    // Methods that are curried variants of others.
    'conforms': 'conformsTo',
    'matches': 'isMatch',
    'property': 'get',
    // Ramda aliases.
    '__': 'placeholder',
    'F': 'stubFalse',
    'T': 'stubTrue',
    'all': 'every',
    'allPass': 'overEvery',
    'always': 'constant',
    'any': 'some',
    'anyPass': 'overSome',
    'apply': 'spread',
    'assoc': 'set',
    'assocPath': 'set',
    'complement': 'negate',
    'compose': 'flowRight',
    'contains': 'includes',
    'dissoc': 'unset',
    'dissocPath': 'unset',
    'dropLast': 'dropRight',
    'dropLastWhile': 'dropRightWhile',
    'equals': 'isEqual',
    'identical': 'eq',
    'indexBy': 'keyBy',
    'init': 'initial',
    'invertObj': 'invert',
    'juxt': 'over',
    'omitAll': 'omit',
    'nAry': 'ary',
    'path': 'get',
    'pathEq': 'matchesProperty',
    'pathOr': 'getOr',
    'paths': 'at',
    'pickAll': 'pick',
    'pipe': 'flow',
    'pluck': 'map',
    'prop': 'get',
    'propEq': 'matchesProperty',
    'propOr': 'getOr',
    'props': 'at',
    'symmetricDifference': 'xor',
    'symmetricDifferenceBy': 'xorBy',
    'symmetricDifferenceWith': 'xorWith',
    'takeLast': 'takeRight',
    'takeLastWhile': 'takeRightWhile',
    'unapply': 'rest',
    'unnest': 'flatten',
    'useWith': 'overArgs',
    'where': 'conformsTo',
    'whereEq': 'isMatch',
    'zipObj': 'zipObject'
  };
  /** Used to map ary to method names. */

  exports.aryMethod = {
    '1': ['assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create', 'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow', 'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll', 'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome', 'rest', 'reverse', 'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart', 'uniqueId', 'words', 'zipAll'],
    '2': ['add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith', 'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith', 'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN', 'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference', 'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq', 'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex', 'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach', 'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get', 'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection', 'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy', 'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty', 'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit', 'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial', 'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll', 'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove', 'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex', 'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy', 'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight', 'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars', 'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith', 'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject', 'zipObjectDeep'],
    '3': ['assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith', 'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr', 'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith', 'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth', 'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd', 'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight', 'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy', 'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy', 'xorWith', 'zipWith'],
    '4': ['fill', 'setWith', 'updateWith']
  };
  /** Used to map ary to rearg configs. */

  exports.aryRearg = {
    '2': [1, 0],
    '3': [2, 0, 1],
    '4': [3, 2, 0, 1]
  };
  /** Used to map method names to their iteratee ary. */

  exports.iterateeAry = {
    'dropRightWhile': 1,
    'dropWhile': 1,
    'every': 1,
    'filter': 1,
    'find': 1,
    'findFrom': 1,
    'findIndex': 1,
    'findIndexFrom': 1,
    'findKey': 1,
    'findLast': 1,
    'findLastFrom': 1,
    'findLastIndex': 1,
    'findLastIndexFrom': 1,
    'findLastKey': 1,
    'flatMap': 1,
    'flatMapDeep': 1,
    'flatMapDepth': 1,
    'forEach': 1,
    'forEachRight': 1,
    'forIn': 1,
    'forInRight': 1,
    'forOwn': 1,
    'forOwnRight': 1,
    'map': 1,
    'mapKeys': 1,
    'mapValues': 1,
    'partition': 1,
    'reduce': 2,
    'reduceRight': 2,
    'reject': 1,
    'remove': 1,
    'some': 1,
    'takeRightWhile': 1,
    'takeWhile': 1,
    'times': 1,
    'transform': 2
  };
  /** Used to map method names to iteratee rearg configs. */

  exports.iterateeRearg = {
    'mapKeys': [1],
    'reduceRight': [1, 0]
  };
  /** Used to map method names to rearg configs. */

  exports.methodRearg = {
    'assignInAllWith': [1, 0],
    'assignInWith': [1, 2, 0],
    'assignAllWith': [1, 0],
    'assignWith': [1, 2, 0],
    'differenceBy': [1, 2, 0],
    'differenceWith': [1, 2, 0],
    'getOr': [2, 1, 0],
    'intersectionBy': [1, 2, 0],
    'intersectionWith': [1, 2, 0],
    'isEqualWith': [1, 2, 0],
    'isMatchWith': [2, 1, 0],
    'mergeAllWith': [1, 0],
    'mergeWith': [1, 2, 0],
    'padChars': [2, 1, 0],
    'padCharsEnd': [2, 1, 0],
    'padCharsStart': [2, 1, 0],
    'pullAllBy': [2, 1, 0],
    'pullAllWith': [2, 1, 0],
    'rangeStep': [1, 2, 0],
    'rangeStepRight': [1, 2, 0],
    'setWith': [3, 1, 2, 0],
    'sortedIndexBy': [2, 1, 0],
    'sortedLastIndexBy': [2, 1, 0],
    'unionBy': [1, 2, 0],
    'unionWith': [1, 2, 0],
    'updateWith': [3, 1, 2, 0],
    'xorBy': [1, 2, 0],
    'xorWith': [1, 2, 0],
    'zipWith': [1, 2, 0]
  };
  /** Used to map method names to spread configs. */

  exports.methodSpread = {
    'assignAll': {
      'start': 0
    },
    'assignAllWith': {
      'start': 0
    },
    'assignInAll': {
      'start': 0
    },
    'assignInAllWith': {
      'start': 0
    },
    'defaultsAll': {
      'start': 0
    },
    'defaultsDeepAll': {
      'start': 0
    },
    'invokeArgs': {
      'start': 2
    },
    'invokeArgsMap': {
      'start': 2
    },
    'mergeAll': {
      'start': 0
    },
    'mergeAllWith': {
      'start': 0
    },
    'partial': {
      'start': 1
    },
    'partialRight': {
      'start': 1
    },
    'without': {
      'start': 1
    },
    'zipAll': {
      'start': 0
    }
  };
  /** Used to identify methods which mutate arrays or objects. */

  exports.mutate = {
    'array': {
      'fill': true,
      'pull': true,
      'pullAll': true,
      'pullAllBy': true,
      'pullAllWith': true,
      'pullAt': true,
      'remove': true,
      'reverse': true
    },
    'object': {
      'assign': true,
      'assignAll': true,
      'assignAllWith': true,
      'assignIn': true,
      'assignInAll': true,
      'assignInAllWith': true,
      'assignInWith': true,
      'assignWith': true,
      'defaults': true,
      'defaultsAll': true,
      'defaultsDeep': true,
      'defaultsDeepAll': true,
      'merge': true,
      'mergeAll': true,
      'mergeAllWith': true,
      'mergeWith': true
    },
    'set': {
      'set': true,
      'setWith': true,
      'unset': true,
      'update': true,
      'updateWith': true
    }
  };
  /** Used to map real names to their aliases. */

  exports.realToAlias = function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        object = exports.aliasToReal,
        result = {};

    for (var key in object) {
      var value = object[key];

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }

    return result;
  }();
  /** Used to map method names to other names. */


  exports.remap = {
    'assignAll': 'assign',
    'assignAllWith': 'assignWith',
    'assignInAll': 'assignIn',
    'assignInAllWith': 'assignInWith',
    'curryN': 'curry',
    'curryRightN': 'curryRight',
    'defaultsAll': 'defaults',
    'defaultsDeepAll': 'defaultsDeep',
    'findFrom': 'find',
    'findIndexFrom': 'findIndex',
    'findLastFrom': 'findLast',
    'findLastIndexFrom': 'findLastIndex',
    'getOr': 'get',
    'includesFrom': 'includes',
    'indexOfFrom': 'indexOf',
    'invokeArgs': 'invoke',
    'invokeArgsMap': 'invokeMap',
    'lastIndexOfFrom': 'lastIndexOf',
    'mergeAll': 'merge',
    'mergeAllWith': 'mergeWith',
    'padChars': 'pad',
    'padCharsEnd': 'padEnd',
    'padCharsStart': 'padStart',
    'propertyOf': 'get',
    'rangeStep': 'range',
    'rangeStepRight': 'rangeRight',
    'restFrom': 'rest',
    'spreadFrom': 'spread',
    'trimChars': 'trim',
    'trimCharsEnd': 'trimEnd',
    'trimCharsStart': 'trimStart',
    'zipAll': 'zip'
  };
  /** Used to track methods that skip fixing their arity. */

  exports.skipFixed = {
    'castArray': true,
    'flow': true,
    'flowRight': true,
    'iteratee': true,
    'mixin': true,
    'rearg': true,
    'runInContext': true
  };
  /** Used to track methods that skip rearranging arguments. */

  exports.skipRearg = {
    'add': true,
    'assign': true,
    'assignIn': true,
    'bind': true,
    'bindKey': true,
    'concat': true,
    'difference': true,
    'divide': true,
    'eq': true,
    'gt': true,
    'gte': true,
    'isEqual': true,
    'lt': true,
    'lte': true,
    'matchesProperty': true,
    'merge': true,
    'multiply': true,
    'overArgs': true,
    'partial': true,
    'partialRight': true,
    'propertyOf': true,
    'random': true,
    'range': true,
    'rangeRight': true,
    'subtract': true,
    'zip': true,
    'zipObject': true,
    'zipObjectDeep': true
  };
});
var _mapping_1 = _mapping.aliasToReal;
var _mapping_2 = _mapping.aryMethod;
var _mapping_3 = _mapping.aryRearg;
var _mapping_4 = _mapping.iterateeAry;
var _mapping_5 = _mapping.iterateeRearg;
var _mapping_6 = _mapping.methodRearg;
var _mapping_7 = _mapping.methodSpread;
var _mapping_8 = _mapping.mutate;
var _mapping_9 = _mapping.realToAlias;
var _mapping_10 = _mapping.remap;
var _mapping_11 = _mapping.skipFixed;
var _mapping_12 = _mapping.skipRearg;

/**
 * The default argument placeholder value for methods.
 *
 * @type {Object}
 */
var placeholder = {};

/** Built-in value reference. */

var push = Array.prototype.push;
/**
 * Creates a function, with an arity of `n`, that invokes `func` with the
 * arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} n The arity of the new function.
 * @returns {Function} Returns the new function.
 */

function baseArity(func, n) {
  return n == 2 ? function (a, b) {
    return func.apply(undefined, arguments);
  } : function (a) {
    return func.apply(undefined, arguments);
  };
}
/**
 * Creates a function that invokes `func`, with up to `n` arguments, ignoring
 * any additional arguments.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @param {number} n The arity cap.
 * @returns {Function} Returns the new function.
 */


function baseAry(func, n) {
  return n == 2 ? function (a, b) {
    return func(a, b);
  } : function (a) {
    return func(a);
  };
}
/**
 * Creates a clone of `array`.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the cloned array.
 */


function cloneArray(array) {
  var length = array ? array.length : 0,
      result = Array(length);

  while (length--) {
    result[length] = array[length];
  }

  return result;
}
/**
 * Creates a function that clones a given object using the assignment `func`.
 *
 * @private
 * @param {Function} func The assignment function.
 * @returns {Function} Returns the new cloner function.
 */


function createCloner(func) {
  return function (object) {
    return func({}, object);
  };
}
/**
 * A specialized version of `_.spread` which flattens the spread array into
 * the arguments of the invoked `func`.
 *
 * @private
 * @param {Function} func The function to spread arguments over.
 * @param {number} start The start position of the spread.
 * @returns {Function} Returns the new function.
 */


function flatSpread(func, start) {
  return function () {
    var length = arguments.length,
        lastIndex = length - 1,
        args = Array(length);

    while (length--) {
      args[length] = arguments[length];
    }

    var array = args[start],
        otherArgs = args.slice(0, start);

    if (array) {
      push.apply(otherArgs, array);
    }

    if (start != lastIndex) {
      push.apply(otherArgs, args.slice(start + 1));
    }

    return func.apply(this, otherArgs);
  };
}
/**
 * Creates a function that wraps `func` and uses `cloner` to clone the first
 * argument it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} cloner The function to clone arguments.
 * @returns {Function} Returns the new immutable function.
 */


function wrapImmutable(func, cloner) {
  return function () {
    var length = arguments.length;

    if (!length) {
      return;
    }

    var args = Array(length);

    while (length--) {
      args[length] = arguments[length];
    }

    var result = args[0] = cloner.apply(undefined, args);
    func.apply(undefined, args);
    return result;
  };
}
/**
 * The base implementation of `convert` which accepts a `util` object of methods
 * required to perform conversions.
 *
 * @param {Object} util The util object.
 * @param {string} name The name of the function to convert.
 * @param {Function} func The function to convert.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.cap=true] Specify capping iteratee arguments.
 * @param {boolean} [options.curry=true] Specify currying.
 * @param {boolean} [options.fixed=true] Specify fixed arity.
 * @param {boolean} [options.immutable=true] Specify immutable operations.
 * @param {boolean} [options.rearg=true] Specify rearranging arguments.
 * @returns {Function|Object} Returns the converted function or object.
 */


function baseConvert(util, name, func, options) {
  var isLib = typeof name == 'function',
      isObj = name === Object(name);

  if (isObj) {
    options = func;
    func = name;
    name = undefined;
  }

  if (func == null) {
    throw new TypeError();
  }

  options || (options = {});
  var config = {
    'cap': 'cap' in options ? options.cap : true,
    'curry': 'curry' in options ? options.curry : true,
    'fixed': 'fixed' in options ? options.fixed : true,
    'immutable': 'immutable' in options ? options.immutable : true,
    'rearg': 'rearg' in options ? options.rearg : true
  };
  var defaultHolder = isLib ? func : placeholder,
      forceCurry = 'curry' in options && options.curry,
      forceFixed = 'fixed' in options && options.fixed,
      forceRearg = 'rearg' in options && options.rearg,
      pristine = isLib ? func.runInContext() : undefined;
  var helpers = isLib ? func : {
    'ary': util.ary,
    'assign': util.assign,
    'clone': util.clone,
    'curry': util.curry,
    'forEach': util.forEach,
    'isArray': util.isArray,
    'isError': util.isError,
    'isFunction': util.isFunction,
    'isWeakMap': util.isWeakMap,
    'iteratee': util.iteratee,
    'keys': util.keys,
    'rearg': util.rearg,
    'toInteger': util.toInteger,
    'toPath': util.toPath
  };
  var ary = helpers.ary,
      assign = helpers.assign,
      clone = helpers.clone,
      curry = helpers.curry,
      each = helpers.forEach,
      isArray = helpers.isArray,
      isError = helpers.isError,
      isFunction = helpers.isFunction,
      isWeakMap = helpers.isWeakMap,
      keys = helpers.keys,
      rearg = helpers.rearg,
      toInteger = helpers.toInteger,
      toPath = helpers.toPath;
  var aryMethodKeys = keys(_mapping.aryMethod);
  var wrappers = {
    'castArray': function (castArray) {
      return function () {
        var value = arguments[0];
        return isArray(value) ? castArray(cloneArray(value)) : castArray.apply(undefined, arguments);
      };
    },
    'iteratee': function (iteratee) {
      return function () {
        var func = arguments[0],
            arity = arguments[1],
            result = iteratee(func, arity),
            length = result.length;

        if (config.cap && typeof arity == 'number') {
          arity = arity > 2 ? arity - 2 : 1;
          return length && length <= arity ? result : baseAry(result, arity);
        }

        return result;
      };
    },
    'mixin': function (mixin) {
      return function (source) {
        var func = this;

        if (!isFunction(func)) {
          return mixin(func, Object(source));
        }

        var pairs = [];
        each(keys(source), function (key) {
          if (isFunction(source[key])) {
            pairs.push([key, func.prototype[key]]);
          }
        });
        mixin(func, Object(source));
        each(pairs, function (pair) {
          var value = pair[1];

          if (isFunction(value)) {
            func.prototype[pair[0]] = value;
          } else {
            delete func.prototype[pair[0]];
          }
        });
        return func;
      };
    },
    'nthArg': function (nthArg) {
      return function (n) {
        var arity = n < 0 ? 1 : toInteger(n) + 1;
        return curry(nthArg(n), arity);
      };
    },
    'rearg': function (rearg) {
      return function (func, indexes) {
        var arity = indexes ? indexes.length : 0;
        return curry(rearg(func, indexes), arity);
      };
    },
    'runInContext': function (runInContext) {
      return function (context) {
        return baseConvert(util, runInContext(context), options);
      };
    }
  };
  /*--------------------------------------------------------------------------*/

  /**
   * Casts `func` to a function with an arity capped iteratee if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @returns {Function} Returns the cast function.
   */

  function castCap(name, func) {
    if (config.cap) {
      var indexes = _mapping.iterateeRearg[name];

      if (indexes) {
        return iterateeRearg(func, indexes);
      }

      var n = !isLib && _mapping.iterateeAry[name];

      if (n) {
        return iterateeAry(func, n);
      }
    }

    return func;
  }
  /**
   * Casts `func` to a curried function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */


  function castCurry(name, func, n) {
    return forceCurry || config.curry && n > 1 ? curry(func, n) : func;
  }
  /**
   * Casts `func` to a fixed arity function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the cast function.
   */


  function castFixed(name, func, n) {
    if (config.fixed && (forceFixed || !_mapping.skipFixed[name])) {
      var data = _mapping.methodSpread[name],
          start = data && data.start;
      return start === undefined ? ary(func, n) : flatSpread(func, start);
    }

    return func;
  }
  /**
   * Casts `func` to an rearged function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */


  function castRearg(name, func, n) {
    return config.rearg && n > 1 && (forceRearg || !_mapping.skipRearg[name]) ? rearg(func, _mapping.methodRearg[name] || _mapping.aryRearg[n]) : func;
  }
  /**
   * Creates a clone of `object` by `path`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {Array|string} path The path to clone by.
   * @returns {Object} Returns the cloned object.
   */


  function cloneByPath(object, path) {
    path = toPath(path);
    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        result = clone(Object(object)),
        nested = result;

    while (nested != null && ++index < length) {
      var key = path[index],
          value = nested[key];

      if (value != null && !(isFunction(value) || isError(value) || isWeakMap(value))) {
        nested[key] = clone(index == lastIndex ? value : Object(value));
      }

      nested = nested[key];
    }

    return result;
  }
  /**
   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
   * version with conversion `options` applied.
   *
   * @param {Object} [options] The options object. See `baseConvert` for more details.
   * @returns {Function} Returns the converted `lodash`.
   */


  function convertLib(options) {
    return _.runInContext.convert(options)(undefined);
  }
  /**
   * Create a converter function for `func` of `name`.
   *
   * @param {string} name The name of the function to convert.
   * @param {Function} func The function to convert.
   * @returns {Function} Returns the new converter function.
   */


  function createConverter(name, func) {
    var realName = _mapping.aliasToReal[name] || name,
        methodName = _mapping.remap[realName] || realName,
        oldOptions = options;
    return function (options) {
      var newUtil = isLib ? pristine : helpers,
          newFunc = isLib ? pristine[methodName] : func,
          newOptions = assign(assign({}, oldOptions), options);
      return baseConvert(newUtil, realName, newFunc, newOptions);
    };
  }
  /**
   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`
   * arguments, ignoring any additional arguments.
   *
   * @private
   * @param {Function} func The function to cap iteratee arguments for.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the new function.
   */


  function iterateeAry(func, n) {
    return overArg(func, function (func) {
      return typeof func == 'function' ? baseAry(func, n) : func;
    });
  }
  /**
   * Creates a function that wraps `func` to invoke its iteratee with arguments
   * arranged according to the specified `indexes` where the argument value at
   * the first index is provided as the first argument, the argument value at
   * the second index is provided as the second argument, and so on.
   *
   * @private
   * @param {Function} func The function to rearrange iteratee arguments for.
   * @param {number[]} indexes The arranged argument indexes.
   * @returns {Function} Returns the new function.
   */


  function iterateeRearg(func, indexes) {
    return overArg(func, function (func) {
      var n = indexes.length;
      return baseArity(rearg(baseAry(func, n), indexes), n);
    });
  }
  /**
   * Creates a function that invokes `func` with its first argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */


  function overArg(func, transform) {
    return function () {
      var length = arguments.length;

      if (!length) {
        return func();
      }

      var args = Array(length);

      while (length--) {
        args[length] = arguments[length];
      }

      var index = config.rearg ? 0 : length - 1;
      args[index] = transform(args[index]);
      return func.apply(undefined, args);
    };
  }
  /**
   * Creates a function that wraps `func` and applys the conversions
   * rules by `name`.
   *
   * @private
   * @param {string} name The name of the function to wrap.
   * @param {Function} func The function to wrap.
   * @returns {Function} Returns the converted function.
   */


  function wrap(name, func, placeholder) {
    var result,
        realName = _mapping.aliasToReal[name] || name,
        wrapped = func,
        wrapper = wrappers[realName];

    if (wrapper) {
      wrapped = wrapper(func);
    } else if (config.immutable) {
      if (_mapping.mutate.array[realName]) {
        wrapped = wrapImmutable(func, cloneArray);
      } else if (_mapping.mutate.object[realName]) {
        wrapped = wrapImmutable(func, createCloner(func));
      } else if (_mapping.mutate.set[realName]) {
        wrapped = wrapImmutable(func, cloneByPath);
      }
    }

    each(aryMethodKeys, function (aryKey) {
      each(_mapping.aryMethod[aryKey], function (otherName) {
        if (realName == otherName) {
          var data = _mapping.methodSpread[realName],
              afterRearg = data && data.afterRearg;
          result = afterRearg ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey) : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);
          result = castCap(realName, result);
          result = castCurry(realName, result, aryKey);
          return false;
        }
      });
      return !result;
    });
    result || (result = wrapped);

    if (result == func) {
      result = forceCurry ? curry(result, 1) : function () {
        return func.apply(this, arguments);
      };
    }

    result.convert = createConverter(realName, func);
    result.placeholder = func.placeholder = placeholder;
    return result;
  }
  /*--------------------------------------------------------------------------*/


  if (!isObj) {
    return wrap(name, func, defaultHolder);
  }

  var _ = func; // Convert methods by ary cap.

  var pairs = [];
  each(aryMethodKeys, function (aryKey) {
    each(_mapping.aryMethod[aryKey], function (key) {
      var func = _[_mapping.remap[key] || key];

      if (func) {
        pairs.push([key, wrap(key, func, _)]);
      }
    });
  }); // Convert remaining methods.

  each(keys(_), function (key) {
    var func = _[key];

    if (typeof func == 'function') {
      var length = pairs.length;

      while (length--) {
        if (pairs[length][0] == key) {
          return;
        }
      }

      func.convert = createConverter(key, func);
      pairs.push([key, func]);
    }
  }); // Assign to `_` leaving `_.prototype` unchanged to allow chaining.

  each(pairs, function (pair) {
    _[pair[0]] = pair[1];
  });
  _.convert = convertLib;
  _.placeholder = _; // Assign aliases.

  each(keys(_), function (key) {
    each(_mapping.realToAlias[key] || [], function (alias) {
      _[alias] = _[key];
    });
  });
  return _;
}

var _baseConvert = baseConvert;

/** Used to store function metadata. */

var metaMap = _WeakMap && new _WeakMap();
var _metaMap = metaMap;

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */

var baseSetData = !_metaMap ? identity_1 : function (func, data) {
  _metaMap.set(func, data);
  return func;
};
var _baseSetData = baseSetData;

/** Built-in value references. */

var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject_1(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

var _baseCreate = baseCreate;

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */

function createCtor(Ctor) {
  return function () {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;

    switch (args.length) {
      case 0:
        return new Ctor();

      case 1:
        return new Ctor(args[0]);

      case 2:
        return new Ctor(args[0], args[1]);

      case 3:
        return new Ctor(args[0], args[1], args[2]);

      case 4:
        return new Ctor(args[0], args[1], args[2], args[3]);

      case 5:
        return new Ctor(args[0], args[1], args[2], args[3], args[4]);

      case 6:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);

      case 7:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }

    var thisBinding = _baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args); // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.

    return isObject_1(result) ? result : thisBinding;
  };
}

var _createCtor = createCtor;

/** Used to compose bitmasks for function metadata. */

var WRAP_BIND_FLAG = 1;
/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */

function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = _createCtor(func);

  function wrapper() {
    var fn = this && this !== _root && this instanceof wrapper ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }

  return wrapper;
}

var _createBind = createBind;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$2 = Math.max;
/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */

function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax$2(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }

  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }

  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }

  return result;
}

var _composeArgs = composeArgs;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$3 = Math.max;
/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */

function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax$3(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }

  var offset = argsIndex;

  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }

  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }

  return result;
}

var _composeArgsRight = composeArgsRight;

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }

  return result;
}

var _countHolders = countHolders;

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {// No operation performed.
}

var _baseLodash = baseLodash;

/** Used as references for the maximum length and index of an array. */

var MAX_ARRAY_LENGTH = 4294967295;
/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */

function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
} // Ensure `LazyWrapper` is an instance of `baseLodash`.


LazyWrapper.prototype = _baseCreate(_baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;
var _LazyWrapper = LazyWrapper;

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {// No operation performed.
}

var noop_1 = noop;

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */

var getData = !_metaMap ? noop_1 : function (func) {
  return _metaMap.get(func);
};
var _getData = getData;

/** Used to lookup unminified function names. */
var realNames = {};
var _realNames = realNames;

/** Used for built-in method references. */

var objectProto$e = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$c = objectProto$e.hasOwnProperty;
/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */

function getFuncName(func) {
  var result = func.name + '',
      array = _realNames[result],
      length = hasOwnProperty$c.call(_realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;

    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }

  return result;
}

var _getFuncName = getFuncName;

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */

function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = _baseCreate(_baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;
var _LodashWrapper = LodashWrapper;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

var _copyArray = copyArray;

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */

function wrapperClone(wrapper) {
  if (wrapper instanceof _LazyWrapper) {
    return wrapper.clone();
  }

  var result = new _LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = _copyArray(wrapper.__actions__);
  result.__index__ = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

var _wrapperClone = wrapperClone;

/** Used for built-in method references. */

var objectProto$f = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$d = objectProto$f.hasOwnProperty;
/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */

function lodash(value) {
  if (isObjectLike_1(value) && !isArray_1(value) && !(value instanceof _LazyWrapper)) {
    if (value instanceof _LodashWrapper) {
      return value;
    }

    if (hasOwnProperty$d.call(value, '__wrapped__')) {
      return _wrapperClone(value);
    }
  }

  return new _LodashWrapper(value);
} // Ensure wrappers are instances of `baseLodash`.


lodash.prototype = _baseLodash.prototype;
lodash.prototype.constructor = lodash;
var wrapperLodash = lodash;

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */

function isLaziable(func) {
  var funcName = _getFuncName(func),
      other = wrapperLodash[funcName];

  if (typeof other != 'function' || !(funcName in _LazyWrapper.prototype)) {
    return false;
  }

  if (func === other) {
    return true;
  }

  var data = _getData(other);
  return !!data && func === data[0];
}

var _isLaziable = isLaziable;

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */

var setData = _shortOut(_baseSetData);
var _setData = setData;

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;
/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */

function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

var _getWrapDetails = getWrapDetails;

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */

function insertWrapDetails(source, details) {
  var length = details.length;

  if (!length) {
    return source;
  }

  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

var _insertWrapDetails = insertWrapDetails;

/** Used to compose bitmasks for function metadata. */

var WRAP_BIND_FLAG$1 = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;
/** Used to associate wrap methods with their bit flags. */

var wrapFlags = [['ary', WRAP_ARY_FLAG], ['bind', WRAP_BIND_FLAG$1], ['bindKey', WRAP_BIND_KEY_FLAG], ['curry', WRAP_CURRY_FLAG], ['curryRight', WRAP_CURRY_RIGHT_FLAG], ['flip', WRAP_FLIP_FLAG], ['partial', WRAP_PARTIAL_FLAG], ['partialRight', WRAP_PARTIAL_RIGHT_FLAG], ['rearg', WRAP_REARG_FLAG]];
/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */

function updateWrapDetails(details, bitmask) {
  _arrayEach(wrapFlags, function (pair) {
    var value = '_.' + pair[0];

    if (bitmask & pair[1] && !_arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

var _updateWrapDetails = updateWrapDetails;

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */

function setWrapToString(wrapper, reference, bitmask) {
  var source = reference + '';
  return _setToString(wrapper, _insertWrapDetails(source, _updateWrapDetails(_getWrapDetails(source), bitmask)));
}

var _setWrapToString = setWrapToString;

/** Used to compose bitmasks for function metadata. */

var WRAP_BIND_FLAG$2 = 1,
    WRAP_BIND_KEY_FLAG$1 = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG$1 = 8,
    WRAP_PARTIAL_FLAG$1 = 32,
    WRAP_PARTIAL_RIGHT_FLAG$1 = 64;
/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */

function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG$1,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;
  bitmask |= isCurry ? WRAP_PARTIAL_FLAG$1 : WRAP_PARTIAL_RIGHT_FLAG$1;
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG$1 : WRAP_PARTIAL_FLAG$1);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG$2 | WRAP_BIND_KEY_FLAG$1);
  }

  var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity];
  var result = wrapFunc.apply(undefined, newData);

  if (_isLaziable(func)) {
    _setData(result, newData);
  }

  result.placeholder = placeholder;
  return _setWrapToString(result, func, bitmask);
}

var _createRecurry = createRecurry;

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

var _getHolder = getHolder;

/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMin$1 = Math.min;
/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */

function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin$1(indexes.length, arrLength),
      oldArray = _copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = _isIndex(index, arrLength) ? oldArray[index] : undefined;
  }

  return array;
}

var _reorder = reorder;

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';
/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */

function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }

  return result;
}

var _replaceHolders = replaceHolders;

/** Used to compose bitmasks for function metadata. */

var WRAP_BIND_FLAG$3 = 1,
    WRAP_BIND_KEY_FLAG$2 = 2,
    WRAP_CURRY_FLAG$2 = 8,
    WRAP_CURRY_RIGHT_FLAG$1 = 16,
    WRAP_ARY_FLAG$1 = 128,
    WRAP_FLIP_FLAG$1 = 512;
/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */

function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG$1,
      isBind = bitmask & WRAP_BIND_FLAG$3,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG$2,
      isCurried = bitmask & (WRAP_CURRY_FLAG$2 | WRAP_CURRY_RIGHT_FLAG$1),
      isFlip = bitmask & WRAP_FLIP_FLAG$1,
      Ctor = isBindKey ? undefined : _createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }

    if (isCurried) {
      var placeholder = _getHolder(wrapper),
          holdersCount = _countHolders(args, placeholder);
    }

    if (partials) {
      args = _composeArgs(args, partials, holders, isCurried);
    }

    if (partialsRight) {
      args = _composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }

    length -= holdersCount;

    if (isCurried && length < arity) {
      var newHolders = _replaceHolders(args, placeholder);
      return _createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
    }

    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;
    length = args.length;

    if (argPos) {
      args = _reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }

    if (isAry && ary < length) {
      args.length = ary;
    }

    if (this && this !== _root && this instanceof wrapper) {
      fn = Ctor || _createCtor(fn);
    }

    return fn.apply(thisBinding, args);
  }

  return wrapper;
}

var _createHybrid = createHybrid;

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */

function createCurry(func, bitmask, arity) {
  var Ctor = _createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = _getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }

    var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : _replaceHolders(args, placeholder);
    length -= holders.length;

    if (length < arity) {
      return _createRecurry(func, bitmask, _createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
    }

    var fn = this && this !== _root && this instanceof wrapper ? Ctor : func;
    return _apply(fn, this, args);
  }

  return wrapper;
}

var _createCurry = createCurry;

/** Used to compose bitmasks for function metadata. */

var WRAP_BIND_FLAG$4 = 1;
/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */

function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG$4,
      Ctor = _createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = this && this !== _root && this instanceof wrapper ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }

    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }

    return _apply(fn, isBind ? thisArg : this, args);
  }

  return wrapper;
}

var _createPartial = createPartial;

/** Used as the internal argument placeholder. */

var PLACEHOLDER$1 = '__lodash_placeholder__';
/** Used to compose bitmasks for function metadata. */

var WRAP_BIND_FLAG$5 = 1,
    WRAP_BIND_KEY_FLAG$3 = 2,
    WRAP_CURRY_BOUND_FLAG$1 = 4,
    WRAP_CURRY_FLAG$3 = 8,
    WRAP_ARY_FLAG$2 = 128,
    WRAP_REARG_FLAG$1 = 256;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMin$2 = Math.min;
/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */

function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG$5 | WRAP_BIND_KEY_FLAG$3 | WRAP_ARY_FLAG$2);
  var isCombo = srcBitmask == WRAP_ARY_FLAG$2 && bitmask == WRAP_CURRY_FLAG$3 || srcBitmask == WRAP_ARY_FLAG$2 && bitmask == WRAP_REARG_FLAG$1 && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG$2 | WRAP_REARG_FLAG$1) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG$3; // Exit early if metadata can't be merged.

  if (!(isCommon || isCombo)) {
    return data;
  } // Use source `thisArg` if available.


  if (srcBitmask & WRAP_BIND_FLAG$5) {
    data[2] = source[2]; // Set when currying a bound function.

    newBitmask |= bitmask & WRAP_BIND_FLAG$5 ? 0 : WRAP_CURRY_BOUND_FLAG$1;
  } // Compose partial arguments.


  var value = source[3];

  if (value) {
    var partials = data[3];
    data[3] = partials ? _composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? _replaceHolders(data[3], PLACEHOLDER$1) : source[4];
  } // Compose partial right arguments.


  value = source[5];

  if (value) {
    partials = data[5];
    data[5] = partials ? _composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? _replaceHolders(data[5], PLACEHOLDER$1) : source[6];
  } // Use source `argPos` if available.


  value = source[7];

  if (value) {
    data[7] = value;
  } // Use source `ary` if it's smaller.


  if (srcBitmask & WRAP_ARY_FLAG$2) {
    data[8] = data[8] == null ? source[8] : nativeMin$2(data[8], source[8]);
  } // Use source `arity` if one is not provided.


  if (data[9] == null) {
    data[9] = source[9];
  } // Use source `func` and merge bitmasks.


  data[0] = source[0];
  data[1] = newBitmask;
  return data;
}

var _mergeData = mergeData;

/** Error message constants. */

var FUNC_ERROR_TEXT$1 = 'Expected a function';
/** Used to compose bitmasks for function metadata. */

var WRAP_BIND_FLAG$6 = 1,
    WRAP_BIND_KEY_FLAG$4 = 2,
    WRAP_CURRY_FLAG$4 = 8,
    WRAP_CURRY_RIGHT_FLAG$2 = 16,
    WRAP_PARTIAL_FLAG$2 = 32,
    WRAP_PARTIAL_RIGHT_FLAG$2 = 64;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax$4 = Math.max;
/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */

function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG$4;

  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }

  var length = partials ? partials.length : 0;

  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG$2 | WRAP_PARTIAL_RIGHT_FLAG$2);
    partials = holders = undefined;
  }

  ary = ary === undefined ? ary : nativeMax$4(toInteger_1(ary), 0);
  arity = arity === undefined ? arity : toInteger_1(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG$2) {
    var partialsRight = partials,
        holdersRight = holders;
    partials = holders = undefined;
  }

  var data = isBindKey ? undefined : _getData(func);
  var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

  if (data) {
    _mergeData(newData, data);
  }

  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax$4(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$2)) {
    bitmask &= ~(WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$2);
  }

  if (!bitmask || bitmask == WRAP_BIND_FLAG$6) {
    var result = _createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG$4 || bitmask == WRAP_CURRY_RIGHT_FLAG$2) {
    result = _createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG$2 || bitmask == (WRAP_BIND_FLAG$6 | WRAP_PARTIAL_FLAG$2)) && !holders.length) {
    result = _createPartial(func, bitmask, thisArg, partials);
  } else {
    result = _createHybrid.apply(undefined, newData);
  }

  var setter = data ? _baseSetData : _setData;
  return _setWrapToString(setter(result, newData), func, bitmask);
}

var _createWrap = createWrap;

/** Used to compose bitmasks for function metadata. */

var WRAP_ARY_FLAG$3 = 128;
/**
 * Creates a function that invokes `func`, with up to `n` arguments,
 * ignoring any additional arguments.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @param {number} [n=func.length] The arity cap.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
 * // => [6, 8, 10]
 */

function ary(func, n, guard) {
  n = guard ? undefined : n;
  n = func && n == null ? func.length : n;
  return _createWrap(func, WRAP_ARY_FLAG$3, undefined, undefined, undefined, undefined, n);
}

var ary_1 = ary;

/** Used for built-in method references. */

var objectProto$g = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$e = objectProto$g.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty$e.call(object, key) && eq_1(objValue, value)) || value === undefined && !(key in object)) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */

function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }

  return object;
}

var _copyObject = copyObject;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */

function baseAssign(object, source) {
  return object && _copyObject(source, keys_1(source), object);
}

var _baseAssign = baseAssign;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */

var objectProto$h = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$f = objectProto$h.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }

  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$f.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */

function keysIn$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn$1;

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */

function baseAssignIn(object, source) {
  return object && _copyObject(source, keysIn_1(source), object);
}

var _baseAssignIn = baseAssignIn;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Built-in value references. */

  var Buffer = moduleExports ? _root.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */

  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }

    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }

  module.exports = cloneBuffer;
});

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */

function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

var _copySymbols = copySymbols;

/** Built-in value references. */

var getPrototype = _overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype;

/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */

var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function (object) {
  var result = [];

  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }

  return result;
};
var _getSymbolsIn = getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */

function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}

var _copySymbolsIn = copySymbolsIn;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */

function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn;

/** Used for built-in method references. */
var objectProto$i = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$g = objectProto$i.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */

function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

  if (length && typeof array[0] == 'string' && hasOwnProperty$g.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }

  return result;
}

var _initCloneArray = initCloneArray;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */

function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */

function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */

function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp;

/** Used to convert symbols to primitives and strings. */

var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */

function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */

function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

/** `Object#toString` result references. */

var boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    mapTag$4 = '[object Map]',
    numberTag$2 = '[object Number]',
    regexpTag$2 = '[object RegExp]',
    setTag$4 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag$2 = '[object Symbol]';
var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;

  switch (tag) {
    case arrayBufferTag$2:
      return _cloneArrayBuffer(object);

    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);

    case dataViewTag$3:
      return _cloneDataView(object, isDeep);

    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return _cloneTypedArray(object, isDeep);

    case mapTag$4:
      return new Ctor();

    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);

    case regexpTag$2:
      return _cloneRegExp(object);

    case setTag$4:
      return new Ctor();

    case symbolTag$2:
      return _cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */

function initCloneObject(object) {
  return typeof object.constructor == 'function' && !_isPrototype(object) ? _baseCreate(_getPrototype(object)) : {};
}

var _initCloneObject = initCloneObject;

/** `Object#toString` result references. */

var mapTag$5 = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */

function baseIsMap(value) {
  return isObjectLike_1(value) && _getTag(value) == mapTag$5;
}

var _baseIsMap = baseIsMap;

/* Node.js helper references. */

var nodeIsMap = _nodeUtil && _nodeUtil.isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */

var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;
var isMap_1 = isMap;

/** `Object#toString` result references. */

var setTag$5 = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */

function baseIsSet(value) {
  return isObjectLike_1(value) && _getTag(value) == setTag$5;
}

var _baseIsSet = baseIsSet;

/* Node.js helper references. */

var nodeIsSet = _nodeUtil && _nodeUtil.isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */

var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;
var isSet_1 = isSet;

/** Used to compose bitmasks for cloning. */

var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */

var argsTag$3 = '[object Arguments]',
    arrayTag$2 = '[object Array]',
    boolTag$3 = '[object Boolean]',
    dateTag$3 = '[object Date]',
    errorTag$2 = '[object Error]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    mapTag$6 = '[object Map]',
    numberTag$3 = '[object Number]',
    objectTag$3 = '[object Object]',
    regexpTag$3 = '[object RegExp]',
    setTag$6 = '[object Set]',
    stringTag$3 = '[object String]',
    symbolTag$3 = '[object Symbol]',
    weakMapTag$2 = '[object WeakMap]';
var arrayBufferTag$3 = '[object ArrayBuffer]',
    dataViewTag$4 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */

var cloneableTags = {};
cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] = cloneableTags[arrayBufferTag$3] = cloneableTags[dataViewTag$4] = cloneableTags[boolTag$3] = cloneableTags[dateTag$3] = cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] = cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] = cloneableTags[int32Tag$2] = cloneableTags[mapTag$6] = cloneableTags[numberTag$3] = cloneableTags[objectTag$3] = cloneableTags[regexpTag$3] = cloneableTags[setTag$6] = cloneableTags[stringTag$3] = cloneableTags[symbolTag$3] = cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] = cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */

function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }

  if (result !== undefined) {
    return result;
  }

  if (!isObject_1(value)) {
    return value;
  }

  var isArr = isArray_1(value);

  if (isArr) {
    result = _initCloneArray(value);

    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == funcTag$2 || tag == genTag$1;

    if (isBuffer_1(value)) {
      return _cloneBuffer(value, isDeep);
    }

    if (tag == objectTag$3 || tag == argsTag$3 || isFunc && !object) {
      result = isFlat || isFunc ? {} : _initCloneObject(value);

      if (!isDeep) {
        return isFlat ? _copySymbolsIn(value, _baseAssignIn(result, value)) : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }

      result = _initCloneByTag(value, tag, isDeep);
    }
  } // Check for circular references and return its corresponding clone.


  stack || (stack = new _Stack());
  var stacked = stack.get(value);

  if (stacked) {
    return stacked;
  }

  stack.set(value, result);

  if (isSet_1(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_1(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull ? isFlat ? _getAllKeysIn : _getAllKeys : isFlat ? keysIn : keys_1;
  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    } // Recursively populate clone (susceptible to call stack limits).


    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone;

/** Used to compose bitmasks for cloning. */

var CLONE_SYMBOLS_FLAG$1 = 4;
/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */

function clone(value) {
  return _baseClone(value, CLONE_SYMBOLS_FLAG$1);
}

var clone_1 = clone;

/** Used to compose bitmasks for function metadata. */

var WRAP_CURRY_FLAG$5 = 8;
/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */

function curry(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = _createWrap(func, WRAP_CURRY_FLAG$5, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry.placeholder;
  return result;
} // Assign default placeholders.


curry.placeholder = {};
var curry_1 = curry;

/** `Object#toString` result references. */

var objectTag$4 = '[object Object]';
/** Used for built-in method references. */

var funcProto$2 = Function.prototype,
    objectProto$j = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$2 = funcProto$2.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$h = objectProto$j.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString$2.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$4) {
    return false;
  }

  var proto = _getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty$h.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString$2.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

/** `Object#toString` result references. */

var domExcTag = '[object DOMException]',
    errorTag$3 = '[object Error]';
/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */

function isError(value) {
  if (!isObjectLike_1(value)) {
    return false;
  }

  var tag = _baseGetTag(value);
  return tag == errorTag$3 || tag == domExcTag || typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject_1(value);
}

var isError_1 = isError;

/** `Object#toString` result references. */

var weakMapTag$3 = '[object WeakMap]';
/**
 * Checks if `value` is classified as a `WeakMap` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
 * @example
 *
 * _.isWeakMap(new WeakMap);
 * // => true
 *
 * _.isWeakMap(new Map);
 * // => false
 */

function isWeakMap(value) {
  return isObjectLike_1(value) && _getTag(value) == weakMapTag$3;
}

var isWeakMap_1 = isWeakMap;

/** Used to compose bitmasks for cloning. */

var CLONE_DEEP_FLAG$1 = 1;
/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name, the created function returns the
 * property value for a given element. If `func` is an array or object, the
 * created function returns `true` for elements that contain the equivalent
 * source properties, otherwise it returns `false`.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Util
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, _.iteratee(['user', 'fred']));
 * // => [{ 'user': 'fred', 'age': 40 }]
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, _.iteratee('user'));
 * // => ['barney', 'fred']
 *
 * // Create custom iteratee shorthands.
 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
 *     return func.test(string);
 *   };
 * });
 *
 * _.filter(['abc', 'def'], /ef/);
 * // => ['def']
 */

function iteratee(func) {
  return _baseIteratee(typeof func == 'function' ? func : _baseClone(func, CLONE_DEEP_FLAG$1));
}

var iteratee_1 = iteratee;

/** Built-in value references. */

var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */

function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */

function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;
  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];

    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }

  return result;
}

var _baseFlatten = baseFlatten;

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */

function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}

var flatten_1 = flatten;

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */

function flatRest(func) {
  return _setToString(_overRest(func, undefined, flatten_1), func + '');
}

var _flatRest = flatRest;

/** Used to compose bitmasks for function metadata. */

var WRAP_REARG_FLAG$2 = 256;
/**
 * Creates a function that invokes `func` with arguments arranged according
 * to the specified `indexes` where the argument value at the first index is
 * provided as the first argument, the argument value at the second index is
 * provided as the second argument, and so on.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to rearrange arguments for.
 * @param {...(number|number[])} indexes The arranged argument indexes.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var rearged = _.rearg(function(a, b, c) {
 *   return [a, b, c];
 * }, [2, 0, 1]);
 *
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 */

var rearg = _flatRest(function (func, indexes) {
  return _createWrap(func, WRAP_REARG_FLAG$2, undefined, undefined, undefined, indexes);
});
var rearg_1 = rearg;

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */

function toPath(value) {
  if (isArray_1(value)) {
    return _arrayMap(value, _toKey);
  }

  return isSymbol_1(value) ? [value] : _copyArray(_stringToPath(toString_1(value)));
}

var toPath_1 = toPath;

var _util = {
  'ary': ary_1,
  'assign': _baseAssign,
  'clone': clone_1,
  'curry': curry_1,
  'forEach': _arrayEach,
  'isArray': isArray_1,
  'isError': isError_1,
  'isFunction': isFunction_1,
  'isWeakMap': isWeakMap_1,
  'iteratee': iteratee_1,
  'keys': _baseKeys,
  'rearg': rearg_1,
  'toInteger': toInteger_1,
  'toPath': toPath_1
};

/**
 * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
 * version with conversion `options` applied. If `name` is an object its methods
 * will be converted.
 *
 * @param {string} name The name of the function to wrap.
 * @param {Function} [func] The function to wrap.
 * @param {Object} [options] The options object. See `baseConvert` for more details.
 * @returns {Function|Object} Returns the converted function or object.
 */

function convert(name, func, options) {
  return _baseConvert(_util, name, func, options);
}

var convert_1 = convert;

/** Used as the size to enable large array optimizations. */

var LARGE_ARRAY_SIZE$1 = 200;
/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */

function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }

  if (iteratee) {
    values = _arrayMap(values, _baseUnary(iteratee));
  }

  if (comparator) {
    includes = _arrayIncludesWith;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE$1) {
    includes = _cacheHas;
    isCommon = false;
    values = new _SetCache(values);
  }

  outer: while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);
    value = comparator || value !== 0 ? value : 0;

    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;

      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }

      result.push(value);
    } else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }

  return result;
}

var _baseDifference = baseDifference;

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */

var difference = _baseRest(function (array, values) {
  return isArrayLikeObject_1(array) ? _baseDifference(array, _baseFlatten(values, 1, isArrayLikeObject_1, true)) : [];
});
var difference_1 = difference;

var func = convert_1('difference', difference_1);
func.placeholder = placeholder;
var difference$1 = func;

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */

function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return !start && end >= length ? array : _baseSlice(array, start, end);
}

var _castSlice = castSlice;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */

function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && _baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}

  return index;
}

var _charsEndIndex = charsEndIndex;

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */

function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && _baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}

  return index;
}

var _charsStartIndex = charsStartIndex;

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

var _asciiToArray = asciiToArray;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';
/** Used to compose unicode capture groups. */

var rsZWJ = '\\u200d';
/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */

var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */

function hasUnicode(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode;

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsVarRange$1 = '\\ufe0e\\ufe0f';
/** Used to compose unicode capture groups. */

var rsAstral = '[' + rsAstralRange$1 + ']',
    rsCombo = '[' + rsComboRange$1 + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange$1 + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ$1 = '\\u200d';
/** Used to compose unicode regexes. */

var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange$1 + ']?',
    rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */

var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */

function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

var _unicodeToArray = unicodeToArray;

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */

function stringToArray(string) {
  return _hasUnicode(string) ? _unicodeToArray(string) : _asciiToArray(string);
}

var _stringToArray = stringToArray;

/** Used to match leading and trailing whitespace. */

var reTrim$1 = /^\s+|\s+$/g;
/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */

function trim(string, chars, guard) {
  string = toString_1(string);

  if (string && (guard || chars === undefined)) {
    return string.replace(reTrim$1, '');
  }

  if (!string || !(chars = _baseToString(chars))) {
    return string;
  }

  var strSymbols = _stringToArray(string),
      chrSymbols = _stringToArray(chars),
      start = _charsStartIndex(strSymbols, chrSymbols),
      end = _charsEndIndex(strSymbols, chrSymbols) + 1;
  return _castSlice(strSymbols, start, end).join('');
}

var trim_1 = trim;

var func$1 = convert_1('trim', trim_1);
func$1.placeholder = placeholder;
var trim$1 = func$1;

var _falseOptions = {
  'cap': false,
  'curry': false,
  'fixed': false,
  'immutable': false,
  'rearg': false
};

var func$2 = convert_1('isObject', isObject_1, _falseOptions);
func$2.placeholder = placeholder;
var isObject$1 = func$2;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */

function baseSet(object, path, value, customizer) {
  if (!isObject_1(object)) {
    return object;
  }

  path = _castPath(path, object);
  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = _toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject_1(objValue) ? objValue : _isIndex(path[index + 1]) ? [] : {};
      }
    }

    _assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

var _baseSet = baseSet;

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */

function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = _baseGet(object, path);

    if (predicate(value, path)) {
      _baseSet(result, _castPath(path, object), value);
    }
  }

  return result;
}

var _basePickBy = basePickBy;

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */

function basePick(object, paths) {
  return _basePickBy(object, paths, function (value, path) {
    return hasIn_1(object, path);
  });
}

var _basePick = basePick;

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */

var pick = _flatRest(function (object, paths) {
  return object == null ? {} : _basePick(object, paths);
});
var pick_1 = pick;

var func$3 = convert_1('pick', pick_1);
func$3.placeholder = placeholder;
var pick$1 = func$3;

var func$4 = convert_1('keys', keys_1, _falseOptions);
func$4.placeholder = placeholder;
var keys$1 = func$4;

var func$5 = convert_1('isPlainObject', isPlainObject_1, _falseOptions);
func$5.placeholder = placeholder;
var isPlainObject$1 = func$5;

var func$6 = convert_1('isFunction', isFunction_1, _falseOptions);
func$6.placeholder = placeholder;
var isFunction$1 = func$6;

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (value) {
      result[resIndex++] = value;
    }
  }

  return result;
}

var compact_1 = compact;

var func$7 = convert_1('compact', compact_1, _falseOptions);
func$7.placeholder = placeholder;
var compact$1 = func$7;

var func$8 = convert_1('isNil', isNil_1, _falseOptions);
func$8.placeholder = placeholder;
var isNil$1 = func$8;

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */

function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }

  n = guard || n === undefined ? 1 : toInteger_1(n);
  return _baseSlice(array, 0, n < 0 ? 0 : n);
}

var take_1 = take;

var func$9 = convert_1('take', take_1);
func$9.placeholder = placeholder;
var take$1 = func$9;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike_1(collection) ? Array(collection.length) : [];
  _baseEach(collection, function (value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap;

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;
  array.sort(comparer);

  while (length--) {
    array[length] = array[length].value;
  }

  return array;
}

var _baseSortBy = baseSortBy;

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */

function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol_1(value);
    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol_1(other);

    if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }

    if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }

  return 0;
}

var _compareAscending = compareAscending;

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */

function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = _compareAscending(objCriteria[index], othCriteria[index]);

    if (result) {
      if (index >= ordersLength) {
        return result;
      }

      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  } // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.


  return object.index - other.index;
}

var _compareMultiple = compareMultiple;

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */

function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = _arrayMap(iteratees.length ? iteratees : [identity_1], _baseUnary(_baseIteratee));
  var result = _baseMap(collection, function (value, key, collection) {
    var criteria = _arrayMap(iteratees, function (iteratee) {
      return iteratee(value);
    });
    return {
      'criteria': criteria,
      'index': ++index,
      'value': value
    };
  });
  return _baseSortBy(result, function (object, other) {
    return _compareMultiple(object, other, orders);
  });
}

var _baseOrderBy = baseOrderBy;

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 */

var sortBy = _baseRest(function (collection, iteratees) {
  if (collection == null) {
    return [];
  }

  var length = iteratees.length;

  if (length > 1 && _isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && _isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }

  return _baseOrderBy(collection, _baseFlatten(iteratees, 1), []);
});
var sortBy_1 = sortBy;

var func$a = convert_1('sortBy', sortBy_1);
func$a.placeholder = placeholder;
var sortBy$1 = func$a;

/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);

    if (current !== undefined) {
      result = result === undefined ? current : result + current;
    }
  }

  return result;
}

var _baseSum = baseSum;

/**
 * Computes the sum of the values in `array`.
 *
 * @static
 * @memberOf _
 * @since 3.4.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the sum.
 * @example
 *
 * _.sum([4, 2, 8, 6]);
 * // => 20
 */

function sum(array) {
  return array && array.length ? _baseSum(array, identity_1) : 0;
}

var sum_1 = sum;

var func$b = convert_1('sum', sum_1, _falseOptions);
func$b.placeholder = placeholder;
var sum$1 = func$b;

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */

function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined ? current === current && !isSymbol_1(current) : comparator(current, computed))) {
      var computed = current,
          result = value;
    }
  }

  return result;
}

var _baseExtremum = baseExtremum;

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

var _baseLt = baseLt;

/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */

function min(array) {
  return array && array.length ? _baseExtremum(array, identity_1, _baseLt) : undefined;
}

var min_1 = min;

var func$c = convert_1('min', min_1, _falseOptions);
func$c.placeholder = placeholder;
var min$1 = func$c;

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */

function map(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayMap : _baseMap;
  return func(collection, _baseIteratee(iteratee));
}

var map_1 = map;

var func$d = convert_1('map', map_1);
func$d.placeholder = placeholder;
var map$1 = func$d;

/** Error message constants. */

var FUNC_ERROR_TEXT$2 = 'Expected a function';
/** Used to compose bitmasks for function metadata. */

var WRAP_CURRY_FLAG$6 = 8,
    WRAP_PARTIAL_FLAG$3 = 32,
    WRAP_ARY_FLAG$4 = 128,
    WRAP_REARG_FLAG$3 = 256;
/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */

function createFlow(fromRight) {
  return _flatRest(function (funcs) {
    var length = funcs.length,
        index = length,
        prereq = _LodashWrapper.prototype.thru;

    if (fromRight) {
      funcs.reverse();
    }

    while (index--) {
      var func = funcs[index];

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT$2);
      }

      if (prereq && !wrapper && _getFuncName(func) == 'wrapper') {
        var wrapper = new _LodashWrapper([], true);
      }
    }

    index = wrapper ? index : length;

    while (++index < length) {
      func = funcs[index];
      var funcName = _getFuncName(func),
          data = funcName == 'wrapper' ? _getData(func) : undefined;

      if (data && _isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG$4 | WRAP_CURRY_FLAG$6 | WRAP_PARTIAL_FLAG$3 | WRAP_REARG_FLAG$3) && !data[4].length && data[9] == 1) {
        wrapper = wrapper[_getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = func.length == 1 && _isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
      }
    }

    return function () {
      var args = arguments,
          value = args[0];

      if (wrapper && args.length == 1 && isArray_1(value)) {
        return wrapper.plant(value).value();
      }

      var index = 0,
          result = length ? funcs[index].apply(this, args) : value;

      while (++index < length) {
        result = funcs[index].call(this, result);
      }

      return result;
    };
  });
}

var _createFlow = createFlow;

/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */

var flow = _createFlow();
var flow_1 = flow;

var func$e = convert_1('flow', flow_1);
func$e.placeholder = placeholder;
var flow$1 = func$e;

var func$f = convert_1('memoize', memoize_1);
func$f.placeholder = placeholder;
var memoize$1 = func$f;

var leven_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0; // Copy of sindre's leven, wrapped in dead code elimination for production
  // https://github.com/sindresorhus/leven/blob/master/index.js

  /* eslint-disable complexity, import/no-mutable-exports, no-multi-assign, no-nested-ternary, no-plusplus */

  var leven = function leven() {
    return 0;
  };

  {
    var arr = [];
    var charCodeCache = [];

    leven = function leven(a, b) {
      if (a === b) return 0;
      var aLen = a.length;
      var bLen = b.length;
      if (aLen === 0) return bLen;
      if (bLen === 0) return aLen;
      var bCharCode;
      var ret;
      var tmp;
      var tmp2;
      var i = 0;
      var j = 0;

      while (i < aLen) {
        charCodeCache[i] = a.charCodeAt(i);
        arr[i] = ++i;
      }

      while (j < bLen) {
        bCharCode = b.charCodeAt(j);
        tmp = j++;
        ret = j;

        for (i = 0; i < aLen; i++) {
          tmp2 = bCharCode === charCodeCache[i] ? tmp : tmp + 1;
          tmp = arr[i];
          ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
        }
      }

      return ret;
    };
  }

  var _default = leven;
  exports["default"] = _default;
});
unwrapExports(leven_1);

var customPropTypes = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ref = exports.refObject = exports.deprecate = exports.collectionShorthand = exports.itemShorthand = exports.contentShorthand = exports.multipleProp = exports.demand = exports.givenProps = exports.some = exports.every = exports.disallow = exports.suggest = exports.domNode = void 0;

  var _toConsumableArray2 = interopRequireDefault(toConsumableArray);

  var _difference2 = interopRequireDefault(difference$1);

  var _trim2 = interopRequireDefault(trim$1);

  var _isObject2 = interopRequireDefault(isObject$1);

  var _pick2 = interopRequireDefault(pick$1);

  var _keys2 = interopRequireDefault(keys$1);

  var _isPlainObject2 = interopRequireDefault(isPlainObject$1);

  var _isFunction2 = interopRequireDefault(isFunction$1);

  var _compact2 = interopRequireDefault(compact$1);

  var _isNil2 = interopRequireDefault(isNil$1);

  var _take2 = interopRequireDefault(take$1);

  var _sortBy2 = interopRequireDefault(sortBy$1);

  var _sum2 = interopRequireDefault(sum$1);

  var _min2 = interopRequireDefault(min$1);

  var _map2 = interopRequireDefault(map$1);

  var _flow2 = interopRequireDefault(flow$1);

  var _memoize2 = interopRequireDefault(memoize$1);

  var _propTypes = interopRequireDefault(propTypes);

  var _leven = interopRequireDefault(leven_1);

  var typeOf = function typeOf() {
    var _Object$prototype$toS;

    return (_Object$prototype$toS = Object.prototype.toString).call.apply(_Object$prototype$toS, arguments);
  };
  /**
   * Ensure a prop is a valid DOM node.
   */


  var domNode = function domNode(props, propName) {
    // skip if prop is undefined
    if (props[propName] === undefined) return; // skip if prop is valid

    if (props[propName] instanceof Element) return;
    return new Error("Invalid prop \"".concat(propName, "\" supplied, expected a DOM node."));
  };
  /**
   * Similar to PropTypes.oneOf but shows closest matches.
   * Word order is ignored allowing `left chevron` to match `chevron left`.
   * Useful for very large lists of options (e.g. Icon name, Flag name, etc.)
   * @param {string[]} suggestions An array of allowed values.
   */


  exports.domNode = domNode;

  var suggest = function suggest(suggestions) {
    if (!Array.isArray(suggestions)) {
      throw new Error('Invalid argument supplied to suggest, expected an instance of array.');
    }
    /* eslint-disable max-nested-callbacks */


    var findBestSuggestions = (0, _memoize2["default"])(function (str) {
      var propValueWords = str.split(' ');
      return (0, _flow2["default"])((0, _map2["default"])(function (suggestion) {
        var suggestionWords = suggestion.split(' ');
        var propValueScore = (0, _flow2["default"])((0, _map2["default"])(function (x) {
          return (0, _map2["default"])(function (y) {
            return (0, _leven["default"])(x, y);
          }, suggestionWords);
        }), (0, _map2["default"])(_min2["default"]), _sum2["default"])(propValueWords);
        var suggestionScore = (0, _flow2["default"])((0, _map2["default"])(function (x) {
          return (0, _map2["default"])(function (y) {
            return (0, _leven["default"])(x, y);
          }, propValueWords);
        }), (0, _map2["default"])(_min2["default"]), _sum2["default"])(suggestionWords);
        return {
          suggestion: suggestion,
          score: propValueScore + suggestionScore
        };
      }), (0, _sortBy2["default"])(['score', 'suggestion']), (0, _take2["default"])(3))(suggestions);
    });
    /* eslint-enable max-nested-callbacks */
    // Convert the suggestions list into a hash map for O(n) lookup times. Ensure
    // the words in each key are sorted alphabetically so that we have a consistent
    // way of looking up a value in the map, i.e. we can sort the words in the
    // incoming propValue and look that up without having to check all permutations.

    var suggestionsLookup = suggestions.reduce(function (acc, key) {
      acc[key.split(' ').sort().join(' ')] = true;
      return acc;
    }, {});
    return function (props, propName, componentName) {
      var propValue = props[propName]; // skip if prop is undefined or is included in the suggestions

      if (!propValue || suggestionsLookup[propValue]) return; // check if the words were correct but ordered differently.
      // Since we're matching for classNames we need to allow any word order
      // to pass validation, e.g. `left chevron` vs `chevron left`.

      var propValueSorted = propValue.split(' ').sort().join(' ');
      if (suggestionsLookup[propValueSorted]) return; // find best suggestions

      var bestMatches = findBestSuggestions(propValue); // skip if a match scored 0

      if (bestMatches.some(function (x) {
        return x.score === 0;
      })) return;
      return new Error(["Invalid prop `".concat(propName, "` of value `").concat(propValue, "` supplied to `").concat(componentName, "`."), "\n\nInstead of `".concat(propValue, "`, did you mean:"), bestMatches.map(function (x) {
        return "\n  - ".concat(x.suggestion);
      }).join(''), '\n'].join(''));
    };
  };
  /**
   * Disallow other props from being defined with this prop.
   * @param {string[]} disallowedProps An array of props that cannot be used with this prop.
   */


  exports.suggest = suggest;

  var disallow = function disallow(disallowedProps) {
    return function (props, propName, componentName) {
      if (!Array.isArray(disallowedProps)) {
        throw new Error(['Invalid argument supplied to disallow, expected an instance of array.', " See `".concat(propName, "` prop in `").concat(componentName, "`.")].join(''));
      } // skip if prop is undefined


      if ((0, _isNil2["default"])(props[propName]) || props[propName] === false) return; // find disallowed props with values

      var disallowed = disallowedProps.reduce(function (acc, disallowedProp) {
        if (!(0, _isNil2["default"])(props[disallowedProp]) && props[disallowedProp] !== false) {
          return [].concat((0, _toConsumableArray2["default"])(acc), [disallowedProp]);
        }

        return acc;
      }, []);

      if (disallowed.length > 0) {
        return new Error(["Prop `".concat(propName, "` in `").concat(componentName, "` conflicts with props: `").concat(disallowed.join('`, `'), "`."), 'They cannot be defined together, choose one or the other.'].join(' '));
      }
    };
  };
  /**
   * Ensure a prop adherers to multiple prop type validators.
   * @param {function[]} validators An array of propType functions.
   */


  exports.disallow = disallow;

  var every = function every(validators) {
    return function (props, propName, componentName) {
      for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        rest[_key - 3] = arguments[_key];
      }

      if (!Array.isArray(validators)) {
        throw new Error(['Invalid argument supplied to every, expected an instance of array.', "See `".concat(propName, "` prop in `").concat(componentName, "`.")].join(' '));
      }

      var errors = (0, _flow2["default"])((0, _map2["default"])(function (validator) {
        if (typeof validator !== 'function') {
          throw new Error("every() argument \"validators\" should contain functions, found: ".concat(typeOf(validator), "."));
        }

        return validator.apply(void 0, [props, propName, componentName].concat(rest));
      }), _compact2["default"])(validators); // we can only return one error at a time

      return errors[0];
    };
  };
  /**
   * Ensure a prop adherers to at least one of the given prop type validators.
   * @param {function[]} validators An array of propType functions.
   */


  exports.every = every;

  var some = function some(validators) {
    return function (props, propName, componentName) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        rest[_key2 - 3] = arguments[_key2];
      }

      if (!Array.isArray(validators)) {
        throw new Error(['Invalid argument supplied to some, expected an instance of array.', "See `".concat(propName, "` prop in `").concat(componentName, "`.")].join(' '));
      }

      var errors = (0, _compact2["default"])((0, _map2["default"])(validators, function (validator) {
        if (!(0, _isFunction2["default"])(validator)) {
          throw new Error("some() argument \"validators\" should contain functions, found: ".concat(typeOf(validator), "."));
        }

        return validator.apply(void 0, [props, propName, componentName].concat(rest));
      })); // fail only if all validators failed

      if (errors.length === validators.length) {
        var error = new Error('One of these validators must pass:');
        error.message += "\n".concat((0, _map2["default"])(errors, function (err, i) {
          return "[".concat(i + 1, "]: ").concat(err.message);
        }).join('\n'));
        return error;
      }
    };
  };
  /**
   * Ensure a validator passes only when a component has a given propsShape.
   * @param {object} propsShape An object describing the prop shape.
   * @param {function} validator A propType function.
   */


  exports.some = some;

  var givenProps = function givenProps(propsShape, validator) {
    return function (props, propName, componentName) {
      for (var _len3 = arguments.length, rest = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        rest[_key3 - 3] = arguments[_key3];
      }

      if (!(0, _isPlainObject2["default"])(propsShape)) {
        throw new Error(['Invalid argument supplied to givenProps, expected an object.', "See `".concat(propName, "` prop in `").concat(componentName, "`.")].join(' '));
      }

      if (typeof validator !== 'function') {
        throw new Error(['Invalid argument supplied to givenProps, expected a function.', "See `".concat(propName, "` prop in `").concat(componentName, "`.")].join(' '));
      }

      var shouldValidate = (0, _keys2["default"])(propsShape).every(function (key) {
        var val = propsShape[key]; // require propShape validators to pass or prop values to match

        return typeof val === 'function' ? !val.apply(void 0, [props, key, componentName].concat(rest)) : val === props[propName];
      });
      if (!shouldValidate) return;
      var error = validator.apply(void 0, [props, propName, componentName].concat(rest));

      if (error) {
        // poor mans shallow pretty print, prevents JSON circular reference errors
        var prettyProps = "{ ".concat((0, _keys2["default"])((0, _pick2["default"])((0, _keys2["default"])(propsShape), props)).map(function (key) {
          var val = props[key];
          var renderedValue = val;
          if (typeof val === 'string') renderedValue = "\"".concat(val, "\"");else if (Array.isArray(val)) renderedValue = "[".concat(val.join(', '), "]");else if ((0, _isObject2["default"])(val)) renderedValue = '{...}';
          return "".concat(key, ": ").concat(renderedValue);
        }).join(', '), " }");
        error.message = "Given props ".concat(prettyProps, ": ").concat(error.message);
        return error;
      }
    };
  };
  /**
   * Define prop dependencies by requiring other props.
   * @param {string[]} requiredProps An array of required prop names.
   */


  exports.givenProps = givenProps;

  var demand = function demand(requiredProps) {
    return function (props, propName, componentName) {
      if (!Array.isArray(requiredProps)) {
        throw new Error(['Invalid `requiredProps` argument supplied to require, expected an instance of array.', " See `".concat(propName, "` prop in `").concat(componentName, "`.")].join(''));
      } // skip if prop is undefined


      if (props[propName] === undefined) return;
      var missingRequired = requiredProps.filter(function (requiredProp) {
        return props[requiredProp] === undefined;
      });

      if (missingRequired.length > 0) {
        return new Error("`".concat(propName, "` prop in `").concat(componentName, "` requires props: `").concat(missingRequired.join('`, `'), "`."));
      }
    };
  };
  /**
   * Ensure an multiple prop contains a string with only possible values.
   * @param {string[]} possible An array of possible values to prop.
   */


  exports.demand = demand;

  var multipleProp = function multipleProp(possible) {
    return function (props, propName, componentName) {
      if (!Array.isArray(possible)) {
        throw new Error(['Invalid argument supplied to some, expected an instance of array.', "See `".concat(propName, "` prop in `").concat(componentName, "`.")].join(' '));
      }

      var propValue = props[propName]; // skip if prop is undefined

      if ((0, _isNil2["default"])(propValue) || propValue === false) return;
      var values = propValue.replace('large screen', 'large-screen').replace(/ vertically/g, '-vertically').split(' ').map(function (val) {
        return (0, _trim2["default"])(val).replace('-', ' ');
      });
      var invalid = (0, _difference2["default"])(values, possible); // fail only if there are invalid values

      if (invalid.length > 0) {
        return new Error("`".concat(propName, "` prop in `").concat(componentName, "` has invalid values: `").concat(invalid.join('`, `'), "`."));
      }
    };
  };
  /**
   * Ensure a component can render as a node passed as a prop value in place of children.
   */


  exports.multipleProp = multipleProp;

  var contentShorthand = function contentShorthand() {
    return every([disallow(['children']), _propTypes["default"].node]).apply(void 0, arguments);
  };
  /**
   * Item shorthand is a description of a component that can be a literal,
   * a props object, or an element.
   */


  exports.contentShorthand = contentShorthand;

  var itemShorthand = function itemShorthand() {
    return every([disallow(['children']), _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node, _propTypes["default"].object, _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].object]))])]).apply(void 0, arguments);
  };
  /**
   * Collection shorthand ensures a prop is an array of item shorthand.
   */


  exports.itemShorthand = itemShorthand;

  var collectionShorthand = function collectionShorthand() {
    return every([disallow(['children']), _propTypes["default"].arrayOf(itemShorthand)]).apply(void 0, arguments);
  };
  /**
   * Show a deprecated warning for component props with a help message and optional validator.
   * @param {string} help A help message to display with the deprecation warning.
   * @param {function} [validator] A propType function.
   */


  exports.collectionShorthand = collectionShorthand;

  var deprecate = function deprecate(help, validator) {
    return function (props, propName, componentName) {
      if (typeof help !== 'string') {
        throw new Error(['Invalid `help` argument supplied to deprecate, expected a string.', "See `".concat(propName, "` prop in `").concat(componentName, "`.")].join(' '));
      } // skip if prop is undefined


      if (props[propName] === undefined) return; // deprecation error and help

      var error = new Error("The `".concat(propName, "` prop in `").concat(componentName, "` is deprecated."));
      if (help) error.message += " ".concat(help); // add optional validation error message

      if (validator) {
        if (typeof validator === 'function') {
          for (var _len4 = arguments.length, args = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
            args[_key4 - 3] = arguments[_key4];
          }

          var validationError = validator.apply(void 0, [props, propName, componentName].concat(args));

          if (validationError) {
            error.message = "".concat(error.message, " ").concat(validationError.message);
          }
        } else {
          throw new Error(['Invalid argument supplied to deprecate, expected a function.', "See `".concat(propName, "` prop in `").concat(componentName, "`.")].join(' '));
        }
      }

      return error;
    };
  };
  /** A checker that matches the React.RefObject type. */


  exports.deprecate = deprecate;

  var refObject = _propTypes["default"].shape({
    current: _propTypes["default"].object
  });
  /** A checker that matches the React.Ref type. */


  exports.refObject = refObject;

  var ref = _propTypes["default"].oneOfType([_propTypes["default"].func, refObject]);

  exports.ref = ref;
});
unwrapExports(customPropTypes);
var customPropTypes_1 = customPropTypes.ref;
var customPropTypes_2 = customPropTypes.refObject;
var customPropTypes_3 = customPropTypes.deprecate;
var customPropTypes_4 = customPropTypes.collectionShorthand;
var customPropTypes_5 = customPropTypes.itemShorthand;
var customPropTypes_6 = customPropTypes.contentShorthand;
var customPropTypes_7 = customPropTypes.multipleProp;
var customPropTypes_8 = customPropTypes.demand;
var customPropTypes_9 = customPropTypes.givenProps;
var customPropTypes_10 = customPropTypes.some;
var customPropTypes_11 = customPropTypes.every;
var customPropTypes_12 = customPropTypes.disallow;
var customPropTypes_13 = customPropTypes.suggest;
var customPropTypes_14 = customPropTypes.domNode;

var exenv = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2015 Jed Watson.
    Based on code that is Copyright 2013-2015, Facebook, Inc.
    All rights reserved.
  */

  /* global define */
  (function () {

    var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    var ExecutionEnvironment = {
      canUseDOM: canUseDOM,
      canUseWorkers: typeof Worker !== 'undefined',
      canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
      canUseViewport: canUseDOM && !!window.screen
    };

    if ( module.exports) {
      module.exports = ExecutionEnvironment;
    } else {
      window.ExecutionEnvironment = ExecutionEnvironment;
    }
  })();
});

var eventStack_development = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }
  /**
   * The current implementation was chosen by performance and compatibility reasons, feel free to play
   * with benchmarks and submit PR with faster alternative. Each method contains links to benchmarks.
   */


  var EventSet =
  /*#__PURE__*/
  function () {
    /**
     * @see https://jsperf.com/suir-eventset-constructor
     */
    function EventSet(eventHandlers) {
      _classCallCheck(this, EventSet);

      _defineProperty(this, "handlers", void 0);

      this.handlers = eventHandlers.slice(0);
    }
    /**
     * @see https://jsperf.com/suir-eventset-addhandlers
     */


    _createClass(EventSet, [{
      key: "addHandlers",
      value: function addHandlers(additionalHandlers) {
        var newHandlers = this.handlers.slice(0);
        var length = additionalHandlers.length; // Heads up!
        // Previously we use Set there, it granted uniqueness of handlers, now dispatchEvent() is
        // responsible for this.

        for (var i = 0; i < length; i += 1) {
          newHandlers.push(additionalHandlers[i]);
        }

        return new EventSet(newHandlers);
      }
      /**
       * @see https://jsperf.com/suir-eventset-dispatchsingle
       * @see https://jsperf.com/suir-eventset-dispatchmultiple2
       */

    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(event, dispatchAll) {
        var count = this.handlers.length - 1;

        if (!dispatchAll) {
          // Heads up!
          // We don't use .pop() there because it will mutate the array.
          var recentHandler = this.handlers[count];
          recentHandler(event);
          return;
        }

        for (var i = count; i >= 0; i -= 1) {
          if (!this.handlers[i].called) {
            this.handlers[i].called = true;
            this.handlers[i](event);
          }
        }

        for (var _i = count; _i >= 0; _i -= 1) {
          this.handlers[_i].called = false;
        }
      }
    }, {
      key: "hasHandlers",
      value: function hasHandlers() {
        return this.handlers.length > 0;
      }
      /**
       * @see https://jsperf.com/suir-eventset-removehandlers
       */

    }, {
      key: "removeHandlers",
      value: function removeHandlers(removalHandlers) {
        var newHandlers = [];
        var length = this.handlers.length;

        for (var i = 0; i < length; i += 1) {
          var handler = this.handlers[i];

          if (removalHandlers.indexOf(handler) === -1) {
            newHandlers.push(handler);
          }
        }

        return new EventSet(newHandlers);
      }
    }]);

    return EventSet;
  }();
  /**
   * An IE11-compatible function.
   *
   * @see https://jsperf.com/suir-clone-map
   */


  function cloneMap(map) {
    var newMap = new Map();
    map.forEach(function (value, key) {
      newMap.set(key, value);
    });
    return newMap;
  }

  function normalizeHandlers(handlers) {
    return Array.isArray(handlers) ? handlers : [handlers];
  }
  /**
   * Asserts that the passed value is React.RefObject
   *
   * @see https://github.com/facebook/react/blob/v16.8.2/packages/react-reconciler/src/ReactFiberCommitWork.js#L665
   */


  var isRefObject = function isRefObject(ref // eslint-disable-next-line
  ) {
    return ref !== null && _typeof(ref) === 'object' && ref.hasOwnProperty('current');
  };
  /**
   * Normalizes `target` for EventStack, because `target` can be passed as `boolean` or `string`.
   *
   * @see https://jsperf.com/suir-normalize-target
   */


  function normalizeTarget(target) {
    if (target === 'document') return document;
    if (target === 'window') return window;
    if (isRefObject(target)) return target.current || document;
    return target || document;
  }

  var EventPool =
  /*#__PURE__*/
  function () {
    function EventPool(poolName, handlerSets) {
      _classCallCheck(this, EventPool);

      _defineProperty(this, "handlerSets", void 0);

      _defineProperty(this, "poolName", void 0);

      this.handlerSets = handlerSets;
      this.poolName = poolName;
    }

    _createClass(EventPool, [{
      key: "addHandlers",
      value: function addHandlers(eventType, eventHandlers) {
        var handlerSets = cloneMap(this.handlerSets);

        if (handlerSets.has(eventType)) {
          var eventSet = handlerSets.get(eventType);
          handlerSets.set(eventType, eventSet.addHandlers(eventHandlers));
        } else {
          handlerSets.set(eventType, new EventSet(eventHandlers));
        }

        return new EventPool(this.poolName, handlerSets);
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(eventType, event) {
        var handlerSet = this.handlerSets.get(eventType);
        var shouldDispatchAll = this.poolName === 'default';

        if (handlerSet) {
          handlerSet.dispatchEvent(event, shouldDispatchAll);
        }
      }
    }, {
      key: "hasHandlers",
      value: function hasHandlers(eventType) {
        if (!eventType) {
          return this.handlerSets.size > 0;
        }

        var eventSet = this.handlerSets.get(eventType);

        if (eventSet) {
          return eventSet.hasHandlers();
        }

        return false;
      }
    }, {
      key: "removeHandlers",
      value: function removeHandlers(eventType, eventHandlers) {
        var handlerSets = cloneMap(this.handlerSets);

        if (!handlerSets.has(eventType)) {
          return new EventPool(this.poolName, handlerSets);
        }

        var currentSet = handlerSets.get(eventType);
        var nextSet = currentSet.removeHandlers(eventHandlers);

        if (nextSet.hasHandlers()) {
          handlerSets.set(eventType, nextSet);
        } else {
          handlerSets.delete(eventType);
        }

        return new EventPool(this.poolName, handlerSets);
      }
    }]);

    return EventPool;
  }();

  _defineProperty(EventPool, "createByType", function (poolName, eventType, eventHandlers) {
    var handlerSets = new Map();
    handlerSets.set(eventType, new EventSet(eventHandlers));
    return new EventPool(poolName, handlerSets);
  });

  var EventTarget =
  /*#__PURE__*/
  function () {
    function EventTarget(target) {
      var _this = this;

      _classCallCheck(this, EventTarget);

      _defineProperty(this, "handlers", new Map());

      _defineProperty(this, "pools", new Map());

      _defineProperty(this, "target", void 0);

      _defineProperty(this, "createEmitter", function (eventType) {
        return function (event) {
          _this.pools.forEach(function (pool) {
            pool.dispatchEvent(eventType, event);
          });
        };
      });

      this.target = target;
    }

    _createClass(EventTarget, [{
      key: "addHandlers",
      value: function addHandlers(poolName, eventType, eventHandlers) {
        if (this.pools.has(poolName)) {
          var eventPool = this.pools.get(poolName);
          this.pools.set(poolName, eventPool.addHandlers(eventType, eventHandlers));
        } else {
          this.pools.set(poolName, EventPool.createByType(poolName, eventType, eventHandlers));
        }

        if (!this.handlers.has(eventType)) {
          this.addTargetHandler(eventType);
        }
      }
    }, {
      key: "hasHandlers",
      value: function hasHandlers() {
        return this.handlers.size > 0;
      }
    }, {
      key: "removeHandlers",
      value: function removeHandlers(poolName, eventType, eventHandlers) {
        if (!this.pools.has(poolName)) {
          return;
        }

        var pool = this.pools.get(poolName);
        var newPool = pool.removeHandlers(eventType, eventHandlers);

        if (newPool.hasHandlers()) {
          this.pools.set(poolName, newPool);
        } else {
          this.pools.delete(poolName);
        }

        var hasHandlers = false;
        this.pools.forEach(function (pool) {
          return hasHandlers = hasHandlers || pool.hasHandlers(eventType);
        });

        if (!hasHandlers) {
          this.removeTargetHandler(eventType);
        }
      }
    }, {
      key: "addTargetHandler",
      value: function addTargetHandler(eventType) {
        var handler = this.createEmitter(eventType);
        this.handlers.set(eventType, handler);
        this.target.addEventListener(eventType, handler, true);
      }
    }, {
      key: "removeTargetHandler",
      value: function removeTargetHandler(eventType) {
        if (this.handlers.has(eventType)) {
          this.target.removeEventListener(eventType, this.handlers.get(eventType), true);
          this.handlers.delete(eventType);
        }
      }
    }]);

    return EventTarget;
  }();

  var EventStack =
  /*#__PURE__*/
  function () {
    function EventStack() {
      var _this = this;

      _classCallCheck(this, EventStack);

      _defineProperty(this, "targets", new Map());

      _defineProperty(this, "getTarget", function (target) {
        var autoCreate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var normalized = normalizeTarget(target);

        if (_this.targets.has(normalized)) {
          return _this.targets.get(normalized);
        }

        if (!autoCreate) return null;
        var eventTarget = new EventTarget(normalized);

        _this.targets.set(normalized, eventTarget);

        return eventTarget;
      });

      _defineProperty(this, "removeTarget", function (target) {
        _this.targets.delete(normalizeTarget(target));
      });
    }

    _createClass(EventStack, [{
      key: "sub",
      value: function sub(eventName, eventHandlers) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (!exenv.canUseDOM) return;
        var _options$target = options.target,
            target = _options$target === void 0 ? document : _options$target,
            _options$pool = options.pool,
            pool = _options$pool === void 0 ? 'default' : _options$pool;
        var eventTarget = this.getTarget(target);
        eventTarget.addHandlers(pool, eventName, normalizeHandlers(eventHandlers));
      }
    }, {
      key: "unsub",
      value: function unsub(eventName, eventHandlers) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (!exenv.canUseDOM) return;
        var _options$target2 = options.target,
            target = _options$target2 === void 0 ? document : _options$target2,
            _options$pool2 = options.pool,
            pool = _options$pool2 === void 0 ? 'default' : _options$pool2;
        var eventTarget = this.getTarget(target, false);

        if (eventTarget) {
          eventTarget.removeHandlers(pool, eventName, normalizeHandlers(eventHandlers));
          if (!eventTarget.hasHandlers()) this.removeTarget(target);
        }
      }
    }]);

    return EventStack;
  }();

  var instance = new EventStack();
  /**
   * This component exposes the EventStack API as public and provides a declarative way to manage it.
   */

  var EventStack$1 =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(EventStack, _React$PureComponent);

    function EventStack() {
      _classCallCheck(this, EventStack);

      return _possibleConstructorReturn(this, _getPrototypeOf(EventStack).apply(this, arguments));
    }

    _createClass(EventStack, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.subscribe(this.props);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        this.unsubscribe(prevProps);
        this.subscribe(this.props);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unsubscribe(this.props);
      }
    }, {
      key: "subscribe",
      value: function subscribe(props) {
        var name = props.name,
            on = props.on,
            pool = props.pool,
            target = props.target;
        instance.sub(name, on, {
          pool: pool,
          target: target
        });
      }
    }, {
      key: "unsubscribe",
      value: function unsubscribe(props) {
        var name = props.name,
            on = props.on,
            pool = props.pool,
            target = props.target;
        instance.unsub(name, on, {
          pool: pool,
          target: target
        });
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return EventStack;
  }(React__default.PureComponent);

  _defineProperty(EventStack$1, "defaultProps", {
    pool: 'default',
    target: 'document'
  });

  EventStack$1.propTypes = {
    /** An event name on which we will subscribe. */
    name: propTypes.string.isRequired,

    /** An event handler or array of event handlers. */
    on: propTypes.oneOfType([propTypes.func, propTypes.arrayOf(propTypes.func)]).isRequired,

    /** A name of pool. */
    pool: propTypes.string,

    /** A DOM element on which we will subscribe. */
    target: propTypes.oneOfType([propTypes.oneOf(['document', 'window']), // Heads up!
    // This condition for SSR safety.
    propTypes.instanceOf(exenv.canUseDOM ? HTMLElement : Object), propTypes.shape({
      current: propTypes.object
    })])
  };
  exports.instance = instance;
  exports.default = EventStack$1;
});
unwrapExports(eventStack_development);
var eventStack_development_1 = eventStack_development.instance;

var stack;

{
  stack = eventStack_development;
}

var lib = stack.default;
var instance = stack.instance;
lib.instance = instance;

var eventStack = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _default = lib.instance;
  exports["default"] = _default;
});
unwrapExports(eventStack);

/** Used as references for various `Number` constants. */

var INFINITY$3 = 1 / 0;
/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */

var createSet = !(_Set && 1 / _setToArray(new _Set([, -0]))[1] == INFINITY$3) ? noop_1 : function (values) {
  return new _Set(values);
};
var _createSet = createSet;

/** Used as the size to enable large array optimizations. */

var LARGE_ARRAY_SIZE$2 = 200;
/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */

function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith;
  } else if (length >= LARGE_ARRAY_SIZE$2) {
    var set = iteratee ? null : _createSet(array);

    if (set) {
      return _setToArray(set);
    }

    isCommon = false;
    includes = _cacheHas;
    seen = new _SetCache();
  } else {
    seen = iteratee ? [] : result;
  }

  outer: while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;
    value = comparator || value !== 0 ? value : 0;

    if (isCommon && computed === computed) {
      var seenIndex = seen.length;

      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }

      if (iteratee) {
        seen.push(computed);
      }

      result.push(value);
    } else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }

      result.push(value);
    }
  }

  return result;
}

var _baseUniq = baseUniq;

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */

function uniq(array) {
  return array && array.length ? _baseUniq(array) : [];
}

var uniq_1 = uniq;

/** `Object#toString` result references. */

var numberTag$4 = '[object Number]';
/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */

function isNumber(value) {
  return typeof value == 'number' || isObjectLike_1(value) && _baseGetTag(value) == numberTag$4;
}

var isNumber_1 = isNumber;

/** `Object#toString` result references. */

var stringTag$4 = '[object String]';
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */

function isString(value) {
  return typeof value == 'string' || !isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag$4;
}

var isString_1 = isString;

/** `Object#toString` result references. */

var boolTag$4 = '[object Boolean]';
/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */

function isBoolean(value) {
  return value === true || value === false || isObjectLike_1(value) && _baseGetTag(value) == boolTag$4;
}

var isBoolean_1 = isBoolean;

var factories = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createShorthand = createShorthand;
  exports.createShorthandFactory = createShorthandFactory;
  exports.createHTMLParagraph = exports.createHTMLLabel = exports.createHTMLInput = exports.createHTMLImage = exports.createHTMLIframe = exports.createHTMLDivision = void 0;

  var _objectSpread2 = interopRequireDefault(objectSpread);

  var _typeof2 = interopRequireDefault(_typeof_1);

  var _uniq2 = interopRequireDefault(uniq_1);

  var _isArray2 = interopRequireDefault(isArray_1);

  var _isPlainObject2 = interopRequireDefault(isPlainObject_1);

  var _isFunction2 = interopRequireDefault(isFunction_1);

  var _isNumber2 = interopRequireDefault(isNumber_1);

  var _isString2 = interopRequireDefault(isString_1);

  var _isBoolean2 = interopRequireDefault(isBoolean_1);

  var _isNil2 = interopRequireDefault(isNil_1);

  var _classnames = interopRequireDefault(classnames);

  var _react = interopRequireWildcard(React__default); // ============================================================
  // Factories
  // ============================================================

  /**
   * A more robust React.createElement. It can create elements from primitive values.
   *
   * @param {function|string} Component A ReactClass or string
   * @param {function} mapValueToProps A function that maps a primitive value to the Component props
   * @param {string|object|function} val The value to create a ReactElement from
   * @param {Object} [options={}]
   * @param {object} [options.defaultProps={}] Default props object
   * @param {object|function} [options.overrideProps={}] Override props object or function (called with regular props)
   * @param {boolean} [options.autoGenerateKey=true] Whether or not automatic key generation is allowed
   * @returns {object|null}
   */


  function createShorthand(Component, mapValueToProps, val) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    if (typeof Component !== 'function' && typeof Component !== 'string') {
      throw new Error('createShorthand() Component must be a string or function.');
    } // short circuit noop values


    if ((0, _isNil2["default"])(val) || (0, _isBoolean2["default"])(val)) return null;
    var valIsString = (0, _isString2["default"])(val);
    var valIsNumber = (0, _isNumber2["default"])(val);
    var valIsFunction = (0, _isFunction2["default"])(val);
    var valIsReactElement = (0, _react.isValidElement)(val);
    var valIsPropsObject = (0, _isPlainObject2["default"])(val);
    var valIsPrimitiveValue = valIsString || valIsNumber || (0, _isArray2["default"])(val); // unhandled type return null

    /* eslint-disable no-console */

    if (!valIsFunction && !valIsReactElement && !valIsPropsObject && !valIsPrimitiveValue) {
      {
        console.error(['Shorthand value must be a string|number|array|object|ReactElement|function.', ' Use null|undefined|boolean for none', " Received ".concat((0, _typeof2["default"])(val), ".")].join(''));
      }

      return null;
    }
    /* eslint-enable no-console */
    // ----------------------------------------
    // Build up props
    // ----------------------------------------


    var _options$defaultProps = options.defaultProps,
        defaultProps = _options$defaultProps === void 0 ? {} : _options$defaultProps; // User's props

    var usersProps = valIsReactElement && val.props || valIsPropsObject && val || valIsPrimitiveValue && mapValueToProps(val); // Override props

    var _options$overrideProp = options.overrideProps,
        overrideProps = _options$overrideProp === void 0 ? {} : _options$overrideProp;
    overrideProps = (0, _isFunction2["default"])(overrideProps) ? overrideProps((0, _objectSpread2["default"])({}, defaultProps, usersProps)) : overrideProps; // Merge props

    /* eslint-disable react/prop-types */

    var props = (0, _objectSpread2["default"])({}, defaultProps, usersProps, overrideProps); // Merge className

    if (defaultProps.className || overrideProps.className || usersProps.className) {
      var mergedClassesNames = (0, _classnames["default"])(defaultProps.className, overrideProps.className, usersProps.className);
      props.className = (0, _uniq2["default"])(mergedClassesNames.split(' ')).join(' ');
    } // Merge style


    if (defaultProps.style || overrideProps.style || usersProps.style) {
      props.style = (0, _objectSpread2["default"])({}, defaultProps.style, usersProps.style, overrideProps.style);
    } // ----------------------------------------
    // Get key
    // ----------------------------------------
    // Use key, childKey, or generate key


    if ((0, _isNil2["default"])(props.key)) {
      var childKey = props.childKey;
      var _options$autoGenerate = options.autoGenerateKey,
          autoGenerateKey = _options$autoGenerate === void 0 ? true : _options$autoGenerate;

      if (!(0, _isNil2["default"])(childKey)) {
        // apply and consume the childKey
        props.key = typeof childKey === 'function' ? childKey(props) : childKey;
        delete props.childKey;
      } else if (autoGenerateKey && (valIsString || valIsNumber)) {
        // use string/number shorthand values as the key
        props.key = val;
      }
    } // ----------------------------------------
    // Create Element
    // ----------------------------------------
    // Clone ReactElements


    if (valIsReactElement) return (0, _react.cloneElement)(val, props); // Create ReactElements from built up props

    if (valIsPrimitiveValue || valIsPropsObject) return _react["default"].createElement(Component, props); // Call functions with args similar to createElement()

    if (valIsFunction) return val(Component, props, props.children);
    /* eslint-enable react/prop-types */
  } // ============================================================
  // Factory Creators
  // ============================================================

  /**
   * Creates a `createShorthand` function that is waiting for a value and options.
   *
   * @param {function|string} Component A ReactClass or string
   * @param {function} mapValueToProps A function that maps a primitive value to the Component props
   * @returns {function} A shorthand factory function waiting for `val` and `defaultProps`.
   */


  createShorthand.handledProps = [];

  function createShorthandFactory(Component, mapValueToProps) {
    if (typeof Component !== 'function' && typeof Component !== 'string') {
      throw new Error('createShorthandFactory() Component must be a string or function.');
    }

    return function (val, options) {
      return createShorthand(Component, mapValueToProps, val, options);
    };
  } // ============================================================
  // HTML Factories
  // ============================================================


  var createHTMLDivision = createShorthandFactory('div', function (val) {
    return {
      children: val
    };
  });
  exports.createHTMLDivision = createHTMLDivision;
  var createHTMLIframe = createShorthandFactory('iframe', function (src) {
    return {
      src: src
    };
  });
  exports.createHTMLIframe = createHTMLIframe;
  var createHTMLImage = createShorthandFactory('img', function (val) {
    return {
      src: val
    };
  });
  exports.createHTMLImage = createHTMLImage;
  var createHTMLInput = createShorthandFactory('input', function (val) {
    return {
      type: val
    };
  });
  exports.createHTMLInput = createHTMLInput;
  var createHTMLLabel = createShorthandFactory('label', function (val) {
    return {
      children: val
    };
  });
  exports.createHTMLLabel = createHTMLLabel;
  var createHTMLParagraph = createShorthandFactory('p', function (val) {
    return {
      children: val
    };
  });
  exports.createHTMLParagraph = createHTMLParagraph;
});
unwrapExports(factories);
var factories_1 = factories.createShorthand;
var factories_2 = factories.createShorthandFactory;
var factories_3 = factories.createHTMLParagraph;
var factories_4 = factories.createHTMLLabel;
var factories_5 = factories.createHTMLInput;
var factories_6 = factories.createHTMLImage;
var factories_7 = factories.createHTMLIframe;
var factories_8 = factories.createHTMLDivision;

var getUnhandledProps_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  /**
   * Returns an object consisting of props beyond the scope of the Component.
   * Useful for getting and spreading unknown props from the user.
   * @param {function} Component A function or ReactClass.
   * @param {object} props A ReactElement props object
   * @returns {{}} A shallow copy of the prop object
   */

  var getUnhandledProps = function getUnhandledProps(Component, props) {
    // Note that `handledProps` are generated automatically during build with `babel-plugin-transform-react-handled-props`
    var _Component$handledPro = Component.handledProps,
        handledProps = _Component$handledPro === void 0 ? [] : _Component$handledPro;
    return Object.keys(props).reduce(function (acc, prop) {
      if (prop === 'childKey') return acc;
      if (handledProps.indexOf(prop) === -1) acc[prop] = props[prop];
      return acc;
    }, {});
  };

  var _default = getUnhandledProps;
  exports["default"] = _default;
});
unwrapExports(getUnhandledProps_1);

var getElementType_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  /**
   * Returns a createElement() type based on the props of the Component.
   * Useful for calculating what type a component should render as.
   *
   * @param {function} Component A function or ReactClass.
   * @param {object} props A ReactElement props object
   * @param {function} [getDefault] A function that returns a default element type.
   * @returns {string|function} A ReactElement type
   */

  function getElementType(Component, props, getDefault) {
    var _Component$defaultPro = Component.defaultProps,
        defaultProps = _Component$defaultPro === void 0 ? {} : _Component$defaultPro; // ----------------------------------------
    // user defined "as" element type

    if (props.as && props.as !== defaultProps.as) return props.as; // ----------------------------------------
    // computed default element type

    if (getDefault) {
      var computedDefault = getDefault();
      if (computedDefault) return computedDefault;
    } // ----------------------------------------
    // infer anchor links


    if (props.href) return 'a'; // ----------------------------------------
    // use defaultProp or 'div'

    return defaultProps.as || 'div';
  }

  var _default = getElementType;
  exports["default"] = _default;
});
unwrapExports(getElementType_1);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */

function baseValues(object, props) {
  return _arrayMap(props, function (key) {
    return object[key];
  });
}

var _baseValues = baseValues;

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */

function values(object) {
  return object == null ? [] : _baseValues(object, keys_1(object));
}

var values_1 = values;

/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax$5 = Math.max;
/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */

function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike_1(collection) ? collection : values_1(collection);
  fromIndex = fromIndex && !guard ? toInteger_1(fromIndex) : 0;
  var length = collection.length;

  if (fromIndex < 0) {
    fromIndex = nativeMax$5(length + fromIndex, 0);
  }

  return isString_1(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && _baseIndexOf(collection, value, fromIndex) > -1;
}

var includes_1 = includes;

var htmlPropsUtils = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.partitionHTMLProps = exports.htmlImageProps = exports.htmlInputProps = exports.htmlInputEvents = exports.htmlInputAttrs = void 0;

  var _includes2 = interopRequireDefault(includes_1);

  var _forEach2 = interopRequireDefault(forEach_1);

  var htmlInputAttrs = [// REACT
  'selected', 'defaultValue', 'defaultChecked', // LIMITED HTML PROPS
  'accept', 'autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFocus', 'checked', 'disabled', 'form', 'id', 'lang', 'list', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'step', 'title', 'type', 'value'];
  exports.htmlInputAttrs = htmlInputAttrs;
  var htmlInputEvents = [// EVENTS
  // keyboard
  'onKeyDown', 'onKeyPress', 'onKeyUp', // focus
  'onFocus', 'onBlur', // form
  'onChange', 'onInput', // mouse
  'onClick', 'onContextMenu', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', // selection
  'onSelect', // touch
  'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart'];
  exports.htmlInputEvents = htmlInputEvents;
  var htmlInputProps = [].concat(htmlInputAttrs, htmlInputEvents);
  exports.htmlInputProps = htmlInputProps;
  var htmlImageProps = ['alt', 'height', 'src', 'srcSet', 'width'];
  /**
   * Returns an array of objects consisting of: props of html input element and rest.
   * @param {object} props A ReactElement props object
   * @param {Object} [options={}]
   * @param {Array} [options.htmlProps] An array of html input props
   * @param {boolean} [options.includeAria] Includes all input props that starts with "aria-"
   * @returns {[{}, {}]} An array of objects
   */

  exports.htmlImageProps = htmlImageProps;

  var partitionHTMLProps = function partitionHTMLProps(props) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$htmlProps = options.htmlProps,
        htmlProps = _options$htmlProps === void 0 ? htmlInputProps : _options$htmlProps,
        _options$includeAria = options.includeAria,
        includeAria = _options$includeAria === void 0 ? true : _options$includeAria;
    var inputProps = {};
    var rest = {};
    (0, _forEach2["default"])(props, function (val, prop) {
      var possibleAria = includeAria && (/^aria-.*$/.test(prop) || prop === 'role');
      var target = (0, _includes2["default"])(htmlProps, prop) || possibleAria ? inputProps : rest;
      target[prop] = val;
    });
    return [inputProps, rest];
  };

  exports.partitionHTMLProps = partitionHTMLProps;
});
unwrapExports(htmlPropsUtils);
var htmlPropsUtils_1 = htmlPropsUtils.partitionHTMLProps;
var htmlPropsUtils_2 = htmlPropsUtils.htmlImageProps;
var htmlPropsUtils_3 = htmlPropsUtils.htmlInputProps;
var htmlPropsUtils_4 = htmlPropsUtils.htmlInputEvents;
var htmlPropsUtils_5 = htmlPropsUtils.htmlInputAttrs;

var isBrowser_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _typeof2 = interopRequireDefault(_typeof_1);

  var _isNil2 = interopRequireDefault(isNil_1);

  var hasDocument = (typeof document === "undefined" ? "undefined" : (0, _typeof2["default"])(document)) === 'object' && document !== null;
  var hasWindow = (typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window)) === 'object' && window !== null && window.self === window; // eslint-disable-next-line no-confusing-arrow

  var isBrowser = function isBrowser() {
    return !(0, _isNil2["default"])(isBrowser.override) ? isBrowser.override : hasDocument && hasWindow;
  };

  var _default = isBrowser;
  exports["default"] = _default;
});
unwrapExports(isBrowser_1);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$6 = Math.max,
    nativeMin$3 = Math.min;
/**
 * The base implementation of `_.inRange` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */

function baseInRange(number, start, end) {
  return number >= nativeMin$3(start, end) && number < nativeMax$6(start, end);
}

var _baseInRange = baseInRange;

/**
 * Checks if `n` is between `start` and up to, but not including, `end`. If
 * `end` is not specified, it's set to `start` with `start` then set to `0`.
 * If `start` is greater than `end` the params are swapped to support
 * negative ranges.
 *
 * @static
 * @memberOf _
 * @since 3.3.0
 * @category Number
 * @param {number} number The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 * @see _.range, _.rangeRight
 * @example
 *
 * _.inRange(3, 2, 4);
 * // => true
 *
 * _.inRange(4, 8);
 * // => true
 *
 * _.inRange(4, 2);
 * // => false
 *
 * _.inRange(2, 2);
 * // => false
 *
 * _.inRange(1.2, 2);
 * // => true
 *
 * _.inRange(5.2, 4);
 * // => false
 *
 * _.inRange(-3, -2, -6);
 * // => true
 */

function inRange(number, start, end) {
  start = toFinite_1(start);

  if (end === undefined) {
    end = start;
    start = 0;
  } else {
    end = toFinite_1(end);
  }

  number = toNumber_1(number);
  return _baseInRange(number, start, end);
}

var inRange_1 = inRange;

/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return array && array.length ? array[0] : undefined;
}

var head_1 = head;

var first = head_1;

var doesNodeContainClick_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _inRange2 = interopRequireDefault(inRange_1);

  var _first3 = interopRequireDefault(first);

  var _invoke2 = interopRequireDefault(invoke_1);

  var _isNil2 = interopRequireDefault(isNil_1);

  var _some2 = interopRequireDefault(some_1);
  /**
   * Determines if a click's coordinates are within the bounds of a node.
   *
   * @see https://github.com/Semantic-Org/Semantic-UI-React/pull/2384
   *
   * @param {object} node - A DOM node.
   * @param {object} e - A SyntheticEvent or DOM Event.
   * @returns {boolean}
   */


  var doesNodeContainClick = function doesNodeContainClick(node, e) {
    if ((0, _some2["default"])([e, node], _isNil2["default"])) return false; // if there is an e.target and it is in the document, use a simple node.contains() check

    if (e.target) {
      (0, _invoke2["default"])(e.target, 'setAttribute', 'data-suir-click-target', true);

      if (document.querySelector('[data-suir-click-target=true]')) {
        (0, _invoke2["default"])(e.target, 'removeAttribute', 'data-suir-click-target');
        return node.contains(e.target);
      }
    } // Below logic handles cases where the e.target is no longer in the document.
    // The result of the click likely has removed the e.target node.
    // Instead of node.contains(), we'll identify the click by X/Y position.
    // return early if the event properties aren't available
    // prevent measuring the node and repainting if we don't need to


    var clientX = e.clientX,
        clientY = e.clientY;
    if ((0, _some2["default"])([clientX, clientY], _isNil2["default"])) return false; // false if the node is not visible

    var clientRects = node.getClientRects(); // Heads Up!
    // getClientRects returns a DOMRectList, not an array nor a plain object
    // We explicitly avoid _.isEmpty and check .length to cover all possible shapes

    if (!node.offsetWidth || !node.offsetHeight || !clientRects || !clientRects.length) return false; // false if the node doesn't have a valid bounding rect

    var _first2 = (0, _first3["default"])(clientRects),
        top = _first2.top,
        bottom = _first2.bottom,
        left = _first2.left,
        right = _first2.right;

    if ((0, _some2["default"])([top, bottom, left, right], _isNil2["default"])) return false; // we add a small decimal to the upper bound just to make it inclusive
    // don't add an whole pixel (1) as the event/node values may be decimal sensitive

    return (0, _inRange2["default"])(clientY, top, bottom + 0.001) && (0, _inRange2["default"])(clientX, left, right + 0.001);
  };

  var _default = doesNodeContainClick;
  exports["default"] = _default;
});
unwrapExports(doesNodeContainClick_1);

var itemFactories = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createLastItem = exports.createNextItem = exports.createPageFactory = exports.createPrevItem = exports.createFirstPage = exports.createEllipsisItem = void 0;
  /**
   * @param {number} pageNumber
   * @return {Object}
   */

  var createEllipsisItem = function createEllipsisItem(pageNumber) {
    return {
      active: false,
      type: 'ellipsisItem',
      value: pageNumber
    };
  };
  /**
   * @return {Object}
   */


  exports.createEllipsisItem = createEllipsisItem;

  var createFirstPage = function createFirstPage() {
    return {
      active: false,
      type: 'firstItem',
      value: 1
    };
  };
  /**
   * @param {number} activePage
   * @return {Object}
   */


  exports.createFirstPage = createFirstPage;

  var createPrevItem = function createPrevItem(activePage) {
    return {
      active: false,
      type: 'prevItem',
      value: Math.max(1, activePage - 1)
    };
  };
  /**
   * @param {number} activePage
   * @return {function}
   */


  exports.createPrevItem = createPrevItem;

  var createPageFactory = function createPageFactory(activePage) {
    return function (pageNumber) {
      return {
        active: activePage === pageNumber,
        type: 'pageItem',
        value: pageNumber
      };
    };
  };
  /**
   * @param {number} activePage
   * @param {number} totalPages
   * @return {Object}
   */


  exports.createPageFactory = createPageFactory;

  var createNextItem = function createNextItem(activePage, totalPages) {
    return {
      active: false,
      type: 'nextItem',
      value: Math.min(activePage + 1, totalPages)
    };
  };
  /**
   * @param {number} totalPages
   * @return {Object}
   */


  exports.createNextItem = createNextItem;

  var createLastItem = function createLastItem(totalPages) {
    return {
      active: false,
      type: 'lastItem',
      value: totalPages
    };
  };

  exports.createLastItem = createLastItem;
});
unwrapExports(itemFactories);
var itemFactories_1 = itemFactories.createLastItem;
var itemFactories_2 = itemFactories.createNextItem;
var itemFactories_3 = itemFactories.createPageFactory;
var itemFactories_4 = itemFactories.createPrevItem;
var itemFactories_5 = itemFactories.createFirstPage;
var itemFactories_6 = itemFactories.createEllipsisItem;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax$7 = Math.max;
/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */

function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax$7(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }

  return result;
}

var _baseRange = baseRange;

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */

function createRange(fromRight) {
  return function (start, end, step) {
    if (step && typeof step != 'number' && _isIterateeCall(start, end, step)) {
      end = step = undefined;
    } // Ensure the sign of `-0` is preserved.


    start = toFinite_1(start);

    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite_1(end);
    }

    step = step === undefined ? start < end ? 1 : -1 : toFinite_1(step);
    return _baseRange(start, end, step, fromRight);
  };
}

var _createRange = createRange;

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */

var range = _createRange();
var range_1 = range;

var suffixFactories = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createInnerSuffix = exports.createInnerPrefix = void 0;

  var createInnerPrefix = function createInnerPrefix(firstGroupEnd, innerGroupStart, pageFactory) {
    var prefixPage = innerGroupStart - 1;
    var showEllipsis = prefixPage !== firstGroupEnd + 1;
    var prefixFactory = showEllipsis ? itemFactories.createEllipsisItem : pageFactory;
    return prefixFactory(prefixPage);
  };

  exports.createInnerPrefix = createInnerPrefix;

  var createInnerSuffix = function createInnerSuffix(innerGroupEnd, lastGroupStart, pageFactory) {
    var suffixPage = innerGroupEnd + 1;
    var showEllipsis = suffixPage !== lastGroupStart - 1;
    var suffixFactory = showEllipsis ? itemFactories.createEllipsisItem : pageFactory;
    return suffixFactory(suffixPage);
  };

  exports.createInnerSuffix = createInnerSuffix;
});
unwrapExports(suffixFactories);
var suffixFactories_1 = suffixFactories.createInnerSuffix;
var suffixFactories_2 = suffixFactories.createInnerPrefix;

var rangeFactories = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComplexRange = exports.createSimpleRange = void 0;

  var _toConsumableArray2 = interopRequireDefault(toConsumableArray);

  var _range2 = interopRequireDefault(range_1);

  var _map2 = interopRequireDefault(map_1);

  var createSimpleRange = function createSimpleRange(start, end, pageFactory) {
    return (0, _map2["default"])((0, _range2["default"])(start, end + 1), pageFactory);
  };

  exports.createSimpleRange = createSimpleRange;

  var createComplexRange = function createComplexRange(options, pageFactory) {
    var activePage = options.activePage,
        boundaryRange = options.boundaryRange,
        hideEllipsis = options.hideEllipsis,
        siblingRange = options.siblingRange,
        totalPages = options.totalPages;
    var ellipsisSize = hideEllipsis ? 0 : 1;
    var firstGroupEnd = boundaryRange;
    var firstGroup = createSimpleRange(1, firstGroupEnd, pageFactory);
    var lastGroupStart = totalPages + 1 - boundaryRange;
    var lastGroup = createSimpleRange(lastGroupStart, totalPages, pageFactory);
    var innerGroupStart = Math.min(Math.max(activePage - siblingRange, firstGroupEnd + ellipsisSize + 1), lastGroupStart - ellipsisSize - 2 * siblingRange - 1);
    var innerGroupEnd = innerGroupStart + 2 * siblingRange;
    var innerGroup = createSimpleRange(innerGroupStart, innerGroupEnd, pageFactory);
    return [].concat((0, _toConsumableArray2["default"])(firstGroup), [!hideEllipsis && (0, suffixFactories.createInnerPrefix)(firstGroupEnd, innerGroupStart, pageFactory)], (0, _toConsumableArray2["default"])(innerGroup), [!hideEllipsis && (0, suffixFactories.createInnerSuffix)(innerGroupEnd, lastGroupStart, pageFactory)], (0, _toConsumableArray2["default"])(lastGroup)).filter(Boolean);
  };

  exports.createComplexRange = createComplexRange;
});
unwrapExports(rangeFactories);
var rangeFactories_1 = rangeFactories.createComplexRange;
var rangeFactories_2 = rangeFactories.createSimpleRange;

var paginationUtils = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.typifyOptions = exports.isSimplePagination = void 0;
  /**
   * Checks the possibility of using simple range generation, if number of generated pages is equal
   * or greater than total pages to show.
   *
   * @param {object} options
   * @param {number} options.boundaryRange Number of always visible pages at the beginning and end.
   * @param {number} options.siblingRange Number of always visible pages before and after the current one.
   * @param {number} options.totalPages Total number of pages.
   * @return {boolean}
   */

  var isSimplePagination = function isSimplePagination(_ref) {
    var boundaryRange = _ref.boundaryRange,
        hideEllipsis = _ref.hideEllipsis,
        siblingRange = _ref.siblingRange,
        totalPages = _ref.totalPages;
    var boundaryRangeSize = 2 * boundaryRange;
    var ellipsisSize = hideEllipsis ? 0 : 2;
    var siblingRangeSize = 2 * siblingRange;
    return 1 + ellipsisSize + siblingRangeSize + boundaryRangeSize >= totalPages;
  };

  exports.isSimplePagination = isSimplePagination;

  var typifyOptions = function typifyOptions(_ref2) {
    var activePage = _ref2.activePage,
        boundaryRange = _ref2.boundaryRange,
        hideEllipsis = _ref2.hideEllipsis,
        siblingRange = _ref2.siblingRange,
        totalPages = _ref2.totalPages;
    return {
      activePage: +activePage,
      boundaryRange: +boundaryRange,
      hideEllipsis: !!hideEllipsis,
      siblingRange: +siblingRange,
      totalPages: +totalPages
    };
  };

  exports.typifyOptions = typifyOptions;
});
unwrapExports(paginationUtils);
var paginationUtils_1 = paginationUtils.typifyOptions;
var paginationUtils_2 = paginationUtils.isSimplePagination;

var createPaginationItems_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _toConsumableArray2 = interopRequireDefault(toConsumableArray);
  /**
   * @param {object} rawOptions
   * @param {number|string} rawOptions.activePage
   * @param {number|string} rawOptions.boundaryRange Number of always visible pages at the beginning and end.
   * @param {boolean} rawOptions.hideEllipsis Marks if ellipsis should be hidden.
   * @param {number|string} rawOptions.siblingRange Number of always visible pages before and after the current one.
   * @param {number|string} rawOptions.totalPages Total number of pages.
   */


  var createPaginationItems = function createPaginationItems(rawOptions) {
    var options = (0, paginationUtils.typifyOptions)(rawOptions);
    var activePage = options.activePage,
        totalPages = options.totalPages;
    var pageFactory = (0, itemFactories.createPageFactory)(activePage);
    var innerRange = (0, paginationUtils.isSimplePagination)(options) ? (0, rangeFactories.createSimpleRange)(1, totalPages, pageFactory) : (0, rangeFactories.createComplexRange)(options, pageFactory);
    return [(0, itemFactories.createFirstPage)(), (0, itemFactories.createPrevItem)(activePage)].concat((0, _toConsumableArray2["default"])(innerRange), [(0, itemFactories.createNextItem)(activePage, totalPages), (0, itemFactories.createLastItem)(totalPages)]);
  };

  var _default = createPaginationItems;
  exports["default"] = _default;
});
unwrapExports(createPaginationItems_1);

var createPaginationItems = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _createPaginationItems["default"];
    }
  });

  var _createPaginationItems = interopRequireDefault(createPaginationItems_1);
});
unwrapExports(createPaginationItems);

var SUI = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ALL_ICONS_IN_ALL_CONTEXTS = exports.COMPONENT_CONTEXT_SPECIFIC_ICONS = exports.ICONS_AND_ALIASES = exports.ICON_ALIASES = exports.ICONS = exports.BRANDS = exports.WRITING = exports.VEHICLES = exports.USERS_PEOPLE = exports.STATUS = exports.SPORTS = exports.SPINNERS = exports.SHAPES = exports.PAYMENTS_SHOPPING = exports.OBJECTS = exports.MEDICAL = exports.MAPS = exports.LOGISTICS = exports.INTERFACES = exports.IMAGES = exports.HEALTH = exports.HANDS_GESTURES = exports.GENDERS = exports.FILES = exports.EDITORS = exports.DESIGN = exports.DATE_TIME = exports.CURRENCY = exports.COMPUTERS = exports.COMMUNICATION = exports.CODE = exports.CHESS = exports.BUSINESS = exports.AUDIO_VIDEO = exports.ARROWS = exports.ACCESSIBILITY = exports.TRANSITIONS = exports.STATIC_TRANSITIONS = exports.DIRECTIONAL_TRANSITIONS = exports.WIDTHS = exports.VISIBILITY = exports.VERTICAL_ALIGNMENTS = exports.TEXT_ALIGNMENTS = exports.SIZES = exports.FLOATS = exports.COLORS = void 0;

  var _toConsumableArray2 = interopRequireDefault(toConsumableArray);

  var _uniq2 = interopRequireDefault(uniq_1);

  var _values2 = interopRequireDefault(values_1);

  var _keys2 = interopRequireDefault(keys_1);

  var COLORS = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
  exports.COLORS = COLORS;
  var FLOATS = ['left', 'right'];
  exports.FLOATS = FLOATS;
  var SIZES = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'];
  exports.SIZES = SIZES;
  var TEXT_ALIGNMENTS = ['left', 'center', 'right', 'justified'];
  exports.TEXT_ALIGNMENTS = TEXT_ALIGNMENTS;
  var VERTICAL_ALIGNMENTS = ['bottom', 'middle', 'top'];
  exports.VERTICAL_ALIGNMENTS = VERTICAL_ALIGNMENTS;
  var VISIBILITY = ['mobile', 'tablet', 'computer', 'large screen', 'widescreen'];
  exports.VISIBILITY = VISIBILITY;
  var WIDTHS = [].concat((0, _toConsumableArray2["default"])((0, _keys2["default"])(numberToWord_1.numberToWordMap)), (0, _toConsumableArray2["default"])((0, _keys2["default"])(numberToWord_1.numberToWordMap).map(Number)), (0, _toConsumableArray2["default"])((0, _values2["default"])(numberToWord_1.numberToWordMap)));
  exports.WIDTHS = WIDTHS;
  var DIRECTIONAL_TRANSITIONS = ['browse', 'browse right', 'drop', 'fade', 'fade up', 'fade down', 'fade left', 'fade right', 'fly up', 'fly down', 'fly left', 'fly right', 'horizontal flip', 'vertical flip', 'scale', 'slide up', 'slide down', 'slide left', 'slide right', 'swing up', 'swing down', 'swing left', 'swing right', 'zoom'];
  exports.DIRECTIONAL_TRANSITIONS = DIRECTIONAL_TRANSITIONS;
  var STATIC_TRANSITIONS = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce', 'glow'];
  exports.STATIC_TRANSITIONS = STATIC_TRANSITIONS;
  var TRANSITIONS = [].concat(DIRECTIONAL_TRANSITIONS, STATIC_TRANSITIONS); // Generated from:
  // https://github.com/Semantic-Org/Semantic-UI/blob/master/dist/components/icon.css

  exports.TRANSITIONS = TRANSITIONS;
  var ACCESSIBILITY = ['american sign language interpreting', 'assistive listening systems', 'audio description', 'blind', 'braille', 'closed captioning', 'closed captioning outline', 'deaf', 'low vision', 'phone volume', 'question circle', 'question circle outline', 'sign language', 'tty', 'universal access', 'wheelchair'];
  exports.ACCESSIBILITY = ACCESSIBILITY;
  var ARROWS = ['angle double down', 'angle double left', 'angle double right', 'angle double up', 'angle down', 'angle left', 'angle right', 'angle up', 'arrow alternate circle down', 'arrow alternate circle down outline', 'arrow alternate circle left', 'arrow alternate circle left outline', 'arrow alternate circle right', 'arrow alternate circle right outline', 'arrow alternate circle up', 'arrow alternate circle up outline', 'arrow circle down', 'arrow circle left', 'arrow circle right', 'arrow circle up', 'arrow down', 'arrow left', 'arrow right', 'arrow up', 'arrows alternate', 'arrows alternate horizontal', 'arrows alternate vertical', 'caret down', 'caret left', 'caret right', 'caret square down', 'caret square down outline', 'caret square left', 'caret square left outline', 'caret square right', 'caret square right outline', 'caret square up', 'caret square up outline', 'caret up', 'cart arrow down', 'chart line', 'chevron circle down', 'chevron circle left', 'chevron circle right', 'chevron circle up', 'chevron down', 'chevron left', 'chevron right', 'chevron up', 'cloud download', 'cloud upload', 'download', 'exchange', 'expand arrows alternate', 'external alternate', 'external square alternate', 'hand point down', 'hand point down outline', 'hand point left', 'hand point left outline', 'hand point right', 'hand point right outline', 'hand point up', 'hand point up outline', 'hand pointer', 'hand pointer outline', 'history', 'level down alternate', 'level up alternate', 'location arrow', 'long arrow alternate down', 'long arrow alternate left', 'long arrow alternate right', 'long arrow alternate up', 'mouse pointer', 'play', 'random', 'recycle', 'redo', 'redo alternate', 'reply', 'reply all', 'retweet', 'share', 'share square', 'share square outline', 'sign-in', 'sign-out', 'sign-in alternate', 'sign-out alternate', 'sort', 'sort alphabet down', 'sort alphabet up', 'sort amount down', 'sort amount up', 'sort down', 'sort numeric down', 'sort numeric up', 'sort up', 'sync', 'sync alternate', 'text height', 'text width', 'undo', 'undo alternate', 'upload', 'zoom-in', 'zoom-out'];
  exports.ARROWS = ARROWS;
  var AUDIO_VIDEO = ['audio description', 'backward', 'circle', 'circle outline', 'closed captioning', 'closed captioning outline', 'compress', 'eject', 'expand', 'expand arrows alternate', 'fast backward', 'fast forward', 'file audio', 'file audio outline', 'file video', 'file video outline', 'film', 'forward', 'headphones', 'microphone', 'microphone slash', 'music', 'pause', 'pause circle', 'pause circle outline', 'phone volume', 'play', 'play circle', 'play circle outline', 'podcast', 'random', 'redo', 'redo alternate', 'rss', 'rss square', 'step backward', 'step forward', 'stop', 'stop circle', 'stop circle outline', 'sync', 'sync alternate', 'undo', 'undo alternate', 'video', 'volume down', 'volume off', 'volume up'];
  exports.AUDIO_VIDEO = AUDIO_VIDEO;
  var BUSINESS = ['address book', 'address book outline', 'address card', 'address card outline', 'archive', 'balance scale', 'birthday cake', 'book', 'briefcase', 'building', 'building outline', 'bullhorn', 'bullseye', 'calculator', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'certificate', 'chart area', 'chart bar', 'chart bar outline', 'chart line', 'chart pie', 'clipboard', 'clipboard outline', 'coffee', 'columns', 'compass', 'compass outline', 'copy', 'copy outline', 'copyright', 'copyright outline', 'cut', 'edit', 'edit outline', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'envelope square', 'eraser', 'fax', 'file', 'file outline', 'file alternate', 'file alternate outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'globe', 'industry', 'paperclip', 'paste', 'pen square', 'pencil alternate', 'percent', 'phone', 'phone square', 'phone volume', 'registered', 'registered outline', 'save', 'save outline', 'sitemap', 'sticky note', 'sticky note outline', 'suitcase', 'table', 'tag', 'tags', 'tasks', 'thumbtack', 'trademark'];
  exports.BUSINESS = BUSINESS;
  var CHESS = ['chess', 'chess bishop', 'chess board', 'chess king', 'chess knight', 'chess pawn', 'chess queen', 'chess rook', 'square full'];
  exports.CHESS = CHESS;
  var CODE = ['archive', 'barcode', 'bath', 'bug', 'code', 'code branch', 'coffee', 'file', 'file outline', 'file alternate', 'file alternate outline', 'file code', 'file code outline', 'filter', 'fire extinguisher', 'folder', 'folder outline', 'folder open', 'folder open outline', 'keyboard', 'keyboard outline', 'microchip', 'qrcode', 'shield alternate', 'sitemap', 'terminal', 'user secret', 'window close', 'window close outline', 'window maximize', 'window maximize outline', 'window minimize', 'window minimize outline', 'window restore', 'window restore outline'];
  exports.CODE = CODE;
  var COMMUNICATION = ['address book', 'address book outline', 'address card', 'address card outline', 'american sign language interpreting', 'assistive listening systems', 'at', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'bullhorn', 'comment', 'comment outline', 'comment alternate', 'comment alternate outline', 'comments', 'comments outline', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'envelope square', 'fax', 'inbox', 'language', 'microphone', 'microphone slash', 'mobile', 'mobile alternate', 'paper plane', 'paper plane outline', 'phone', 'phone square', 'phone volume', 'rss', 'rss square', 'tty', 'wifi'];
  exports.COMMUNICATION = COMMUNICATION;
  var COMPUTERS = ['desktop', 'download', 'hdd', 'hdd outline', 'headphones', 'keyboard', 'keyboard outline', 'laptop', 'microchip', 'mobile', 'mobile alternate', 'plug', 'power off', 'print', 'save', 'save outline', 'server', 'tablet', 'tablet alternate', 'tv', 'upload'];
  exports.COMPUTERS = COMPUTERS;
  var CURRENCY = ['dollar sign', 'euro sign', 'lira sign', 'money bill alternate', 'money bill alternate outline', 'pound sign', 'ruble sign', 'rupee sign', 'shekel sign', 'won sign', 'yen sign'];
  exports.CURRENCY = CURRENCY;
  var DATE_TIME = ['bell', 'bell outline', 'bell slash', 'bell slash outline', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'calendar check', 'calendar check outline', 'calendar minus', 'calendar minus outline', 'calendar plus', 'calendar plus outline', 'calendar times', 'calendar times outline', 'clock', 'clock outline', 'hourglass', 'hourglass outline', 'hourglass end', 'hourglass half', 'hourglass start', 'stopwatch'];
  exports.DATE_TIME = DATE_TIME;
  var DESIGN = ['adjust', 'clone', 'clone outline', 'copy', 'copy outline', 'crop', 'crosshairs', 'cut', 'edit', 'edit outline', 'eraser', 'eye', 'eye dropper', 'eye slash', 'eye slash outline', 'object group', 'object group outline', 'object ungroup', 'object ungroup outline', 'paint brush', 'paste', 'pencil alternate', 'save', 'save outline', 'tint'];
  exports.DESIGN = DESIGN;
  var EDITORS = ['align center', 'align justify', 'align left', 'align right', 'bold', 'clipboard', 'clipboard outline', 'clone', 'clone outline', 'columns', 'copy', 'copy outline', 'cut', 'edit', 'edit outline', 'eraser', 'file', 'file outline', 'file alternate', 'file alternate outline', 'font', 'heading', 'i cursor', 'indent', 'italic', 'linkify', 'list', 'list alternate', 'list alternate outline', 'list ol', 'list ul', 'outdent', 'paper plane', 'paper plane outline', 'paperclip', 'paragraph', 'paste', 'pencil alternate', 'print', 'quote left', 'quote right', 'redo', 'redo alternate', 'reply', 'reply all', 'share', 'strikethrough', 'subscript', 'superscript', 'sync', 'sync alternate', 'table', 'tasks', 'text height', 'text width', 'th', 'th large', 'th list', 'trash', 'trash alternate', 'trash alternate outline', 'underline', 'undo', 'undo alternate', 'unlink'];
  exports.EDITORS = EDITORS;
  var FILES = ['archive', 'clone', 'clone outline', 'copy', 'copy outline', 'cut', 'file', 'file outline', 'file alternate', 'file alternate outline', 'file archive', 'file archive outline', 'file audio', 'file audio outline', 'file code', 'file code outline', 'file excel', 'file excel outline', 'file image', 'file image outline', 'file pdf', 'file pdf outline', 'file powerpoint', 'file powerpoint outline', 'file video', 'file video outline', 'file word', 'file word outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'paste', 'save', 'save outline', 'sticky note', 'sticky note outline'];
  exports.FILES = FILES;
  var GENDERS = ['genderless', 'mars', 'mars double', 'mars stroke', 'mars stroke horizontal', 'mars stroke vertical', 'mercury', 'neuter', 'transgender', 'transgender alternate', 'venus', 'venus double', 'venus mars'];
  exports.GENDERS = GENDERS;
  var HANDS_GESTURES = ['hand lizard', 'hand lizard outline', 'hand paper', 'hand paper outline', 'hand peace', 'hand peace outline', 'hand point down', 'hand point down outline', 'hand point left', 'hand point left outline', 'hand point right', 'hand point right outline', 'hand point up', 'hand point up outline', 'hand pointer', 'hand pointer outline', 'hand rock', 'hand rock outline', 'hand scissors', 'hand scissors outline', 'hand spock', 'hand spock outline', 'handshake', 'handshake outline', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline'];
  exports.HANDS_GESTURES = HANDS_GESTURES;
  var HEALTH = ['ambulance', 'h square', 'heart', 'heart outline', 'heartbeat', 'hospital', 'hospital outline', 'medkit', 'plus square', 'plus square outline', 'stethoscope', 'user md', 'wheelchair'];
  exports.HEALTH = HEALTH;
  var IMAGES = ['adjust', 'bolt', 'camera', 'camera retro', 'clone', 'clone outline', 'compress', 'expand', 'eye', 'eye dropper', 'eye slash', 'eye slash outline', 'file image', 'file image outline', 'film', 'id badge', 'id badge outline', 'id card', 'id card outline', 'image', 'image outline', 'images', 'images outline', 'sliders horizontal', 'tint'];
  exports.IMAGES = IMAGES;
  var INTERFACES = ['ban', 'barcode', 'bars', 'beer', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'bug', 'bullhorn', 'bullseye', 'calculator', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'calendar check', 'calendar check outline', 'calendar minus', 'calendar minus outline', 'calendar plus', 'calendar plus outline', 'calendar times', 'calendar times outline', 'certificate', 'check', 'check circle', 'check circle outline', 'check square', 'check square outline', 'circle', 'circle outline', 'clipboard', 'clipboard outline', 'clone', 'clone outline', 'cloud', 'cloud download', 'cloud upload', 'coffee', 'cog', 'cogs', 'copy', 'copy outline', 'cut', 'database', 'dot circle', 'dot circle outline', 'download', 'edit', 'edit outline', 'ellipsis horizontal', 'ellipsis vertical', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'eraser', 'exclamation', 'exclamation circle', 'exclamation triangle', 'external alternate', 'external square alternate', 'eye', 'eye slash', 'eye slash outline', 'file', 'file outline', 'file alternate', 'file alternate outline', 'filter', 'flag', 'flag outline', 'flag checkered', 'folder', 'folder outline', 'folder open', 'folder open outline', 'frown', 'frown outline', 'hashtag', 'heart', 'heart outline', 'history', 'home', 'i cursor', 'info', 'info circle', 'language', 'magic', 'meh', 'meh outline', 'microphone', 'microphone slash', 'minus', 'minus circle', 'minus square', 'minus square outline', 'paste', 'pencil alternate', 'plus', 'plus circle', 'plus square', 'plus square outline', 'qrcode', 'question', 'question circle', 'question circle outline', 'quote left', 'quote right', 'redo', 'redo alternate', 'reply', 'reply all', 'rss', 'rss square', 'save', 'save outline', 'search', 'search minus', 'search plus', 'share', 'share alternate', 'share alternate square', 'share square', 'share square outline', 'shield alternate', 'sign-in', 'sign-out', 'signal', 'sitemap', 'sliders horizontal', 'smile', 'smile outline', 'sort', 'sort alphabet down', 'sort alphabet up', 'sort amount down', 'sort amount up', 'sort down', 'sort numeric down', 'sort numeric up', 'sort up', 'star', 'star outline', 'star half', 'star half outline', 'sync', 'sync alternate', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline', 'times', 'times circle', 'times circle outline', 'toggle off', 'toggle on', 'trash', 'trash alternate', 'trash alternate outline', 'trophy', 'undo', 'undo alternate', 'upload', 'user', 'user outline', 'user circle', 'user circle outline', 'wifi'];
  exports.INTERFACES = INTERFACES;
  var LOGISTICS = ['box', 'boxes', 'clipboard check', 'clipboard list', 'dolly', 'dolly flatbed', 'pallet', 'shipping fast', 'truck', 'warehouse'];
  exports.LOGISTICS = LOGISTICS;
  var MAPS = ['ambulance', 'anchor', 'balance scale', 'bath', 'bed', 'beer', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'bicycle', 'binoculars', 'birthday cake', 'blind', 'bomb', 'book', 'bookmark', 'bookmark outline', 'briefcase', 'building', 'building outline', 'car', 'coffee', 'crosshairs', 'dollar sign', 'eye', 'eye slash', 'eye slash outline', 'fighter jet', 'fire', 'fire extinguisher', 'flag', 'flag outline', 'flag checkered', 'flask', 'gamepad', 'gavel', 'gift', 'glass martini', 'globe', 'graduation cap', 'h square', 'heart', 'heart outline', 'heartbeat', 'home', 'hospital', 'hospital outline', 'image', 'image outline', 'images', 'images outline', 'industry', 'info', 'info circle', 'key', 'leaf', 'lemon', 'lemon outline', 'life ring', 'life ring outline', 'lightbulb', 'lightbulb outline', 'location arrow', 'low vision', 'magnet', 'male', 'map', 'map outline', 'map marker', 'map marker alternate', 'map pin', 'map signs', 'medkit', 'money bill alternate', 'money bill alternate outline', 'motorcycle', 'music', 'newspaper', 'newspaper outline', 'paw', 'phone', 'phone square', 'phone volume', 'plane', 'plug', 'plus', 'plus square', 'plus square outline', 'print', 'recycle', 'road', 'rocket', 'search', 'search minus', 'search plus', 'ship', 'shopping bag', 'shopping basket', 'shopping cart', 'shower', 'street view', 'subway', 'suitcase', 'tag', 'tags', 'taxi', 'thumbtack', 'ticket alternate', 'tint', 'train', 'tree', 'trophy', 'truck', 'tty', 'umbrella', 'university', 'utensil spoon', 'utensils', 'wheelchair', 'wifi', 'wrench'];
  exports.MAPS = MAPS;
  var MEDICAL = ['ambulance', 'band aid', 'dna', 'first aid', 'heart', 'heart outline', 'heartbeat', 'hospital', 'hospital outline', 'hospital symbol', 'pills', 'plus', 'stethoscope', 'syringe', 'thermometer', 'user md', 'weight'];
  exports.MEDICAL = MEDICAL;
  var OBJECTS = ['ambulance', 'anchor', 'archive', 'balance scale', 'bath', 'bed', 'beer', 'bell', 'bell outline', 'bicycle', 'binoculars', 'birthday cake', 'bomb', 'book', 'bookmark', 'bookmark outline', 'briefcase', 'bug', 'building', 'building outline', 'bullhorn', 'bullseye', 'bus', 'calculator', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'camera', 'camera retro', 'car', 'clipboard', 'clipboard outline', 'cloud', 'coffee', 'cog', 'cogs', 'compass', 'compass outline', 'copy', 'copy outline', 'cube', 'cubes', 'cut', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'eraser', 'eye', 'eye dropper', 'fax', 'fighter jet', 'file', 'file outline', 'file alternate', 'file alternate outline', 'film', 'fire', 'fire extinguisher', 'flag', 'flag outline', 'flag checkered', 'flask', 'futbol', 'futbol outline', 'gamepad', 'gavel', 'gem', 'gem outline', 'gift', 'glass martini', 'globe', 'graduation cap', 'hdd', 'hdd outline', 'headphones', 'heart', 'heart outline', 'home', 'hospital', 'hospital outline', 'hourglass', 'hourglass outline', 'image', 'image outline', 'images', 'images outline', 'industry', 'key', 'keyboard', 'keyboard outline', 'laptop', 'leaf', 'lemon', 'lemon outline', 'life ring', 'life ring outline', 'lightbulb', 'lightbulb outline', 'lock', 'lock open', 'magic', 'magnet', 'map', 'map outline', 'map marker', 'map marker alternate', 'map pin', 'map signs', 'medkit', 'microchip', 'microphone', 'mobile', 'mobile alternate', 'money bill alternate', 'money bill alternate outline', 'moon', 'moon outline', 'motorcycle', 'newspaper', 'newspaper outline', 'paint brush', 'paper plane', 'paper plane outline', 'paperclip', 'paste', 'paw', 'pencil alternate', 'phone', 'plane', 'plug', 'print', 'puzzle piece', 'road', 'rocket', 'save', 'save outline', 'search', 'shield alternate', 'shopping bag', 'shopping basket', 'shopping cart', 'shower', 'snowflake', 'snowflake outline', 'space shuttle', 'star', 'star outline', 'sticky note', 'sticky note outline', 'stopwatch', 'subway', 'suitcase', 'sun', 'sun outline', 'tablet', 'tablet alternate', 'tachometer alternate', 'tag', 'tags', 'taxi', 'thumbtack', 'ticket alternate', 'train', 'trash', 'trash alternate', 'trash alternate outline', 'tree', 'trophy', 'truck', 'tv', 'umbrella', 'university', 'unlock', 'unlock alternate', 'utensil spoon', 'utensils', 'wheelchair', 'wrench'];
  exports.OBJECTS = OBJECTS;
  var PAYMENTS_SHOPPING = ['bell', 'bell outline', 'bookmark', 'bookmark outline', 'bullhorn', 'camera', 'camera retro', 'cart arrow down', 'cart plus', 'certificate', 'credit card', 'credit card outline', 'gem', 'gem outline', 'gift', 'handshake', 'handshake outline', 'heart', 'heart outline', 'key', 'shopping bag', 'shopping basket', 'shopping cart', 'star', 'star outline', 'tag', 'tags', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline', 'trophy'];
  exports.PAYMENTS_SHOPPING = PAYMENTS_SHOPPING;
  var SHAPES = ['bookmark', 'bookmark outline', 'calendar', 'calendar outline', 'certificate', 'circle', 'circle outline', 'cloud', 'comment', 'comment outline', 'file', 'file outline', 'folder', 'folder outline', 'heart', 'heart outline', 'map marker', 'play', 'square', 'square outline', 'star', 'star outline'];
  exports.SHAPES = SHAPES;
  var SPINNERS = ['asterisk', 'certificate', 'circle notch', 'cog', 'compass', 'compass outline', 'crosshairs', 'life ring', 'life ring outline', 'snowflake', 'snowflake outline', 'spinner', 'sun', 'sun outline', 'sync'];
  exports.SPINNERS = SPINNERS;
  var SPORTS = ['baseball ball', 'basketball ball', 'bowling ball', 'football ball', 'futbol', 'futbol outline', 'golf ball', 'hockey puck', 'quidditch', 'table tennis', 'volleyball ball'];
  exports.SPORTS = SPORTS;
  var STATUS = ['ban', 'battery empty', 'battery full', 'battery half', 'battery quarter', 'battery three quarters', 'bell', 'bell outline', 'bell slash', 'bell slash outline', 'calendar', 'calendar outline', 'calendar alternate', 'calendar alternate outline', 'calendar check', 'calendar check outline', 'calendar minus', 'calendar minus outline', 'calendar plus', 'calendar plus outline', 'calendar times', 'calendar times outline', 'cart arrow down', 'cart plus', 'exclamation', 'exclamation circle', 'exclamation triangle', 'eye', 'eye slash', 'eye slash outline', 'file', 'file outline', 'file alternate', 'file alternate outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'info', 'info circle', 'lock', 'lock open', 'minus', 'minus circle', 'minus square', 'minus square outline', 'plus', 'plus circle', 'plus square', 'plus square outline', 'question', 'question circle', 'question circle outline', 'shield alternate', 'shopping cart', 'sign in alternate', 'sign out alternate', 'thermometer empty', 'thermometer full', 'thermometer half', 'thermometer quarter', 'thermometer three quarters', 'thumbs down', 'thumbs down outline', 'thumbs up', 'thumbs up outline', 'toggle off', 'toggle on', 'unlock', 'unlock alternate'];
  exports.STATUS = STATUS;
  var USERS_PEOPLE = ['address book', 'address book outline', 'address card', 'address card outline', 'bed', 'blind', 'child', 'female', 'frown', 'frown outline', 'id badge', 'id badge outline', 'id card', 'id card outline', 'male', 'meh', 'meh outline', 'power off', 'smile', 'smile outline', 'street view', 'user', 'user outline', 'user circle', 'user circle outline', 'user md', 'user plus', 'user secret', 'user times', 'users', 'wheelchair'];
  exports.USERS_PEOPLE = USERS_PEOPLE;
  var VEHICLES = ['ambulance', 'bicycle', 'bus', 'car', 'fighter jet', 'motorcycle', 'paper plane', 'paper plane outline', 'plane', 'rocket', 'ship', 'shopping cart', 'space shuttle', 'subway', 'taxi', 'train', 'truck', 'wheelchair'];
  exports.VEHICLES = VEHICLES;
  var WRITING = ['archive', 'book', 'bookmark', 'bookmark outline', 'edit', 'edit outline', 'envelope', 'envelope outline', 'envelope open', 'envelope open outline', 'eraser', 'file', 'file outline', 'file alternate', 'file alternate outline', 'folder', 'folder outline', 'folder open', 'folder open outline', 'keyboard', 'keyboard outline', 'newspaper', 'newspaper outline', 'paper plane', 'paper plane outline', 'paperclip', 'paragraph', 'pen square', 'pencil alternate', 'quote left', 'quote right', 'sticky note', 'sticky note outline', 'thumbtack'];
  exports.WRITING = WRITING;
  var BRANDS = ['500px', 'accessible', 'accusoft', 'adn', 'adversal', 'affiliatetheme', 'algolia', 'amazon', 'amazon pay', 'amilia', 'android', 'angellist', 'angrycreative', 'angular', 'app store', 'app store ios', 'apper', 'apple', 'apple pay', 'asymmetrik', 'audible', 'autoprefixer', 'avianex', 'aviato', 'aws', 'bandcamp', 'behance', 'behance square', 'bimobject', 'bitbucket', 'bitcoin', 'bity', 'black tie', 'blackberry', 'blogger', 'blogger b', 'bluetooth', 'bluetooth b', 'btc', 'buromobelexperte', 'buysellads', 'cc amazon pay', 'cc amex', 'cc apple pay', 'cc diners club', 'cc discover', 'cc jcb', 'cc mastercard', 'cc paypal', 'cc stripe', 'cc visa', 'centercode', 'chrome', 'cloudscale', 'cloudsmith', 'cloudversify', 'codepen', 'codiepie', 'connectdevelop', 'contao', 'cpanel', 'creative commons', 'css3', 'css3 alternate', 'cuttlefish', 'd and d', 'dashcube', 'delicious', 'deploydog', 'deskpro', 'deviantart', 'digg', 'digital ocean', 'discord', 'discourse', 'dochub', 'docker', 'draft2digital', 'dribbble', 'dribbble square', 'dropbox', 'drupal', 'dyalog', 'earlybirds', 'edge', 'elementor', 'ember', 'empire', 'envira', 'erlang', 'ethereum', 'etsy', 'expeditedssl', 'facebook', 'facebook f', 'facebook messenger', 'facebook square', 'firefox', 'first order', 'firstdraft', 'flickr', 'flipboard', 'fly', 'font awesome', 'font awesome alternate', 'font awesome flag', 'fonticons', 'fonticons fi', 'fort awesome', 'fort awesome alternate', 'forumbee', 'foursquare', 'free code camp', 'freebsd', 'get pocket', 'gg', 'gg circle', 'git', 'git square', 'github', 'github alternate', 'github square', 'gitkraken', 'gitlab', 'gitter', 'glide', 'glide g', 'gofore', 'goodreads', 'goodreads g', 'google', 'google drive', 'google play', 'google plus', 'google plus g', 'google plus square', 'google wallet', 'gratipay', 'grav', 'gripfire', 'grunt', 'gulp', 'hacker news', 'hacker news square', 'hips', 'hire a helper', 'hooli', 'hotjar', 'houzz', 'html5', 'hubspot', 'imdb', 'instagram', 'internet explorer', 'ioxhost', 'itunes', 'itunes note', 'jenkins', 'joget', 'joomla', 'js', 'js square', 'jsfiddle', 'keycdn', 'kickstarter', 'kickstarter k', 'korvue', 'laravel', 'lastfm', 'lastfm square', 'leanpub', 'less', 'linechat', 'linkedin', 'linkedin alternate', 'linode', 'linux', 'lyft', 'magento', 'maxcdn', 'medapps', 'medium', 'medium m', 'medrt', 'meetup', 'microsoft', 'mix', 'mixcloud', 'mizuni', 'modx', 'monero', 'napster', 'nintendo switch', 'node', 'node js', 'npm', 'ns8', 'nutritionix', 'odnoklassniki', 'odnoklassniki square', 'opencart', 'openid', 'opera', 'optin monster', 'osi', 'page4', 'pagelines', 'palfed', 'patreon', 'paypal', 'periscope', 'phabricator', 'phoenix framework', 'php', 'pied piper', 'pied piper alternate', 'pied piper pp', 'pinterest', 'pinterest p', 'pinterest square', 'playstation', 'product hunt', 'pushed', 'python', 'qq', 'quinscape', 'quora', 'ravelry', 'react', 'rebel', 'redriver', 'reddit', 'reddit alien', 'reddit square', 'rendact', 'renren', 'replyd', 'resolving', 'rocketchat', 'rockrms', 'safari', 'sass', 'schlix', 'scribd', 'searchengin', 'sellcast', 'sellsy', 'servicestack', 'shirtsinbulk', 'simplybuilt', 'sistrix', 'skyatlas', 'skype', 'slack', 'slack hash', 'slideshare', 'snapchat', 'snapchat ghost', 'snapchat square', 'soundcloud', 'speakap', 'spotify', 'stack exchange', 'stack overflow', 'staylinked', 'steam', 'steam square', 'steam symbol', 'sticker mule', 'strava', 'stripe', 'stripe s', 'studiovinari', 'stumbleupon', 'stumbleupon circle', 'superpowers', 'supple', 'telegram', 'telegram plane', 'tencent weibo', 'themeisle', 'trello', 'tripadvisor', 'tumblr', 'tumblr square', 'twitch', 'twitter', 'twitter square', 'typo3', 'uber', 'uikit', 'uniregistry', 'untappd', 'usb', 'ussunnah', 'vaadin', 'viacoin', 'viadeo', 'viadeo square', 'viber', 'vimeo', 'vimeo square', 'vimeo v', 'vine', 'vk', 'vnv', 'vuejs', 'wechat', 'weibo', 'weixin', 'whatsapp', 'whatsapp square', 'whmcs', 'wikipedia w', 'windows', 'wordpress', 'wordpress simple', 'wpbeginner', 'wpexplorer', 'wpforms', 'xbox', 'xing', 'xing square', 'y combinator', 'yahoo', 'yandex', 'yandex international', 'yelp', 'yoast', 'youtube', 'youtube square'];
  exports.BRANDS = BRANDS;
  var ICONS = (0, _uniq2["default"])([].concat(ACCESSIBILITY, ARROWS, AUDIO_VIDEO, BUSINESS, CHESS, CODE, COMMUNICATION, COMPUTERS, CURRENCY, DATE_TIME, DESIGN, EDITORS, FILES, GENDERS, HANDS_GESTURES, HEALTH, IMAGES, INTERFACES, LOGISTICS, MAPS, MEDICAL, OBJECTS, PAYMENTS_SHOPPING, SHAPES, SPINNERS, SPORTS, STATUS, USERS_PEOPLE, VEHICLES, WRITING, BRANDS));
  exports.ICONS = ICONS;
  var ICON_ALIASES = ['chess rock', 'ordered list', 'unordered list', 'user doctor', 'shield', 'puzzle', 'add circle', 'add square', 'add to calendar', 'add to cart', 'add user', 'add', 'alarm mute', 'alarm', 'ald', 'als', 'announcement', 'area chart', 'area graph', 'arrow down cart', 'asexual', 'asl interpreting', 'asl', 'assistive listening devices', 'attach', 'attention', 'balance', 'bar', 'bathtub', 'battery four', 'battery high', 'battery low', 'battery one', 'battery three', 'battery two', 'battery zero', 'birthday', 'block layout', 'bluetooth alternative', 'broken chain', 'browser', 'call square', 'call', 'cancel', 'cart', 'cc', 'chain', 'chat', 'checked calendar', 'checkmark', 'circle notched', 'close', 'cny', 'cocktail', 'commenting', 'computer', 'configure', 'content', 'deafness', 'delete calendar', 'delete', 'detective', 'discussions', 'doctor', 'dollar', 'dont', 'drivers license', 'dropdown', 'emergency', 'envira gallery', 'erase', 'eur', 'euro', 'eyedropper', 'factory', 'favorite', 'feed', 'female homosexual', 'file text', 'file text outline', 'find', 'first aid', 'fork', 'game', 'gay', 'gbp', 'google plus circle', 'google plus official', 'grab', 'graduation', 'grid layout', 'group', 'h', 'hand victory', 'handicap', 'hard of hearing', 'header', 'help circle', 'help', 'heterosexual', 'hide', 'hotel', 'hourglass four', 'hourglass full', 'hourglass one', 'hourglass three', 'hourglass two', 'idea', 'ils', 'in cart', 'inr', 'intergender', 'intersex', 'jpy', 'krw', 'lab', 'law', 'legal', 'lesbian', 'lightning', 'like', 'line graph', 'linkedin square', 'linkify', 'lira', 'list layout', 'magnify', 'mail forward', 'mail outline', 'mail square', 'mail', 'male homosexual', 'man', 'marker', 'mars alternate', 'mars horizontal', 'mars vertical', 'microsoft edge', 'military', 'ms edge', 'mute', 'new pied piper', 'non binary transgender', 'numbered list', 'options', 'other gender horizontal', 'other gender vertical', 'other gender', 'payment', 'paypal card', 'pencil square', 'photo', 'picture', 'pie chart', 'pie graph', 'pied piper hat', 'pin', 'plus cart', 'point', 'pointing down', 'pointing left', 'pointing right', 'pointing up', 'pound', 'power cord', 'power', 'privacy', 'r circle', 'rain', 'record', 'refresh', 'remove circle', 'remove from calendar', 'remove user', 'remove', 'repeat', 'rmb', 'rouble', 'rub', 'ruble', 'rupee', 's15', 'selected radio', 'send', 'setting', 'settings', 'shekel', 'sheqel', 'shipping', 'shop', 'shuffle', 'shutdown', 'sidebar', 'signing', 'signup', 'sliders', 'soccer', 'sort alphabet ascending', 'sort alphabet descending', 'sort ascending', 'sort content ascending', 'sort content descending', 'sort descending', 'sort numeric ascending', 'sort numeric descending', 'sound', 'spy', 'stripe card', 'student', 'talk', 'target', 'teletype', 'television', 'text cursor', 'text telephone', 'theme', 'thermometer', 'thumb tack', 'time', 'tm', 'toggle down', 'toggle left', 'toggle right', 'toggle up', 'translate', 'travel', 'treatment', 'triangle down', 'triangle left', 'triangle right', 'triangle up', 'try', 'unhide', 'unlinkify', 'unmute', 'usd', 'user cancel', 'user close', 'user delete', 'user x', 'vcard', 'video camera', 'video play', 'volume control phone', 'wait', 'warning circle', 'warning sign', 'warning', 'wi-fi', 'winner', 'wizard', 'woman', 'won', 'wordpress beginner', 'wordpress forms', 'world', 'write square', 'x', 'yen', 'zip', 'zoom in', 'zoom out', 'zoom', 'bitbucket square', 'checkmark box', 'circle thin', 'cloud download', 'cloud upload', 'compose', 'conversation', 'credit card alternative', 'currency', 'dashboard', 'diamond', 'disk', 'exchange', 'external share', 'external square', 'external', 'facebook official', 'food', 'hourglass zero', 'level down', 'level up', 'log out', 'meanpath', 'money', 'move', 'pencil', 'protect', 'radio', 'remove bookmark', 'resize horizontal', 'resize vertical', 'sign in', 'sign out', 'spoon', 'star half empty', 'star half full', 'ticket', 'times rectangle', 'write', 'youtube play'];
  exports.ICON_ALIASES = ICON_ALIASES;
  var ICONS_AND_ALIASES = (0, _uniq2["default"])([].concat((0, _toConsumableArray2["default"])(ICONS), ICON_ALIASES)); // Some icon names are not part of icons.css.
  // These are only valid as children of other components.
  // Their CSS rules are defined by a specific component's CSS.
  // We don't want to show name warnings for those usages so we add them as valid names here.

  exports.ICONS_AND_ALIASES = ICONS_AND_ALIASES;
  var COMPONENT_CONTEXT_SPECIFIC_ICONS = ['left dropdown'];
  exports.COMPONENT_CONTEXT_SPECIFIC_ICONS = COMPONENT_CONTEXT_SPECIFIC_ICONS;
  var ALL_ICONS_IN_ALL_CONTEXTS = (0, _uniq2["default"])([].concat((0, _toConsumableArray2["default"])(ICONS_AND_ALIASES), COMPONENT_CONTEXT_SPECIFIC_ICONS));
  exports.ALL_ICONS_IN_ALL_CONTEXTS = ALL_ICONS_IN_ALL_CONTEXTS;
});
unwrapExports(SUI);
var SUI_1 = SUI.ALL_ICONS_IN_ALL_CONTEXTS;
var SUI_2 = SUI.COMPONENT_CONTEXT_SPECIFIC_ICONS;
var SUI_3 = SUI.ICONS_AND_ALIASES;
var SUI_4 = SUI.ICON_ALIASES;
var SUI_5 = SUI.ICONS;
var SUI_6 = SUI.BRANDS;
var SUI_7 = SUI.WRITING;
var SUI_8 = SUI.VEHICLES;
var SUI_9 = SUI.USERS_PEOPLE;
var SUI_10 = SUI.STATUS;
var SUI_11 = SUI.SPORTS;
var SUI_12 = SUI.SPINNERS;
var SUI_13 = SUI.SHAPES;
var SUI_14 = SUI.PAYMENTS_SHOPPING;
var SUI_15 = SUI.OBJECTS;
var SUI_16 = SUI.MEDICAL;
var SUI_17 = SUI.MAPS;
var SUI_18 = SUI.LOGISTICS;
var SUI_19 = SUI.INTERFACES;
var SUI_20 = SUI.IMAGES;
var SUI_21 = SUI.HEALTH;
var SUI_22 = SUI.HANDS_GESTURES;
var SUI_23 = SUI.GENDERS;
var SUI_24 = SUI.FILES;
var SUI_25 = SUI.EDITORS;
var SUI_26 = SUI.DESIGN;
var SUI_27 = SUI.DATE_TIME;
var SUI_28 = SUI.CURRENCY;
var SUI_29 = SUI.COMPUTERS;
var SUI_30 = SUI.COMMUNICATION;
var SUI_31 = SUI.CODE;
var SUI_32 = SUI.CHESS;
var SUI_33 = SUI.BUSINESS;
var SUI_34 = SUI.AUDIO_VIDEO;
var SUI_35 = SUI.ARROWS;
var SUI_36 = SUI.ACCESSIBILITY;
var SUI_37 = SUI.TRANSITIONS;
var SUI_38 = SUI.STATIC_TRANSITIONS;
var SUI_39 = SUI.DIRECTIONAL_TRANSITIONS;
var SUI_40 = SUI.WIDTHS;
var SUI_41 = SUI.VISIBILITY;
var SUI_42 = SUI.VERTICAL_ALIGNMENTS;
var SUI_43 = SUI.TEXT_ALIGNMENTS;
var SUI_44 = SUI.SIZES;
var SUI_45 = SUI.FLOATS;
var SUI_46 = SUI.COLORS;

var normalizeOffset = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  /**
   * Normalizes the offset value.
   * @param {number|array} value The value to normalize.
   * @returns {number}
   */

  var _default = function _default(value) {
    return typeof value === 'number' || typeof value === 'string' ? [value, value] : value;
  };

  exports["default"] = _default;
});
unwrapExports(normalizeOffset);

var normalizeTransitionDuration = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  /**
   * Normalizes the duration of a transition.
   * @param {number|object} duration The value to normalize.
   * @param {'hide'|'show'} type The type of transition.
   * @returns {number}
   */

  var _default = function _default(duration, type) {
    return typeof duration === 'number' || typeof duration === 'string' ? duration : duration[type];
  };

  exports["default"] = _default;
});
unwrapExports(normalizeTransitionDuration);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */

function isEqual(value, other) {
  return _baseIsEqual(value, other);
}

var isEqual_1 = isEqual;

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */

function transform(object, iteratee, accumulator) {
  var isArr = isArray_1(object),
      isArrLike = isArr || isBuffer_1(object) || isTypedArray_1(object);
  iteratee = _baseIteratee(iteratee);

  if (accumulator == null) {
    var Ctor = object && object.constructor;

    if (isArrLike) {
      accumulator = isArr ? new Ctor() : [];
    } else if (isObject_1(object)) {
      accumulator = isFunction_1(Ctor) ? _baseCreate(_getPrototype(object)) : {};
    } else {
      accumulator = {};
    }
  }

  (isArrLike ? _arrayEach : _baseForOwn)(object, function (value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

var transform_1 = transform;

var objectDiff = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _isEqual2 = interopRequireDefault(isEqual_1);

  var _has2 = interopRequireDefault(has_1);

  var _transform2 = interopRequireDefault(transform_1);
  /**
   * Naive and inefficient object difference, intended for development / debugging use only.
   * Deleted keys are shown as [DELETED].
   * @param {{}} source The source object
   * @param {{}} target The target object.
   * @returns {{}} A new object containing new/modified/deleted keys.
   * @example
   * import { objectDiff } from 'src/lib'
   *
   * const a = { key: 'val', foo: 'bar' }
   * const b = { key: 'val', foo: 'baz' }
   *
   * objectDiff(a, b)
   * //=> { foo: 'baz' }
   */


  var _default = function _default(source, target) {
    return (0, _transform2["default"])(source, function (res, val, key) {
      // deleted keys
      if (!(0, _has2["default"])(target, key)) res[key] = '[DELETED]'; // new keys / changed values
      // Note, we tolerate isEqual here as this is a dev only utility and not included in production code
      else if (!(0, _isEqual2["default"])(val, target[key])) res[key] = target[key];
    }, {});
  };

  exports["default"] = _default;
});
unwrapExports(objectDiff);

var lib$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _exportNames = {
    AutoControlledComponent: true,
    ModernAutoControlledComponent: true,
    getChildMapping: true,
    mergeChildMappings: true,
    childrenUtils: true,
    useKeyOnly: true,
    useKeyOrValueAndKey: true,
    useValueAndKey: true,
    useMultipleProp: true,
    useTextAlignProp: true,
    useVerticalAlignProp: true,
    useWidthProp: true,
    customPropTypes: true,
    eventStack: true,
    getUnhandledProps: true,
    getElementType: true,
    htmlInputAttrs: true,
    htmlInputEvents: true,
    htmlInputProps: true,
    htmlImageProps: true,
    partitionHTMLProps: true,
    isBrowser: true,
    doesNodeContainClick: true,
    leven: true,
    createPaginationItems: true,
    SUI: true,
    numberToWordMap: true,
    numberToWord: true,
    normalizeOffset: true,
    normalizeTransitionDuration: true,
    objectDiff: true
  };
  Object.defineProperty(exports, "AutoControlledComponent", {
    enumerable: true,
    get: function get() {
      return _AutoControlledComponent2["default"];
    }
  });
  Object.defineProperty(exports, "ModernAutoControlledComponent", {
    enumerable: true,
    get: function get() {
      return _ModernAutoControlledComponent2["default"];
    }
  });
  Object.defineProperty(exports, "getChildMapping", {
    enumerable: true,
    get: function get() {
      return childMapping.getChildMapping;
    }
  });
  Object.defineProperty(exports, "mergeChildMappings", {
    enumerable: true,
    get: function get() {
      return childMapping.mergeChildMappings;
    }
  });
  Object.defineProperty(exports, "useKeyOnly", {
    enumerable: true,
    get: function get() {
      return classNameBuilders.useKeyOnly;
    }
  });
  Object.defineProperty(exports, "useKeyOrValueAndKey", {
    enumerable: true,
    get: function get() {
      return classNameBuilders.useKeyOrValueAndKey;
    }
  });
  Object.defineProperty(exports, "useValueAndKey", {
    enumerable: true,
    get: function get() {
      return classNameBuilders.useValueAndKey;
    }
  });
  Object.defineProperty(exports, "useMultipleProp", {
    enumerable: true,
    get: function get() {
      return classNameBuilders.useMultipleProp;
    }
  });
  Object.defineProperty(exports, "useTextAlignProp", {
    enumerable: true,
    get: function get() {
      return classNameBuilders.useTextAlignProp;
    }
  });
  Object.defineProperty(exports, "useVerticalAlignProp", {
    enumerable: true,
    get: function get() {
      return classNameBuilders.useVerticalAlignProp;
    }
  });
  Object.defineProperty(exports, "useWidthProp", {
    enumerable: true,
    get: function get() {
      return classNameBuilders.useWidthProp;
    }
  });
  Object.defineProperty(exports, "eventStack", {
    enumerable: true,
    get: function get() {
      return _eventStack2["default"];
    }
  });
  Object.defineProperty(exports, "getUnhandledProps", {
    enumerable: true,
    get: function get() {
      return _getUnhandledProps2["default"];
    }
  });
  Object.defineProperty(exports, "getElementType", {
    enumerable: true,
    get: function get() {
      return _getElementType2["default"];
    }
  });
  Object.defineProperty(exports, "htmlInputAttrs", {
    enumerable: true,
    get: function get() {
      return htmlPropsUtils.htmlInputAttrs;
    }
  });
  Object.defineProperty(exports, "htmlInputEvents", {
    enumerable: true,
    get: function get() {
      return htmlPropsUtils.htmlInputEvents;
    }
  });
  Object.defineProperty(exports, "htmlInputProps", {
    enumerable: true,
    get: function get() {
      return htmlPropsUtils.htmlInputProps;
    }
  });
  Object.defineProperty(exports, "htmlImageProps", {
    enumerable: true,
    get: function get() {
      return htmlPropsUtils.htmlImageProps;
    }
  });
  Object.defineProperty(exports, "partitionHTMLProps", {
    enumerable: true,
    get: function get() {
      return htmlPropsUtils.partitionHTMLProps;
    }
  });
  Object.defineProperty(exports, "isBrowser", {
    enumerable: true,
    get: function get() {
      return _isBrowser2["default"];
    }
  });
  Object.defineProperty(exports, "doesNodeContainClick", {
    enumerable: true,
    get: function get() {
      return _doesNodeContainClick2["default"];
    }
  });
  Object.defineProperty(exports, "leven", {
    enumerable: true,
    get: function get() {
      return _leven2["default"];
    }
  });
  Object.defineProperty(exports, "createPaginationItems", {
    enumerable: true,
    get: function get() {
      return _createPaginationItems2["default"];
    }
  });
  Object.defineProperty(exports, "numberToWordMap", {
    enumerable: true,
    get: function get() {
      return numberToWord_1.numberToWordMap;
    }
  });
  Object.defineProperty(exports, "numberToWord", {
    enumerable: true,
    get: function get() {
      return numberToWord_1.numberToWord;
    }
  });
  Object.defineProperty(exports, "normalizeOffset", {
    enumerable: true,
    get: function get() {
      return _normalizeOffset2["default"];
    }
  });
  Object.defineProperty(exports, "normalizeTransitionDuration", {
    enumerable: true,
    get: function get() {
      return _normalizeTransitionDuration2["default"];
    }
  });
  Object.defineProperty(exports, "objectDiff", {
    enumerable: true,
    get: function get() {
      return _objectDiff2["default"];
    }
  });
  exports.SUI = exports.customPropTypes = exports.childrenUtils = void 0;

  var _AutoControlledComponent2 = interopRequireDefault(AutoControlledComponent_1);

  var _ModernAutoControlledComponent2 = interopRequireDefault(ModernAutoControlledComponent_1);

  var _childrenUtils = interopRequireWildcard(childrenUtils);

  exports.childrenUtils = _childrenUtils;

  var _customPropTypes = interopRequireWildcard(customPropTypes);

  exports.customPropTypes = _customPropTypes;

  var _eventStack2 = interopRequireDefault(eventStack);

  Object.keys(factories).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function get() {
        return factories[key];
      }
    });
  });

  var _getUnhandledProps2 = interopRequireDefault(getUnhandledProps_1);

  var _getElementType2 = interopRequireDefault(getElementType_1);

  var _isBrowser2 = interopRequireDefault(isBrowser_1);

  var _doesNodeContainClick2 = interopRequireDefault(doesNodeContainClick_1);

  var _leven2 = interopRequireDefault(leven_1);

  var _createPaginationItems2 = interopRequireDefault(createPaginationItems);

  var _SUI = interopRequireWildcard(SUI);

  exports.SUI = _SUI;

  var _normalizeOffset2 = interopRequireDefault(normalizeOffset);

  var _normalizeTransitionDuration2 = interopRequireDefault(normalizeTransitionDuration);

  var _objectDiff2 = interopRequireDefault(objectDiff);
});
unwrapExports(lib$1);
var lib_1 = lib$1.SUI;
var lib_2 = lib$1.customPropTypes;
var lib_3 = lib$1.childrenUtils;

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */

var without = _baseRest(function (array, values) {
  return isArrayLikeObject_1(array) ? _baseDifference(array, values) : [];
});
var without_1 = without;

var IconGroup_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _without2 = interopRequireDefault(without_1);

  var _classnames = interopRequireDefault(classnames);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireDefault(React__default);
  /**
   * Several icons can be used together as a group.
   */


  function IconGroup(props) {
    var children = props.children,
        className = props.className,
        content = props.content,
        size = props.size;
    var classes = (0, _classnames["default"])(size, 'icons', className);
    var rest = (0, lib$1.getUnhandledProps)(IconGroup, props);
    var ElementType = (0, lib$1.getElementType)(IconGroup, props);
    return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
      className: classes
    }), lib$1.childrenUtils.isNil(children) ? content : children);
  }

  IconGroup.handledProps = ["as", "children", "className", "content", "size"];
  IconGroup.propTypes =  {
    /** An element type to render as (string or function). */
    as: _propTypes["default"].elementType,

    /** Primary content. */
    children: _propTypes["default"].node,

    /** Additional classes. */
    className: _propTypes["default"].string,

    /** Shorthand for primary content. */
    content: lib$1.customPropTypes.contentShorthand,

    /** Size of the icon group. */
    size: _propTypes["default"].oneOf((0, _without2["default"])(lib$1.SUI.SIZES, 'medium'))
  } ;
  IconGroup.defaultProps = {
    as: 'i'
  };
  var _default = IconGroup;
  exports["default"] = _default;
});
unwrapExports(IconGroup_1);

var Icon_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck);

  var _createClass2 = interopRequireDefault(createClass);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf);

  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

  var _inherits2 = interopRequireDefault(inherits);

  var _defineProperty2 = interopRequireDefault(defineProperty);

  var _invoke2 = interopRequireDefault(invoke_1);

  var _isNil2 = interopRequireDefault(isNil_1);

  var _without2 = interopRequireDefault(without_1);

  var _classnames = interopRequireDefault(classnames);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireWildcard(React__default);

  var _IconGroup = interopRequireDefault(IconGroup_1);
  /**
   * An icon is a glyph used to represent something else.
   * @see Image
   */


  var Icon =
  /*#__PURE__*/
  function (_PureComponent) {
    (0, _inherits2["default"])(Icon, _PureComponent);

    function Icon() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, Icon);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Icon)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (e) {
        var disabled = _this.props.disabled;

        if (disabled) {
          e.preventDefault();
          return;
        }

        (0, _invoke2["default"])(_this.props, 'onClick', e, _this.props);
      });
      return _this;
    }

    (0, _createClass2["default"])(Icon, [{
      key: "getIconAriaOptions",
      value: function getIconAriaOptions() {
        var ariaOptions = {};
        var _this$props = this.props,
            ariaLabel = _this$props['aria-label'],
            ariaHidden = _this$props['aria-hidden'];

        if ((0, _isNil2["default"])(ariaLabel)) {
          ariaOptions['aria-hidden'] = 'true';
        } else {
          ariaOptions['aria-label'] = ariaLabel;
        }

        if (!(0, _isNil2["default"])(ariaHidden)) {
          ariaOptions['aria-hidden'] = ariaHidden;
        }

        return ariaOptions;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            bordered = _this$props2.bordered,
            circular = _this$props2.circular,
            className = _this$props2.className,
            color = _this$props2.color,
            corner = _this$props2.corner,
            disabled = _this$props2.disabled,
            fitted = _this$props2.fitted,
            flipped = _this$props2.flipped,
            inverted = _this$props2.inverted,
            link = _this$props2.link,
            loading = _this$props2.loading,
            name = _this$props2.name,
            rotated = _this$props2.rotated,
            size = _this$props2.size;
        var classes = (0, _classnames["default"])(color, name, size, (0, lib$1.useKeyOnly)(bordered, 'bordered'), (0, lib$1.useKeyOnly)(circular, 'circular'), (0, lib$1.useKeyOnly)(disabled, 'disabled'), (0, lib$1.useKeyOnly)(fitted, 'fitted'), (0, lib$1.useKeyOnly)(inverted, 'inverted'), (0, lib$1.useKeyOnly)(link, 'link'), (0, lib$1.useKeyOnly)(loading, 'loading'), (0, lib$1.useKeyOrValueAndKey)(corner, 'corner'), (0, lib$1.useValueAndKey)(flipped, 'flipped'), (0, lib$1.useValueAndKey)(rotated, 'rotated'), 'icon', className);
        var rest = (0, lib$1.getUnhandledProps)(Icon, this.props);
        var ElementType = (0, lib$1.getElementType)(Icon, this.props);
        var ariaOptions = this.getIconAriaOptions();
        return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, ariaOptions, {
          className: classes,
          onClick: this.handleClick
        }));
      }
    }]);
    return Icon;
  }(_react.PureComponent);

  (0, _defineProperty2["default"])(Icon, "defaultProps", {
    as: 'i'
  });
  (0, _defineProperty2["default"])(Icon, "Group", _IconGroup["default"]);
  (0, _defineProperty2["default"])(Icon, "handledProps", ["aria-hidden", "aria-label", "as", "bordered", "circular", "className", "color", "corner", "disabled", "fitted", "flipped", "inverted", "link", "loading", "name", "rotated", "size"]);
  Icon.propTypes =  {
    /** An element type to render as (string or function). */
    as: _propTypes["default"].elementType,

    /** Formatted to appear bordered. */
    bordered: _propTypes["default"].bool,

    /** Icon can formatted to appear circular. */
    circular: _propTypes["default"].bool,

    /** Additional classes. */
    className: _propTypes["default"].string,

    /** Color of the icon. */
    color: _propTypes["default"].oneOf(lib$1.SUI.COLORS),

    /** Icons can display a smaller corner icon. */
    corner: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['top left', 'top right', 'bottom left', 'bottom right'])]),

    /** Show that the icon is inactive. */
    disabled: _propTypes["default"].bool,

    /** Fitted, without space to left or right of Icon. */
    fitted: _propTypes["default"].bool,

    /** Icon can be flipped. */
    flipped: _propTypes["default"].oneOf(['horizontally', 'vertically']),

    /** Formatted to have its colors inverted for contrast. */
    inverted: _propTypes["default"].bool,

    /** Icon can be formatted as a link. */
    link: _propTypes["default"].bool,

    /** Icon can be used as a simple loader. */
    loading: _propTypes["default"].bool,

    /** Name of the icon. */
    name: lib$1.customPropTypes.suggest(lib$1.SUI.ALL_ICONS_IN_ALL_CONTEXTS),

    /** Icon can rotated. */
    rotated: _propTypes["default"].oneOf(['clockwise', 'counterclockwise']),

    /** Size of the icon. */
    size: _propTypes["default"].oneOf((0, _without2["default"])(lib$1.SUI.SIZES, 'medium')),

    /** Icon can have an aria label. */
    'aria-hidden': _propTypes["default"].string,

    /** Icon can have an aria label. */
    'aria-label': _propTypes["default"].string
  } ;
  Icon.create = (0, lib$1.createShorthandFactory)(Icon, function (value) {
    return {
      name: value
    };
  });
  var _default = Icon;
  exports["default"] = _default;
});
unwrapExports(Icon_1);

var isObject$2 = function isObject(val) {
  return val !== null && !Array.isArray(val) && typeof val === 'object';
};

var codes = {
  // ----------------------------------------
  // By Code
  // ----------------------------------------
  3: 'Cancel',
  6: 'Help',
  8: 'Backspace',
  9: 'Tab',
  12: 'Clear',
  13: 'Enter',
  16: 'Shift',
  17: 'Control',
  18: 'Alt',
  19: 'Pause',
  20: 'CapsLock',
  27: 'Escape',
  28: 'Convert',
  29: 'NonConvert',
  30: 'Accept',
  31: 'ModeChange',
  32: ' ',
  33: 'PageUp',
  34: 'PageDown',
  35: 'End',
  36: 'Home',
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
  41: 'Select',
  42: 'Print',
  43: 'Execute',
  44: 'PrintScreen',
  45: 'Insert',
  46: 'Delete',
  48: ['0', ')'],
  49: ['1', '!'],
  50: ['2', '@'],
  51: ['3', '#'],
  52: ['4', '$'],
  53: ['5', '%'],
  54: ['6', '^'],
  55: ['7', '&'],
  56: ['8', '*'],
  57: ['9', '('],
  91: 'OS',
  93: 'ContextMenu',
  144: 'NumLock',
  145: 'ScrollLock',
  181: 'VolumeMute',
  182: 'VolumeDown',
  183: 'VolumeUp',
  186: [';', ':'],
  187: ['=', '+'],
  188: [',', '<'],
  189: ['-', '_'],
  190: ['.', '>'],
  191: ['/', '?'],
  192: ['`', '~'],
  219: ['[', '{'],
  220: ['\\', '|'],
  221: [']', '}'],
  222: ["'", '"'],
  224: 'Meta',
  225: 'AltGraph',
  246: 'Attn',
  247: 'CrSel',
  248: 'ExSel',
  249: 'EraseEof',
  250: 'Play',
  251: 'ZoomOut'
}; // Function Keys (F1-24)

for (var i = 0; i < 24; i += 1) {
  codes[112 + i] = 'F' + (i + 1);
} // Alphabet (a-Z)


for (var j = 0; j < 26; j += 1) {
  var n = j + 65;
  codes[n] = [String.fromCharCode(n + 32), String.fromCharCode(n)];
}

var keyboardKey = {
  codes: codes,

  /**
   * Get the `keyCode` or `which` value from a keyboard event or `key` name.
   * @param {string|object} eventOrKey A keyboard event-like object or `key` name.
   * @param {string} [eventOrKey.key] If object, it must have one of these keys.
   * @param {string} [eventOrKey.keyCode] If object, it must have one of these keys.
   * @param {string} [eventOrKey.which] If object, it must have one of these keys.
   * @returns {*}
   */
  getCode: function getCode(eventOrKey) {
    if (isObject$2(eventOrKey)) {
      return eventOrKey.keyCode || eventOrKey.which || this[eventOrKey.key];
    }

    return this[eventOrKey];
  },

  /**
   * Get the key name from a keyboard event, `keyCode`, or `which` value.
   * @param {number|object} eventOrCode A keyboard event-like object or key code.
   * @param {number} [eventOrCode.key] If object with a `key` name, it will be returned.
   * @param {number} [eventOrCode.keyCode] If object, it must have one of these keys.
   * @param {number} [eventOrCode.which] If object, it must have one of these keys.
   * @param {number} [eventOrCode.shiftKey] If object, it must have one of these keys.
   * @returns {*}
   */
  getKey: function getKey(eventOrCode) {
    var isEvent = isObject$2(eventOrCode); // handle events with a `key` already defined

    if (isEvent && eventOrCode.key) {
      return eventOrCode.key;
    }

    var name = codes[isEvent ? eventOrCode.keyCode || eventOrCode.which : eventOrCode];

    if (Array.isArray(name)) {
      if (isEvent) {
        name = name[eventOrCode.shiftKey ? 1 : 0];
      } else {
        name = name[0];
      }
    }

    return name;
  },
  // ----------------------------------------
  // By Name
  // ----------------------------------------
  // declare these manually for static analysis
  Cancel: 3,
  Help: 6,
  Backspace: 8,
  Tab: 9,
  Clear: 12,
  Enter: 13,
  Shift: 16,
  Control: 17,
  Alt: 18,
  Pause: 19,
  CapsLock: 20,
  Escape: 27,
  Convert: 28,
  NonConvert: 29,
  Accept: 30,
  ModeChange: 31,
  ' ': 32,
  PageUp: 33,
  PageDown: 34,
  End: 35,
  Home: 36,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40,
  Select: 41,
  Print: 42,
  Execute: 43,
  PrintScreen: 44,
  Insert: 45,
  Delete: 46,
  0: 48,
  ')': 48,
  1: 49,
  '!': 49,
  2: 50,
  '@': 50,
  3: 51,
  '#': 51,
  4: 52,
  $: 52,
  5: 53,
  '%': 53,
  6: 54,
  '^': 54,
  7: 55,
  '&': 55,
  8: 56,
  '*': 56,
  9: 57,
  '(': 57,
  a: 65,
  A: 65,
  b: 66,
  B: 66,
  c: 67,
  C: 67,
  d: 68,
  D: 68,
  e: 69,
  E: 69,
  f: 70,
  F: 70,
  g: 71,
  G: 71,
  h: 72,
  H: 72,
  i: 73,
  I: 73,
  j: 74,
  J: 74,
  k: 75,
  K: 75,
  l: 76,
  L: 76,
  m: 77,
  M: 77,
  n: 78,
  N: 78,
  o: 79,
  O: 79,
  p: 80,
  P: 80,
  q: 81,
  Q: 81,
  r: 82,
  R: 82,
  s: 83,
  S: 83,
  t: 84,
  T: 84,
  u: 85,
  U: 85,
  v: 86,
  V: 86,
  w: 87,
  W: 87,
  x: 88,
  X: 88,
  y: 89,
  Y: 89,
  z: 90,
  Z: 90,
  OS: 91,
  ContextMenu: 93,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  F13: 124,
  F14: 125,
  F15: 126,
  F16: 127,
  F17: 128,
  F18: 129,
  F19: 130,
  F20: 131,
  F21: 132,
  F22: 133,
  F23: 134,
  F24: 135,
  NumLock: 144,
  ScrollLock: 145,
  VolumeMute: 181,
  VolumeDown: 182,
  VolumeUp: 183,
  ';': 186,
  ':': 186,
  '=': 187,
  '+': 187,
  ',': 188,
  '<': 188,
  '-': 189,
  _: 189,
  '.': 190,
  '>': 190,
  '/': 191,
  '?': 191,
  '`': 192,
  '~': 192,
  '[': 219,
  '{': 219,
  '\\': 220,
  '|': 220,
  ']': 221,
  '}': 221,
  "'": 222,
  '"': 222,
  Meta: 224,
  AltGraph: 225,
  Attn: 246,
  CrSel: 247,
  ExSel: 248,
  EraseEof: 249,
  Play: 250,
  ZoomOut: 251
}; // ----------------------------------------
// By Alias
// ----------------------------------------
// provide dot-notation accessible keys for all key names

keyboardKey.Spacebar = keyboardKey[' '];
keyboardKey.Digit0 = keyboardKey['0'];
keyboardKey.Digit1 = keyboardKey['1'];
keyboardKey.Digit2 = keyboardKey['2'];
keyboardKey.Digit3 = keyboardKey['3'];
keyboardKey.Digit4 = keyboardKey['4'];
keyboardKey.Digit5 = keyboardKey['5'];
keyboardKey.Digit6 = keyboardKey['6'];
keyboardKey.Digit7 = keyboardKey['7'];
keyboardKey.Digit8 = keyboardKey['8'];
keyboardKey.Digit9 = keyboardKey['9'];
keyboardKey.Tilde = keyboardKey['~'];
keyboardKey.GraveAccent = keyboardKey['`'];
keyboardKey.ExclamationPoint = keyboardKey['!'];
keyboardKey.AtSign = keyboardKey['@'];
keyboardKey.PoundSign = keyboardKey['#'];
keyboardKey.PercentSign = keyboardKey['%'];
keyboardKey.Caret = keyboardKey['^'];
keyboardKey.Ampersand = keyboardKey['&'];
keyboardKey.PlusSign = keyboardKey['+'];
keyboardKey.MinusSign = keyboardKey['-'];
keyboardKey.EqualsSign = keyboardKey['='];
keyboardKey.DivisionSign = keyboardKey['/'];
keyboardKey.MultiplicationSign = keyboardKey['*'];
keyboardKey.Comma = keyboardKey[','];
keyboardKey.Decimal = keyboardKey['.'];
keyboardKey.Colon = keyboardKey[':'];
keyboardKey.Semicolon = keyboardKey[';'];
keyboardKey.Pipe = keyboardKey['|'];
keyboardKey.BackSlash = keyboardKey['\\'];
keyboardKey.QuestionMark = keyboardKey['?'];
keyboardKey.SingleQuote = keyboardKey["'"];
keyboardKey.DoubleQuote = keyboardKey['"'];
keyboardKey.LeftCurlyBrace = keyboardKey['{'];
keyboardKey.RightCurlyBrace = keyboardKey['}'];
keyboardKey.LeftParenthesis = keyboardKey['('];
keyboardKey.RightParenthesis = keyboardKey[')'];
keyboardKey.LeftAngleBracket = keyboardKey['<'];
keyboardKey.RightAngleBracket = keyboardKey['>'];
keyboardKey.LeftSquareBracket = keyboardKey['['];
keyboardKey.RightSquareBracket = keyboardKey[']'];
var keyboardKey_1 = keyboardKey;

var PortalInner_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _classCallCheck2 = interopRequireDefault(classCallCheck);

  var _createClass2 = interopRequireDefault(createClass);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf);

  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

  var _inherits2 = interopRequireDefault(inherits);

  var _defineProperty2 = interopRequireDefault(defineProperty);

  var _invoke2 = interopRequireDefault(invoke_1);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireWildcard(React__default);
  /**
   * An inner component that allows you to render children outside their parent.
   */


  var PortalInner =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(PortalInner, _Component);

    function PortalInner() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, PortalInner);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(PortalInner)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleRef", function (c) {
        (0, es.handleRef)(_this.props.innerRef, c);
      });
      return _this;
    }

    (0, _createClass2["default"])(PortalInner, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        (0, _invoke2["default"])(this.props, 'onMount', null, this.props);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        (0, _invoke2["default"])(this.props, 'onUnmount', null, this.props);
      }
    }, {
      key: "render",
      value: function render() {
        if (!(0, lib$1.isBrowser)()) return null;
        var _this$props = this.props,
            children = _this$props.children,
            _this$props$mountNode = _this$props.mountNode,
            mountNode = _this$props$mountNode === void 0 ? document.body : _this$props$mountNode;
        return (0, ReactDOM__default.createPortal)(_react["default"].createElement(es.Ref, {
          innerRef: this.handleRef
        }, children), mountNode);
      }
    }]);
    return PortalInner;
  }(_react.Component);

  (0, _defineProperty2["default"])(PortalInner, "handledProps", ["children", "innerRef", "mountNode", "onMount", "onUnmount"]);
  PortalInner.propTypes =  {
    /** Primary content. */
    children: _propTypes["default"].node.isRequired,

    /** Called with a ref to the inner node. */
    innerRef: lib$1.customPropTypes.ref,

    /** The node where the portal should mount. */
    mountNode: _propTypes["default"].any,

    /**
     * Called when the portal is mounted on the DOM
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onMount: _propTypes["default"].func,

    /**
     * Called when the portal is unmounted from the DOM
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onUnmount: _propTypes["default"].func
  } ;
  var _default = PortalInner;
  exports["default"] = _default;
});
unwrapExports(PortalInner_1);

var Portal_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _objectSpread2 = interopRequireDefault(objectSpread);

  var _classCallCheck2 = interopRequireDefault(classCallCheck);

  var _createClass2 = interopRequireDefault(createClass);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf);

  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

  var _inherits2 = interopRequireDefault(inherits);

  var _defineProperty2 = interopRequireDefault(defineProperty);

  var _invoke2 = interopRequireDefault(invoke_1);

  var _eventStack = interopRequireDefault(lib);

  var _keyboardKey = interopRequireDefault(keyboardKey_1);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireWildcard(React__default);

  var _PortalInner = interopRequireDefault(PortalInner_1);
  /**
   * A component that allows you to render children outside their parent.
   * @see Modal
   * @see Popup
   * @see Dimmer
   * @see Confirm
   */


  var Portal =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(Portal, _Component);

    function Portal() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, Portal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Portal)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "contentRef", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "triggerRef", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "latestDocumentMouseDownEvent", null);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDocumentMouseDown", function (e) {
        _this.latestDocumentMouseDownEvent = e;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDocumentClick", function (e) {
        var closeOnDocumentClick = _this.props.closeOnDocumentClick;
        var currentMouseDownEvent = _this.latestDocumentMouseDownEvent;
        _this.latestDocumentMouseDownEvent = null;

        if (!_this.contentRef.current || // no portal
        (0, lib$1.doesNodeContainClick)(_this.triggerRef.current, e) || // event happened in trigger (delegate to trigger handlers)
        currentMouseDownEvent && (0, lib$1.doesNodeContainClick)(_this.contentRef.current, currentMouseDownEvent) || // event originated in the portal but was ended outside
        (0, lib$1.doesNodeContainClick)(_this.contentRef.current, e) // event happened in the portal
        ) {
            return;
          } // ignore the click


        if (closeOnDocumentClick) {
          _this.close(e);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleEscape", function (e) {
        if (!_this.props.closeOnEscape) return;
        if (_keyboardKey["default"].getCode(e) !== _keyboardKey["default"].Escape) return;

        _this.close(e);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handlePortalMouseLeave", function (e) {
        var _this$props = _this.props,
            closeOnPortalMouseLeave = _this$props.closeOnPortalMouseLeave,
            mouseLeaveDelay = _this$props.mouseLeaveDelay;
        if (!closeOnPortalMouseLeave) return; // Do not close the portal when 'mouseleave' is triggered by children

        if (e.target !== _this.contentRef.current) return;
        _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handlePortalMouseEnter", function () {
        // In order to enable mousing from the trigger to the portal, we need to
        // clear the mouseleave timer that was set when leaving the trigger.
        var closeOnPortalMouseLeave = _this.props.closeOnPortalMouseLeave;
        if (!closeOnPortalMouseLeave) return;
        clearTimeout(_this.mouseLeaveTimer);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleTriggerBlur", function (e) {
        var _this$props2 = _this.props,
            trigger = _this$props2.trigger,
            closeOnTriggerBlur = _this$props2.closeOnTriggerBlur; // Call original event handler

        for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          rest[_key2 - 1] = arguments[_key2];
        }

        _invoke2["default"].apply(void 0, [trigger, 'props.onBlur', e].concat(rest)); // IE 11 doesn't work with relatedTarget in blur events


        var target = e.relatedTarget || document.activeElement; // do not close if focus is given to the portal

        var didFocusPortal = (0, _invoke2["default"])(_this.contentRef.current, 'contains', target);
        if (!closeOnTriggerBlur || didFocusPortal) return;

        _this.close(e);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleTriggerClick", function (e) {
        var _this$props3 = _this.props,
            trigger = _this$props3.trigger,
            closeOnTriggerClick = _this$props3.closeOnTriggerClick,
            openOnTriggerClick = _this$props3.openOnTriggerClick;
        var open = _this.state.open; // Call original event handler

        for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          rest[_key3 - 1] = arguments[_key3];
        }

        _invoke2["default"].apply(void 0, [trigger, 'props.onClick', e].concat(rest));

        if (open && closeOnTriggerClick) {
          _this.close(e);
        } else if (!open && openOnTriggerClick) {
          _this.open(e);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleTriggerFocus", function (e) {
        var _this$props4 = _this.props,
            trigger = _this$props4.trigger,
            openOnTriggerFocus = _this$props4.openOnTriggerFocus; // Call original event handler

        for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          rest[_key4 - 1] = arguments[_key4];
        }

        _invoke2["default"].apply(void 0, [trigger, 'props.onFocus', e].concat(rest));

        if (!openOnTriggerFocus) return;

        _this.open(e);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleTriggerMouseLeave", function (e) {
        clearTimeout(_this.mouseEnterTimer);
        var _this$props5 = _this.props,
            trigger = _this$props5.trigger,
            closeOnTriggerMouseLeave = _this$props5.closeOnTriggerMouseLeave,
            mouseLeaveDelay = _this$props5.mouseLeaveDelay; // Call original event handler

        for (var _len5 = arguments.length, rest = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          rest[_key5 - 1] = arguments[_key5];
        }

        _invoke2["default"].apply(void 0, [trigger, 'props.onMouseLeave', e].concat(rest));

        if (!closeOnTriggerMouseLeave) return;
        _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleTriggerMouseEnter", function (e) {
        clearTimeout(_this.mouseLeaveTimer);
        var _this$props6 = _this.props,
            trigger = _this$props6.trigger,
            mouseEnterDelay = _this$props6.mouseEnterDelay,
            openOnTriggerMouseEnter = _this$props6.openOnTriggerMouseEnter; // Call original event handler

        for (var _len6 = arguments.length, rest = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          rest[_key6 - 1] = arguments[_key6];
        }

        _invoke2["default"].apply(void 0, [trigger, 'props.onMouseEnter', e].concat(rest));

        if (!openOnTriggerMouseEnter) return;
        _this.mouseEnterTimer = _this.openWithTimeout(e, mouseEnterDelay);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "open", function (e) {
        var onOpen = _this.props.onOpen;
        if (onOpen) onOpen(e, _this.props);

        _this.trySetState({
          open: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "openWithTimeout", function (e, delay) {
        // React wipes the entire event object and suggests using e.persist() if
        // you need the event for async access. However, even with e.persist
        // certain required props (e.g. currentTarget) are null so we're forced to clone.
        var eventClone = (0, _objectSpread2["default"])({}, e);
        return setTimeout(function () {
          return _this.open(eventClone);
        }, delay || 0);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "close", function (e) {
        var onClose = _this.props.onClose;
        if (onClose) onClose(e, _this.props);

        _this.trySetState({
          open: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "closeWithTimeout", function (e, delay) {
        // React wipes the entire event object and suggests using e.persist() if
        // you need the event for async access. However, even with e.persist
        // certain required props (e.g. currentTarget) are null so we're forced to clone.
        var eventClone = (0, _objectSpread2["default"])({}, e);
        return setTimeout(function () {
          return _this.close(eventClone);
        }, delay || 0);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMount", function () {
        (0, _invoke2["default"])(_this.props, 'onMount', null, _this.props);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleUnmount", function () {
        (0, _invoke2["default"])(_this.props, 'onUnmount', null, _this.props);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleTriggerRef", function (c) {
        _this.triggerRef.current = c;
        (0, es.handleRef)(_this.props.triggerRef, c);
      });
      return _this;
    }

    (0, _createClass2["default"])(Portal, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // Clean up timers
        clearTimeout(this.mouseEnterTimer);
        clearTimeout(this.mouseLeaveTimer);
      } // ----------------------------------------
      // Document Event Handlers
      // ----------------------------------------

    }, {
      key: "render",
      value: function render() {
        var _this$props7 = this.props,
            children = _this$props7.children,
            eventPool = _this$props7.eventPool,
            mountNode = _this$props7.mountNode,
            trigger = _this$props7.trigger;
        var open = this.state.open;
        return _react["default"].createElement(_react.Fragment, null, open && _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_PortalInner["default"], {
          innerRef: this.contentRef,
          mountNode: mountNode,
          onMount: this.handleMount,
          onUnmount: this.handleUnmount
        }, children), _react["default"].createElement(_eventStack["default"], {
          name: "mouseleave",
          on: this.handlePortalMouseLeave,
          pool: eventPool,
          target: this.contentRef
        }), _react["default"].createElement(_eventStack["default"], {
          name: "mouseenter",
          on: this.handlePortalMouseEnter,
          pool: eventPool,
          target: this.contentRef
        }), _react["default"].createElement(_eventStack["default"], {
          name: "mousedown",
          on: this.handleDocumentMouseDown,
          pool: eventPool
        }), _react["default"].createElement(_eventStack["default"], {
          name: "click",
          on: this.handleDocumentClick,
          pool: eventPool
        }), _react["default"].createElement(_eventStack["default"], {
          name: "keydown",
          on: this.handleEscape,
          pool: eventPool
        })), trigger && _react["default"].createElement(es.Ref, {
          innerRef: this.handleTriggerRef
        }, (0, _react.cloneElement)(trigger, {
          onBlur: this.handleTriggerBlur,
          onClick: this.handleTriggerClick,
          onFocus: this.handleTriggerFocus,
          onMouseLeave: this.handleTriggerMouseLeave,
          onMouseEnter: this.handleTriggerMouseEnter
        })));
      }
    }]);
    return Portal;
  }(lib$1.AutoControlledComponent);

  (0, _defineProperty2["default"])(Portal, "defaultProps", {
    closeOnDocumentClick: true,
    closeOnEscape: true,
    eventPool: 'default',
    openOnTriggerClick: true
  });
  (0, _defineProperty2["default"])(Portal, "autoControlledProps", ['open']);
  (0, _defineProperty2["default"])(Portal, "Inner", _PortalInner["default"]);
  (0, _defineProperty2["default"])(Portal, "handledProps", ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"]);
  Portal.propTypes =  {
    /** Primary content. */
    children: _propTypes["default"].node.isRequired,

    /** Controls whether or not the portal should close when the document is clicked. */
    closeOnDocumentClick: _propTypes["default"].bool,

    /** Controls whether or not the portal should close when escape is pressed is displayed. */
    closeOnEscape: _propTypes["default"].bool,

    /**
     * Controls whether or not the portal should close when mousing out of the portal.
     * NOTE: This will prevent `closeOnTriggerMouseLeave` when mousing over the
     * gap from the trigger to the portal.
     */
    closeOnPortalMouseLeave: _propTypes["default"].bool,

    /** Controls whether or not the portal should close on blur of the trigger. */
    closeOnTriggerBlur: _propTypes["default"].bool,

    /** Controls whether or not the portal should close on click of the trigger. */
    closeOnTriggerClick: _propTypes["default"].bool,

    /** Controls whether or not the portal should close when mousing out of the trigger. */
    closeOnTriggerMouseLeave: _propTypes["default"].bool,

    /** Initial value of open. */
    defaultOpen: _propTypes["default"].bool,

    /** Event pool namespace that is used to handle component events */
    eventPool: _propTypes["default"].string,

    /** The node where the portal should mount. */
    mountNode: _propTypes["default"].any,

    /** Milliseconds to wait before opening on mouse over */
    mouseEnterDelay: _propTypes["default"].number,

    /** Milliseconds to wait before closing on mouse leave */
    mouseLeaveDelay: _propTypes["default"].number,

    /**
     * Called when a close event happens
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClose: _propTypes["default"].func,

    /**
     * Called when the portal is mounted on the DOM.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onMount: _propTypes["default"].func,

    /**
     * Called when an open event happens
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onOpen: _propTypes["default"].func,

    /**
     * Called when the portal is unmounted from the DOM.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onUnmount: _propTypes["default"].func,

    /** Controls whether or not the portal is displayed. */
    open: _propTypes["default"].bool,

    /** Controls whether or not the portal should open when the trigger is clicked. */
    openOnTriggerClick: _propTypes["default"].bool,

    /** Controls whether or not the portal should open on focus of the trigger. */
    openOnTriggerFocus: _propTypes["default"].bool,

    /** Controls whether or not the portal should open when mousing over the trigger. */
    openOnTriggerMouseEnter: _propTypes["default"].bool,

    /** Element to be rendered in-place where the portal is defined. */
    trigger: _propTypes["default"].node,

    /** Called with a ref to the trigger node. */
    triggerRef: lib$1.customPropTypes.ref
  } ;
  var _default = Portal;
  exports["default"] = _default;
});
unwrapExports(Portal_1);

var Portal = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Portal["default"];
    }
  });

  var _Portal = interopRequireDefault(Portal_1);
});
unwrapExports(Portal);

var DimmerDimmable_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _classnames = interopRequireDefault(classnames);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireDefault(React__default);
  /**
   * A dimmable sub-component for Dimmer.
   */


  function DimmerDimmable(props) {
    var blurring = props.blurring,
        className = props.className,
        children = props.children,
        content = props.content,
        dimmed = props.dimmed;
    var classes = (0, _classnames["default"])((0, lib$1.useKeyOnly)(blurring, 'blurring'), (0, lib$1.useKeyOnly)(dimmed, 'dimmed'), 'dimmable', className);
    var rest = (0, lib$1.getUnhandledProps)(DimmerDimmable, props);
    var ElementType = (0, lib$1.getElementType)(DimmerDimmable, props);
    return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
      className: classes
    }), lib$1.childrenUtils.isNil(children) ? content : children);
  }

  DimmerDimmable.handledProps = ["as", "blurring", "children", "className", "content", "dimmed"];
  DimmerDimmable.propTypes =  {
    /** An element type to render as (string or function). */
    as: _propTypes["default"].elementType,

    /** A dimmable element can blur its contents. */
    blurring: _propTypes["default"].bool,

    /** Primary content. */
    children: _propTypes["default"].node,

    /** Additional classes. */
    className: _propTypes["default"].string,

    /** Shorthand for primary content. */
    content: lib$1.customPropTypes.contentShorthand,

    /** Controls whether or not the dim is displayed. */
    dimmed: _propTypes["default"].bool
  } ;
  var _default = DimmerDimmable;
  exports["default"] = _default;
});
unwrapExports(DimmerDimmable_1);

var DimmerInner_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck);

  var _createClass2 = interopRequireDefault(createClass);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf);

  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

  var _inherits2 = interopRequireDefault(inherits);

  var _defineProperty2 = interopRequireDefault(defineProperty);

  var _invoke2 = interopRequireDefault(invoke_1);

  var _classnames = interopRequireDefault(classnames);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireWildcard(React__default);
  /**
   * An inner element for a Dimmer.
   */


  var DimmerInner =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(DimmerInner, _Component);

    function DimmerInner() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, DimmerInner);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(DimmerInner)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "containerRef", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "contentRef", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (e) {
        var contentRef = _this.contentRef.current;
        (0, _invoke2["default"])(_this.props, 'onClick', e, _this.props);

        if (contentRef && contentRef !== e.target && (0, lib$1.doesNodeContainClick)(contentRef, e)) {
          return;
        }

        (0, _invoke2["default"])(_this.props, 'onClickOutside', e, _this.props);
      });
      return _this;
    }

    (0, _createClass2["default"])(DimmerInner, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var active = this.props.active;
        this.toggleStyles(active);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var currentActive = this.props.active;
        var prevActive = prevProps.active;
        if (prevActive !== currentActive) this.toggleStyles(currentActive);
      }
    }, {
      key: "toggleStyles",
      value: function toggleStyles(active) {
        var containerRef = this.containerRef.current;
        if (!containerRef || !containerRef.style) return;

        if (active) {
          containerRef.style.setProperty('display', 'flex', 'important');
        } else {
          containerRef.style.removeProperty('display');
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            active = _this$props.active,
            children = _this$props.children,
            className = _this$props.className,
            content = _this$props.content,
            disabled = _this$props.disabled,
            inverted = _this$props.inverted,
            page = _this$props.page,
            simple = _this$props.simple,
            verticalAlign = _this$props.verticalAlign;
        var classes = (0, _classnames["default"])('ui', (0, lib$1.useKeyOnly)(active, 'active transition visible'), (0, lib$1.useKeyOnly)(disabled, 'disabled'), (0, lib$1.useKeyOnly)(inverted, 'inverted'), (0, lib$1.useKeyOnly)(page, 'page'), (0, lib$1.useKeyOnly)(simple, 'simple'), (0, lib$1.useVerticalAlignProp)(verticalAlign), 'dimmer', className);
        var rest = (0, lib$1.getUnhandledProps)(DimmerInner, this.props);
        var ElementType = (0, lib$1.getElementType)(DimmerInner, this.props);
        var childrenContent = lib$1.childrenUtils.isNil(children) ? content : children;
        return _react["default"].createElement(es.Ref, {
          innerRef: this.containerRef
        }, _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
          className: classes,
          onClick: this.handleClick
        }), childrenContent && _react["default"].createElement("div", {
          className: "content",
          ref: this.contentRef
        }, childrenContent)));
      }
    }]);
    return DimmerInner;
  }(_react.Component);

  exports["default"] = DimmerInner;
  (0, _defineProperty2["default"])(DimmerInner, "handledProps", ["active", "as", "children", "className", "content", "disabled", "inverted", "onClick", "onClickOutside", "page", "simple", "verticalAlign"]);
  DimmerInner.propTypes =  {
    /** An element type to render as (string or function). */
    as: _propTypes["default"].elementType,

    /** An active dimmer will dim its parent container. */
    active: _propTypes["default"].bool,

    /** Primary content. */
    children: _propTypes["default"].node,

    /** Additional classes. */
    className: _propTypes["default"].string,

    /** Shorthand for primary content. */
    content: lib$1.customPropTypes.contentShorthand,

    /** A disabled dimmer cannot be activated */
    disabled: _propTypes["default"].bool,

    /**
     * Called on click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: _propTypes["default"].func,

    /**
     * Handles click outside Dimmer's content, but inside Dimmer area.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClickOutside: _propTypes["default"].func,

    /** A dimmer can be formatted to have its colors inverted. */
    inverted: _propTypes["default"].bool,

    /** A dimmer can be formatted to be fixed to the page. */
    page: _propTypes["default"].bool,

    /** A dimmer can be controlled with simple prop. */
    simple: _propTypes["default"].bool,

    /** A dimmer can have its content top or bottom aligned. */
    verticalAlign: _propTypes["default"].oneOf(['bottom', 'top'])
  } ;
});
unwrapExports(DimmerInner_1);

var Dimmer_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck);

  var _createClass2 = interopRequireDefault(createClass);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf);

  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

  var _inherits2 = interopRequireDefault(inherits);

  var _defineProperty2 = interopRequireDefault(defineProperty);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireWildcard(React__default);

  var _Portal = interopRequireDefault(Portal);

  var _DimmerDimmable = interopRequireDefault(DimmerDimmable_1);

  var _DimmerInner = interopRequireDefault(DimmerInner_1);
  /**
   * A dimmer hides distractions to focus attention on particular content.
   */


  var Dimmer =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(Dimmer, _Component);

    function Dimmer() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, Dimmer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Dimmer)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handlePortalMount", function () {
        if (!(0, lib$1.isBrowser)()) return; // Heads up, IE doesn't support second argument in add()

        document.body.classList.add('dimmed');
        document.body.classList.add('dimmable');
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handlePortalUnmount", function () {
        if (!(0, lib$1.isBrowser)()) return; // Heads up, IE doesn't support second argument in add()

        document.body.classList.remove('dimmed');
        document.body.classList.remove('dimmable');
      });
      return _this;
    }

    (0, _createClass2["default"])(Dimmer, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            active = _this$props.active,
            page = _this$props.page;
        var rest = (0, lib$1.getUnhandledProps)(Dimmer, this.props);

        if (page) {
          return _react["default"].createElement(_Portal["default"], {
            closeOnEscape: false,
            closeOnDocumentClick: false,
            onMount: this.handlePortalMount,
            onUnmount: this.handlePortalUnmount,
            open: active,
            openOnTriggerClick: false
          }, _react["default"].createElement(_DimmerInner["default"], (0, _extends2["default"])({}, rest, {
            active: active,
            page: page
          })));
        }

        return _react["default"].createElement(_DimmerInner["default"], (0, _extends2["default"])({}, rest, {
          active: active,
          page: page
        }));
      }
    }]);
    return Dimmer;
  }(_react.Component);

  exports["default"] = Dimmer;
  (0, _defineProperty2["default"])(Dimmer, "Dimmable", _DimmerDimmable["default"]);
  (0, _defineProperty2["default"])(Dimmer, "Inner", _DimmerInner["default"]);
  (0, _defineProperty2["default"])(Dimmer, "handledProps", ["active", "page"]);
  Dimmer.propTypes =  {
    /** An active dimmer will dim its parent container. */
    active: _propTypes["default"].bool,

    /** A dimmer can be formatted to be fixed to the page. */
    page: _propTypes["default"].bool
  } ;
  Dimmer.create = (0, lib$1.createShorthandFactory)(Dimmer, function (value) {
    return {
      content: value
    };
  });
});
unwrapExports(Dimmer_1);

var Dimmer = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Dimmer["default"];
    }
  });

  var _Dimmer = interopRequireDefault(Dimmer_1);
});
unwrapExports(Dimmer);

var ImageGroup_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _classnames = interopRequireDefault(classnames);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireDefault(React__default);
  /**
   * A group of images.
   */


  function ImageGroup(props) {
    var children = props.children,
        className = props.className,
        content = props.content,
        size = props.size;
    var classes = (0, _classnames["default"])('ui', size, className, 'images');
    var rest = (0, lib$1.getUnhandledProps)(ImageGroup, props);
    var ElementType = (0, lib$1.getElementType)(ImageGroup, props);
    return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
      className: classes
    }), lib$1.childrenUtils.isNil(children) ? content : children);
  }

  ImageGroup.handledProps = ["as", "children", "className", "content", "size"];
  ImageGroup.propTypes =  {
    /** An element type to render as (string or function). */
    as: _propTypes["default"].elementType,

    /** Primary content. */
    children: _propTypes["default"].node,

    /** Additional classes. */
    className: _propTypes["default"].string,

    /** Shorthand for primary content. */
    content: lib$1.customPropTypes.contentShorthand,

    /** A group of images can be formatted to have the same size. */
    size: _propTypes["default"].oneOf(lib$1.SUI.SIZES)
  } ;
  var _default = ImageGroup;
  exports["default"] = _default;
});
unwrapExports(ImageGroup_1);

var Image_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _slicedToArray2 = interopRequireDefault(slicedToArray);

  var _isNil2 = interopRequireDefault(isNil_1);

  var _classnames = interopRequireDefault(classnames);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireDefault(React__default);

  var _Dimmer = interopRequireDefault(Dimmer);

  var _Label = interopRequireDefault(Label_1);

  var _ImageGroup = interopRequireDefault(ImageGroup_1);
  /**
   * An image is a graphic representation of something.
   * @see Icon
   */


  function Image(props) {
    var avatar = props.avatar,
        bordered = props.bordered,
        centered = props.centered,
        children = props.children,
        circular = props.circular,
        className = props.className,
        content = props.content,
        dimmer = props.dimmer,
        disabled = props.disabled,
        floated = props.floated,
        fluid = props.fluid,
        hidden = props.hidden,
        href = props.href,
        inline = props.inline,
        label = props.label,
        rounded = props.rounded,
        size = props.size,
        spaced = props.spaced,
        verticalAlign = props.verticalAlign,
        wrapped = props.wrapped,
        ui = props.ui;
    var classes = (0, _classnames["default"])((0, lib$1.useKeyOnly)(ui, 'ui'), size, (0, lib$1.useKeyOnly)(avatar, 'avatar'), (0, lib$1.useKeyOnly)(bordered, 'bordered'), (0, lib$1.useKeyOnly)(circular, 'circular'), (0, lib$1.useKeyOnly)(centered, 'centered'), (0, lib$1.useKeyOnly)(disabled, 'disabled'), (0, lib$1.useKeyOnly)(fluid, 'fluid'), (0, lib$1.useKeyOnly)(hidden, 'hidden'), (0, lib$1.useKeyOnly)(inline, 'inline'), (0, lib$1.useKeyOnly)(rounded, 'rounded'), (0, lib$1.useKeyOrValueAndKey)(spaced, 'spaced'), (0, lib$1.useValueAndKey)(floated, 'floated'), (0, lib$1.useVerticalAlignProp)(verticalAlign, 'aligned'), 'image', className);
    var rest = (0, lib$1.getUnhandledProps)(Image, props);

    var _partitionHTMLProps = (0, lib$1.partitionHTMLProps)(rest, {
      htmlProps: lib$1.htmlImageProps
    }),
        _partitionHTMLProps2 = (0, _slicedToArray2["default"])(_partitionHTMLProps, 2),
        imgTagProps = _partitionHTMLProps2[0],
        rootProps = _partitionHTMLProps2[1];

    var ElementType = (0, lib$1.getElementType)(Image, props, function () {
      if (!(0, _isNil2["default"])(dimmer) || !(0, _isNil2["default"])(label) || !(0, _isNil2["default"])(wrapped) || !lib$1.childrenUtils.isNil(children)) {
        return 'div';
      }
    });

    if (!lib$1.childrenUtils.isNil(children)) {
      return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
        className: classes
      }), children);
    }

    if (!lib$1.childrenUtils.isNil(content)) {
      return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
        className: classes
      }), content);
    }

    if (ElementType === 'img') {
      return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rootProps, imgTagProps, {
        className: classes
      }));
    }

    return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rootProps, {
      className: classes,
      href: href
    }), _Dimmer["default"].create(dimmer, {
      autoGenerateKey: false
    }), _Label["default"].create(label, {
      autoGenerateKey: false
    }), _react["default"].createElement("img", imgTagProps));
  }

  Image.handledProps = ["as", "avatar", "bordered", "centered", "children", "circular", "className", "content", "dimmer", "disabled", "floated", "fluid", "hidden", "href", "inline", "label", "rounded", "size", "spaced", "ui", "verticalAlign", "wrapped"];
  Image.Group = _ImageGroup["default"];
  Image.propTypes =  {
    /** An element type to render as (string or function). */
    as: _propTypes["default"].elementType,

    /** An image may be formatted to appear inline with text as an avatar. */
    avatar: _propTypes["default"].bool,

    /** An image may include a border to emphasize the edges of white or transparent content. */
    bordered: _propTypes["default"].bool,

    /** An image can appear centered in a content block. */
    centered: _propTypes["default"].bool,

    /** Primary content. */
    children: _propTypes["default"].node,

    /** An image may appear circular. */
    circular: _propTypes["default"].bool,

    /** Additional classes. */
    className: _propTypes["default"].string,

    /** Shorthand for primary content. */
    content: lib$1.customPropTypes.contentShorthand,

    /** An image can show that it is disabled and cannot be selected. */
    disabled: _propTypes["default"].bool,

    /** Shorthand for Dimmer. */
    dimmer: lib$1.customPropTypes.itemShorthand,

    /** An image can sit to the left or right of other content. */
    floated: _propTypes["default"].oneOf(lib$1.SUI.FLOATS),

    /** An image can take up the width of its container. */
    fluid: lib$1.customPropTypes.every([_propTypes["default"].bool, lib$1.customPropTypes.disallow(['size'])]),

    /** An image can be hidden. */
    hidden: _propTypes["default"].bool,

    /** Renders the Image as an <a> tag with this href. */
    href: _propTypes["default"].string,

    /** An image may appear inline. */
    inline: _propTypes["default"].bool,

    /** Shorthand for Label. */
    label: lib$1.customPropTypes.itemShorthand,

    /** An image may appear rounded. */
    rounded: _propTypes["default"].bool,

    /** An image may appear at different sizes. */
    size: _propTypes["default"].oneOf(lib$1.SUI.SIZES),

    /** An image can specify that it needs an additional spacing to separate it from nearby content. */
    spaced: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['left', 'right'])]),

    /** Whether or not to add the ui className. */
    ui: _propTypes["default"].bool,

    /** An image can specify its vertical alignment. */
    verticalAlign: _propTypes["default"].oneOf(lib$1.SUI.VERTICAL_ALIGNMENTS),

    /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
    wrapped: _propTypes["default"].bool
  } ;
  Image.defaultProps = {
    as: 'img',
    ui: true
  };
  Image.create = (0, lib$1.createShorthandFactory)(Image, function (value) {
    return {
      src: value
    };
  });
  var _default = Image;
  exports["default"] = _default;
});
unwrapExports(Image_1);

var LabelDetail_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _classnames = interopRequireDefault(classnames);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireDefault(React__default);

  function LabelDetail(props) {
    var children = props.children,
        className = props.className,
        content = props.content;
    var classes = (0, _classnames["default"])('detail', className);
    var rest = (0, lib$1.getUnhandledProps)(LabelDetail, props);
    var ElementType = (0, lib$1.getElementType)(LabelDetail, props);
    return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
      className: classes
    }), lib$1.childrenUtils.isNil(children) ? content : children);
  }

  LabelDetail.handledProps = ["as", "children", "className", "content"];
  LabelDetail.propTypes =  {
    /** An element type to render as (string or function). */
    as: _propTypes["default"].elementType,

    /** Primary content. */
    children: _propTypes["default"].node,

    /** Additional classes. */
    className: _propTypes["default"].string,

    /** Shorthand for primary content. */
    content: lib$1.customPropTypes.contentShorthand
  } ;
  LabelDetail.create = (0, lib$1.createShorthandFactory)(LabelDetail, function (val) {
    return {
      content: val
    };
  });
  var _default = LabelDetail;
  exports["default"] = _default;
});
unwrapExports(LabelDetail_1);

var LabelGroup_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _classnames = interopRequireDefault(classnames);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireDefault(React__default);
  /**
   * A label can be grouped.
   */


  function LabelGroup(props) {
    var children = props.children,
        circular = props.circular,
        className = props.className,
        color = props.color,
        content = props.content,
        size = props.size,
        tag = props.tag;
    var classes = (0, _classnames["default"])('ui', color, size, (0, lib$1.useKeyOnly)(circular, 'circular'), (0, lib$1.useKeyOnly)(tag, 'tag'), 'labels', className);
    var rest = (0, lib$1.getUnhandledProps)(LabelGroup, props);
    var ElementType = (0, lib$1.getElementType)(LabelGroup, props);
    return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
      className: classes
    }), lib$1.childrenUtils.isNil(children) ? content : children);
  }

  LabelGroup.handledProps = ["as", "children", "circular", "className", "color", "content", "size", "tag"];
  LabelGroup.propTypes =  {
    /** An element type to render as (string or function). */
    as: _propTypes["default"].elementType,

    /** Primary content. */
    children: _propTypes["default"].node,

    /** Labels can share shapes. */
    circular: _propTypes["default"].bool,

    /** Additional classes. */
    className: _propTypes["default"].string,

    /** Label group can share colors together. */
    color: _propTypes["default"].oneOf(lib$1.SUI.COLORS),

    /** Shorthand for primary content. */
    content: lib$1.customPropTypes.contentShorthand,

    /** Label group can share sizes together. */
    size: _propTypes["default"].oneOf(lib$1.SUI.SIZES),

    /** Label group can share tag formatting. */
    tag: _propTypes["default"].bool
  } ;
  var _default = LabelGroup;
  exports["default"] = _default;
});
unwrapExports(LabelGroup_1);

var Label_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck);

  var _createClass2 = interopRequireDefault(createClass);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf);

  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

  var _inherits2 = interopRequireDefault(inherits);

  var _defineProperty2 = interopRequireDefault(defineProperty);

  var _isUndefined2 = interopRequireDefault(isUndefined_1);

  var _invoke2 = interopRequireDefault(invoke_1);

  var _classnames = interopRequireDefault(classnames);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireWildcard(React__default);

  var _Icon = interopRequireDefault(Icon_1);

  var _Image = interopRequireDefault(Image_1);

  var _LabelDetail = interopRequireDefault(LabelDetail_1);

  var _LabelGroup = interopRequireDefault(LabelGroup_1);
  /**
   * A label displays content classification.
   */


  var Label =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(Label, _Component);

    function Label() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, Label);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Label)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (e) {
        var onClick = _this.props.onClick;
        if (onClick) onClick(e, _this.props);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleIconOverrides", function (predefinedProps) {
        return {
          onClick: function onClick(e) {
            (0, _invoke2["default"])(predefinedProps, 'onClick', e);
            (0, _invoke2["default"])(_this.props, 'onRemove', e, _this.props);
          }
        };
      });
      return _this;
    }

    (0, _createClass2["default"])(Label, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            active = _this$props.active,
            attached = _this$props.attached,
            basic = _this$props.basic,
            children = _this$props.children,
            circular = _this$props.circular,
            className = _this$props.className,
            color = _this$props.color,
            content = _this$props.content,
            corner = _this$props.corner,
            detail = _this$props.detail,
            empty = _this$props.empty,
            floating = _this$props.floating,
            horizontal = _this$props.horizontal,
            icon = _this$props.icon,
            image = _this$props.image,
            onRemove = _this$props.onRemove,
            pointing = _this$props.pointing,
            prompt = _this$props.prompt,
            removeIcon = _this$props.removeIcon,
            ribbon = _this$props.ribbon,
            size = _this$props.size,
            tag = _this$props.tag;
        var pointingClass = pointing === true && 'pointing' || (pointing === 'left' || pointing === 'right') && "".concat(pointing, " pointing") || (pointing === 'above' || pointing === 'below') && "pointing ".concat(pointing);
        var classes = (0, _classnames["default"])('ui', color, pointingClass, size, (0, lib$1.useKeyOnly)(active, 'active'), (0, lib$1.useKeyOnly)(basic, 'basic'), (0, lib$1.useKeyOnly)(circular, 'circular'), (0, lib$1.useKeyOnly)(empty, 'empty'), (0, lib$1.useKeyOnly)(floating, 'floating'), (0, lib$1.useKeyOnly)(horizontal, 'horizontal'), (0, lib$1.useKeyOnly)(image === true, 'image'), (0, lib$1.useKeyOnly)(prompt, 'prompt'), (0, lib$1.useKeyOnly)(tag, 'tag'), (0, lib$1.useKeyOrValueAndKey)(corner, 'corner'), (0, lib$1.useKeyOrValueAndKey)(ribbon, 'ribbon'), (0, lib$1.useValueAndKey)(attached, 'attached'), 'label', className);
        var rest = (0, lib$1.getUnhandledProps)(Label, this.props);
        var ElementType = (0, lib$1.getElementType)(Label, this.props);

        if (!lib$1.childrenUtils.isNil(children)) {
          return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
            className: classes,
            onClick: this.handleClick
          }), children);
        }

        var removeIconShorthand = (0, _isUndefined2["default"])(removeIcon) ? 'delete' : removeIcon;
        return _react["default"].createElement(ElementType, (0, _extends2["default"])({
          className: classes,
          onClick: this.handleClick
        }, rest), _Icon["default"].create(icon, {
          autoGenerateKey: false
        }), typeof image !== 'boolean' && _Image["default"].create(image, {
          autoGenerateKey: false
        }), content, _LabelDetail["default"].create(detail, {
          autoGenerateKey: false
        }), onRemove && _Icon["default"].create(removeIconShorthand, {
          autoGenerateKey: false,
          overrideProps: this.handleIconOverrides
        }));
      }
    }]);
    return Label;
  }(_react.Component);

  exports["default"] = Label;
  (0, _defineProperty2["default"])(Label, "Detail", _LabelDetail["default"]);
  (0, _defineProperty2["default"])(Label, "Group", _LabelGroup["default"]);
  (0, _defineProperty2["default"])(Label, "handledProps", ["active", "as", "attached", "basic", "children", "circular", "className", "color", "content", "corner", "detail", "empty", "floating", "horizontal", "icon", "image", "onClick", "onRemove", "pointing", "prompt", "removeIcon", "ribbon", "size", "tag"]);
  Label.propTypes =  {
    /** An element type to render as (string or function). */
    as: _propTypes["default"].elementType,

    /** A label can be active. */
    active: _propTypes["default"].bool,

    /** A label can attach to a content segment. */
    attached: _propTypes["default"].oneOf(['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right']),

    /** A label can reduce its complexity. */
    basic: _propTypes["default"].bool,

    /** Primary content. */
    children: _propTypes["default"].node,

    /** A label can be circular. */
    circular: _propTypes["default"].bool,

    /** Additional classes. */
    className: _propTypes["default"].string,

    /** Color of the label. */
    color: _propTypes["default"].oneOf(lib$1.SUI.COLORS),

    /** Shorthand for primary content. */
    content: lib$1.customPropTypes.contentShorthand,

    /** A label can position itself in the corner of an element. */
    corner: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['left', 'right'])]),

    /** Shorthand for LabelDetail. */
    detail: lib$1.customPropTypes.itemShorthand,

    /** Formats the label as a dot. */
    empty: lib$1.customPropTypes.every([_propTypes["default"].bool, lib$1.customPropTypes.demand(['circular'])]),

    /** Float above another element in the upper right corner. */
    floating: _propTypes["default"].bool,

    /** A horizontal label is formatted to label content along-side it horizontally. */
    horizontal: _propTypes["default"].bool,

    /** Shorthand for Icon. */
    icon: lib$1.customPropTypes.itemShorthand,

    /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
    image: _propTypes["default"].oneOfType([_propTypes["default"].bool, lib$1.customPropTypes.itemShorthand]),

    /**
     * Called on click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: _propTypes["default"].func,

    /**
     * Adds an "x" icon, called when "x" is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onRemove: _propTypes["default"].func,

    /** A label can point to content next to it. */
    pointing: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['above', 'below', 'left', 'right'])]),

    /** A label can prompt for an error in your forms. */
    prompt: _propTypes["default"].bool,

    /** Shorthand for Icon to appear as the last child and trigger onRemove. */
    removeIcon: lib$1.customPropTypes.itemShorthand,

    /** A label can appear as a ribbon attaching itself to an element. */
    ribbon: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['right'])]),

    /** A label can have different sizes. */
    size: _propTypes["default"].oneOf(lib$1.SUI.SIZES),

    /** A label can appear as a tag. */
    tag: _propTypes["default"].bool
  } ;
  Label.create = (0, lib$1.createShorthandFactory)(Label, function (value) {
    return {
      content: value
    };
  });
});
unwrapExports(Label_1);

var ButtonContent_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _classnames = interopRequireDefault(classnames);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireDefault(React__default);
  /**
   * Used in some Button types, such as `animated`.
   */


  function ButtonContent(props) {
    var children = props.children,
        className = props.className,
        content = props.content,
        hidden = props.hidden,
        visible = props.visible;
    var classes = (0, _classnames["default"])((0, lib$1.useKeyOnly)(visible, 'visible'), (0, lib$1.useKeyOnly)(hidden, 'hidden'), 'content', className);
    var rest = (0, lib$1.getUnhandledProps)(ButtonContent, props);
    var ElementType = (0, lib$1.getElementType)(ButtonContent, props);
    return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
      className: classes
    }), lib$1.childrenUtils.isNil(children) ? content : children);
  }

  ButtonContent.handledProps = ["as", "children", "className", "content", "hidden", "visible"];
  ButtonContent.propTypes =  {
    /** An element type to render as (string or function). */
    as: _propTypes["default"].elementType,

    /** Primary content. */
    children: _propTypes["default"].node,

    /** Additional classes. */
    className: _propTypes["default"].string,

    /** Shorthand for primary content. */
    content: lib$1.customPropTypes.contentShorthand,

    /** Initially hidden, visible on hover. */
    hidden: _propTypes["default"].bool,

    /** Initially visible, hidden on hover. */
    visible: _propTypes["default"].bool
  } ;
  var _default = ButtonContent;
  exports["default"] = _default;
});
unwrapExports(ButtonContent_1);

var ButtonGroup_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _map2 = interopRequireDefault(map_1);

  var _isNil2 = interopRequireDefault(isNil_1);

  var _classnames = interopRequireDefault(classnames);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireDefault(React__default);

  var _Button = interopRequireDefault(Button_1);
  /**
   * Buttons can be grouped.
   */


  function ButtonGroup(props) {
    var attached = props.attached,
        basic = props.basic,
        buttons = props.buttons,
        children = props.children,
        className = props.className,
        color = props.color,
        compact = props.compact,
        content = props.content,
        floated = props.floated,
        fluid = props.fluid,
        icon = props.icon,
        inverted = props.inverted,
        labeled = props.labeled,
        negative = props.negative,
        positive = props.positive,
        primary = props.primary,
        secondary = props.secondary,
        size = props.size,
        toggle = props.toggle,
        vertical = props.vertical,
        widths = props.widths;
    var classes = (0, _classnames["default"])('ui', color, size, (0, lib$1.useKeyOnly)(basic, 'basic'), (0, lib$1.useKeyOnly)(compact, 'compact'), (0, lib$1.useKeyOnly)(fluid, 'fluid'), (0, lib$1.useKeyOnly)(icon, 'icon'), (0, lib$1.useKeyOnly)(inverted, 'inverted'), (0, lib$1.useKeyOnly)(labeled, 'labeled'), (0, lib$1.useKeyOnly)(negative, 'negative'), (0, lib$1.useKeyOnly)(positive, 'positive'), (0, lib$1.useKeyOnly)(primary, 'primary'), (0, lib$1.useKeyOnly)(secondary, 'secondary'), (0, lib$1.useKeyOnly)(toggle, 'toggle'), (0, lib$1.useKeyOnly)(vertical, 'vertical'), (0, lib$1.useKeyOrValueAndKey)(attached, 'attached'), (0, lib$1.useValueAndKey)(floated, 'floated'), (0, lib$1.useWidthProp)(widths), 'buttons', className);
    var rest = (0, lib$1.getUnhandledProps)(ButtonGroup, props);
    var ElementType = (0, lib$1.getElementType)(ButtonGroup, props);

    if ((0, _isNil2["default"])(buttons)) {
      return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
        className: classes
      }), lib$1.childrenUtils.isNil(children) ? content : children);
    }

    return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
      className: classes
    }), (0, _map2["default"])(buttons, function (button) {
      return _Button["default"].create(button);
    }));
  }

  ButtonGroup.handledProps = ["as", "attached", "basic", "buttons", "children", "className", "color", "compact", "content", "floated", "fluid", "icon", "inverted", "labeled", "negative", "positive", "primary", "secondary", "size", "toggle", "vertical", "widths"];
  ButtonGroup.propTypes =  {
    /** An element type to render as (string or function). */
    as: _propTypes["default"].elementType,

    /** Groups can be attached to other content. */
    attached: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['left', 'right', 'top', 'bottom'])]),

    /** Groups can be less pronounced. */
    basic: _propTypes["default"].bool,

    /** Array of shorthand Button values. */
    buttons: lib$1.customPropTypes.collectionShorthand,

    /** Primary content. */
    children: _propTypes["default"].node,

    /** Additional classes. */
    className: _propTypes["default"].string,

    /** Groups can have a shared color. */
    color: _propTypes["default"].oneOf(lib$1.SUI.COLORS),

    /** Groups can reduce their padding to fit into tighter spaces. */
    compact: _propTypes["default"].bool,

    /** Shorthand for primary content. */
    content: lib$1.customPropTypes.contentShorthand,

    /** Groups can be aligned to the left or right of its container. */
    floated: _propTypes["default"].oneOf(lib$1.SUI.FLOATS),

    /** Groups can take the width of their container. */
    fluid: _propTypes["default"].bool,

    /** Groups can be formatted as icons. */
    icon: _propTypes["default"].bool,

    /** Groups can be formatted to appear on dark backgrounds. */
    inverted: _propTypes["default"].bool,

    /** Groups can be formatted as labeled icon buttons. */
    labeled: _propTypes["default"].bool,

    /** Groups can hint towards a negative consequence. */
    negative: _propTypes["default"].bool,

    /** Groups can hint towards a positive consequence. */
    positive: _propTypes["default"].bool,

    /** Groups can be formatted to show different levels of emphasis. */
    primary: _propTypes["default"].bool,

    /** Groups can be formatted to show different levels of emphasis. */
    secondary: _propTypes["default"].bool,

    /** Groups can have different sizes. */
    size: _propTypes["default"].oneOf(lib$1.SUI.SIZES),

    /** Groups can be formatted to toggle on and off. */
    toggle: _propTypes["default"].bool,

    /** Groups can be formatted to appear vertically. */
    vertical: _propTypes["default"].bool,

    /** Groups can have their widths divided evenly. */
    widths: _propTypes["default"].oneOf(lib$1.SUI.WIDTHS)
  } ;
  var _default = ButtonGroup;
  exports["default"] = _default;
});
unwrapExports(ButtonGroup_1);

var ButtonOr_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _classnames = interopRequireDefault(classnames);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireDefault(React__default);
  /**
   * Button groups can contain conditionals.
   */


  function ButtonOr(props) {
    var className = props.className,
        text = props.text;
    var classes = (0, _classnames["default"])('or', className);
    var rest = (0, lib$1.getUnhandledProps)(ButtonOr, props);
    var ElementType = (0, lib$1.getElementType)(ButtonOr, props);
    return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
      className: classes,
      "data-text": text
    }));
  }

  ButtonOr.handledProps = ["as", "className", "text"];
  ButtonOr.propTypes =  {
    /** An element type to render as (string or function). */
    as: _propTypes["default"].elementType,

    /** Additional classes. */
    className: _propTypes["default"].string,

    /** Or buttons can have their text localized, or adjusted by using the text prop. */
    text: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
  } ;
  var _default = ButtonOr;
  exports["default"] = _default;
});
unwrapExports(ButtonOr_1);

var Button_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _toConsumableArray2 = interopRequireDefault(toConsumableArray);

  var _extends2 = interopRequireDefault(_extends_1);

  var _classCallCheck2 = interopRequireDefault(classCallCheck);

  var _createClass2 = interopRequireDefault(createClass);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

  var _getPrototypeOf3 = interopRequireDefault(getPrototypeOf);

  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

  var _inherits2 = interopRequireDefault(inherits);

  var _defineProperty2 = interopRequireDefault(defineProperty);

  var _invoke2 = interopRequireDefault(invoke_1);

  var _isNil2 = interopRequireDefault(isNil_1);

  var _classnames = interopRequireDefault(classnames);

  var _propTypes = interopRequireDefault(propTypes);

  var _react = interopRequireWildcard(React__default);

  var _Icon = interopRequireDefault(Icon_1);

  var _Label = interopRequireDefault(Label_1);

  var _ButtonContent = interopRequireDefault(ButtonContent_1);

  var _ButtonGroup = interopRequireDefault(ButtonGroup_1);

  var _ButtonOr = interopRequireDefault(ButtonOr_1);
  /**
   * A Button indicates a possible user action.
   * @see Form
   * @see Icon
   * @see Label
   */


  var Button =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(Button, _Component);

    function Button() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, Button);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ref", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "computeElementType", function () {
        var _this$props = _this.props,
            attached = _this$props.attached,
            label = _this$props.label;
        if (!(0, _isNil2["default"])(attached) || !(0, _isNil2["default"])(label)) return 'div';
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "computeTabIndex", function (ElementType) {
        var _this$props2 = _this.props,
            disabled = _this$props2.disabled,
            tabIndex = _this$props2.tabIndex;
        if (!(0, _isNil2["default"])(tabIndex)) return tabIndex;
        if (disabled) return -1;
        if (ElementType === 'div') return 0;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "focus", function () {
        return (0, _invoke2["default"])(_this.ref.current, 'focus');
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (e) {
        var disabled = _this.props.disabled;

        if (disabled) {
          e.preventDefault();
          return;
        }

        (0, _invoke2["default"])(_this.props, 'onClick', e, _this.props);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hasIconClass", function () {
        var _this$props3 = _this.props,
            labelPosition = _this$props3.labelPosition,
            children = _this$props3.children,
            content = _this$props3.content,
            icon = _this$props3.icon;
        if (icon === true) return true;
        return icon && (labelPosition || lib$1.childrenUtils.isNil(children) && (0, _isNil2["default"])(content));
      });
      return _this;
    }

    (0, _createClass2["default"])(Button, [{
      key: "computeButtonAriaRole",
      value: function computeButtonAriaRole(ElementType) {
        var role = this.props.role;
        if (!(0, _isNil2["default"])(role)) return role;
        if (ElementType !== 'button') return 'button';
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props4 = this.props,
            active = _this$props4.active,
            animated = _this$props4.animated,
            attached = _this$props4.attached,
            basic = _this$props4.basic,
            children = _this$props4.children,
            circular = _this$props4.circular,
            className = _this$props4.className,
            color = _this$props4.color,
            compact = _this$props4.compact,
            content = _this$props4.content,
            disabled = _this$props4.disabled,
            floated = _this$props4.floated,
            fluid = _this$props4.fluid,
            icon = _this$props4.icon,
            inverted = _this$props4.inverted,
            label = _this$props4.label,
            labelPosition = _this$props4.labelPosition,
            loading = _this$props4.loading,
            negative = _this$props4.negative,
            positive = _this$props4.positive,
            primary = _this$props4.primary,
            secondary = _this$props4.secondary,
            size = _this$props4.size,
            toggle = _this$props4.toggle;
        var baseClasses = (0, _classnames["default"])(color, size, (0, lib$1.useKeyOnly)(active, 'active'), (0, lib$1.useKeyOnly)(basic, 'basic'), (0, lib$1.useKeyOnly)(circular, 'circular'), (0, lib$1.useKeyOnly)(compact, 'compact'), (0, lib$1.useKeyOnly)(fluid, 'fluid'), (0, lib$1.useKeyOnly)(this.hasIconClass(), 'icon'), (0, lib$1.useKeyOnly)(inverted, 'inverted'), (0, lib$1.useKeyOnly)(loading, 'loading'), (0, lib$1.useKeyOnly)(negative, 'negative'), (0, lib$1.useKeyOnly)(positive, 'positive'), (0, lib$1.useKeyOnly)(primary, 'primary'), (0, lib$1.useKeyOnly)(secondary, 'secondary'), (0, lib$1.useKeyOnly)(toggle, 'toggle'), (0, lib$1.useKeyOrValueAndKey)(animated, 'animated'), (0, lib$1.useKeyOrValueAndKey)(attached, 'attached'));
        var labeledClasses = (0, _classnames["default"])((0, lib$1.useKeyOrValueAndKey)(labelPosition || !!label, 'labeled'));
        var wrapperClasses = (0, _classnames["default"])((0, lib$1.useKeyOnly)(disabled, 'disabled'), (0, lib$1.useValueAndKey)(floated, 'floated'));
        var rest = (0, lib$1.getUnhandledProps)(Button, this.props);
        var ElementType = (0, lib$1.getElementType)(Button, this.props, this.computeElementType);
        var tabIndex = this.computeTabIndex(ElementType);

        if (!(0, _isNil2["default"])(label)) {
          var buttonClasses = (0, _classnames["default"])('ui', baseClasses, 'button', className);
          var containerClasses = (0, _classnames["default"])('ui', labeledClasses, 'button', className, wrapperClasses);

          var labelElement = _Label["default"].create(label, {
            defaultProps: {
              basic: true,
              pointing: labelPosition === 'left' ? 'right' : 'left'
            },
            autoGenerateKey: false
          });

          return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
            className: containerClasses,
            onClick: this.handleClick
          }), labelPosition === 'left' && labelElement, _react["default"].createElement(es.Ref, {
            innerRef: this.ref
          }, _react["default"].createElement("button", {
            className: buttonClasses,
            "aria-pressed": toggle ? !!active : undefined,
            disabled: disabled,
            tabIndex: tabIndex
          }, _Icon["default"].create(icon, {
            autoGenerateKey: false
          }), " ", content)), (labelPosition === 'right' || !labelPosition) && labelElement);
        }

        var classes = (0, _classnames["default"])('ui', baseClasses, wrapperClasses, labeledClasses, 'button', className);
        var hasChildren = !lib$1.childrenUtils.isNil(children);
        var role = this.computeButtonAriaRole(ElementType);
        return _react["default"].createElement(es.Ref, {
          innerRef: this.ref
        }, _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
          className: classes,
          "aria-pressed": toggle ? !!active : undefined,
          disabled: disabled && ElementType === 'button' || undefined,
          onClick: this.handleClick,
          role: role,
          tabIndex: tabIndex
        }), hasChildren && children, !hasChildren && _Icon["default"].create(icon, {
          autoGenerateKey: false
        }), !hasChildren && content));
      }
    }]);
    return Button;
  }(_react.Component);

  (0, _defineProperty2["default"])(Button, "defaultProps", {
    as: 'button'
  });
  (0, _defineProperty2["default"])(Button, "Content", _ButtonContent["default"]);
  (0, _defineProperty2["default"])(Button, "Group", _ButtonGroup["default"]);
  (0, _defineProperty2["default"])(Button, "Or", _ButtonOr["default"]);
  (0, _defineProperty2["default"])(Button, "handledProps", ["active", "animated", "as", "attached", "basic", "children", "circular", "className", "color", "compact", "content", "disabled", "floated", "fluid", "icon", "inverted", "label", "labelPosition", "loading", "negative", "onClick", "positive", "primary", "role", "secondary", "size", "tabIndex", "toggle"]);
  Button.propTypes =  {
    /** An element type to render as (string or function). */
    as: _propTypes["default"].elementType,

    /** A button can show it is currently the active user selection. */
    active: _propTypes["default"].bool,

    /** A button can animate to show hidden content. */
    animated: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['fade', 'vertical'])]),

    /** A button can be attached to other content. */
    attached: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['left', 'right', 'top', 'bottom'])]),

    /** A basic button is less pronounced. */
    basic: _propTypes["default"].bool,

    /** Primary content. */
    children: lib$1.customPropTypes.every([_propTypes["default"].node, lib$1.customPropTypes.disallow(['label']), lib$1.customPropTypes.givenProps({
      icon: _propTypes["default"].oneOfType([_propTypes["default"].string.isRequired, _propTypes["default"].object.isRequired, _propTypes["default"].element.isRequired])
    }, lib$1.customPropTypes.disallow(['icon']))]),

    /** A button can be circular. */
    circular: _propTypes["default"].bool,

    /** Additional classes. */
    className: _propTypes["default"].string,

    /** A button can have different colors */
    color: _propTypes["default"].oneOf([].concat((0, _toConsumableArray2["default"])(lib$1.SUI.COLORS), ['facebook', 'google plus', 'instagram', 'linkedin', 'twitter', 'vk', 'youtube'])),

    /** A button can reduce its padding to fit into tighter spaces. */
    compact: _propTypes["default"].bool,

    /** Shorthand for primary content. */
    content: lib$1.customPropTypes.contentShorthand,

    /** A button can show it is currently unable to be interacted with. */
    disabled: _propTypes["default"].bool,

    /** A button can be aligned to the left or right of its container. */
    floated: _propTypes["default"].oneOf(lib$1.SUI.FLOATS),

    /** A button can take the width of its container. */
    fluid: _propTypes["default"].bool,

    /** Add an Icon by name, props object, or pass an <Icon />. */
    icon: lib$1.customPropTypes.some([_propTypes["default"].bool, _propTypes["default"].string, _propTypes["default"].object, _propTypes["default"].element]),

    /** A button can be formatted to appear on dark backgrounds. */
    inverted: _propTypes["default"].bool,

    /** Add a Label by text, props object, or pass a <Label />. */
    label: lib$1.customPropTypes.some([_propTypes["default"].string, _propTypes["default"].object, _propTypes["default"].element]),

    /** A labeled button can format a Label or Icon to appear on the left or right. */
    labelPosition: _propTypes["default"].oneOf(['right', 'left']),

    /** A button can show a loading indicator. */
    loading: _propTypes["default"].bool,

    /** A button can hint towards a negative consequence. */
    negative: _propTypes["default"].bool,

    /**
     * Called after user's click.
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: _propTypes["default"].func,

    /** A button can hint towards a positive consequence. */
    positive: _propTypes["default"].bool,

    /** A button can be formatted to show different levels of emphasis. */
    primary: _propTypes["default"].bool,

    /** The role of the HTML element. */
    role: _propTypes["default"].string,

    /** A button can be formatted to show different levels of emphasis. */
    secondary: _propTypes["default"].bool,

    /** A button can have different sizes. */
    size: _propTypes["default"].oneOf(lib$1.SUI.SIZES),

    /** A button can receive focus. */
    tabIndex: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

    /** A button can be formatted to toggle on and off. */
    toggle: _propTypes["default"].bool
  } ;
  Button.create = (0, lib$1.createShorthandFactory)(Button, function (value) {
    return {
      content: value
    };
  });
  var _default = Button;
  exports["default"] = _default;
});
unwrapExports(Button_1);

var Button = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _Button["default"];
    }
  });

  var _Button = interopRequireDefault(Button_1);
});
var ButtonSUI = unwrapExports(Button);

/** @jsx jsx */

var baseStyles = function baseStyles(theme) {
  return (
    /*#__PURE__*/

    /*#__PURE__*/
    css("&&&{& input{background:var(--main-primary-dark);}&:hover{background-color:var(--main-primary-dark);}color:var(--main-white);border:0;box-shadow:1px 1px 10px rgba(0,0,0,0.2);transition:all ease-in-out 0.2s;font-weight:bold;background-color:", theme.colors.primary, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLK0IiLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uU1VJIGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdC9kaXN0L2NvbW1vbmpzL2VsZW1lbnRzL0J1dHRvblwiO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gdGhlbWUgPT4gY3NzYFxuICAmJiYge1xuICAgICYgaW5wdXQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1wcmltYXJ5LWRhcmspO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tcHJpbWFyeS1kYXJrKTtcbiAgICB9XG4gICAgY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjJzO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICB9XG5gO1xuXG5jb25zdCBCdXR0b24gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIG9uQ2xpY2ssIGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uU1VJIG9uQ2xpY2s9e29uQ2xpY2t9IGNzcz17YmFzZVN0eWxlc30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQnV0dG9uU1VJPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19 */"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRSSIsImZpbGUiOiJidXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b25TVUkgZnJvbSBcInNlbWFudGljLXVpLXJlYWN0L2Rpc3QvY29tbW9uanMvZWxlbWVudHMvQnV0dG9uXCI7XG5cbnZhciBiYXNlU3R5bGVzID0gZnVuY3Rpb24gYmFzZVN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4gKFxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBjc3MoXCImJiZ7JiBpbnB1dHtiYWNrZ3JvdW5kOnZhcigtLW1haW4tcHJpbWFyeS1kYXJrKTt9Jjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1haW4tcHJpbWFyeS1kYXJrKTt9Y29sb3I6dmFyKC0tbWFpbi13aGl0ZSk7Ym9yZGVyOjA7Ym94LXNoYWRvdzoxcHggMXB4IDEwcHggcmdiYSgwLDAsMCwwLjIpO3RyYW5zaXRpb246YWxsIGVhc2UtaW4tb3V0IDAuMnM7Zm9udC13ZWlnaHQ6Ym9sZDtiYWNrZ3JvdW5kLWNvbG9yOlwiLCB0aGVtZS5jb2xvcnMucHJpbWFyeSwgXCI7fVwiICsgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltSjFkSFJ2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkxLMElpTENKbWFXeGxJam9pWW5WMGRHOXVMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FJRUJxYzNnZ2FuTjRJQ292WEc1cGJYQnZjblFnZXlCcWMzZ3NJR056Y3lCOUlHWnliMjBnWENKQVpXMXZkR2x2Ymk5amIzSmxYQ0k3WEc1cGJYQnZjblFnVW1WaFkzUWdabkp2YlNCY0luSmxZV04wWENJN1hHNXBiWEJ2Y25RZ1FuVjBkRzl1VTFWSklHWnliMjBnWENKelpXMWhiblJwWXkxMWFTMXlaV0ZqZEM5a2FYTjBMMk52YlcxdmJtcHpMMlZzWlcxbGJuUnpMMEoxZEhSdmJsd2lPMXh1WEc1amIyNXpkQ0JpWVhObFUzUjViR1Z6SUQwZ2RHaGxiV1VnUFQ0Z1kzTnpZRnh1SUNBbUppWWdlMXh1SUNBZ0lDWWdhVzV3ZFhRZ2UxeHVJQ0FnSUNBZ1ltRmphMmR5YjNWdVpEb2dkbUZ5S0MwdGJXRnBiaTF3Y21sdFlYSjVMV1JoY21zcE8xeHVJQ0FnSUgxY2JpQWdJQ0FtT21odmRtVnlJSHRjYmlBZ0lDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJSFpoY2lndExXMWhhVzR0Y0hKcGJXRnllUzFrWVhKcktUdGNiaUFnSUNCOVhHNGdJQ0FnWTI5c2IzSTZJSFpoY2lndExXMWhhVzR0ZDJocGRHVXBPMXh1SUNBZ0lHSnZjbVJsY2pvZ01EdGNiaUFnSUNCaWIzZ3RjMmhoWkc5M09pQXhjSGdnTVhCNElERXdjSGdnY21kaVlTZ3dMQ0F3TENBd0xDQXdMaklwTzF4dUlDQWdJSFJ5WVc1emFYUnBiMjQ2SUdGc2JDQmxZWE5sTFdsdUxXOTFkQ0F3TGpKek8xeHVJQ0FnSUdadmJuUXRkMlZwWjJoME9pQmliMnhrTzF4dUlDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ1I3ZEdobGJXVXVZMjlzYjNKekxuQnlhVzFoY25sOU8xeHVJQ0I5WEc1Z08xeHVYRzVqYjI1emRDQkNkWFIwYjI0Z1BTQndjbTl3Y3lBOVBpQjdYRzRnSUdOdmJuTjBJSHNnWTJocGJHUnlaVzRzSUc5dVEyeHBZMnNzSUdOc1lYTnpUbUZ0WlNCOUlEMGdjSEp2Y0hNN1hHNWNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQThRblYwZEc5dVUxVkpJRzl1UTJ4cFkyczllMjl1UTJ4cFkydDlJR056Y3oxN1ltRnpaVk4wZVd4bGMzMGdZMnhoYzNOT1lXMWxQWHRqYkdGemMwNWhiV1Y5UGx4dUlDQWdJQ0FnZTJOb2FXeGtjbVZ1ZlZ4dUlDQWdJRHd2UW5WMGRHOXVVMVZKUGx4dUlDQXBPMXh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1FuVjBkRzl1TzF4dUlsMTkgKi9cIikpXG4gICk7XG59O1xuXG52YXIgQnV0dG9uID0gZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gIHJldHVybiBqc3goQnV0dG9uU1VJLCB7XG4gICAgb25DbGljazogb25DbGljayxcbiAgICBjc3M6IGJhc2VTdHlsZXMsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgfSwgY2hpbGRyZW4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyJdfQ== */")
  );
};

var Button$1 = function Button(props) {
  var children = props.children,
      onClick = props.onClick,
      className = props.className;
  return jsx(ButtonSUI, {
    onClick: onClick,
    css: baseStyles,
    className: className
  }, children);
};

var components = {
  Button: Button$1
};

export default components;
