import React from "react";
import { AppBar, Toolbar, Box, Button, Select, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ background: "transparent", py: 1 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img src="/logo.png" alt="BookaWay" style={{ height: "32px" }} />

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Select
            value="EN"
            variant="standard"
            IconComponent={KeyboardArrowDownIcon}
            sx={{ minWidth: 100 }}
          >
            <MenuItem value="EN">🇬🇧 English</MenuItem>
          </Select>

          <Select
            value="US$"
            variant="standard"
            IconComponent={KeyboardArrowDownIcon}
            sx={{ minWidth: 100 }}
          >
            <MenuItem value="US$">US$</MenuItem>
          </Select>

          <Button color="inherit" sx={{ color: "#1A1A1A" }}>
            Blog
          </Button>
          <Button color="inherit" sx={{ color: "#1A1A1A" }}>
            Help center
          </Button>
          <Button color="inherit" sx={{ color: "#1A1A1A" }}>
            My bookings
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF5722",
              "&:hover": { backgroundColor: "#F4511E" },
              borderRadius: "8px",
              textTransform: "none",
              px: 3,
            }}
          >
            Create an account
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
