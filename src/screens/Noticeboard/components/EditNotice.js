import { Form } from "antd";
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import FormModal from "../../../components/Modal/FormModal";
import NoticeForm from "./NoticeForm";

const EditNotice = () => {
    const [form] = Form.useForm();
    const branchProps = useSelector((state) => state.crudR);
    const { Edit_Notice_Modal,initialValues, buttonSpin,} = branchProps;
    return (
        <FormModal
        ModalName="Edit_Notice_Modal"
        visible={Edit_Notice_Modal}
        modalTitle="Edit Notice"
        Spinner={buttonSpin}
        method="PUT"
        apiName="updateNotice"
        requestType="EditRecord"
        recordName="noticeList"
        cancelButtonName="Cancel"
        submitButtonName="Submit"
        form={form}
        width="600px"
        initialValues= {initialValues && initialValues}
      >
        <NoticeForm />
      </FormModal>
    );
  };

export default EditNotice;
