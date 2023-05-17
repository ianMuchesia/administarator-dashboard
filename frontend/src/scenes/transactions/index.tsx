import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useGetTransactionsQuery } from "../../store/api";
import { ThemeOptions } from "../../@types/pallette";





const Transactions = () => {


    const theme = useTheme() as ThemeOptions;

    // values to be sent to the backend
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");
  
    const [searchInput, setSearchInput] = useState("");


    const { data, isLoading } = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search,
      });


      
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params:GridCellParams) => (params.value as string[]).length as number,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params:GridCellParams) => `$${Number(params.value as number).toFixed(2)}`,
    },
  ];
  return (
    <div>Transactions</div>
  )
}

export default Transactions