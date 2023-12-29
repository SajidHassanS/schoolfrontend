import { Avatar, Col, Tag } from "antd";
import React from "react";
import dummyImage from "../../assets/images/dummy.png";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { renderStatusTag } from "../../utils/commonFunctions";
import { useNavigate } from "react-router-dom";
import Action from "../../components/Table/Actions";
const Card = ({
  name,
  status,
  designation,
  className,
  section,
  role,
  branchName,
  item,
  index,
  pathname,
  children,
}) => {
  const navigate = useNavigate();
  const handleClick = (_id, branchId) => {
    navigate(`/${pathname}/${_id}/${branchId}`);
  };
  return (
    <Col key={index} xl={6} lg={6} md={8} sm={24} xs={24} className="pe-3">
      <div className="card shadow-sm px-3 pb-3 pt-2">
        <div className="d-flex flex-column ">
          <div className="d-flex flex-row justify-content-between align-items-center">
            {status ? renderStatusTag(status) : "status"}
            <div style={{ width: "16px" }}>{<Action>{children}</Action>}</div>
          </div>
          <div
            class="card-body p-0 d-flex flex-column align-items-center justify-content-center"
            onClick={() => handleClick(item._id, item.branchId)}
          >
            <Avatar className="shadow-sm mb-2" size={100} src={dummyImage} />
            {name && (
              <h6 className="font-18 font-sans-bold text-capitalize">
                {name ? name : "name"}
              </h6>
            )}

            {role && (
              <h6 className="font-14 font-sans-regular text-capitalize text-color-545454">
                {role ? role : "role"}
              </h6>
            )}
            {designation && (
              <h6 className="font-14 font-sans-regular text-capitalize text-color-545454">
                {designation ? designation : "designation"}
              </h6>
            )}
             {className && (
              <h6 className="font-14 font-sans-regular text-capitalize text-color-545454">
                Class: {className ? className : "className"}
              </h6>
            )}

            {section && (
              <h6
                style={{ color: "#2DB7F5" }}
                className="font-14 font-sans-regular text-capitalize "
              >
                {section ? section : "section"}
              </h6>
            )}
           
            {branchName && (
              <h6
                style={{ color: "#2DB7F5" }}
                className="font-14 font-sans-regular text-capitalize "
              >
                {branchName ? branchName : "branchName"}
              </h6>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Card;
