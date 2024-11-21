import React from "react";
import { Box, Typography, Breadcrumbs, Link, Chip } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarHalfIcon from "@mui/icons-material/StarHalf";

const BookingHeader = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Breadcrumbs separator="/" sx={{ mb: 2 }}>
        {[
          "HOME",
          "SRI LANKA",
          "ELLA",
          "KANDY TO ELLA",
          "STANDARD CAR BY MAGICAL SRI LANKA",
        ].map((item, index) => (
          <Link
            key={index}
            href="#"
            sx={{
              color: index === 4 ? "#666" : "#1A1A1A",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
          >
            {item}
          </Link>
        ))}
      </Breadcrumbs>

      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography variant="h5" component="span">
          From Kandy
        </Typography>
        <SwapHorizIcon sx={{ mx: 1 }} />
        <Typography variant="h5" component="span">
          to Ella
        </Typography>
        <Typography
          component="span"
          sx={{
            color: "#FF5722",
            ml: 2,
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Switch directions
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Typography variant="h4">Standard Car 2 PAX</Typography>
        <Chip
          label="Private transfer"
          sx={{ bgcolor: "#E3F2FD", color: "#1976D2" }}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography>By Magical Sri Lanka</Typography>
        <VerifiedIcon sx={{ color: "#1976D2" }} />
        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
          <StarHalfIcon sx={{ color: "#FFC107" }} />
          <Typography variant="body2" sx={{ ml: 0.5 }}>
            4.8 (67)
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src="../src/assets/bestchoice.png"
          alt=""
          sx={{ width: 32, height: 32, mr: 1 }}
        />
        <Typography variant="body2" color="primary">
          Good choice! This is one of our top suppliers
        </Typography>
      </Box>
    </Box>
  );
};

export default BookingHeader;
