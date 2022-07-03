/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React,{useState} from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import MyIconStarFocused from "./MyIconStarFocused";
export default function MainContent123(props) {
  const { overrides, ...rest } = props;
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Flex
      gap="10px"
      direction="column"
      position="relative"
      border="1px SOLID rgba(227,227,227,1)"
      borderRadius="8px"
      padding="11px 5px 11px 5px"
      style={{
        //backgroundColor: isHovering ? '#f7f9fa' : '',
        //boxShadow: isHovering ? `1px 1px`:'',
        border :isHovering ? `1px solid #ebe6e6` :'',
        boxShadow: isHovering ? `1px 2px 2px #9E9E9E`:'',
        cursor:'pointer'

       }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MainContent123")}
    >
      <Flex
        gap="24px"
        direction="row"
        width="fit-content"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Icon
          width="60px"
          height="60px"
          viewBox={{ minX: 0, minY: 0, width: 60, height: 60 }}
          paths={[
            {
              d: "M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z",
              fillRule: "nonzero",
            },
          ]}
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Ellipse 274")}
        ></Icon>
        <Flex
          gap="0"
          direction="column"
          shrink="0"
          height="64px"
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
            width="136px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Anvitha Sharma"
            {...getOverrideProps(overrides, "Anvitha Sharma")}
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
            width="136px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Student"
            {...getOverrideProps(overrides, "Student")}
          ></Text>
          <Flex
            gap="4px"
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
        </Flex>
      </Flex>
      <Text
        fontFamily="Roboto"
        fontSize="12px"
        fontWeight="400"
        color="rgba(96,96,96,1)"
        lineHeight="16px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="228px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="JD Lee was the 2016 recipient of the American Chemical Society's Grady Stack "
        {...getOverrideProps(
          overrides,
          "JD Lee was the 2016 recipient of the American Chemical Society's Grady Stack"
        )}
      ></Text>
    </Flex>
  );
}
