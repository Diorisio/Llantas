import * as React from 'react';
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';

import loginservices from '../services/user-services';

function Login() {
    const navigate = useNavigate();

    const [correoact, setcorreo] = useState('');
    const [contrasenaact, setcontrasena] = useState('');
    const [erroract, seterror] = useState('');
    

    const handlelogin=async(e)=>{
        e.preventDefault();
        const errores=await loginservices.login(correoact,contrasenaact)
        if(errores){
          seterror(errores)

        }else(
        navigate("/")
        )
        
    }


    return(
      
        <>
        <div className='login'>
        <picture>
          <img src="/images/SENNOVA-03.png" alt="" />
        </picture>
      <Box
      className='login-formulario'
      onSubmit={handlelogin}
      component="form"
      sx={{
        
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div >
        <TextField
          label="Correo"
          id="filled-size-small"
          variant="filled"
          onChange={(e)=>setcorreo(e.target.value)}
          size="small"
        />
        
        <TextField
          label="Contraseña"
          id="filled-size-normal"
          type="password"
          onChange={(e)=>setcontrasena(e.target.value)}
          variant="filled"
          size="small"
        />
         {erroract?
        <Alert severity="error">{erroract}</Alert>:<></>
         }
      </div>
      <div>
        <div className='opciones'>
        <Button type="submit" variant="contained">Enviar</Button>
        <Link className='enlacesgeneral' to='/registro'>Aun no estas registrado</Link>
         </div>
      

      </div>
      </Box>
        </div>
        
        
        </>
      
    )
    
}
export default Login

