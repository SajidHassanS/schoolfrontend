import React from "react";
import Title from "../../../components/Title";
import ShowModal from "../../../components/Modal/ShowModal";
import Filters from "../../../components/Filters";

const TableHeader = () => {
  return (
    <div className="d-flex align-items-center justify-content-between flex-wrap ">
      <Title title="Noticeboard" />
      <div className="d-flex align-items-center flex-wrap gap-2">
        <Filters
          apiName="getNotice"
          recordName="noticeList"
          requestType="FetchRecord"
          selectrangePicker={true}
        
        />
        <ShowModal
          ModalName="Add_Notice_Modal"
          showButton={true}
          buttonName="New"
        />
      </div>
    </div>
  );
};

export default TableHeader;
