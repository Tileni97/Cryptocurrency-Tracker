import React, { useContext, useEffect, useState } from "react";
import Style from "./Coin.module.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const [error, setError] = useState(null); // New error state
  const { currency } = useContext(CoinContext);

  // Access the API key from environment variables
  const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY;

  const fetchData = async (endpoint, setter) => {
    const options = {
      method: "GET",
      headers: { accept: "application/json", "x-cg-demo-api-key": API_KEY },
    };

    try {
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        throw new Error("Network response was not ok"); // Handle non-200 responses
      }
      const data = await response.json();
      setter(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load data. Please try again later."); // Set error message
    }
  };

  useEffect(() => {
    fetchData(`https://api.coingecko.com/api/v3/coins/${coinId}`, setCoinData);
    fetchData(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      setHistoricalData
    );
  }, [currency, coinId]);

  if (error) {
    return <div className={Style.error}>{error}</div>; // Display error message
  }

  if (!coinData || !historicalData) {
    return (
      <div className={Style.spinner}>
        <div className={Style.spin}></div>
      </div>
    );
  }

  return (
    <div className={Style.coin}>
      <div className={Style.coinName}>
        <img src={coinData.image.large} alt={`Logo of ${coinData.name}`} />
        <p>
          <b>
            {coinData.name} ({coinData.symbol.toUpperCase()})
          </b>
        </p>
      </div>
      <div className={Style.coinChart}>
        <LineChart historicalData={historicalData} />
      </div>
      <div className={Style.coinInfo}>
        <ul>
          <li>Crypto Market Rank</li>
          <li>{coinData.market_cap_rank}</li>
        </ul>
        <ul>
          <li>Current Price</li>
          <li>
            {currency.symbol}{" "}
            {coinData.market_data.current_price[currency.name].toLocaleString()}
          </li>
        </ul>
        <ul>
          <li>Market Cap</li>
          <li>
            {currency.symbol}{" "}
            {coinData.market_data.market_cap[currency.name].toLocaleString()}
          </li>
        </ul>
        <ul>
          <li>24 Hour High</li>
          <li>
            {currency.symbol}{" "}
            {coinData.market_data.high_24h[currency.name].toLocaleString()}
          </li>
        </ul>
        <ul>
          <li>24 Hour Low</li>
          <li>
            {currency.symbol}{" "}
            {coinData.market_data.low_24h[currency.name].toLocaleString()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Coin;
