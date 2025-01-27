import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import productsData from "../../data/products.json";
import ProductCards from "./ProductCards.jsx";
import ShopFiltering from "./ShopFiltering.jsx";
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi";

const filters = {
  categories: ["all", "jewellery", "cosmetics", "dress", "accessories"],
  colors: [
    "all",
    "red",
    "blue",
    "green",
    "yellow",
    "silver",
    "beige",
    "orange",
    "gold",
  ],
  priceRanges: [
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "$200 and above", min: 200, max: Infinity },
  ],
};

const ShopPage = () => {
  const [filtersState, setFiltersState] = useState({
    category: "all",
    color: "all",
    priceRange: "all",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [ProductsPerPage] = useState(8);

  const { category, color, priceRange } = filtersState;
  const [minPrice, maxPrice] = priceRange.split("-").map(Number);
  const {
    data: { products = [], totalPages, totalProducts } = {},
    error,
    isLoading,
  } = useFetchAllProductsQuery({
    category: category !== "all" ? category : "",
    color: color !== "all" ? color : "",
    minPrice: isNaN(minPrice) ? "" : minPrice,
    maxPrice: isNaN(maxPrice) ? "" : maxPrice,
    page: currentPage,
    limit: ProductsPerPage,
  });

  const clearFilters = () => {
    setFiltersState({
      category: "all",
      color: "all",
      priceRange: "all",
    });
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products...</div>;

  const startProduct = (currentPage - 1) * ProductsPerPage + 1;
  const endProduct = Math.min(currentPage * ProductsPerPage, totalProducts);

  return (
    <>
      <section
        className="section__container bg-primary-light"
        style={{ width: "85%" }}
      >
        <h2 className="section__header capitalize">ShopPage</h2>
        <p className="section__subheader">
          Browse a diverse range of varities, from chic dresses to versatile
          accessories
        </p>
      </section>
      <section className="section__container" style={{ paddingLeft: "150px" }}>
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          <ShopFiltering
            filters={filters}
            filtersState={filtersState}
            setFiltersState={setFiltersState}
            clearFilters={clearFilters}
          />
          <div>
            <h3 className="text-xl font-medium mb-4">
              Showing products {startProduct} to {endProduct} of {totalProducts}
            </h3>
            <ProductCards products={products} />
            <div className="mt-6 flex justify-center">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-700"
                  } rounded-md mx-2`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-3"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
