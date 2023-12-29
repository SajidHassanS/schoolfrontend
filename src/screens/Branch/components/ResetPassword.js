import { Form, Input } from "antd";
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import FormModal from "../../../components/Modal/FormModal";

const ResetPassword = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const branchProps = useSelector((state) => state.crudR);
    const { Reset_Password_Modal,initialValues, buttonSpin,} = branchProps;
    return (
        <FormModal
        ModalName="Reset_Password_Modal"
        visible={Reset_Password_Modal}
        modalTitle="Reset Password "
        Spinner={buttonSpin}
        method="PUT"
        apiName="resetPassword"
        requestType="EditRecord"
        recordName="branchList"
        cancelButtonName="Cancel"
        submitButtonName="Submit"
        form={form}
        width="600px"
        initialValues= {initialValues }
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
