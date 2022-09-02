import { Button } from '@mui/material';
import * as React from 'react';
import {Link} from "react-router-dom";

import dashboardservices from '../../services/dashboard-services';
import Barralogin from '../Barralogin';



export default function Transportistas(){
    const [actAlluser, setAlluser] = React.useState('');
    const [actidboron, setidboron] = React.useState('');


  React.useEffect(()=>{

    const alluser=async()=>{
      try {
        const data=await dashboardservices.alluser();
        
          setAlluser(data.data)
      

      } catch (error) {
        
      }

    }
    alluser()

  },[])

  console.log(actidboron)
    return(
        <>
        <Barralogin></Barralogin>
        {actAlluser?
         actAlluser.usuarios.map(user=>
            <Link to={`${user.id}`}>
            <Button variant="contained" onClick={()=>{setidboron(user.id_boron)}}>{user.nombre}</Button>
            </Link>
        )
        :
        <>
        <h1>Cargado</h1>
        </>
        }

        </>
    )
}

