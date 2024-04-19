import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { mockDataContacts } from "../../Data/mockData";

import Header from "../../components/Header";

const Contacts = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "registrarId", headerName: "registrar ID" },
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
      flex: 0.5,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "city Number",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "zipCode",
      flex: 0.8,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
  ];

  return (
    <section className="">
      <Header
        title={"Contacts"}
        subtitle={"List of Contacts for Future Refrense"}
      />
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
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        ></DataGrid>
      </div>
    </section>
  );
};

export default Contacts;

//  MuiDataGrid-root MuiDataGrid-root--densityStandard MuiDataGrid-withBorderColor css-qcqlck-MuiDataGrid-root
