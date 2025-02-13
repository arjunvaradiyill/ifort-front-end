const API_URL = "http://localhost:3000/api/products";

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
