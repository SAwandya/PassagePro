import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const PaymentStepper = () => {
  const steps = [
    { label: "Passengers", status: "completed" },
    { label: "Options", status: "completed" },
    { label: "Extras", status: "completed" },
    { label: "Payment", status: "current" },
  ];

  return (
    <Box sx={{ mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Progress Line */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            right: "0",
            height: "2px",
            bgcolor: "#E0E0E0",
            zIndex: 0,
          }}
        />

        {/* Completed Progress */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            width: "100%",
            height: "2px",
            bgcolor: "#4CAF50",
            zIndex: 0,
          }}
        />

        {/* Steps */}
        {steps.map((step, index) => (
          <Box
            key={step.label}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 1,
              bgcolor: "white",
              position: "relative",
            }}
          >
            {step.status === "completed" ? (
              <CheckCircleIcon sx={{ color: "#4CAF50", fontSize: 24 }} />
            ) : step.status === "current" ? (
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  bgcolor: "#FF5722",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                4
              </Box>
            ) : (
              <RadioButtonUncheckedIcon
                sx={{ color: "#E0E0E0", fontSize: 24 }}
              />
            )}

            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: step.status === "current" ? "#1A1A1A" : "#666666",
                fontWeight: step.status === "current" ? 500 : 400,
              }}
            >
              {step.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PaymentStepper;
