import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import { mockDataTeam } from "../../Data/mockData";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import Header from "../../components/Header";
import { MdOutlineSecurity } from "react-icons/md";

const Team = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <div
            className={`${
              access === "admin"
                ? "bg-green-900"
                : access === "manager"
                ? "bg-green-700"
                : "bg-green-500/40"
            } w-7/12 m-0 p-1 flex justify-center rounded-sm items-center gap-2 `}
          >
            {access === "admin" && <MdAdminPanelSettings />}
            {access === "manager" && <MdOutlineSecurity />}
            {access === "user" && <FaUnlockAlt />}
            <p>{access}</p>
          </div>
        );
      },
    },
  ];

  return (
    <section >
      <Header title={"TEAM"} subtitle={"Managin the Team Member"} />
      <div
        className="mt-10 h-[75vh]  [&_.MuiDataGrid-root]:border-0 
          [&_.MuiDataGrid-cell]:!border-0 
        [&_.MuiDataGrid-footerContainer]:!bg-indigo-500 
          [&_.MuiDataGrid-footerContainer]:!border-0
          [&_.MuiTablePagination-root]:text-white
          [&_.MuiDataGrid-columnHeaders]:!border-0
        [&_.MuiDataGrid-columnHeaderTitle]:text-white
        [&_.css-1essi2g-MuiDataGrid-columnHeaderRow]:!bg-indigo-500 
        [&_.css-1essi2g-MuiDataGrid-columnHeaderRow]:border-0
        [&_.css-jmgi9p]:after:hidden 
        "
      >
        <DataGrid
          className="dark:text-white dark:bg-slate-800 h-full "
          rows={mockDataTeam}
          columns={columns}
        ></DataGrid>
      </div>
    </section>
  );
};

export default Team;

//  MuiDataGrid-root MuiDataGrid-root--densityStandard MuiDataGrid-withBorderColor css-qcqlck-MuiDataGrid-root
