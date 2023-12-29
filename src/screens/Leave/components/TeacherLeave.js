import { Action } from "history";
import moment from "moment";
import React, { useState } from "react";
import BranchList from "../../../components/Table";
import DeleteModal from "../../../components/Modal/DeleteModal";
import ShowModal from "../../../components/Modal/ShowModal";
import Widget from "../../../components/Widget";
import { renderStatusText } from "../../../utils/commonFunctions";
import TableHeader from "./TableHeader";

const TeacherLeave = () => {
    const [filterValue, setFilterValue] = useState({});
    const renderActions = (record) => {
      return (
        <div className="d-flex flex-column popoverContent">
  
          {record.status === "approved" && (
            <DeleteModal
              buttonName="Block"
              apiName="updateBranchStatus"
              requestType="EditRecord"
              recordName="branchList"
              method="PUT"
              title="Are you sure to block"
              content=""
              data={{ _id: record._id, status: "block" }}
            />
          )}
          {record.status === "rejected" && (
            <DeleteModal
              buttonName="Active"
              apiName="updateBranchStatus"
              requestType="EditRecord"
              recordName="branchList"
              method="PUT"
              title="Are you sure to active this record"
              content=""
              data={{ _id: record._id, status: "active" }}
            />
          )}
  
          <DeleteModal
            buttonName="Delete"
            apiName="deleteBranchLeave"
            requestType="DeleteRecord"
            recordName="branchList"
            method="PUT"
            title="Are you sure you want to delete this"
            content="This record will be deleted permanently"
            data={{ _id: record._id }}
          />
  
         
        </div>
      );
    };
    const columns = [
      {
        title: "Id",
        render: (record) => <span>{record.Id}</span>,
        key: "Id",
      },
      {
        title: "From",
        render: (record) => <span >{moment(record.fromDate).format("DD-MM-YYYY")}</span>,
        key: "From",
      },
      {
        title: "To",
        render: (record) => <span >{moment(record.toDate).format("DD-MM-YYYY")}</span>,
        key: "To",
      },
      {
        title: "No of Days",
        render: (record) => <span>{record.noOfDays}</span>,
        key: "noOfDays",
      },
      {
        title: "Branch Name",
        render: (record) => <span  style={{ textTransform: "capitalize" }}>{record.branchName}</span>,
        key: "branchName",
      },
      {
        title: "Reason",
        render: (record) => <span>{record.reason}</span>,
        key: "reason",
      },
      {
        title: "Approved By",
        render: (record) => <span  style={{ textTransform: "capitalize" }}>{record.approvedBy}</span>,
        key: "approvedBy",
      },
      {
        title: "Status",
        render: (record) => (
          <span style={{ textTransform: "capitalize" }}>
           { renderStatusText(record.status)}
          </span>
        ),
        key: "status",
      },
      {
        title: "",
        render: (record) => <Action>{renderActions(record)}</Action>,
        key: "action",
        width: "50px",
      },
    ];
  return (
    <Widget header={<TableHeader />}>
      <BranchList
        apiName="getLeave"
        recordName="LeavesInfo"
        role="teacher"
        columns={columns}
        scroll={true}
        pagination={true}
        filterValue={filterValue}
      />
    </Widget>
  );
};



export default TeacherLeave