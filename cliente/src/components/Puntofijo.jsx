import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';




function Puntofijo() {
    return(
        <>
        <h1>Datos del punto</h1>
        <h1>Datos de las llantas</h1>
        


 
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={tipodellantas}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Tipo de llanta" />}
    />

    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Rines}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Rin" />}
    />
    <TextField id="filled-basic" label="Cantidad" variant="filled" />
    <Button type="submit" variant="contained">Registrar llantas</Button>
     <div id="map"></div>
    


        </>
    )
        
    
    
}

export default Puntofijo

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
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

  

  