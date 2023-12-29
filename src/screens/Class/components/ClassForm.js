import React, { useEffect } from "react";
import { Col, Form, Input, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DataGetAction } from "../../../redux/actions/CommonHttp";
import ShowModal from "../../../components/Modal/ShowModal";
import AddSection from "./AddSection";
const ClassForm = () => {
  const dispatch = useDispatch();
  const FormFieldProps = useSelector((state) => state.crudR);
  const { branchfield, sectionfield } = FormFieldProps;
  const getFieldsData = () => {
    dispatch(
      DataGetAction(
        "getBranchName",
        "FetchSingleRecord",
        { query: "all" },
        "",
        "",
        "branchfield"
      )
    );
    dispatch(
      DataGetAction(
        "getSectionName",
        "FetchSingleRecord",
        { query: "all" },
        "",
        "",
        "sectionfield"
      )
    );
  };
  useEffect(getFieldsData, []);

  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-2">
        <Form.Item
          name="branchId"
          label="Branch Name"
          rules={[
            {
              required: true,
              message: "Branch Name is required",
            },
          ]}
        >
          <Select placeholder="Select Branch Name" allowClear>
            {branchfield &&
              branchfield.map((item, index) => (
                <Select.Option
                  value={item._id}
                  key={index}
                  style={{ textTransform: "capitalize" }}
                >
                  {item.branchName}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
      </Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
        <Form.Item
          name="sectionId"
          label="Section Name"
          rules={[
            {
              required: true,
              message: "Section Name is required",
            },
          ]}
        >
          <Select mode="multiple" placeholder="Select Section Name" allowClear>
            {sectionfield &&
              sectionfield.map((item, index) => (
                <Select.Option
                  key={index}
                  value={item._id}
                  style={{ textTransform: "capitalize" }}
                >
                  {item.sectionName}
                </Select.Option>
              ))}
            {/* <p>
              <ShowModal
                ModalName="Add_Section_Modal"
                showButton={false}
                buttonName="Add more"
              />
            </p> */}
          </Select>
        </Form.Item>
      </Col>
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <Form.Item
          name="className"
          label="Class Name"
          rules={[
            {
              required: true,
              message: "Class Name is required",
            },
          ]}
        >
          <Input placeholder="Enter Class Name" />
        </Form.Item>
      </Col>
      <AddSection />
    </Row>
  );
};

export default ClassForm;
