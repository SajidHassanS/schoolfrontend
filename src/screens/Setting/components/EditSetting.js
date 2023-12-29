import { Form, Input, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../../components/Modal/FormModal";
import SettingForm from "./SettingForm";

const EditSetting = () => {
  const [form] = Form.useForm();
  const settingProps = useSelector((state) => state.crudR);
  const { Edit_Setting_Modal, initialValues, buttonSpin } = settingProps;

  return (
    <FormModal
      ModalName="Edit_Setting_Modal"
      visible={Edit_Setting_Modal}
      modalTitle="Edit Setting"
      Spinner={buttonSpin}
      method="PUT"
      apiName="updateProfile"
      requestType="EditUserRecord"
      recordName="settingsData"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="600px"
      initialValues={initialValues && initialValues}
    >
        <SettingForm/>
    </FormModal>
  );
};

export default EditSetting;
