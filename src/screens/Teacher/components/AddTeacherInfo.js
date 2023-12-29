import { Col, Row } from "antd";
import React, { useEffect } from "react";
import AddTeacherInfoModal from "./AddTeacherInfoModal";
import TeacherInfo from "./TeacherInfo";
import PersonalInformation from "./PersonalInformation";
import EmergencyContact from "./EmergencyContact";
import SalaryInformation from "./SalaryInformation";
import DeductionInformation from "./DeductionInformation";
import EducationInformation from "./EducationInformation";
import ExperienceInformation from "./ExperienceInformation";
import AddPersonalInfoModal from "./AddPersonalInfoModal";
import AddEmergencyContact from "./AddEmergencyContact";
import AddSalaryModal from "./AddSalaryModal";
import { DataGetAction } from "../../../redux/actions/CommonHttp";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import AddEducationInfoModal from "./AddEducationInfoModal"; 
import AddExperienceInfoModal from "./AddExperienceInfoModal";
import EditTeacherInfoModal from "./EditTeacherInfoModal";
const AddTeacherInfo = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const teacherProps = useSelector((state) => state.crudR);
  const { teacherInfo } = teacherProps;  
  
  const fetchData = () => {  
    if (params && params.id) {
      dispatch(
        DataGetAction(
          "getTeacherDetailById",
          "FetchSingleRecord",
          { _id: params.id, branchId: params.branchId,role: "teacher"},
          "",
          "",
          "teacherInfo"
        )
      );
    }
  };
  useEffect(fetchData, [params]);
  return (
    <>
      <TeacherInfo data={teacherInfo} />
      <Row className="mt-4">
        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-3 mb-3">
          <PersonalInformation
            data={teacherInfo}
            personalInformation={teacherInfo && teacherInfo.personalInformation}
          />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="mb-3">
          <EmergencyContact
            data={teacherInfo}
            emergencyInformation={
              teacherInfo && teacherInfo.emergencyContact
            }
          />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-3 mb-3">
          <SalaryInformation
            data={teacherInfo}
            salaryInformation={teacherInfo && teacherInfo.salaryInformation}
          />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="mb-3">
          <DeductionInformation data={teacherInfo} />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-3 mb-3">
          <EducationInformation
            data={teacherInfo}
            educationInformation={
              teacherInfo && teacherInfo.educationInformation.length !== 0 && teacherInfo.educationInformation
            }
          />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="mb-3">
          <ExperienceInformation
            data={teacherInfo}
            experienceInformation={
              teacherInfo && teacherInfo.experienceInformation.length !== 0 && teacherInfo.experienceInformation
            }
          />
        </Col>
      </Row>
      <AddTeacherInfoModal />
      <EditTeacherInfoModal/>
      <AddPersonalInfoModal />
      <AddEmergencyContact />
      <AddSalaryModal />
      <AddEducationInfoModal/>
      <AddExperienceInfoModal/>
    </>
  );
};

export default AddTeacherInfo;
