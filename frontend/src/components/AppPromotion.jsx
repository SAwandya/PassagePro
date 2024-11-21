import React from "react";
import { Box, Container, Typography } from "@mui/material";

const AppPromotion = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F8F9FF",
        py: 8,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          component="img"
          src="/images/phone-hand.png"
          alt=""
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(120%, -50%)",
            width: "200px",
          }}
        />

        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: "#1A1A1A",
          }}
        >
          Take bookaway with you wherever you go
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#666666",
            mb: 4,
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          The Bookaway app is the perfect way to plan and manage the most
          important parts of your trip.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <Box component="a" href="#" sx={{ display: "block" }}>
            <img
              src="/images/app-store.png"
              alt="Download on the App Store"
              style={{ height: "40px" }}
            />
          </Box>

          <Box component="a" href="#" sx={{ display: "block" }}>
            <img
              src="/images/google-play.png"
              alt="Get it on Google Play"
              style={{ height: "40px" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AppPromotion;
