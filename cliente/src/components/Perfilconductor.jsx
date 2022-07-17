import * as React from 'react';
import { useRef, useState,useEffect } from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer
} from '@react-google-maps/api';

import sensorsdata from '../services/sensors-services';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

/* ------------------------google api------------------- */

const containerStyle = {
  width: '400px',
  height: '400px'
};




/* ---------------------------------------------------- */

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));

function Perfilconductor() {
    const [age, setAge] = useState('');
    const [co2act, setco2] = useState('');
    const [coact, setco] = useState('');
    const [longintudact, setlongintud] = useState('');
    const [latitudact, setlatitud] = useState('');

    const handleChange = (event) => {
    setAge(event.target.value);
  };
/*------------------- Consumir apis de sensores de gps------------- */

  useEffect(()=>{

    const datosco2 = async () => {
        const co2Data = await sensorsdata.sensorsco2data();
        if(co2Data.data) { 
            setco2(co2Data.data.result)
        }
        
    }

    datosco2();
   }, [co2act]);


   useEffect(()=>{

    const datosco = async () => {
        const coData = await sensorsdata.sensorscodata();
        if(coData.data) { 
          setco(coData.data.result)
        }
        
        
    }

    datosco();
   }, [coact]);


   useEffect(()=>{

    const longintud = async () => {
        const longintudData = await sensorsdata.longintuddata();
        if(longintudData.data) { 
          setlongintud(longintudData.data.result)
        }
        
    }

    longintud();
   }, [longintudact]);

   useEffect(()=>{

    const latitud = async () => {
        const latitudData = await sensorsdata.latituddata();
        if(latitudData.data) { 
          setlatitud(latitudData.data.result)
        }
        
    }

    latitud();
   }, [latitudact]);
   /*----------------------------------------------------------------------- */
   /* -----------------Google api------------------------------- */
   
   const center = {

    lat:latitudact,
    lng:longintudact
  };
  
   
  const originRef = useRef()
  const destiantionRef = useRef()
  
  const [map, setMap] = useState(null)
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')


   const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],

  })
  

  if (!isLoaded) {
    return <Skeleton/>
  }


    async function calculateRoute() {
    try {
      if (originRef.current.value === '' || destiantionRef.current.value === '') {
        return
      }
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService()
      const results =  await directionsService.route({
        origin: originRef.current.value,
        destination: destiantionRef.current.value,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      })
      
      console.log(results)
      setDirectionsResponse(results)
      setDistance(results.routes[0].legs[0].distance.text)
      setDuration(results.routes[0].legs[0].duration.text)
      
    } catch (error) {
      console.log(error)
      console.log(originRef.current.value)
    }
    
  }


  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
    window.location.reload();
  }
  

   /* ---------------------------- */
  
    return(
        <>
    <div className='body-perfilconductor'>
      
      <FormControl variant="filled" sx={{ m: 1, minWidth: 170 }}>
        <InputLabel id="demo-simple-select-filled-label">Tipo de vehiculo</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Turbo">Turbo</MenuItem>
          <MenuItem value="Sencillo">Sencillo</MenuItem>
          <MenuItem value="Doble troque">Doble troque</MenuItem>
        </Select>
        <TextField
        required
          id="outlined-number"
          label="Capacidad"
          type="number"
        />
      </FormControl>
    </div>  

    {/* ----------------google api maps------------------- */}

      <Autocomplete>
      <input ref={originRef} type="text" />
      </Autocomplete>
      <Autocomplete>
      <input ref={destiantionRef} type="text" />
      </Autocomplete>
      
    
    <Button variant="contained" type='submit' onClick={calculateRoute}>Calcular ruta</Button>
    <Button variant="contained" onClick={() => {map.panTo(center); map.setZoom(18)}}>
    <LocationOnIcon></LocationOnIcon>
    </Button>

    <Button variant="contained" onClick={clearRoute}>
    <DeleteIcon></DeleteIcon>
    </Button>
 

    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        onLoad={map => setMap(map)}
        >
          <></>
        <Marker position={center}/>
        
        {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
          
          
      </GoogleMap> 

    {/* ---------------------------------------------------- */}

   {/* ---------------------------sensor de gas ---------- */}
    <Grid container spacing={2}>
      {[darkTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
                <Item key={co2act} elevation={co2act}>
                  {`CO2=${co2act}`}
                </Item>
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>


    <Grid container spacing={2}>
      {[darkTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
                <Item key={coact} elevation={coact}>
                  {`CO=${coact}`}
                </Item>
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
    {/* ---------------------------------------------------------- */}

        </>
    )
    
}

export default Perfilconductor






 




















