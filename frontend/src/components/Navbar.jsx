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
      sx={{ background: "transparent", py: 1, position: "absolute" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img src="../../src/assets/mainlogo.png" alt="BookaWay" style={{ height: "82px" }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            color: "#fffff",
          }}
        >
          <Select
            value="EN"
            variant="standard"
            color="primary"
            IconComponent={KeyboardArrowDownIcon}
            sx={{ minWidth: 100, color: "#fffff" }}
          >
            <MenuItem value="EN">
              🇬🇧 English
            </MenuItem>
          </Select>

          <Select
            value="US$"
            variant="standard"
            color="primary"
            IconComponent={KeyboardArrowDownIcon}
            sx={{ minWidth: 100 }}
          >
            <MenuItem value="US$">
              US$
            </MenuItem>
          </Select>

          <Button color="inherit" sx={{ color: "#fffff" }}>
            Blog
          </Button>
          <Button color="inherit" sx={{ color: "#fffff" }}>
            Help center
          </Button>
          <Button color="inherit" sx={{ color: "#fffff" }}>
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
