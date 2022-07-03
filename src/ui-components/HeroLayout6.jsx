/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function HeroLayout6(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1166px"
      height="282px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HeroLayout6")}
    >
      <Flex
        gap="10px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="36.28%"
        direction="column"
        width="743px"
        height="282px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        borderRadius="10px 0px 0px 10px"
        padding="57px 48px 57px 48px"
        backgroundColor="rgba(119,67,172,1)"
        {...getOverrideProps(overrides, "HeroLayout3")}
      >
        <Flex
          gap="40px"
          direction="column"
          height="168px"
          justifyContent="space-between"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Body")}
        >
          <Flex
            gap="8px"
            direction="column"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Body")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="24px"
              fontWeight="500"
              color="rgba(255,255,255,1)"
              lineHeight="36px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="647px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Discover Books"
              {...getOverrideProps(
                overrides,
                "Ut enim ad minim veniam quis nostrud"
              )}
            ></Text>
            <Text
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="22px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="647px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now even programmers who know close to nothing about this technology"
              {...getOverrideProps(
                overrides,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              )}
            ></Text>
          </Flex>
          <Button
            display="flex"
            gap="0"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            backgroundColor="rgba(255,114,94,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Primary Button"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
      <Image
        position="absolute"
        top="0%"
        bottom="0%"
        height="100%"
        left="63.72%"
        right="0%"
        width="36.28%"
        borderRadius="0px 8px 8px 0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "book-library-with-open-textbook 1")}
      ></Image>
    </View>
  );
}
