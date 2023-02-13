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
var CustomDropdown = function CustomDropdown(_ref) {
  var options = _ref.options,
    onChange = _ref.onChange,
    required = _ref.required,
    _ref$requiredMessage = _ref.requiredMessage,
    requiredMessage = _ref$requiredMessage === void 0 ? "This field is required" : _ref$requiredMessage,
    forceRequired = _ref.forceRequired,
    _ref$placeHolder = _ref.placeHolder,
    placeHolder = _ref$placeHolder === void 0 ? "Search or select options..." : _ref$placeHolder;
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
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedOptionIndex = _useState8[0],
    setSelectedOptionIndex = _useState8[1];
  var _useState9 = (0, _react.useState)(options),
    _useState10 = _slicedToArray(_useState9, 2),
    filteredOptions = _useState10[0],
    setFilteredOptions = _useState10[1];
  (0, _react.useEffect)(function () {
    setFilteredOptions(options.filter(function (option) {
      return option.label.toLowerCase().startsWith(searchTerm.toLowerCase());
    }));
  }, [searchTerm, options]);
  var handleFocus = function handleFocus() {
    return setShowOptions(true);
  };
  var handleBlur = function handleBlur() {
    return setTimeout(function () {
      return setShowOptions(false);
    }, 200);
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === "ArrowDown") handleArrowDown(e);
    if (e.key === "ArrowUp") handleArrowUp(e);
    if (e.key === "Enter") handleEnter(e);
  };
  var handleArrowDown = function handleArrowDown(e) {
    e.preventDefault();
    setSelectedOptionIndex(Math.min(selectedOptionIndex + 1, filteredOptions.length - 1));
  };
  var handleArrowUp = function handleArrowUp(e) {
    e.preventDefault();
    setSelectedOptionIndex(Math.max(selectedOptionIndex - 1, 0));
  };
  var handleEnter = function handleEnter(e) {
    e.preventDefault();
    setSelectedOption(filteredOptions[selectedOptionIndex]);
    setShowOptions(false);
    setSearchTerm("");
    if (onChange) {
      onChange(filteredOptions[selectedOptionIndex]);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-select"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "custom-select__input ".concat(required && !selectedOption && showOptions !== undefined || forceRequired ? "required" : ""),
    placeholder: placeHolder || "Search or select options...",
    value: selectedOption ? selectedOption.label : searchTerm,
    onChange: function onChange(e) {
      if (selectedOption) {
        setSelectedOption(null);
      }
      setSearchTerm(e.target.value);
    },
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown
  }), /*#__PURE__*/_react["default"].createElement("ul", {
    className: showOptions ? "custom-select__options show" : "custom-select__options hide"
  }, filteredOptions.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: "custom-select__option ".concat(index === selectedOptionIndex ? "selected" : ""),
      key: index,
      onClick: function onClick() {
        setSelectedOption(option);
        setShowOptions(false);
        if (onChange) {
          onChange(option);
        }
      }
    }, option.label);
  })), required && !selectedOption && showOptions !== undefined || forceRequired && /*#__PURE__*/_react["default"].createElement("span", {
    className: "required-message"
  }, requiredMessage));
};
var _default = CustomDropdown;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDdXN0b21Ecm9wZG93biIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwicmVxdWlyZWRNZXNzYWdlIiwiZm9yY2VSZXF1aXJlZCIsInBsYWNlSG9sZGVyIiwidXNlU3RhdGUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNob3dPcHRpb25zIiwic2V0U2hvd09wdGlvbnMiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwic2VsZWN0ZWRPcHRpb25JbmRleCIsInNldFNlbGVjdGVkT3B0aW9uSW5kZXgiLCJmaWx0ZXJlZE9wdGlvbnMiLCJzZXRGaWx0ZXJlZE9wdGlvbnMiLCJ1c2VFZmZlY3QiLCJmaWx0ZXIiLCJvcHRpb24iLCJsYWJlbCIsInRvTG93ZXJDYXNlIiwic3RhcnRzV2l0aCIsImhhbmRsZUZvY3VzIiwiaGFuZGxlQmx1ciIsInNldFRpbWVvdXQiLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleSIsImhhbmRsZUFycm93RG93biIsImhhbmRsZUFycm93VXAiLCJoYW5kbGVFbnRlciIsInByZXZlbnREZWZhdWx0IiwiTWF0aCIsIm1pbiIsImxlbmd0aCIsIm1heCIsInVuZGVmaW5lZCIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiaW5kZXgiXSwic291cmNlcyI6WyIuLi9DdXN0b21Ecm9wZG93bi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vQ3VzdG9tRHJvcGRvd24uY3NzXCI7XG5cbnR5cGUgT3B0aW9uID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgb3B0aW9uczogT3B0aW9uW107XG4gIG9uQ2hhbmdlOiAoc2VsZWN0ZWRPcHRpb246IE9wdGlvbikgPT4gdm9pZDtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICByZXF1aXJlZE1lc3NhZ2U/OiBzdHJpbmc7XG4gIGZvcmNlUmVxdWlyZWQ/OiBib29sZWFuO1xuICBwbGFjZUhvbGRlcj86IHN0cmluZztcbn07XG5cbmNvbnN0IEN1c3RvbURyb3Bkb3duOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBvcHRpb25zLFxuICBvbkNoYW5nZSxcbiAgcmVxdWlyZWQsXG4gIHJlcXVpcmVkTWVzc2FnZSA9IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxuICBmb3JjZVJlcXVpcmVkLFxuICBwbGFjZUhvbGRlciA9IFwiU2VhcmNoIG9yIHNlbGVjdCBvcHRpb25zLi4uXCIsXG59KSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2hvd09wdGlvbnMsIHNldFNob3dPcHRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZXRTZWxlY3RlZE9wdGlvbl0gPSB1c2VTdGF0ZTxPcHRpb24gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9uSW5kZXgsIHNldFNlbGVjdGVkT3B0aW9uSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtmaWx0ZXJlZE9wdGlvbnMsIHNldEZpbHRlcmVkT3B0aW9uc10gPSB1c2VTdGF0ZShvcHRpb25zKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZpbHRlcmVkT3B0aW9ucyhcbiAgICAgIG9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+XG4gICAgICAgIG9wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxuICAgICAgKVxuICAgICk7XG4gIH0sIFtzZWFyY2hUZXJtLCBvcHRpb25zXSk7XG5cbiAgY29uc3QgaGFuZGxlRm9jdXMgPSAoKSA9PiBzZXRTaG93T3B0aW9ucyh0cnVlKTtcbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd09wdGlvbnMoZmFsc2UpLCAyMDApO1xuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIGhhbmRsZUFycm93RG93bihlKTtcbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dVcFwiKSBoYW5kbGVBcnJvd1VwKGUpO1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSBoYW5kbGVFbnRlcihlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcnJvd0Rvd24gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbkluZGV4KFxuICAgICAgTWF0aC5taW4oc2VsZWN0ZWRPcHRpb25JbmRleCArIDEsIGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggLSAxKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXJyb3dVcCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFNlbGVjdGVkT3B0aW9uSW5kZXgoTWF0aC5tYXgoc2VsZWN0ZWRPcHRpb25JbmRleCAtIDEsIDApKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbnRlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFNlbGVjdGVkT3B0aW9uKGZpbHRlcmVkT3B0aW9uc1tzZWxlY3RlZE9wdGlvbkluZGV4XSk7XG4gICAgc2V0U2hvd09wdGlvbnMoZmFsc2UpO1xuICAgIHNldFNlYXJjaFRlcm0oXCJcIik7XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShmaWx0ZXJlZE9wdGlvbnNbc2VsZWN0ZWRPcHRpb25JbmRleF0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3NOYW1lPXtgY3VzdG9tLXNlbGVjdF9faW5wdXQgJHtcbiAgICAgICAgICAocmVxdWlyZWQgJiYgIXNlbGVjdGVkT3B0aW9uICYmIHNob3dPcHRpb25zICE9PSB1bmRlZmluZWQpIHx8XG4gICAgICAgICAgZm9yY2VSZXF1aXJlZFxuICAgICAgICAgICAgPyBcInJlcXVpcmVkXCJcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9YH1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlSG9sZGVyIHx8IFwiU2VhcmNoIG9yIHNlbGVjdCBvcHRpb25zLi4uXCJ9XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbiA/IHNlbGVjdGVkT3B0aW9uLmxhYmVsIDogc2VhcmNoVGVybX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbihudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uRm9jdXM9e2hhbmRsZUZvY3VzfVxuICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgIC8+XG4gICAgICA8dWxcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBzaG93T3B0aW9uc1xuICAgICAgICAgICAgPyBcImN1c3RvbS1zZWxlY3RfX29wdGlvbnMgc2hvd1wiXG4gICAgICAgICAgICA6IFwiY3VzdG9tLXNlbGVjdF9fb3B0aW9ucyBoaWRlXCJcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7ZmlsdGVyZWRPcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3VzdG9tLXNlbGVjdF9fb3B0aW9uICR7XG4gICAgICAgICAgICAgIGluZGV4ID09PSBzZWxlY3RlZE9wdGlvbkluZGV4ID8gXCJzZWxlY3RlZFwiIDogXCJcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgICBzZXRTaG93T3B0aW9ucyhmYWxzZSk7XG4gICAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKG9wdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICB7KHJlcXVpcmVkICYmICFzZWxlY3RlZE9wdGlvbiAmJiBzaG93T3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICAoZm9yY2VSZXF1aXJlZCAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWQtbWVzc2FnZVwiPntyZXF1aXJlZE1lc3NhZ2V9PC9zcGFuPlxuICAgICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbURyb3Bkb3duO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0I5QixJQUFNQSxjQUErQixHQUFHLFNBQWxDQSxjQUErQixPQU8vQjtFQUFBLElBTkpDLE9BQU8sUUFBUEEsT0FBTztJQUNQQyxRQUFRLFFBQVJBLFFBQVE7SUFDUkMsUUFBUSxRQUFSQSxRQUFRO0lBQUEsNEJBQ1JDLGVBQWU7SUFBZkEsZUFBZSxxQ0FBRyx3QkFBd0I7SUFDMUNDLGFBQWEsUUFBYkEsYUFB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