import React from "react";
import Widget from "../../../components/Widget";
import ShowModal from "../../../components/Modal/ShowModal";
import NoRecordFound from "../../../components/NoRecordFound";
import { FaEdit } from "react-icons/fa";
const EmergencyContact = ({data,emergencyInformation}) => {
  const header = (
    <div className="d-flex align-items-center justify-content-between">
      <h4>Emergency Contact</h4>
      {emergencyInformation ? ( 
        <ShowModal
          ModalName="Add_Emergency_Modal"
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
        ModalName="Add_Emergency_Modal"
        showButton={true}
        buttonName="New"
        record={data && data}
      />
      )}
     
    </div> 
  );
  const renderData = (name, val) => {
    return (
      <div className="d-flex align-items-center flex-wrap gap-1 text-capitalize">
        <span className=" font-16 font-sans-bold text-color-545454">
          {name} :
        </span>
        <span className=" font-16 font-sans-regular text-color-b9b9b9">
          {val}
        </span>
      </div>
    );
  };

  return (
    <Widget bodyClassName="w-100" headerClassName="w-100" header={header}>
      {!emergencyInformation && <NoRecordFound />}
      {emergencyInformation && emergencyInformation.emergencyContactName && (
        <div className="d-flex flex-column gap-2">
          {renderData(
            "Name",
            emergencyInformation && emergencyInformation.emergencyContactName
          )}
          {renderData(
            "Relationship",
            emergencyInformation && emergencyInformation.relationship
          )}
          {renderData(
            "Phone",
            emergencyInformation && emergencyInformation.emergencyContactNumber
          )}
          {renderData(
            "Address",
            emergencyInformation && emergencyInformation.emergencyContactAddress
          )}
        </div>
      )}
    </Widget>
  );
};

export default EmergencyContact;
