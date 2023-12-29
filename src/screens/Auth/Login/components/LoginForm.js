import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DataRequestAction } from "../../../../redux/actions/CommonHttp";
const LoginForm = ({ loginSpin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    if (values.email) {
      values.email = values.email.toLowerCase();
    }
    dispatch(
      DataRequestAction("POST", "login", "Login", values, "LoginSpin", "", "")
    );
  };

  return (
    <Form
      name="LoginForm"
      className="auth-form-width"
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            message: "Please enter valid Email!",
          },
          {
            required: true,
            message: "Please enter your Email!",
          },
        ]}
      >
        <Input className="auth-input" placeholder="Enter your email" />
      </Form.Item>
      <Form.Item
        name="password"
        className="mb-3"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please enter your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          className="auth-input"
          placeholder="Enter your Passowrd"
        />
      </Form.Item>
      <Form.Item className="mb-3 d-flex justify-content-end">
        <u
          onClick={() => navigate("/forgotPassword")}
          style={{ cursor: "pointer" }}
          className="font-16 font-sans-bold text-color-38393b"
        >
          Forgot your password?
        </u>
      </Form.Item>
      <Button
        loading={loginSpin}
        disabled={loginSpin}
        className="auth-button"
        htmlType="submit"
      >
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
