/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function CardSearchjdlee(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="row"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CardSearchjdlee")}
    >
      <Image
        width="188px"
        height="88px"
        shrink="0"
        position="relative"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 7")}
      ></Image>
      <Flex
        gap="4px"
        direction="column"
        shrink="0"
        height="76px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="400"
          color="rgba(23,23,23,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Super Simple Biology"
          {...getOverrideProps(overrides, "Inorganic Chemistry")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="rgba(137,137,137,1)"
          lineHeight="22px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="By D K Hudson"
          {...getOverrideProps(overrides, "By Jerome K. Jerome")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="rgba(137,137,137,1)"
          lineHeight="22px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Catergory - Humorous"
          {...getOverrideProps(overrides, "Catergory - Humorous")}
        ></Text>
      </Flex>
    </Flex>
  );
}
