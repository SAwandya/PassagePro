import React from "react";
import { useForm } from "react-hook-form";
import { Box, Typography, Button, Divider, TextField } from "@mui/material";
import SocialButtons from "./SocialButtons";
import AuthFooter from "./AuthFooter";
import AuthTerms from "./AuthTerms";

const RegisterView = ({ onViewChange }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Registration Data:", data);
    // You can integrate this with your API call here
  };

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

      {/* Registration Form */}
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Email Field */}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        {/* Password Field */}
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="warning"
          sx={{ mt: 3, py: 1.5 }}
        >
          Register
        </Button>
      </Box>

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
