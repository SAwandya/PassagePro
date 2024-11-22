import React from "react";
import { Box, Typography, Button } from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

const SeatSelection = ({ onSelectClick, selectedSeats }) => {
  return (
    <Box sx={{ bgcolor: "#F8F9FA", p: 3, borderRadius: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        <DirectionsBusIcon />
        <Box>
          <Typography variant="h6">Kampot → Phnom Penh</Typography>
          <Typography variant="body2" color="text.secondary">
            Giant Ibis
          </Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" color="error" gutterBottom>
          Seat selection *
        </Typography>
        {selectedSeats.length > 0 ? (
          <Typography>Selected seats: {selectedSeats.join(", ")}</Typography>
        ) : null}
      </Box>

      <Button variant="outlined" onClick={onSelectClick} sx={{ minWidth: 120 }}>
        Select
      </Button>
    </Box>
  );
};

export default SeatSelection;
