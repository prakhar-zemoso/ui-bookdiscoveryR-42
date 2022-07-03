function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import { styled } from "@mui/styles";
export default function CardSearchjdlee(props) {
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

  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "32px",
    direction: "row",
    alignItems: "center",
    position: "relative",
    padding: "0px 0px 0px 0px",
    style: {
      backgroundColor: isHovering ? '#f7f7f5' : '',
      //boxShadow: isHovering ? `1px 1px 1px 1px #9E9E9E`:'',
      border: isHovering ? `1px #121111` : '',
      cursor: 'pointer'
    },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, rest, getOverrideProps(overrides, "CardSearchjdlee")), /*#__PURE__*/React.createElement(Image, _extends({
    width: "188px",
    height: "88px",
    shrink: "0",
    position: "relative",
    borderRadius: "4px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Rectangle 7"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "4px",
    direction: "column",
    shrink: "0",
    height: "76px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Body")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(23,23,23,1)",
    lineHeight: "24px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Super Simple Biology"
  }, getOverrideProps(overrides, "Inorganic Chemistry"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(137,137,137,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "By D K Hudson"
  }, getOverrideProps(overrides, "By Jerome K. Jerome"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(137,137,137,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Catergory - Humorous"
  }, getOverrideProps(overrides, "Catergory - Humorous")))));
}