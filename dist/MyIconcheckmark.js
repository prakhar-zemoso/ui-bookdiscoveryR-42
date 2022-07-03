function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function MyIconcheckmark(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Icon, _extends({
    width: "24px",
    height: "24px",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 24,
      height: 24
    },
    paths: [{
      d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
      fill: "rgba(13,26,38,1)",
      fillRule: "nonzero",
      style: {
        transform: "translate(14.21%, 23.29%)"
      }
    }]
  }, rest, getOverrideProps(overrides, "MyIconcheckmark")));
}