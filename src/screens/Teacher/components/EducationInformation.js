import React from "react";
import Widget from "../../../components/Widget";
import ShowModal from "../../../components/Modal/ShowModal";
import NoRecordFound from "../../../components/NoRecordFound";
import moment from "moment";
import { FaEdit } from "react-icons/fa";
import { Timeline } from "antd";

const EducationInformation = ({ data, educationInformation }) => {
  const renderEditModal = () => {
    console.log("==========record", data.educationInformation);

    return (
      <ShowModal
        ModalName="Add_Education_Modal"
        buttonName={
          <FaEdit
            className="settingModalicon"
            size={25}
            style={{ color: "#50B8E7" }}
          />
        }
        record={data && data}
      />
    );
  };

  const header = (
    <div className="d-flex align-items-center justify-content-between">
      <h4>Education Information</h4>
      {educationInformation ? (
        renderEditModal()
      ) : (
        <ShowModal
          ModalName="Add_Education_Modal"
          showButton={true}
          buttonName="New"
          record={data && data}
        />
      )}
    </div>
  );

  const renderTimeLineItem = (data) => {
    return data.map((item, index) => {
      return (
        <Timeline.Item color="gray" key={index}>
          <p className="text-capitalize font-16 font-sans-bold text-color-545454">
            {item.degreeName}
          </p>
          <p className="text-capitalize font-14 font-sans-regular text-color-b9b9b9">
            {item.instituteName}
          </p>
          <p className="font-14 font-sans-regular  text-color-b9b9b9">
            {moment(item.startDate).format("MM-YYYY")} -
            {moment(item.endDate).format("MM-YYYY")}
          </p>
        </Timeline.Item>
      );
    });
  };
  const renderData = (dataArray) => {
    return (
      <div className="d-flex align-items-center flex-wrap gap-1">
        <Timeline>{renderTimeLineItem(dataArray)}</Timeline>
      </div>
    );
  };
  return (
    <Widget bodyClassName="w-100" headerClassName="w-100" header={header}>
      {!educationInformation && <NoRecordFound />}
      {educationInformation && (
        <div className="d-flex flex-column gap-2">
          {renderData(educationInformation)}
        </div>
      )}
    </Widget>
  );
};

export default EducationInformation;
