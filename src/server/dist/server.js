"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _routes = _interopRequireDefault(require("./routes"));
var _config = _interopRequireDefault(require("./config"));
var _errorHandler = require("./middlewares/errorHandler");
var _path = require("path");

var app = (0, _express["default"])();

app.use(_express["default"].json());

app.use((0, _cors["default"])());

app.use((0, _morgan["default"])("dev"));

//app.use(express.static(join(__dirname, "../client/build")));

app.use(_routes["default"]);

app.use(function (req, res, next) {
  try {
    res.sendFile((0, _path.join)(__dirname, "../client/build/index.html"));
  } catch (error) {
    next(error);
  }
});

app.use(_errorHandler.errorHandler);

app.listen(_config["default"].port || 8080, function () {return (
    console.log("Server listening on port ".concat(_config["default"].port, "...")));});
//# sourceMappingURL=server.js.map