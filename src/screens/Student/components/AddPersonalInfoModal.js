import React from "react";
import FormModal from "../../../components/Modal/SingleInfoFormModal";
import { Col, Form, Input, Row } from "antd";
import { useSelector } from "react-redux";

const AddPersonalInfoModal = () => {
  const [form] = Form.useForm();
  const studentProps = useSelector((state) => state.crudR);
  const { Add_Personal_Modal, buttonSpin, initialValues } = studentProps;

  return (
    <FormModal
      ModalName="Add_Personal_Modal"
      visible={Add_Personal_Modal}
      modalTitle="Personal Information"
      Spinner={buttonSpin}
      method="PUT"
      apiName="updateStudent"
      requestType="EditUserRecord"
      recordName="studentInfo" 
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="500px" 
      objectName="personalInformation"
      extraFieldValue={initialValues && initialValues._id}
      initialValues={initialValues &&initialValues.personalInformation} 

    >
      <Row>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Form.Item
            name="nationality"
            label="Nationality"
            rules={[{ required: true, message: "Nationality is required" }]}
          >
            <Input placeholder="Enter Nationality" />
          </Form.Item>
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24} className="pe-2">
          <Form.Item
            name="religion"
            label="Religion"
            rules={[{ required: true, message: "Religion is required" }]}
          >
            <Input placeholder="Enter Religion" />
          </Form.Item>
        </Col>
      </Row>
    </FormModal>
  );
};

export default AddPersonalInfoModal;
