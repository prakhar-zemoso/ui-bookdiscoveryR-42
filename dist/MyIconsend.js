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
export default function MyIconsend(props) {
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
      d: "M2.01 3.03L9.52 6.25L2 5.25L2.01 3.03ZM9.51 11.75L2 14.97L2 12.75L9.51 11.75ZM0.00999999 0L0 7L15 9L0 11L0.00999999 18L21 9L0.00999999 0Z",
      fill: "rgba(13,26,38,1)",
      fillRule: "nonzero",
      style: {
        transform: "translate(8.33%, 12.5%)"
      }
    }]
  }, rest, getOverrideProps(overrides, "MyIconsend")));
}