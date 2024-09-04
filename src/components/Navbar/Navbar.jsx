import React, { useContext } from "react";
import styles from "./Navbar.module.css"; // Import as a module
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";

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
      case "nad":
        setCurrency({
          name: "nad",
          symbol: "N$",
        });
        break;
      case "zar":
        setCurrency({
          name: "zar",
          symbol: "R",
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
      <img src={logo} alt="logo" className={styles.logo} /> {/* Logo */}
      <ul>
        {/* Navigation links */}
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className={styles.navRight}>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="nad">NAD</option>
          <option value="zar">ZAR</option>
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
