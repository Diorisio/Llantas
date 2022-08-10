import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';


import llantasdata from '../../services/llanta-services'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'tipollanta', headerName: 'Tipo de llanta', width: 130 },
  { field: 'rin', headerName: 'Rin', width: 130 },
  {
    field: 'cantidad',
    headerName: 'Cantidad',
    type: 'number',
    width: 90,
  }
];



export default function DataTable() {

  const [currentUser, setCurrentUser] = React.useState([]);
  const [actregistro, setregistro] = React.useState([]);


  const registro=async(e)=>{
    try {
      e.preventDefault();
    
     await llantasdata.borrarllantas(actregistro) 
     window.location.reload();
      
    } catch (error) {
      console.log(error)
      
    }
  }
  

React.useEffect(()=>{

  const getAllUser = async () => {
    try {
      const UserData = await llantasdata.todallanta();
      
      if(UserData.data) { 
          setCurrentUser(UserData.data)
      }
      
    } catch (error) {
      console.log(error)
      
    }
  }
  getAllUser();
 }, []);
 

  return (
    <>
    <div style={{ height: 400, width: '100%',background:"white" }}>
      <DataGrid
        rows={currentUser.map(usuario => usuario)}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(data)=>{
          setregistro(data)
        }}
      />
    </div>
    <Button variant="contained" onClick={registro} type='submit'>Llantas recogidas</Button>

    </>
  );
}
