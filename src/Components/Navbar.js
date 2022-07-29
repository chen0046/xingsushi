import { Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar } from "@mui/material";
import React from 'react'
import '../css_files/navbar.css';


const Navbar = () => {
  return (

    <AppBar className='navbar' position="sticky">
      <Toolbar >
      <IconButton>
        <Link to='/'>
          <img src='../Logo.png' alt='' className='logo'>
          </img>
        </Link>
      </IconButton>
      
      <button className='Button' >
        <Link to="/" style={{textDecoration:'none'}} className='textcolor'>Home</Link>
      </button>

      <button className='Button'>
        <Link to="Menu" style={{textDecoration:'none'}} className='textcolor'>Menu</Link>
      </button>

      <button className='Button'>
        <Link to="about-us" style={{textDecoration:'none'}} className='textcolor' >Contact us</Link>
      </button>

      <button className='Button'>
        <Link to="changereservation" style={{textDecoration:'none'}} className='textcolor' >See Reservation</Link>
      </button>

      <button className='reservationbutton'>
        <Link to="reservation" style={{textDecoration:'none'}} className='textcolor' >Reservation</Link>
      </button>



      </Toolbar>
    </AppBar>
  )
}

export default Navbar;