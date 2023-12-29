import { Col, Row } from "antd";
import React, { useEffect } from "react";
import AddEmergencyContact from "./AddEmergencyContact";
import AddPersonalInfoModal from "./AddPersonalInfoModal";
import AddStudentInfoModal from "./AddStudentInfoModal";
import EmergencyContact from "./EmergencyContact";
import PersonalInformation from "./PersonalInformation";
import StudentInfo from "./StudentInfo";
import { DataGetAction } from "../../../redux/actions/CommonHttp";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AddStudentInfo = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const studentProps = useSelector((state) => state.crudR);
  const { studentInfo } = studentProps;
  console.log("======studentInfo", studentInfo);

  const fetchData = () => {
    if (params && params.id) {
      dispatch(
        DataGetAction(
          "getStudentDetailById",
          "FetchSingleRecord", 
          { _id: params.id, branchId: params.branchId, role: "student"},
          "",
          "",
          "studentInfo"
        )
      );
    }
  };
  useEffect(fetchData, [params]);
  return (
    <>
      <StudentInfo data={studentInfo} />
      <Row className="mt-4">
        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-3 mb-3">
          <PersonalInformation data={studentInfo} 
           personalInformation={studentInfo && studentInfo.personalInformation} />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="mb-3">
          <EmergencyContact data={studentInfo} 
            emergencyInformation={
              studentInfo && studentInfo.emergencyContact
            }/>
        </Col>
      </Row>
      <AddStudentInfoModal />
      <AddPersonalInfoModal />
      <AddEmergencyContact />
    </>
  );
};

export default AddStudentInfo;
