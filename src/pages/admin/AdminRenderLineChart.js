import React from "react";
import { LineChart, Line, ResponsiveContainer, PieChart, Pie } from "recharts";

const AdminRenderLineChart = () => {
  var dataList = [];
  console.log("Cagrt porps");
  //   data.map((value, key) => {
  //     dataList.push({ name: key, value });
  //   });
  //   console.log("Reviced data ;ist", dataList);

  return (
    <ResponsiveContainer>
      {/* <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
      </PieChart> */}
    </ResponsiveContainer>
  );
};

export default AdminRenderLineChart;
