import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const MoreRoutesSection = () => {
  const routes = [
    "Krabi to Koh Phi Phi",
    "Koh Samui to Koh Phangan",
    "Marrakesh to Essaouira",
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          mb: 6,
          color: "#1A1A1A",
        }}
      >
        More routes to explore
      </Typography>

      <Grid container spacing={4}>
        {routes.map((route, index) => (
          <Grid item xs={12} md={4} key={index}>
            <RouteLink route={route} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const RouteLink = ({ route }) => {
  const [from, to] = route.split(" to ");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        py: 2,
        borderBottom: "1px solid #E0E0E0",
        "&:hover": {
          cursor: "pointer",
          "& .MuiTypography-root": {
            color: "#FF5722",
          },
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "#1A1A1A",
          transition: "color 0.2s ease",
        }}
      >
        {from}
      </Typography>

      <ArrowRightAltIcon sx={{ color: "#666666" }} />

      <Typography
        variant="body1"
        sx={{
          color: "#1A1A1A",
          transition: "color 0.2s ease",
        }}
      >
        {to}
      </Typography>
    </Box>
  );
};

export default MoreRoutesSection;
