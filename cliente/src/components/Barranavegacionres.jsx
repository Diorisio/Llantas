import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const options = [   
  {Nombre:'Reportar llanta',Url:"/"},
  {Nombre:'Transportista',Url:"/conductor"},
  {Nombre:'Recolector',Url:"/recolector"},
  {Nombre:'Dashboard',Url:"/tabla"},

];

const ITEM_HEIGHT = 48;

export default function Barranavegacionres() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [actlink, setlink] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    console.log(event)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    
    
  };
 
  

  return (
    <div className='nav_responsive'>
      <MenuIcon
        aria-label="more"
        id="long-button"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </MenuIcon>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose} 
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            <Link className='enlacesgeneral' to={option.Url}>{option.Nombre}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
