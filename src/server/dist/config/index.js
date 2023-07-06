"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _dotenv = _interopRequireDefault(require("dotenv"));

// ensures that env variables are loaded
var envFound = _dotenv["default"].config();

if (!envFound) {
  throw new Error("Couldn't find .env!");
}

// exports env variables for use
var _default = {
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA },

  port: parseInt(process.env.PORT) };exports["default"] = _default;
//# sourceMappingURL=index.js.map