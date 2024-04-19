import React from "react";
import Header from "../../components/Header";
import StartBox from "../../components/StartBox";
import { mockTransactions } from "../../Data/mockData";
import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPointOfSale } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { FaTrafficLight } from "react-icons/fa";
import BarChart from "../../components/BarChatr";
import PieChart from "../../components/PieChart";
import LineChart from "../../components/LineChart";
import ProgreesCircle from "../../components/ProgreesCircle";

const Dashboard = () => {
  return (
    <section>
      <div className=" flex justify-between items-center mt-4">
        <div className="flex items-center justify-center">
          <Header title="Dashboard" subtitle="Weelcom To your dashboard" />
        </div>
        <button className="flex gap-3 dark:bg-slate-800 border p-2 dark:text-white hover:!bg-slate-500 items-center justify-center">
          <FaDownload />
          Download Reports
        </button>
      </div>
      <div className="grid grid-cols-12 gap-5">
        {/* ROW 1 */}
        <div className="col-span-3  dark:bg-slate-800 flex items-center justify-center p-4 rounded-sm">
          <StartBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={<MdEmail className="dark:text-green-700 text-2xl" />}
          />
        </div>
        <div className="col-span-3 dark:bg-slate-800 flex items-center justify-center p-4 rounded-sm">
          <StartBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={<MdPointOfSale className="dark:text-green-700 text-2xl" />}
          />
        </div>
        <div className="col-span-3 dark:bg-slate-800 flex items-center justify-center p-4 rounded-sm">
          <StartBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={<IoMdPersonAdd className="dark:text-green-700 text-2xl" />}
          />
        </div>
        <div className="col-span-3 dark:bg-slate-800 flex items-center justify-center p-4 rounded-sm">
          <StartBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={<FaTrafficLight className="dark:text-green-700 text-2xl" />}
          />
        </div>

        {/* ROW 2 */}
        <div className="col-span-8  dark:bg-slate-800 rounded-sm ">
          <div className="px-4 pt-2">
            <h5 className="dark:text-white">Revenue Generated</h5>
            <h3 className="text-green-700">$59,342.32</h3>
          </div>
          <div className="h-[242px]">
            <LineChart />
          </div>
        </div>
        <div className="col-span-4  dark:bg-slate-900 overflow-auto h-[310px] ">
          <div className="flex justify-between items-center dark:text-white  px-4 py-2 dark:bg-slate-800">
            <h5>Recent Transactions</h5>
          </div>
          {mockTransactions.map((transaction, i) => (
            <div
              className="flex justify-between items-center col-span-4  dark:bg-slate-800 p-4 mt-3"
              key={`${transaction.txId}-${i}`}
            >
              <div>
                <h4 className="text-green-700">{transaction.txId}</h4>
                <h5 className="dark:text-white">{transaction.user}</h5>
              </div>
              <div className="dark:text-white">{transaction.date}</div>
              <div className="dark:text-white bg-green-600 p-1 rounded-lg">
                ${transaction.cost}
              </div>
            </div>
          ))}
        </div>

        {/* ROW 3 */}
        <div className="col-span-4 row-span-2 dark:bg-slate-800 overflow-auto p-4 dark:text-white">
          <h5>Campaign</h5>
          <div className="flex items-center mt-6 flex-col">
            <ProgreesCircle size="125" />
          </div>
          <div className="text-center pt-5">
          <h5>$48,352 revenue generated</h5>
          <h6>Includes extra misc expenditures and costs</h6>
          </div>
        </div>
        <div className="col-span-4 row-span-2 dark:bg-slate-800 overflow-auto p-4 dark:text-white">
          <h5>Sales Quantity</h5>
          <div className="flex items-center  flex-col h-[250px]">
            <BarChart  size="125" />
          </div>
        </div>
        <div className="col-span-4 row-span-2 dark:bg-slate-800 overflow-auto p-4 dark:text-white">
          <h5>Campaign</h5>
          <div  className="flex items-center flex-col h-[250px]">
            <PieChart size="125" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
