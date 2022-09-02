import * as React from 'react';
import { useRef, useState,useEffect } from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteIcon from '@mui/icons-material/Delete';

import Skeleton from '@mui/material/Skeleton';
import { Button } from '@mui/material';

import Barralogin from './Barralogin'

import {useJsApiLoader,GoogleMap,Marker,Autocomplete,DirectionsRenderer,InfoWindow} from '@react-google-maps/api';

import sensorsdata from '../services/sensors-services';
import transportista from '../services/transportista-services';

/* ------------------------google api------------------- */

const markers = [
  {
    id: 1,
    name: "Punto inicial",
    position: {lat: 6.336618900299072, lng: -75.56346130371094}
  }
]

/* ---------------------------------------------------- */



function Perfilconductor() {
    const [co2act, setco2] = useState('');
    const [coact, setco] = useState('');
    const [longintudact, setlongintud] = useState('');
    const [latitudact, setlatitud] = useState('');
    const [actconductor, setconductor] = useState('');
    const [actllantas, setllantas] = useState('');
    const [actorigen, setorigen] = useState('null');
    const [actdestino, setdestino] = useState('null');
    /* {lat: 6.336618900299072, lng: -75.56346130371094} */
    const handleChange = (event) => {
    setconductor(event.target.value);
  };

  /* -----------------------apis para el registro de la info del conductor */

       const register=async(e)=>{
        try {
          e.preventDefault();
          
        
         await transportista.registro(actconductor,actllantas,actorigen,actdestino,localStorage.getItem('id')) 
        
        } catch (error) {
          console.log(error)
       }
      }

  /* --------------------------------------------------------------------- */
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

   useEffect(()=>{

    const enviodatos = async () => {
      try {
        await sensorsdata.enviodatos(co2act,coact,longintudact,latitudact,localStorage.getItem('id'));
        
      } catch (error) {
        console.log(error)
        
      }  
        
    }
    enviodatos();
   }, [co2act]);
   /*----------------------------------------------------------------------- */
   /* -----------------funciones Google api------------------------------- */
   
   const center = 
    {lat: 6.336618900299072, lng: -75.56346130371094}
    
  const originRef = useRef()
  const destiantionRef = useRef()
  
  const [map, setMap] = useState(null)
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

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
      if (destiantionRef.current.value === '') {
        return
      }
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService()
      const results =  await directionsService.route({
        origin: center,
        destination: destiantionRef.current.value,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      })
  
      setDirectionsResponse(results)
      setorigen(directionsResponse.routes[0].legs[0].start_address)
      setdestino(directionsResponse.routes[0].legs[0].end_address)
      console.log(actorigen)
      
    } catch (error) {
      console.log(error)
      
    }
  }
  function clearRoute() {
    setDirectionsResponse(null)
    originRef.current.value = ''
    destiantionRef.current.value = ''
    window.location.reload();
  }
   /* ---------------------------- */
  
    return(
        <div className='body-inicio'>
        <Barralogin></Barralogin>
    <div className='body-perfilconductor'>
      
      <FormControl variant="filled" sx={{ m: 1, minWidth: 170 }}>
        <InputLabel id="demo-simple-select-filled-label">Tipo de vehiculo</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={actconductor}
          onChange={(e)=>setconductor(e.target.value)}
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
          onChange={(e)=>setllantas(e.target.value)}
        />
      </FormControl>
    </div>  

    {/* ---------------- app google api maps------------------- */}

      <Autocomplete className='autocomplete'>
      <input ref={destiantionRef} type="text" />
      </Autocomplete>
      
    <Button variant="contained" type='submit' onClick={calculateRoute}>Calcular ruta</Button>
    <Button variant="contained" onClick={() => {map.panTo(center); map.setZoom(18)}}>
    <LocationOnIcon></LocationOnIcon>
    </Button>

    <Button variant="contained" onClick={clearRoute}>
    <DeleteIcon></DeleteIcon>
    </Button>
    <Button variant="contained" onClick={register} type='submit'>Iniciar ruta</Button>
 
    <GoogleMap
        center={center}
        zoom={18}
        onLoad={map=>setMap(map)}
        onClick={() => setActiveMarker(null)}
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        >

        {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
        
      ))}
      
        {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
          
      </GoogleMap> 
    {/* ---------------------------------------------------- */}
        </div>
    )
    
}

export default Perfilconductor






 




















