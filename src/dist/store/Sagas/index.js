'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rootSaga;

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _effects = require('redux-saga/effects');

var _httpService = require('../../services/httpService');

var _items = require('../action/items');

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regeneratorRuntime2.default.mark(getReceivedDocuments),
    _marked2 = /*#__PURE__*/_regeneratorRuntime2.default.mark(uploadDocument),
    _marked3 = /*#__PURE__*/_regeneratorRuntime2.default.mark(rootSaga);

function getReceivedDocuments(action) {
    var queryParam, endPoint, response;
    return _regeneratorRuntime2.default.wrap(function getReceivedDocuments$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    queryParam = action.payload.shipmentId;
                    endPoint = _constants.CONTEXT_PATH + _constants.RECEIVED_DOCUMENTS_ENDPOINT + queryParam;
                    _context.next = 5;
                    return (0, _effects.call)(function () {
                        return (0, _httpService.GetService)(endPoint);
                    });

                case 5:
                    response = _context.sent;
                    _context.next = 8;
                    return (0, _effects.put)({ type: _items.Types.RECEIVED_DOCUMENETS_RESPONSE, response: response.data });

                case 8:
                    _context.next = 13;
                    break;

                case 10:
                    _context.prev = 10;
                    _context.t0 = _context['catch'](0);

                    console.log(_context.t0);

                case 13:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[0, 10]]);
}

function uploadDocument(action) {
    var request_payload, request_uri, response, info;
    return _regeneratorRuntime2.default.wrap(function uploadDocument$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.prev = 0;
                    request_payload = action.payload.uploadData;
                    request_uri = _constants.CONTEXT_PATH + _constants.UPLOAD_DOCUMENT_ENDPOINT;
                    _context2.next = 5;
                    return (0, _effects.call)(function () {
                        return (0, _httpService.postService)(request_uri, request_payload);
                    });

                case 5:
                    response = _context2.sent;
                    _context2.next = 8;
                    return (0, _effects.put)({ type: _items.Types.UPLOAD_DOCUMENT_RESPONSE, response: response.data });

                case 8:
                    info = action.payload.documentInfo;
                    _context2.next = 11;
                    return (0, _effects.put)({ type: _items.Types.GET_RECEIVED_DOCUMENETS, payload: { info: info } });

                case 11:
                    _context2.next = 16;
                    break;

                case 13:
                    _context2.prev = 13;
                    _context2.t0 = _context2['catch'](0);

                    console.log(_context2.t0);

                case 16:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this, [[0, 13]]);
}

function rootSaga() {
    return _regeneratorRuntime2.default.wrap(function rootSaga$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _context3.next = 2;
                    return (0, _effects.takeLatest)("GET_RECEIVED_DOCUMENETS", getReceivedDocuments);

                case 2:
                    _context3.next = 4;
                    return (0, _effects.takeLatest)("UPLOAD_DOCUMENT", uploadDocument);

                case 4:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked3, this);
}