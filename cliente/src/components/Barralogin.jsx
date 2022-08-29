import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';

function Barralogin() {
    const [currentUser, setCurrentUser] = useState();
    const navigate = useNavigate();
    
    const logout=()=>{
        localStorage.removeItem("nombreuser");
        localStorage.removeItem("token");
        localStorage.removeItem("Cargo");
        localStorage.removeItem("id");
        localStorage.removeItem("id_boron");
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
            <div className="siclog">
            <AccountCircleIcon></AccountCircleIcon>
            <p className="celular">SICLOG</p>
            </div>
            <div className="entrada-login">
            <PersonIcon></PersonIcon>
            
            {localStorage.getItem('token')?
            <Link  onClick={logout} className="enlacesgeneral celular" to="/">Cerrar sesion</Link>
            :
            <Link className="enlacesgeneral celular" to="/login">Iniciar sesion</Link>
            }
            
            </div>
           
            
        </div>
    )
}

export default Barralogin