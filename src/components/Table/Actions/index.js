import React from "react";
import { Popover } from "antd";

import { BiDotsVerticalRounded } from "react-icons/bi";
const Index = ({ children }) => {
  const content = <div className="d-flex flex-column">{children}</div>;
  return (
    <Popover placement="bottom" content={content} title="" trigger="focus">
      <button
        style={{
          background: "none",
          padding: "0px",
          boxShadow: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <BiDotsVerticalRounded style={{ fontSize: "24px" }} />
      </button>
    </Popover>
  );
};

export default Index;
