
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


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

export default function Cuerpo({actAlluser,actllantas}) {
  

    return (
        <Grid sx={{display:'flex'}}>
          <div>
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
                      <p className='parrafo'>Llantas registradas: {actllantas}</p>
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
            </div>
            <Grafica_lineal actllantas={actllantas}></Grafica_lineal>

          
         
        </Grid>
      );

}