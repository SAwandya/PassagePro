import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const RouteCard = ({ image, from, to }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          cursor: "pointer",
        },
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={image}
        alt={`${from} to ${to}`}
        sx={{
          objectFit: "cover",
        }}
      />

      <CardContent
        sx={{
          flexGrow: 1,
          p: 2,
          "&:last-child": {
            pb: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            variant="body1"
            component="div"
            sx={{
              fontWeight: 500,
              color: "#1A1A1A",
            }}
          >
            {from}
          </Typography>

          <ArrowRightAltIcon
            sx={{
              color: "#666666",
            }}
          />

          <Typography
            variant="body1"
            component="div"
            sx={{
              fontWeight: 500,
              color: "#1A1A1A",
            }}
          >
            {to}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RouteCard;
