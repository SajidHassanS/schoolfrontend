import React, { useEffect } from "react";
import FormModal from "../../../components/Modal/FormModal";
import {Form } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { DataGetAction } from "../../../redux/actions/CommonHttp";
import StudentInfoForm from "./StudentInfoForm";
const AddStudentInfoModal = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const StdProps = useSelector((state) => state.crudR);
  const {
    Add_StudentInfo_Modal,
    buttonSpin,
    initialValues,
    selectBranchList,
    selectClassList,
    selectSectionList,
  } = StdProps;

  console.log(
    "=========selectBranchList",
    selectBranchList,
    selectClassList,
    selectSectionList
  );
  const fetchFormData = () => {
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
    dispatch(
      DataGetAction(
        "getClassName",
        "FetchSingleRecord",
        { query: "all" },
        "",
        "",
        "selectClassList"
      )
    );
    dispatch(
      DataGetAction(
        "getSectionName",
        "FetchSingleRecord",
        { query: "all" },
        "",
        "",
        "selectSectionList"
      )
    );
  };
  useEffect(fetchFormData, []);

  return (
    <FormModal
      ModalName="Add_StudentInfo_Modal"
      visible={Add_StudentInfo_Modal}
      modalTitle="Student Information"
      Spinner={buttonSpin}
      method="POST"
      apiName="addStudent"
      requestType="AddSingleRecord"
      recordName="studentInfo"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="600px"
      initialValues={initialValues}
    >
      <StudentInfoForm
        selectBranchList={selectBranchList}
        selectClassList={selectClassList}
        selectSectionList={selectSectionList}
      />
    </FormModal>
  );
};

export default AddStudentInfoModal;
