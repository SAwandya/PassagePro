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
import useGameQueryStore from "../store";
import AuthModal from "../components/auth/AuthModal";

const HomePage = () => {
  const SetIsRegisterOpen = useGameQueryStore((s) => s.SetIsRegisterOpen);
  const isRegisterOpen = useGameQueryStore((s) => s.isRegisterOpen);

  return (
    <>
      <Box
        sx={{
          minHeight: "70vh",
          background:
            'linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0.3)),url("../src/assets/mainimage.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "top center", // Image reduces from top
          backgroundRepeat: "no-repeat", // Prevents image repetition
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            position: "absolute",
          }}
        >
          <Hero />
          <SearchBox />
        </Box>
      </Box>

      <Box>
        <Features />
        <Reviews />
        <TransportationSection />
        <PopularRoutes />
        <OperatorsSection />
        <MoreRoutesSection />
        <AppPromotion />
        <AuthModal
          open={isRegisterOpen}
          onClose={() => SetIsRegisterOpen(false)}
        />
      </Box>
    </>
  );
};

export default HomePage;
