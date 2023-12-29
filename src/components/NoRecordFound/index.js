import React from "react";
import NotFound from "../../assets/images/notFound.png";
const NoRecordFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-1">
      <h4 className="font-18 font-sans-bold" style={{ color: "#D9D9D9" }}>
        No Record Found
      </h4>
      <img src={NotFound} width="74px" />
    </div>
  );
};

export default NoRecordFound;
