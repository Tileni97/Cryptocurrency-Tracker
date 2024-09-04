import React, { useContext, useEffect, useState } from "react";
import Style from "./Home.module.css";
import { CoinContext } from "../../context/CoinContext";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className={Style.home}>
      <div className={Style.hero}>
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form>
          <input type="text" placeholder="  Search crypto.." />
          <button type="submit"> Search</button>
        </form>
      </div>
      <div className={Style.cryptoTable}>
        <div className={Style.tableLayout}>
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className={Style.marketCap}>Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div className={Style.tableLayout} key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="coin" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>
              {" "}
              {currency.symbol} {item.current_price}{" "}
            </p>
            <p>{Math.floor(item.price_change_percentage_24h * 100)}</p>
            <p>{item.market_cap} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
