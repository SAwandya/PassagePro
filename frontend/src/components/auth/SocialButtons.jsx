import React from "react";
import { Button, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialButtons = () => {
  const buttons = [
    {
      icon: <GoogleIcon />,
      text: "Continue with Google",
      variant: "outlined",
      color: "default",
    },
    {
      icon: <AppleIcon />,
      text: "Continue with Apple",
      variant: "contained",
      color: "black",
    },
    {
      icon: <FacebookIcon />,
      text: "Continue with Facebook",
      variant: "contained",
      color: "facebook",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {buttons.map((button, index) => (
        <SocialButton key={index} {...button} />
      ))}
    </Box>
  );
};

const SocialButton = ({ icon, text, variant, color }) => {
  const getStyles = () => {
    const styles = {
      black: { bgcolor: "#000", "&:hover": { bgcolor: "#333" } },
      facebook: { bgcolor: "#1877F2", "&:hover": { bgcolor: "#166FE5" } },
      default: {
        color: "text.primary",
        borderColor: "divider",
        "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" },
      },
    };
    return styles[color] || styles.default;
  };

  return (
    <Button
      fullWidth
      variant={variant}
      startIcon={icon}
      sx={{
        ...getStyles(),
        justifyContent: "flex-start",
        px: 3,
        py: 1.5,
      }}
    >
      {text}
    </Button>
  );
};

export default SocialButtons;
