import React from "react";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mb: { xs: 3, md: 4 }, 
        px: { xs: 2, md: 0 }, 
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "23px", sm: "40px", md: "48px" }, 
          fontWeight: 700,
          color: "#ffffff",
          mb: { xs: 1, sm: 2 }, 
        }}
      >
        Book bus, ferry, and train tickets
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "15px", sm: "20px", md: "24px" }, // Responsive font size
          fontWeight: 400,
          color: "#ffffff",
        }}
      >
        To travel the world's best destinations
      </Typography>
    </Box>
  );
};

export default Hero;
