/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function HeroCard30(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="273px"
      height="140px"
      overflow="hidden"
      position="relative"
      borderRadius="4px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HeroCard30")}
    >
      <Flex
        gap="16px"
        position="absolute"
        top="11px"
        left="12px"
        direction="row"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Image
          width="91px"
          height="118px"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Rectangle 7")}
        ></Image>
        <Flex
          gap="40px"
          direction="column"
          shrink="0"
          height="118px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Body")}
        >
          <Flex
            gap="4px"
            direction="column"
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
              width="142px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Three Men in a Boat"
              {...getOverrideProps(overrides, "Three Men in a Boat")}
            ></Text>
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
              width="142px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="By Jerome K. Jerome"
              {...getOverrideProps(overrides, "By Jerome K. Jerome")}
            ></Text>
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
              width="142px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Catergory - Humorous"
              {...getOverrideProps(overrides, "Catergory - Humorous")}
            ></Text>
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
            width="142px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="20/250 pages left"
            {...getOverrideProps(overrides, "20/250 pages left")}
          ></Text>
        </Flex>
      </Flex>
    </View>
  );
}
