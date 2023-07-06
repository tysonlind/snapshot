"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _express = _interopRequireDefault(require("express"));
var _photoSearchRouter = _interopRequireDefault(require("./photoSearchRouter"));

var router = _express["default"].Router();

router.get("/test", function (req, res, next) {
  res.send("Hello World!");
});

router.use(_photoSearchRouter["default"]);var _default =

router;exports["default"] = _default;
//# sourceMappingURL=index.js.map