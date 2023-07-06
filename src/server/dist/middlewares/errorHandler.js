"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.errorHandler = void 0;var errorHandler = function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).json({
    name: err.name || "Unknown error",
    msg: err.message || "An error occurred on the server." });

};exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map