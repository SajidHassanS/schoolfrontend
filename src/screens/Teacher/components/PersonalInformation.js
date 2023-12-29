import React from "react";
import Widget from "../../../components/Widget";
import ShowModal from "../../../components/Modal/ShowModal";
import NoRecordFound from "../../../components/NoRecordFound";
import { FaEdit } from "react-icons/fa"; 
const PersonalInformation = ({ data, personalInformation }) => {
  const header = (
    <div className="d-flex align-items-center justify-content-between">
      <h4>Personal Information</h4>
      {personalInformation ? (
        <ShowModal
          ModalName="Add_Personal_Modal"
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
          ModalName="Add_Personal_Modal"
          showButton={true}
          buttonName="New"
          record={data && data}
        />
      )} 
    </div>
  );

  const renderData = (name, val) => {
    return (
      <div className="d-flex align-items-center flex-wrap gap-1">
        <span className="font-16 font-sans-bold text-color-545454">
          {name} :
        </span>
        <span className="text-capitalize font-16 font-sans-regular text-color-b9b9b9">
          {val}
        </span>
      </div>
    );
  };
  return (
    <Widget bodyClassName="w-100" headerClassName="w-100" header={header}>
      {!personalInformation && <NoRecordFound />}
      {personalInformation && personalInformation.nationality && (
        <div className="d-flex flex-column gap-2">
          {renderData(
            "Nationality",
            personalInformation && personalInformation.nationality
          )}
          {renderData(
            "Religion",
            personalInformation && personalInformation.religion
          )}
          {renderData(
            "Marital Status",
            personalInformation && personalInformation.maritalStatus
          )}
        </div> 
      )}
    </Widget>
  );
};

export default PersonalInformation;
