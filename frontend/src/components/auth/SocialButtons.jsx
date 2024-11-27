import React, { useEffect } from "react";
import { Button, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useLocation, useNavigate } from "react-router-dom";

const SocialButtons = () => {
  const buttons = [
    {
      icon: <GoogleIcon />,
      text: "Continue with Google",
      variant: "outlined",
      color: "default",
      type: "google",
    },
    {
      icon: <AppleIcon />,
      text: "Continue with Apple",
      variant: "contained",
      color: "black",
      type: "apple",
    },
    {
      icon: <FacebookIcon />,
      text: "Continue with Facebook",
      variant: "contained",
      color: "facebook",
      type: "facebook",
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

const SocialButton = ({ icon, text, variant, color, type }) => {
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

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      navigate("/");
    }
  }, [location, navigate]);

  const handleLogin = (type) => {
    if (type === "google") {
      console.log("Google login");
      window.location.href = `http://localhost:3000/api/auth/google`;
    } else if (type === "facebook") {
      window.location.href = `http://localhost:3000/api/auth/facebook`;
    }
  };

  return (
    <Button
      fullWidth
      variant={variant}
      startIcon={icon}
      onClick={() => handleLogin(type)}
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
