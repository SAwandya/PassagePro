import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  const footerSections = [
    {
      title: "We're here for you",
      links: [
        { text: "Help center", url: "#" },
        { text: "Contact us", url: "#" },
      ],
    },
    {
      title: "Get to know us",
      links: [
        { text: "About us", url: "#" },
        { text: "Blog", url: "#" },
        { text: "What our customers think", url: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy policy", url: "#" },
        { text: "Terms and conditions", url: "#" },
      ],
    },
    {
      title: "Travel",
      links: [
        { text: "All operators", url: "#" },
        { text: "All routes around the world", url: "#" },
        { text: "All cities around the world", url: "#" },
        { text: "All countries around the world", url: "#" },
        { text: "All stations around the world", url: "#" },
      ],
    },
    {
      title: "Work with us",
      links: [
        { text: "Come work with us!", url: "#" },
        { text: "Become a service provider", url: "#" },
        { text: "Become our affiliate partner", url: "#" },
      ],
    },
  ];

  return (
    <Box sx={{ bgcolor: "#FFFFFF", py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <Typography
                variant="h6"
                sx={{
                  color: "#1A1A1A",
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                {section.title}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {section.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.url}
                    sx={{
                      color: "#666666",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#FF5722",
                        textDecoration: "none",
                      },
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
