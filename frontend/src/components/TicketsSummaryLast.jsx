import React from "react";
import { Box, Typography, Button, Tooltip, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import VerifiedIcon from "@mui/icons-material/Verified";
import PersonIcon from "@mui/icons-material/Person";

const TicketsSummaryLast = () => {
  return (
    <Box sx={{ bgcolor: "#F8F9FA", p: 3, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Tickets summary
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="subtitle1">
            Kandy to Ella (round trip)
          </Typography>
          <Tooltip title="Free cancellation available">
            <IconButton size="small">
              <InfoIcon fontSize="small" color="success" />
            </IconButton>
          </Tooltip>
        </Box>
        <Typography variant="body2" color="success.main">
          Free cancellation
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

      {/* Trip Details */}
      <TripSummaryItem
        direction="Kandy to Ella"
        date="30 Nov, 2024 | 00:00"
        capacity={2}
        price={68.41}
      />

      <TripSummaryItem
        direction="Ella to Kandy"
        date="17 Dec, 2024 | 00:00"
        capacity={2}
        price={68.41}
      />

      {/* Price Summary */}
      <Box sx={{ mt: 3, pt: 2, borderTop: "1px solid #E0E0E0" }}>
        <PriceRow label="Total trips (2 trips, 2 passengers)" value={136.82} />
        <PriceRow label="Ride Insurance" value={9.07} />
        <Box sx={{ mt: 2 }}>
          <PriceRow label="Total" value={145.89} bold />
        </Box>
      </Box>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 3 }}
      >
        Continue to payment
      </Button>
    </Box>
  );
};

const TripSummaryItem = ({ direction, date, capacity, price }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="subtitle2">{direction}</Typography>
    <Typography variant="body2" color="text.secondary">
      {date} | Max Capacity: {capacity} <PersonIcon sx={{ fontSize: 14 }} />
    </Typography>
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
      <Typography variant="body2">
        {direction.includes("Kandy to") ? "Departure" : "Return"} trip (
        {capacity} passengers)
      </Typography>
      <Typography variant="body2">US${price}</Typography>
    </Box>
  </Box>
);

const PriceRow = ({ label, value, bold }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
    <Typography variant={bold ? "subtitle1" : "body2"}>{label}</Typography>
    <Typography variant={bold ? "subtitle1" : "body2"}>
      US${value.toFixed(2)}
    </Typography>
  </Box>
);

export default TicketsSummaryLast;
