import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SeatSelectionModal = ({ open, onClose, onSelect, selectedSeats }) => {
  const [tempSelectedSeats, setTempSelectedSeats] = useState(selectedSeats);

  const seatLayout = {
    rows: 10,
    columns: ["A", "B", "D", "E"],
  };

  const handleSeatClick = (seatNumber) => {
    setTempSelectedSeats((prev) => {
      if (prev.includes(seatNumber)) {
        return prev.filter((seat) => seat !== seatNumber);
      }
      if (prev.length < 2) {
        return [...prev, seatNumber];
      }
      return prev;
    });
  };

  const isSeatSelected = (seatNumber) => tempSelectedSeats.includes(seatNumber);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">
            Kampot Giant Ibis to Phnom Penh Giant Ibis
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <SeatLegend type="selected" label="Selected" />
          <SeatLegend type="available" label="Available" />
          <SeatLegend type="booked" label="Booked" />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "grid", gap: 1 }}>
            {[...Array(seatLayout.rows)].map((_, row) => (
              <Box key={row} sx={{ display: "flex", gap: 2 }}>
                {seatLayout.columns.map((col) => {
                  const seatNumber = `${row + 1}-${col}`;
                  return (
                    <SeatButton
                      key={seatNumber}
                      seatNumber={seatNumber}
                      selected={isSeatSelected(seatNumber)}
                      onClick={() => handleSeatClick(seatNumber)}
                    />
                  );
                })}
              </Box>
            ))}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Typography>{tempSelectedSeats.length}/2 Seats selected</Typography>
        <Button
          variant="contained"
          onClick={() => onSelect(tempSelectedSeats)}
          disabled={tempSelectedSeats.length === 0}
        >
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const SeatButton = ({ seatNumber, selected, onClick }) => (
  <Button
    variant={selected ? "contained" : "outlined"}
    onClick={onClick}
    sx={{
      minWidth: 40,
      height: 40,
      p: 0,
      bgcolor: selected ? "#4CAF50" : "transparent",
      "&:hover": {
        bgcolor: selected ? "#45a049" : "rgba(0,0,0,0.04)",
      },
    }}
  >
    {seatNumber}
  </Button>
);

const SeatLegend = ({ type, label }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Box
      sx={{
        width: 20,
        height: 20,
        borderRadius: 1,
        bgcolor:
          type === "selected"
            ? "#4CAF50"
            : type === "available"
            ? "#fff"
            : "#e0e0e0",
        border: type === "available" ? "1px solid #ccc" : "none",
      }}
    />
    <Typography variant="body2">{label}</Typography>
  </Box>
);

export default SeatSelectionModal;
