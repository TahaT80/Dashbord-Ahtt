import React from "react";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";

const Geography = () => {
  return (
    <section className="w-full">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <div className="h-[70vh] border dark:border-white border-slate-500">
        <GeographyChart />
      </div>
    </section>
  );
};

export default Geography;
