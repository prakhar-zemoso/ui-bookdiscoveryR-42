import BannerCard from "../ui-components/BannerCardv1.jsx";
import AllCards from "../ui-components/AllCardsv1.jsx";
import { styled } from "@mui/styles";
import React, { Children, useState } from "react";
import { Typography } from "@mui/material";
import PageNumbers from "../ui-components/PageNumbers.jsx";
import Allignment1 from "../ui-components/Allignment1v1.jsx";
import Allignment2 from "../ui-components/Allignment2v1.jsx";
import Allignment4 from "../ui-components/Allignment4v1.jsx";
import NavBarNew from "../ui-components/NavBarNewv1.jsx";
import HeroCrad10v1 from "../ui-components/HeroCrad10v1.jsx"
import AlsoRead from "../ui-components/AlsoReadv1.jsx"
import OtherReviews from "../ui-components/OtherReviewsv1.jsx"
import ReviewCard1 from "../ui-components/ReviewCard1v1.jsx"
import AllDJLee from "../ui-components/AllDJLeev1.jsx"
import HeroCard110 from "../ui-components/HeroCard110v1.jsx"

const BodyContainer = styled("div")({
  marginTop: 56,
});

const HeaderContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  alignItems: "center",
  // zIndex: 1010,
});
const CardBody = styled("div")({
  // position: 'relative',
  display: "flex",
  flexDirection: "row",
  gap: "30px",
  marginTop: 64,
});

const BooksCurrentlyReading = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: 128,
  gap: 16,

});

const BooksCurrentlyReadingText = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  bottom:"60px"

});


function SearchResult() {
  return (
    <div className="App">
      <NavBarNew/>
      <Allignment2/>
      <Allignment4/>
      <BannerCard/>
      <AllCards/>
      <HeroCard110/>
      <AllDJLee/>
      <OtherReviews/>
      <AlsoRead/>
      <ReviewCard1/>
      <HeroCrad10v1/>
    </div>
  );
}

export default SearchResult;