import { Link } from "react-router-dom"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder'

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

function Inicio() {

    return(
        <div className="body-inicio">
        <div className="login-inicio">
            <div>
            <AccountCircleIcon></AccountCircleIcon>
            <p>SICLOG</p>
            </div>
            <div className="entrada-login">
            <PersonIcon></PersonIcon>
            <Link className="enlacesgeneral" to="/login">Iniciar sesion</Link>
            </div>
           
            
        </div>
        <div className="slider-frame">
            <ul>
                <li><img src="/images/slider1.jpg" alt="imagen 1" /></li>
                <li><img src="/images/slider2.jpg" alt="imagen 2" /></li>
                <li><img src="/images/llanta_slider5.jpeg" alt="imagen 3" /></li>
                <li><img src="/images/llanta_slider6.jpeg" alt="imagen 4" /></li>
            </ul>
        </div>
        <nav className="barra-navegacion">
            <Link className="enlacesgeneral" to="/">Inicio</Link>
            <Link className="enlacesgeneral" to="/">Reportar llantas</Link>
            <Link className="enlacesgeneral" to="/conductor">Transportista</Link>
            <Link className="enlacesgeneral" to="/recolector">Recolector</Link>
            <Link className="enlacesgeneral" to="/tabla">Dashboard</Link>
        </nav>
        <ImageList
        className="listaimagenes"
      sx={{
        width: 500,
        height: 450,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
        
        </div>
    )
    
}

export default Inicio


const itemData = [
    {
      img: 'images/galeria1.webp',
      title: 'Reciclaje',
      author: '@bkristastucchio',
      featured: true,
    },
    {
      img: 'images/galeria2.jpg',
      title: 'Cuidar',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'images/galeria3.jpg',
      title: 'Llantas',
      author: '@helloimnik',
    }
  ];