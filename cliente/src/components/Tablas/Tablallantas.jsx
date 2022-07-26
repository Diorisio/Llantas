import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

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
  

React.useEffect(()=>{

  const getAllUser = async () => {
      const UserData = await llantasdata.todallanta();
      if(UserData.data) { 
          setCurrentUser(UserData.data)
      }
      
  }

  getAllUser();
 }, []);
  return (
    <div style={{ height: 400, width: '100%',background:"white" }}>
      <DataGrid
        rows={currentUser.map(usuario => usuario)}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
