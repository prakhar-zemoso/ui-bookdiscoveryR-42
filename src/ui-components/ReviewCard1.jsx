/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MainContent123 from "./MainContent123";
import { Flex } from "@aws-amplify/ui-react";
export default function ReviewCard1(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ReviewCard1")}
    >
      <MainContent123
        display="flex"
        gap="10px"
        direction="column"
        shrink="0"
        height="130px"
        position="relative"
        border="1px SOLID rgba(227,227,227,1)"
        borderRadius="8px"
        padding="11px 5px 11px 5px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MainContent123176000")}
      ></MainContent123>
      <MainContent123
        display="flex"
        gap="10px"
        direction="column"
        shrink="0"
        height="130px"
        position="relative"
        border="1px SOLID rgba(227,227,227,1)"
        borderRadius="8px"
        padding="11px 5px 11px 5px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MainContent123176011")}
      ></MainContent123>
      <MainContent123
        display="flex"
        gap="10px"
        direction="column"
        shrink="0"
        height="130px"
        position="relative"
        border="1px SOLID rgba(227,227,227,1)"
        borderRadius="8px"
        padding="11px 5px 11px 5px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "MainContent123176023")}
      ></MainContent123>
    </Flex>
  );
}
