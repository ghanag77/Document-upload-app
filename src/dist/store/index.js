"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("redux");

var _reduxSaga = require("redux-saga");

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducers = require("./reducers");

var _reducers2 = _interopRequireDefault(_reducers);

var _Sagas = require("./Sagas");

var _Sagas2 = _interopRequireDefault(_Sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

var sagaMiddleware = (0, _reduxSaga2.default)();

var store = (0, _redux.createStore)(_reducers2.default, composeEnhancer((0, _redux.applyMiddleware)(sagaMiddleware)));

sagaMiddleware.run(_Sagas2.default);

exports.default = store;