import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import OneTapBooking from "./features/OneTapBooking";
import YourTrip from "./features/YourTrip";
import ExpertLed from "./features/ExpertLed";

const Features = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <FeatureCard
            icon={<OneTapBooking />}
            title="One-tap booking"
            description="Compare and book your next ticket anywhere in the world, and find it in your inbox. Simple."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard
            icon={<YourTrip />}
            title="Your trip, your way"
            description="From buses to planes or early starts to late nights, you have the final say."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard
            icon={<ExpertLed />}
            title="Expert-led travel"
            description="Bookaway has your back wherever, whenever. With thousands of happy users and 24-hour support."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Box sx={{ textAlign: "center", px: 2 }}>
      <Box sx={{ mb: 2, height: "80px" }}>{icon}</Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mb: 2,
          color: "#1A1A1A",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#666666",
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Features;
