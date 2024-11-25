import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, Select, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useGameQueryStore from "../store";

const Navbar = () => {

  const SetIsRegisterOpen = useGameQueryStore((s) => s.SetIsRegisterOpen);

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
              backgroundColor: "#4F75FF",
              "&:hover": { backgroundColor: "#6439FF" },
              borderRadius: "8px",
              textTransform: "none",
              px: 3,
            }}
            onClick={() => SetIsRegisterOpen(true)}
          >
            Create an account
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
