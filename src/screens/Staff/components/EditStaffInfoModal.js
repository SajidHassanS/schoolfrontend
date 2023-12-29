import React, { useEffect } from "react";
import FormModal from "../../../components/Modal/FormModal";
import {Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DataGetAction } from "../../../redux/actions/CommonHttp";
import StaffInfoForm from "./StaffInfoForm";

const EditStaffInfoModal = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const staffProps = useSelector((state) => state.crudR);
  const { Edit_StaffInfo_Modal, buttonSpin, initialValues, selectBranchList } =
    staffProps;

  const fetBranches = () => {
    if(Edit_StaffInfo_Modal){
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
    }
   
  };
  useEffect(fetBranches, [Edit_StaffInfo_Modal]);
  return (
    <FormModal
      ModalName="Edit_StaffInfo_Modal"
      visible={Edit_StaffInfo_Modal}
      modalTitle="Staff Information"
      Spinner={buttonSpin}
      method="PUT"
      apiName="updateStaff"
      requestType="EditUserRecord"
      recordName="staffInfo"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="600px"
      initialValues={initialValues}
    >
      <StaffInfoForm selectBranchList={selectBranchList} formtype="edit"/>
    </FormModal>
  );
};

export default EditStaffInfoModal