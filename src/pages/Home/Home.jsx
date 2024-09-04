import React from "react";
import Style from "./Home.module.css";

const Home = () => {
  return (
    <div className={Style.home}>
      <div className={Style.hero}>
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the world"s larges cryptocurrency marketplace. Sign up to
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
      </div>
    </div>
  );
};

export default Home;
