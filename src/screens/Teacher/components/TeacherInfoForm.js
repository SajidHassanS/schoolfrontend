import React from "react";
import { Col, Form, Input, Row, Select, DatePicker } from "antd";
import moment from "moment";
const EditTeacherInfoForm = ({ selectBranchList, formtype }) => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-2">
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[{ required: true, message: "Full Name is required" }]}
        >
          <Input placeholder="Enter Full Name" />
        </Form.Item>
      </Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
        <Form.Item
          name="designation"
          label="Designation"
          rules={[{ required: true, message: "Designation is required" }]}
        >
          <Input placeholder="Enter Designation" />
        </Form.Item>
      </Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-2">
        <Form.Item
          name="branchId"
          label="Branch Name"
          rules={[{ required: true, message: "Branch Name is required" }]}
        >
          <Select className="text-capitalize" placeholder="Select Branch Name">
            {selectBranchList &&
              selectBranchList.map((item) => (
                <Select.Option className="text-capitalize" value={item._id}>
                  {item.branchName}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
      </Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Enter Valid Email" },
          ]}
        >
          <Input disabled={formtype} placeholder="Enter Email" />
        </Form.Item>
      </Col>
      {!formtype && (
        <>
          <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-2">
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password is required",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Enter Password" />
            </Form.Item>
          </Col>
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Password is required",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Password not match"));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Enter Confirm Password" />
            </Form.Item>
          </Col>
        </>
      )}

      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-2">
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[{ required: true, message: "Phone Number is required" }]}
        >
          <Input placeholder="Enter Phone Number" />
        </Form.Item>
      </Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
        <Form.Item
          name="joiningDate"
          label="Joining Date"
          rules={[{ required: true, message: "Joining Date is required" }]}
        >
          <DatePicker className="w-100" />
        </Form.Item>
      </Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-2">
        <Form.Item
          name="birthday"
          label="Birth Date"
          rules={[{ required: true, message: "Birth Date is required" }]}
        >
          <DatePicker className="w-100" />
        </Form.Item>
      </Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Gender is required" }]}
        >
          <Select placeholder="Enter Gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>
      </Col>
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: "Address is required" }]}
        >
          <Input.TextArea placeholder="Enter Address" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default EditTeacherInfoForm;
