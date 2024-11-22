import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import BookingStepper from "../components/BookingStepper";
import SeatSelection from "../components/SeatSelection";
import BookingSummary from "../components/BookingSummary";
import SeatSelectionModal from "../components/SeatSelectionModal";

const SeatBookingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <BookingStepper activeStep={1} />
      <Box sx={{ display: "flex", gap: 4 }}>
        <Box sx={{ flex: "1 1 auto" }}>
          <SeatSelection
            onSelectClick={() => setIsModalOpen(true)}
            selectedSeats={selectedSeats}
          />
        </Box>
        <Box sx={{ width: 380 }}>
          <BookingSummary selectedSeats={selectedSeats} />
        </Box>
      </Box>

      <SeatSelectionModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={(seats) => {
          setSelectedSeats(seats);
          setIsModalOpen(false);
        }}
        selectedSeats={selectedSeats}
      />
    </Container>
  );
};

export default SeatBookingPage;
