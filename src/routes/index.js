import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import AuthRoutes from "./AuthRoutes";
const Index = () => {
  return (
    <Router>
      <AuthRoutes />
      <PrivateRoutes />
    </Router>
  );
};

export default Index;
