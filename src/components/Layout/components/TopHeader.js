import React from "react";
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import variablesColors from "../../../styles/variables";
import UserInfo from "./UserInfo";
const { Header } = Layout;
const TopHeader = ({ setCollapsed, collapsed, logout ,authUser}) => {
  const { TopHeaderBg } = variablesColors;
  return (
    <Header
      style={{
        background: TopHeaderBg,
        boxShadow: "0px 1px 20px 1px #0000001A",
      }}
      className="d-flex align-items-center justify-content-between"
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger fs-4",
        onClick: () => setCollapsed(!collapsed),
      })}
      
      <div className="d-flex align-items-center">
        <UserInfo authUser={authUser} logout={logout}/>
      </div>
    </Header>
  );
};

export default TopHeader;
