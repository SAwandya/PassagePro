import React from "react";
import { Box, InputBase, Button, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        mx: "auto",
        maxWidth: "1200px",
        backgroundColor: "white",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        p: 1,
        gap: 1,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      <SearchInput
        icon={<LocationOnIcon />}
        placeholder="From: City, Place, Hotel"
      />

      <IconButton sx={{ p: 1 }}>
        <SwapHorizIcon />
      </IconButton>

      <SearchInput
        icon={<LocationOnIcon />}
        placeholder="To: City, Place, Hotel"
      />

      <SearchInput
        icon={<CalendarTodayIcon />}
        placeholder="Nov 23"
        width="140px"
      />

      <SearchInput
        icon={<CalendarTodayIcon />}
        placeholder="Return?"
        width="140px"
      />

      <SearchInput icon={<PersonOutlineIcon />} placeholder="2" width="100px" />

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF5722",
          "&:hover": { backgroundColor: "#F4511E" },
          borderRadius: "8px",
          textTransform: "none",
          px: 4,
          py: 1.5,
        }}
        onClick={() => navigate("/search")}
      >
        Find tickets
      </Button>
    </Box>
  );
};

// Custom Search Input Component
const SearchInput = ({ icon, placeholder, width = "auto" }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      backgroundColor: "#F8F8F8",
      borderRadius: "8px",
      p: 1,
      width,
    }}
  >
    {icon}
    <InputBase placeholder={placeholder} sx={{ ml: 1, flex: 1 }} />
  </Box>
);

export default SearchBox;
