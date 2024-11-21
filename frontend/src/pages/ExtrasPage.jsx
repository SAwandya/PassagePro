import React from "react";
import { Container, Grid } from "@mui/material";
import BookingStepper from "../components/BookingStepper";
import ExtrasOptions from "../components/ExtrasOptions";
import TicketsSummaryLast from "../components/TicketsSummaryLast";

const ExtrasPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <BookingStepper activeStep={2} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <ExtrasOptions />
        </Grid>
        <Grid item xs={12} md={4}>
          <TicketsSummaryLast />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExtrasPage;
