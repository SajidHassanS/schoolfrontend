import { Col, Row } from "antd";
import {
  CaretRightFilled,
  CalendarFilled,
  ArrowUpOutlined,
} from "@ant-design/icons";
import React from "react";
import SynchronizedAreaChart from "./components/SynchronizedChart";

import GraphCard from "../../components/GraphCard";

import cardLogo from "../../assets/images/branch-locator.jpg";
import cardLogo_2 from "../../assets/images/branch-locator-G.jpg";
import cardLogo_3 from "../../assets/images/branch-locator-R.jpg";

// import Widget from "../../components/Widget";
import { useSelector } from "react-redux";
//import Widget from "../../components/Widget";

// import Upcoming from "./components/Upcoming";

const Index = () => {
  const branchProps = useSelector((state) => state.crudR);
  const { cardRecord } = branchProps;
  return (
    <>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col
          span={14}
          style={{
            backgroundColor: "white",
            margin: "10px",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <Row>
            <Col span={14}>
              
              <h5>Welcome back</h5>
              <div style={{ marginTop: "10px" }}>
                <p>Since your last login on the system, there were:</p>
              </div>
              <Row style={{ marginTop: "10px" }}>
                <Col span={12}>
                  <CaretRightFilled
                    style={{ fontSize: "26px", color: "#373FD0" }}
                  />{" "}
                  21 new courses
                </Col>
                <Col span={12}>
                  <CaretRightFilled
                    style={{ fontSize: "26px", color: "#373FD0" }}
                  />
                  45 new messageges
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col span={12}>
                  <CaretRightFilled
                    style={{ fontSize: "26px", color: "#373FD0" }}
                  />
                  21 new courses
                </Col>
                <Col span={12}>
                  <CaretRightFilled
                    style={{ fontSize: "26px", color: "#373FD0" }}
                  />
                  45 new messageges
                </Col>
              </Row>
            </Col>
            <Col span={10}></Col>
          </Row>
        </Col>

        <Col
          span={9}
          style={{
            backgroundColor: "white",
            margin: "10px",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <Row>
            <Col span={20}>
              <h5>Upcoming</h5>
              <Row style={{ marginTop: "10px" }}>
                <Col span={12}>
                  <div style={{ display: "flex", fontSize: "12px" }}>
                    <CalendarFilled
                      style={{
                        fontSize: 24,
                        border: "1px solid #5AD5CF",
                        color: "white",
                        backgroundColor: " #5AD5CF",
                        borderRadius: "50%",
                        padding: "5px",
                        marginRight: "8px",
                      }}
                    />
                    <p>Team meeting 10AM-11AM</p>
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ display: "flex", fontSize: "12px" }}>
                    <CalendarFilled
                      style={{
                        fontSize: 24,
                        border: "1px solid #5AD5CF",
                        color: "white",
                        backgroundColor: " #5AD5CF",
                        borderRadius: "50%",
                        padding: "5px",
                        marginRight: "8px",
                      }}
                    />
                    <p>Team meeting 10AM-11AM</p>
                  </div>
                </Col>
              </Row>

              <Row style={{ marginTop: "10px" }}>
                <Col span={12}>
                  <div style={{ display: "flex", fontSize: "12px" }}>
                    <CalendarFilled
                      style={{
                        fontSize: 24,
                        color: "white",
                        backgroundColor: " #5AD5CF",
                        border: "1px solid #5AD5CF",
                        borderRadius: "50%",
                        padding: "5px",
                        marginRight: "8px",
                      }}
                    />
                    <p>Team meeting 10AM-11AM</p>
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ display: "flex", fontSize: "12px" }}>
                    <CalendarFilled
                      style={{
                        fontSize: 24,
                        color: "white",
                        backgroundColor: " #5AD5CF",
                        border: "1px solid #5AD5CF",
                        borderRadius: "50%",
                        padding: "5px",
                        marginRight: "8px",
                      }}
                    />
                    <p>Team meeting 10AM-11AM</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col
              span={4}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <h5>Today</h5>

              <ArrowUpOutlined rotate={45}
                style={{
                  fontSize: 28,
                  color: "white",
                  backgroundColor: " #373FD0",
                  border: "1px solid #373FD0",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="row my-3">
        <div className="mb-3  col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo}
            background="#5EB7ED"
            graphColor="#4EB0DE"
            CardHeading="Total Teachers"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].total}
          />
        </div>
        <div className="mb-3  col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo_2}
            background="#E2DC42"
            graphColor="#ADA820"
            CardHeading="Total Students"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].totalActive}
          />
        </div>
        <div className="mb-3 col-lg-3 col-md-8 col-sm-12 col-xs-12">
          <GraphCard
            IconImage={cardLogo_2}
            background="#AAED5E"
            graphColor="#6AC800"
            CardHeading="Total Staff"
            CardCount={cardRecord && cardRecord[0] && cardRecord[0].totalBlock}
          />
        </div>
      </div>

      <Row>
        <Col xl={24} lg={24} md={24} sm={24}>
          <SynchronizedAreaChart />
        </Col>
      </Row>
    </>
  );
};

export default Index;
