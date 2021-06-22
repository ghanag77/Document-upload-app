"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _items = require("../action/items");

var intialState = {
  receivedDocumentsResponse: [],
  uploadDocumentResponse: []
};

var documentsUploadReducer = function documentsUploadReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intialState;
  var action = arguments[1];

  switch (action.type) {
    case _items.Types.RECEIVED_DOCUMENETS_RESPONSE:
      {
        return _extends({}, state, {
          receivedDocumentsResponse: _extends({}, action.response)
        });
      }

    case _items.Types.UPLOAD_DOCUMENT_RESPONSE:
      return _extends({}, state, {
        uploadDocumentResponse: _extends({}, action.response)
      });

    default:
      return state;
  }
};

exports.default = documentsUploadReducer;