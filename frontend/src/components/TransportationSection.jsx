import React, { useState } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TransportCard from "./TransportCard";

const TransportationSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const transportOptions = [
    { id: 1, title: "Ferry", icon: "ferry" },
    { id: 2, title: "Private transfer", icon: "private-transfer" },
    { id: 3, title: "Van", icon: "van" },
    { id: 4, title: "Tour package", icon: "tour-package" },
    { id: 5, title: "Bus", icon: "bus" },
    { id: 6, title: "Train", icon: "train" },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev < transportOptions.length - 4 ? prev + 1 : prev
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          mb: 6,
          color: "#1A1A1A",
        }}
      >
        Transportation we offer
      </Typography>

      <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
        <IconButton
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
          sx={{
            position: "absolute",
            left: -20,
            zIndex: 2,
            bgcolor: "white",
            boxShadow: 2,
            "&:hover": { bgcolor: "white" },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            overflow: "hidden",
            px: 2,
          }}
        >
          {transportOptions
            .slice(currentSlide, currentSlide + 4)
            .map((option) => (
              <TransportCard
                key={option.id}
                title={option.title}
                icon={option.icon}
              />
            ))}
        </Box>

        <IconButton
          onClick={handleNextSlide}
          disabled={currentSlide >= transportOptions.length - 4}
          sx={{
            position: "absolute",
            right: -20,
            zIndex: 2,
            bgcolor: "white",
            boxShadow: 2,
            "&:hover": { bgcolor: "white" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default TransportationSection;
