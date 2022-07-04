function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import MyIconStarFocused from "./MyIconStarFocused";
import MyIconmorehoriz from "./MyIconmorehoriz";
export default function HeroCard90(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(View, _extends({
    width: "240px",
    height: "134px",
    overflow: "hidden",
    position: "relative",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)"
  }, rest, getOverrideProps(overrides, "HeroCard90")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "8px",
    position: "absolute",
    top: "8px",
    left: "8px",
    direction: "row",
    alignItems: "center",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, " MainBody")), /*#__PURE__*/React.createElement(Image, _extends({
    width: "91px",
    height: "118px",
    shrink: "0",
    position: "relative",
    borderRadius: "4px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Rectangle 7"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "4px",
    direction: "column",
    shrink: "0",
    height: "90px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Body")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(23,23,23,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Physical Chemistry"
  }, getOverrideProps(overrides, "Inorganic Chemistry"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "400",
    color: "rgba(137,137,137,1)",
    lineHeight: "16px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Catergory - Chemistry"
  }, getOverrideProps(overrides, "Catergory - Chemistry"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "4px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Rating")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "400",
    color: "rgba(137,137,137,1)",
    lineHeight: "16px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "4.5"
  }, getOverrideProps(overrides, "4.5"))), /*#__PURE__*/React.createElement(MyIconStarFocused, _extends({
    display: "flex",
    gap: "10px",
    direction: "column",
    shrink: "0",
    height: "24px",
    overflow: "hidden",
    position: "relative",
    borderRadius: "8px",
    padding: "6px 6px 6px 6px"
  }, getOverrideProps(overrides, "MyIcon/StarFocused")))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "400",
    color: "rgba(137,137,137,1)",
    lineHeight: "16px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "830 reviews"
  }, getOverrideProps(overrides, "830 reviews"))))), /*#__PURE__*/React.createElement(MyIconmorehoriz, _extends({
    width: "13px",
    height: "13px",
    position: "absolute",
    top: "9px",
    left: "218px",
    overflow: "hidden",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "MyIcon/more_horiz"))));
}