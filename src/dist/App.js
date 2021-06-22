"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Dialog = require("@material-ui/core/Dialog");

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogContentText = require("@material-ui/core/DialogContentText");

var _DialogContentText2 = _interopRequireDefault(_DialogContentText);

var _DialogContent = require("@material-ui/core/DialogContent");

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DocumentUploadComponent = require("./DocumentUploadComponent");

var _DocumentUploadComponent2 = _interopRequireDefault(_DocumentUploadComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import DialogActions from "@material-ui/core/DialogActions";
function App(props) {

  return _react2.default.createElement(
    "div",
    { stlye: {} },
    _react2.default.createElement(
      _Dialog2.default,
      { maxWidth: "md", open: true },
      _react2.default.createElement(
        _DialogContent2.default,
        null,
        _react2.default.createElement(
          _DialogContentText2.default,
          null,
          _react2.default.createElement(_DocumentUploadComponent2.default, props)
        )
      )
    )
  );
}
// import Button from "@material-ui/core/Button";