import React, { useEffect, useState } from "react";
import AddSection from "./components/AddSection";
import TableHeader from "./components/TableHeader";
import SectionList from "../../components/Table";
import Action from "../../components/Table/Actions";
import Widget from "../../components/Widget"
import ShowModal from "../../components/Modal/ShowModal";
import DeleteModal from "../../components/Modal/DeleteModal"
import EditSection from "./components/EditSection";


const Index = () => {
  const [filterValue, setFilterValue] = useState({});
  const renderActions = (record) => {

    return (
      <div className="d-flex flex-column popoverContent">
        <ShowModal
          ModalName="Edit_Section_Modal"
          buttonName="Edit"
          record={record}
        />
        <DeleteModal
          buttonName="Delete"
          apiName="deleteSection"
          requestType="DeleteUserRecord"
          recordName="sectionList"
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
      render: (record) => <span>{record.sectionId}</span>,
      key: "id",
    },
    {
      title: "Section Name",
      render: (record) => <span className="text-capitalize">{record.sectionName}</span>,
      key: "sectionName",
    },
    // {
    //   title: "Class Name",
    //   render: (record) => <span>{record.className}</span>,
    //   key: "className",
    // },
    // {
    //   title: "Strength",
    //   render: (record) => <span>{record.strength}</span>,
    //   key: "description",
    // },
    // {
    //   title: "Status",
    //   render: (record) => (
    //     <span style={{ textTransform: "capitalize" }}>{record.status}</span>
    //   ),
    //   key: "status",
    // },
    {
      title: "",
      render: (record) => <Action>{renderActions(record)}</Action>,
      key: "action",
      width: "50px",
    },
  ];

  return (
    <>
     
      <Widget header={<TableHeader />}>
        <SectionList
          apiName="getSection"
          recordName="sectionList"
          requestType="FetchUserRecord"
          columns={columns}
          scroll={true} 
          pagination={true}
          filterValue={filterValue}
        />
      </Widget>
      <AddSection />
      <EditSection/>
    </>
  );
};

export default Index;
