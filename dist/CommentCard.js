function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyIconfavorite from "./MyIconfavorite";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import MyIconmorehoriz from "./MyIconmorehoriz";
import MyIconreply from "./MyIconreply";
import MyIconshuffle from "./MyIconshuffle";
import MyIconfavoriteborder from "./MyIconfavoriteborder";
import MyIconshare from "./MyIconshare";
export default function CommentCard(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "column",
    position: "relative",
    padding: "16px 16px 16px 16px",
    backgroundColor: "rgba(255,255,255,1)"
  }, rest, getOverrideProps(overrides, "CommentCard")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    alignItems: "flex-start",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Liked")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "9px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "User Liked")), /*#__PURE__*/React.createElement(MyIconfavorite, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "MyIcon/favorite"))), /*#__PURE__*/React.createElement(Text, _extends({
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
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Danny liked this"
  }, getOverrideProps(overrides, "Danny liked this"))))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    alignItems: "flex-start",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Body")), /*#__PURE__*/React.createElement(Image, _extends({
    width: "80px",
    height: "80px",
    shrink: "0",
    position: "relative",
    borderRadius: "64px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "image"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "8px",
    direction: "column",
    width: "351px",
    grow: "1",
    basis: "351px",
    height: "80px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Frame13682")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    alignItems: "flex-start",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Frame13683")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Frame13684")), /*#__PURE__*/React.createElement(Text, _extends({
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
    children: "Author"
  }, getOverrideProps(overrides, "Author"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(92,102,112,1)",
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
    children: "Timestamp"
  }, getOverrideProps(overrides, "Timestamp"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(92,102,112,1)",
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
    children: "Lorem ipsum"
  }, getOverrideProps(overrides, "Lorem ipsum")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
    direction: "row",
    width: "66px",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    grow: "1",
    basis: "66px",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Frame13688")), /*#__PURE__*/React.createElement(MyIconmorehoriz, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "MyIcon/more_horiz"))))), /*#__PURE__*/React.createElement(Text, _extends({
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
    children: "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"
  }, getOverrideProps(overrides, "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D"))))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "80px",
    direction: "row",
    alignItems: "flex-start",
    shrink: "0",
    alignSelf: "stretch",
    objectFit: "cover",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Share13691")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Share13692")), /*#__PURE__*/React.createElement(MyIconreply, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "MyIcon/reply"))), /*#__PURE__*/React.createElement(Text, _extends({
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
    children: "99"
  }, getOverrideProps(overrides, "9913694")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Repost")), /*#__PURE__*/React.createElement(MyIconshuffle, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "MyIcon/shuffle"))), /*#__PURE__*/React.createElement(Text, _extends({
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
    children: "99"
  }, getOverrideProps(overrides, "9913697")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Like")), /*#__PURE__*/React.createElement(MyIconfavoriteborder, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "MyIcon/favorite_border"))), /*#__PURE__*/React.createElement(Text, _extends({
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
    children: "99"
  }, getOverrideProps(overrides, "9913700")))), /*#__PURE__*/React.createElement(MyIconshare, _extends({
    width: "24px",
    height: "24px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "MyIcon/share")))));
}