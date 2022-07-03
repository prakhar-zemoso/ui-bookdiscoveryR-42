function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import HeroCard30 from "./HeroCard30v1";
import { Flex } from "@aws-amplify/ui-react";
export default function Allignment2(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "25px",
    direction: "row",
    alignItems: "flex-start",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, rest, getOverrideProps(overrides, "Allignment2")), /*#__PURE__*/React.createElement(HeroCard30, _extends({
    width: "273px",
    height: "140px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    borderRadius: "4px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "HeroCard3026897"))), /*#__PURE__*/React.createElement(HeroCard30, _extends({
    width: "273px",
    height: "140px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    borderRadius: "4px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "HeroCard3026906"))), /*#__PURE__*/React.createElement(HeroCard30, _extends({
    width: "273px",
    height: "140px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    borderRadius: "4px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "HeroCard3026918"))), /*#__PURE__*/React.createElement(HeroCard30, _extends({
    width: "273px",
    height: "140px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    borderRadius: "4px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "HeroCard3026927"))));
}