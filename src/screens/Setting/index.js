import { Col, Row } from "antd";
import React from "react";
import ResetPassword from "./components/ResetPassword";
import EditSetting from "./components/EditSetting";
import AddTaxRates from "./components/AddTaxRates";
import EditTaxRates from "./components/EditTaxRates";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import TaxRateCard from "./components/TaxRateCard";
import LeaveSettingCard from "./components/LeaveSettingCard";
import AddLeaveSettings from "./components/AddLeaveSettings";
import EditLeaveSettings from "./components/EditLeaveSettings";

const Index = () => {
  return (
    <Row>
      <Col xl={24} lg={24} md={24} sm={24} xs={24} className="mb-3">
        <Header />
      </Col>
      <Col xl={8} lg={8} md={12} sm={18} xs={24} className="pe-2">
        <ProfileCard />
      </Col>
      <Col xl={8} lg={8} md={12} sm={18} xs={24} className="pe-2">
        <LeaveSettingCard />
      </Col>
      <Col xl={8} lg={8} md={12} sm={18} xs={24} className="pe-2">
        <TaxRateCard />
      </Col>
      
      {/* include modals */}
      <ResetPassword />
      <EditSetting />
      <AddTaxRates />
      <EditTaxRates />
      <AddLeaveSettings/>
      <EditLeaveSettings/>
    </Row>
  );
};

export default Index;
