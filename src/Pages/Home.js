// import BannerCard from "../ui-components/BannerCard";
// import Allignment1 from "../ui-components/Allignment1v1.js";
// import { styled } from "@mui/styles";
// import React, { Children, useState } from "react";
// import { Typography } from "@mui/material";
// import Allignment2 from "../ui-components/Allignment2.jsx";
// import Allignment3v1 from "../ui-components/Allignment3v1.jsx";
// import Allignment4 from "../ui-components/Allignment4.jsx";
// import NavBarNew from "../ui-components/NavBarNew.jsx";

// const BodyContainer = styled("div")({
//   marginTop: 56,
// });

// const HeaderContainer = styled("div")({
//   display: "flex",
//   flexDirection: "column",
//   alignContent: "center",
//   alignItems: "center",
//   // zIndex: 1010,
// });
// const CardBody = styled("div")({
//   // position: 'relative',
//   display: "flex",
//   flexDirection: "row",
//   gap: "30px",
//   marginTop: 64,
// });

// const BooksCurrentlyReading = styled("div")({
//   display: "flex",
//   flexDirection: "column",
//   marginTop: 128,
//   gap: 16,
// });

// const BooksCurrentlyReadingText = styled("div")({
//   display: "flex",
//   justifyContent: "space-between",
// });


// function Home() {
//   return (
//     <div className="App">
//       <HeaderContainer>
//         <NavBarNew/>
//         <BodyContainer>
//           <BannerCard  />
//         </BodyContainer>

//         <CardBody>
//           <Allignment1
//             overrides={{
//               HeroCard4026861: {
//                 onClick: () => {
//                   alert("Die All");
//                 },
//               },
//             }}
//           />
//         </CardBody>
//         {/* <Allignment1/> */}

//         <BooksCurrentlyReading>
//           <BooksCurrentlyReadingText>
//             <Typography variant="h6">Books you are Reading</Typography>
//             <Typography variant="h6">See more</Typography>
//           </BooksCurrentlyReadingText>
//           <Allignment2 />
//         </BooksCurrentlyReading>

//         {/* recommendation */}
//         <BooksCurrentlyReading>
//           <BooksCurrentlyReadingText>
//             <Typography variant="h6">Recommendation</Typography>
//             <Typography variant="h6">See more</Typography>
//           </BooksCurrentlyReadingText>
//           <Allignment3v1 />
//         </BooksCurrentlyReading>

//         {/* People you follow also read */}
//         <BooksCurrentlyReading>
//           <BooksCurrentlyReadingText>
//             <Typography variant="h6">People you follow also read</Typography>
//             <Typography variant="h6">See more</Typography>
//           </BooksCurrentlyReadingText>
//           <Allignment3v1 overrides={{
//               'HeroCrad1027004': {
//                 overrides: {
//                   "MyIcon/bookmark_border": {
//                     onClick: () => {
//                       alert("ABC");
//                     }}
                
//                 }},
//               }}/>
//         </BooksCurrentlyReading>

//         {/* Topics you follow */}
//         <BooksCurrentlyReading>
//           <BooksCurrentlyReadingText>
//             <Typography variant="h6">Topics you follow</Typography>
//             <Typography variant="h6">See more</Typography>
//           </BooksCurrentlyReadingText>
//           <Allignment4 />
//         </BooksCurrentlyReading>

//         {/* Top Rating */}
//         <BooksCurrentlyReading>
//           <BooksCurrentlyReadingText>
//             <Typography variant="h6">Top Rated</Typography>
//             <Typography variant="h6">See more</Typography>
//           </BooksCurrentlyReadingText>
//           <Allignment3v1
//             overrides={{
//               HeroCrad1027004: {
//                 overrides: {
//                   "MyIcon/bookmark_border": {
//                     onClick: () => {
//                       alert("ABC");
//                     }}
                
//                 }},
//               }}
//           />
//         </BooksCurrentlyReading>
//       </HeaderContainer>
//     </div>
//   );
// }

// export default Home;