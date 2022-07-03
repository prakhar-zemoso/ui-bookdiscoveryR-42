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
export default function MyIconreply(props) {
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
      d: "M7 4L7 0L0 7L7 14L7 9.9C12 9.9 15.5 11.5 18 15C17 10 14 5 7 4Z",
      fill: "rgba(13,26,38,1)",
      fillRule: "nonzero",
      style: {
        transform: "translate(12.5%, 20.83%)"
      }
    }]
  }, rest, getOverrideProps(overrides, "MyIconreply")));
}