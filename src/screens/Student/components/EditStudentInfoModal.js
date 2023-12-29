import React, { useEffect } from "react";
import FormModal from "../../../components/Modal/FormModal";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { DataGetAction } from "../../../redux/actions/CommonHttp";
import StudentInfoForm from "./StudentInfoForm";

const EditStudentInfoModal = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const studentProps = useSelector((state) => state.crudR);
  const {
    Edit_StudentInfo_Modal,
    buttonSpin,
    initialValues,
    selectBranchList,
  } = studentProps;

  const fetBranches = () => {
    if (Edit_StudentInfo_Modal) {
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
    }
  };
  useEffect(fetBranches, [Edit_StudentInfo_Modal]);
  return (
    <FormModal
      ModalName="Edit_StudentInfo_Modal"
      visible={Edit_StudentInfo_Modal}
      modalTitle="Student Information"
      Spinner={buttonSpin}
      method="PUT"
      apiName="updateStudent"
      requestType="EditSingleRecord"
      recordName="teacherInfo"
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
        formtype="edit"
      />
    </FormModal>
  );
};

export default EditStudentInfoModal;
