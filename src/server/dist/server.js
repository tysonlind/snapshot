"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _routes = _interopRequireDefault(require("./routes"));

var _config = _interopRequireDefault(require("./config"));
var _errorHandler = require("./middlewares/errorHandler");
var _path = require("path");

var app = (0, _express["default"])();

/**
 * Parses incoming request body as json if header indicates application/json
 */
app.use(_express["default"].json());

/**
 * Enables incoming requests from cross origin domains
 */
app.use((0, _cors["default"])());

/**
 * Logs incoming request information to the dev console
 */
app.use((0, _morgan["default"])("dev"));

/**
 * Directs incoming static asset requests to the public folder
 */
//app.use(express.static(join(__dirname, "../client/build")));

/**
 * Directs all routes starting with /api to the top level api express router
 */
app.use(_routes["default"]);

/**
 * Sends the react app index.html for page requests
 * Only needed in production when you are not using the react dev server
 */
app.use(function (req, res, next) {
  try {
    res.sendFile((0, _path.join)(__dirname, "../client/build/index.html"));
  } catch (error) {
    next(error);
  }
});

/**
 * Error handler middleware
 */
app.use(_errorHandler.errorHandler);

/**
 * Bind the app to a specified port
 * You can access your app at http://localhost:<port>
 */
app.listen(_config["default"].port || 8080, function () {return (
    console.log("Server listening on port ".concat(_config["default"].port, "...")));});
//# sourceMappingURL=server.js.map