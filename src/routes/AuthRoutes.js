import React from "react";
import Login from "../screens/Auth/Login";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import SetNewPassword from "../screens/Auth/SetNewPassword";
import { Route, Routes } from "react-router-dom";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/setNewPassword/:query" element={<SetNewPassword />} />
    </Routes>
  );
};

export default AuthRoutes;
