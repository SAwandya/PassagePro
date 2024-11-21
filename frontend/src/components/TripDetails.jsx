import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LuggageIcon from "@mui/icons-material/Luggage";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PolicyAndOperatorInfo from "./PolicyAndOperatorInfo";
import ReviewsSection from "./ReviewsSection";
import Feedbacks from "./feedbacks";

const TripDetails = () => {
  return (
    <Box sx={{ mt: 4 }}>
      {/* Amenities Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.25rem",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Amenities on board
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#1A1A1A",
          }}
        >
          <AcUnitIcon sx={{ fontSize: "1.25rem" }} />
          <Typography>A/C</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Useful Info Section */}
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.25rem",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Useful info
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <LuggageIcon sx={{ color: "#1A1A1A" }} />
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                color: "#1A1A1A",
              }}
            >
              Luggage policy
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#666666",
                mt: 0.5,
              }}
            >
              20 kg bag and 7 kg handbag per passenger
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ my: 4 }} />

      {/* Schedule and Stations Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.25rem",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Schedule and stations
        </Typography>

        <Typography sx={{ mb: 2, color: "#1A1A1A" }}>
          This private ride takes <strong>4 hours</strong>. Please select any
          time you want in <strong>60 minutes</strong> intervals, starting at{" "}
          <strong>00:00</strong>.
        </Typography>

        <Box sx={{ display: "flex", mt: 3 }}>
          {/* Route Timeline */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mr: 2,
            }}
          >
            <LocationOnIcon sx={{ color: "#FF5722", fontSize: 24 }} />
            <Box sx={{ width: 2, height: 60, bgcolor: "#E0E0E0" }} />
            <FiberManualRecordIcon sx={{ color: "#1A1A1A", fontSize: 16 }} />
          </Box>

          {/* Station Details */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#FF5722",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                Kandy - Any hotel in the city center
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pickup
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#1A1A1A",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                Ella - Any hotel
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Drop-off
              </Typography>
            </Box>
          </Box>

          {/* Map */}
          <Box
            sx={{
              width: "50%",
              height: 200,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <img
              src="/images/route-map.png"
              alt="Route map"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />
        <PolicyAndOperatorInfo />
        <Divider sx={{ my: 4 }} />

        <ReviewsSection />
        <Divider sx={{ my: 4 }} />
        <Feedbacks/>
      </Box>

      <Divider sx={{ my: 4 }} />
    </Box>
  );
};

export default TripDetails;
