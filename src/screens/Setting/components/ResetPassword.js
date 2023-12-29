import { Form, Input, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../../components/Modal/FormModal";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const settingProps = useSelector((state) => state.crudR);
  const { Reset_Setting_Password_Modal, initialValues, buttonSpin } =
    settingProps;

  return (
    <FormModal
      ModalName="Reset_Setting_Password_Modal"
      visible={Reset_Setting_Password_Modal}
      modalTitle="Reset Password"
      Spinner={buttonSpin}
      method="PUT"
      apiName="changePassword"
      requestType="UpdateProfilePassword"
      recordName="settingsData"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="600px"
      initialValues={initialValues && initialValues}
    >
      <p className="font-sans-regular py-1" style={{color:"#545454",fontSize:"18px"}}>Enter a new password for your account</p>
       <Form.Item
                className="mt-1"
                name="oldPassword"
                label="Current Password"
                rules={[
                  {
                    required: true,
                    message: "Current password is required",
                  },
                ]}
              >
                <Input.Password  placeholder="Enter current Password"/>
              </Form.Item>
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
        <Input.Password placeholder="Enter your password" />
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
        <Input.Password placeholder="Enter your confirm password" />
      </Form.Item>
    </FormModal>
  );
};

export default ResetPassword;
