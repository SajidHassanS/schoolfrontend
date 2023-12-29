import React, { useEffect } from "react";
import FormModal from "../../../components/Modal/FormModal";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { DataGetAction } from "../../../redux/actions/CommonHttp";
import EditTeacherInfoForm from "./TeacherInfoForm";
const EditTeacherInfoModal = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const teacherProps = useSelector((state) => state.crudR);
  const {
    Edit_TeacherInfo_Modal,
    buttonSpin,
    initialValues,
    selectBranchList,
  } = teacherProps;

  console.log("==========editTeacherInfoinitialValues", initialValues);

  const fetBranches = () => {
    if (Edit_TeacherInfo_Modal) {
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
  useEffect(fetBranches, [Edit_TeacherInfo_Modal]);
  return (
    <FormModal
      ModalName="Edit_TeacherInfo_Modal"
      visible={Edit_TeacherInfo_Modal}
      modalTitle="Teacher Information"
      Spinner={buttonSpin}
      method="PUT"
      apiName="updateTeacher"
      requestType="EditUserRecord"
      recordName="teacherInfo"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="600px"
      initialValues={{ ...initialValues }}
    >
      <EditTeacherInfoForm
        selectBranchList={selectBranchList}
        formtype="edit"
      />
    </FormModal>
  );
};

export default EditTeacherInfoModal;
