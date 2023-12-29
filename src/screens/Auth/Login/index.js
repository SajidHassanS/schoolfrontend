import React from "react";
import AuthenticationCard from "../AuthenticationCard";
import LoginForm from "./components/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { useNavigate } from "react-router";
const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginProps = useSelector((state) => state.auth);
  const { loginSpin, loginFail, loginMessage, loginSuccess } = loginProps;
  if (loginSuccess) {
    navigate("/");
    dispatch({ type: "Auth_Reset" });
  }
  if (loginFail) {
    message.error(loginMessage);
    dispatch({ type: "Auth_Reset" });
  }
  return (
    <AuthenticationCard title="Welcome Back!" content="Log in to your account">
      <LoginForm loginSpin={loginSpin} />
    </AuthenticationCard>
  );
};

export default Index;
