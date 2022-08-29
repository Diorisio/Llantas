import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


import sensorsdata from '../../services/sensors-services'


const columns = [
  
  { field: 'latitud', headerName: 'Latitud', width: 130 },
  { field: 'longitud', headerName: 'Longitud', width: 130 },
  {
    field: 'sensorCO',
    headerName: 'sensorCO',
    type: 'number',
    width: 90,
  },
  {
    field: 'sensorCO2',
    headerName: 'sensorCO2',
    type: 'number',
    width: 90,
  }
];



export default function Tablasensores() {

  const [currentUser, setCurrentUser] = React.useState([]);
  

React.useEffect(()=>{

  const getAllUser = async () => {
      const UserData = await sensorsdata.recibirdata();
      if(UserData.data) { 
          setCurrentUser(UserData.data)
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
        
      />
    </div>
    </>
  );
}
