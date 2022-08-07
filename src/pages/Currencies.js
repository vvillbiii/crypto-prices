import React from "react";
import { Link, Outlet } from "react-router-dom";

const Currencies = (props) => {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  return (
    <div className="currencies">
      {currencies.map((coin) => {
        const { name, symbol } = coin;

        // console.log(coin);
        return (
          <Link to={`/price/${symbol}`} key={name}>
            <h2>{name}</h2>
          </Link>
        );
      })}
      <Outlet />
    </div>
  );
};

export default Currencies;
