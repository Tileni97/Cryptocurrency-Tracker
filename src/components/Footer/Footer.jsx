import React from "react";
import Style from "./Footer.module.css"; // Import the CSS module for styling
import { Link } from "react-router-dom"; // Import Link for client-side routing

const Footer = () => {
  return (
    <footer className={Style.Footer}>
      <div className={Style.container}>
        <div className={Style.about}>
          <h4>About Us</h4>
          <p>
            CryptoTracker is your go-to place for real-time cryptocurrency
            prices, market data, and insights. Stay informed and make educated
            decisions!
          </p>
        </div>
        <div className={Style.links}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>{" "}
            </li>
            <li>
              <Link to="/">Contact</Link>{" "}
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>{" "}
            </li>
          </ul>
        </div>
        <div className={Style.social}>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={Style.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} CryptoTracker. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
