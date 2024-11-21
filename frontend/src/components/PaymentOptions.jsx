import React from "react";
import { Box, Typography, TextField, Grid } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentMethodSelector from "./PaymentMethodSelector ";

const PaymentOptions = () => {
  return (
    <Box>
      <PaymentMethodSelector />

      <Box
        sx={{
          mt: 4,
          p: 3,
          border: "1px solid #FFE0D9",
          borderRadius: 2,
          bgcolor: "#FFF5F2",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Enter credit card details
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField fullWidth label="Name on card" placeholder="Full name" />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Card number"
              placeholder="1234 1234 1234 1234"
              InputProps={{
                endAdornment: <CreditCardIcon color="action" />,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Expiration date"
              placeholder="MM / YY"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Security code"
              placeholder="CVC"
              helperText="The last 3 digits on the back of your card"
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, display: "flex", gap: 1, flexWrap: "wrap" }}>
          {[
            "visa",
            "mastercard",
            "amex",
            "diners",
            "discover",
            "unionpay",
            "elo",
          ].map((card) => (
            <img
              key={card}
              src={`/images/cards/${card}.svg`}
              alt={card}
              height="24"
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentOptions;
