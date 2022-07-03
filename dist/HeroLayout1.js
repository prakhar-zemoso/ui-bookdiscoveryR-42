function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps, getOverridesFromVariants, mergeVariantsAndOverrides } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HeroLayout1(props) {
  const {
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [{
    overrides: {
      "LOREM IPSUM": {},
      "Ut enim ad minim veniam quis nostrud": {},
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.": {},
      Message: {},
      Button: {},
      HeroMessage: {},
      Left: {},
      image: {},
      Right: {},
      HeroLayout1: {}
    },
    variantValues: {
      mode: "Light"
    }
  }, {
    overrides: {
      "LOREM IPSUM": {
        color: "rgba(255,255,255,1)"
      },
      "Ut enim ad minim veniam quis nostrud": {
        color: "rgba(255,255,255,1)"
      },
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.": {
        color: "rgba(255,255,255,1)"
      },
      Message: {},
      Button: {},
      HeroMessage: {},
      Left: {
        backgroundColor: "rgba(0,0,0,1)"
      },
      image: {
        alignSelf: "stretch",
        objectFit: "cover"
      },
      Right: {},
      HeroLayout1: {}
    },
    variantValues: {
      mode: "Dark"
    }
  }];
  const overrides = mergeVariantsAndOverrides(getOverridesFromVariants(variants, props), overridesProp || {});
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
    direction: "row",
    width: "1440px",
    height: "500px",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, rest, getOverrideProps(overrides, "HeroLayout1")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "column",
    height: "500px",
    justifyContent: "center",
    alignItems: "center",
    grow: "1",
    basis: "720px",
    alignSelf: "stretch",
    overflow: "hidden",
    position: "relative",
    padding: "120px 120px 120px 120px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "Left")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "24px",
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "HeroMessage")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "700",
    color: "rgba(13,26,38,1)",
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
    justifyContent: "center",
    alignItems: "center",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Message")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "24px",
    fontWeight: "400",
    color: "rgba(13,26,38,1)",
    lineHeight: "30px",
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
    children: "Ut enim ad minim veniam quis nostrud"
  }, getOverrideProps(overrides, "Ut enim ad minim veniam quis nostrud"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(13,26,38,1)",
    lineHeight: "24px",
    textAlign: "center",
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
  }, getOverrideProps(overrides, "Button"))))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "column",
    height: "500px",
    justifyContent: "center",
    alignItems: "center",
    grow: "1",
    basis: "720px",
    alignSelf: "stretch",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Right")), /*#__PURE__*/React.createElement(Image, _extends({
    width: "720px",
    height: "500px",
    grow: "1",
    basis: "500px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "image")))));
}