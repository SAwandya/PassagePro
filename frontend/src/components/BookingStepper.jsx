import React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

const BookingStepper = () => {
  const steps = [
    { label: "Passengers", status: "active" },
    { label: "Options", status: "pending" },
    { label: "Extras", status: "pending" },
    { label: "Payment", status: "pending" },
  ];

  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Stepper activeStep={0}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default BookingStepper;
