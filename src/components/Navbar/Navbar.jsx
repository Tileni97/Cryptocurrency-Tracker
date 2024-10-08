import React, { useContext } from "react";
import styles from "./Navbar.module.css"; // Import as a module
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      case "zar":
        setCurrency({
          name: "zar",
          symbol: "N$",
        });
        break;
      case "eur":
        setCurrency({
          name: "eur",
          symbol: "€",
        });
        break;
      default:
        setCurrency({
          name: "usd",
          symbol: "$",
        });
    }
  };

  return (
    <div className={styles.navbar}>
      {/* Navbar container */}
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      <ul>
        {/* Navigation links */}
        <Link to={"/"}>
          {" "}
          <li>Home</li>{" "}
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className={styles.navRight}>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="zar">NAD</option>
          <option value="eur">EUR</option>
        </select>
        <button>
          Sign up <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
