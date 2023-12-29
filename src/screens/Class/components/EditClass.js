import { Form, message } from "antd";
import React from "react";
import {useSelector } from "react-redux";
import FormModal from "../../../components/Modal/FormModal";
import ClassForm from "./ClassForm";

const EditClass = () => {
  const [form] = Form.useForm();
  const classProps = useSelector((state) => state.crudR);
  const { Edit_Class_Modal, initialValues, buttonSpin } = classProps;
  console.log("=========recordEditInitial", initialValues);
  return (
    <FormModal
      ModalName="Edit_Class_Modal"
      visible={Edit_Class_Modal}
      modalTitle="Edit Class Information"
      Spinner={buttonSpin}
      method="PUT"
      apiName="updateClass"
      requestType="EditRecord"
      recordName="classList"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="600px"
      initialValues={initialValues}
    >
      <ClassForm />
    </FormModal>
  );
};

export default EditClass;
