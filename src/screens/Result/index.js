import React, { useState } from "react";
import { useDispatch } from "react-redux";
import GraphCard from "../../components/GraphCard";
import TableHeader from "./components/TableHeader";
import ResultList from "../../components/Table";
import ShowModal from "../../components/Modal/ShowModal";
import Action from "../../components/Table/Actions";
import Widget from "../../components/Widget";
const Index = () => {
  const [filterValue, setFilterValue] = useState({});
  console.log(setFilterValue);

  const renderActions = (record) => {
    return (
      <div className="d-flex flex-column popoverContent">
        <p>
          <ShowModal ModalName="" buttonName="Edit" record={record} />
        </p>

        {/* <p>
            <DeleteConfirm
              type="updatePackageStatus"
              apiRequest=""
              recordName=""
              title="Are you sure you want to delete this"
              content="This Record will be deleted permanently"
              selectedItem={{ _id: record._id, status: "delete" }}
              Icon="Delete"
              method="PUT"
            />
          </p> */}
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
      title: "Class",
      render: (record) => <span>{record.className}</span>,
      key: "className",
    },
    {
      title: "Section",
      render: (record) => <span>{record.section}</span>,
      key: "section",
    },
    {
      title: "Exam Type",
      render: (record) => <span>{record.examType}</span>,
      key: "examType",
    },
    {
      title: "Grade",
      render: (record) => (
        <span style={{ textTransform: "Uppercase" }}>{record.grade}</span>
      ),
      key: "grade",
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
        <ResultList
          apiName=""
          recordName=""
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
