import "./ProductCard.css";
const ProductCard = ({ product }) => {
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.image} alt="" />
        <h4>{product.name}</h4>
        <div className="ProductCard__price">
          <h5>{product.price}</h5>
        </div>
        <div className="ProductCard__Rateing"></div>
      </div>
    </div>
  );
};
export default ProductCard;
