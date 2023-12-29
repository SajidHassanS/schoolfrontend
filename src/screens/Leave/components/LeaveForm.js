import React from "react";
import { Col, DatePicker, Form, Input, Row, Select } from "antd";
const { TextArea } = Input;
const LeaveForm = ({ formType }) => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-2">
        <Form.Item
          label="Leave Type"
          name="leaveType"
          rules={[{ required: true, message: "leave type is required" }]}
        >
          <Select placeholder="Select Leave Type">
            <Select.Option value="casual">Casual Leave</Select.Option>
            <Select.Option value="medical">Medical Leave</Select.Option>
            <Select.Option value="annual">Annual Leave</Select.Option>
          </Select>
        </Form.Item>
      </Col>

      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
        <Form.Item
          name="fromDate"
          label="From"
          rules={[{ required: true, message: " From Date is required" }]}
        >
          <DatePicker className="w-100" />
        </Form.Item>
      </Col>

      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-2">
        <Form.Item
          name="toDate"
          label="To"
          rules={[{ required: true, message: " To Date is required" }]}
        >
          <DatePicker className="w-100" />
        </Form.Item>
      </Col>

      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-2">
        <Form.Item
          label="No. Of Days"
          name="noOfDays"
          rules={[{ required: true, message: "No Of Days is required" }]}
        >
          <Input type="number" readOnly defaultValue="10" />
        </Form.Item>
      </Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-2">
        <Form.Item
          label="Remaining Leaves"
          name="remainingLeaves"
          rules={[{ required: true, message: "Remaining Leaves is required" }]}
        >
          <Input type="number" readOnly defaultValue="10" />
        </Form.Item>
      </Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
        <Form.Item
          label="Leave Reason"
          name="leaveReason"
          rules={[{ required: true, message: "Leave Reason is required" }]}
        >
          <TextArea placeholder="Enter Complete Reason" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default LeaveForm;
