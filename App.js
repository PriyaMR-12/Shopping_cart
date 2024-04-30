import React from "react";
import "./App.css";
import ProductCard from "./Productcard.js";
import dress1image from "./dress1.jpg"
import dress2image from "./dress2.jpg"
function App() {
  const products = [
    {
      id: 1,
      name: "Western wear",
      category: "Rear floral print",
      price: 10,
      rating: 4,
      image: dress1image,
    },
    {
      id: 2,
      name: "Cottinfab",
      category: "Tiered dress",
      price: 20,
      rating: 3,
      image: dress2image,
    },
    // Add more products as needed
  ];

  return (
    <div className="App">
      <header>
        <nav>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
        </nav>
      </header>
      <div className="categories">
        <label>Filter by Category:</label>
        <select>
          <option value="all">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
