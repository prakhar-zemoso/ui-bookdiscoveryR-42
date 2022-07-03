/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function MyIconArrowLeftFilled(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="24px"
      height="24px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="4px"
      padding="6px 6px 6px 6px"
      backgroundColor="rgba(255,114,94,1)"
      {...rest}
      {...getOverrideProps(overrides, "MyIconArrowLeftFilled")}
    >
      <Icon
        width="4px"
        height="8px"
        viewBox={{ minX: 0, minY: 0, width: 4, height: 8 }}
        paths={[
          {
            d: "M3.46967 8.53033C3.76256 8.82322 4.23744 8.82322 4.53033 8.53033C4.82322 8.23744 4.82322 7.76256 4.53033 7.46967L3.46967 8.53033ZM0 4L-0.53033 3.46967C-0.823223 3.76256 -0.823223 4.23744 -0.53033 4.53033L0 4ZM4.53033 0.53033C4.82322 0.237437 4.82322 -0.237437 4.53033 -0.53033C4.23744 -0.823223 3.76256 -0.823223 3.46967 -0.53033L4.53033 0.53033ZM4.53033 7.46967L0.53033 3.46967L-0.53033 4.53033L3.46967 8.53033L4.53033 7.46967ZM0.53033 4.53033L4.53033 0.53033L3.46967 -0.53033L-0.53033 3.46967L0.53033 4.53033Z",
            stroke: "rgba(255,255,255,1)",
            fillRule: "nonzero",
            strokeLinejoin: "round",
            strokeWidth: 1,
          },
        ]}
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
    </Flex>
  );
}
