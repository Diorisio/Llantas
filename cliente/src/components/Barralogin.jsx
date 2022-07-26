import { Link } from "react-router-dom"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';

function Barralogin() {
    return(
        <div className="login-inicio">
            <div>
            <AccountCircleIcon></AccountCircleIcon>
            <p>SICLOG</p>
            </div>
            <div className="entrada-login">
            <PersonIcon></PersonIcon>
            <Link className="enlacesgeneral" to="/login">Iniciar sesion</Link>
            </div>
           
            
        </div>
    )
}

export default Barralogin