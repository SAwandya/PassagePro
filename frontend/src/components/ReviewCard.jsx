import React from "react";
import { Box, Typography, Rating } from "@mui/material";

const ReviewCard = ({
  rating,
  comment,
  author,
  date,
  hasFullReview = false,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F8F8F8",
        borderRadius: "12px",
        p: 3,
        flex: 1,
      }}
    >
      <Rating value={rating} readOnly sx={{ mb: 2 }} />

      <Typography
        variant="body1"
        sx={{
          mb: 2,
          color: "#1A1A1A",
          fontWeight: 500,
        }}
      >
        {comment}
        {hasFullReview && (
          <Typography
            component="span"
            sx={{
              color: "#FF5722",
              ml: 1,
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Read full review
          </Typography>
        )}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" sx={{ color: "#666666" }}>
          {author}
        </Typography>
        <Typography variant="body2" sx={{ color: "#666666" }}>
          {date}
        </Typography>
      </Box>
    </Box>
  );
};

export default ReviewCard;
