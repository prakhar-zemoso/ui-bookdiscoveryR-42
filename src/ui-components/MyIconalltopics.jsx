/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon } from "@aws-amplify/ui-react";
export default function MyIconalltopics(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="fit-content"
      alignItems="flex-start"
      position="relative"
      padding="4px 4px 4px 4px"
      {...rest}
      {...getOverrideProps(overrides, "MyIconalltopics")}
    >
      <Icon
        width="16px"
        height="16px"
        viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
        paths={[
          {
            d: "M0 4L4 4L4 0L0 0L0 4ZM6 16L10 16L10 12L6 12L6 16ZM0 16L4 16L4 12L0 12L0 16ZM0 10L4 10L4 6L0 6L0 10ZM6 10L10 10L10 6L6 6L6 10ZM12 0L12 4L16 4L16 0L12 0ZM6 4L10 4L10 0L6 0L6 4ZM12 10L16 10L16 6L12 6L12 10ZM12 16L16 16L16 12L12 12L12 16Z",
            fill: "rgba(255,114,94,1)",
            fillRule: "nonzero",
          },
        ]}
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
    </Flex>
  );
}
