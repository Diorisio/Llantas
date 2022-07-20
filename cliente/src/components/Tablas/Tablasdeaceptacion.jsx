import * as React from 'react';
import { useEffect, useState } from 'react';



import { DataGrid } from '@mui/x-data-grid';
import adminservices from '../../services/admin-services';
import { Button } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'Nombres', width: 130 },
  {
    field: 'correo',
    headerName: 'correo',
    width: 170,
  },
  {
    field: 'numerocelular',
    headerName: 'Celular',
    width: 150,
  },
  {
    field: 'numerofijo',
    headerName: 'Fijo',
    width: 90,
  },
  {
    field: 'cargo',
    headerName: 'Cargo',
    width: 90,
  },
  {
    field: 'direccion',
    headerName: 'Direccion',
    width: 160,
  }
];

function Tablasdeaceptacion() {
  const [currentUser, setCurrentUser] = useState([]);
  const [aceptadoact, setaceptado] = useState('');

    useEffect(()=>{

        const getAllUser = async () => {
            const UserData = await adminservices.allpendient();
            if(UserData.data) { 
                setCurrentUser(UserData.data)
            }
            console.log(UserData.data)
        }

        getAllUser();
    }, []);

    const revisado=()=>{
      console.log(aceptadoact)
    }
 


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        className='tablaaceptacion'
        rows={currentUser.map(usuario => usuario)}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onChange={(e)=>setaceptado(e.target.value)}
        value={currentUser.map(usuario => usuario.id)}

      />
      <Button   onClick={revisado} type="submit" variant="contained" >
        Enviar
       </Button>
    </div>
  );
}
export default Tablasdeaceptacion


