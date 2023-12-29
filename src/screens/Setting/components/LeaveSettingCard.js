import React, { useEffect } from "react";
import { Card} from "antd";
import { FaEdit } from "react-icons/fa";
import ShowModal from "../../../components/Modal/ShowModal";
import { useDispatch, useSelector } from "react-redux";
import { DataGetAction } from "../../../redux/actions/CommonHttp";
import TitleHead from "../../../components/Title";
const LeaveSettingCard = () => {
  const dispatch = useDispatch();
  const LeaveProps = useSelector((state) => state.crudR);
  const { leaves } = LeaveProps;
  const fetchSettings = () => {
      dispatch(
        DataGetAction(
          "getLeaveSetting",
          "FetchLeaveSettRecord",
          { query: "all" },
          "",
          "",
          ""
        )
      );  
  };
  useEffect(fetchSettings, []);
  return (
    <Card
      bodyStyle={{
        border: "1px solid #E8E8E8",
        borderRadius: "4px",
      }}
    >
      {/*card Header */}
      <div className="w-100 d-flex justify-content-between">
        <div className="d-flex align-items-center" style={{ gap: "25px" }}>
          <TitleHead title="Leaves" />
        </div>
        {leaves && leaves != "" ? (
          <ShowModal
            ModalName="Edit_Leave_Setting_Modal"
            buttonName={
              <FaEdit
                className="settingModalicon"
                size={25}
                style={{ color: "#50B8E7" }}
              />
            }
            record={leaves}
          />
        ) : (
          <ShowModal
            ModalName="Add_Leave_Setting_Modal"
            buttonName="New"
            showButton={true}
          />
        )}
      </div>
      {/* card Body */}
      <div className="mt-3">
        <div className="d-flex flex-column mt-3" style={{ gap: "8px" }}>
          <span
            className=" font-sans-bold "
            style={{ color: "#003366", fontSize: "16px" }}
          >
            Casual Leaves
          </span>

          <p
            style={{
              border: "1px solid #545454",
              borderRadius: "4px",
              padding: "8px",
              height: "40px",
            }}
          >
            {(leaves && leaves.casualLeaves) || ""}
          </p>
        </div>
        <div className="d-flex flex-column mt-3" style={{ gap: "8px" }}>
          <span
            className=" font-sans-bold "
            style={{ color: "#003366", fontSize: "16px" }}
          >
            Medical Leaves
          </span>

          <p
            style={{
              border: "1px solid #545454",
              borderRadius: "4px",
              padding: "8px",
              height: "40px",
            }}
          >
            {(leaves && leaves.medicalLeaves) || ""}
          </p>
        </div>
        <div className="d-flex flex-column mt-3" style={{ gap: "8px" }}>
          <span
            className=" font-sans-bold "
            style={{ color: "#003366", fontSize: "16px" }}
          >
            Annual Leaves
          </span>

          <p
            style={{
              border: "1px solid #545454",
              borderRadius: "4px",
              padding: "8px",
              height: "40px",
            }}
          >
            {(leaves && leaves.annualLeaves) || ""}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default LeaveSettingCard;
