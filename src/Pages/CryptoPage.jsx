import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import CustomForm from "../Components/CustomForm";
import axios from "axios";

const CryptoPage = () => {
  const [cryptos, setCryptos] = useState();

  useEffect(() => {
    fetchCryptos().then((res) => {
      setCryptos(res);
    });
  });

  const fetchCryptos = async () => {
    try {
      // let res = await fetch(
      //   "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=4",
      //   {
      //     headers: {
      //       "X-CMC_PRO_API_KEY": "f5e2bf8e-3e9f-4416-84ad-3fdebc9b9450",
      //       Accept: "application/json",
      //     },
      //   }
      // );
      let res = await axios.get(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=4&CMC_PRO_API_KEY=f5e2bf8e-3e9f-4416-84ad-3fdebc9b9450",
        {
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "same-origin",
          crossdomain: true,
        }
      );
      console.log(res);
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome text-white">
          <Navbar />
        </div>
        <div className="text-white">
          <CustomForm />
        </div>
      </div>
    </div>
  );
};

export default CryptoPage;
