import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import { mockDataInvoices } from "../../Data/mockData";

import Header from "../../components/Header";

const Invoices = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.3 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: ({ row: { cost } }) => <p>$ {cost}</p>,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <section className="">
      <Header title={"Invoices"} subtitle={"List of Invoice Balances"} />
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
        [&_.MuiCheckbox-root]:dark:text-white
        [&_.MuiCheckbox-root]:text-black
        "
      >
        <DataGrid
          className="dark:text-white dark:bg-slate-800 h-full "
          rows={mockDataInvoices}
          columns={columns}
          checkboxSelection
        ></DataGrid>
      </div>
    </section>
  );
};

export default Invoices;

//  MuiDataGrid-root MuiDataGrid-root--densityStandard MuiDataGrid-withBorderColor css-qcqlck-MuiDataGrid-root
