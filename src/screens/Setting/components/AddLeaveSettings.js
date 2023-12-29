import { Form, Input, message } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import FormModal from "../../../components/Modal/FormModal";
import LeavesSettingForm from "./LeavesSettingForm";

const AddLeaveSettings = () => {
  const [form] = Form.useForm();
  const addLeavesetProps = useSelector((state) => state.crudR);
  const { Add_Leave_Setting_Modal, initialValues, buttonSpin } = addLeavesetProps;
  return (
    <FormModal
      ModalName="Add_Leave_Setting_Modal"
      visible={Add_Leave_Setting_Modal}
      modalTitle="Add Leave Settings"
      Spinner={buttonSpin}
      method="POST"
      apiName="addLeaveSetting"
      requestType="AddSingleRecord"
      recordName="leaves"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="600px"
      initialValues={initialValues}
    >
      <LeavesSettingForm />
    </FormModal>
  );
};

export default AddLeaveSettings;
