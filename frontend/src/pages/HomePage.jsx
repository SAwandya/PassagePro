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
          minHeight: "80vh",
          background:
            'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.8)), url("../src/assets/topimage.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <Box sx={{ maxWidth: "1200px", margin: "auto", marginTop: "100px" }}>
          {" "}
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
