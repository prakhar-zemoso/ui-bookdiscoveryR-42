function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MainContent123 from "./MainContent123v1";
import { Flex } from "@aws-amplify/ui-react";
export default function ReviewCard1(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "24px",
    direction: "row",
    alignItems: "flex-start",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, rest, getOverrideProps(overrides, "ReviewCard1")), /*#__PURE__*/React.createElement(MainContent123, _extends({
    display: "flex",
    gap: "10px",
    direction: "column",
    shrink: "0",
    height: "130px",
    position: "relative",
    border: "1px SOLID rgba(227,227,227,1)",
    borderRadius: "8px",
    padding: "11px 5px 11px 5px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "MainContent123176000"))), /*#__PURE__*/React.createElement(MainContent123, _extends({
    display: "flex",
    gap: "10px",
    direction: "column",
    shrink: "0",
    height: "130px",
    position: "relative",
    border: "1px SOLID rgba(227,227,227,1)",
    borderRadius: "8px",
    padding: "11px 5px 11px 5px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "MainContent123176011"))), /*#__PURE__*/React.createElement(MainContent123, _extends({
    display: "flex",
    gap: "10px",
    direction: "column",
    shrink: "0",
    height: "130px",
    position: "relative",
    border: "1px SOLID rgba(227,227,227,1)",
    borderRadius: "8px",
    padding: "11px 5px 11px 5px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "MainContent123176023"))));
}