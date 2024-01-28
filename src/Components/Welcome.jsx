import React, { useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
  const [wallet, setWallet] = useState();
  useEffect(() => {
    if (window.ethereum != null) {
      window.ethereum.on("accountsChanged", (data) => console.log(data));
    }
  });
  const connectWallet = async () => {
    try {
      if (window.ethereum != null) {
        let wallet = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWallet(wallet[0]);
        console.log(wallet);
      } else {
        alert("metamask not found");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex w-full justify-content ml-[14rem] items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex min-w-full  items-start flex-col md:mr-10">
          <h1 className="justify-content-left text-3xl sm:text-5xl  text-white text-gradient py-1 justify-content-left">
            Pridict Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Navigate crypto's twists and turns with our predictive prowess.
            Welcome to Kript.
          </p>

          {window.ethereum?.isConnected() ? (
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              {wallet}
            </button>
          ) : (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Welcome;
