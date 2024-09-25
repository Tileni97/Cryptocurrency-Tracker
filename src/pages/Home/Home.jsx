import React, { useContext, useEffect, useState } from "react";
import Style from "./Home.module.css"; // Import the CSS module for styling
import { CoinContext } from "../../context/CoinContext"; // Import the CoinContext for accessing coin data and currency
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext); // Destructure allCoin and currency from the CoinContext for use in the component
  const [displayCoin, setDisplayCoin] = useState([]); // Create a state variable displayCoin and a function setDisplayCoin to update the state variable
  const [input, setInput] = useState(""); // Create a state variable input and a function setInput to update the state variable

  const inputHandler = (e) => {
    // Function to handle input changes
    setInput(e.target.value); // Update the input state variable with the value of the input field
    if (e.target.value === "") {
      // If the input is cleared, show all coins again
      setDisplayCoin(allCoin); // Update the displayCoin state variable with the value of the allCoin state variable
    }
  };

  const searchHandler = async (e) => {
    // Function to handle the search form submission
    e.preventDefault(); // Prevent the default form submission behavior
    const coins = await allCoin.filter((item) => {
      // Filter coins based on the input value
      return item.name.toLowerCase().includes(input.toLowerCase()); // Return coins that match the search input
    });
    setDisplayCoin(coins); // Update displayCoin with the filtered coins
  };

  useEffect(() => {
    // Effect hook to update displayCoin when allCoin changes
    setDisplayCoin(allCoin); // Initialize displayCoin with allCoin when the component mounts
  }, [allCoin]); // Dependency array: only run this effect when allCoin changes

  return (
    <div className={Style.Home}>
      {/* Container for the Home component */}
      <div className={Style.hero}>
        {/* Hero section */}
        <h1>
          Namibia's <br /> Largest Crypto Marketplace
        </h1>
        {/* Hero title */}
        <p>
          Welcome to Namibia's leading cryptocurrency marketplace. Track your
          favorite cryptos in Namibian Dollars (NAD) and stay updated with the
          latest market trends.
        </p>
        {/* Hero description */}
        <form onSubmit={searchHandler}>
          {/* Search form with submission handler */}
          <input
            onChange={inputHandler}
            list="coinlist"
            value={input}
            type="text"
            placeholder="Search cryptocurrency.."
            required
          />
          {/* Search input with change handler */}
          <datalist id="coinlist">
            {/* Datalist for coin suggestions */}
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
            {/* Map through allCoin and display options */}
          </datalist>
          <button type="submit">Search</button> {/* Search button */}
        </form>
      </div>
      <div className={Style.cryptoTable}>
        {/* Container for the crypto table */}
        <div className={Style.tableLayout}>
          {/* Table layout for headings */}
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          {/* Centered heading for 24H Change */}
          <p className={Style.marketCap}>Market Cap</p>
          {/* Market cap heading */}
        </div>
        {displayCoin.slice(0, 10).map(
          (
            item,
            index // Map through displayCoin and show the top 10 coins
          ) => (
            <Link
              to={`/coin/${item.id}`}
              className={Style.tableLayout}
              key={index}
            >
              {/* Link to each coin's detail page */}
              <p>{item.market_cap_rank}</p> {/* Coin market rank */}
              <div>
                <img src={item.image} alt="" /> {/* Coin image */}
                <p>{item.name + " - " + item.symbol}</p>{" "}
                {/* Coin name and symbol */}
              </div>
              <p>
                {currency.symbol} {item.current_price.toLocaleString()}
              </p>{" "}
              {/* Current price with currency symbol */}
              <p
                className={
                  item.price_change_percentage_24h > 0 ? Style.green : Style.red
                }
              >
                {" "}
                {/* Price change, color-coded */}
                {Math.floor(item.price_change_percentage_24h * 100) / 100}
              </p>
              <p className={Style.marketCap}>
                {currency.symbol} {item.market_cap.toLocaleString()}
              </p>{" "}
              {/* Market cap with currency symbol */}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
