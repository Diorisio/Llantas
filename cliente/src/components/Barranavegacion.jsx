
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';

function Barradenavegacion(){
    const [currentUser, setCurrentUser] = useState("cargo");

    
    useEffect(()=>{

        const getcargo =  () => {
            if(localStorage.getItem('Cargo')){
                setCurrentUser(localStorage.getItem('Cargo'))
            }
        }

        getcargo();
    }, []);


    return(
        <>
        <nav className="barra-navegacion">
            <Link className="enlacesgeneral" to="/">Inicio</Link>
            <Link className="enlacesgeneral" to="/">Reportar llantas</Link>
            
            {currentUser.replaceAll('"', '')=="Recolector"?
            <Link className="enlacesgeneral" to="/conductor">Transportista</Link>
            :
            <Link className="enlacesgeneral" to="/">Transportista</Link>
            }

            {currentUser.replaceAll('"', '')=="Punto fijo"?
            <Link className="enlacesgeneral" to="/recolector">Recolector</Link>
            :
            <Link className="enlacesgeneral" to="/">Recolector</Link>
            }

            {currentUser.replaceAll('"', '')=="Admin"?
            <Link className="enlacesgeneral" to="/tabla">Dashboard</Link>
            :
            <Link className="enlacesgeneral" to="/">Dashboard</Link>
            }
            
            
        </nav>
        </>
    )


}

export default Barradenavegacion