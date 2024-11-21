import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        p: 3,
        border: "1px solid #E0E0E0",
        borderRadius: 2,
        bgcolor: "white",
      }}
    >
      <Typography variant="h6" sx={{ mb: 3 }}>
        Plan your ride
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Departure date & time
        </Typography>
        <TextField
          fullWidth
          value="Nov 22, 2024"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarTodayIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          value="00:00"
          sx={{ mt: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <KeyboardArrowDownIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="body2">Return date & time</Typography>
          <Typography
            color="primary"
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Remove
          </Typography>
        </Box>
        <TextField
          fullWidth
          value="Nov 22, 2024"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarTodayIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          value="00:00"
          sx={{ mt: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <KeyboardArrowDownIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          No. of passengers
        </Typography>
        <TextField
          fullWidth
          value="2 Passengers"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <KeyboardArrowDownIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography>Total (× 2)</Typography>
        <Typography variant="h6">US$136.80</Typography>
      </Box>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        sx={{ mb: 2 }}
        onClick={() => navigate("/mainpassengerdata")}
      >
        Continue to passenger details
      </Button>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <FlashOnIcon color="primary" />
        <Typography color="primary">Instant confirmation</Typography>
      </Box>
    </Box>
  );
};

export default BookingForm;
