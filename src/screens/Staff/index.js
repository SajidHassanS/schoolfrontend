import React, { useEffect } from "react";
import Card from "../../components/Card";
import { Row } from "antd";
import Widget from "../../components/Widget";
import TableHeader from "./components/TableHeader";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../../components/Modal/DeleteModal";
import { DataGetAction } from "../../redux/actions/CommonHttp";
import cardLogo from "../../assets/images/staff1.jpg";
import cardLogo_2 from "../../assets/images/staff2.jpg";
import cardLogo_3 from "../../assets/images/staff3.jpg";
import GraphCard from "../../components/GraphCard";
const Index = () => {
  const dispatch = useDispatch();
  const staffProps = useSelector((state) => state.crudR);
  const { staffList ,cardRecord } = staffProps;
  console.log("=======studentcardRecord",cardRecord)
  const fetchStaffData = () => {
    dispatch(
      DataGetAction(
        "getStaff",
        "FetchRecord",
        { query: "all" },
        "",
        "",
        "staffList"
      )
    );
    dispatch(
      DataGetAction(
        "getStaff",
        "FetchRecord",
        { query: "all" },
        "",
        "",
        ""
      )
    );
  };
  const renderActions = (record) => {
    return (
      <>
        {record.status === "active" && (
          <DeleteModal
            buttonName="Block"
            apiName="updateStaffStatus" 
            requestType="EditRecord"
            recordName="staffList"
            method="PUT"
            title="Are you sure to block this record"
            content="This record will be block"
            data={{ _id: record._id, status: "block" }}
          /> 
        )}
        {record.status === "block" && (
          <DeleteModal
            buttonName="Active"
            apiName="updateStaffStatus"
            requestType="EditRecord"
            recordName="staffList"
            method="PUT"
            title="Are you sure to active this record"
            content="This record will be active"
            data={{ _id: record._id, status: "active" }}
          />
        )}
        <DeleteModal
          buttonName="Delete"
          apiName="deleteStaff"
          requestType="DeleteRecord"
          recordName="staffList"
          content="This record will be deleted permanently"
          method="PUT"
          title="Are you sure to delete this record"
          data={{ _id: record._id }}
        />
      </>
    );
  };
useEffect(fetchStaffData,[])
  return (
    <>
      <div className="row">
        <div className="mb-3 col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo}
            background="#5EB7ED"
            graphColor="#4EB0DE"
            CardHeading="Total Staff"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].total}
          />
        </div>
        <div className="mb-3  col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo_2}
            background="#AAED5E"
            graphColor="#6AC800"
            CardHeading="Active Staff"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].totalActive}
          />
        </div>
        <div className="mb-3 col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo_3}
            background="#ED5E5E"
            graphColor="#D14040"
            CardHeading="Blocked Staff"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].totalBlock}
          />
        </div>
      </div>
    <Widget header={<TableHeader />}>
    <Row>
      {staffList &&
        staffList.tableData &&
        staffList.tableData.map((item, index) => (
          <Card
            name={item.fullName}
            status={item.status}
            role={item.role}
            branchName={item.branchName}
            item={item}
            index={index}
            pathname="staff/edit"
            children={renderActions(item)}
            />
            ))}
    </Row>
  </Widget>
            </>
  );
};

export default Index;
