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
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedOptionIndex = _useState8[0],
    setSelectedOptionIndex = _useState8[1];
  var filteredOptions = props.options.filter(function (option) {
    return option.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });

  // User events
  var handleFocus = function handleFocus() {
    setShowOptions(true);
  };
  var handleBlur = function handleBlur() {
    setTimeout(function () {
      return setShowOptions(false);
    }, 200);
  };

  // Keyboard events
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === "ArrowDown") {
      handleArrowDown(e);
    }
    if (e.key === "ArrowUp") {
      handleArrowUp(e);
    }
    if (e.key === "Enter") {
      handleEnter(e);
    }
  };

  // Arrow Actions
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
    setSelectedOptionIndex(Math.max(selectedOptionIndex - 1, 0));
    setShowOptions(false);
    setSearchTerm("");
    setSelectedOption(filteredOptions[selectedOptionIndex]);
    if (props.onChange) {
      props.onChange(filteredOptions[selectedOptionIndex]);
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
        if (props.onChange) {
          props.onChange(option);
        }
      }
    }, option.label);
  })));
};
var _default = CustomDropdown;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDdXN0b21Ecm9wZG93biIsInByb3BzIiwidXNlU3RhdGUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNob3dPcHRpb25zIiwic2V0U2hvd09wdGlvbnMiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwic2VsZWN0ZWRPcHRpb25JbmRleCIsInNldFNlbGVjdGVkT3B0aW9uSW5kZXgiLCJmaWx0ZXJlZE9wdGlvbnMiLCJvcHRpb25zIiwiZmlsdGVyIiwib3B0aW9uIiwibGFiZWwiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJoYW5kbGVGb2N1cyIsImhhbmRsZUJsdXIiLCJzZXRUaW1lb3V0IiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXkiLCJoYW5kbGVBcnJvd0Rvd24iLCJoYW5kbGVBcnJvd1VwIiwiaGFuZGxlRW50ZXIiLCJwcmV2ZW50RGVmYXVsdCIsIk1hdGgiLCJtaW4iLCJsZW5ndGgiLCJtYXgiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpbmRleCJdLCJzb3VyY2VzIjpbIi4uL0N1c3RvbURyb3Bkb3duLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9DdXN0b21Ecm9wZG93bi5jc3NcIjtcbnR5cGUgT3B0aW9uID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgb3B0aW9uczogT3B0aW9uW107XG4gIG9uQ2hhbmdlOiAoc2VsZWN0ZWRPcHRpb246IE9wdGlvbikgPT4gdm9pZDtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xufTtcblxuY29uc3QgQ3VzdG9tRHJvcGRvd246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Nob3dPcHRpb25zLCBzZXRTaG93T3B0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGU8T3B0aW9uIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbkluZGV4LCBzZXRTZWxlY3RlZE9wdGlvbkluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGZpbHRlcmVkT3B0aW9ucyA9IHByb3BzLm9wdGlvbnMuZmlsdGVyKFxuICAgIChvcHRpb24pID0+IG9wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKSA+IC0xXG4gICk7XG5cbiAgLy8gVXNlciBldmVudHNcbiAgY29uc3QgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XG4gICAgc2V0U2hvd09wdGlvbnModHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFNob3dPcHRpb25zKGZhbHNlKSwgMjAwKTtcbiAgfTtcblxuICAvLyBLZXlib2FyZCBldmVudHNcbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICBoYW5kbGVBcnJvd0Rvd24oZSk7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIGhhbmRsZUFycm93VXAoZSk7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBoYW5kbGVFbnRlcihlKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQXJyb3cgQWN0aW9uc1xuICBjb25zdCBoYW5kbGVBcnJvd0Rvd24gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbkluZGV4KFxuICAgICAgTWF0aC5taW4oc2VsZWN0ZWRPcHRpb25JbmRleCArIDEsIGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggLSAxKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXJyb3dVcCA9IChlKSA9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0U2VsZWN0ZWRPcHRpb25JbmRleChNYXRoLm1heChzZWxlY3RlZE9wdGlvbkluZGV4IC0gMSwgMCkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVudGVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0U2VsZWN0ZWRPcHRpb25JbmRleChNYXRoLm1heChzZWxlY3RlZE9wdGlvbkluZGV4IC0gMSwgMCkpO1xuICAgIHNldFNob3dPcHRpb25zKGZhbHNlKTtcbiAgICBzZXRTZWFyY2hUZXJtKFwiXCIpO1xuICAgIHNldFNlbGVjdGVkT3B0aW9uKGZpbHRlcmVkT3B0aW9uc1tzZWxlY3RlZE9wdGlvbkluZGV4XSk7XG4gICAgaWYgKHByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBwcm9wcy5vbkNoYW5nZShmaWx0ZXJlZE9wdGlvbnNbc2VsZWN0ZWRPcHRpb25JbmRleF0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3NOYW1lPXtgY3VzdG9tLXNlbGVjdF9faW5wdXQgJHtwcm9wcy5yZXF1aXJlZCAmJiAhc2VsZWN0ZWRPcHRpb24gPyBcInJlcXVpcmVkXCIgOiBcIlwifWB9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG9wdGlvblwiXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbiA/IHNlbGVjdGVkT3B0aW9uLmxhYmVsIDogc2VhcmNoVGVybX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbihudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uRm9jdXM9e2hhbmRsZUZvY3VzfVxuICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cblxuICAgICAgLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3Nob3dPcHRpb25zID8gXCJjdXN0b20tc2VsZWN0X19vcHRpb25zIHNob3dcIiA6IFwiY3VzdG9tLXNlbGVjdF9fb3B0aW9ucyBoaWRlXCJ9PlxuICAgICAgICB7ZmlsdGVyZWRPcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3VzdG9tLXNlbGVjdF9fb3B0aW9uICR7aW5kZXggPT09IHNlbGVjdGVkT3B0aW9uSW5kZXggPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgICBzZXRTaG93T3B0aW9ucyhmYWxzZSk7XG4gICAgICAgICAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKG9wdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4g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