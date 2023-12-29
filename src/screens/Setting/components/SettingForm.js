import { Avatar, Col, Form, Row } from "antd";
import Input from "antd/es/input/Input";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
const SettingForm = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  return (
    <>
      <Row className="flex-row">
        <Col xl={16} lg={16} md={16} sm={24} xs={24} className="px-0">
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Full name is required",
              },
            ]}
          >
            <Input placeholder="Enter fullname" />
          </Form.Item>

       
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Phonenumber is required",
              },
            ]}
          >
            <PhoneInput
              inputStyle={{
                width: "100%",
              }}
              country={"sg"}
              prefix={"+"}
              onlyCountries={["sg","usa","pk","ch"]}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber({ phone })}
            />
          </Form.Item>
        </Col>

        <Col
          xl={8}
          lg={8}
          md={8}
          sm={24}
          xs={24}
          className="pr-0 d-flex align-items-center justify-content-center"
        >
          <Form.Item name="profileImageUrl">
            <Avatar
              style={{ height: "100px", width: "100px" }}
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default SettingForm;
