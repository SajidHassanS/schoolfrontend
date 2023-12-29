import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Space } from "antd";
const TaxRatesForm = ({ formType }) => {
  return (
    <>
      <Row className="pb-2">
        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
          <span
            className="font-sans-regular"
            style={{ color: "#545454", fontSize: "14px" }}
          >
            Minimum
          </span>
        </Col>
        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
          <span
            className="font-sans-regular "
            style={{ color: "#545454", fontSize: "14px" }}
          >
            Maximum
          </span>
        </Col>
        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
          <span
            className="font-sans-regular"
            style={{ color: "#545454", fontSize: "14px" }}
          >
            Rate
          </span>
        </Col>
      </Row>
     
      <Form.List name="taxDetails"> 
        {(fields, { add , remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: "flex",
                  marginBottom: 8,
                }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, "minimumAmount"]}
                  rules={[
                    {
                      required: true,
                      message: "Required minimum",
                    },
                  ]}
                >
                  <Input type="number" suffix="$" placeholder="Minimum" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "maximumAmount"]}
                  rules={[
                    {
                      required: true,
                      message: "Required maximum",
                    },
                  ]}
                >
                  <Input type="number" suffix="$" placeholder="Maximum" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, "taxRate"]}
                  rules={[
                    {
                      required: true,
                      message: "Required Rate",
                    },
                  ]}
                >
                  <Input type="number" suffix="$" placeholder="Rate" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Tax Field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
};

export default TaxRatesForm;
