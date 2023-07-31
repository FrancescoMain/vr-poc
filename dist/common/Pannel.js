"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pannel = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Pannel = /*#__PURE__*/function () {
  function Pannel() {
    _classCallCheck(this, Pannel);
    _defineProperty(this, "attributes", "");
    _defineProperty(this, "html", "<a-entity position=\"0 0.1 0.01\" id=\"overPannel\" visible=\"false\" scale=\"0 0 0\">\n            <a-triangle color=\"black\"  rotation=\"0 0 -180\" scale=\"0.1 0.1 0.1\" -1 0\"></a-triangle>\n            <a-box color=\"black\" position=\"0 0.3 0\" align=\"center\" scale=\"0.5 0.5 0.01\" -1 0\">\n              <a-text wrapCount=\"0\" wrap-pixels=\"500\" width=\"1\" color=\"white\" position=\"-0.5 0 1\" value=\"Questo \xE8 un testo di descrizione molto lunga\"></a-text>\n              <a-text scopri wrapCount=\"0\" wrap-pixels=\"500\" width=\"1\" color=\"white\" position=\"-0.5 -0.3 1\" value=\"Scopri altro\"></a-text>\n            </a-box>\n            </a-triangle>\n\n          </a-entity>");
  }
  _createClass(Pannel, [{
    key: "getHtml",
    value: function getHtml() {
      return this.html;
    }
  }, {
    key: "setAttributes",
    value: function setAttributes(attributes) {
      this.attributes = attributes;
      this.html = "<a-circle ".concat(this.attributes, " ></a-circle>");
    }
  }]);
  return Pannel;
}();
exports.Pannel = Pannel;