'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.postService = exports.GetService = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = _axios2.default.create({
    baseURL: (0, _constants.constructbaseURL)()
});

var GetService = exports.GetService = function GetService(searchParam) {
    return api.get(searchParam, _constants.BASE_HEADER);
};

var postService = exports.postService = function postService(request_uri, request_payload) {
    return api.post(request_uri, request_payload, _constants.BASE_HEADER);
};