import './ProductCard.css';
const ProductCard = (props: any) => {
  const { product, handleAddToProduct } = props;

  return (
    <div className="productCard">
      <p
        className="product-add-to-cart"
        onClick={() => handleAddToProduct(product)}
      >
        Add to Cart
      </p>
      <h3 className="product-title"> {product.title}</h3>
      <img src={product.image} alt="product-image" className="product-image" />
    </div>
  );
};

export default ProductCard;
