import React from "react";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import SocialIconButtons from "./SocialIconButtons";
import AuthFooter from "./AuthFooter";
import AuthTerms from "./AuthTerms";

const SignupView = ({ onViewChange }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
        Sign up with email account
      </Typography>

      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField label="First name" fullWidth />
        <TextField label="Last name" fullWidth />
        <TextField label="Email" type="email" fullWidth />
        <TextField label="Password" type="password" fullWidth />

        <Button fullWidth variant="contained" color="warning" sx={{ mt: 2 }}>
          Sign up with your email
        </Button>
      </Box>

      <Divider sx={{ my: 3 }}>OR</Divider>

      <SocialIconButtons />

      <AuthFooter
        text="Already have an account?"
        linkText="Log in"
        onClick={() => onViewChange("login")}
      />

      <AuthTerms />
    </Box>
  );
};

export default SignupView;
