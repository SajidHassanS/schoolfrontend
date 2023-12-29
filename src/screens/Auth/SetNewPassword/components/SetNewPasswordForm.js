import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { DataRequestAction } from "../../../../redux/actions/CommonHttp";
import { useParams } from "react-router-dom";
const SetNewPasswordForm = ({ setNewSpin }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const onFinished = (values) => {
    if (params && params.query) {
      values.forgetPasswordAuthToken = params.query;
      dispatch(
        DataRequestAction(
          "POST",
          "setNewPassword",
          "SetNew",
          values,
          "SetNewSpin",
          "",
          ""
        )
      );
    }
  };
  return (
    <Form
      className="auth-form-width"
      layout="vertical"
      onFinish={onFinished}
      name="SetNewPasswordForm"
    >
      <Form.Item
        className="mb-3"
        label="New Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          className="auth-input"
          placeholder="Enter your password"
        />
      </Form.Item>
      <Form.Item
        name="confirmPassowrd"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your Password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          className="auth-input"
          placeholder="Enter your confirm password"
        />
      </Form.Item>

      <Button
        loading={setNewSpin}
        disabled={setNewSpin}
        htmlType="submit"
        className="auth-button"
      >
        Update Password
      </Button>
    </Form>
  );
};

export default SetNewPasswordForm;
