import { Avatar } from "antd";
import React from "react";

import { Area, AreaChart, ResponsiveContainer } from "recharts";
const GraphCard = ({
  width = "",
  height = "110px",
  background = "background",
  borderRadius = "10px",
  graphColor = "graphColor",
  IconImage = { IconImage },
  CardHeading,
  CardCount = "0",
  padd = "0px",
}) => {
  const propertiesData = [
    { name: "Page A", properties: 400 },
    { name: "Page B", properties: 900 },
    { name: "Page C", properties: 1400 },
    { name: "Page D", properties: 400 },
    { name: "Page D", properties: 700 },
    { name: "Page H", properties: 1000 },
    { name: "Page K", properties: 1350 },
  ];
  return (
    <div
      style={{
        width: width,
        height: height,
        background: background,
        borderRadius: borderRadius,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="w-100" style={{ height: "100px" }}>
        <ResponsiveContainer width="100%" height={75}>
          <AreaChart
            data={propertiesData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            style={{ paddingTop: "40px" }}
          >
            <Area
              dataKey="properties"
              strokeWidth={0}
              stackId="2"
              stroke={graphColor}
              fill={graphColor}
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div
        style={{ position: "absolute", height: height }}
        className="w-100 d-flex align-items-center justify-content-between px-3"
      >
        <div
          className=""
          style={{
            width: "210px",
            height: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h3
            className="font-sans-bold pt-2 font-14 text-uppercase"
            style={{ color: "#FFFFFF" }}
          >
            {CardHeading}
          </h3>
          <h3
            className="font-sans-bold font-34 overlay"
            style={{ color: "#FFFFFF" }}
          >
            {CardCount || 0}
          </h3>
        </div>
        <div className="">
          <Avatar
            size={80}
            src={IconImage}
            style={{ padding: padd }}
            className="d-flex align-items-center shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
