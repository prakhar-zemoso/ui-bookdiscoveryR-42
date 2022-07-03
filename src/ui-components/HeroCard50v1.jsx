/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React,{useState} from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HeroCard50(props) {
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
      gap="12px"
      direction="column"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"

      style={{
        //backgroundColor: isHovering ? '#f7f9fa' : '',
        //boxShadow: isHovering ? `1px 1px`:'',
        border :isHovering ? `1px solid #ebe6e6` :'',
        cursor:'pointer'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      {...rest}
      {...getOverrideProps(overrides, "HeroCard50")}
    >
      <Image
        width="178px"
        height="134px"
        shrink="0"
        position="relative"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 10")}
      ></Image>
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
        children="GEOGRAPHY"
        {...getOverrideProps(overrides, "GEOGRAPHY")}
      ></Text>
    </Flex>
  );
}
