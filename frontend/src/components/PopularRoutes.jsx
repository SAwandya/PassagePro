import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import RouteCard from "./RouteCard";

const PopularRoutes = () => {
  const routes = [
    {
      id: 1,
      image: "/images/padang-bai.jpg",
      from: "Padang Bai, Bali",
      to: "Gili Trawangan Island, Lombok",
    },
    {
      id: 2,
      image: "/images/cebu-bohol.jpg",
      from: "Cebu",
      to: "Bohol",
    },
    {
      id: 3,
      image: "/images/sanur-nusa.jpg",
      from: "Sanur, Bali",
      to: "Nusa Penida, Penida Island",
    },
    {
      id: 4,
      image: "/images/el-nido-coron.jpg",
      from: "El Nido",
      to: "Coron",
    },
    {
      id: 5,
      image: "/images/hanoi-sapa.jpg",
      from: "Hanoi",
      to: "Sapa",
    },
    {
      id: 6,
      image: "/images/phuket-phi-phi.jpg",
      from: "Phuket",
      to: "Koh Phi Phi",
    },
    {
      id: 7,
      image: "/images/ho-chi-minh.jpg",
      from: "Ho Chi Minh City",
      to: "(Saigon)",
    },
    {
      id: 8,
      image: "/images/sanya-boao.jpg",
      from: "Sanya",
      to: "Boao, Hainan Island",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          mb: 6,
          color: "#1A1A1A",
        }}
      >
        Most popular routes
      </Typography>

      <Grid container spacing={3}>
        {routes.map((route) => (
          <Grid item xs={12} sm={6} md={3} key={route.id}>
            <RouteCard image={route.image} from={route.from} to={route.to} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularRoutes;
