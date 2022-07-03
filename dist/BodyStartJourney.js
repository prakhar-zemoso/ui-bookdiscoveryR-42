function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function BodyStartJourney(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "column",
    alignItems: "center",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, rest, getOverrideProps(overrides, "BodyStartJourney")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "atoms/logo"))), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(96,96,96,1)",
    lineHeight: "24px",
    textAlign: "center",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    width: "433px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Learning journeys mapped and recommended based on your grade, learning need and speed."
  }, getOverrideProps(overrides, "Learning journeys mapped and recommended based on your grade, learning need and speed."))), /*#__PURE__*/React.createElement(Button, _extends({
    display: "flex",
    gap: "0",
    direction: "row",
    width: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    shrink: "0",
    position: "relative",
    padding: "11px 23px 11px 23px",
    backgroundColor: "rgba(255,114,94,1)",
    size: "large",
    isDisabled: false,
    variation: "primary",
    children: "Start your Journey"
  }, getOverrideProps(overrides, "Button"))));
}