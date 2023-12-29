import React from "react";
import { Col, Form, Input, Row } from "antd";
const { TextArea } = Input;
const BranchForm = ({ formType }) => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-2">
        <Form.Item
          label="Branch Name"
          name="branchName"
          rules={[{ required: true, message: "Branch name is required" }]}
        >
          <Input placeholder="Enter Branch Name" />
        </Form.Item>
      </Col>
      {formType !== "edit" && (
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Email is required",
              },
              {
                type: "email",
                message: "Please enter valid email",
              },
            ]}
          >
            <Input placeholder="Enter Email" />
          </Form.Item>
        </Col>
      )}
      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-2">
        <Form.Item
          label="Principle Name"
          name="fullName"
          rules={[{ required: true, message: "Enter your principle name" }]}
        >
          <Input placeholder="Enter Branch Principle Name" />
        </Form.Item>
      </Col>
      {formType !== "edit" && (
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password placeholder="Enter Password" />
          </Form.Item>
        </Col>
      )}
      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-2">
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[{ required: true, message: "phone number is required" }]}
        >
          <Input placeholder="Enter Phone Number" />
        </Form.Item>
      </Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Address is required" }]}
        >
          <TextArea placeholder="Enter Complete Address" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default BranchForm;
