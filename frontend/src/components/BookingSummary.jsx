import React from "react";
import { Box, Typography, Button, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import { useNavigate } from "react-router-dom";

const BookingSummary = ({ selectedSeats }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: "#F8F9FA", p: 3, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Tickets summary
      </Typography>

      {/* Route Info */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1">Kampot to Phnom Penh</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Non refundable
          </Typography>
          <Tooltip title="This ticket cannot be refunded">
            <InfoOutlinedIcon sx={{ fontSize: 16, color: "text.secondary" }} />
          </Tooltip>
        </Box>
      </Box>

      {/* Bus Service Info */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1">Tourist Bus</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <DirectionsBusIcon sx={{ fontSize: 16, color: "text.secondary" }} />
          <Typography variant="body2" color="text.secondary">
            by Giant Ibis
          </Typography>
        </Box>
      </Box>

      {/* Trip Details */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body2" color="text.secondary">
          23 Nov, 2024 | 08:30
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Typography variant="body2">
            Departure trip ({selectedSeats.length || 2} passengers)
          </Typography>
          <Typography variant="body2">US$17.92</Typography>
        </Box>
      </Box>

      {/* Total */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #E0E0E0",
          pt: 2,
          mb: 3,
        }}
      >
        <Typography variant="subtitle1">Total</Typography>
        <Typography variant="subtitle1">US$17.92</Typography>
      </Box>

      {/* Action Button */}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        sx={{
          bgcolor: "#FF5722",
          "&:hover": {
            bgcolor: "#F4511E",
          },
        }}
        onClick={() => navigate("/options")}
      >
        Continue to extras
      </Button>
    </Box>
  );
};

export default BookingSummary;
