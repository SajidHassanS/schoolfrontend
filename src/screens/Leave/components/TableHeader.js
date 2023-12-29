import React from "react";
import Title from "../../../components/Title";
import ShowModal from "../../../components/Modal/ShowModal";
import Filters from "../../../components/Filters";

const TableHeader = () => {
  return (
    <div className="d-flex align-items-center justify-content-between flex-wrap">
      <Title title="" />

      <div className="d-flex align-items-center flex-wrap gap-2">
        <Filters
          apiName=""
          recordName=""
          requestType=""
          searchPlaceholder="ID/BranchCode/BranchName"
          statusPlaceholder="Status"
          selectrangePicker={true}
          selectStatus={true}
          selectBranch={true}
          options={[
            { value: "all", label: "All" },
            { value: "rejected", label: "Rejected" },
            { value: "approved", label: "Approved" },
          ]}
        />

      </div>
    </div>
  );
};

export default TableHeader;
