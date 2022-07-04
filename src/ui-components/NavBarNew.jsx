/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Icon,
  Image,
  SearchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function NavBarNew(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="50px"
      direction="row"
      width="1366px"
      height="68px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(136,79,193,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBarNew")}
    >
      <Flex
        gap="10px"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="30px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "logo")}
      >
        <View
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "auto_stories_black_24dp 1")}
        >
          <View
            padding="0px 0px 0px 0px"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Group26854")}
          >
            <Icon
              width="24px"
              height="24px"
              viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
              paths={[]}
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector26855")}
            ></Icon>
          </View>
          <View
            padding="0px 0px 0px 0px"
            position="absolute"
            top="5.02%"
            bottom="9.55%"
            left="4.17%"
            right="-4.17%"
            {...getOverrideProps(overrides, "Group26856")}
          >
            <Icon
              width="24px"
              height="20.503173828125px"
              viewBox={{ minX: 0, minY: 0, width: 24, height: 20.503173828125 }}
              paths={[
                {
                  d: "M18.7091 0.157766L14.3455 4.5214C14.2364 4.63049 14.1818 4.7614 14.1818 4.91413L14.1818 13.8269C14.1818 14.2959 14.7382 14.5469 15.0873 14.2305L19.4509 10.3032C19.5709 10.205 19.6364 10.0523 19.6364 9.89958L19.6364 0.550493C19.6364 0.0595837 19.0473 -0.180416 18.7091 0.157766ZM23.4218 4.35776C22.9091 4.09595 22.3745 3.87777 21.8182 3.69231L21.8182 16.8159C20.5745 16.3687 19.2982 16.1396 18 16.1396C15.9273 16.1396 13.8764 16.7287 12 17.8632L12 4.66322C10.2327 3.64867 8.19273 3.04867 6 3.04867C4.04727 3.04867 2.20364 3.52867 0.578182 4.35776C0.218182 4.53231 0 4.91413 0 5.31776L0 18.4959C0 19.325 0.883636 19.8378 1.61455 19.445C2.93455 18.7578 4.41818 18.3214 6 18.3214C8.25818 18.3214 10.3418 19.2159 12 20.5032C13.6582 19.2159 15.7418 18.3214 18 18.3214C19.5818 18.3214 21.0655 18.7578 22.3855 19.4559C23.1164 19.8487 24 19.3359 24 18.5069L24 5.31776C24 4.91413 23.7818 4.53231 23.4218 4.35776Z",
                  fill: "rgba(255,255,255,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector26857")}
            ></Icon>
          </View>
        </View>
        <Flex
          gap="10px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          height="30px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "atoms/logo")}
        >
          <Text
            fontFamily="Roboto Condensed"
            fontSize="20px"
            fontWeight="500"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="BOOK - ISTA"
            {...getOverrideProps(overrides, "BOOK - ISTA")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="12px"
        direction="row"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="38px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NavbarTabs")}
      >
        <Button
          display="flex"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="38px"
          position="relative"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Home"
          {...getOverrideProps(overrides, "Button27078")}
        ></Button>
        <Button
          display="flex"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="38px"
          position="relative"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Explore"
          {...getOverrideProps(overrides, "Button27082")}
        ></Button>
        <Button
          display="flex"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="38px"
          position="relative"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="link"
          children="My library"
          {...getOverrideProps(overrides, "Button27087")}
        ></Button>
      </Flex>
      <SearchField
        display="flex"
        gap="8px"
        direction="column"
        width="506px"
        shrink="0"
        height="40px"
        position="relative"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        placeholder="Search here by book title, author or ISBN"
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      <Flex
        gap="40px"
        direction="row"
        width="fit-content"
        alignItems="center"
        shrink="0"
        height="45px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Icons")}
      >
        <View
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Icon")}
        >
          <Icon
            width="16px"
            height="19.5px"
            viewBox={{ minX: 0, minY: 0, width: 16, height: 19.5 }}
            paths={[
              {
                d: "M8 19.5C9.1 19.5 10 18.6 10 17.5L6 17.5C6 18.6 6.9 19.5 8 19.5ZM14 13.5L14 8.5C14 5.43 12.37 2.86 9.5 2.18L9.5 1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5L6.5 2.18C3.64 2.86 2 5.42 2 8.5L2 13.5L0 15.5L0 16.5L16 16.5L16 15.5L14 13.5ZM12 14.5L4 14.5L4 8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5L12 14.5Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="10.42%"
            bottom="8.33%"
            left="16.67%"
            right="16.67%"
            {...getOverrideProps(overrides, "Vector26831")}
          ></Icon>
        </View>
        <Image
          width="45px"
          height="45px"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
