import React from "react";
import { Container, Grid } from "@mui/material";
import BookingStepper from "../components/BookingStepper";
import PassengerForm from "../components/PassengerForm";
import TicketsSummary from "../components/TicketsSummary";

const MainPassengerData = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <BookingStepper />
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <PassengerForm />
        </Grid>
        <Grid item xs={12} md={4}>
          <TicketsSummary />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPassengerData;
