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
import MyIconchat from "./MyIconchat";
export default function ProductCard(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
    direction: "row",
    width: "960px",
    alignItems: "flex-start",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, rest, getOverrideProps(overrides, "ProductCard")), /*#__PURE__*/React.createElement(Image, _extends({
    width: "320px",
    height: "366px",
    shrink: "0",
    alignSelf: "stretch",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "image"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "24px",
    direction: "column",
    width: "640px",
    grow: "1",
    basis: "640px",
    height: "366px",
    position: "relative",
    padding: "32px 32px 32px 32px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "Card Area")), /*#__PURE__*/React.createElement(Text, _extends({
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
    children: "Classic Long Sleeve T-Shirt"
  }, getOverrideProps(overrides, "Classic Long Sleeve T-Shirt"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Ratings")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "8px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    height: "36px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Rating"))), /*#__PURE__*/React.createElement(Text, _extends({
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
    width: "19px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "72"
  }, getOverrideProps(overrides, "72")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Tags")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    width: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    shrink: "0",
    height: "24px",
    position: "relative",
    borderRadius: "32px",
    padding: "6px 8px 6px 8px",
    backgroundColor: "rgba(239,240,240,1)"
  }, getOverrideProps(overrides, "Badge13608"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    width: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    shrink: "0",
    height: "24px",
    position: "relative",
    borderRadius: "32px",
    padding: "6px 8px 6px 8px",
    backgroundColor: "rgba(239,240,240,1)"
  }, getOverrideProps(overrides, "Badge13609"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    width: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    shrink: "0",
    height: "24px",
    position: "relative",
    borderRadius: "32px",
    padding: "6px 8px 6px 8px",
    backgroundColor: "rgba(239,240,240,1)"
  }, getOverrideProps(overrides, "Badge13610")))), /*#__PURE__*/React.createElement(Text, _extends({
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
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Information about this product."
  }, getOverrideProps(overrides, "Information about this product."))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    alignItems: "flex-start",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Quote")), /*#__PURE__*/React.createElement(MyIconchat, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "MyIcon/chat"))), /*#__PURE__*/React.createElement(Text, _extends({
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
    width: "536px",
    grow: "1",
    basis: "536px",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "\u201CThis is a quote.\u201C"
  }, getOverrideProps(overrides, "\u201CThis is a quote.\u201C")))), /*#__PURE__*/React.createElement(View, _extends({
    height: "1px",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Divider"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "32px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Features")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Feature13617")), /*#__PURE__*/React.createElement(View, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Icon13618")), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "17.5899658203125px",
    height: "13.409912109375px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 17.5899658203125,
      height: 13.409912109375
    },
    paths: [{
      d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
      fill: "rgba(67,168,84,1)",
      fillRule: "nonzero"
    }],
    position: "absolute",
    top: "23.29%",
    bottom: "20.83%",
    left: "14.21%",
    right: "12.5%"
  }, getOverrideProps(overrides, "Vector13619")))), /*#__PURE__*/React.createElement(Text, _extends({
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
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Fast"
  }, getOverrideProps(overrides, "Fast")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Feature13621")), /*#__PURE__*/React.createElement(View, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Icon13622")), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "17.5899658203125px",
    height: "13.409912109375px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 17.5899658203125,
      height: 13.409912109375
    },
    paths: [{
      d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
      fill: "rgba(67,168,84,1)",
      fillRule: "nonzero"
    }],
    position: "absolute",
    top: "23.29%",
    bottom: "20.83%",
    left: "14.21%",
    right: "12.5%"
  }, getOverrideProps(overrides, "Vector13623")))), /*#__PURE__*/React.createElement(Text, _extends({
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
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Fun"
  }, getOverrideProps(overrides, "Fun")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Feature13625")), /*#__PURE__*/React.createElement(View, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Icon13626")), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "17.5899658203125px",
    height: "13.409912109375px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 17.5899658203125,
      height: 13.409912109375
    },
    paths: [{
      d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
      fill: "rgba(67,168,84,1)",
      fillRule: "nonzero"
    }],
    position: "absolute",
    top: "23.29%",
    bottom: "20.83%",
    left: "14.21%",
    right: "12.5%"
  }, getOverrideProps(overrides, "Vector13627")))), /*#__PURE__*/React.createElement(Text, _extends({
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
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Flirty"
  }, getOverrideProps(overrides, "Flirty")))))));
}