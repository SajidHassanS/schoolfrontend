import React, { useEffect } from "react";
import { Tabs } from "antd";
import BranchLeave from "./components/BranchLeave";
import TeacherLeave from "./components/TeacherLeave";
import StudentLeave from "./components/StudentLeave";
import StaffLeave from "./components/StaffLeave";
const Index = () => { 
 const items = [
    {
      key: "1",
      label: `Branch's Leave`,
      children: <BranchLeave type="Branch" />,
    },
    {
      key: "2",
      label: `Teachers Leave`,
      children: <TeacherLeave type="Teacher" />,
    },
    {
      key: "3",
      label: `Student's Leave`,
      children: <StudentLeave type="Student" />,
    },
    {
      key: "4",
      label: `Staff Leave`,
      children: <StaffLeave type="Staff" />,
    },
  ];
  return (
    <>
      <Tabs defaultActiveKey="1" type="card" size="large" items={items} />
    </>
  );
};

export default Index;
