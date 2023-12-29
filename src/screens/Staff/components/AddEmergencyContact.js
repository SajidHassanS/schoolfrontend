import React from "react";
import FormModal from "../../../components/Modal/SingleInfoFormModal";
import { Col, Form, Input, Row } from "antd";
import { useSelector } from "react-redux";

const AddEmergencyContact = () => {
  const [form] = Form.useForm();
  const staffProps = useSelector((state) => state.crudR);
  const { Add_Emergency_Modal, buttonSpin, initialValues } = staffProps;

  return (
    <FormModal
      ModalName="Add_Emergency_Modal"
      visible={Add_Emergency_Modal}
      modalTitle="Add Emergency Contact" 
      Spinner={buttonSpin}
      method="PUT"
      apiName="updateStaff"
      requestType="EditUserRecord"
      recordName="staffInfo"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="500px"
      objectName="emergencyContact"
      initialValues={initialValues}
      extraFieldValue={initialValues && initialValues._id}
      initialValues={initialValues &&initialValues.emergencyContact}
    >
      <Row>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Form.Item
            name="emergencyContactName"
            label="Name"
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input placeholder="Enter Name" />
          </Form.Item>
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24} className="pe-2">
          <Form.Item
            name="relationship"
            label="Relationship"
            rules={[{ required: true, message: "Relationship is required" }]}
          >
            <Input placeholder="Enter Relationship Name" />
          </Form.Item>
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Form.Item
            name="emergencyContactNumber"
            label="Phone"
            rules={[{ required: true, message: "Phone number is required" }]}
          >
            <Input placeholder="Enter Phone Number" />
          </Form.Item>
        </Col>
      </Row>
    </FormModal>
  );
};

export default AddEmergencyContact;
