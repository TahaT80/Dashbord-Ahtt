import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="font-semibold mb-1 text-black dark:text-white">{title}</h2>
      <h5 className=" text-green-700">{subtitle}</h5>
    </div>
  );
};

export default Header;
