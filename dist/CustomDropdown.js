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
  var _useState3 = (0, _react.useState)(undefined),
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
  var requiredMessage = props.requiredMessage || "This field is required";
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
    className: "custom-select__input ".concat(props.required && !selectedOption && showOptions !== undefined ? "required" : ""),
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
  })), props.required && !selectedOption && showOptions !== undefined && /*#__PURE__*/_react["default"].createElement("span", {
    className: "required-message"
  }, requiredMessage));
};
var _default = CustomDropdown;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDdXN0b21Ecm9wZG93biIsInByb3BzIiwidXNlU3RhdGUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInVuZGVmaW5lZCIsInNob3dPcHRpb25zIiwic2V0U2hvd09wdGlvbnMiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwic2VsZWN0ZWRPcHRpb25JbmRleCIsInNldFNlbGVjdGVkT3B0aW9uSW5kZXgiLCJyZXF1aXJlZE1lc3NhZ2UiLCJmaWx0ZXJlZE9wdGlvbnMiLCJvcHRpb25zIiwiZmlsdGVyIiwib3B0aW9uIiwibGFiZWwiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJoYW5kbGVGb2N1cyIsImhhbmRsZUJsdXIiLCJzZXRUaW1lb3V0IiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXkiLCJoYW5kbGVBcnJvd0Rvd24iLCJoYW5kbGVBcnJvd1VwIiwiaGFuZGxlRW50ZXIiLCJwcmV2ZW50RGVmYXVsdCIsIk1hdGgiLCJtaW4iLCJsZW5ndGgiLCJtYXgiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJpbmRleCJdLCJzb3VyY2VzIjpbIi4uL0N1c3RvbURyb3Bkb3duLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9DdXN0b21Ecm9wZG93bi5jc3NcIjtcbnR5cGUgT3B0aW9uID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgb3B0aW9uczogT3B0aW9uW107XG4gIG9uQ2hhbmdlOiAoc2VsZWN0ZWRPcHRpb246IE9wdGlvbikgPT4gdm9pZDtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICByZXF1aXJlZE1lc3NhZ2U/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBDdXN0b21Ecm9wZG93bjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2hvd09wdGlvbnMsIHNldFNob3dPcHRpb25zXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGU8T3B0aW9uIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbkluZGV4LCBzZXRTZWxlY3RlZE9wdGlvbkluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCByZXF1aXJlZE1lc3NhZ2UgPSBwcm9wcy5yZXF1aXJlZE1lc3NhZ2UgfHwgXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCI7XG5cbiAgY29uc3QgZmlsdGVyZWRPcHRpb25zID0gcHJvcHMub3B0aW9ucy5maWx0ZXIoXG4gICAgKG9wdGlvbikgPT4gb3B0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpID4gLTFcbiAgKTtcblxuICAvLyBVc2VyIGV2ZW50c1xuICBjb25zdCBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICBzZXRTaG93T3B0aW9ucyh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd09wdGlvbnMoZmFsc2UpLCAyMDApO1xuICB9O1xuXG4gIC8vIEtleWJvYXJkIGV2ZW50c1xuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgIGhhbmRsZUFycm93RG93bihlKTtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgaGFuZGxlQXJyb3dVcChlKTtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGhhbmRsZUVudGVyKGUpO1xuICAgIH1cbiAgfTtcblxuICAvLyBBcnJvdyBBY3Rpb25zXG4gIGNvbnN0IGhhbmRsZUFycm93RG93biA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFNlbGVjdGVkT3B0aW9uSW5kZXgoXG4gICAgICBNYXRoLm1pbihzZWxlY3RlZE9wdGlvbkluZGV4ICsgMSwgZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDEpXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcnJvd1VwID0gKGUpID0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbkluZGV4KE1hdGgubWF4KHNlbGVjdGVkT3B0aW9uSW5kZXggLSAxLCAwKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW50ZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbkluZGV4KE1hdGgubWF4KHNlbGVjdGVkT3B0aW9uSW5kZXggLSAxLCAwKSk7XG4gICAgc2V0U2hvd09wdGlvbnMoZmFsc2UpO1xuICAgIHNldFNlYXJjaFRlcm0oXCJcIik7XG4gICAgc2V0U2VsZWN0ZWRPcHRpb24oZmlsdGVyZWRPcHRpb25zW3NlbGVjdGVkT3B0aW9uSW5kZXhdKTtcbiAgICBpZiAocHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHByb3BzLm9uQ2hhbmdlKGZpbHRlcmVkT3B0aW9uc1tzZWxlY3RlZE9wdGlvbkluZGV4XSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tc2VsZWN0XCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzc05hbWU9e2BjdXN0b20tc2VsZWN0X19pbnB1dCAkeyhwcm9wcy5yZXF1aXJlZCAmJiAhc2VsZWN0ZWRPcHRpb24gJiYgc2hvd09wdGlvbnMgIT09IHVuZGVmaW5lZCkgPyBcInJlcXVpcmVkXCIgOiBcIlwifWB9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG9wdGlvblwiXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbiA/IHNlbGVjdGVkT3B0aW9uLmxhYmVsIDogc2VhcmNoVGVybX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbihudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uRm9jdXM9e2hhbmRsZUZvY3VzfVxuICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cblxuICAgICAgLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3Nob3dPcHRpb25zID8gXCJjdXN0b20tc2VsZWN0X19vcHRpb25zIHNob3dcIiA6IFwiY3VzdG9tLXNlbGVjdF9fb3B0aW9ucyBoaWRlXCJ9PlxuICAgICAgICB7ZmlsdGVyZWRPcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3VzdG9tLXNlbGVjdF9fb3B0aW9uICR7aW5kZXggPT09IHNlbGVjdGVkT3B0aW9uSW5kZXggPyBcInNlbGVjdGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbihvcHRpb24pO1xuICAgICAgICAgICAgICBzZXRTaG93T3B0aW9ucyhmYWxzZSk7XG4gICAgICAgICAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKG9wdGlvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICB7KHByb3BzLnJlcXVpcmVkICYmICFzZWxlY3RlZE9wdGlvbiAmJiBzaG93T3B0aW9ucyAhPT0gdW5kZWZpbmVkKSAmJiA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZC1tZXNzYWdlXCI+e3JlcXVpcmVkTWVzc2FnZX08L3NwYW4+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tRHJvcGRvd247Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFDQTtBQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYTlCLElBQU1BLGNBQStCLEdBQUcsU0FBbENBLGNBQStCLENBQUlDLEtBQUssRUFBSztFQUNqRCxnQkFBb0MsSUFBQUMsZUFBUSxFQUFDLEVBQUUsQ0FBQztJQUFBO0lBQXpDQyxVQUFVO0lBQUVDLGFBQWE7RUFDaEMsaUJBQXNDLElBQUFGLGVBQVEsRUFBQ0csU0FBUyxDQUFDO0lBQUE7SUFBbERDLFdBQVc7SUFBRUMsY0FBYztFQUNsQyxpQkFBNEMsSUFBQUwsZUFBUSxFQUFnQixJQUFJLENBQUM7SUFBQTtJQUFsRU0sY0FBYztJQUFFQyxpQkFBaUI7RUFDeEMsaUJBQXNELElBQUFQLGVBQVEsRUFBQyxDQUFDLENBQUM7SUFBQTtJQUExRFEsbUJBQW1CO0lBQUVDLHNCQUFzQjtFQUNsRCxJQUFNQyxlQUFlLEdBQUdYLEtBQUssQ0FBQ1csZUFBZSxJQUFJLHdCQUF3QjtFQUV6RSxJQUFNQyxlQUFlLEdBQUdaLEtBQUssQ0FBQ2EsT0FBTyxDQUFDQyxNQUFNLENBQzFDLFVBQUNDLE1BQU07SUFBQSxPQUFLQSxNQUFNLENBQUNDLEtBQUss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