"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**** Action Type */
var Types = exports.Types = {
    GET_RECEIVED_DOCUMENETS: "GET_RECEIVED_DOCUMENETS",
    RECEIVED_DOCUMENETS_RESPONSE: "RECEIVED_DOCUMENETS_RESPONSE",
    UPLOAD_DOCUMENT: "UPLOAD_DOCUMENT",
    UPLOAD_DOCUMENT_RESPONSE: "UPLOAD_DOCUMENT_RESPONSE"
};

var getReceivedDocuments = exports.getReceivedDocuments = function getReceivedDocuments(documentInfo) {
    return {
        type: Types.GET_RECEIVED_DOCUMENETS,
        payload: documentInfo
    };
};

var uploadDocument = exports.uploadDocument = function uploadDocument(uploadData) {
    return {
        type: Types.UPLOAD_DOCUMENT,
        payload: uploadData
    };
};