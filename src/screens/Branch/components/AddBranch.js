import React from "react";
import FormModal from "../../../components/Modal/FormModal";
import { Form } from "antd";
import BranchForm from "./BranchForm";
import { useSelector } from "react-redux";

const AddBranch = () => {
  const [form] = Form.useForm();
  const branchProps = useSelector((state) => state.crudR);
  const { Add_Branch_Modal, buttonSpin } = branchProps;
  return (
    <FormModal
      ModalName="Add_Branch_Modal"
      visible={Add_Branch_Modal}
      modalTitle="Add Branch"
      Spinner={buttonSpin}
      method="POST"
      apiName="addBranch"
      requestType="AddRecord"
      recordName="branchList"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="600px"
    >
      <BranchForm />
    </FormModal>
  );
};

export default AddBranch;
