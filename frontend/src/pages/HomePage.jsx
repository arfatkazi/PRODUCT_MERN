import { Link } from "react-router-dom";
import "./HomeProduct.css";
import { IoIosRocket } from "react-icons/io";
const HomePage = () => {
  return (
    <>
      <div className="homeContainer">
        <h1 className="currenttitle">
          Current Products <IoIosRocket className="rocket" />
        </h1>

        <h2>
          no products found 🥲{" "}
          <Link to={"/create"} className="createlink">
            create a product
          </Link>
        </h2>
      </div>
    </>
  );
};
export default HomePage;
