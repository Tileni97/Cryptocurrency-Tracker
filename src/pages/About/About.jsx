import React from "react";
import Style from "./About.module.css"; // Import the CSS module for styling

const About = () => {
  return (
    <div className={Style.About}>
      <h1>About CryptoTracker</h1>
      <p>
        Welcome to CryptoTracker, a dedicated cryptocurrency tracking platform
        designed specifically for Namibian cryptocurrency enthusiasts. In a
        world where digital currencies are rapidly gaining popularity, it's
        essential for investors and traders to have a reliable tool to monitor
        their assets, especially in local currencies like the Namibian Dollar
        (NAD).
      </p>
      <p>
        Our platform is built with the unique needs of Namibian users in mind,
        allowing you to track cryptocurrencies in your local currency without
        the hassle of using external converters. We understand that managing
        multiple conversions can be tedious and time-consuming, so we’ve
        streamlined the process, enabling you to focus on what really matters:
        making informed investment decisions.
      </p>
      <section className={Style.features}>
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Real-time Data:</strong> Get up-to-the-minute prices and
            market data for a wide range of cryptocurrencies.
          </li>
          <li>
            <strong>User-friendly Interface:</strong> Our intuitive design
            ensures that you can easily navigate through your favorite
            cryptocurrencies.
          </li>
          <li>
            <strong>Local Currency Support:</strong> View cryptocurrency prices
            directly in Namibian Dollars, eliminating the need for external
            currency converters.
          </li>
          <li>
            <strong>Comprehensive Market Analysis:</strong> Access detailed
            charts and insights to help you make data-driven investment choices.
          </li>
          <li>
            <strong>Community Focus:</strong> Connect with other Namibian
            cryptocurrency enthusiasts and share insights, tips, and strategies.
          </li>
        </ul>
      </section>
      <section className={Style.vision}>
        <h2>Our Vision</h2>
        <p>
          At CryptoTracker, we aim to empower Namibian cryptocurrency
          enthusiasts by providing them with the tools they need to navigate the
          exciting yet volatile world of digital currencies. Our goal is to
          foster a vibrant community where users can share knowledge,
          experiences, and strategies, ultimately leading to a more informed and
          successful investment landscape in Namibia.
        </p>
      </section>
      <section className={Style.callToAction}>
        <h2>Join Us!</h2>
        <p>
          Are you ready to take control of your cryptocurrency investments? Sign
          up today and start tracking your favorite cryptocurrencies in Namibian
          Dollars. Together, let's explore the future of finance!
        </p>
      </section>
    </div>
  );
};

export default About;
