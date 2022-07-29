import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom"


import { DataGrid } from '@mui/x-data-grid';
import adminservices from '../../services/admin-services';
import { Button } from '@mui/material';
import Barralogin from '../Barralogin';

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
  const [revisadoact, setrevisado] = useState('');
  const navigate = useNavigate();

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

    const revisado=async()=>{
      await adminservices.aceptado(revisadoact);
      navigate("/tabla");
        window.location.reload();
    }
    
 
  /* Verificacion del admin */
  const [currentAmin, setCurrentAmin] = useState("cargo");

    
    useEffect(()=>{

        const getcargo =  () => {
            if(localStorage.getItem('Cargo')){
              setCurrentAmin(localStorage.getItem('Cargo'))
            }
        }

        getcargo();
    }, []);

  /* -------------------- */

  return (
    <>
    <Barralogin></Barralogin>
    {currentAmin.replaceAll('"', '')!=='Admin'?

    <Link className="enlacesgeneral" to="/tabla">Iniciar sesion admin</Link>
    :
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        className='tablaaceptacion'
        rows={currentUser.map(usuario => usuario)}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(data)=>{
          setrevisado(data)
        }}
        
        value={currentUser.map(usuario => usuario.id)}

      />
      <Button   onClick={revisado} type="submit" variant="contained" >
        Enviar
       </Button>
    </div>
}
    </>
  );
}
export default Tablasdeaceptacion


