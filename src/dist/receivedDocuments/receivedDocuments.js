"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./receivedDocuments.css");

var _DropZone = require("../dropZone/DropZone");

var _DropZone2 = _interopRequireDefault(_DropZone);

var _formData = require("form-data");

var _formData2 = _interopRequireDefault(_formData);

var _reactRedux = require("react-redux");

var _items = require("../store/action/items");

var _index = require("../store/selectors/index");

var _index2 = require("../constants/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReceivedDocuments = function ReceivedDocuments(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isUploadclicked = _useState2[0],
      setIsUploadclicked = _useState2[1];

  var radioHandler = function radioHandler(event) {
    if (event.target.value === "upload document") setIsUploadclicked(true);else {
      setIsUploadclicked(false);
    }
  };

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      docType = _useState4[0],
      setDocType = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      uploadedFile = _useState6[0],
      setUploadedFile = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      comments = _useState8[0],
      setComments = _useState8[1];

  var _useState9 = (0, _react.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      docNumber = _useState10[0],
      setdocNumber = _useState10[1];

  var _useState11 = (0, _react.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      uploadStatus = _useState12[0],
      setUploadStatus = _useState12[1];

  var _useState13 = (0, _react.useState)(""),
      _useState14 = _slicedToArray(_useState13, 2),
      format = _useState14[0],
      setFormat = _useState14[1];

  var handleChange = function handleChange(event) {
    var data = event.target.name;
    console.log(event.target);
    switch (data) {
      case "docType":
        setDocType(event.target.value);
        break;

      case "uploadedFile":
        setUploadedFile(event.target.files[0]);
        setUploadStatus(event.target.files[0].name);
        setFormat(event.target.files[0].name.substring(event.target.files[0].name.lastIndexOf(".")));
        break;

      case "comments":
        setComments(event.target.value);
        break;
      case "docNumber":
        setdocNumber(event.target.value);
        break;

      default:
        break;
    }
  };
  var fileDrop = function fileDrop(e) {
    e.preventDefault();
    var files = e.dataTransfer.files;
    setUploadedFile(files[0]);
    setUploadStatus(files[0].name);
    setFormat(files[0].name.substring(files[0].name.lastIndexOf(".")));
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var uploadData = new _formData2.default();
    var metadata = {
      identifier: props.identifier,
      documentType: docType,
      documentSubType: props.documentSubType,
      format: format,
      documentNumber: docNumber,
      uploadedBy: sessionStorage.getItem("user-name"),
      note: comments
    };
    console.log(uploadData);
    console.log(metadata);
    uploadData.append("file", uploadedFile);
    uploadData.append("metadata", JSON.stringify(metadata));
    props.uploadDocument(uploadData);
    console.log(uploadData.get("file"));
    console.log(uploadData.get("metadata"));
  };
  console.log(props.recievedDocumentsData.documentsMetadata);
  return _react2.default.createElement(
    "div",
    { className: "receivedDocuments-container" },
    _react2.default.createElement(
      "h2",
      null,
      "Documents Management"
    ),
    _react2.default.createElement(
      "div",
      { className: "receivedDocuments-total-container" },
      _react2.default.createElement(
        "div",
        { className: "receivedDocuments-header-container" },
        _react2.default.createElement("div", { className: "plain-header" }),
        _react2.default.createElement(
          "p",
          { className: "sub-header" },
          "Load# 1234567"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "receivedDocuments-main-container" },
        _react2.default.createElement(
          "p",
          { className: "table-title" },
          "Documents Received"
        ),
        _react2.default.createElement(
          "table",
          { className: "table-container", border: "0" },
          _react2.default.createElement(
            "thead",
            null,
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "th",
                null,
                "Document #"
              ),
              _react2.default.createElement(
                "th",
                null,
                "Doc Type"
              ),
              _react2.default.createElement(
                "th",
                null,
                "Doc Notes"
              ),
              _react2.default.createElement(
                "th",
                null,
                "Create Date"
              ),
              _react2.default.createElement(
                "th",
                null,
                "Source "
              ),
              _react2.default.createElement(
                "th",
                null,
                "Object"
              )
            )
          ),
          _react2.default.createElement(
            "tbody",
            null,
            props.recievedDocumentsData.map(function (values, index) {
              return _react2.default.createElement(
                "tr",
                { key: index },
                _react2.default.createElement(
                  "td",
                  null,
                  values.documentNumber
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  values.documentType
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  values.note
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  (0, _index2.changeDateFormat)(values.createdTimestamp)
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  values.source
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  values.documentSubType
                )
              );
            })
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "select-options" },
        _react2.default.createElement(
          "div",
          { className: "input-container" },
          _react2.default.createElement("input", {
            type: "radio",
            id: "generate-document",
            name: "document-options",
            value: "generate document",
            onClick: radioHandler
          }),
          _react2.default.createElement(
            "label",
            { "for": "generate-document" },
            "Generate Document"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "input-container" },
          _react2.default.createElement("input", {
            type: "radio",
            id: "upload-document",
            name: "document-options",
            value: "upload document",
            onClick: radioHandler
          }),
          _react2.default.createElement(
            "label",
            { "for": "upload-document" },
            "Upload Document"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "input-container" },
          _react2.default.createElement("input", {
            type: "radio",
            id: "share-document",
            name: "document-options",
            value: "share document",
            onClick: radioHandler
          }),
          _react2.default.createElement(
            "label",
            { "for": "share-document" },
            "Share Doc"
          )
        )
      ),
      isUploadclicked && _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "upload-container" },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "p",
              null,
              "Generate Document"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "column2-container" },
            _react2.default.createElement(
              "div",
              { className: "sub-column" },
              _react2.default.createElement(
                "div",
                { className: "input-container" },
                _react2.default.createElement(
                  "select",
                  {
                    id: "docType",
                    name: "docType",
                    onChange: handleChange,
                    defaultValue: "DEFAULT"
                  },
                  _react2.default.createElement(
                    "option",
                    { value: "DEFAULT", disabled: true },
                    "Doc Type"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "TENDER" },
                    "Tender"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "BOL" },
                    "BOL"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "INVOICE" },
                    "Invoice"
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "input-container" },
                _react2.default.createElement(
                  "div",
                  { className: "upload-btn" },
                  _react2.default.createElement("input", {
                    type: "file",
                    id: "uploadedFile",
                    name: "uploadedFile",
                    onChange: handleChange
                  }),
                  _react2.default.createElement(
                    "button",
                    { className: "btn", name: "uploadedFile" },
                    "Browse & Upload"
                  ),
                  _react2.default.createElement("br", null)
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "doc-name" },
              _react2.default.createElement("textarea", {
                id: "docNumber",
                name: "docNumber",
                rows: "2",
                onInput: handleChange,
                placeholder: "Doc Number (Save as or use File Name as Doc #)"
              })
            ),
            _react2.default.createElement(
              "p",
              null,
              uploadStatus
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "input-container" },
            _react2.default.createElement("textarea", {
              id: "comments",
              name: "comments",
              rows: "4",
              placeholder: "Text/Comment/Notes",
              onChange: function onChange(e) {
                return handleChange(e);
              }
            })
          )
        ),
        _react2.default.createElement(_DropZone2.default, { fileDrop: fileDrop })
      ),
      _react2.default.createElement(
        "div",
        { className: "receivedDocuments-footer" },
        _react2.default.createElement(
          "button",
          null,
          "Close"
        ),
        isUploadclicked && _react2.default.createElement("input", {
          type: "submit",
          value: "Submit",
          id: "submit",
          onClick: handleSubmit
        })
      )
    )
  );
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getReceivedDocuments: function getReceivedDocuments(documentInfo) {
      return dispatch({
        type: _items.Types.GET_RECEIVED_DOCUMENETS,
        payload: { documentInfo: documentInfo }
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ReceivedDocuments);