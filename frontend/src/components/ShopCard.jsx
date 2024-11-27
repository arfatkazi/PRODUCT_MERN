import "./Shop.css";
import { useProductStore } from "../store/Product";
import { useEffect } from "react";
import { IoIosRocket } from "react-icons/io";
import { Link } from "react-router-dom";
import Card from "./Navbar/Card";

const ShopCard = () => {
  const { fetchProduct, products } = useProductStore();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  console.log("products", products);
  return (
    <div className="homeContainer">
      <h1 className="currenttitle">
        Current Products <IoIosRocket className="rocket" />
      </h1>

      {products.length > 0 ? (
        <div className="productList">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <h2>
          No products found 🥲{" "}
          <Link to="/create" className="createlink">
            Create a product
          </Link>
        </h2>
      )}
    </div>
  );
};
export default ShopCard;
