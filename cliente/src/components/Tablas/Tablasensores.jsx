import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


import adminservices from '../../services/admin-services'
import Barralogin from '../Barralogin';
import {useParams} from "react-router-dom";

import Gases_grafica from '../Dashboard/Gases_grafica';



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

  const {id}=useParams();
  

  const [currentUser, setCurrentUser] = React.useState([]);
  

React.useEffect(()=>{

  const getAllUser = async () => {
    
      const UserData = await adminservices.recibirdata(id);
      
      if(UserData.data) { 
          setCurrentUser(UserData.data)
      }
      
  }

  getAllUser();
 }, []);
 
  return (
    <>
    <Barralogin></Barralogin>
    
    <div style={{ height: 400, width: '100%',background:"white" }}>
      <DataGrid
        rows={currentUser.map(usuario => usuario)}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
      />
    </div>
    <Gases_grafica gases={currentUser}></Gases_grafica>
    </>
  );
}
