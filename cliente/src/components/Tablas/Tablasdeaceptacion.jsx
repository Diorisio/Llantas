import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom"


import { DataGrid,GridActionsCellItem  } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';

import adminservices from '../../services/admin-services';
import { Button } from '@mui/material';
import Barralogin from '../Barralogin';


const updaterow=(e)=>{
  console.log(e)
      

}
const columns = [
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
  },
  {
    field: 'id_boron',
    headerName: 'Id del boron',
    width: 160,
    editable:true
  },
  {
    field: 'actions',
    type: 'actions',
    width: 80,
    getActions: (params) => [
      <GridActionsCellItem
        icon={<EditIcon />}
      />
    ],
  }
];

function Tablasdeaceptacion() {
  const [currentUser, setCurrentUser] = useState([]);
  const [revisadoact, setrevisado] = useState('');
  const [actboron, setboron] = useState('');
  const navigate = useNavigate();

    useEffect(()=>{

        const getAllUser = async () => {
            const UserData = await adminservices.allpendient();
            if(UserData.data) { 
                setCurrentUser(UserData.data)
            }
            
        }

        getAllUser();
    }, []);

    const revisado=async()=>{
      await adminservices.aceptado(revisadoact,actboron);
      navigate("/dashboard/tabla");
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

  const updaterow=(e)=>{
    setboron(e.value)

  }
  

  return (
    <>
    <Barralogin></Barralogin>
    {currentAmin.replaceAll('"', '')!=='Admin'?
    <>
    <h2>Parece que aun no has iniciado sesion</h2>
    <Button className='centrar' variant="contained">
      <Link  className="enlacesgeneral" to="/adminlogin">Iniciar sesion admin</Link></Button>
    </>
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
        onCellEditCommit={updaterow}

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


