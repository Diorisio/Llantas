import * as React from 'react';
import { useRef, useState,useEffect } from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';

import sensorsdata from '../services/sensors-services';

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

/* ------------------------google api------------------- */

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {

  lat:6.266826,
  lng: -75.553810
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

    const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(()=>{

    const datosco2 = async () => {
        const co2Data = await sensorsdata();
        if(co2Data.data) { 
            setco2(co2Data.data.result)
        }
        console.log(co2Data.data.result)
    }

    datosco2();
   }, [co2act]);
   /* -----------------Google api------------------------------- */

   const [directionsResponse, setDirectionsResponse] = useState(null)

   const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    
  })
  const [map, setMap] = React.useState(null)


  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  if (!isLoaded) {
    return <Skeleton/>
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
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Punto de origen"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
    {/* ----------------google api maps------------------- */}

    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}>
          

        <></>
        <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
      </GoogleMap>

    {/* ---------------------------------------------------- */}

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

        </>
    )
    
}

export default Perfilconductor






 




















