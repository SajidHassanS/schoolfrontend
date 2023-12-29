import { Layout } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/TopHeader";
const { Content } = Layout;
const App = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  
  const { logoutSuc ,authUser } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch({ type: "LogoutSuccess_FAILURE" });
    localStorage.clear();
  };

  if (logoutSuc) {
    navigate("/login");
    dispatch({ type: "Auth_Reset" });
  }
  

  return (
    <Layout>
      <Sidebar collapsed={collapsed} authUser={authUser} />
      <Layout className="site-layout">
        <TopHeader
          setCollapsed={setCollapsed}
          collapsed={collapsed}
          authUser={authUser}
          logout={logout}
        />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
