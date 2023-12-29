import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Filters from "../../../components/Filters";
import Title from "../../../components/Title";
import { DataGetAction } from "../../../redux/actions/CommonHttp";
const TableHeader = () => {
  return (
    <div className="d-flex align-items-center justify-content-between flex-wrap">
      <Title title="Salary" />
      <div className="d-flex align-items-center flex-wrap gap-2">
        <Filters
          apiName=""
          recordName="branchList"
          requestType="FetchRecord"
          buttonName="Look For"
          selectPlaceholder="Select Branch"
          statusPlaceholder="Select Designation"
          selectBranch={true}
          selectStatus={true}
          selectMonth={true}
          options={[
            { value: "all", label: "All" },
            { value: "principal", label: "Principal" },
            { value: "teacher", label: "Teacher" },
            { value: "staff", label: "Staff" },
          ]}
        />
      </div>
    </div>
  );
};

export default TableHeader;
