import { Form, Input, Select, Button, DatePicker } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGetAction } from "../../redux/actions/CommonHttp";
import { HiSearch } from "react-icons/hi";
const { RangePicker } = DatePicker;

const Filters = ({
  searchPlaceholder,
  statusPlaceholder,
  options,
  selectKey = "value",
  searchKey = "name",
  SpinnerCaseName = "StartSpinner",
  recordName,
  searchWidth = "200px",
  selectWidth = "180px",
  apiName,
  requestType = "FetchRecord",
  buttonName = "Search",
  selectStatus,
  className,
  selectDateInput,
  searchInput,
  selectBranch,
  selectMonth,
  selectClass,
  selectrangePicker,
}) => {
  const dispatch = useDispatch();
  const filterprops = useSelector((state) => state.crudR);
  const { selectBranchList, selectClassList } = filterprops;
  const fetData = () => {
    if (selectBranch) {
      dispatch(
        DataGetAction(
          "getBranchName",
          "FetchRecord",
          { query: "all" },
          "",
          "",
          "selectBranchList"
        )
      );
    }

    if (selectClass) {
      dispatch(
        DataGetAction(
          "getClassName",
          "FetchSingleRecord",
          { query: "all" },
          "",
          "",
          "selectClassList"
        )
      );
    }
  };

  const onFinish = (values) => {
    console.log("=====values", values);
    if (values && (values.search || values.select || values.rangePicker)) {
      dispatch(
        DataGetAction(
          apiName,
          requestType,
          {
            [selectKey]: values.select,
            [searchKey]: values.search,
            key: "status",
            startDate: values.rangePicker[0],
            endDate: values.rangePicker[1],
          },
          SpinnerCaseName,
          "",
          recordName
        )
      );
    } else {
      dispatch(
        DataGetAction(
          apiName,
          requestType,
          { query: "all" },
          SpinnerCaseName,
          "",
          recordName
        )
      );
    }
  };
  useEffect(fetData, []);
  return (
    <Form onFinish={onFinish}>
      <div
        className={`${className} d-flex align-items-center  gap-2 flex-wrap`}
      >
        {selectDateInput && (
          <Form.Item className="mb-0" name="search">
            <DatePicker style={{ width: searchWidth }} />
          </Form.Item>
        )}
        {selectrangePicker && (
          <Form.Item className="mb-0" name="rangePicker">
            <RangePicker style={{ width: "250px" }} />
          </Form.Item>
        )}
        {searchInput && (
          <Form.Item className="mb-0" name="search">
            <Input
              placeholder={searchPlaceholder}
              style={{ width: searchWidth }}
            />
          </Form.Item>
        )}
        {selectBranch && (
          <Form.Item className="mb-0" name="select">
            <Select
              placeholder="Select Branch"
              allowClear={true}
              style={{ width: selectWidth }}
            >
              {selectBranchList &&
                selectBranchList.map((item) => (
                  <Select.Option
                    style={{ textTransform: "capitalize" }}
                    value={item._id}
                  >
                    {item.branchName}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
        )}
        {selectClass && (
          <Form.Item className="mb-0" name="select">
            <Select
              placeholder="Select Class"
              allowClear={true}
              style={{ width: selectWidth }}
            >
              {selectClassList &&
                selectClassList.map((item) => (
                  <Select.Option
                    style={{ textTransform: "capitalize" }}
                    value={item._id}
                  >
                    {item.fullName}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
        )}
        {selectMonth && (
          <Form.Item className="mb-0" name="select">
            <Select
              placeholder="Select month"
              allowClear={true}
              style={{ width: selectWidth }}
            >
              <Select.Option value="january">January</Select.Option>
              <Select.Option value="feburary">Feburary</Select.Option>
              <Select.Option value="march">March</Select.Option>
              <Select.Option value="april">April</Select.Option>
              <Select.Option value="may">May</Select.Option>
              <Select.Option value="june">June</Select.Option>
              <Select.Option value="july">July</Select.Option>
              <Select.Option value="august">August</Select.Option>
              <Select.Option value="september">September</Select.Option>
              <Select.Option value="october">October</Select.Option>
              <Select.Option value="november">November</Select.Option>
              <Select.Option value="december">December</Select.Option>
            </Select>
          </Form.Item>
        )}
        {selectStatus && (
          <Form.Item className="mb-0" name="select">
            <Select
              placeholder={statusPlaceholder}
              allowClear={true}
              style={{ width: selectWidth }}
            >
              {options &&
                options.map((item) => (
                  <Select.Option value={item.value}>{item.label}</Select.Option>
                ))}
            </Select>
          </Form.Item>
        )}

        <Form.Item className="mb-0">
          <Button
            htmlType="submit"
            className="open-modal-button font-18 font-sans-bold py-0"
            style={{ width: "100px", height: "" }}
          >
            <div className="d-flex align-items-center w-100 justify-content-center gap-2">
              <span>
                <HiSearch />
              </span>
              <span>{buttonName}</span>
            </div>
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Filters;
