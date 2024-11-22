import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  Rating,
  Chip,
  Stack,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LuggageIcon from "@mui/icons-material/Luggage";
import { useNavigate } from "react-router-dom";

const ListingCard = ({ listing }) => {


    const navigate = useNavigate();
  return (
    <Card
      sx={{
        display: "flex",
        mb: 2,
        position: "relative",
        overflow: "visible",
      }}
    >
      {listing.tag && (
        <Chip
          label={listing.tag}
          color={listing.tag === "Cheapest" ? "success" : "primary"}
          sx={{
            position: "absolute",
            top: -12,
            right: 16,
            zIndex: 1,
          }}
        />
      )}

      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={listing.image}
        alt={listing.type}
      />

      <Box sx={{ display: "flex", flex: 1, p: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            {listing.type}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Rating value={listing.rating} readOnly size="small" />
            <Typography variant="body2" sx={{ ml: 1 }}>
              {listing.rating} ({listing.reviews})
            </Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>
              | By {listing.operator}
            </Typography>
            {listing.verified && (
              <VerifiedIcon sx={{ ml: 1, color: "primary.main" }} />
            )}
          </Box>

          <Stack spacing={1}>
            {listing.features.map((feature, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <LuggageIcon fontSize="small" />
                {feature}
              </Typography>
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Typography variant="body2" sx={{ mb: 1 }}>
            Starting at:
          </Typography>
          <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
            US${listing.price} /
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/bookingdetails")}
          >
            Book tickets
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ListingCard;
