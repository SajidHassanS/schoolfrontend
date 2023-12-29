import { Avatar, Col, Row } from "antd";
import React from "react";
import ShowModal from "../../../components/Modal/ShowModal";
import moment from "moment"
import { FaEdit } from "react-icons/fa";
const StudentInfo = ({ data }) => {
  const openEditModal = () => {
    console.log("========datahere",data)
    if (data) {
      if (data.birthday) {
        data["birthday"] = moment(data.birthday);
      }
      if (data.admissionDate) {
        data["admissionDate"] = moment(data.admissionDate);
      }
      return (
        <ShowModal 
          ModalName="Edit_StudentInfo_Modal" 
          buttonName={
            <FaEdit
              className="settingModalicon"
              size={25}
              style={{ color: "#50B8E7" }}
            />
          }
          record={data}
        />
      );
    }
  };
  return (
    <>
      <div className="card p-4">
        <Row>
          <Col xl={12} lg={14} md={24} sm={24} xs={24}>
            <div className="d-flex align-items-center flex-wrap gap-3">
              <Avatar size={120} />
              <div className="d-flex flex-column">
                <h4 className="font-sans-bold text-capitalize font-20 text-color-b9b9b9">
                {data ? data.fullName : "Abc"}
                </h4>
                <h4 className="font-sans-bold font-18 mb-1">
                  ID : <span className="text-color-b9b9b9">{data ? data.studentId : "Abc"}</span>
                </h4>
                <h4 className="font-sans-bold font-18 mb-1">
                  Branch Name :
                  <span className="text-capitalize text-color-b9b9b9 ">{data ? data.branchName : "branchNme"}</span>
                </h4>
                <div className="d-flex align-items-center justify-content-between w-100">
                  <h4 className="font-sans-bold font-18 mb-1 text-capitalize">
                    Class :<span className="text-color-b9b9b9 ">{data ? data.className : "classname"}</span>
                  </h4>
                  <h4 className="font-sans-bold font-18 mb-1 text-capitalize">
                    <span>|| </span>
                    Section :<span className="text-color-b9b9b9 ">{data ? data.sectionName : "sectionName"}</span>
                  </h4>
                </div>
                <h4 className="font-sans-regular font-16 text-color-b9b9b9">
                  Admission Date : {data && data.admissionDate
                  ? moment(data.admissionDate).format("DD-MM-YYYY")
                  : "00-00-0000"}
                </h4>
              </div>
            </div>
          </Col>
          <Col
            xl={12}
            lg={10}
            md={24}
            sm={24}
            xs={24}
            className="d-flex flex-row justify-content-between flex-wrap"
          >
            <div className="dash-border">
              <div className="d-flex flex-column gap-1 ps-3">
                <h4 className="font-sans-regular font-16 text-color-b9b9b9">
                  Phone : {data ? data.phoneNumber : "phoneNumber"}
                </h4>
                <h4 className="font-sans-regular font-16 text-color-b9b9b9">
                  Email : {data ? data.email : "email"}
                </h4>
                <h4 className="font-sans-regular font-16 text-color-b9b9b9">
                  Birthday :  {data && data.birthday
                  ? moment(data.birthday).format("DD-MM-YYYY")
                  : "00-00-0000"}
                </h4>
                <h4 className="text-capitalize font-sans-regular font-16 text-color-b9b9b9">
                  Address : {data ? data.address : "address"}
                </h4>
                <h4 className=" text-capitalize font-sans-regular font-16 text-color-b9b9b9">
                  Gender : <span>{data ? data.gender : "gender"}</span>
                </h4>
              </div>
            </div>
            {data && openEditModal()}
            {!data && (
              <ShowModal
                ModalName="Add_StudentInfo_Modal"
                showButton={true}
                buttonName="New"
              />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default StudentInfo;
