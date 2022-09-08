import React, { useState } from "react";
import "./Navbar.css";
import { Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";

function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 200){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <header>
      <nav style={colorChange?{background:"#372a70", position:"fixed", top:"0", left:"0"}:{}}>
        <img src="./images/logo.png" height="90" alt="" />
        <ul>
          <li className="nav-items">
            <a className="nav-links" href="#home">
              Home
            </a>
          </li>
          <li className="nav-items">
            <a className="nav-links" href="#aboutUs">
              About Us
            </a>
          </li>
          <li className="nav-items">
            <a className="nav-links" href="#blogs">
              Blogs
            </a>
          </li>
          <li className="nav-items">
            <a className="nav-links" href="#research">
              Research
            </a>
          </li>
          <li className="nav-items">
            <a className="nav-links" href="#contactUs">
              Contact Us
            </a>
          </li>
          <li className="nav-items login-btn">
            <Button size="large" icon={<LoginOutlined />}>Login</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
