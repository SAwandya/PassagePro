import React from "react";
import { Container, Typography, Grid, Box, Link } from "@mui/material";

const OperatorsSection = () => {
  const operators = [
    ["OceanJet", "Long Phuong", "Lomprayah", "Angel Billabong Fast Cruise"],
    [
      "Semaya One Fast Cruise",
      "Wahana Virendra",
      "Montenegro Shipping Lines",
      "Ao Nang Princess",
    ],
    [
      "ADO",
      "Phi Phi Logistic & Tour",
      "Jomalia Shipping",
      "Good Morning Cat Ba",
    ],
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
        Our operators
      </Typography>

      <Grid container spacing={4}>
        {operators.map((column, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            {column.map((operator, index) => (
              <Box
                key={operator}
                sx={{
                  py: 2,
                  borderBottom: "1px solid #E0E0E0",
                  "&:last-child": {
                    borderBottom: "none",
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#1A1A1A",
                    "&:hover": {
                      color: "#FF5722",
                      cursor: "pointer",
                    },
                  }}
                >
                  {operator}
                </Typography>
              </Box>
            ))}
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Link
          href="#"
          sx={{
            color: "#FF5722",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          View all 8101 operators
        </Link>
      </Box>
    </Container>
  );
};

export default OperatorsSection;
