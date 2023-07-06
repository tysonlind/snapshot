"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _express = _interopRequireDefault(require("express"));
var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

var router = _express["default"].Router();

router.get("/", function (req, res, next) {
  var query = req.query.query;
  (0, _isomorphicFetch["default"])("https://api.unsplash.com/search/photos?query=".concat(query, "&page=1&per_page=16&client_id=").concat(process.env.API_KEY)).
  then(function (res) {return res.json();}).
  then(function (data) {
    res.send(data.results);
  });
});

router.get("/:id", function (req, res, next) {
  var id = req.params.id;
  (0, _isomorphicFetch["default"])("https://api.unsplash.com/photos/".concat(id, "?client_id=").concat(process.env.API_KEY)).
  then(function (res) {return res.json();}).
  then(function (data) {return res.send(data);});
});var _default =



router;exports["default"] = _default;
//# sourceMappingURL=photoSearchRouter.js.map