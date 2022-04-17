import products from "../data";
import ProductCard from "../components/ProductCard";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="products__wrapper">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default HomePage;
