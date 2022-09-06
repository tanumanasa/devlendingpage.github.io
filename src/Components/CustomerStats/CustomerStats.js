import React from "react";
import "./CustomerStats.css";
import {
  GlobalOutlined,
  SmileOutlined,
  ShakeOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";

const statsData = [
  {
    labelName: "Languages",
    value: "22",
    icon: <GlobalOutlined />,
    iconColor: "#747ed1",
    iconBg: "#e9eaf8"
  },
  {
    labelName: "Happy Customers",
    value: "3472",
    icon: <SmileOutlined />,
    iconColor: "#e2626b",
    iconBg: "#fae6e7"
  },
  {
    labelName: "Devices reached",
    value: "4537",
    icon: <ShakeOutlined />,
    iconColor: "#fab758",
    iconBg: "#fef3e4"
  },
  {
    labelName: "App downloads",
    value: "2184",
    icon: <CloudDownloadOutlined />,
    iconColor: "#c02179",
    iconBg: "#e4f1f6"
  },
];

function CustomerStats() {
  return (
    <section className="customer-stats">
      <div className="card-collection">
        {statsData.map((item) => (
          <div className="card" span={6}>
            <div className="icon-div" style={{background:`${item.iconBg}`}}>
              <div style={{color:`${item.iconColor}`, fontSize:"25px"}} className="icon">{item.icon}</div>
            </div>
            <div style={{color:"#343f52"}}>
              <h3 style={{margin:"0px"}} className="counter">{item.value}</h3>
              <p style={{margin:"0px"}} className="label">{item.labelName} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerStats;
