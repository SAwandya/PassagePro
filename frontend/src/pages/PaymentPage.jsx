import React from "react";
import { Container, Grid } from "@mui/material";
import PaymentStepper from "../components/PaymentStepper";
import PaymentOptions from "../components/PaymentOptions";
import PaymentSummary from "../components/PaymentSummary";

const PaymentPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <PaymentStepper activeStep={3} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <PaymentOptions />
        </Grid>
        <Grid item xs={12} md={4}>
          <PaymentSummary />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PaymentPage;
