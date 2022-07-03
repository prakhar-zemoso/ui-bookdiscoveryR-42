function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
import HeroLayout3 from "./HeroLayout3";
export default function HeroLayout2(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(View, _extends({
    width: "1440px",
    height: "858px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, rest, getOverrideProps(overrides, "HeroLayout2")), /*#__PURE__*/React.createElement(Image, _extends({
    position: "absolute",
    top: "0%",
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "image"))), /*#__PURE__*/React.createElement(HeroLayout3, _extends({
    display: "flex",
    gap: "10px",
    position: "absolute",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    direction: "column",
    width: "1440px",
    height: "858px",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: "160px 240px 160px 240px",
    backgroundColor: "rgba(0,0,0,0.5)"
  }, getOverrideProps(overrides, "HeroLayout3"))));
}