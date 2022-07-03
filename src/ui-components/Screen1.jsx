/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Screen1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1366px"
      height="2921px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Screen1")}
    >
      <View
        width="1366px"
        height="68px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-90deg, rgba(140,82,198,1), rgba(104,55,153,1))"
        {...getOverrideProps(overrides, " header")}
      >
        <Flex
          gap="10px"
          position="absolute"
          top="19px"
          left="100px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "logo")}
        ></Flex>
        <Flex
          gap="10px"
          position="absolute"
          top="19px"
          left="303px"
          direction="row"
          alignItems="flex-start"
          padding="4px 4px 4px 4px"
          {...getOverrideProps(overrides, "Navbar Tabs14873")}
        >
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Home"
            {...getOverrideProps(overrides, "Home")}
          ></Text>
        </Flex>
        <Flex
          gap="4px"
          position="absolute"
          top="19px"
          left="361px"
          direction="row"
          alignItems="center"
          borderRadius="4px 4px 4px 4px"
          padding="4px 4px 4px 4px"
          {...getOverrideProps(overrides, "Navbar Tabs14875")}
        >
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Explore"
            {...getOverrideProps(overrides, "Explore")}
          ></Text>
          <Flex
            gap="10px"
            direction="row"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="16px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "atoms/icons/dropdown14877")}
          ></Flex>
        </Flex>
        <Flex
          gap="4px"
          position="absolute"
          top="19px"
          left="448px"
          direction="row"
          alignItems="center"
          borderRadius="4px 4px 4px 4px"
          padding="4px 4px 4px 4px"
          {...getOverrideProps(overrides, "Navbar Tabs14878")}
        >
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="My library"
            {...getOverrideProps(overrides, "My library")}
          ></Text>
          <Flex
            gap="10px"
            direction="row"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="16px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "atoms/icons/dropdown14880")}
          ></Flex>
        </Flex>
        <Flex
          gap="4px"
          position="absolute"
          top="13px"
          left="601px"
          direction="row"
          width="513px"
          alignItems="center"
          border="1px SOLID rgba(227,227,227,1)"
          borderRadius="8px"
          padding="5px 15px 5px 15px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Searchfield")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="fit-content"
            alignItems="center"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "atoms/icons/search")}
          ></Flex>
          <Flex
            gap="10px"
            direction="row"
            width="fit-content"
            alignItems="center"
            shrink="0"
            height="30px"
            position="relative"
            padding="4px 4px 4px 4px"
            {...getOverrideProps(overrides, "Placeholder")}
          >
            <Text
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="400"
              color="rgba(96,96,96,1)"
              lineHeight="22px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Search here by book title, author or ISBN"
              {...getOverrideProps(
                overrides,
                "Search here by book title, author or ISBN"
              )}
            ></Text>
          </Flex>
        </Flex>
        <View
          width="24px"
          height="24px"
          position="absolute"
          top="22px"
          left="1178px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "notification")}
        ></View>
        <Flex
          gap="10px"
          position="absolute"
          top="14px"
          left="1226px"
          direction="row"
          alignItems="flex-start"
          padding="4px 4px 4px 4px"
          {...getOverrideProps(overrides, "avatar")}
        ></Flex>
      </View>
      <Flex
        gap="10px"
        position="absolute"
        top="124px"
        left="100px"
        direction="column"
        borderRadius="10px"
        padding="57px 100px 57px 48px"
        backgroundColor="rgba(119,67,172,1)"
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
            shrink="0"
            height="166px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Content Area")}
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
            <Flex
              gap="10px"
              direction="row"
              width="fit-content"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="4px"
              padding="8px 24px 8px 24px"
              backgroundColor="rgba(255,114,94,1)"
              {...getOverrideProps(overrides, "Buttons")}
            >
              <Text
                fontFamily="Roboto"
                fontSize="14px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="22px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Discover"
                {...getOverrideProps(overrides, "Discover")}
              ></Text>
            </Flex>
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
      <Flex
        gap="24px"
        position="absolute"
        top="470px"
        left="100px"
        direction="row"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 20")}
      >
        <View
          width="273px"
          height="104px"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(250,250,250,1)"
          {...getOverrideProps(overrides, "state=inactive14897")}
        ></View>
        <View
          width="273px"
          height="104px"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(250,250,250,1)"
          {...getOverrideProps(overrides, "state=inactive14898")}
        ></View>
        <View
          width="273px"
          height="104px"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(250,250,250,1)"
          {...getOverrideProps(overrides, "state=inactive14899")}
        ></View>
        <View
          width="273px"
          height="104px"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(250,250,250,1)"
          {...getOverrideProps(overrides, "state=inactive14900")}
        ></View>
      </Flex>
      <Flex
        gap="642px"
        position="absolute"
        top="678px"
        left="100px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Headings14901")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="24px"
          fontWeight="500"
          color="rgba(23,23,23,1)"
          lineHeight="36px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="440px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Books You are Reading"
          {...getOverrideProps(overrides, "Books You are Reading14902")}
        ></Text>
        <Flex
          gap="0"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Property 1=inactive14903")}
        ></Flex>
      </Flex>
      <Flex
        gap="642px"
        position="absolute"
        top="974px"
        left="100px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Headings14904")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="24px"
          fontWeight="500"
          color="rgba(23,23,23,1)"
          lineHeight="36px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="440px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Books You are Reading"
          {...getOverrideProps(overrides, "Books You are Reading14905")}
        ></Text>
        <Flex
          gap="0"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Property 1=inactive14906")}
        ></Flex>
      </Flex>
      <Flex
        gap="642px"
        position="absolute"
        top="974px"
        left="100px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Headings14907")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="24px"
          fontWeight="500"
          color="rgba(23,23,23,1)"
          lineHeight="36px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="440px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Books You are Reading"
          {...getOverrideProps(overrides, "Books You are Reading14908")}
        ></Text>
        <Flex
          gap="0"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Property 1=inactive14909")}
        ></Flex>
      </Flex>
      <Flex
        gap="642px"
        position="absolute"
        top="1515px"
        left="100px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Headings14910")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="24px"
          fontWeight="500"
          color="rgba(23,23,23,1)"
          lineHeight="36px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="440px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Books You are Reading"
          {...getOverrideProps(overrides, "Books You are Reading14911")}
        ></Text>
        <Flex
          gap="0"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Property 1=inactive14912")}
        ></Flex>
      </Flex>
      <Flex
        gap="642px"
        position="absolute"
        top="2380px"
        left="100px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Headings14913")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="24px"
          fontWeight="500"
          color="rgba(23,23,23,1)"
          lineHeight="36px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="440px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Books You are Reading"
          {...getOverrideProps(overrides, "Books You are Reading14914")}
        ></Text>
        <Flex
          gap="0"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Property 1=inactive14915")}
        ></Flex>
      </Flex>
      <Flex
        gap="642px"
        position="absolute"
        top="2056px"
        left="100px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Headings14916")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="24px"
          fontWeight="500"
          color="rgba(23,23,23,1)"
          lineHeight="36px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="440px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Books You are Reading"
          {...getOverrideProps(overrides, "Books You are Reading14917")}
        ></Text>
        <Flex
          gap="0"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Property 1=inactive14918")}
        ></Flex>
      </Flex>
      <Flex
        gap="10px"
        position="absolute"
        top="730px"
        left="100px"
        direction="column"
        boxShadow="0px 0px 8px rgba(0.4901960790157318, 0.4901960790157318, 0.4901960790157318, 0.11999999731779099)"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Property 1=Default14919")}
      ></Flex>
      <Flex
        gap="10px"
        position="absolute"
        top="730px"
        left="398px"
        direction="column"
        boxShadow="0px 0px 8px rgba(0.4901960790157318, 0.4901960790157318, 0.4901960790157318, 0.11999999731779099)"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Property 1=Default14920")}
      ></Flex>
      <Flex
        gap="10px"
        position="absolute"
        top="730px"
        left="696px"
        direction="column"
        boxShadow="0px 0px 8px rgba(0.4901960790157318, 0.4901960790157318, 0.4901960790157318, 0.11999999731779099)"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Property 1=Default14921")}
      ></Flex>
      <Flex
        gap="10px"
        position="absolute"
        top="730px"
        left="994px"
        direction="column"
        boxShadow="0px 0px 8px rgba(0.4901960790157318, 0.4901960790157318, 0.4901960790157318, 0.11999999731779099)"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Property 1=Default14922")}
      ></Flex>
      <View
        width="273px"
        height="385px"
        position="absolute"
        top="1026px"
        left="100px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "state=inactive14923")}
      ></View>
      <View
        width="273px"
        height="385px"
        position="absolute"
        top="1567px"
        left="100px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "state=inactive14924")}
      ></View>
      <View
        width="273px"
        height="385px"
        position="absolute"
        top="2432px"
        left="100px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "state=inactive14925")}
      ></View>
      <View
        width="273px"
        height="385px"
        position="absolute"
        top="1026px"
        left="398px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "state=inactive14926")}
      ></View>
      <View
        width="273px"
        height="385px"
        position="absolute"
        top="1567px"
        left="398px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "state=inactive14927")}
      ></View>
      <View
        width="273px"
        height="385px"
        position="absolute"
        top="2432px"
        left="398px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "state=inactive14928")}
      ></View>
      <View
        width="273px"
        height="385px"
        position="absolute"
        top="1026px"
        left="696px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "state=inactive14929")}
      ></View>
      <View
        width="273px"
        height="385px"
        position="absolute"
        top="1567px"
        left="696px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "state=inactive14930")}
      ></View>
      <View
        width="273px"
        height="385px"
        position="absolute"
        top="2432px"
        left="696px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "state=inactive14931")}
      ></View>
      <View
        width="273px"
        height="385px"
        position="absolute"
        top="1026px"
        left="994px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "state=inactive14932")}
      ></View>
      <View
        width="273px"
        height="385px"
        position="absolute"
        top="1567px"
        left="994px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "state=inactive14933")}
      ></View>
      <View
        width="273px"
        height="385px"
        position="absolute"
        top="2432px"
        left="994px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "state=inactive14934")}
      ></View>
      <Flex
        gap="12px"
        position="absolute"
        top="2108px"
        left="100px"
        direction="column"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "organisms/card/topics14935")}
      ></Flex>
      <Flex
        gap="12px"
        position="absolute"
        top="2108px"
        left="298px"
        direction="column"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "organisms/card/topics14936")}
      ></Flex>
      <Flex
        gap="12px"
        position="absolute"
        top="2108px"
        left="496px"
        direction="column"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "organisms/card/topics14937")}
      ></Flex>
      <Flex
        gap="12px"
        position="absolute"
        top="2108px"
        left="694px"
        direction="column"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "organisms/card/topics14938")}
      ></Flex>
      <Flex
        gap="12px"
        position="absolute"
        top="2108px"
        left="892px"
        direction="column"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "organisms/card/topics14939")}
      ></Flex>
      <Flex
        gap="12px"
        position="absolute"
        top="2108px"
        left="1090px"
        direction="column"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "organisms/card/topics14940")}
      ></Flex>
    </View>
  );
}
