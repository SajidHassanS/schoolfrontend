import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layout";
const ProtectedRoutes = () => {
  const { authUser } = useSelector((state) => state.auth);
  return authUser !== null ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
