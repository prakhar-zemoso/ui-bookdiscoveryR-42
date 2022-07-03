function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import MyIconmorehoriz from "./MyIconmorehoriz";
import MyIconStarFocused from "./MyIconStarFocused";
import MyIconshare from "./MyIconsharev1";
import MyIconbookmarkborder from "./MyIconbookmarkborderv1";
export default function HeroCrad60(props) {
  const {
    overrides,
    ...rest
  } = props;
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return /*#__PURE__*/React.createElement(View, _extends({
    width: "571px",
    height: "287px",
    overflow: "hidden",
    position: "relative",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)",
    style: {
      //backgroundColor: isHovering ? '#f7f9fa' : '',
      boxShadow: isHovering ? `1px 2px 2px #9E9E9E` : '',
      //color: isHovering ? 'white' : '',
      cursor: 'pointer'
    },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, rest, getOverrideProps(overrides, "HeroCrad60")), /*#__PURE__*/React.createElement(Image, _extends({
    width: "184px",
    height: "239px",
    position: "absolute",
    top: "24px",
    left: "24px",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Rectangle 13"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "8px",
    position: "absolute",
    top: "80px",
    left: "252px",
    direction: "column",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Content")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "500",
    color: "rgba(96,96,96,1)",
    lineHeight: "24px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    width: "295px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Inorganic Chemistry"
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
    width: "294.92px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more"
  }, getOverrideProps(overrides, "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "400",
    color: "rgba(137,137,137,1)",
    lineHeight: "16px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    width: "142px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Catergory - Chemistry"
  }, getOverrideProps(overrides, "Catergory - Chemistry")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "177px",
    position: "absolute",
    top: "24px",
    left: "252px",
    direction: "row",
    alignItems: "flex-start",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Frame 421")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "15px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    height: "38px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Author53426")), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "32px",
    height: "32px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 32,
      height: 32
    },
    paths: [{
      d: "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z",
      fillRule: "nonzero"
    }],
    shrink: "0",
    position: "relative"
  }, getOverrideProps(overrides, "Ellipse 7"))), /*#__PURE__*/React.createElement(Flex, _extends({
    padding: "0px 0px 0px 0px",
    width: "46.83px",
    height: "38px",
    shrink: "0",
    position: "relative"
  }, getOverrideProps(overrides, "Group 33")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(23,23,23,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    width: "46.83px",
    position: "absolute",
    top: "0px",
    left: "0px",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "J D Lee"
  }, getOverrideProps(overrides, "J D Lee"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "400",
    color: "rgba(137,137,137,1)",
    lineHeight: "16px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    width: "35.87px",
    position: "absolute",
    top: "22px",
    left: "0px",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Author"
  }, getOverrideProps(overrides, "Author53406"))))), /*#__PURE__*/React.createElement(MyIconmorehoriz, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "MyIcon/more_horiz")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    position: "absolute",
    top: "219px",
    left: "252px",
    direction: "row",
    alignItems: "flex-end",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Icons_Ratings")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "4px",
    direction: "column",
    shrink: "0",
    height: "44px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Frame 422")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
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
    width: "16.94px",
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
    width: "225px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "830 ratings"
  }, getOverrideProps(overrides, "830 ratings")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "12px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Icons")), /*#__PURE__*/React.createElement(MyIconshare, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "MyIcon/share"))), /*#__PURE__*/React.createElement(MyIconbookmarkborder, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "MyIcon/bookmark_border"))))));
}