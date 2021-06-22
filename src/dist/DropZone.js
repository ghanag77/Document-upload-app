'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./DropZone.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropZone = function DropZone() {
    return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
            'div',
            { className: 'drop-container' },
            _react2.default.createElement(
                'div',
                { className: 'drop-message' },
                _react2.default.createElement('div', { className: 'upload-icon' }),
                'Drag & Drop files here or click to upload'
            )
        )
    );
};
exports.default = DropZone;