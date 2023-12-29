import React from "react";
import Widget from "../../../components/Widget";
import ShowModal from "../../../components/Modal/ShowModal";
import NoRecordFound from "../../../components/NoRecordFound";
import { FaEdit } from "react-icons/fa";
import { Timeline } from "antd";
import moment from "moment";
const ExperienceInformation = ({ data, experienceInformation }) => {
  const header = (
    <div className="d-flex align-items-center justify-content-between">
      <h4>Experience Information</h4>
      {experienceInformation ? (
        <ShowModal
          ModalName="Add_Experience_Modal"
          buttonName={
            <FaEdit
              className="settingModalicon"
              size={25}
              style={{ color: "#50B8E7" }}
            />
          }
          record={data && data}
        />
      ) : ( 
        <ShowModal
        ModalName="Add_Experience_Modal"
        showButton={true}
        buttonName="New"
        record={data} 
      />
      )}
     
    </div>
  );

  const renderTimeLineItem = (data) => {
    return data.map((item, index) => {
      return (
        <Timeline.Item color="gray" key={index}>
          <p className="font-16 text-capitalize font-sans-bold text-color-545454">
            {item.experience}
          </p>
          <p className="font-14 text-capitalize font-sans-regular text-color-b9b9b9">
            {item.workPlace}
          </p>
          <p className="font-14  font-sans-regular text-color-b9b9b9">
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
      {!experienceInformation && <NoRecordFound />}
      {experienceInformation  && (
        <div className="d-flex flex-column gap-2">
          {renderData(experienceInformation)}
        </div>
      )}
    </Widget>
  );
};

export default ExperienceInformation;
