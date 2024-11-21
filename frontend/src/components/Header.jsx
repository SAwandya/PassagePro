import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SearchBox from "./SearchBox";
import { Box } from "@mui/material";
import Features from "./Features";
import Reviews from "./Reviews";
import TransportationSection from "./TransportationSection";
import PopularRoutes from "./PopularRoutes";
import OperatorsSection from "./OperatorsSection";
import MoreRoutesSection from "./MoreRoutesSection";
import AppPromotion from "./AppPromotion";
import Footer from "./Footer";

const Header = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url("/background-image.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <Hero />
      <SearchBox />
      <Features />
      <Reviews />
      <TransportationSection/>
      <PopularRoutes/>
      <OperatorsSection/>
      <MoreRoutesSection/>
      <AppPromotion/>
      <Footer/>
    </Box>
  );
};

export default Header;
