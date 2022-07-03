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
export default function MyIcondelete(props) {
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
      d: "M11 6L11 16L3 16L3 6L11 6ZM9.5 0L4.5 0L3.5 1L0 1L0 3L14 3L14 1L10.5 1L9.5 0ZM13 4L1 4L1 16C1 17.1 1.9 18 3 18L11 18C12.1 18 13 17.1 13 16L13 4Z",
      fill: "rgba(13,26,38,1)",
      fillRule: "nonzero",
      style: {
        transform: "translate(20.83%, 12.5%)"
      }
    }]
  }, rest, getOverrideProps(overrides, "MyIcondelete")));
}