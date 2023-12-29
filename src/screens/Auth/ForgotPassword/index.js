import React from "react";
import AuthenticationCard from "../AuthenticationCard";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const forgotProps = useSelector((state) => state.auth);
  const { ForgotSpin, ForgotSuccess, ForgotMessage, ForgotError } = forgotProps;
  if (ForgotSuccess) {
    message.success(ForgotMessage);
    navigate('/login');
    dispatch({ type: "Auth_Reset" });
  }
  if (ForgotError) {
    message.success(ForgotMessage);
    dispatch({ type: "Auth_Reset" });
  }
  return (
    <AuthenticationCard
      title="Forgot Password"
      content="Enter your registered email address for recovery email"
    >
      <ForgotPasswordForm ForgotSpin={ForgotSpin} />
    </AuthenticationCard>
  );
};

export default Index;
