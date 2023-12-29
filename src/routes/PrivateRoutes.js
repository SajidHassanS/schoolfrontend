import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import Teacher from "../screens/Teacher";
import TeacherAdd from "../screens/Teacher/components/AddTeacherInfo";
import Student from "../screens/Student";
import StudentAdd from "../screens/Student/components/AddStudentInfo";
import Staff from "../screens/Staff";
import StaffAdd from "../screens/Staff/components/AddStaffInfo";
import Branch from "../screens/Branch";

import Class from "../screens/Class";
import Section from  "../screens/Section"
import Result from "../screens/Result"
import Leave from "../screens/Leave"
import Salary from "../screens/Salary"
import Noticeboard from "../screens/Noticeboard";
import Setting from "../screens/Setting";
import ProtectedRoutes from "./ProtectedRoutes";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/branch" element={<Branch />} />
       
        <Route path="/class" element={<Class />} />
        <Route path="/section" element={<Section />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher/add" element={<TeacherAdd />} />
        <Route path="/teacher/edit/:id/:branchId" element={<TeacherAdd />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student/add" element={<StudentAdd />} />
        <Route path="/student/edit/:id/:branchId" element={<StudentAdd />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/staff/add" element={<StaffAdd />} />
        <Route path="/staff/edit/:id/:branchId" element={<StaffAdd />} />
        <Route path="/attendence" element={<Dashboard />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/result" element={<Result />} />
        <Route path="/fee" element={<Dashboard />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/noticeboard" element={<Noticeboard />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
