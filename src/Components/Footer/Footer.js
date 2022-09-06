import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>
        <a style={{display:"flex", alignItems:"center"}} href="./index.html"  className="footer_content">
          <img
            src="./images/logo.png"
            alt="Vichayan Logo"
            width="40%"
          />
        <span className="footer_content">© 2022</span>{" "}
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="" className="footer_content">
          About{" "}
        </a>
        &nbsp;
        <a href="" className="footer_content">
          Accessibility{" "}
        </a>
        &nbsp;
        <a href="" className="footer_content">
          User Agreement{" "}
        </a>
        &nbsp;
        <a href="" className="footer_content">
          Privacy Policy{" "}
        </a>
        &nbsp;
        <a href="" className="footer_content">
          Cookie Policy{" "}
        </a>
        &nbsp;
        <a href="" className="footer_content">
          Copyright Policy{" "}
        </a>
        &nbsp;
        <a href="" className="footer_content">
          Brand Policy{" "}
        </a>
        &nbsp;
        <a href="" className="footer_content">
          Guest Controls{" "}
        </a>
        &nbsp;
        <a href="" className="footer_content">
          Community Guidelines{" "}
        </a>
        &nbsp;
      </p>
    </footer>
  );
}

export default Footer;
