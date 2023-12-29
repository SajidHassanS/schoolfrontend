import React from "react";
import SimpleModal from "../../../components/Modal/SimpleModal";
import { Col, Row, Typography } from "antd";
import { useSelector } from "react-redux";
const { Title } = Typography;
const ViewSectionModal = () => {
  const classProps = useSelector((state) => state.crudR);
  const { View_Section_Modal, initialValues } = classProps;
  return (
    <SimpleModal
      title={
        <Title level={3} className=" px-3 py-2 pt-3">
          Section Detail
        </Title>
      }
      modalFor="View_Section_Modal"
      visible={View_Section_Modal}
      width={650}
    >
      <hr className="m-0 p-0"></hr>
      <div className="pb-4" style={{ minHeight: "200px" }}>
        <Row
          className="bg-light mt-3 py-2 "
          style={{ backgroundColor: "#F1F1F1" }}
        >
          <Col xl={8} lg={8} md={8} sm={8}>
            <span className="font-18 font-sans-bold  ps-3">Id</span>
          </Col>
          <Col xl={8} lg={8} md={8} sm={8}>
            <span className="font-18 font-sans-bold   ps-3">Section Name</span>
          </Col>
          <Col xl={8} lg={8} md={8} sm={8}>
            <span className="font-18 font-sans-bold   ps-3">
              Section Strength
            </span>
          </Col>
        </Row>

        {initialValues &&
          initialValues.sectionInfo &&
          initialValues.sectionInfo.map((item, index) => (
            <>
              <hr className="m-0 p-0"></hr>
              <Row className="my-2" key={index}>
                <Col xl={8} lg={8} md={8} sm={8}>
                  <span className="font-18 font-sans-regular text-capitalize py-3 ps-3">
                    {index + 1}
                  </span>
                </Col>
                <Col xl={8} lg={8} md={8} sm={8}>
                  <span className="font-16 font-sans-regular py-3 text-capitalize ps-3">
                    {item ? item.sectionName : ""}
                  </span>
                </Col>
                <Col xl={8} lg={8} md={8} sm={8}>
                  <span className="font-18 font-sans-regular text-capitalize py-3  ps-3"></span>
                </Col>
              </Row>
            </>
          ))}
      </div>
      
    </SimpleModal>
  );
};

export default ViewSectionModal;
