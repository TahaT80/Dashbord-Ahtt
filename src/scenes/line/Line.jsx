import React from "react";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <section className="h-[75vh]">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <LineChart />
    </section>
  );
};

export default Line;
