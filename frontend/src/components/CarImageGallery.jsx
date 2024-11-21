import React from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CarImageGallery = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", height: 400 }}>
      <Box
        component="img"
        src="../src/assets/car.jpg"
        alt="Standard Car"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 2,
        }}
      />

      <IconButton
        sx={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "white",
          "&:hover": { bgcolor: "white" },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        sx={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "white",
          "&:hover": { bgcolor: "white" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default CarImageGallery;
