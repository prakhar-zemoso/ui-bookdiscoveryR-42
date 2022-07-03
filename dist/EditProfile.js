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
export default function EditProfile(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "column",
    width: "640px",
    position: "relative",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)"
  }, rest, getOverrideProps(overrides, "EditProfile")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "24px",
    direction: "column",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "24px 24px 24px 24px"
  }, getOverrideProps(overrides, "Content")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    alignItems: "center",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Edit Profile13713")), /*#__PURE__*/React.createElement(View, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Icon")), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "14px",
    height: "14px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 14,
      height: 14
    },
    paths: [{
      d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
      fill: "rgba(13,26,38,1)",
      fillRule: "nonzero"
    }],
    position: "absolute",
    top: "20.83%",
    bottom: "20.83%",
    left: "20.83%",
    right: "20.83%"
  }, getOverrideProps(overrides, "Vector")))), /*#__PURE__*/React.createElement(Text, _extends({
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
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Edit Profile"
  }, getOverrideProps(overrides, "Edit Profile13716")))), /*#__PURE__*/React.createElement(View, _extends({
    height: "1px",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Divider13717"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    alignItems: "center",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Profile")), /*#__PURE__*/React.createElement(Image, _extends({
    width: "96px",
    height: "96px",
    shrink: "0",
    position: "relative",
    borderRadius: "160px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "image"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(13,26,38,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    textDecoration: "underline",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Upload New Image"
  }, getOverrideProps(overrides, "Upload New Image")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "column",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Forms")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "8px",
    direction: "column",
    justifyContent: "center",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "TextField13722"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "8px",
    direction: "column",
    justifyContent: "center",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "TextField13723"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "8px",
    direction: "column",
    justifyContent: "center",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "TextField13724")))), /*#__PURE__*/React.createElement(View, _extends({
    height: "1px",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Divider13725"))), /*#__PURE__*/React.createElement(Flex, _extends({
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