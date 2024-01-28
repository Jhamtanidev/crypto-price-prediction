import React, { useState } from "react";
import axios, { formToJSON } from "axios";
import Timestamp from "react-timestamp";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const CustomForm = () => {
  const [formData, setFormData] = useState({
    Timestamp: Date.now(),
    Open: 0.0,
    High: 0.0,
    Low: 0.0,
  });
  const [prediction, setPrediction] = useState(null);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: parseFloat(value) });
  };
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   const response = await fetch("http://127.0.0.1:8000/predict", {
      //     method: "POST",
      //     body: JSON.stringify(formData),
      //   });
      const response = await axios
        .post("http://127.0.0.1:8000/predict", { ...formData }, { headers: {} })
        .then((val) => {
          console.log(val.data);
          setPrediction(val.data);
        });
      console.log("prediction is " + prediction["prediction"]);
    } catch (error) {
      console.error("Error making prediction:", error);
    }
  };
  return (
    <>
      <div className="flex w-full  items-center p-8 gradient-bg-services ">
        <form className="w-1/4 mx-auto " onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="timestamp"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              TimeStamp
            </label>
            <input
              disabled={true}
              value={Date.now()}
              type="Float"
              id="Timestamp"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            ></input>
          </div>
          <div className="mb-5">
            <label
              htmlFor="Open"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Prize at the time of Open
            </label>
            <input
              type="number"
              id="Open"
              value={formData.Open}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            ></input>
          </div>
          <div className="mb-5">
            <label
              for="High"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Max Prize of the coin
            </label>
            <input
              type="number"
              id="High"
              value={formData.High}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            ></input>
          </div>
          <div className="mb-5">
            <label
              for="Low"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Min Prize of the coin
            </label>
            <input
              type="number"
              id="Low"
              value={formData.Low}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            ></input>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Card to display prediction */}
      {prediction && (
        <div className="flex w-full text-white items-center p-8 gradient-bg-services">
          <Card>
            <CardBody>
              <p className="text-lg font-bold">Bitcoin Prediction value</p>
              <p className="text-xl">{prediction["prediction"]}</p>
            </CardBody>
          </Card>
        </div>
      )}
    </>
  );
};

export default CustomForm;
