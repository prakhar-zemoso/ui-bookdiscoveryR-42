function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import HeroCard80 from "./HeroCard80";
import { Flex } from "@aws-amplify/ui-react";
export default function AlsoRead(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "16px",
    direction: "column",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, rest, getOverrideProps(overrides, "AlsoRead")), /*#__PURE__*/React.createElement(HeroCard80, _extends({
    width: "275px",
    height: "134px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "HeroCard80124881"))), /*#__PURE__*/React.createElement(HeroCard80, _extends({
    width: "275px",
    height: "134px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "HeroCard80124894"))), /*#__PURE__*/React.createElement(HeroCard80, _extends({
    width: "275px",
    height: "134px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "HeroCard80124908"))), /*#__PURE__*/React.createElement(HeroCard80, _extends({
    width: "275px",
    height: "134px",
    shrink: "0",
    overflow: "hidden",
    position: "relative",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "HeroCard80124921"))));
}