import { Avatar, Col, Form, Row } from "antd";
import Input from "antd/es/input/Input";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
const LeavesSettingForm = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  return (
    <>
      <Row className="flex-row">
        <Col xl={24} lg={24} md={24} sm={24} xs={24} className="px-0">
          <Form.Item
            name="casualLeaves"
            label="Casual Leaves"
            rules={[
              {
                required: true,
                message: "Casual Leave is required",
              },
            ]}
          >
            <Input type="number" placeholder="Enter casualLeaves" />
          </Form.Item>
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24} className="px-0">
          <Form.Item
            name="medicalLeaves"
            label="Medical Leaves"
            rules={[
              {
                required: true,
                message: "Medical Leave is required",
              },
            ]}
          >
            <Input type="number" placeholder="Enter Medical Leaves" />
          </Form.Item>
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24} className="px-0">
          <Form.Item
            name="annualLeaves"
            label="Annual Leaves"
            rules={[
              {
                required: true,
                message: "Annual Leave is required",
              },
            ]}
          >
            <Input  type="number" placeholder="Enter Annual Leaves" />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default LeavesSettingForm;
