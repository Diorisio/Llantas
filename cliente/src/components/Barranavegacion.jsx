
import { Link } from "react-router-dom"
function Barradenavegacion(){
    return(
        <>
        <nav className="barra-navegacion">
            <Link className="enlacesgeneral" to="/">Inicio</Link>
            <Link className="enlacesgeneral" to="/">Reportar llantas</Link>
            <Link className="enlacesgeneral" to="/conductor">Transportista</Link>
            <Link className="enlacesgeneral" to="/recolector">Recolector</Link>
            <Link className="enlacesgeneral" to="/tabla">Dashboard</Link>
        </nav>
        </>
    )


}

export default Barradenavegacion