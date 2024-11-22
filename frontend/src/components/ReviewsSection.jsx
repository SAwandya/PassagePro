import React from "react";
import { Box, Typography, LinearProgress, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

const ReviewsSection = () => {
  const ratings = [
    { stars: 5, count: 54 },
    { stars: 4, count: 12 },
    { stars: 3, count: 1 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ];

  const aspects = [
    { name: "Punctuality", rating: 4.8 },
    { name: "Cleanliness", rating: 4.9 },
    { name: "Seat comfort", rating: 4.7 },
    { name: "Staff", rating: 4.8 },
    { name: "Safety & Driving", rating: 4.9 },
    { name: "Women's safety (answer only if you're a woman)", rating: 4.6 },
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6">We love travelers.</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<QuestionAnswerOutlinedIcon />}
          sx={{
            bgcolor: "#F5F5F5",
            color: "#1A1A1A",
            "&:hover": { bgcolor: "#E0E0E0" },
          }}
        >
          ASK A QUESTION
        </Button>
      </Box>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Check out what some of them have to say.
      </Typography>

      <Box sx={{ display: "flex", gap: 4 }}>
        {/* Overall Rating */}
        <Box sx={{ minWidth: 200 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} sx={{ color: "#FFC107" }} />
            ))}
          </Box>
          <Typography variant="body2" color="text.secondary">
            67 Reviews
          </Typography>
        </Box>

        {/* Rating Breakdown */}
        <Box sx={{ flex: 1 }}>
          {ratings.map((rating) => (
            <Box
              key={rating.stars}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 1,
              }}
            >
              <Box sx={{ display: "flex", width: 80 }}>
                {[...Array(rating.stars)].map((_, i) => (
                  <StarIcon
                    key={i}
                    sx={{ color: "#FFC107", fontSize: "16px" }}
                  />
                ))}
              </Box>
              <LinearProgress
                variant="determinate"
                value={(rating.count / 67) * 100}
                sx={{
                  flex: 1,
                  height: 8,
                  borderRadius: 4,
                  bgcolor: "#F5F5F5",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: "#FFC107",
                  },
                }}
              />
              <Typography variant="body2" sx={{ minWidth: 30 }}>
                ({rating.count})
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Aspect Ratings */}
      <Box sx={{ mt: 4 }}>
        {aspects.map((aspect) => (
          <Box
            key={aspect.name}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {aspect.name}:
            </Typography>
            <LinearProgress
              variant="determinate"
              value={(aspect.rating / 5) * 100}
              sx={{
                width: "60%",
                height: 8,
                borderRadius: 4,
                bgcolor: "#F5F5F5",
                "& .MuiLinearProgress-bar": {
                  bgcolor: "#2196F3",
                },
              }}
            />
          </Box>
        ))}
      </Box>

      <Button
        sx={{
          color: "#1976D2",
          textTransform: "none",
          p: 0,
          "&:hover": {
            bgcolor: "transparent",
            textDecoration: "underline",
          },
        }}
      >
        Show less
      </Button>
    </Box>
  );
};

export default ReviewsSection;
