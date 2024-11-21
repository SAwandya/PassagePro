import React from "react";
import { Box, Typography, TextField, Grid, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const PassengerForm = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <PersonIcon sx={{ mr: 1 }} />
        <Typography variant="h6">Main passenger</Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First name"
            defaultValue="Sachila"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last name"
            defaultValue="Manamperi"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            defaultValue="sachilaawandya89@gmail.com"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <PhoneInput
            country={"lk"}
            value="+0715581536"
            inputStyle={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            label="Country of residence"
            defaultValue="Sri Lanka"
            variant="outlined"
          >
            <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
        These details will be used by us or by the operator to contact you if
        necessary. Please remember to check your email and mobile for any
        details.
      </Typography>
    </Box>
  );
};

export default PassengerForm;
