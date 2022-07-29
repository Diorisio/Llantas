import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';

function Barralogin() {
    const [currentUser, setCurrentUser] = useState();
    const navigate = useNavigate();
    
    const logout=()=>{
        console.log('hola')
        localStorage.removeItem("nombreuser");
        localStorage.removeItem("token");
        localStorage.removeItem("Cargo");
        localStorage.removeItem("id");
        navigate("/");
        window.location.reload();
    }
    
    useEffect(()=>{

        const getcargo =  () => {
            if(localStorage.getItem('name')){
                setCurrentUser(localStorage.getItem('name'))
            }
        }

        getcargo();
    }, []);
    
    return(
        <div className="login-inicio">
            <div>
            <AccountCircleIcon></AccountCircleIcon>
            <p>SICLOG</p>
            </div>
            <div className="entrada-login">
            <PersonIcon></PersonIcon>
            {localStorage.getItem('token')?
            <Link  onClick={logout} className="enlacesgeneral" to="/">Cerrar sesion</Link>
            :
            <Link className="enlacesgeneral" to="/login">Iniciar sesion</Link>
            }

            </div>
           
            
        </div>
    )
}

export default Barralogin