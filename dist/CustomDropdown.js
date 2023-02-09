"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./CustomDropdown.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CustomDropdown = function CustomDropdown(props) {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showOptions = _useState4[0],
    setShowOptions = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedOption = _useState6[0],
    setSelectedOption = _useState6[1];
  var _useState7 = (0, _react.useState)(-1),
    _useState8 = _slicedToArray(_useState7, 2),
    highlightedIndex = _useState8[0],
    setHighlightedIndex = _useState8[1];
  var filteredOptions = props.options.filter(function (option) {
    return option.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });
  var handleKeyDown = function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setHighlightedIndex(Math.min(highlightedIndex + 1, filteredOptions.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setHighlightedIndex(Math.max(highlightedIndex - 1, 0));
        break;
      case "Enter":
        if (highlightedIndex >= 0) {
          var selected = filteredOptions[highlightedIndex];
          setSelectedOption(selected);
          setShowOptions(false);
          if (props.onChange) {
            props.onChange(selected);
          }
        }
        break;
      default:
        break;
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-select"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "custom-select__input ".concat(props.required && !selectedOption ? "required" : ""),
    placeholder: "Search option",
    value: selectedOption ? selectedOption.label : searchTerm,
    onChange: function onChange(e) {
      if (selectedOption) {
        setSelectedOption(null);
      }
      setSearchTerm(e.target.value);
    },
    onFocus: function onFocus() {
      return setShowOptions(true);
    },
    onBlur: function onBlur() {
      return setTimeout(function () {
        return setShowOptions(false);
      }, 200);
    },
    onKeyDown: handleKeyDown
  }), /*#__PURE__*/_react["default"].createElement("ul", {
    className: showOptions ? "custom-select__options show" : "custom-select__options hide"
  }, filteredOptions.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: "custom-select__option",
      key: index,
      onClick: function onClick() {
        setSelectedOption(option);
        setShowOptions(false);
        if (props.onChange) {
          props.onChange(option);
        }
      }
    }, option.label);
  })));
};
var _default = CustomDropdown;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDdXN0b21Ecm9wZG93biIsInByb3BzIiwidXNlU3RhdGUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNob3dPcHRpb25zIiwic2V0U2hvd09wdGlvbnMiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwiaGlnaGxpZ2h0ZWRJbmRleCIsInNldEhpZ2hsaWdodGVkSW5kZXgiLCJmaWx0ZXJlZE9wdGlvbnMiLCJvcHRpb25zIiwiZmlsdGVyIiwib3B0aW9uIiwibGFiZWwiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsIk1hdGgiLCJtaW4iLCJsZW5ndGgiLCJtYXgiLCJzZWxlY3RlZCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRUaW1lb3V0IiwibWFwIiwiaW5kZXgiXSwic291cmNlcyI6WyIuLi9DdXN0b21Ecm9wZG93bi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL0N1c3RvbURyb3Bkb3duLmNzc1wiO1xudHlwZSBPcHRpb24gPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBvcHRpb25zOiBPcHRpb25bXTtcbiAgb25DaGFuZ2U6IChzZWxlY3RlZE9wdGlvbjogT3B0aW9uKSA9PiB2b2lkO1xuICByZXF1aXJlZD86IGJvb2xlYW47XG59O1xuXG5jb25zdCBDdXN0b21Ecm9wZG93bjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2hvd09wdGlvbnMsIHNldFNob3dPcHRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZXRTZWxlY3RlZE9wdGlvbl0gPSB1c2VTdGF0ZTxPcHRpb24gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2hpZ2hsaWdodGVkSW5kZXgsIHNldEhpZ2hsaWdodGVkSW5kZXhdID0gdXNlU3RhdGUoLTEpO1xuICBjb25zdCBmaWx0ZXJlZE9wdGlvbnMgPSBwcm9wcy5vcHRpb25zLmZpbHRlcihcbiAgICAob3B0aW9uKSA9PlxuICAgICAgb3B0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpID4gLTFcbiAgKTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0SGlnaGxpZ2h0ZWRJbmRleChNYXRoLm1pbihoaWdobGlnaHRlZEluZGV4ICsgMSwgZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRIaWdobGlnaHRlZEluZGV4KE1hdGgubWF4KGhpZ2hsaWdodGVkSW5kZXggLSAxLCAwKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICAgIGlmIChoaWdobGlnaHRlZEluZGV4ID49IDApIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGZpbHRlcmVkT3B0aW9uc1toaWdobGlnaHRlZEluZGV4XTtcbiAgICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbihzZWxlY3RlZCk7XG4gICAgICAgICAgc2V0U2hvd09wdGlvbnMoZmFsc2UpO1xuICAgICAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2Uoc2VsZWN0ZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tc2VsZWN0XCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzc05hbWU9e2BjdXN0b20tc2VsZWN0X19pbnB1dCAke3Byb3BzLnJlcXVpcmVkICYmICFzZWxlY3RlZE9wdGlvbiA/IFwicmVxdWlyZWRcIiA6IFwiXCJ9YH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggb3B0aW9uXCJcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9uID8gc2VsZWN0ZWRPcHRpb24ubGFiZWwgOiBzZWFyY2hUZXJtfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkT3B0aW9uKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0U2hvd09wdGlvbnModHJ1ZSl9XG4gICAgICAgIG9uQmx1cj17KCkgPT4gc2V0VGltZW91dCgoKSA9PiBzZXRTaG93T3B0aW9ucyhmYWxzZSksIDIwMCl9XG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgIC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzaG93T3B0aW9ucyA/IFwiY3VzdG9tLXNlbGVjdF9fb3B0aW9ucyBzaG93XCIgOiBcImN1c3RvbS1zZWxlY3RfX29wdGlvbnMgaGlkZVwifT5cbiAgICAgICAge2ZpbHRlcmVkT3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1zZWxlY3RfX29wdGlvblwiXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgICBzZXRTaG93T3B0aW9ucyhmYWxzZSk7XG4gICAgICAgICAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKG9wdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21Ecm9wZG93bjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZOUIsSUFBTUEsY0FBK0IsR0FBRyxTQUFsQ0EsY0FBK0IsQ0FBSUMsS0FBSyxFQUFLO0VBQ2pELGdCQUFvQyxJQUFBQyxlQUFRLEVBQUMsRUFBRSxDQUFDO0lBQUE7SUFBekNDLFVBQVU7SUFBRUMsYUFBYTtFQUNoQyxpQkFBc0MsSUFBQUYsZUFBUSxFQUFDLEtBQUssQ0FBQztJQUFBO0lBQTlDRyxXQUFXO0lBQUVDLGNBQWM7RUFDbEMsaUJBQTRDLElBQUFKLGVBQVEsRUFBZ0IsSUFBSSxDQUFDO0lBQUE7SUFBbEVLLGNBQWM7SUFBRUMsaUJBQWlCO0VBQ3hDLGlCQUFnRCxJQUFBTixlQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQTtJQUFyRE8sZ0JBQWdCO0lBQUVDLG1CQUFt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