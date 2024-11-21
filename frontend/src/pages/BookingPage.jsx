import React from "react";
import { Box, Grid, Container } from "@mui/material";
import BookingHeader from "../components/BookingHeader";
import CarImageGallery from "../components/CarImageGallery";
import BookingForm from "../components/BookingForm";

const BookingPage = () => {
  return (
    <Container maxWidth="lg">
      <BookingHeader />
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <CarImageGallery />
        </Grid>
        <Grid item xs={12} md={4}>
          <BookingForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookingPage;
