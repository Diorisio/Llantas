import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';




import { useState,useEffect } from 'react';

import llantasdata from '../services/llanta-services';
import loginservices from '../services/user-services';
import Tablallantas from './Tablas/Tablallantas'
import Barralogin from './Barralogin';



function Puntofijo() {
  const [llantasact, setllantas] = useState('');
    const [rinact, setrin] = useState('');
    const [numerollantasact, setnumerollantas] = useState('');
    const [actuser, setuser] = useState('');

   useEffect(()=>{

    const una=async()=>{
      const user= await loginservices.getuser()
     setuser(user.data)
    }
    una()

   },[])




   
  const registrollantas=async(e)=>{
    try {
      e.preventDefault();
      const id=localStorage.getItem('id')
     await llantasdata.registrollanta(llantasact,rinact,numerollantasact,id) 
     
     window.location.reload();
    
    } catch (error) {
      console.log(error)
      
    }
    
}


    return(
        <div className='body-inicio'>
         <Barralogin></Barralogin>
        <div className='info-fijo'>
        <h3>Datos del punto</h3>
         <p> <b>Nombre del encargado: </b>{actuser.nombre} </p>
         <p> <b>Punto de recoleccion: </b>{actuser.direccion} </p>
         <p> <b>Contacto del encargado: </b>{actuser.numerocelular} </p>
        </div>


        <h2>Datos de las llantas</h2>
        
      <FormControl className='body-llantas' fullWidth>
        <div className='formllantas'>
        <InputLabel className='tipo' id="demo-simple-select-label">Tipo de llantas</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={llantasact}
          label="Age"
          onChange={(e)=>setllantas(e.target.value)}
        >
          <MenuItem value={'Camion'}>Camion</MenuItem>
          <MenuItem value={'Fuera de carretera'}>Fuera de carretera</MenuItem>
          <MenuItem value={'Bicicleta'}>Bicicleta</MenuItem>
        </Select>

        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rinact}
          displayEmpty
          label="Age"
          onChange={(e)=>setrin(e.target.value)}
        >
          <MenuItem value=''>Rin</MenuItem>
          <MenuItem value={22.5}>22.5</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20.5}>20.5</MenuItem>
        </Select>

        <TextField 
          required
          id="outlined-required"
          label="Cantidad"
          type="number"
          onChange={(e)=>setnumerollantas(e.target.value)}
        />
        </div>
        
        <Button type="submit" onClick={registrollantas} variant="contained">Registrar llantas</Button>

      </FormControl>
      <h2>Tablas de llantas</h2>

      <Tablallantas></Tablallantas>
    

        </div>
    )
        
    
    
}

export default Puntofijo





  

  

  