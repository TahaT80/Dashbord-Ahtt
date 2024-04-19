import React from "react";

const ProgreesCircle = ({ Progress = "0.45", size = 50 }) => {
  const angle = Progress * 365;

  return (
    <section
      style={{
        background: `conic-gradient(rgb(21 128 61) 0deg ${angle}deg, rgb(99 102 241) ${angle}deg 360deg)`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      className={` rounded-full  relative flex items-center justify-center`}
    >
      <span
        style={{ width: `${size - 15}px`, height: `${size - 15}px` }}
        className={`absolute  bg-white dark:bg-slate-800 rounded-full  transition-all duration-700`}
      ></span>
    </section>
  );
};

export default ProgreesCircle;
