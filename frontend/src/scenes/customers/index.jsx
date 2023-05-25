import React from 'react'
import { Typography, Box, useTheme } from '@mui/material'
import Header from 'components/Header'
import { useGetCustomersQuery } from 'state/api'
import { DataGrid } from '@mui/x-data-grid'

const Customers = () => {
   const theme = useTheme();
   const { data, isLoading } = useGetCustomersQuery();
   console.log('customers', data);
   
    const columns = [
      {
        field: '_id',
        headerName: 'ID',
        flex: 1
      },
      {
        field: 'name',
        headerName: 'Name',
        flex: 0.5
      },
      {
        field: 'email',
        headerName: 'Email',
        flex: 1
      },
      {
        field: 'phoneNumber',
        headerName: 'Phone Number',
        flex: 0.5,
        renderCell: (params) => {
          return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
        }
      },
      {
        // country
        field: 'country',
        headerName: 'Country',
        flex: 0.4
      },
      {
        // occupation
        field: 'occupation',
        headerName: 'Occupation',
        flex: 1
      },
      {
        // role
        field: 'role',
        headerName: 'Role',
        flex: 0.5
      }
     
    ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Customers" subtitle="List of customers" />
      <Box
        mt="40px" height="75vh"
      >
        <DataGrid 
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        /> 
      </Box>
    </Box>
  )
}

export default Customers