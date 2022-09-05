import Barralogin from "../Barralogin";
import Cuerpo from "./Cuerpo";
import SideList from "./SideList";
import * as React from 'react';


import dashboardservices from '../../services/dashboard-services';



export default function Dashboard() {
    const [actAlluser, setAlluser] = React.useState([]);
  const [actllantas, setllantas] = React.useState([]);

  React.useEffect(()=>{

    const alluser=async()=>{
      try {
        const data=await dashboardservices.alluser();
        const llantas=await dashboardservices.llantas();
          setAlluser(data.data)
          setllantas(llantas.data.registradas[0].cantidad)

      } catch (error) {
        
      }

    }
    alluser()

  },[])


    return(
        <>
        <Barralogin></Barralogin>
        <div className="cuerpo-dashboard">
        <SideList></SideList>
        <Cuerpo actAlluser={actAlluser} actllantas={actllantas}></Cuerpo>
        </div>
        
        </>
    )
    
}