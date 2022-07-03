function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function FAQItem(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
    direction: "column",
    width: "1280px",
    justifyContent: "center",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, rest, getOverrideProps(overrides, "FAQItem")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
    direction: "row",
    alignItems: "center",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "24px 24px 24px 24px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "Container")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "column",
    width: "1232px",
    grow: "1",
    basis: "1232px",
    height: "84px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Content")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
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
    children: "What\u2019s the company?"
  }, getOverrideProps(overrides, "Title"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
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
    children: "A general overview that includes the name of the company, year it was founded and its goal. For example: Company was founded in 2019, with a goal to bring better products to every home across the US."
  }, getOverrideProps(overrides, "Paragraph"))))), /*#__PURE__*/React.createElement(View, _extends({
    height: "1px",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Divider"))));
}