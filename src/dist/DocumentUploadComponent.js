'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _receivedDocuments = require('./receivedDocuments/receivedDocuments');

var _receivedDocuments2 = _interopRequireDefault(_receivedDocuments);

require('./App.css');

var _reactRedux = require('react-redux');

var _items = require('./store/action/items');

var _index = require('./store/selectors/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DocumentUploadComponent = function (_Component) {
  _inherits(DocumentUploadComponent, _Component);

  function DocumentUploadComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DocumentUploadComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DocumentUploadComponent.__proto__ || Object.getPrototypeOf(DocumentUploadComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      receivedDocumentsResponse: null,
      uploadDocumentResponse: null,
      documentSubType: "",
      identifier: ""

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DocumentUploadComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.shipmentId) {
        this.props.getReceivedDocuments(this.props.shipmentId);
        this.setState({ documentSubType: "SHIPMENT" });
        this.setState({ identifier: this.props.shipmentId });
      } else if (this.props.loadId) {
        this.props.getReceivedDocuments(this.props.loadId);
        this.setState({ documentSubType: "LOAD" });
        this.setState({ identifier: this.props.loadId });
      } else {
        this.props.getReceivedDocuments("c6cf8ad2-fb43-4e75-b3d8-e6b7aaeef8f5");
        this.setState({ documentSubType: "LOAD" });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var receivedDocumentsResponse = this.props.receivedDocumentsResponse && this.props.receivedDocumentsResponse.documentsMetadata ? this.props.receivedDocumentsResponse.documentsMetadata : [];
      console.log(receivedDocumentsResponse);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(_receivedDocuments2.default, { recievedDocumentsData: receivedDocumentsResponse, documentSubType: this.state.documentSubType, identifier: this.state.identifier })
        )
      );
    }
  }]);

  return DocumentUploadComponent;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {

    getReceivedDocuments: function getReceivedDocuments(shipmentId) {
      return dispatch({
        type: _items.Types.GET_RECEIVED_DOCUMENETS,
        payload: { shipmentId: shipmentId }
      });
    },

    uploadDocument: function uploadDocument(uploadData) {
      return dispatch({ type: _items.Types.UPLOAD_DOCUMENT, payload: { uploadData: uploadData } });
    }

  };
};
function mapStateToProps(state) {
  return {
    receivedDocumentsResponse: (0, _index.receivedDocumentsResponseSelector)(state),
    uploadDocumentResponse: (0, _index.uploadDocumentResponseSelector)(state)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DocumentUploadComponent);