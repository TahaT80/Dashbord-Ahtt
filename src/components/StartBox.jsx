import React from "react";
import ProgreesCircle from "./ProgreesCircle";
const StartBox = ({ title, subtitle, icon, progress, increase }) => {
  return (
    <section className="w-full">
      <div className="flex justify-between">
        <div>
          {icon}
          <h4 className="font-semibold text-black dark:text-white">{title}</h4>
          <h5 className=" text-green-700">{subtitle}</h5>
        </div>
        <div className="flex justify-between items-center flex-col">
          <ProgreesCircle progress={progress} />
          <h5 className="italic text-green-700">{increase}</h5>
        </div>
      </div>
    </section>
  );
};

export default StartBox;
