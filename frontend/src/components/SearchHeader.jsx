import React from "react";
import { Box, Breadcrumbs, Link, Typography, Tabs, Tab } from "@mui/material";
import DirectionsIcon from "@mui/icons-material/Directions";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";

const SearchHeader = ({ routes, transportTypes, activeTab, onTabChange }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Box sx={{ p: 2 }}>
        <Breadcrumbs separator="/" aria-label="breadcrumb">
          {routes.breadcrumbs.map((crumb, index) => (
            <Link
              key={index}
              color="inherit"
              href="#"
              sx={{
                textDecoration: "none",
                color:
                  index === routes.breadcrumbs.length - 1
                    ? "#FF5722"
                    : "inherit",
              }}
            >
              {crumb}
            </Link>
          ))}
        </Breadcrumbs>

        <Typography variant="h4" sx={{ mt: 2, mb: 3 }}>
          {routes.from} To {routes.to}
        </Typography>
      </Box>

      <Tabs
        value={activeTab}
        onChange={onTabChange}
        sx={{
          "& .MuiTab-root": {
            minWidth: 120,
            textTransform: "none",
          },
        }}
      >
        {transportTypes.map((type, index) => (
          <Tab
            key={index}
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {type.type}
                <Typography variant="body2" color="text.secondary">
                  · {type.price}
                </Typography>
              </Box>
            }
            icon={getIcon(type.icon)}
          />
        ))}
      </Tabs>
    </Box>
  );
};

const getIcon = (iconName) => {
  switch (iconName) {
    case "directions":
      return <DirectionsIcon />;
    case "train":
      return <TrainIcon />;
    case "directions_car":
      return <DirectionsCarIcon />;
    case "airport_shuttle":
      return <AirportShuttleIcon />;
    default:
      return null;
  }
};

export default SearchHeader;
