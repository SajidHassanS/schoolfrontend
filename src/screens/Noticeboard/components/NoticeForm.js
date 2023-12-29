import React from "react";
import { Col, Form, Input, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DataGetAction } from "../../../redux/actions/CommonHttp";
import { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NoticeForm = ({ value, onChange, placeholder }) => {
  const dispatch = useDispatch();
  const CrudProps = useSelector((state) => state.crudR);
  const { branchSelectList } = CrudProps;
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'code'],
      ['clean'],
    ],
  };
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'code',
  ];
  const getFieldsData = () => {
    dispatch(
      DataGetAction(
        "getBranchName",
        "FetchSingleRecord",
        { query: "all" },
        "",
        "",
        "branchSelectList"
      )
    );
  };  
  useEffect(getFieldsData, []);
  return (
    <Row>
      <Col xl={24} lg={24} md={24} sm={24} xs={24} className="pe-2 mb-3">
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Title is required" }]}
        >
          <Input placeholder="Enter Title" />
        </Form.Item>
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
            {branchSelectList &&
              branchSelectList.map((item, index) => (
                <Select.Option value={item._id}>{item.branchName}</Select.Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          rules={[
            {
              required: true,
              message: "Select type is required",
            },
          ]}
        >
          <Select placeholder="Select Type" allowClear>
            <Select.Option value="all">All</Select.Option>
            <Select.Option value="teacher">Teacher</Select.Option>
            <Select.Option value="student">Student</Select.Option>
            <Select.Option value="staff">Staff</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Title is required" }]}
        >
          <ReactQuill
            theme="snow"
            value={value || ""}
            modules={modules}
            formats={formats}
            onChange={onChange}
            placeholder={placeholder}
            style={{height:"100px"}}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default NoticeForm;
