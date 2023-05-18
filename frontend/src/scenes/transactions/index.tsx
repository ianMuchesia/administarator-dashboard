import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useGetTransactionsQuery } from "../../store/api";
import { ThemeOptions } from "../../@types/pallette";
import DataGridCustomToolbar from "../../components/DataGridCustomToolBar";

const Transactions = () => {
  const theme = useTheme() as ThemeOptions;

  // values to be sent to the backend
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 20,
  });


  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const [searchInput, setSearchInput] = useState("");

  const { data, isLoading } = useGetTransactionsQuery({
    page:paginationModel.page,
    pageSize:paginationModel.pageSize,
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
      renderCell: (params: GridCellParams) =>
        (params.value as string[]).length as number,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params: GridCellParams) =>
        `$${Number(params.value as number).toFixed(2)}`,
    },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="TRANSACTIONS" subtitle="Entire list of transactions" />
      <Box
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
       <DataGrid
       loading={isLoading || !data}
       getRowId={(row) => row._id}
       rows={(data && data?.transactions) || []}
       columns={columns}
       rowCount={(data && data?.total) || 0}
  pagination
 paginationModel={paginationModel}
 onPaginationModelChange={setPaginationModel}
 paginationMode="server"
 pageSizeOptions={[20,50,100]}
  sortingMode="server"
 
  onSortModelChange={(newSortModel) => setSort(prevSortModel=>({...prevSortModel,newSortModel}))}
  slots={{ toolbar: DataGridCustomToolbar }}
  slotProps={{
    toolbar: { searchInput, setSearchInput, setSearch },
  }}
/>

      </Box>
    </Box>
  );
};

export default Transactions;
