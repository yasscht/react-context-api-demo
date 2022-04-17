import products from "../data";
import ProductCard from "../components/ProductCard";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default HomePage;
