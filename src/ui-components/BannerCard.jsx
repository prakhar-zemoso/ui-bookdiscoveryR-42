/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
export default function BannerCard(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      position="relative"
      borderRadius="10px"
      padding="57px 100px 57px 48px"
      backgroundColor="rgba(119,67,172,1)"
      {...rest}
      {...getOverrideProps(overrides, "BannerCard")}
    >
      <Flex
        gap="228px"
        direction="row"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "BannerContent")}
      >
        <Flex
          gap="40px"
          direction="column"
          height="166px"
          justifyContent="space-between"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 424")}
        >
          <Flex
            gap="8px"
            direction="column"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Content")}
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
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Discover Books"
              {...getOverrideProps(overrides, "Discover Books")}
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
              width="591px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now even programmers who know close to nothing about this technology"
              {...getOverrideProps(
                overrides,
                "Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now even programmers who know close to nothing about this technology"
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
            children="Discover"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
        <View
          width="199px"
          height="168px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "freepik--Bookshelf--inject-8")}
        ></View>
      </Flex>
    </Flex>
  );
}
