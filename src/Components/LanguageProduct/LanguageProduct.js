import { Col, Row } from "antd";
import React, { useState } from "react";
import "./LanguageProduct.css";

const AITranslation = () => {
  return (
    <div className="tabcontent">
      <h3>AI-Powered Translation Management Hub</h3>
      <p>Prabandhak</p>
      <p>
        Cloud-based, AI-powered machine translation management platform that
        ensures swift, easy, and accurate translation and localization in Indian
        languages.
      </p>
    </div>
  );
};

const IndianLangVoiceSuite = () => {
  return (
    <div className="tabcontent">
      <h3> Voice Suite for Indian Languages</h3>
      <p>
        Remove the literacy barrier through voice solutions that understand and
        process speech to text and vice versa. Expand your market base, build
        more trust and communicate effectively with customers in multiple Indian
        languages.
      </p>
    </div>
  );
};

const ReverieNeuralMachTrans = () => {
  return (
    <div id="" className="tabcontent">
      <h3>Reverie Neural Machine Translation (NMT)</h3>
      <p>
        Robust machine translation models that contextually translate English
        content to multiple Indian languages with high accuracy and speed.
      </p>
    </div>
  );
};

const WebPublishManage = () => {
  return (
    <div className="tabcontent">
      <h3> Website Publishing and Management Platform</h3>
      <p> Anuvadak</p>
      <p>
        A platform that automates and accelerates the process of creating,
        launching, and optimizing your existing and/or new websites in any
        language. Go to market faster with SEO-friendly local-language content
        and minimal IT interference.
      </p>
    </div>
  );
};

const MultilingualIndicKeyboard = () => {
  return (
    <div className="tabcontent">
      <h3> Multilingual Indic Keyboard</h3>
      <p>Swalekh</p>
      <p>
        Multilingual keypads for web and set-top boxes that help Indian users
        type and interact in the language of their choice.
      </p>
    </div>
  );
};

function LanguageProduct() {
  const [tabContent, setTabContent] = useState(<AITranslation />);
  const [isActive, setActive ] = useState("")
  return (
    <section className="language-product">
      <h2 className="Indian-language">
        Our
        <br /> Indian-language product suite
      </h2>

      <div className="content">
        <Row>
          <Col span={6}>
            <div className="tab">
              <button
                className={isActive==="AITranslation"?"active-btn":"tablinks"}
                onClick={(e) => {
                  e.preventDefault();
                  setTabContent(<AITranslation />);
                  setActive("AITranslation")
                }}
              >
                AI-Powered Translation Management Hub
              </button>
              <button
                className={isActive==="IndianLangVoiceSuite"?"active-btn":"tablinks"}
                onClick={(e) => {
                  e.preventDefault();
                  setTabContent(<IndianLangVoiceSuite />);
                  setActive("IndianLangVoiceSuite")

                }}
              >
                Voice Suite for Indian Languages
              </button>
              <button
                className={isActive==="ReverieNeuralMachTrans"?"active-btn":"tablinks"}
                onClick={(e) => {
                  e.preventDefault();
                  setTabContent(<ReverieNeuralMachTrans />);
                  setActive("ReverieNeuralMachTrans")
                }}
              >
                Reverie Neural Machine Translation
              </button>
              <button
                className={isActive==="WebPublishManage"?"active-btn":"tablinks"}
                onClick={(e) => {
                  e.preventDefault();
                  setTabContent(<WebPublishManage />);
                  setActive("WebPublishManage")
                }}
              >
                Website Publishing and Management Platform
              </button>
              <button
                className={isActive==="MultilingualIndicKeyboard"?"active-btn":"tablinks"}
                onClick={(e) => {
                  e.preventDefault();
                  setTabContent(<MultilingualIndicKeyboard />);
                  setActive("MultilingualIndicKeyboard")
                }}
              >
                Multilingual Indic Keyboard
              </button>
            </div>
          </Col>
          <Col span={18}>
            <div>{tabContent}</div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default LanguageProduct;
