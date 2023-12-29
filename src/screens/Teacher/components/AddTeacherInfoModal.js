import React, { useEffect } from "react";
import FormModal from "../../../components/Modal/FormModal";
import {  Form, } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DataGetAction } from "../../../redux/actions/CommonHttp";
import EditTeacherInfoForm from "./TeacherInfoForm";
const AddTeacherInfoModal = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm(); 
  const teacherProps = useSelector((state) => state.crudR);
  const { Add_TeacherInfo_Modal, buttonSpin, selectBranchList } =
    teacherProps;

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
  useEffect(fetBranches, [Add_TeacherInfo_Modal]);
  return (
    <FormModal
      ModalName="Add_TeacherInfo_Modal"
      visible={Add_TeacherInfo_Modal}
      modalTitle="Teacher Information"
      Spinner={buttonSpin}
      method="POST"
      apiName="addTeacher"
      requestType="AddSingleRecord"
      recordName="teacherInfo"
      cancelButtonName="Cancel" 
      submitButtonName="Submit"
      form={form} 
      width="600px"
    >
     <EditTeacherInfoForm selectBranchList={selectBranchList}/>
    </FormModal>
  );
};

export default AddTeacherInfoModal;
