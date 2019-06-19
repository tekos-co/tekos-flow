"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = require("babel-runtime/core-js/reflect/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _setPrototypeOf = require("babel-runtime/core-js/reflect/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _construct = require("babel-runtime/core-js/reflect/construct");

var _construct2 = _interopRequireDefault(_construct);

exports.InvalidStoreError = InvalidStoreError;
exports.InvalidCryptoStoreError = InvalidCryptoStoreError;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// can't just do InvalidStoreError extends Error
// because of http://babeljs.io/docs/usage/caveats/#classes
function InvalidStoreError(reason, value) {
  var message = "Store is invalid because " + reason + ", " + "please stop the client, delete all data and start the client again";
  var instance = (0, _construct2.default)(Error, [message]);
  (0, _setPrototypeOf2.default)(instance, (0, _getPrototypeOf2.default)(this));
  instance.reason = reason;
  instance.value = value;
  return instance;
}

InvalidStoreError.TOGGLED_LAZY_LOADING = "TOGGLED_LAZY_LOADING";

InvalidStoreError.prototype = (0, _create2.default)(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
(0, _setPrototypeOf2.default)(InvalidStoreError, Error);

function InvalidCryptoStoreError(reason) {
  var message = "Crypto store is invalid because " + reason + ", " + "please stop the client, delete all data and start the client again";
  var instance = (0, _construct2.default)(Error, [message]);
  (0, _setPrototypeOf2.default)(instance, (0, _getPrototypeOf2.default)(this));
  instance.reason = reason;
  instance.name = 'InvalidCryptoStoreError';
  return instance;
}

InvalidCryptoStoreError.TOO_NEW = "TOO_NEW";

InvalidCryptoStoreError.prototype = (0, _create2.default)(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
(0, _setPrototypeOf2.default)(InvalidCryptoStoreError, Error);
//# sourceMappingURL=errors.js.map