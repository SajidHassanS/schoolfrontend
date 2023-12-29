import React from "react";
import { Col, Form, Input, Row } from "antd";
const SectionForm = () => {
  return (
    <Row>
      <Col xl={24} lg={24} md={24} sm={24} xs={24} className="pe-2">
        <Form.Item
          name="sectionName"
          label="Section Name"
          rules={[
            {
              required: true,
              message: "Section Name is required",
            },
          ]}
        >
          <Input placeholder="Enter Section Name" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default SectionForm;
