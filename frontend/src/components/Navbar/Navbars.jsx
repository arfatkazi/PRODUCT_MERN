import { useState, useEffect } from "react";
import "./Navbar.css";
import { FaCartPlus, FaPlusSquare } from "react-icons/fa";
import { MdWbSunny, MdNightsStay } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbars = () => {
  const [colorMode, setColorMode] = useState(true);

  const changeMode = () => {
    setColorMode(!colorMode);
  };

  useEffect(() => {
    if (colorMode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  }, [colorMode]);

  return (
    <div className={`navContainer  `}>
      <div className="left">
        <Link to="/" className="link">
          Product store
        </Link>
        <Link to="/" className="icon cartplus" aria-label="View cart">
          <FaCartPlus />
        </Link>
      </div>
      <div className="right">
        <Link
          to="/create"
          className="icon plussquare"
          aria-label="Create product"
        >
          <FaPlusSquare />
        </Link>
        {colorMode ? (
          <MdWbSunny
            className="icon day"
            onClick={changeMode}
            aria-label="Switch to dark mode"
          />
        ) : (
          <MdNightsStay
            className="icon night"
            onClick={changeMode}
            aria-label="Switch to light mode"
          />
        )}
      </div>
    </div>
  );
};

export default Navbars;
