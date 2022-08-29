
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import dashboardservices from '../../services/dashboard-services';
import Grafica_lineal from './Grafica';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '40px',
  margin:'5px'
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function Cuerpo() {

  const [actAlluser, setAlluser] = React.useState([]);
  const [actllantas, setllantas] = React.useState([]);

  React.useEffect(()=>{

    const alluser=async()=>{
      try {
        const data=await dashboardservices.alluser();
        const llantas=await dashboardservices.llantas();
          setAlluser(data.data)
          setllantas(llantas.data)

      } catch (error) {
        
      }

    }
    alluser()

  },[])
  

    return (
        <Grid sx={{display:'flex'}}>
            <Grid item sx={{
              margin:'10px'
            }}>
              <ThemeProvider theme={darkTheme}>
                <Box
                  sx={{
                   
                    bgcolor: 'background.default',
                    display: 'grid',
                    padding: '5px'
                  }}
                >
                    <Item key='usuarios' >
                      <p className='parrafo'>Total de Usuarios: {actAlluser.totaldeusuarios}</p>
                    </Item>
                  
                </Box>
              </ThemeProvider>

              
            </Grid>

            <Grid item sx={{
              margin:'10px'
            }}>
              <ThemeProvider theme={darkTheme}>
                <Box
                  sx={{
                   
                    bgcolor: 'background.default',
                    display: 'grid',
                    padding: '5px'
                  }}
                >
                    <Item key='usuarios' >
                      <p className='parrafo'>Llantas registradas: {actllantas.registradas}</p>
                    </Item>
                  
                </Box>
              </ThemeProvider>

              
            </Grid>

            <Grid item sx={{
              margin:'10px'
            }}>
              <ThemeProvider theme={darkTheme}>
                <Box
                  sx={{
                    
                    bgcolor: 'background.default',
                    display: 'grid',
                    padding: '5px'
                  }}
                >
                    <Item key='usuarios' >
                      <p className='parrafo'>Total puntos: {actAlluser.totalpuntos}</p>
                    </Item>
                  
                </Box>
              </ThemeProvider>

              
            </Grid>
            <Grafica_lineal></Grafica_lineal>
         
        </Grid>
      );

}