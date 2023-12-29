import React from "react";
import Widget from "../../../components/Widget";
import ShowModal from "../../../components/Modal/ShowModal";
import NoRecordFound from "../../../components/NoRecordFound";
import { FaEdit } from "react-icons/fa";
const SalaryInformation = ({ data, salaryInformation }) => {
  const header = (
    <div className="d-flex align-items-center justify-content-between">
      <h4>Salary Information</h4>
      {salaryInformation ? (
        <ShowModal
          ModalName="Add_Salary_Modal"
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
          ModalName="Add_Salary_Modal"
          showButton={true}
          buttonName="New"
          record={data}
        />
      )}
    </div>
  );
  const renderData = (name, val) => {
    return (
      <>
        <div className="d-flex align-items-center flex-wrap gap-1 justify-content-between">
          <span className="font-16 font-sans-bold text-color-545454">
            {name} :
          </span>
          <span className="font-16 font-sans-regular text-color-b9b9b9">
            $ {val}
          </span>
        </div>
        <hr className="m-0 p-0"></hr>
      </>
    );
  };
  return (
    <Widget bodyClassName="w-100" headerClassName="w-100" header={header}>
      {!salaryInformation && <NoRecordFound />}
      {salaryInformation && salaryInformation.basicSalary && (
        <div className="d-flex flex-column gap-2">
          {renderData(
            "Basic Salary",
            salaryInformation && salaryInformation.basicSalary
          )}
          {renderData(
            "House Rent Allowance",
            salaryInformation && salaryInformation.houseRentAllowance
          )}
          {renderData(
            "Conveyance", 
            salaryInformation && salaryInformation.conveyance
          )}
          {renderData(
            "Other Allowance",
            salaryInformation && salaryInformation.otherAllowance
          )}
          <div className="d-flex align-items-center flex-wrap gap-1 justify-content-between">
            <span className="font-16 font-sans-bold text-color-545454">
             Total Earnings :
            </span>
            <span className="font-16 font-sans-regular text-color-b9b9b9">
           $ {salaryInformation && salaryInformation.totalSalary}
            </span>
          </div>
        </div>
      )}
    </Widget>
  );
};

export default SalaryInformation;
