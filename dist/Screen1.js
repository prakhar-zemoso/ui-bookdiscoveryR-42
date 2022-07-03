function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Screen1(props) {
  const {
    overrides,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(View, _extends({
    width: "1366px",
    height: "2921px",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(255,255,255,1)"
  }, rest, getOverrideProps(overrides, "Screen1")), /*#__PURE__*/React.createElement(View, _extends({
    width: "1366px",
    height: "68px",
    position: "absolute",
    top: "0px",
    left: "0px",
    padding: "0px 0px 0px 0px",
    backgroundImage: "linear-gradient(-90deg, rgba(140,82,198,1), rgba(104,55,153,1))"
  }, getOverrideProps(overrides, " header")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    position: "absolute",
    top: "19px",
    left: "100px",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "logo"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    position: "absolute",
    top: "19px",
    left: "303px",
    direction: "row",
    alignItems: "flex-start",
    padding: "4px 4px 4px 4px"
  }, getOverrideProps(overrides, "Navbar Tabs14873")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(255,255,255,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Home"
  }, getOverrideProps(overrides, "Home")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "4px",
    position: "absolute",
    top: "19px",
    left: "361px",
    direction: "row",
    alignItems: "center",
    borderRadius: "4px 4px 4px 4px",
    padding: "4px 4px 4px 4px"
  }, getOverrideProps(overrides, "Navbar Tabs14875")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(255,255,255,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Explore"
  }, getOverrideProps(overrides, "Explore"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    height: "16px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "atoms/icons/dropdown14877")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "4px",
    position: "absolute",
    top: "19px",
    left: "448px",
    direction: "row",
    alignItems: "center",
    borderRadius: "4px 4px 4px 4px",
    padding: "4px 4px 4px 4px"
  }, getOverrideProps(overrides, "Navbar Tabs14878")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(255,255,255,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "My library"
  }, getOverrideProps(overrides, "My library"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    width: "fit-content",
    alignItems: "flex-start",
    shrink: "0",
    height: "16px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "atoms/icons/dropdown14880")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "4px",
    position: "absolute",
    top: "13px",
    left: "601px",
    direction: "row",
    width: "513px",
    alignItems: "center",
    border: "1px SOLID rgba(227,227,227,1)",
    borderRadius: "8px",
    padding: "5px 15px 5px 15px",
    backgroundColor: "rgba(255,255,255,1)"
  }, getOverrideProps(overrides, "Searchfield")), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "atoms/icons/search"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    height: "30px",
    position: "relative",
    padding: "4px 4px 4px 4px"
  }, getOverrideProps(overrides, "Placeholder")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
    color: "rgba(96,96,96,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Search here by book title, author or ISBN"
  }, getOverrideProps(overrides, "Search here by book title, author or ISBN"))))), /*#__PURE__*/React.createElement(View, _extends({
    width: "24px",
    height: "24px",
    position: "absolute",
    top: "22px",
    left: "1178px",
    overflow: "hidden",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "notification"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    position: "absolute",
    top: "14px",
    left: "1226px",
    direction: "row",
    alignItems: "flex-start",
    padding: "4px 4px 4px 4px"
  }, getOverrideProps(overrides, "avatar")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    position: "absolute",
    top: "124px",
    left: "100px",
    direction: "column",
    borderRadius: "10px",
    padding: "57px 100px 57px 48px",
    backgroundColor: "rgba(119,67,172,1)"
  }, getOverrideProps(overrides, "BannerCard")), /*#__PURE__*/React.createElement(Flex, _extends({
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
    shrink: "0",
    height: "166px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Content Area")), /*#__PURE__*/React.createElement(Flex, _extends({
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
  }, getOverrideProps(overrides, "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now even programmers who know close to nothing about this technology")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    direction: "row",
    width: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    shrink: "0",
    position: "relative",
    borderRadius: "4px",
    padding: "8px 24px 8px 24px",
    backgroundColor: "rgba(255,114,94,1)"
  }, getOverrideProps(overrides, "Buttons")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "700",
    color: "rgba(255,255,255,1)",
    lineHeight: "22px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Discover"
  }, getOverrideProps(overrides, "Discover"))))), /*#__PURE__*/React.createElement(View, _extends({
    width: "199px",
    height: "168px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "freepik--Bookshelf--inject-8"))))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "24px",
    position: "absolute",
    top: "470px",
    left: "100px",
    direction: "row",
    alignItems: "flex-start",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Frame 20")), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "104px",
    shrink: "0",
    position: "relative",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(250,250,250,1)"
  }, getOverrideProps(overrides, "state=inactive14897"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "104px",
    shrink: "0",
    position: "relative",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(250,250,250,1)"
  }, getOverrideProps(overrides, "state=inactive14898"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "104px",
    shrink: "0",
    position: "relative",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(250,250,250,1)"
  }, getOverrideProps(overrides, "state=inactive14899"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "104px",
    shrink: "0",
    position: "relative",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(250,250,250,1)"
  }, getOverrideProps(overrides, "state=inactive14900")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "642px",
    position: "absolute",
    top: "678px",
    left: "100px",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Headings14901")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "24px",
    fontWeight: "500",
    color: "rgba(23,23,23,1)",
    lineHeight: "36px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    width: "440px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Books You are Reading"
  }, getOverrideProps(overrides, "Books You are Reading14902"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Property 1=inactive14903")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "642px",
    position: "absolute",
    top: "974px",
    left: "100px",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Headings14904")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "24px",
    fontWeight: "500",
    color: "rgba(23,23,23,1)",
    lineHeight: "36px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    width: "440px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Books You are Reading"
  }, getOverrideProps(overrides, "Books You are Reading14905"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Property 1=inactive14906")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "642px",
    position: "absolute",
    top: "974px",
    left: "100px",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Headings14907")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "24px",
    fontWeight: "500",
    color: "rgba(23,23,23,1)",
    lineHeight: "36px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    width: "440px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Books You are Reading"
  }, getOverrideProps(overrides, "Books You are Reading14908"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Property 1=inactive14909")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "642px",
    position: "absolute",
    top: "1515px",
    left: "100px",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Headings14910")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "24px",
    fontWeight: "500",
    color: "rgba(23,23,23,1)",
    lineHeight: "36px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    width: "440px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Books You are Reading"
  }, getOverrideProps(overrides, "Books You are Reading14911"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Property 1=inactive14912")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "642px",
    position: "absolute",
    top: "2380px",
    left: "100px",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Headings14913")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "24px",
    fontWeight: "500",
    color: "rgba(23,23,23,1)",
    lineHeight: "36px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    width: "440px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Books You are Reading"
  }, getOverrideProps(overrides, "Books You are Reading14914"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Property 1=inactive14915")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "642px",
    position: "absolute",
    top: "2056px",
    left: "100px",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Headings14916")), /*#__PURE__*/React.createElement(Text, _extends({
    fontFamily: "Roboto",
    fontSize: "24px",
    fontWeight: "500",
    color: "rgba(23,23,23,1)",
    lineHeight: "36px",
    textAlign: "left",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    width: "440px",
    shrink: "0",
    position: "relative",
    padding: "0px 0px 0px 0px",
    whiteSpace: "pre-wrap",
    children: "Books You are Reading"
  }, getOverrideProps(overrides, "Books You are Reading14917"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "0",
    direction: "row",
    width: "fit-content",
    alignItems: "center",
    shrink: "0",
    height: "24px",
    position: "relative",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Property 1=inactive14918")))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    position: "absolute",
    top: "730px",
    left: "100px",
    direction: "column",
    boxShadow: "0px 0px 8px rgba(0.4901960790157318, 0.4901960790157318, 0.4901960790157318, 0.11999999731779099)",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Property 1=Default14919"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    position: "absolute",
    top: "730px",
    left: "398px",
    direction: "column",
    boxShadow: "0px 0px 8px rgba(0.4901960790157318, 0.4901960790157318, 0.4901960790157318, 0.11999999731779099)",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Property 1=Default14920"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    position: "absolute",
    top: "730px",
    left: "696px",
    direction: "column",
    boxShadow: "0px 0px 8px rgba(0.4901960790157318, 0.4901960790157318, 0.4901960790157318, 0.11999999731779099)",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Property 1=Default14921"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "10px",
    position: "absolute",
    top: "730px",
    left: "994px",
    direction: "column",
    boxShadow: "0px 0px 8px rgba(0.4901960790157318, 0.4901960790157318, 0.4901960790157318, 0.11999999731779099)",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "Property 1=Default14922"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "385px",
    position: "absolute",
    top: "1026px",
    left: "100px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "state=inactive14923"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "385px",
    position: "absolute",
    top: "1567px",
    left: "100px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "state=inactive14924"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "385px",
    position: "absolute",
    top: "2432px",
    left: "100px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "state=inactive14925"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "385px",
    position: "absolute",
    top: "1026px",
    left: "398px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "state=inactive14926"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "385px",
    position: "absolute",
    top: "1567px",
    left: "398px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "state=inactive14927"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "385px",
    position: "absolute",
    top: "2432px",
    left: "398px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "state=inactive14928"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "385px",
    position: "absolute",
    top: "1026px",
    left: "696px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "state=inactive14929"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "385px",
    position: "absolute",
    top: "1567px",
    left: "696px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "state=inactive14930"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "385px",
    position: "absolute",
    top: "2432px",
    left: "696px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "state=inactive14931"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "385px",
    position: "absolute",
    top: "1026px",
    left: "994px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "state=inactive14932"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "385px",
    position: "absolute",
    top: "1567px",
    left: "994px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "state=inactive14933"))), /*#__PURE__*/React.createElement(View, _extends({
    width: "273px",
    height: "385px",
    position: "absolute",
    top: "2432px",
    left: "994px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "state=inactive14934"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "12px",
    position: "absolute",
    top: "2108px",
    left: "100px",
    direction: "column",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "organisms/card/topics14935"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "12px",
    position: "absolute",
    top: "2108px",
    left: "298px",
    direction: "column",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "organisms/card/topics14936"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "12px",
    position: "absolute",
    top: "2108px",
    left: "496px",
    direction: "column",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "organisms/card/topics14937"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "12px",
    position: "absolute",
    top: "2108px",
    left: "694px",
    direction: "column",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "organisms/card/topics14938"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "12px",
    position: "absolute",
    top: "2108px",
    left: "892px",
    direction: "column",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "organisms/card/topics14939"))), /*#__PURE__*/React.createElement(Flex, _extends({
    gap: "12px",
    position: "absolute",
    top: "2108px",
    left: "1090px",
    direction: "column",
    borderRadius: "8px",
    padding: "0px 0px 0px 0px"
  }, getOverrideProps(overrides, "organisms/card/topics14940"))));
}