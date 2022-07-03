function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function MainBody(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "column",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, rest, getOverrideProps(overrides, "MainBody")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "500",
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
    children: "About Author"
  }, getOverrideProps(overrides, "About Author"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "12px",
    direction: "column",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Body")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "20px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "IamgeButton")), /*#__PURE__*/React.createElement(Icon, _extends({
    width: "80px",
    height: "80px",
    viewBox: {
      minX: 0,
      minY: 0,
      width: 80,
      height: 80
    },
    paths: [{
      d: "M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z",
      fillRule: "nonzero"
    }],
    shrink: "0",
    position: "relative"
  }, getOverrideProps(overrides, "Ellipse 9"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "4px",
    direction: "column",
    shrink: "0",
    height: "70px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Action")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "4px",
    direction: "column",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "AuthorName")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
    color: "rgba(23,23,23,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "By J D Lee"
  }, getOverrideProps(overrides, "By J D Lee"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "400",
    color: "rgba(137,137,137,1)",
    lineHeight: "16px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "2000 Followers"
  }, getOverrideProps(overrides, "2000 Followers")))), /*#__PURE__*/React.createElement(Button, _extends({
    display: "flex",
    gap: "0",
    direction: "row",
    width: "102px",
    height: "26px",
    justifyContent: "center",
    alignItems: "center",
    shrink: "0",
    position: "relative",
    border: "1px SOLID rgba(255,114,94,1)",
    borderRadius: "5px",
    size: "small",
    isDisabled: false,
    variation: "default",
    children: "Following"
  }, getOverrideProps(overrides, "Button"))))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(137,137,137,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    width: "767px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur."
  }, getOverrideProps(overrides, "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.")))));
}