import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const Graph = () => {
  const value = useLoaderData().data;
  //   const { name, total } = value.topic;
  // console.log(value[0].name);
  const data = [
    { name: value[0].name, Total: value[0].total, pv: 2400, amt: 2400 },
    { name: value[1].name, Total: value[1].total, pv: 2400, amt: 2400 },
    { name: value[2].name, Total: value[2].total, pv: 2400, amt: 2400 },
    { name: value[3].name, Total: value[3].total, pv: 2400, amt: 2400 },
  ];
  return (
    <div>
      <div className="flex justify-center my-20">
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 40,
              right: 20,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="Total" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
    </div>
  );
};

export default Graph;
