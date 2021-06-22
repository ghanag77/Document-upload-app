"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changeDateFormat = exports.BASE_HEADER = exports.constructbaseURL = exports.RECEIVED_DOCUMENTS_ENDPOINT = exports.UPLOAD_DOCUMENT_ENDPOINT = exports.CONTEXT_PATH = exports.KONG_PROD_URL = exports.KONG_STG_URL = exports.KONG_DEV_URL = exports.baseURL = undefined;

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localMode = true;
var baseURL = exports.baseURL = localMode ? "https://api.dev.trimble-transportation.com/api/v1/" : "";

var KONG_DEV_URL = exports.KONG_DEV_URL = 'https://api.dev.trimble-transportation.com';
var KONG_STG_URL = exports.KONG_STG_URL = "https://api.stg.trimble-transportation.com";
var KONG_PROD_URL = exports.KONG_PROD_URL = "https://api.trimble-transportation.com";

var CONTEXT_PATH = exports.CONTEXT_PATH = "/api/v1/document-management/";
var UPLOAD_DOCUMENT_ENDPOINT = exports.UPLOAD_DOCUMENT_ENDPOINT = "externalFile/";
var RECEIVED_DOCUMENTS_ENDPOINT = exports.RECEIVED_DOCUMENTS_ENDPOINT = 'docsync/getMetadataById/';

var constructbaseURL = exports.constructbaseURL = function constructbaseURL() {

    if (window.location.hostname.includes("dev") > 0 || window.location.hostname.includes("localhost") > 0) {
        return KONG_DEV_URL;
    } else if (window.location.hostname.includes("stg") > 0) {
        return KONG_STG_URL;
    } else {
        return KONG_PROD_URL;
    }
};

var accessToken = sessionStorage.getItem("access-token");

var BASE_HEADER = exports.BASE_HEADER = {
    headers: {
        Authorization: "Bearer " + accessToken
    }
};

var changeDateFormat = exports.changeDateFormat = function changeDateFormat(inputDate) {
    var newDate = inputDate.slice(0, 10);
    return (0, _moment2.default)(newDate).format("MM/DD/YYYY");
};