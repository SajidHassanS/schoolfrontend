import React from "react";
import Widget from "../../../components/Widget";
import ShowModal from "../../../components/Modal/ShowModal";
import NoRecordFound from "../../../components/NoRecordFound";
const DeductionInformation = () => {
  const header = (
    <div className="d-flex align-items-center justify-content-between">
      <h4>Deduction Information</h4>
    </div>
  );

  return (
    <Widget bodyClassName="w-100" headerClassName="w-100" header={header}>
      <NoRecordFound />
    </Widget>
  );
};

export default DeductionInformation;
