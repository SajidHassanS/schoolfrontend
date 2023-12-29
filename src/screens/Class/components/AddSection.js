import React from 'react'
import { Form } from "antd";
import SectionForm from './SectionForm';
import FormModal from '../../../components/Modal/FormModal';
import { useSelector } from 'react-redux';
const AddSection = () => {
    const [form] = Form.useForm();
    const branchProps = useSelector((state) => state.crudR);
    const { Add_Section_Modal, buttonSpin } = branchProps;
    return (
      <FormModal
        ModalName="Add_Section_Modal"
        visible={Add_Section_Modal}
        modalTitle="Add Section"
        Spinner={buttonSpin}
        method="POST"
        apiName="addSection"
        requestType="AddSingleRecord"   
        recordName="sectionList"
        cancelButtonName="Cancel"
        submitButtonName="Submit"
        form={form}
        width="600px"
      >
        <SectionForm />
      </FormModal>
    );
}

export default AddSection