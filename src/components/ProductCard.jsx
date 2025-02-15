import "../styles/Products.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h4>${product.price}</h4>
    </div>
  );
};

export default ProductCard;
