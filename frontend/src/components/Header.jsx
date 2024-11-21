import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SearchBox from "./SearchBox";
import { Box } from "@mui/material";

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
    </Box>
  );
};

export default Header;
