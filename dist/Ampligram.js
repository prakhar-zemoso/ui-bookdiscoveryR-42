function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import MyIconfavoriteborder from "./MyIconfavoriteborder";
import MyIconchatbubbleoutline from "./MyIconchatbubbleoutline";
import MyIconsend from "./MyIconsend";
export default function Ampligram(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "8px",
    direction: "column",
    width: "640px",
    justifyContent: "center",
    position: "relative",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)"
  }, rest, getOverrideProps(overrides, "Ampligram")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "16px 16px 16px 16px"
  }, getOverrideProps(overrides, "Header")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    width: "568px",
    alignItems: "center",
    grow: "1",
    basis: "568px",
    height: "65px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Profile")), /*#__PURE__*/React.createElement(Image, _extends({
    width: "65px",
    height: "65px",
    shrink: "0",
    position: "relative",
    borderRadius: "160px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "image13568"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(13,26,38,1)",
    lineHeight: "24px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    letterSpacing: "0.01px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Rene Brandel"
  }, getOverrideProps(overrides, "Rene Brandel")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    width: "fit-content",
    justifyContent: "flex-end",
    alignItems: "center",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Overflow")), /*#__PURE__*/React.createElement(View, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Icon13571")), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "4px",
    height: "16px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 4,
      height: 16
    },
    paths: [{
      d: "M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z",
      fill: "rgba(13,26,38,1)",
      fillRule: "nonzero"
    }],
    position: "absolute",
    top: "16.67%",
    bottom: "16.67%",
    left: "41.67%",
    right: "41.67%"
  }, getOverrideProps(overrides, "Vector13572")))))), /*#__PURE__*/React.createElement(Image, _extends({
    height: "408px",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "image13573"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    alignItems: "flex-start",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "16px 16px 16px 16px"
  }, getOverrideProps(overrides, "Options")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "24px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Share")), /*#__PURE__*/React.createElement(MyIconfavoriteborder, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "MyIcon/favorite_border"))), /*#__PURE__*/React.createElement(MyIconchatbubbleoutline, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "MyIcon/chat-bubble-outline"))), /*#__PURE__*/React.createElement(MyIconsend, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "MyIcon/send")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    width: "472px",
    justifyContent: "flex-end",
    alignItems: "center",
    grow: "1",
    basis: "472px",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Bookmark")), /*#__PURE__*/React.createElement(View, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Icon13580")), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "14px",
    height: "18px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 14,
      height: 18
    },
    paths: [{
      d: "M12 0L2 0C0.9 0 0 0.9 0 2L0 18L7 15L14 18L14 2C14 0.9 13.1 0 12 0ZM12 15L7 12.82L2 15L2 2L12 2L12 15Z",
      fill: "rgba(13,26,38,1)",
      fillRule: "nonzero"
    }],
    position: "absolute",
    top: "12.5%",
    bottom: "12.5%",
    left: "20.83%",
    right: "20.83%"
  }, getOverrideProps(overrides, "Vector13581")))))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "8px",
    direction: "column",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Body")), /*#__PURE__*/React.createElement(View, _extends({
    height: "1px",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Divider"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "8px",
    direction: "column",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "16px 16px 16px 16px"
  }, getOverrideProps(overrides, "Area")), /*#__PURE__*/React.createElement(Text, _extends({
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
    children: "Firstname Lastname"
  }, getOverrideProps(overrides, "Firstname Lastname"))), /*#__PURE__*/React.createElement(Text, _extends({
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
    children: "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.\u201D"
  }, getOverrideProps(overrides, "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.\u201D"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(92,102,112,1)",
    lineHeight: "24px",
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
    children: "Timestamp"
  }, getOverrideProps(overrides, "Timestamp"))))));
}