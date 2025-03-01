import { Box, Chip, Grid2, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import NoData from "../Components/NoData";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch all products
    axios
      .get("https://dummyjson.com/products?limit=1000")
      .then((response) => {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products); // Initialize filtered products
      })
      .catch((error) => {
        console.log(error);
      });

    // Fetch product categories
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // Set the filtered products
    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, products]);

  const handleSearchedProducts = (e) => {
    setSearchTerm(e.target.value); // Update search term
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 sx={{ p: 2 }} size={{ xs: 12, sm: 3 }}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Filter By category
            </Typography>
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "flex-start",
                gap: 1,
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <Chip
                onClick={() => setSelectedCategory("All")}
                color={selectedCategory === "All" ? "success" : "default"}
                label={"All"}
                component={Paper}
              />
              {categories?.map((category, index) => (
                <Chip
                  component={Paper}
                  key={index}
                  onClick={() => setSelectedCategory(category?.slug)}
                  label={category?.name}
                  color={
                    selectedCategory === category?.slug ? "success" : "default"
                  }
                />
              ))}
            </Box>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 9 }} sx={{ p: 2 }}>
          <Box>
            <TextField
              onChange={handleSearchedProducts}
              fullWidth
              type="search"
              value={searchTerm}
              label="Search product here"
              placeholder="search product by title"
            />
            <Box sx={{ flexGrow: 1, p: 3 }}>
              <Grid2 container spacing={2}>

                {filteredProducts?.length > 0 ? (
                  filteredProducts?.map((product, index) => (

                    <Grid2 size={{ xs: 12, sm: 4 }} key={index}>
                      <ProductCard product={product} />
                    </Grid2>

                  ))

                ) : (

                  <Box sx={{ flexGrow: 1, p: 3 }}>
                    <Grid2 container spacing={2}>
                      <Grid2 size={{ xs: 12, sm: 12 }}>
                        <NoData />
                      </Grid2>
                    </Grid2>
                  </Box>
                  
                )}
              </Grid2>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
