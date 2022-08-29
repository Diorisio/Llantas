import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';


import llantasdata from '../../services/llanta-services'

const columns = [
  
  { field: 'tipollanta', headerName: 'Tipo de llanta', width: 130 },
  { field: 'rin', headerName: 'Rin', width: 50 },
  {
    field: 'cantidad',
    headerName: 'Cantidad',
    type: 'number',
    width: 110,
    editable:true
  },
  { field: 'updatedAt', headerName: 'fecha de registro', width: 250 },
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
         const datos=UserData.data
         datos.map(u=>u.updatedAt=formatDate(new Date(u.updatedAt)))

          setCurrentUser(datos)
      }
      
    } catch (error) {
      console.log(error)
      
    }
  }
  getAllUser();
 }, []);

 const updaterow=async(e)=>{
    
    if (e.value<e.formattedValue) {

      await llantasdata.updatellanta(e.id,e.value);
      

      const llanta=e.formattedValue-e.value
      await llantasdata.registrollanta(e.row.tipollanta,e.row.rin,llanta,e.row.id_user)
      window.location.reload();

      
    }else{
      await llantasdata.updatellanta(e.id,e.value);
      
      window.location.reload();
    }

 }
 

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
        onCellEditCommit={updaterow}
        
      />
    </div>
    <Button variant="contained" onClick={registro} type='submit'>Llantas recogidas</Button>

    </>
  );
}
