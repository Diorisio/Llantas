import * as React from 'react';
import {useParams} from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';


import dashboardservices from '../../services/dashboard-services';

const columns = [
  
    { field: 'createdAt', headerName: 'Fecha', width: 150 },
    { field: 'cantidad', headerName: 'Cantidad', width: 90 },
    { field: 'estado', headerName: 'Estado', width: 90 },
  ];

  function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // la hora  '0' debe ser '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return (date.getDate()) + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
  }
  
export default function TablaDashboard_llanta() {
    
    const [actAlluser, setAlluser] = React.useState('');
    const {id}=useParams();

   React.useEffect(()=>{
    const alluser=async()=>{
      try {
        const data=await dashboardservices.llantasuser(id);
        
        data.data.map(u=>u.createdAt=formatDate(new Date(u.createdAt)))
        data.data.map(u=>u.estado==true?u.estado='registrada':u.estado='recogida')
          setAlluser(data.data)

      } catch (error) {
        console.log(error)
      }
    }
    alluser()

  },[])
  
  console.log(actAlluser)


    return(<>
    <div style={{ height: 400, width: '50%',background:"white" }}>
      <DataGrid
        rows={actAlluser}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
      />
    </div>
    </>)
}
