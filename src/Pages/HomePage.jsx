import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Welcome from "../Components/Welcome";
import CustomForm from "../Components/CustomForm";
import Services from "../Components/Services";

const HomePage = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        {/* <CustomForm /> */}
        <Services />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
