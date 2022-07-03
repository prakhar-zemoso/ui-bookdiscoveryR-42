/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyIconArrowLeftOutlined from "./MyIconArrowLeftOutlined";
import NumberFilled from "./NumberFilled";
import NumberOutlined from "./NumberOutlined";
import MyIconmorehorizOutlined from "./MyIconmorehorizOutlined";
import MyIconArrowRightOutlined from "./MyIconArrowRightOutlined";
import { Flex } from "@aws-amplify/ui-react";
export default function PageNumbers(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="4px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PageNumbers")}
    >
      <MyIconArrowLeftOutlined
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
        border="1px SOLID rgba(255,114,94,1)"
        borderRadius="4px"
        padding="5px 5px 5px 5px"
        {...getOverrideProps(overrides, "MyIcon/Arrow_Left_Outlined")}
      ></MyIconArrowLeftOutlined>
      <NumberFilled
        display="flex"
        gap="10px"
        direction="column"
        shrink="0"
        height="24px"
        overflow="hidden"
        position="relative"
        borderRadius="4px"
        padding="4px 8.5px 4px 8.5px"
        backgroundColor="rgba(255,114,94,1)"
        {...getOverrideProps(overrides, "Number_Filled")}
      ></NumberFilled>
      <NumberOutlined
        display="flex"
        gap="10px"
        direction="column"
        shrink="0"
        height="24px"
        overflow="hidden"
        position="relative"
        border="1px SOLID rgba(255,114,94,1)"
        borderRadius="4px"
        padding="3px 7.5px 3px 7.5px"
        {...getOverrideProps(overrides, "Number_Outlined125078")}
      ></NumberOutlined>
      <MyIconmorehorizOutlined
        width="24px"
        height="24px"
        shrink="0"
        overflow="hidden"
        position="relative"
        border="1px SOLID rgba(255,114,94,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MyIcon/more_horiz_Outlined")}
      ></MyIconmorehorizOutlined>
      <NumberOutlined
        display="flex"
        gap="10px"
        direction="column"
        shrink="0"
        height="24px"
        overflow="hidden"
        position="relative"
        border="1px SOLID rgba(255,114,94,1)"
        borderRadius="4px"
        padding="3px 7.5px 3px 7.5px"
        {...getOverrideProps(overrides, "Number_Outlined125087")}
      ></NumberOutlined>
      <NumberOutlined
        display="flex"
        gap="10px"
        direction="column"
        shrink="0"
        height="24px"
        overflow="hidden"
        position="relative"
        border="1px SOLID rgba(255,114,94,1)"
        borderRadius="4px"
        padding="3px 4px 3px 4px"
        {...getOverrideProps(overrides, "Number_Outlined125089")}
      ></NumberOutlined>
      <MyIconArrowRightOutlined
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="24px"
        position="relative"
        border="1px SOLID rgba(255,114,94,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MyIcon/Arrow_Right_Outlined")}
      ></MyIconArrowRightOutlined>
    </Flex>
  );
}
