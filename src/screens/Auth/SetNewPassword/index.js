import { message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthenticationCard from "../AuthenticationCard";
import SetNewPasswordForm from "./components/SetNewPasswordForm";
const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const forgotProps = useSelector((state) => state.auth);
  const { setNewSpin, setNewSuccess, setNewMessage, setNewError } = forgotProps;
  if (setNewSuccess) {
    message.success(setNewMessage);
    navigate('/login');
    dispatch({ type: "Auth_Reset" });
  }
  if (setNewError) {
    message.success(setNewMessage);
    dispatch({ type: "Auth_Reset" });
  }
  return (
    <AuthenticationCard title="Set New Password" content="Please enter a new password">
      <SetNewPasswordForm setNewSpin={setNewSpin} />
    </AuthenticationCard>
  );
};

export default Index;
