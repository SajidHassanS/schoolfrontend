import { Form, Input, message } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import FormModal from "../../../components/Modal/FormModal";
import LeavesSettingForm from "./LeavesSettingForm";

const EditLeaveSettings = () => {
  const [form] = Form.useForm();
  const addLeavesetProps = useSelector((state) => state.crudR);
  const { Edit_Leave_Setting_Modal, initialValues, buttonSpin } = addLeavesetProps;

  return (
    <FormModal
      ModalName="Edit_Leave_Setting_Modal"
      visible={Edit_Leave_Setting_Modal}
      modalTitle="Edit Leave Setting"
      Spinner={buttonSpin}
      method="PUT"
      apiName="updateLeaveSetting"
      requestType="EditUserRecord"
      recordName="leaves"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="600px"
      initialValues={initialValues && initialValues}
    >
      <LeavesSettingForm />
    </FormModal>
  );
};
export default EditLeaveSettings;
