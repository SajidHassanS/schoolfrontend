import React, { useEffect } from "react";
import FormModal from "../../../components/Modal/FormModal";
import { Form, } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { DataGetAction } from "../../../redux/actions/CommonHttp";
import StaffInfoForm from "./StaffInfoForm";
const AddTeacherInfoModal = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const staffProps = useSelector((state) => state.crudR);
  const { Add_StaffInfo_Modal, buttonSpin, initialValues, selectBranchList } =
  staffProps;
 

  const fetBranches = () => {
    dispatch(
      DataGetAction(
        "getBranchName",
        "FetchSingleRecord",
        { query: "all" },
        "",
        "",
        "selectBranchList"
      )
    );
  };
  useEffect(fetBranches, [Add_StaffInfo_Modal]);

  return (
    <FormModal
      ModalName="Add_StaffInfo_Modal"
      visible={Add_StaffInfo_Modal}
      modalTitle="Staff Information"
      Spinner={buttonSpin}
      method="POST"
      apiName="addStaff"
      requestType="AddSingleRecord"
      recordName="staffInfo"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="600px"
    >
      <StaffInfoForm  selectBranchList={selectBranchList}/>
      
    </FormModal>
  );
};

export default AddTeacherInfoModal;
