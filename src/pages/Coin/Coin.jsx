import React, { useContext, useEffect, useState } from "react";
import Style from "./Coin.module.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency, API_KEY } = useContext(CoinContext);

  const API_KEY_COINGECKO = import.meta.env.VITE_COINGECKO_API_KEY;
  const API_KEY_EXCHANGE = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

  const fetchCoinData = async (coinId) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": API_KEY_COINGECKO, // Using the Coingecko API key from the environment variable
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error("Error fetching coin data:", err);
    }
  };

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${API_KEY_EXCHANGE}/latest/USD`
      ); // Using the Exchange Rate API key from the environment variable
      const data = await response.json();
      // Use the exchange rate data as needed
      console.log(data);
    } catch (err) {
      console.error("Error fetching exchange rate:", err);
    }
  };

  return (
    <div className={Style.coin}>
      <div className={Style.coinName}>
        <img src={coinData.image.large} alt={coinData.name} />
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
