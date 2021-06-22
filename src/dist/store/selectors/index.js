'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uploadDocumentResponseSelector = exports.receivedDocumentsResponseSelector = undefined;

var _reselect = require('reselect');

var receivedDocumentsResponse = function receivedDocumentsResponse(state) {
    return state ? state.receivedDocumentsResponse : state;
};
var uploadDocumentResponse = function uploadDocumentResponse(state) {
    return state ? state.uploadDocumentResponse : state;
};

var receivedDocumentsResponseSelector = exports.receivedDocumentsResponseSelector = (0, _reselect.createSelector)([receivedDocumentsResponse], function (receivedDocumentsResp) {
    var finalResult = receivedDocumentsResp;

    return finalResult;
});

var uploadDocumentResponseSelector = exports.uploadDocumentResponseSelector = (0, _reselect.createSelector)([uploadDocumentResponse], function (res) {
    var finalResult = res;
    return finalResult;
});