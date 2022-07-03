/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyIconArrowLeft from "./MyIconArrowLeft";
import { Flex } from "@aws-amplify/ui-react";
export default function MyIconArrowRightOutlined(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(255,114,94,1)"
      borderRadius="4px"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "MyIconArrowRightOutlined")}
    >
      <MyIconArrowLeft
        display="flex"
        gap="10px"
        direction="row"
        width="24px"
        height="24px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        overflow="hidden"
        position="relative"
        borderRadius="4px"
        padding="6px 6px 6px 6px"
        {...getOverrideProps(overrides, "MyIcon/Arrow_Left")}
      ></MyIconArrowLeft>
    </Flex>
  );
}
