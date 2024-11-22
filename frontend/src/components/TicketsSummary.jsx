import React from "react";
import { Box, Typography, Button, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import VerifiedIcon from "@mui/icons-material/Verified";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const TripDetails = ({ direction, date, passengers, price }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="subtitle1">{direction}</Typography>
    <Typography variant="body2" color="text.secondary">
      {date} | Max Capacity: {passengers} <PersonIcon sx={{ fontSize: 14 }} />
    </Typography>
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
      <Typography variant="body2">
        {direction === "Kandy to Ella" ? "Departure" : "Return"} trip (
        {passengers} passengers)
      </Typography>
      <Typography variant="body2">US${price}</Typography>
    </Box>
  </Box>
);

const TicketsSummary = () => {

  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#F8F9FA", p: 3, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Tickets summary
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle1">
            Kandy to Ella (round trip)
          </Typography>
          <Tooltip title="Non refundable">
            <InfoIcon sx={{ ml: 1, fontSize: 16 }} />
          </Tooltip>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Non refundable
        </Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle1">Standard Car</Typography>
          <VerifiedIcon sx={{ ml: 1, color: "#4CAF50" }} />
        </Box>
        <Typography variant="body2" color="text.secondary">
          by Magical Sri Lanka
        </Typography>
      </Box>

      <TripDetails
        direction="Kandy to Ella"
        date="22 Nov, 2024 | 00:00"
        passengers={2}
        price={68.4}
      />

      <TripDetails
        direction="Ella to Kandy"
        date="22 Nov, 2024 | 00:00"
        passengers={2}
        price={68.4}
      />

      <Box sx={{ mt: 3, pt: 2, borderTop: "1px solid #E0E0E0" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography>Total trips (2 trips, 2 passengers)</Typography>
          <Typography>US$136.80</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">US$136.80</Typography>
        </Box>
      </Box>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate("/seatbooking")}
      >
        Continue to ticket options
      </Button>
    </Box>
  );
};

export default TicketsSummary;
