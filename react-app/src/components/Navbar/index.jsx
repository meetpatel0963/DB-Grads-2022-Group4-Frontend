import React from 'react'
import './styles.css';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button, Menu, MenuItem } from '@mui/material';

const Navbar = ({isOpened,setIsOpened}) => {
  return (
    <div className='navbar'>
        <div className="icon" onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
        </div>
        <div className='container'>
          <div className='name'>Home</div>

          <Button className='logout' style={{marginRight: '2%'}}>Logout</Button>
        </div>
    </div>
  )
}

export default Navbar