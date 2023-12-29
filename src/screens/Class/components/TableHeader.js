import React from "react";
import Title from "../../../components/Title";
import ShowModal from "../../../components/Modal/ShowModal";
import Filters from "../../../components/Filters";

const TableHeader = () => {
  return (
    <div className="d-flex align-items-center justify-content-between flex-wrap">
      <Title title="Classes" />
      <div className="d-flex align-items-center flex-wrap gap-2">
        <Filters
          apiName="getClass"
          recordName="classList"
          requestType="FetchRecord"
          searchPlaceholder="ID/BranchName/ClassName"
          statusPlaceholder="Status"
          searchInput={true}
          selectStatus={true}
          options={[
            { value: "all", label: "All" },
            { value: "active", label: "Active" },
            { value: "block", label: "Block" },
          ]}
        />
        <ShowModal
          ModalName="Add_Class_Modal"
          showButton={true}
          buttonName="New"
        />
      </div>
    </div>
  );
};

export default TableHeader;
