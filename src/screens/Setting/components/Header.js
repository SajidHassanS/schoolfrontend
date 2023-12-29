import React from 'react'
import {Typography} from "antd"; 
const { Title } = Typography;
const Header = () => {
  return (
    <div
    className="d-flex align-items-center"
    style={{
      width: "100%",
      height: "70px",
      backgroundColor: "#FFFFFF",
      border: "1px solid #E8E8E8",
      borderRadius: "4px",
    }}
  >
    <Title
      className="font-sans-bold  ml-3 px-3 pt-2"
      style={{ fontSize: "18px" }}
    >
      Setting
    </Title>
  </div>
  )
}

export default Header