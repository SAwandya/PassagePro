import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, Select, MenuItem, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import useGameQueryStore from "../store";

const Navbar = () => {
  const SetIsRegisterOpen = useGameQueryStore((s) => s.SetIsRegisterOpen);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem>
          <Select
            value="EN"
            variant="standard"
            IconComponent={KeyboardArrowDownIcon}
            sx={{ minWidth: "100%", mb: 2 }}
          >
            <MenuItem value="EN">🇬🇧 English</MenuItem>
          </Select>
        </ListItem>
        <ListItem>
          <Select
            value="US$"
            variant="standard"
            IconComponent={KeyboardArrowDownIcon}
            sx={{ minWidth: "100%", mb: 2 }}
          >
            <MenuItem value="US$">US$</MenuItem>
          </Select>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Help center" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="My bookings" />
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#4F75FF",
              "&:hover": { backgroundColor: "#6439FF" },
              "&:active": { backgroundColor: "#6439FF" },
              borderRadius: "8px",
              textTransform: "none",
              px: 3,
              mt: 2,
            }}
            onClick={() => SetIsRegisterOpen(true)}
          >
            Create an account
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ background: "transparent", py: 1, position: "absolute" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img
          src="../../src/assets/mainlogo.png"
          alt="BookaWay"
          style={{ height: "60px" }}
        />

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
          <Select
            value="EN"
            variant="standard"
            IconComponent={KeyboardArrowDownIcon}
            sx={{ minWidth: 100, color: "#ffffff" }}
          >
            <MenuItem value="EN">🇬🇧 English</MenuItem>
          </Select>
          <Select
            value="US$"
            variant="standard"
            IconComponent={KeyboardArrowDownIcon}
            sx={{ minWidth: 100, color: "#ffffff" }}
          >
            <MenuItem value="US$">US$</MenuItem>
          </Select>
          <Button color="inherit" sx={{ color: "#ffffff" }}>
            Blog
          </Button>
          <Button color="inherit" sx={{ color: "#ffffff" }}>
            Help center
          </Button>
          <Button color="inherit" sx={{ color: "#ffffff" }}>
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

        {/* Mobile Menu */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "#ffffff" }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
