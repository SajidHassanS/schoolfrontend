import { Col, Row } from "antd";
import React, { useEffect } from "react";
import AddStaffInfoModal from "./AddSatffInfoModal";
import StaffInfo from "./StaffInfo";
import PersonalInformation from "./PersonalInformation";
import EmergencyContact from "./EmergencyContact";
import SalaryInformation from "./SalaryInformation";
import DeductionInformation from "./DeductionInformation";
import EducationInformation from "./EducationInformation";
import ExperienceInformation from "./ExperienceInformation";
import AddPersonalInfoModal from "./AddPersonalInfoModal";
import AddEmergencyContact from "./AddEmergencyContact";
import AddSalaryModal from "./AddSalaryModal";
import { useDispatch, useSelector } from "react-redux";
import { DataGetAction } from "../../../redux/actions/CommonHttp";
import { useParams } from "react-router-dom";
import EditStaffInfoModal from "./EditStaffInfoModal";
import AddEducationInfoModal from "./AddEducationInfoModal";
import AddExperienceInfoModal from "./AddExperienceInfoModal";

const AddSatffInfo = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const staffProps = useSelector((state) => state.crudR);
  const { staffInfo } = staffProps;
  console.log("======staffInfo", staffInfo);
  const fetchData = () => {
    if(params && params.id){
      dispatch(
        DataGetAction(
          "getStaffDetailById",
          "FetchSingleRecord",
          { _id: params.id, branchId: params.branchId,role: "staff"},
          "",
          "",
          "staffInfo"
        )
      );
    }
   
  };
  useEffect(fetchData, [params]);
  return (
    <>
      <StaffInfo data={staffInfo}/>
      <Row className="mt-4">
        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-3 mb-3">
          <PersonalInformation  data={staffInfo}
           personalInformation={staffInfo && staffInfo.personalInformation} />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="mb-3">
          <EmergencyContact  data={staffInfo}  emergencyInformation={
              staffInfo && staffInfo.emergencyContact
            } />
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-3 mb-3">
          <SalaryInformation   data={staffInfo} 
           salaryInformation={staffInfo && staffInfo.salaryInformation}/>
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="mb-3">
          <DeductionInformation  data={staffInfo}/>
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="pe-3 mb-3">
          <EducationInformation   data={staffInfo} 
          educationInformation={
            staffInfo && staffInfo.educationInformation.length !== 0 && staffInfo.educationInformation
          }/>
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24} className="mb-3">
          <ExperienceInformation   data={staffInfo}
           experienceInformation={
            staffInfo && staffInfo.experienceInformation.length !== 0 && staffInfo.experienceInformation
          }/>
        </Col>
      </Row>
      <AddStaffInfoModal />
      <EditStaffInfoModal/>
      <AddPersonalInfoModal />
      <AddEmergencyContact />
      <AddSalaryModal />
      <AddEducationInfoModal />
      <AddExperienceInfoModal />
    </>
  );
};

export default AddSatffInfo;
