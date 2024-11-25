import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import SocialButtons from "./SocialButtons";
import AuthFooter from "./AuthFooter";
import AuthTerms from "./AuthTerms";

const RegisterView = ({ onViewChange }) => {
  return (
    <Box>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Your journey can become smoother
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Faster checkout, booking history, and special promotions just for you
        </Typography>
      </Box>

      <Box sx={{ textAlign: "center", mb: 4 }}>
        <img
          src="/images/bus-icon.svg"
          alt="Bus Icon"
          style={{ width: 120, height: 120 }}
        />
      </Box>

      <SocialButtons />

      <Divider sx={{ my: 3 }}>OR</Divider>

      <Button
        fullWidth
        variant="contained"
        color="warning"
        onClick={() => onViewChange("signup")}
        sx={{ mb: 3, py: 1.5 }}
      >
        Sign up with your email
      </Button>

      <AuthFooter
        text="Already have an account?"
        linkText="Log in"
        onClick={() => onViewChange("login")}
      />

      <AuthTerms />
    </Box>
  );
};

export default RegisterView;
