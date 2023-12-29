import React, { useEffect, useState } from "react";
import BranchList from "../../components/Table";
import GraphCard from "../../components/GraphCard";
import TableHeader from "./components/TableHeader";
import AddBranch from "./components/AddBranch";
import Action from "../../components/Table/Actions";
import ShowModal from "../../components/Modal/ShowModal";
import EditBranch from "./components/EditBranch";
import DeleteModal from "../../components/Modal/DeleteModal";
import ResetPassword from "./components/ResetPassword";
import { renderStatusText } from "../../utils/commonFunctions";
import cardLogo from "../../assets/images/branch-locator.jpg";
import cardLogo_2 from "../../assets/images/branch-locator-G.jpg";
import cardLogo_3 from "../../assets/images/branch-locator-R.jpg";
import Widget from "../../components/Widget";
import { useDispatch, useSelector } from "react-redux";
import { DataGetAction } from "../../redux/actions/CommonHttp";
const Index = () => {
  const [filterValue, setFilterValue] = useState({});
  const dispatch = useDispatch();
  const branchProps = useSelector((state) => state.crudR);
  const { cardRecord } = branchProps;

  const renderActions = (record) => {
    return (
      <div className="d-flex flex-column popoverContent">
        <ShowModal
          ModalName="Edit_Branch_Modal"
          buttonName="Edit"
          record={record}
        />
        {record.status === "active" && (
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
        {record.status === "block" && (
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
          apiName="deleteBranch"
          requestType="DeleteRecord"
          recordName="branchList"
          method="PUT"
          title="Are you sure you want to delete this"
          content="This record will be deleted permanently"
          data={{ _id: record._id }}
        />

        <ShowModal
          ModalName="Reset_Password_Modal"
          buttonName="Reset Password"
          record={record}
        />
      </div>
    );
  };
  const columns = [
    {
      title: "Id",
      render: (record) => <span>{record.principalId}</span>,
      key: "branchId",
    },
    {
      title: "Branch Code",
      render: (record) => <span>{record.branchCode}</span>,
      key: "code",
    },
    {
      title: "Branch Name",
      render: (record) => (
        <span style={{ textTransform: "capitalize" }}>{record.branchName}</span>
      ),
      key: "branchName",
    },
    {
      title: "Principal Name",
      render: (record) => (
        <span style={{ textTransform: "capitalize" }}>{record.fullName}</span>
      ),
      key: "fullName",
    },
    {
      title: "Email",
      render: (record) => <span>{record.email}</span>,
      key: "email",
    },
    {
      title: "Address",
      render: (record) => (
        <span style={{ textTransform: "capitalize" }}>{record.address}</span>
      ),
      key: "address",
    },
    {
      title: "Phone Number",
      render: (record) => <span>{record.phoneNumber}</span>,
      key: "phoneNumber",
    },
    {
      title: "Teacher Strength",
      render: (record) => <span>{record.teacherStrength}</span>,
      key: "teacherStrength",
    },
    {
      title: "Student Strength",
      render: (record) => <span>{record.studentStrength}</span>,
      key: "studentStrength",
    },
    {
      title: "Staff Strength",
      render: (record) => <span>{record.staffStrength}</span>,
      key: "staffStrength",
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
      DataGetAction(
        "getBranch",
        "FetchRecord",
        { query: "all" },
        "",
        "",
        ""
      )
    );
  }; 
  useEffect(fetchData, []);
  return (
    <>
      <div className="row">
        <div className="mb-3  col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo}
            background="#5EB7ED"
            graphColor="#4EB0DE"
            CardHeading="Total Branches"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].total}
          />
        </div>
        <div className="mb-3  col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo_2}
            background="#AAED5E"
            graphColor="#6AC800"
            CardHeading="Active Branches"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].totalActive}
          />
        </div>
        <div className="mb-3 col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo_3}
            background="#ED5E5E"
            graphColor="#D14040"
            CardHeading="Blocked Branches"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].totalBlock}
          />
        </div>
      </div>

      <Widget header={<TableHeader />}>
        <BranchList
          apiName="getBranch"
          recordName="branchList"
          columns={columns}
          scroll={true}
          pagination={true}
          filterValue={filterValue}
        />
      </Widget>
      <AddBranch />
      <EditBranch />
      <ResetPassword />
    </>
  );
};

export default Index;
