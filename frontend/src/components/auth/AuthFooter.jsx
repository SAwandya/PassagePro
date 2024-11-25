import React from "react";
import { Box, Typography } from "@mui/material";

const AuthFooter = ({ text, linkText, onClick }) => {
  return (
    <Box sx={{ textAlign: "center", mt: 3 }}>
      <Typography variant="body2" color="text.secondary">
        {text}{" "}
        <Typography
          component="span"
          variant="body2"
          color="primary"
          sx={{ cursor: "pointer" }}
          onClick={onClick}
        >
          {linkText}
        </Typography>
      </Typography>
    </Box>
  );
};

export default AuthFooter;
