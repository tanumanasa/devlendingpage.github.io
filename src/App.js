import React from "react";
import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import SubFooter from "./Components/Footer/SubFooter";
import CustomerStats from "./Components/CustomerStats/CustomerStats";
import Testimonials from "./Components/Testimonials/Testimonials";
import Languages from "./Components/Languages/Languages";
import LanguageProduct from "./Components/LanguageProduct/LanguageProduct";

function App() {
  return (
    <div className="">
      <Hero/>
      <CustomerStats/>
      <Languages/>
      <LanguageProduct/>  
      <Testimonials/>
      <SubFooter/>
      <Footer/>
    </div>
  );
}

export default App;
