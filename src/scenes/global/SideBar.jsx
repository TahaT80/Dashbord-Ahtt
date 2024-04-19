import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaHandsHelping } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { FaMapMarked } from "react-icons/fa";

const Item = ({ titel, to, icon, selected, setSelected }) => {
  return (
    <Link to={to}>
      <MenuItem
        className="hover:text-indigo-500"
        active={selected === titel}
        onClick={() => setSelected(titel)}
        icon={icon}
      >
        <h5>{titel}</h5>
      </MenuItem>
    </Link>
  );
};

const SideBar = () => {
  const [Selected, setSelected] = useState("Dashbord");
  const [iscollapsed, setcollapsed] = useState(false);
  return (
    <section className="dark:bg-slate-800  transition-all duration-700">
      <Sidebar
        collapsed={iscollapsed}
        menuItemStyles={{}}
        backgroundColor=""
        rootStyles={{ border: 0 }}
        className=" dark:bg-slate-800  dark:text-white"
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0)
                return {
                  "&:hover": {
                    backgroundColor: "rgb(51 65 85 / var(--tw-bg-opacity))",
                  },
                  color: active ? "rgb(99 102 241)" : "",
                };
            },
          }}
        >
          <MenuItem
            className=""
            onClick={() => setcollapsed(!iscollapsed)}
            icon={iscollapsed ? <TiThMenu /> : undefined}
          >
            {!iscollapsed && (
              <div className="flex justify-between">
                <h3 className="font-semibold ">ADMINIS</h3>
                <button
                  className="text-xl hover:text-indigo-500"
                  onClick={() => setcollapsed(!iscollapsed)}
                >
                  <TiThMenu />
                </button>
              </div>
            )}
          </MenuItem>

          {/* USER */}
          {!iscollapsed && (
            <div className="flex flex-col items-center pt-4">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/user.png`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
              <h2>Taha</h2>
              <h5 className="text-green-700">VP Fancy Admins</h5>
            </div>
          )}

          {/* Menu Item */}
          <div className="pt-3">
            <Item
              titel="Dashbord"
              to="/"
              icon={<FaHome />}
              selected={Selected}
              setSelected={setSelected}
            />

            <h6 className="pl-5 pt-3 text-slate-500 font-semibold">Data</h6>
            <Item
              titel="Manage Team"
              to="/team"
              icon={<FaPeopleGroup />}
              selected={Selected}
              setSelected={setSelected}
            />
            <Item
              titel="Contacts Information"
              to="/Contacts"
              icon={<MdContactMail />}
              selected={Selected}
              setSelected={setSelected}
            />
            <Item
              titel="invoices Balances"
              to="/invoices"
              icon={<FaReceipt />}
              selected={Selected}
              setSelected={setSelected}
            />
            <h6 className="pl-5 pt-3 text-slate-500 font-semibold">Pages</h6>

            <Item
              titel="Profile form"
              to="/form"
              icon={<IoPerson />}
              selected={Selected}
              setSelected={setSelected}
            />
            <Item
              titel="Callender"
              to="/Callender"
              icon={<SlCalender />}
              selected={Selected}
              setSelected={setSelected}
            />
            <Item
              titel="Faq"
              to="/Faq"
              icon={<FaHandsHelping />}
              selected={Selected}
              setSelected={setSelected}
            />
            <h6 className="pl-5 pt-3 text-slate-500 font-semibold">Chart</h6>

            <Item
              titel="Bar chart"
              to="/Bar"
              icon={<IoBarChart />}
              selected={Selected}
              setSelected={setSelected}
            />
            <Item
              titel="pie chart"
              to="/pie"
              icon={<FaChartPie />}
              selected={Selected}
              setSelected={setSelected}
            />
            <Item
              titel="Line chart"
              to="/line"
              icon={<IoTimeOutline />}
              selected={Selected}
              setSelected={setSelected}
            />
            <Item
              titel="Geography chart"
              to="/Geography"
              icon={<FaMapMarked />}
              selected={Selected}
              setSelected={setSelected}
            />
          </div>
        </Menu>
      </Sidebar>
    </section>
  );
};

export default SideBar;
