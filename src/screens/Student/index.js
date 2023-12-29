import React, { useEffect } from "react";
import Card from "../../components/Card";
import {  Row } from "antd";
import Widget from "../../components/Widget";
import TableHeader from "./components/TableHeader";
import { useDispatch, useSelector } from "react-redux";
import { DataGetAction } from "../../redux/actions/CommonHttp";
import DeleteModal from "../../components/Modal/DeleteModal";
import cardLogo from "../../assets/images/stud1.png";
import cardLogo_2 from "../../assets/images/stud2.png";
import cardLogo_3 from "../../assets/images/stud3.png";
import GraphCard from "../../components/GraphCard";

const Index = () => {
  const dispatch = useDispatch();
  const studentProps = useSelector((state) => state.crudR);
  const { studentsList ,cardRecord} = studentProps;
  console.log("=======studentsList",studentsList)

  const fetchStudentsData = () => {
    dispatch(
      DataGetAction(
        "getStudent",
        "FetchRecord",
        { query: "all" },
        "",
        "",
        "studentsList"
      ) 
    );
    dispatch(
      DataGetAction(
        "getStudent",
        "FetchRecord",
        { query: "all" },
        "",
        "",
        ""
      )
    );

  };
  const renderAction = (record) => {
    return(  <>
      {record.status === "active" && (
        <DeleteModal
          buttonName="Block"
          apiName="updateStudentStatus"
          requestType="EditRecord"
          recordName="studentsList"
          method="PUT"
          title="Are you sure to block this record"
          content="This record will be block"
          data={{ _id: record._id, status: "block" }}
        />
      )}
      {record.status === "block" && (
        <DeleteModal
          buttonName="Active"
          apiName="updateStudentStatus"
          requestType="EditRecord"
          recordName="studentsList"
          method="PUT"
          title="Are you sure to active this record"
          content="This record will be active"
          data={{ _id: record._id, status: "active" }}
        />
      )}
      <DeleteModal
        buttonName="Delete"
        apiName="deleteStudent"
        requestType="DeleteRecord"
        recordName="studentsList"
        content="This record will be deleted permanently"
        method="PUT"
        title="Are you sure to delete this record"
        data={{ _id: record._id }}
      />
    </>)
  };
  useEffect(fetchStudentsData, []);
  return (
    <>
      <div className="row">
        <div className="mb-3 col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo}
            background="#5EB7ED"
            graphColor="#4EB0DE"
            CardHeading="Total Students"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].total}
          />
        </div>
        <div className="mb-3  col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo_2}
            background="#AAED5E"
            graphColor="#6AC800"
            CardHeading="Active Students"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].totalActive}
          />
        </div>
        <div className="mb-3 col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo_3}
            background="#ED5E5E"
            graphColor="#D14040"
            CardHeading="Blocked Students"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].totalBlock}
          />
        </div>
      </div>
      <Widget header={<TableHeader />}>
      <Row>
          {studentsList &&
            studentsList.tableData &&
            studentsList.tableData.map((item, index) => (
              <Card
                name={item.fullName}
                status={item.status}
                className={item.className}
                branchName={item.branchName}
                item={item}
                index={index}
                pathname="student/edit"
                children={renderAction(item)}
              />
            ))}
        </Row>

      </Widget>
    </>
  );
};

export default Index;
