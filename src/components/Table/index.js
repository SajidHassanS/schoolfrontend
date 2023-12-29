import React, { useEffect, useState } from "react";
import { Table, message } from "antd";
import { DataGetAction } from "../../redux/actions/CommonHttp";
import { useDispatch, useSelector } from "react-redux";
const Index = ({
  columns,
  scroll,
  pagination,
  apiName,
  recordName,
  role,
  requestType = "FetchRecord",
  callOnCondition, 
  customQuery = {},
  filterValue = {},
  tempData,
}) => {
  const dispatch = useDispatch();
  const CurdProps = useSelector((state) => state.crudR);
 
  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(10);

  const getNextPageData = (page, pageSize) => {
    setPageNumber(page);
  };
  const getSizePageChangeData = (current, size) => {
    setLimit(size);
  };
  const fetchList = () => {
    let query = {
      query: "all",
      role,
      ...customQuery,
      ...filterValue,
      pageNumber,
      limit,
    };
    dispatch(
      DataGetAction(
        apiName,
        requestType,
        query,
        "StartSpinner",
        "",
        recordName
      )
    );
  };
  useEffect(fetchList, [callOnCondition, pageNumber, limit]);

  const { FetchError, FetchSpin, FetchMessage } = CurdProps;

  if (FetchError) {
    message.error(FetchMessage);
    dispatch({
      type: "ResetAll_State",
    });
  }

  const totalNum =
    CurdProps[recordName] &&
    CurdProps[recordName] &&
    CurdProps[`${recordName}_total`];
  return (
    <Table
      className="BasicTable table-responsive "
      columns={columns}
      dataSource={CurdProps[recordName] && CurdProps[recordName].tableData}
      scroll={scroll}
      pagination={{
        total: totalNum,
        current: pageNumber,
        onChange: getNextPageData,
        onShowSizeChange: getSizePageChangeData,
      }}
      loading={FetchSpin}
    />
  );
};

export default Index;
