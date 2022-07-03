function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import CardSearchjdlee from "./CardSearchjdleev1";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function HeroCard110(props) {
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
    width: "513px",
    height: "544px",
    overflow: "hidden",
    position: "relative",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)" // style={{
    //   //backgroundColor: isHovering ? '#f7f9fa' : '',
    //   //boxShadow: isHovering ? `1px 1px`:'',
    //   border :isHovering ? `1px solid #ebe6e6` :'',
    //   boxShadow: isHovering ? `1px 2px 2px #9E9E9E`:'',
    //   cursor:'pointer'
    //  }}

  }, rest, getOverrideProps(overrides, "HeroCard110")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    position: "absolute",
    top: "32px",
    left: "24px",
    direction: "column",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Body")), /*#__PURE__*/React.createElement(CardSearchjdlee, _extends({
    display: "flex",
    gap: "32px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "CardSearchjdlee115533"))), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "465px",
    height: "0px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 465,
      height: 1
    },
    paths: [{
      d: "M0 0.5L465 0.5L465 -0.5L0 -0.5L0 0.5Z",
      stroke: "rgba(227,227,227,1)",
      fillRule: "nonzero",
      strokeWidth: 1
    }],
    shrink: "0",
    position: "relative"
  }, getOverrideProps(overrides, "Vector 3"))), /*#__PURE__*/React.createElement(CardSearchjdlee, _extends({
    display: "flex",
    gap: "32px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "CardSearchjdlee115541"))), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "465px",
    height: "0px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 465,
      height: 1
    },
    paths: [{
      d: "M0 0.5L465 0.5L465 -0.5L0 -0.5L0 0.5Z",
      stroke: "rgba(227,227,227,1)",
      fillRule: "nonzero",
      strokeWidth: 1
    }],
    shrink: "0",
    position: "relative"
  }, getOverrideProps(overrides, "Vector 4"))), /*#__PURE__*/React.createElement(CardSearchjdlee, _extends({
    display: "flex",
    gap: "32px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "CardSearchjdlee115567"))), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "465px",
    height: "0px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 465,
      height: 1
    },
    paths: [{
      d: "M0 0.5L465 0.5L465 -0.5L0 -0.5L0 0.5Z",
      stroke: "rgba(227,227,227,1)",
      fillRule: "nonzero",
      strokeWidth: 1
    }],
    shrink: "0",
    position: "relative"
  }, getOverrideProps(overrides, "Vector 5"))), /*#__PURE__*/React.createElement(CardSearchjdlee, _extends({
    display: "flex",
    gap: "32px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "CardSearchjdlee115574"))), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "465px",
    height: "0px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 465,
      height: 1
    },
    paths: [{
      d: "M0 0.5L465 0.5L465 -0.5L0 -0.5L0 0.5Z",
      stroke: "rgba(227,227,227,1)",
      fillRule: "nonzero",
      strokeWidth: 1
    }],
    shrink: "0",
    position: "relative"
  }, getOverrideProps(overrides, "Vector 6")))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(255,114,94,1)",
    lineHeight: "24px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    width: "100px",
    position: "absolute",
    top: "508px",
    left: "206px",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "See all results",
    style: {
      backgroundColor: isHovering ? '#f7f7f5' : '',
      //color: isHovering ? 'white' : '',
      cursor: 'pointer'
    },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, getOverrideProps(overrides, "See all results"))));
}