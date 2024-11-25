import React from "react";
import { Typography } from "@mui/material";

const AuthTerms = () => {
  return (
    <Typography
      variant="caption"
      color="text.secondary"
      sx={{ mt: 3, display: "block", textAlign: "center" }}
    >
      By creating an account you agree to our{" "}
      <Typography
        component="span"
        variant="caption"
        color="primary"
        sx={{ cursor: "pointer" }}
      >
        Terms of use
      </Typography>{" "}
      and{" "}
      <Typography
        component="span"
        variant="caption"
        color="primary"
        sx={{ cursor: "pointer" }}
      >
        Privacy Policy
      </Typography>
    </Typography>
  );
};

export default AuthTerms;
