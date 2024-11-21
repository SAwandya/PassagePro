import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const PaymentMethod = ({ icon, label, selected, onClick }) => (
  <Paper
    elevation={0}
    sx={{
      p: 3,
      border: "1px solid",
      borderColor: selected ? "#FF5722" : "#E0E0E0",
      borderRadius: 2,
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 1,
      bgcolor: selected ? "#FFF5F2" : "white",
      "&:hover": {
        borderColor: "#FF5722",
      },
    }}
    onClick={onClick}
  >
    {icon}
    <Typography>{label}</Typography>
  </Paper>
);

const PaymentMethodSelector = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <PaymentMethod
        icon={<CreditCardIcon sx={{ fontSize: 40 }} />}
        label="Credit card"
        selected={true}
      />
      <PaymentMethod
        icon={<img src="/images/paypal.svg" alt="PayPal" height="40" />}
        label="PayPal"
      />
      <PaymentMethod
        icon={
          <img src="/images/google-pay.svg" alt="Digital wallet" height="40" />
        }
        label="Digital wallet"
      />
    </Box>
  );
};

export default PaymentMethodSelector;
