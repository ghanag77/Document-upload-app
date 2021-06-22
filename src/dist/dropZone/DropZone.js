"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./DropZone.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dragOver = function dragOver(e) {
  e.preventDefault();
};

var dragEnter = function dragEnter(e) {
  e.preventDefault();
};

var dragLeave = function dragLeave(e) {
  e.preventDefault();
};

var DropZone = function DropZone(props) {
  var fileDrop = props.fileDrop;
  return _react2.default.createElement(
    "div",
    { className: "container" },
    _react2.default.createElement(
      "div",
      {
        className: "drop-container",
        onDragOver: dragOver,
        onDragEnter: dragEnter,
        onDragLeave: dragLeave,
        onDrop: fileDrop
      },
      _react2.default.createElement(
        "div",
        { className: "drop-message" },
        "Drag & Drop"
      )
    )
  );
};
exports.default = DropZone;