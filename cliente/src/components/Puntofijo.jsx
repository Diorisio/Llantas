import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';


import { useState,useEffect } from 'react';

import llantasdata from '../services/llanta-services';
import Tablallantas from './Tablas/Tablallantas'
import Barradenavegacion from './Barranavegacion';
import Barralogin from './Barralogin';

function Puntofijo() {
  const [llantasact, setllantas] = useState('');
    const [rinact, setrin] = useState('');
    const [numerollantasact, setnumerollantas] = useState('');


  const registrollantas=async(e)=>{
    try {
      e.preventDefault();
    
     await llantasdata.registrollanta(llantasact,rinact,numerollantasact,localStorage.getItem('id')) 
     window.location.reload();
    
    } catch (error) {
      console.log(error)
      
    }
    
}

    return(
        <div className='body-inicio'>
         <Barralogin></Barralogin>
        
        <h2>Datos del punto</h2>
        <p>{localStorage.getItem('nombreuser').replaceAll('"', '')}</p>
        <h1>Datos de las llantas</h1>

        
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

const tipodellantas = [
  { label: 'Camion' },
  { label: 'Fuera de carretera' },
  { label: 'Bicicleta'},
];

const Rines = [
    { label: 22.5 },
    { label: 15 },
    { label: 20.5},
  ];




  

  

  