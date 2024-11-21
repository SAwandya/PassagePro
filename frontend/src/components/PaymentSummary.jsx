import React from "react";
import { Box, Typography, Button, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { useNavigate } from "react-router-dom";

const PaymentSummary = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#F8F9FA", p: 3, borderRadius: 2 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">Tickets summary</Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <Typography>Kandy to Ella (round trip)</Typography>
          <Tooltip title="Free cancellation available">
            <InfoIcon sx={{ ml: 1, fontSize: 16, color: "#4CAF50" }} />
          </Tooltip>
        </Box>
        <Typography variant="body2" color="success.main">
          Free cancellation
        </Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <PriceRow label="Tickets and extras" value={145.88} />
        <PriceRow label="Service fee" info="What's this?" value={19.9} />
        <Box sx={{ mt: 2 }}>
          <PriceRow
            label="Total"
            info="Charge in Euro: €157.11"
            value={165.78}
            bold
          />
        </Box>
      </Box>

      <Box sx={{ bgcolor: "#F3F8FF", p: 2, borderRadius: 1, mb: 3 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <LightbulbIcon sx={{ color: "#1976D2" }} />
          <Box>
            <Typography variant="subtitle2">Why Bookaway?</Typography>
            <Typography variant="body2">
              We take care of ticketing, reservation and payment processing. Our
              online support is here for you 24/7.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate("/")}
      >
        Book this ride
      </Button>

      <Typography
        variant="body2"
        color="success.main"
        align="center"
        sx={{ mt: 2 }}
      >
        You will be charged once the operator confirms your booking
      </Typography>
    </Box>
  );
};

const PriceRow = ({ label, info, value, bold }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant={bold ? "subtitle1" : "body2"}>{label}</Typography>
      {info && (
        <Tooltip title={info}>
          <InfoIcon sx={{ ml: 1, fontSize: 16 }} />
        </Tooltip>
      )}
    </Box>
    <Typography variant={bold ? "subtitle1" : "body2"}>
      US${value.toFixed(2)}
    </Typography>
  </Box>
);

export default PaymentSummary;
