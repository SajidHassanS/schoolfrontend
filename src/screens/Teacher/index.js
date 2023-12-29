import React, { useEffect } from "react";
import Card from "../../components/Card";
import { Row } from "antd"; 
import Widget from "../../components/Widget";
import TableHeader from "./components/TableHeader";
import { useDispatch, useSelector } from "react-redux";
import { DataGetAction } from "../../redux/actions/CommonHttp";
import DeleteModal from "../../components/Modal/DeleteModal";
import cardLogo from "../../assets/images/classroom.jpg";
import cardLogo_2 from "../../assets/images/classroom1.jpg";
import cardLogo_3 from "../../assets/images/classroom2.jpg";
import GraphCard from "../../components/GraphCard";

const Index = () => {
  const dispatch = useDispatch();
  const teacherProps = useSelector((state) => state.crudR);
  const { teachersList,cardRecord } = teacherProps;
  console.log("=======teachercardRecord",cardRecord)
  const fetchTeachersData = () => {
    dispatch(
      DataGetAction(
        "getTeacher",
        "FetchRecord",
        { query: "all" },
        "",
        "",
        "teachersList"
      )
    );
    dispatch(
      DataGetAction(
        "getTeacher",
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
            apiName="updateTeacherStatus" 
            requestType="EditRecord"
            recordName="teachersList"
            method="PUT"
            title="Are you sure to block this record"
            content="This record will be block"
            data={{ _id: record._id, status: "block" }}
          />
        )}
        {record.status === "block" && (
          <DeleteModal
            buttonName="Active"
            apiName="updateTeacherStatus"
            requestType="EditRecord"
            recordName="teachersList"
            method="PUT"
            title="Are you sure to active this record"
            content="This record will be active"
            data={{ _id: record._id, status: "active" }}
          />
        )}
        <DeleteModal
          buttonName="Delete"
          apiName="deleteTeacher"
          requestType="DeleteRecord"
          recordName="teachersList"
          content="This record will be deleted permanently"
          method="PUT"
          title="Are you sure to delete this record"
          data={{ _id: record._id }}
        />
      </>
    );
  };
  useEffect(fetchTeachersData, []);
  return (
    <>
      <div className="row">
        <div className="mb-3 col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo}
            background="#5EB7ED"
            graphColor="#4EB0DE"
            CardHeading="Total Teachers"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].total}
          />
        </div>
        <div className="mb-3  col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo_2}
            background="#AAED5E"
            graphColor="#6AC800"
            CardHeading="Active Teachers"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].totalActive}
          />
        </div>
        <div className="mb-3 col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo_3}
            background="#ED5E5E"
            graphColor="#D14040"
            CardHeading="Blocked Teachers"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].totalBlock}
          />
        </div>
      </div>
      <Widget header={<TableHeader />}>
        <Row>
          {teachersList &&
            teachersList.tableData &&
            teachersList.tableData.map((item, index) => (
              <Card
                name={item.fullName}
                status={item.status}
                designation={item.designation}
                branchName={item.branchName}
                item={item}
                index={index}
                pathname="teacher/edit"
                children={renderActions(item)}
              />
            ))}
        </Row>
      </Widget>
    </>
  );
};

export default Index;
