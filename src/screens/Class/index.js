import React, { useEffect, useState } from "react";
import GraphCard from "../../components/GraphCard";
import TableHeader from "../Class/components/TableHeader";
import CLassList from "../../components/Table";
import ShowModal from "../../components/Modal/ShowModal";
import AddClass from "./components/AddClass";
import Action from "../../components/Table/Actions";
import EditClass from "./components/EditClass";
import Widget from "../../components/Widget";
import cardLogo from "../../assets/images/classroom.jpg";
import cardLogo_2 from "../../assets/images/classroom1.jpg";
import cardLogo_3 from "../../assets/images/classroom2.jpg";
import { renderStatusText } from "../../utils/commonFunctions";
import DeleteModal from "../../components/Modal/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { DataGetAction } from "../../redux/actions/CommonHttp";
import ViewSectionModal from "./components/ViewSectionModal";


const Index = () => {
  const dispatch = useDispatch();
  const classProps = useSelector((state) => state.crudR);
  const { cardRecord } = classProps;
  const [filterValue, setFilterValue] = useState({});
 
  const renderActions = (record) => {
    return (
      <div className="d-flex flex-column popoverContent">
        <ShowModal
          ModalName="Edit_Class_Modal"
          buttonName="Edit"
          record={record}
        />
        {record.status === "active" && (
          <DeleteModal
            buttonName="Block"
            apiName="updateClassStatus"
            requestType="EditRecord"
            recordName="classList"
            method="PUT"
            title="Are you sure to block"
            content="This record will be block"
            data={{ _id: record._id, status: "block" }}
          />
        )}
        {record.status === "block" && (
          <DeleteModal
            buttonName="Active"
            apiName="updateClassStatus"
            requestType="EditRecord"
            recordName="classList"
            method="PUT"
            title="Are you sure to active this record"
            content="This record will be active"
            data={{ _id: record._id, status: "active" }}
          />
        )}

        <DeleteModal
          buttonName="Delete"
          apiName="deleteClass"
          requestType="DeleteRecord"
          recordName="classList"
          method="PUT"
          title="Are you sure you want to delete this"
          content="This record will be deleted permanently"
          data={{ _id: record._id }}
        />

        {/* <ShowModal
          ModalName="Reset_Password_Modal"
          buttonName="Reset Password"
          record={record}
        /> */}
      </div>
    );
  };
  const columns = [
    {
      title: "Id",
      render: (record) => <span>{record.classId}</span>,
      key: "classId",
    },
    {
      title: "Branch Name",
      render: (record) => (
        <span style={{ textTransform: "capitalize" }}>{record.branchName}</span>
      ),
      key: "branchName",
    },
    {
      title: "Class Name",
      render: (record) => (
        <span style={{ textTransform: "capitalize" }}>{record.className}</span>
      ),
      key: "className",
    },
    {
      title: "Description",
      render: (record) => (
        <span
          style={{
            textTransform: "capitalize",
            cursor: "pointer",
            color: "blue",
            textDecoration: "underline",
            fontSize:"5px"
          }}
        >
          <ShowModal
            ModalName="View_Section_Modal"
            buttonName="View"
            record={record}
          />
        </span>
      ),
      key: "section",
    },
    {
      title: "Status",
      render: (record) => (
        <span style={{ textTransform: "capitalize" }}>
          {renderStatusText(record.status)}
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
  const fetchData = () => {
    dispatch(
      DataGetAction("getClass", "FetchRecord", { query: "all" }, "", "", "")
    );
  };
  useEffect(fetchData, []);
  return (
    <>
      <div className="row">
        <div className="mb-3 col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo}
            background="#5EB7ED"
            graphColor="#4EB0DE"
            CardHeading="Total Classes"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].total}
          />
        </div>
        <div className="mb-3  col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo_2}
            background="#AAED5E"
            graphColor="#6AC800"
            CardHeading="Active Classes"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].totalActive}
          />
        </div>
        <div className="mb-3 col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo_3}
            background="#ED5E5E"
            graphColor="#D14040"
            CardHeading="Blocked Classes"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].totalBlock}
          />
        </div>
      </div>
      <Widget header={<TableHeader />}>
        <CLassList
          apiName="getClass"
          recordName="classList"
          columns={columns}
          scroll={true}
          pagination={true}
          filterValue={filterValue}
        />
      </Widget>
      <AddClass />
      <EditClass />
      <ViewSectionModal/>
    </>
  );
};

export default Index;
