import React from "react";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import SocialButtons from "./SocialButtons";
import AuthFooter from "./AuthFooter";

const LoginView = ({ onViewChange }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Welcome back!
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Log in to your account and continue your journey
      </Typography>

      <SocialButtons />

      <Divider sx={{ my: 3 }}>OR</Divider>

      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField label="Email" type="email" fullWidth />
        <TextField label="Password" type="password" fullWidth />

        <Typography
          variant="body2"
          color="primary"
          sx={{ cursor: "pointer", mb: 2 }}
        >
          Forgot password?
        </Typography>

        <Button fullWidth variant="contained" color="warning">
          Sign in
        </Button>
      </Box>

      <AuthFooter
        text="Don't have an account yet?"
        linkText="Join us"
        onClick={() => onViewChange("register")}
      />
    </Box>
  );
};

export default LoginView;
