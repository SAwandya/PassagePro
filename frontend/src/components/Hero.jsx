import React from "react";
import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 8, mb: 4 }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: "48px",
          fontWeight: 700,
          color: "#1A1A1A",
          mb: 2,
        }}
      >
        Book bus, ferry, and train tickets
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: "24px",
          fontWeight: 400,
          color: "#1A1A1A",
        }}
      >
        To travel the world's best destinations
      </Typography>
    </Box>
  );
};

export default Hero;
