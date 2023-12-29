import React from 'react'
import { Form } from "antd";
import SectionForm from './SectionForm';
import { useSelector } from 'react-redux';
import FormModal from '../../../components/Modal/FormModal';
const EditSection = () => {
    const [form] = Form.useForm();
    const sectionProps = useSelector((state) => state.crudR);
    const { Edit_Section_Modal, buttonSpin,initialValues } = sectionProps;
    return (
      <FormModal
        ModalName="Edit_Section_Modal"
        visible={Edit_Section_Modal}
        modalTitle="Edit Section "
        Spinner={buttonSpin}
        method="PUT"
        apiName="updateSection"
        requestType="EditSingleRecord"   
        recordName="sectionList"
        cancelButtonName="Cancel"
        submitButtonName="Submit"
        form={form}
        width="600px"
        initialValues={initialValues}
      >
        <SectionForm />
      </FormModal>
    );
}

export default EditSection