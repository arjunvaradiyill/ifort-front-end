import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products") // Fetch data from backend
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h2>🛒 Product List</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                width: "200px",
                textAlign: "center",
              }}
            >
              <img
                src={product.image || "https://via.placeholder.com/100"}
                alt={product.name}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>💰 ₹{product.price}</p>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Products;
