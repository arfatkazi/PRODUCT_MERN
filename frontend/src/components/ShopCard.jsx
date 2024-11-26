import { useProductStore } from "../store/Product";
import { useEffect } from "react";
import { IoIosRocket } from "react-icons/io";
import { Link } from "react-router-dom";

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
            <div key={product._id} className="productcard">
              <img
                src={product.image}
                alt={product.name}
                className="productImage"
              />
              <h2 className="productName">{product.name}</h2>
              <h3 className="productPrice">${product.price}</h3>
            </div>
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
