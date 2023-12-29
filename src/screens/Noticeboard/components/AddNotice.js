import React from "react";
import FormModal from "../../../components/Modal/FormModal";
import { Form } from "antd";
import { useSelector } from "react-redux";
import NoticeForm from "./NoticeForm";

const AddNotice = () => {
  const [form] = Form.useForm();
  const branchProps = useSelector((state) => state.crudR);
  const { Add_Notice_Modal, buttonSpin } = branchProps;
  return (
    <FormModal
      ModalName="Add_Notice_Modal"
      visible={Add_Notice_Modal}
      modalTitle="Add Notice"
      Spinner={buttonSpin}
      method="POST"
      apiName="addNotice"
      requestType="AddRecord"  
      recordName="noticeList"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form} 
      width="600px"
    >
      <NoticeForm />
    </FormModal>
  );
};

export default AddNotice;
