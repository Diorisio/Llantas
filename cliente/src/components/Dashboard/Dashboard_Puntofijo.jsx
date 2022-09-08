import { Button } from '@mui/material';
import * as React from 'react';
import {Link} from "react-router-dom";

import Barralogin from "../Barralogin"
import dashboardservices from '../../services/dashboard-services';

export default function Dashboard_Puntofijo(){
    const [actAlluser, setAlluser] = React.useState('');
  React.useEffect(()=>{
    const alluser=async()=>{
      try {
        const data=await dashboardservices.alluser();
          setAlluser(data.data)

      } catch (error) {
        console.log(error)
      }
    }
    alluser()

  },[])
   return(
    <div>
        <Barralogin></Barralogin>
        {actAlluser?
         actAlluser.puntos_fijos.map(user=>
            <Link to={`${user.id}`}>
            <Button variant="contained" >{user.nombre}</Button>
            </Link>
        )

        :
        <>
        <h1>Cargado</h1>
        </>
        }
    </div>
   )
}