"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _index = _interopRequireDefault(require("./index"));

var query = function query(qryStr, values) {
  return new Promise(function (resolve, reject) {
    _index["default"].query(qryStr, values, function (err, results) {
      if (err) reject(err);
      resolve(results);
    });
  });
};var _default =

query;exports["default"] = _default;
//# sourceMappingURL=utils.js.map