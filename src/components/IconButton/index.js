import { Button } from "antd";
import React from "react";
import { FaPlus } from "react-icons/fa";

const IconButton = ({ buttonName, icon = <FaPlus size="18px" />, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="open-modal-button font-18 font-sans-bold py-0"
      style={{ width: "100px" }}
    >
      <div className="d-flex align-items-center w-100 justify-content-center gap-2">
        <span>{icon}</span>
        <span>{buttonName}</span>
      </div>
    </Button>
  );
};

export default IconButton;
