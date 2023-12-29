import React from "react";
import FormModal from "../../../components/Modal/SingleInfoFormModal";
import { Col, Form, Input, Row } from "antd";
import { useSelector } from "react-redux";

const AddSalaryModal = () => {
  const [form] = Form.useForm();
  const teacherProps = useSelector((state) => state.crudR);
  const { Add_Salary_Modal, buttonSpin, initialValues } = teacherProps;

  return ( 
    <FormModal
      ModalName="Add_Salary_Modal"
      visible={Add_Salary_Modal}
      modalTitle="Salary Information"
      Spinner={buttonSpin}
      method="PUT"
      apiName="updateTeacher"
      requestType="EditUserRecord"
      recordName="teacherInfo"
      objectName="salaryInformation"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="500px"
      extraFieldValue={initialValues && initialValues._id}
      initialValues={initialValues && initialValues.salaryInformation}
    >
      <Row>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Form.Item
            name="basicSalary"
            label="Basic Salary"
            rules={[{ required: true, message: "Basic salary is required" }]}
          >
            <Input type="number" placeholder="Enter Basic Salary" />
          </Form.Item>
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24} className="pe-2">
          <Form.Item
            name="houseRentAllowance"
            label="House Rent Allowance"
            rules={[{ required: true, message: "House rent is required" }]}
          >
            <Input placeholder="Enter House Rent" />
          </Form.Item>
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Form.Item
            name="conveyance"
            label="Conveyance"
            rules={[{ required: true, message: "Conveyance is required" }]}
          >
            <Input placeholder="Enter Conveyance" />
          </Form.Item>
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Form.Item name="otherAllowance" label="Other Allowance">
            <Input placeholder="Enter Other Allowance" />
          </Form.Item>
        </Col>
      </Row>
    </FormModal>
  );
};

export default AddSalaryModal;
