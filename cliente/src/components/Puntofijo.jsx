import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import { useState,useEffect } from 'react';

import llantasdata from '../services/llanta-services';

function Puntofijo() {
  const [llantasact, setllantas] = useState('');
    const [rinact, setrin] = useState('');
    const [numerollantasact, setnumerollantas] = useState('');


  const registrollantas=async(e)=>{
    try {
      e.preventDefault();
    
     const errores=await llantasdata.registrollanta(llantasact,rinact,numerollantasact) 
     console.log("registrado")
    /* if(errores){
      seterror(errores)

    }else(
    
    ) */
    /* navigate("/") */
    } catch (error) {
      console.log(error)
      
    }
    

}
console.log("varoles",llantasact,rinact,numerollantasact)
    return(
        <>
        <h1>Datos del punto</h1>
        <h1>Datos de las llantas</h1>
    <form >
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={tipodellantas}
      
      sx={{ width: 300 }}
      renderInput={(params) => <TextField onChange={(e)=>setllantas(e.target.value)} {...params} label="Tipo de llanta" />}
    />

    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Rines}
      sx={{ width: 300 }}
      getOptionLabel={(options) => typeof options === 'string'
      || options instanceof String ? options : ""}
      onChange={(e)=>setrin(e.target.value)}
      
      renderInput={(params) => <TextField  type="number" {...params} label="Rin" />}
    />
    <TextField id="filled-basic" type="number" onChange={(e)=>setnumerollantas(e.target.value)} label="Cantidad" variant="filled" />
    <Button type="submit" onClick={registrollantas} variant="contained">Registrar llantas</Button>
     <div id="map"></div>
     </form>
    


        </>
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

  

  