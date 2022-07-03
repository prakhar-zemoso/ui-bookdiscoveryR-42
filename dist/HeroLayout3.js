function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function HeroLayout3(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "column",
    width: "1440px",
    height: "548px",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    padding: "160px 240px 160px 240px",
    backgroundColor: "rgba(0,0,0,1)"
  }, rest, getOverrideProps(overrides, "HeroLayout3")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "24px",
    direction: "column",
    height: "228px",
    justifyContent: "center",
    alignItems: "center",
    grow: "1",
    basis: "228px",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Type Lock Up")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "700",
    color: "rgba(255,255,255,1)",
    lineHeight: "24px",
    textAlign: "center",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "LOREM IPSUM"
  }, getOverrideProps(overrides, "LOREM IPSUM"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "column",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Main Body")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "24px",
    fontWeight: "400",
    color: "rgba(255,255,255,1)",
    lineHeight: "30px",
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
    children: "Ut enim ad minim veniam quis nostrud"
  }, getOverrideProps(overrides, "Ut enim ad minim veniam quis nostrud"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(255,255,255,1)",
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
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  }, getOverrideProps(overrides, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
    direction: "row",
    width: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    shrink: "0",
    position: "relative",
    border: "1px SOLID rgba(0,0,0,0)",
    borderRadius: "4px",
    padding: "7px 15px 7px 15px",
    backgroundColor: "rgba(4,125,149,1)"
  }, getOverrideProps(overrides, "Button")))));
}