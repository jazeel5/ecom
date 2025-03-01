import { Box, Typography } from "@mui/material";
import React from "react";
import heroBg from "../Assets/Images/hero.jpg";
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: "linear-gradient(144deg, #8000ff4a, #00ff7178)",
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "#000000b8",
          }}
          gutterBottom
        >
          Welcome to DigiBazaar
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "#000000b8" }}
        >
          Discover, Explore, and Be Inspired!
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "#000000b8" }}
        >
          At DigiBazaar, we bring you a curated selection of products for your
          browsing pleasure. Whether you're looking for inspiration or just
          exploring the world of online goods, DigiBazaar offers a seamless
          experience to discover products across various categories.
        </Typography>
      </Box>
    </Box>
  );
}
