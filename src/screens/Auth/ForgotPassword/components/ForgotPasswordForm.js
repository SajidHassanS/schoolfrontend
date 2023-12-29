import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { DataRequestAction } from "../../../../redux/actions/CommonHttp";
const ForgotPasswordForm = ({ ForgotSpin }) => {
  const dispatch = useDispatch();
  const onFinished = (values) => {
    if (values.email) {
      values.email = values.email.toLowerCase();
    }
    dispatch(
      DataRequestAction(
        "POST",
        "forgetPassword",
        "ForgotPassword",
        values,
        "ForgotSpin",
        "",
        ""
      )
    );
  };
  return (
    <Form
      onFinish={onFinished}
      name="ForgetForm"
      className="auth-form-width"
      layout="vertical"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            message: "Please enter valid email!",
          },
          {
            required: true,
            message: "Please enter your email!",
          },
        ]}
      >
        <Input className="auth-input" placeholder="Enter your email" />
      </Form.Item>

      <Button
        htmlType="submit"
        loading={ForgotSpin}
        disabled={ForgotSpin}
        className="auth-button"
      >
        Send Email
      </Button>
    </Form>
  );
};

export default ForgotPasswordForm;
