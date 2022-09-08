import React, { useState } from "react";
import "./Languages.css";
const text1 = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const text2 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const text3 =
  "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";

function Languages() {
  const [textContent, setTextContext] = useState("");
  return (
    <section className="languages">
      <div className="content">
        <h2 class="">COMPANY FACTS</h2>
        <h3 class="">We are proud of our works</h3>
        <ul className="language-list">
          <li
            className="list-item"
            onClick={() => {
              setTextContext(text1);
            }}
          >
            Assamese
          </li>
          <li
            className="list-item"
            onClick={() => {
              setTextContext(text2);
            }}
          >
            Bengali
          </li>
          <li
            className="list-item"
            onClick={() => {
              setTextContext(text3);
            }}
          >
            Bodo
          </li>
          <li
            className="list-item"
            onClick={() => {
              setTextContext(text1);
            }}
          >
            Dogri
          </li>
          <li
            className="list-item"
            onClick={() => {
              setTextContext(text2);
            }}
          >
            Gujarati
          </li>
          <li
            className="list-item"
            onClick={() => {
              setTextContext(text3);
            }}
          >
            Hindi
          </li>
          <li
            className="list-item"
            onClick={() => {
              setTextContext(text1);
            }}
          >
            Kannada
          </li>
          <li
            className="list-item"
            onClick={() => {
              setTextContext(text2);
            }}
          >
            Kashmiri
          </li>
          <li
            className="list-item"
            onClick={() => {
              setTextContext(text3);
            }}
          >
            Konkani
          </li>
          <li
            className="list-item"
            onClick={() => {
              setTextContext(text1);
            }}
          >
            Maithili
          </li>
          <li
            className="list-item"
            onClick={() => {
              setTextContext(text2);
            }}
          >
            Malayalam
          </li>
          <li
            className="list-item"
            onClick={() => {
              setTextContext(text3);
            }}
          >
            Manipuri
          </li>
        </ul>
        <p className="accordion-content">{textContent}</p>
      </div>
    </section>
  );
}

export default Languages;
