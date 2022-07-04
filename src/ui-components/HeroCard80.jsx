/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import MyIconmorehoriz from "./MyIconmorehoriz";
import MyIconStarFocused from "./MyIconStarFocused";
export default function HeroCard80(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="275px"
      height="134px"
      overflow="hidden"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HeroCard80")}
    >
      <Flex
        gap="3px"
        position="absolute"
        top="8px"
        left="105px"
        direction="column"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "main Body")}
      >
        <Flex
          gap="21px"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="400"
            color="rgba(23,23,23,1)"
            lineHeight="22px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Inorganic Chemistry"
            {...getOverrideProps(overrides, "Inorganic Chemistry")}
          ></Text>
          <MyIconmorehoriz
            width="16px"
            height="16px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "MyIcon/more_horiz")}
          ></MyIconmorehoriz>
        </Flex>
        <Text
          fontFamily="Roboto"
          fontSize="12px"
          fontWeight="400"
          color="rgba(137,137,137,1)"
          lineHeight="16px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Catergory - Chemistry"
          {...getOverrideProps(overrides, "Catergory - Chemistry")}
        ></Text>
        <Flex
          gap="0"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Rating")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="12px"
            fontWeight="400"
            color="rgba(137,137,137,1)"
            lineHeight="16px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="4.5"
            {...getOverrideProps(overrides, "4.5")}
          ></Text>
          <MyIconStarFocused
            display="flex"
            gap="10px"
            direction="column"
            shrink="0"
            height="24px"
            overflow="hidden"
            position="relative"
            borderRadius="8px"
            padding="6px 6px 6px 6px"
            {...getOverrideProps(overrides, "MyIcon/StarFocused")}
          ></MyIconStarFocused>
        </Flex>
        <Text
          fontFamily="Roboto"
          fontSize="12px"
          fontWeight="400"
          color="rgba(137,137,137,1)"
          lineHeight="16px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="830 reviews"
          {...getOverrideProps(overrides, "830 reviews")}
        ></Text>
      </Flex>
      <Image
        width="91px"
        height="118px"
        position="absolute"
        top="8px"
        left="8px"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 7")}
      ></Image>
    </View>
  );
}
