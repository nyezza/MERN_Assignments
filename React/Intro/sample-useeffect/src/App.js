import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './App.css';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
function App () {
    const [heroes , setHeroes] = useState([]);
    useEffect=(()=> {
        fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then(her=>{
            console.log(her)
        })
        .then(her =>{
            console.log(her.data);
            setHeroes(her.data)
            console.log(her.data);
        })
        .catch(err=> console.log(err))
    }, [])
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'id',
          headerName: 'id name',
          width: 150,
          editable: true,
        },
        {
          field: 'images',
          headerName: 'images',
          type:"link",
          width: 150,
          editable: true,
        },
        {
          field: 'Name',
          headerName: 'Name',
          width: 110,
          editable: true,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params: GridValueGetterParams) =>
            `${params.row.id || ''} ${params.row.lastName || ''}`,
        },
        {
            field: 'Publisher',
            headerName: 'publisher',
            width: 110,
            editable: true,
          },
      ];

      const rows = [
        
           
        
      ];

    return (
    <fieldset>
        <legend>heroes List</legend>
            <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={ heroes.map((item,index)=>{
                id:item.id
                name: item.name;
                fullName : item.biography.fullName;
                publisher: item.biography.publisher
            })}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 5,
                },
            },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
        />
        </Box>
    </fieldset>
    )
}

export default App;