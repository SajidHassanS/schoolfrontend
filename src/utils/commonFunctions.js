import { Tag } from "antd";

export const renderStatusText = (status) => {
  if (status == "active") {
    return (
      <p style={{ color: "#6AC800", textDecoration: "underline" }}>Active</p>
    );
  } else if (status == "block") {
    return (
      <p style={{ color: "#D20000", textDecoration: "underline" }}>Block</p>
    );
  }
};
export const renderStatusTag = (status) => {
  if (status == "active") {
    return <Tag color="green">Active</Tag>;
  } else if (status == "block") {
    return <Tag color="red">Block</Tag>;
  }
};
