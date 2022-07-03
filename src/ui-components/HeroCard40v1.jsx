/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React,{useState} from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import MyIconfavorite from "./MyIconfavorite";
export default function HeroCard40(props) {
  const { overrides, ...rest } = props;
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <View
      width="273px"
      height="104px"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(250,250,250,20)"
      style={{
        //backgroundColor: isHovering ? '#f7f9fa' : '',
        //boxShadow: isHovering ? `1px 1px`:'',
        border :isHovering ? `1px solid #ebe6e6` :'',
        cursor:'pointer'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      
      {...rest}
      {...getOverrideProps(overrides, "HeroCard40")}
    >
      <Flex
        gap="4px"
        position="absolute"
        top="24px"
        left="105.5px"
        direction="column"
        width="118px"
        height="56px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Text")}
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
          children="CURRENTLY READING"
          {...getOverrideProps(overrides, "CURRENTLY READING")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="24px"
          fontWeight="500"
          color="rgba(96,96,96,1)"
          lineHeight="36px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="26"
          {...getOverrideProps(overrides, "26")}
        ></Text>
      </Flex>
      <MyIconfavorite
        width="40px"
        height="40px"
        position="absolute"
        top="32px"
        left="24px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MyIcon/favorite")}
      ></MyIconfavorite>
    </View>
  );
}
