import React from "react";
import Title from "../../../components/Title";
import Filters from "../../../components/Filters";
import IconButton from "../../../components/IconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const TableHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="d-flex align-items-center justify-content-between flex-wrap">
      <Title title="Staff" />
      <div className="d-flex align-items-center flex-wrap gap-2">
        <Filters
          apiName="getStaff"
          recordName="staffList"
          requestType="FetchRecord"
          searchPlaceholder="ID/FullName/BranchName"
          statusPlaceholder="Status"
          searchInput={true}
          selectStatus={true}
          options={[
            { value: "all", label: "All" },
            { value: "active", label: "Active" },
            { value: "block", label: "Block" },
          ]}
        />
        <IconButton
          buttonName="New"
          onClick={() => {
            dispatch({ type: "Remove_Data", recordName: "staffInfo" });
            navigate("/staff/add");
          }}
        />
      </div>
    </div>
  );
};

export default TableHeader;
