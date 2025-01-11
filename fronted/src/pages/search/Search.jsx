import React,{useState} from 'react'
import productsData from "../../data/products.json"
import ProductCards from "../shop/ProductCards.jsx";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <section
        className="section__container bg-primary-light"
        style={{ width: "80%" }}
      >
        <h2 className="section__header capitalize">Search Products</h2>
        <p className="section__subheader">
          Browse a diverse range of categories, from chic dresses to versatile
          accessories. Elevate your style today!
        </p>
      </section>
      <section className="section__container" style={{ paddingLeft: "50px" }}>
        <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4'>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar w-full max-w-4xl p-1.5
              border rounded 
                       placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-primary"
            placeholder="Search for products..."
          />
          <button
            onClick={handleSearch}
            className="search-button w-full md:w-auto py-2 px-8 bg-primary text-white  broder rounded">Search</button>
        </div>
        <ProductCards products={filteredProducts} />
       
       
      </section>
    </>
  );
};

export default Search;
