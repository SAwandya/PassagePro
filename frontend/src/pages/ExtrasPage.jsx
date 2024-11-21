import React from "react";
import { Container, Grid } from "@mui/material";
import BookingStepper from "./BookingStepper";
import ExtrasOptions from "./ExtrasOptions";
import TicketsSummary from "./TicketsSummary";

const ExtrasPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <BookingStepper activeStep={2} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <ExtrasOptions />
        </Grid>
        <Grid item xs={12} md={4}>
          <TicketsSummary />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExtrasPage;
