import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


import adminservices from '../../services/admin-services'
import Barralogin from '../Barralogin';
import {useParams} from "react-router-dom";

import Gases_grafica from '../Dashboard/Gases_grafica';
import Grafica_total_gases from '../Dashboard/Grafica_total_gases';



const columns = [
  
  { field: 'latitud', headerName: 'Latitud', width: 130 },
  { field: 'longitud', headerName: 'Longitud', width: 130 },
  {
    field: 'sensorCO',
    headerName: 'sensorCO',
    type: 'number',
    width: 100,
  },
  {
    field: 'sensorCO2',
    headerName: 'sensorCO2',
    type: 'number',
    width: 100,
  },
  {
    field: 'updatedAt',
    headerName: 'Fecha de muestra',
    type: 'date',
    width: 150,
  }
];

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // la hora  '0' debe ser '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return (date.getDate()) + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + "  " + strTime;
}
function justmonth(date) {
  return (date.getDate()) + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
}


export default function Tablasensores() {

  const {id}=useParams();
  

  const [currentUser, setCurrentUser] = React.useState([]);
  const [actconsolidado, setconsolidado] = React.useState([]);
  

React.useEffect(()=>{

  const getAllUser = async () => {
    
      const UserData = await adminservices.recibirdata(id);
      
      if(UserData.data) { 
        UserData.data.datos_sensores.map(u=>u.updatedAt=formatDate(new Date(u.updatedAt)))
        UserData.data.consolidado_sensores.map(u=>u.createdAt=justmonth(new Date(u.createdAt)))
          setCurrentUser(UserData.data.datos_sensores)
          setconsolidado(UserData.data.consolidado_sensores)
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
    <div className='graficas'>
    <Gases_grafica gases={currentUser}></Gases_grafica>
    <Grafica_total_gases gases={actconsolidado}></Grafica_total_gases>
    </div>
    
    </>
  );
}
