function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, SelectField, Text } from "@aws-amplify/ui-react";
export default function Headline(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "609px",
    direction: "row",
    alignItems: "center",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, rest, getOverrideProps(overrides, "Headline")), /*#__PURE__*/React.createElement(Text, _extends({
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
    children: "Search Results for J D Lee  "
  }, getOverrideProps(overrides, "Search Results for J D Lee"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "20px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    height: "44px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Options")), /*#__PURE__*/React.createElement(SelectField, _extends({
    display: "flex",
    gap: "8px",
    direction: "column",
    width: "134px",
    justifyContent: "center",
    shrink: "0",
    height: "44px",
    position: "relative",
    padding: "0px 0px 0px 0px",
    placeholder: "Categories",
    size: "default",
    isDisabled: false,
    labelHidden: true,
    variation: "default"
  }, getOverrideProps(overrides, "SelectField53442"))), /*#__PURE__*/React.createElement(SelectField, _extends({
    display: "flex",
    gap: "8px",
    direction: "column",
    width: "134px",
    justifyContent: "center",
    shrink: "0",
    height: "44px",
    position: "relative",
    padding: "0px 0px 0px 0px",
    placeholder: "Categories",
    size: "default",
    isDisabled: false,
    labelHidden: true,
    variation: "default"
  }, getOverrideProps(overrides, "SelectField92765")))));
}