import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';

import adminservices from '../services/admin-services';

function LoginAdmin() {
    const navigate = useNavigate();

    const [correoact, setcorreo] = useState('');
    const [contrasenaact, setcontrasena] = useState('');
    const [erroract, seterror] = useState('');
    

    const handlelogin=async(e)=>{
        e.preventDefault();
        const errores=await adminservices.login(correoact,contrasenaact)
        if(errores){
          seterror(errores)

        }else(
        navigate("/")
        )
        
    }


    return(
      
        <>
        
    <Box
      
      onSubmit={handlelogin}
      component="form"
      sx={{
        
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="CorreoAdmin"
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
      <Button type="submit" variant="contained">Enviar</Button>
      
    </Box>
        </>
      
    )
    
}
export default LoginAdmin

