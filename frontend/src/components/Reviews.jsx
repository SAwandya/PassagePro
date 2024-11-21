import React from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <IconButton sx={{ color: "#1A1A1A" }}>
          <ArrowBackIosNewIcon />
        </IconButton>

        <Box sx={{ display: "flex", flex: 1, gap: 3, px: 2 }}>
          <ReviewCard
            rating={5}
            comment="All good, would use it again"
            author="Adam P."
            date="21.11.2024"
          />

          <ReviewCard
            rating={4}
            comment="Easy"
            author="Robert B."
            date="21.11.2024"
          />

          <ReviewCard
            rating={4}
            comment="Easy, good overview of all options, and you get a refund when you cancel, but be mindf..."
            author="Fleur K."
            date="21.11.2024"
            hasFullReview
          />
        </Box>

        <IconButton sx={{ color: "#1A1A1A" }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Reviews;
