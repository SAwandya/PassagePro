import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import { Box } from "@mui/material";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import TransportationSection from "../components/TransportationSection";
import PopularRoutes from "../components/PopularRoutes";
import OperatorsSection from "../components/OperatorsSection";
import MoreRoutesSection from "../components/MoreRoutesSection";
import AppPromotion from "../components/AppPromotion";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "60vh",
          background:
            'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url("../src/assets/b03.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <Hero />
        <SearchBox />
      </Box>
      <Box>
        <Features />
        <Reviews />
        <TransportationSection />
        <PopularRoutes />
        <OperatorsSection />
        <MoreRoutesSection />
        <AppPromotion />
        <Footer />
      </Box>
    </>
  );
};

export default HomePage;
