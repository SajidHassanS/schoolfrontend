import React, { useEffect, useState } from "react";
import NoticeList from "../../components/Table";
import GraphCard from "../../components/GraphCard";
import TableHeader from "./components/TableHeader";
import AddNotice from "./components/AddNotice";
import Action from "../../components/Table/Actions";
import ShowModal from "../../components/Modal/ShowModal";
import DeleteModal from "../../components/Modal/DeleteModal";
import EditNotice from "./components/EditNotice";
import Widget from "../../components/Widget";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { DataGetAction } from "../../redux/actions/CommonHttp";
import cardLogo from "../../assets/images/noticeboard.png";
const Index = () => {
  const dispatch = useDispatch();
  const notificationProps = useSelector((state) => state.crudR);
  const { cardRecord } = notificationProps;
  
  const [filterValue, setFilterValue] = useState({}); 
  const renderActions = (record) => {
    return (
      <div className="d-flex flex-column popoverContent">
        <ShowModal
          ModalName="Edit_Notice_Modal"
          buttonName="Edit"
          record={record}
        />
        <DeleteModal
          buttonName="Delete"
          apiName="deleteNotice"
          requestType="DeleteRecord"
          recordName="noticeList"
          method="DELETE"
          title="Are you sure to delete this?"
          content="This record will be deleted permanently"
          data={{ _id: record._id }}
        />
      </div>
    );
  };
  const columns = [
    {
      title: "Id",
      render: (record) => <span>{record.sNo}</span>,
      key: "sNo",
    },
    {
      title: "Title",
      render: (record) => (
        <span style={{ textTransform: "capitalize" }}>{record.title}</span>
      ),
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
      title: "Type",
      render: (record) => (
        <span style={{ textTransform: "capitalize" }}>{record.type}</span>
      ),
      key: "type",
    },
    {
      title: "Message",
      render: (record) => (
        <p
          style={{ textTransform: "capitalize" }}
          dangerouslySetInnerHTML={{ __html: record.message }}
        />
      ),
      key: "message",
    },
    {
      title: "Date",
      render: (record) => (
        <span>{moment(record.createdAt).format("YYYY-MM-DD")}</span>
      ),
      key: "date",
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
      DataGetAction("getNotice", "FetchRecord", { query: "all" }, "", "", "")
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
            padd="10px"
            CardHeading="Total Notices"
            CardCount={cardRecord  && cardRecord[0] && cardRecord[0].total}
          />
        </div>
        <div className="mb-3  col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo}
            background="#AAED5E"
            graphColor="#6AC800"
            padd="10px"
            CardHeading="Teacher Notices"
            CardCount={cardRecord  && cardRecord[0] && cardRecord[0].teacherNotices}
          />
        </div>
        <div className="mb-3 col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo}
            padd="10px"
            background="#ED5E5E"
            graphColor="#D14040"
            CardHeading="Student Notices"
            CardCount={cardRecord  && cardRecord[0] && cardRecord[0].studentNotices}
          />
        </div>
        <div className="mb-3 col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo}
            padd="10px"
            background="#ED5E5E"
            graphColor="#D14040"
            CardHeading="Staff Notices"
            CardCount={cardRecord  && cardRecord[0] && cardRecord[0].staffNotices}
          />
        </div>
      </div>
      <Widget header={<TableHeader />}>
        <NoticeList
          apiName="getNotice"
          recordName="noticeList"
          columns={columns}
          scroll={true}
          pagination={true}
          filterValue={filterValue}
        />
      </Widget>
      <AddNotice />
      <EditNotice />
    </>
  );
};

export default Index;
