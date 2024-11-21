import React from "react";
import { Box, Typography } from "@mui/material";
import TransportIcon from "./TransportIcon";

const TransportCard = ({ title, icon }) => {
  return (
    <Box
      sx={{
        flex: "1 0 auto",
        width: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <Box
        sx={{
          bgcolor: "#F8F8F8",
          borderRadius: "12px",
          p: 3,
          width: "100%",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TransportIcon type={icon} />
      </Box>
      <Typography
        variant="h6"
        sx={{
          color: title === "Ferry" ? "#FF5722" : "#1A1A1A",
          fontWeight: 500,
          textDecoration: title === "Ferry" ? "underline" : "none",
          cursor: "pointer",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default TransportCard;
