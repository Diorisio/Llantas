import * as React from 'react';
import {useState } from "react";
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Alert from '@mui/material/Alert';

import loginservices from '../services/login-services'

const expresiones={
  nombre:/^[a-zA-Z\_\-]{4,16}$/,
}
const errores=['false','false','false','false','false','false','false']


function Register() {
  const navigate = useNavigate();


  const [nombreact, setnombre] = useState('');
  const [correoact, setcorreo] = useState('');
  const [contrasenaact, setcontrasena] = useState('');
  const [telefonoact, settelefono] = useState('');
  const [celularact, setcelular] = useState('');
  const [cargoact, setcargo] = useState('');
  const [direccion1act, setdireccion1] = useState('');
  const [direccion2act, setdireccion2] = useState('');
  const [direccion3act, setdireccion3] = useState('');
  const [direccion4act, setdireccion4] = useState('');
  const [direccion5act, setdireccion5] = useState('');
  const [direccion6act, setdireccion6] = useState('');
  const [direccion7act, setdireccion7] = useState('');

  const handlelogin=(e)=>{
    try {
      
    e.preventDefault();
    const direccion=direccion1act.concat(' ',direccion5act,direccion2act,' ',direccion3act,direccion6act,'-',direccion4act,' ',direccion7act)
    loginservices.register(nombreact,correoact,contrasenaact,telefonoact,celularact,cargoact,direccion)
    navigate("/");
     
    } catch (error) {
      console.log(error)
    } 
  }
  let ver={
  }
  const validaciones=()=>{
    if(expresiones.nombre){
      if (expresiones.nombre.test(nombreact)) {
         errores[0]='false'
        console.log('Input correcto',errores[0])
        
      }else{
        errores[0]='true'
        console.log('Input incorrecto',errores[0])

      }
    }

  }
    return(

    <>
    <AccountCircleIcon className='persona'/>
        <Box onSubmit={handlelogin}
        
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='formulario'>
        <div className='grupoinput'>
        <TextField 
          required
          
          onBlur={validaciones}
          id="outlined-required"
          label="Nombres"
          onChange={(e)=>setnombre(e.target.value)}
        />
        <p style={{ display: "none" }}>Error aqui</p>
        </div>
        <TextField
          required
          id="outlined-required"
          label="Correo"
          type="email"
          onChange={(e)=>setcorreo(e.target.value)}
        />
       
        <TextField
        required
          id="outlined-password-input"
          label="Contraseña"
          type="password"
          onChange={(e)=>setcontrasena(e.target.value)}
          autoComplete="current-password"
        />
        <TextField
        required
          id="outlined-password-input"
          label="Repetir contraseña"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-number"
          label="Telefono del punto"
          type="number"
          
          onChange={(e)=>settelefono(e.target.value)}
          
        />
        <TextField
        required
          id="outlined-number"
          label="Celular"
          type="number"
          onChange={(e)=>setcelular(e.target.value)}
        />

          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          onChange={(e)=>setcargo(e.target.value)}
          label="Cargo"
        >
          <MenuItem disable defaultChecked>Cargo</MenuItem>
          <MenuItem value="Recolector">Recolector</MenuItem>
          <MenuItem value="Punto fijo">Punto fijo</MenuItem>
          <MenuItem value="coordinador">coordinador</MenuItem>
        </Select>
        <div>
          <h2>Direccion</h2>
          <Select
          label="Celula"
          labelId="demo-simple-select-label"
          displayEmpty
          id="demo-simple-select"
          onChange={(e)=>setdireccion1(e.target.value)}
        >
          <MenuItem disable defaultChecked>Direccion</MenuItem>
          <MenuItem value="Carrera" selected>Carrera</MenuItem>
          <MenuItem value="Calle">Calle</MenuItem>
          <MenuItem value="Avenida">Avenida</MenuItem>
          <MenuItem value="Diagonal">Diagonal</MenuItem>
        </Select>
        <TextField
        onChange={(e)=>setdireccion5(e.target.value)}
          id="outlined-number"
          label="Numero"
          type="number"
        />
        <TextField
        onChange={(e)=>setdireccion2(e.target.value)}
          id="outlined-number"
          label="Letra"
          type="text"
        />
        <TextField
        onChange={(e)=>setdireccion3(e.target.value)}
          id="outlined-number"
          label="Numero"
          type="number"
        />
        <TextField
        onChange={(e)=>setdireccion6(e.target.value)}
          id="outlined-number"
          label="Letra"
          type="text"
        />
        <TextField
        onChange={(e)=>setdireccion4(e.target.value)}
          id="outlined-number"
          label="Numero"
          type="number"
        />
        <TextField
        onChange={(e)=>setdireccion7(e.target.value)}
          id="outlined-number"
          label="Interior o alguna especificacion"
          type="text"
        />
        </div>
        
      </div>
      
      <Stack className='botonenviar' direction="row" spacing={2}>
      <Alert severity="error">Porfavor rellenar el formulario correctamente</Alert>
      <br/>
      <Button   type="submit" variant="contained" endIcon={<SendIcon />}>
        Enviar
       </Button>
      
    </Stack>
      
        </Box>
    </>
    )
}






export default Register