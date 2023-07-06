"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _mysql = _interopRequireDefault(require("mysql"));
var _config = _interopRequireDefault(require("../config"));

var connection = _mysql["default"].createPool(_config["default"].mysql);var _default =

connection;exports["default"] = _default;
//# sourceMappingURL=index.js.map