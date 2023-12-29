import React, { useState } from "react";
import { useDispatch } from "react-redux";
import GraphCard from "../../components/GraphCard";
import TableHeader from "./components/TableHeader";
import SalaryList from "../../components/Table";
import ShowModal from "../../components/Modal/ShowModal";
import Action from "../../components/Table/Actions";
import Widget from "../../components/Widget"
const Index = () => {
  const [filterValue, setFilterValue] = useState({});
  console.log(setFilterValue);
  const renderActions = (record) => {
    return (
      <div className="d-flex flex-column popoverContent">
        <p>
          <ShowModal ModalName="" buttonName="View" record={record} />
        </p>
      </div>
    );
  };
  const columns = [
    {
      title: "Id",
      render: (record) => <span>{record.sNo}</span>,
      key: "id",
    },
    {
      title: "Full Name",
      render: (record) => <span>{record.fullName}</span>,
      key: "fullName",
    },
    {
      title: "Branch name",
      render: (record) => <span>{record.branchName}</span>,
      key: "branchName",
    },
    {
      title: "Email",
      render: (record) => <span>{record.email}</span>,
      key: "email",
    },
    {
      title: "Phone",
      render: (record) => <span>{record.phone}</span>,
      key: "phone",
    },
    {
      title: "Month",
      render: (record) => (
        <span style={{ textTransform: "Uppercase" }}>{record.month}</span>
      ),
      key: "month",
    },
    {
      title: "Salary",
      render: (record) => (
        <span style={{ textTransform: "Uppercase" }}>{record.salary}</span>
      ),
      key: "salary",
    },
    {
      title: "Status",
      render: (record) => (
        <span style={{ textTransform: "capitalize" }}>{record.status}</span>
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
    <>
      {/* <GraphCard /> */}
      <Widget header={<TableHeader />}>
      <SalaryList
        apiName=""
        recordName="resultList"
        columns={columns}
        scroll={true}
        pagination={true}
        filterValue={filterValue}
      />
      </Widget>
    </>
  );
};

export default Index;
