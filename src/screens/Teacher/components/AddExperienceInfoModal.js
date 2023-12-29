import React from "react";
import FormModal from "../../../components/Modal/SingleInfoFormModal";
import { useSelector } from "react-redux";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Space, DatePicker } from "antd";
const AddExperienceInfoModal = () => {
  const [form] = Form.useForm();
  const teacherProps = useSelector((state) => state.crudR);
  const { Add_Experience_Modal, buttonSpin, initialValues } = teacherProps;

  return (
    <FormModal
      ModalName="Add_Experience_Modal"
      visible={Add_Experience_Modal}
      modalTitle="Experience Information"
      Spinner={buttonSpin} 
      method="PUT"
      apiName="updateTeacher"
      requestType="EditUserRecord"
      recordName="teacherInfo"
      cancelButtonName="Cancel"
      submitButtonName="Submit"
      form={form}
      width="500px"
      extraFieldValue={initialValues && initialValues._id}
      initialValues={initialValues && initialValues.experienceInformation}
    >
      <Form.List name="experienceInformation">
        {(fields, { add, remove }) => (
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
                <Row className="gap-1">
                  <Col xl={10} lg={1} md={24} sm={24} xs={24}>
                    <Form.Item
                      {...restField}
                      name={[name, "experience"]}
                      label="Experience"
                      rules={[
                        {
                          required: true,
                          message: "Required Experience",
                        },
                      ]}
                    >
                      <Input placeholder="Enter Experience" />
                    </Form.Item>
                  </Col>
                  <Col xl={10} lg={1} md={24} sm={24} xs={24}>
                    <Form.Item
                      {...restField}
                      name={[name, "workPlace"]}
                      label="Work Place"
                      rules={[
                        {
                          required: true,
                          message: "Required Work place",
                        },
                      ]}
                    >
                      <Input type="" placeholder="Enter Work place" />
                    </Form.Item>
                  </Col>
                  <Col xl={10} lg={1} md={24} sm={24} xs={24}>
                    <Form.Item
                      {...restField}
                      name={[name, "startDate"]}
                      label="Select Start Date"
                      rules={[
                        {
                          required: true,
                          message: "Required Start Date",
                        },
                      ]}
                    >
                      <DatePicker className="w-100" />
                    </Form.Item>
                  </Col>
                  <Col xl={10} lg={1} md={24} sm={24} xs={24}>
                    <Form.Item
                      {...restField}
                      name={[name, "endDate"]}
                      label="Select End Date"
                      rules={[
                        {
                          required: true,
                          message: "Required End Date",
                        },
                      ]} 
                    >
                      <DatePicker className="w-100" />
                    </Form.Item>
                    <span className="px-3">
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </span>
                  </Col>
                </Row>
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </FormModal>
  );
};
export default AddExperienceInfoModal;
