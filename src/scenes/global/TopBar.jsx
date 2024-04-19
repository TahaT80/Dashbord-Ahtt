import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";

const TopBar = () => {
  const [dark, setdark] = useState("off");
  function DarkMode() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <section className="flex justify-between p-2 dark:text-white transition-all duration-700">
      {/* search bar */}
      <div className="flex dark:bg-slate-800 rounded-md p-1 justify-center items-center border hover:!bg-slate-500">
        <input
          id="search"
          type="search"
          placeholder="search"
          className="px-2 placeholder:font-semibold dark:placeholder:text-white placeholder:text-black dark:bg-slate-800 outline-none placeholder:pl-1 hover:!bg-slate-500"
        />
        <label for="search" className="cursor-pointer pr-1">
          <FaSearch />
        </label>
      </div>

      {/* icon */}
      <div className="flex text-xl gap-2 p-1 items-center">
        <div onClick={DarkMode} className="items-center flex">
          {dark === "off" && (
            <button onClick={() => setdark("on")}>
              <MdDarkMode />
            </button>
          )}
          {dark === "on" && (
            <button onClick={() => setdark("off")}>
              <MdLightMode />
            </button>
          )}
        </div>
        <div>
          <IoIosNotifications />
        </div>
        <div>
          <IoMdSettings />
        </div>
        <div>
          <IoMdPerson />
        </div>
      </div>
    </section>
  );
};

export default TopBar;
