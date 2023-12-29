import React from "react";
import ShowModal from "../../../components/Modal/ShowModal";
import Title from "../../../components/Title";

const TableHeader = () => {
  return (
    <div className="d-flex align-items-center justify-content-between flex-wrap ">
      <Title title="Section" />
      <div className="d-flex align-items-center flex-wrap gap-2">
        <ShowModal
          ModalName="Add_Section_Modal"
          showButton={true}
          buttonName="New"
        />
      </div>
    </div>
  );
};

export default TableHeader;
