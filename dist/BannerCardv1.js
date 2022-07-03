function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
export default function BannerCard(props) {
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
    gap: "10px",
    direction: "column",
    position: "relative",
    borderRadius: "10px",
    padding: "57px 100px 57px 48px",
    backgroundColor: "rgba(119,67,172,1)",
    style: {
      //backgroundColor: isHovering ? '#f7f9fa' : '',
      //boxShadow: isHovering ? `1px 1px`:'',
      border: isHovering ? `1px solid #ebe6e6` : '',
      cursor: 'pointer'
    },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, rest, getOverrideProps(overrides, "BannerCard")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "228px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "BannerContent")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "40px",
    direction: "column",
    height: "166px",
    justifyContent: "space-between",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Frame 424")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "8px",
    direction: "column",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Content")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "24px",
    fontWeight: "500",
    color: "rgba(255,255,255,1)",
    lineHeight: "36px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Discover Books"
  }, getOverrideProps(overrides, "Discover Books"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(255,255,255,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    width: "591px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now even programmers who know close to nothing about this technology"
  }, getOverrideProps(overrides, "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now even programmers who know close to nothing about this technology")))), /*#__PURE__*/React.createElement(Button, _extends({
    display: "flex",
    gap: "0",
    direction: "row",
    width: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    shrink: "0",
    position: "relative",
    backgroundColor: "rgba(255,114,94,1)",
    size: "default",
    isDisabled: false,
    variation: "primary",
    children: "Discover"
  }, getOverrideProps(overrides, "Button")))), /*#__PURE__*/React.createElement(View, _extends({
    width: "199px",
    height: "168px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "freepik--Bookshelf--inject-8")))));
}