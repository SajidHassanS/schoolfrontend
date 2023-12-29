import React, { useEffect } from "react";
import { Avatar, Layout, Menu } from "antd";
import MenuItems from "./MenuItems";
import { useLocation, useNavigate } from "react-router-dom";
import variablesColors from "../../../styles/variables";
import DummyUser from "../../../assets/images/dummy.png";
const { Sider } = Layout;
const Sidebar = ({ collapsed,authUser }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const selectedKeys = pathname.substr(1);
  let keyArray = selectedKeys.split("/");
  let defaultOpenKeys = [keyArray[0]];
  if (selectedKeys.split("/").length === 3) {
    defaultOpenKeys = [keyArray[0], keyArray[1]];
  }

  const { SidebarBg, SidebarContent } = variablesColors;
  useEffect(() => {
    if (pathname === "/") {
      navigate("/dashboard");
    }
  }, [pathname, navigate]);
  return (
    <Sider
      style={{
        backgroundColor: SidebarBg ? SidebarBg : "#ffffff",
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "65px", background: "#4844EF" }}
      >
        <p className="font-20 font-sans-bold text-color-a6e1fb">SMS</p>
        {!collapsed && (
          <p className="font-14 font-sans-bold text-color-a6e1fb">
            School Management System
          </p>
        )}
      </div>
      <div>
        <div className="d-flex flex-column align-items-center justify-content-center gap-3 my-3">
          <Avatar size={collapsed ? 60 : 130} src={DummyUser} />
          <h3
            className={`${collapsed ? "font-14" : "font-24"} text-color-ffffff text-capitalize`}
          >
           {authUser.fullName}
          </h3>
        </div>

        <Menu
          style={{
            backgroundColor: SidebarBg ? SidebarBg : "#ffffff",
            color: SidebarContent ? SidebarContent : "#000000",
            border: "none",
          }}
          onScroll
          className="font-16 font-sans-regular"
          onClick={(e) => navigate(e.key)}
          defaultOpenKeys={defaultOpenKeys}
          selectedKeys={["/" + selectedKeys]}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={MenuItems}
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
