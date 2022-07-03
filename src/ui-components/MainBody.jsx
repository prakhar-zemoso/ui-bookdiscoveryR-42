/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function MainBody(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "MainBody")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="500"
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
        children="About Author"
        {...getOverrideProps(overrides, "About Author")}
      ></Text>
      <Flex
        gap="12px"
        direction="column"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="20px"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "IamgeButton")}
        >
          <Icon
            width="80px"
            height="80px"
            viewBox={{ minX: 0, minY: 0, width: 80, height: 80 }}
            paths={[
              {
                d: "M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z",
                fillRule: "nonzero",
              },
            ]}
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Ellipse 9")}
          ></Icon>
          <Flex
            gap="4px"
            direction="column"
            shrink="0"
            height="70px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Action")}
          >
            <Flex
              gap="4px"
              direction="column"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "AuthorName")}
            >
              <Text
                fontFamily="Roboto"
                fontSize="14px"
                fontWeight="500"
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
                children="By J D Lee"
                {...getOverrideProps(overrides, "By J D Lee")}
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
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="2000 Followers"
                {...getOverrideProps(overrides, "2000 Followers")}
              ></Text>
            </Flex>
            <Button
              display="flex"
              gap="0"
              direction="row"
              width="102px"
              height="26px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              border="1px SOLID rgba(255,114,94,1)"
              borderRadius="5px"
              size="small"
              isDisabled={false}
              variation="default"
              children="Following"
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
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
          width="767px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur."
          {...getOverrideProps(
            overrides,
            "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur."
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
