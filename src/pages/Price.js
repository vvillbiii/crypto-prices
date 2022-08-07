import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Price = (props) => {
  const params = useParams();
  //   console.log(params.symbol);

  // Our api key from coinapi.io
  const apiKey = "40A1458F-3F7A-4D01-9A73-9FDB7966791B";
  // Grabbing the Currency symbol from the URL Param
  const symbol = params.symbol;
  // Using the other two variables to create our URL
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState("null");

  useEffect(() => {
    const getCoin = async () => {
      const res = await fetch(url);
      const data = await res.json();
      //   console.log(data);
      setCoin(data);
    };
    getCoin();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>${coin.rate}</h2>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  //state to hold the coin data
  return coin ? loaded() : loading();
};

export default Price;
