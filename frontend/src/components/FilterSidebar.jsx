import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
  styled,
} from "@mui/material";

const StyledSidebar = styled(Box)(({ theme }) => ({
  width: "280px",
  padding: theme.spacing(3),
  borderRight: `1px solid ${theme.palette.divider}`,
  height: "100%",
}));

const FilterSidebar = () => {
  return (
    <StyledSidebar>
      <Box sx={{ mb: 4 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          19 results
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          Sort by: Recommended ▼
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          Services
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Private transfer" />
          <FormControlLabel control={<Checkbox />} label="Hotel pickup" />
          <FormControlLabel control={<Checkbox />} label="Hotel drop-off" />
        </FormGroup>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          Departure time
        </Typography>
        <Slider
          value={[0, 24]}
          min={0}
          max={24}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value}:00`}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2">00:00</Typography>
          <Typography variant="body2">24:00</Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          Arrival time
        </Typography>
        <Slider
          value={[0, 24]}
          min={0}
          max={24}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value}:00`}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2">00:00</Typography>
          <Typography variant="body2">24:00</Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          Price
        </Typography>
        <Slider
          value={[25, 127]}
          min={25}
          max={127}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `US$${value}`}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2">US$25</Typography>
          <Typography variant="body2">US$127</Typography>
        </Box>
      </Box>

      <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
          Amenities
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="WC" />
          <FormControlLabel control={<Checkbox />} label="A/C" />
          <FormControlLabel control={<Checkbox />} label="Reclining Seats" />
          <FormControlLabel control={<Checkbox />} label="Food & Drinks" />
        </FormGroup>
      </Box>
    </StyledSidebar>
  );
};

export default FilterSidebar;
