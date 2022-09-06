import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
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
      <Languages/>
      <LanguageProduct/>  
      <Testimonials/>
      <CustomerStats/>
      <SubFooter/>
      <Footer/>
    </div>
  );
}

export default App;
