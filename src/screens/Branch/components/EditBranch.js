import { Form } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../../../components/Modal/FormModal";
import BranchForm from "./BranchForm";

const EditBranch = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const branchProps = useSelector((state) => state.crudR);
  const { Edit_Branch_Modal, initialValues, buttonSpin } = branchProps;
 
  return (
    <FormModal
      ModalName="Edit_Branch_Modal"
      visible={Edit_Branch_Modal}
      modalTitle="Edit Branch"
      Spinner={buttonSpin}
      method="PUT"
      apiName="updateBranch"
      requestType="EditRecord"
      recordName="branchList"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="600px"
      initialValues={{...initialValues}}
    >
      <BranchForm formType="edit" />
    </FormModal>
  );
};

export default EditBranch;
