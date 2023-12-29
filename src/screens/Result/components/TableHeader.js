import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Filters from "../../../components/Filters";
import Title from "../../../components/Title";
import { DataGetAction } from "../../../redux/actions/CommonHttp";
const TableHeader = () => {
  return (
    <div className="d-flex align-items-center justify-content-between flex-wrap ">
      <Title title="Result" />
      <div className="d-flex align-items-center flex-wrap gap-2">
        <Filters
          apiName=""
          recordName="branchList"
          requestType="FetchRecord"
          selectBranch={true}
          selectClass={true}
        />
      </div>
    </div>
  );
};

export default TableHeader;
