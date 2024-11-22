import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const PolicyAndOperatorInfo = () => {
  return (
    <Box>
      {/* Cancellation Policy Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.25rem",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Cancellation policy
        </Typography>

        <Box component="ul" sx={{ pl: 2, mb: 0 }}>
          <Box component="li" sx={{ mb: 1 }}>
            Up to 48 hours before departure -
            <Typography
              component="span"
              sx={{ color: "#4CAF50", fontWeight: 500, ml: 1 }}
            >
              FREE
            </Typography>
          </Box>
          <Box component="li">
            Up to 24 hours before departure -
            <Typography
              component="span"
              sx={{ color: "#1A1A1A", fontWeight: 500, ml: 1 }}
            >
              50% fee
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Changes Policy Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.25rem",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Changes policy
        </Typography>

        <Box component="ul" sx={{ pl: 2, mb: 0 }}>
          <Box component="li">
            Up to 24 hours before departure -
            <Typography
              component="span"
              sx={{ color: "#4CAF50", fontWeight: 500, ml: 1 }}
            >
              FREE
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* About the Operator Section */}
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.25rem",
            fontWeight: 600,
            mb: 2,
          }}
        >
          About the operator
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.125rem",
              fontWeight: 500,
              mb: 0.5,
            }}
          >
            <Box
              component="span"
              sx={{
                background: "linear-gradient(45deg, #FF5722, #FF9800)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                mr: 1,
              }}
            >
              Magical
            </Box>
            Sri Lanka
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: "#666666",
            lineHeight: 1.6,
          }}
        >
          Magical Sri Lanka is based in Sri Lanka and provides private minivan
          services from Colombo to Negombo, Hikkaduwa, Galle, Matara, Ella,
          Badulla, Kandy, Sigiriya and Anuradhapura.
        </Typography>
      </Box>
    </Box>
  );
};

export default PolicyAndOperatorInfo;
