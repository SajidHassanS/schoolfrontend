import React from "react";
import { Form } from "antd";
import ClassForm from "./ClassForm";
import { useSelector } from "react-redux";
import FormModal from "../../../components/Modal/FormModal"; 

const AddClass = () => {
  const [form] = Form.useForm();
  const branchProps = useSelector((state) => state.crudR);
  const { Add_Class_Modal, buttonSpin } = branchProps;
  return (
    <FormModal
      ModalName="Add_Class_Modal"
      visible={Add_Class_Modal}
      modalTitle="Add Class "
      Spinner={buttonSpin}
      method="POST" 
      apiName="addClass"
      requestType="AddRecord"
      recordName="classList"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="600px"
    >
      <ClassForm />
    </FormModal>
  );
};

export default AddClass;
