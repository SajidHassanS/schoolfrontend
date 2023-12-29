import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Widget from "../../../components/Widget";

const data = [
  { name: "Jan", uv: 0, price: 80, amt: 0 },
  { name: "Feb", uv: 20, price: 20, amt: 20 },
  { name: "March", uv: 40, price: 40, amt: 40 },
  { name: "April", uv: 60, price: 60, amt: 60 },
  { name: "May", uv: 80, price: 40, amt: 80 },
  { name: "June", uv: 40, price: 20, amt: 40 },
  { name: "July", uv: 20, price: 40, amt: 20 },
  { name: "August", uv: 20, price: 60, amt: 20 },
  { name: "September", uv: 40, price: 40, amt: 40 },
  { name: "October", uv: 80, price: 20, amt: 80 },
  { name: "November", uv: 40, price: 40, amt: 60 },
  { name: "December", uv: 20, price: 60, amt: 40 },
];
const SynchronizedAreaChart = () => (
   <Widget>
 
 <ResponsiveContainer width="100%">
    <div>
      <h5 className="mb-4">Monthly Analysis</h5>
      <div className="mb-4">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            data={data}
            syncId="anyId"
            margin={{ top: 10, right: 0, left: -15, bottom: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="price"
              fillOpacity={1}
              stroke="#E28888"
              fill="#D2F5AA"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  </ResponsiveContainer>
  </Widget>
);

export default SynchronizedAreaChart;
