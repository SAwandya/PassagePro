import React from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Rating,
  LinearProgress,
  Select,
  MenuItem,
  Avatar,
  IconButton,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import VerifiedIcon from "@mui/icons-material/Verified";

const Feedbacks = () => {
  const [value, setValue] = React.useState(0);
  const [sort, setSort] = React.useState("newest");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleTabChange}>
          <Tab label="Reviews (67)" />
          <Tab label="Questions (0)" />
        </Tabs>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Sort:
          </Typography>
          <Select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            size="small"
            sx={{ minWidth: 120 }}
          >
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="highest">Highest rated</MenuItem>
            <MenuItem value="lowest">Lowest rated</MenuItem>
          </Select>
        </Box>
      </Box>

      {/* Individual Review */}
      <ReviewItem
        name="MARTHA E."
        date="11/12/24"
        rating={5}
        metrics={{
          staff: 5,
          safety: 5,
          cleanliness: 4,
          comfort: 4,
          punctuality: 5,
          womenSafety: 4,
        }}
        review="Overall nice experience!! Very attentive the driver.Absolutely I recommend."
        product="Scenic Minivan by Magical Sri Lanka"
      />

      <ReviewItem
        name="Chantal B."
        date="11/11/24"
        rating={5}
        metrics={{
          staff: 4,
          safety: 5,
          cleanliness: 5,
          comfort: 4,
          punctuality: 5,
          womenSafety: 5,
        }}
        review="Fantastique: j ai payé pour un van et j'ai eu droit à une voiture confortable pour le même prix! On s est arrêté boire un EXCELLENT expresso..."
        product="Standard Minivan by Magical Sri Lanka"
      />
    </Box>
  );
};

const ReviewItem = ({ name, date, rating, metrics, review, product }) => {
  return (
    <Box sx={{ py: 3, borderBottom: "1px solid #E0E0E0" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar sx={{ bgcolor: "#90CAF9" }}>{name.charAt(0)}</Avatar>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="subtitle1">{name}</Typography>
              <VerifiedIcon sx={{ color: "#4CAF50", fontSize: 16 }} />
              <Typography variant="body2" color="text.secondary">
                Verified Buyer
              </Typography>
            </Box>
            <Rating value={rating} readOnly size="small" />
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
      </Box>

      {/* Metrics Grid */}
      <Box
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mb: 2 }}
      >
        {Object.entries(metrics).map(([key, value]) => (
          <Box key={key} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" sx={{ minWidth: 120 }}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </Typography>
            <LinearProgress
              variant="determinate"
              value={value * 20}
              sx={{
                width: 100,
                height: 8,
                borderRadius: 4,
                bgcolor: "#E0E0E0",
                "& .MuiLinearProgress-bar": {
                  bgcolor: "#4CAF50",
                },
              }}
            />
          </Box>
        ))}
      </Box>

      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        {review.split("\n")[0]}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {review.split("\n").slice(1).join("\n")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Reviewed on:
          </Typography>
          <Typography variant="body2" color="primary">
            {product}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Was This Review Helpful?
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton size="small">
              <ThumbUpIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2">0</Typography>
            <IconButton size="small">
              <ThumbDownIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2">0</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Feedbacks;
