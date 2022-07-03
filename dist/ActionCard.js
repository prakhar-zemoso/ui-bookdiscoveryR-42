function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ActionCard(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
    direction: "column",
    width: "320px",
    justifyContent: "center",
    position: "relative",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)"
  }, rest, getOverrideProps(overrides, "ActionCard")), /*#__PURE__*/React.createElement(Image, _extends({
    height: "408px",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "image"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "column",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "16px 16px 16px 16px"
  }, getOverrideProps(overrides, "Card Area")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "8px",
    direction: "column",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Main Text")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "700",
    color: "rgba(13,26,38,1)",
    lineHeight: "20px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Classic Long Sleeve T-Shirt"
  }, getOverrideProps(overrides, "Classic Long Sleeve T-Shirt"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(48,64,80,1)",
    lineHeight: "24px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    letterSpacing: "0.01px",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Information about this product"
  }, getOverrideProps(overrides, "Information about this product13561"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(48,64,80,1)",
    lineHeight: "24px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    letterSpacing: "0.01px",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Information about this product"
  }, getOverrideProps(overrides, "Information about this product26132")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "8px",
    direction: "row",
    width: "174px",
    alignItems: "center",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Rating"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: "700",
    color: "rgba(13,26,38,1)",
    lineHeight: "25px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "$99 USD"
  }, getOverrideProps(overrides, "$99 USD"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    border: "1px SOLID rgba(0,0,0,0)",
    borderRadius: "4px",
    padding: "7px 15px 7px 15px",
    backgroundColor: "rgba(4,125,149,1)"
  }, getOverrideProps(overrides, "Button")))));
}