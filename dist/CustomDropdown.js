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
  var filteredOptions = props.options.filter(function (option) {
    return option.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-select"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "custom-select__input",
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
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDdXN0b21Ecm9wZG93biIsInByb3BzIiwidXNlU3RhdGUiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNob3dPcHRpb25zIiwic2V0U2hvd09wdGlvbnMiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwiZmlsdGVyZWRPcHRpb25zIiwib3B0aW9ucyIsImZpbHRlciIsIm9wdGlvbiIsImxhYmVsIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0VGltZW91dCIsIm1hcCIsImluZGV4Iiwib25DaGFuZ2UiXSwic291cmNlcyI6WyIuLi9DdXN0b21Ecm9wZG93bi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL0N1c3RvbURyb3Bkb3duLmNzc1wiO1xudHlwZSBPcHRpb24gPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBvcHRpb25zOiBPcHRpb25bXTtcbiAgb25DaGFuZ2U6IChzZWxlY3RlZE9wdGlvbjogT3B0aW9uKSA9PiB2b2lkO1xufTtcblxuY29uc3QgQ3VzdG9tRHJvcGRvd246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Nob3dPcHRpb25zLCBzZXRTaG93T3B0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGU8T3B0aW9uIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IGZpbHRlcmVkT3B0aW9ucyA9IHByb3BzLm9wdGlvbnMuZmlsdGVyKFxuICAgIChvcHRpb24pID0+XG4gICAgICBvcHRpb24ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRlcm0udG9Mb3dlckNhc2UoKSkgPiAtMVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tc2VsZWN0XCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tc2VsZWN0X19pbnB1dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG9wdGlvblwiXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbiA/IHNlbGVjdGVkT3B0aW9uLmxhYmVsIDogc2VhcmNoVGVybX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbihudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldFNob3dPcHRpb25zKHRydWUpfVxuICAgICAgICBvbkJsdXI9eygpID0+IHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd09wdGlvbnMoZmFsc2UpLCAyMDApfVxuICAgICAgLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3Nob3dPcHRpb25zID8gXCJjdXN0b20tc2VsZWN0X19vcHRpb25zIHNob3dcIiA6IFwiY3VzdG9tLXNlbGVjdF9fb3B0aW9ucyBoaWRlXCJ9PlxuICAgICAgICB7ZmlsdGVyZWRPcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdF9fb3B0aW9uXCJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkT3B0aW9uKG9wdGlvbik7XG4gICAgICAgICAgICAgIHNldFNob3dPcHRpb25zKGZhbHNlKTtcbiAgICAgICAgICAgICAgaWYgKHByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMub25DaGFuZ2Uob3B0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbURyb3Bkb3duOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVc5QixJQUFNQSxjQUErQixHQUFHLFNBQWxDQSxjQUErQixDQUFJQyxLQUFLLEVBQUs7RUFDakQsZ0JBQW9DLElBQUFDLGVBQVEsRUFBQyxFQUFFLENBQUM7SUFBQTtJQUF6Q0MsVUFBVTtJQUFFQyxhQUFhO0VBQ2hDLGlCQUFzQyxJQUFBRixlQUFRLEVBQUMsS0FBSyxDQUFDO0lBQUE7SUFBOUNHLFdBQVc7SUFBRUMsY0FBYztFQUNsQyxpQkFBNEMsSUFBQUosZUFBUSxFQUFnQixJQUFJLENBQUM7SUFBQTtJQUFsRUssY0FBYztJQUFFQyxpQkFBaUI7RUFDeEMsSUFBTUMsZUFBZSxHQUFHUixLQUFLLENBQUNTLE9BQU8sQ0FBQ0MsTUFBTSxDQUMxQyxVQUFDQyxNQUFNO0lBQUEsT0FDTEEsTUFBTSxDQUFDQyxLQUFLLENBQUNDLFdBQVcsRUFBRSxDQUFDQyxPQUFPLENBQUNaLFVBQVUsQ0FBQ1csV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7RUFBQSxFQUNwRTtFQUVELG9CQUNFO0lBQUssU0FBUyxFQUFDO0VBQWUsZ0JBQzVCO0lBQ0UsSUFBSSxFQUFDLE1BQU07SUFDWCxTQUFTLEVBQUMsc0JBQXNCO0lBQ2hDLFdBQVcsRUFBQyxlQUFlO0lBQzNCLEtBQUssRUFBRVAsY0FBYyxHQUFHQSxjQUFjLENBQUNNLEtBQUssR0FBR1YsVUFBVztJQUMxRCxRQUFRLEVBQUUsa0JBQUNhLENBQUMsRUFBSztNQUNmLElBQUlULGNBQWMsRUFBRTtRQUNsQkMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO01BQ3pCO01BQ0FKLGFBQWEsQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUMvQixDQUFFO0lBQ0YsT0FBTyxFQUFFO01BQUEsT0FBTVosY0FBYyxDQUFDLElBQUksQ0FBQztJQUFBLENBQUM7SUFDcEMsTUFBTSxFQUFFO01BQUEsT0FBTWEsVUFBVSxDQUFDO1FBQUEsT0FBTWIsY0FBYyxDQUFDLEtBQUssQ0FBQztNQUFBLEdBQUUsR0FBRyxDQUFDO0lBQUE7RUFBQyxFQUMzRCxlQUNGO0lBQUksU0FBUyxFQUFFRCxXQUFXLEdBQUcsNkJBQTZCLEdBQUc7RUFBOEIsR0FDeEZJLGVBQWUsQ0FBQ1csR0FBRyxDQUFDLFVBQUNSLE1BQU0sRUFBRVMsS0FBSztJQUFBLG9CQUNqQztNQUNFLFNBQVMsRUFBQyx1QkFBdUI7TUFDakMsR0FBRyxFQUFFQSxLQUFNO01BQ1gsT0FBTyxFQUFFLG1CQUFNO1FBQ2JiLGlCQUFpQixDQUFDSSxNQUFNLENBQUM7UUFDekJOLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDckIsSUFBSUwsS0FBSyxDQUFDcUIsUUFBUSxFQUFFO1VBQ2xCckIsS0FBSyxDQUFDcUIsUUFBUSxDQUFDVixNQUFNLENBQUM7UUFDeEI7TUFDRjtJQUFFLEdBRURBLE1BQU0sQ0FBQ0MsS0FBSyxDQUNWO0VBQUEsQ0FDTixDQUFDLENBQ0MsQ0FDRDtBQUVWLENBQUM7QUFBQyxlQUVhYixjQUFjO0FBQUEifQ==