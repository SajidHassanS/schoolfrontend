import { Button } from "antd/es/radio";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
const ShowModal = ({
  name,
  showButton = false,
  buttonName,
  icon,
  record,
  ModalName,
  btnStyle,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      {showButton && (
        <Button
          onClick={() => {
            dispatch({
              type: "Show_Modal",
              ModalName: ModalName,
              payload: record,
            });
          }}
          style={{ width: "100px", height: "32px" }}
          className="open-modal-button  font-18 font-sans-bold"
        >
          <div className=" d-flex align-items-center justify-content-center gap-2">
            <span style={{ marginTop: "-4px" }}>
              {icon || <FaPlus size="18px" />}
            </span>
            <span>{buttonName}</span>
          </div>
        </Button>
      )}
      {!showButton && (
        <span
          className="font-18 font-sans-regular"
          onClick={() => {
            return dispatch({
              type: "Show_Modal",
              ModalName: ModalName,
              payload: record,
            });
          }}
        >
          {buttonName}
        </span>
      )}
    </div>
  );
};

export default ShowModal;
