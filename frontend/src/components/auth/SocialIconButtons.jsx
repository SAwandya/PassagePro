// components/auth/SocialIconButtons.jsx
import React from "react";
import { Box, IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialIconButtons = () => {
  const socialIcons = [
    {
      icon: <GoogleIcon />,
      color: "#fff",
      hoverColor: "#f1f1f1",
      border: "1px solid #ddd",
    },
    {
      icon: <AppleIcon />,
      color: "#000",
      hoverColor: "#333",
    },
    {
      icon: <FacebookIcon />,
      color: "#1877F2",
      hoverColor: "#166FE5",
    },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
      {socialIcons.map((social, index) => (
        <IconButton
          key={index}
          sx={{
            width: 48,
            height: 48,
            bgcolor: social.color,
            border: social.border,
            "&:hover": {
              bgcolor: social.hoverColor,
            },
            "& svg": {
              color: social.color === "#fff" ? "#000" : "#fff",
              fontSize: 24,
            },
          }}
        >
          {social.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialIconButtons;
