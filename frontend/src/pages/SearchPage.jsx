import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import SearchHeader from "../components/SearchHeader";
import FilterSidebar from "../components/FilterSidebar";
import ListingCard from "../components/ListingCard";
import { transportData } from "../data/transportData";

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <SearchHeader
        routes={transportData.routes}
        transportTypes={transportData.transportTypes}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      <Box sx={{ display: "flex" }}>
        <FilterSidebar />

        <Box sx={{ flex: 1, p: 4 }}>
          {transportData.listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchPage;
