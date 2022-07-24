import { Button } from '@mui/material';
import React from 'react'
import '../css_files/homepage.css';
import img from '../pictures/Homepage.png'
import { Link } from 'react-router-dom';
import { GiFoodTruck, GiChopsticks } from "react-icons/gi";
import { ImWink } from "react-icons/im";
export const Home = () => {

  return (
    <div style={{ backgroundImage: `url(${img})`}}>
     <h1 className='header'>Xing Sushi</h1>
     <h2 className='header2'> <ImWink/> Best Service</h2>
     <h2 className='header2'><GiFoodTruck/> Quick Delivery</h2>
     <h2 className='header2'><GiChopsticks/> The Best Sushi In Town </h2>

     <button className='homebutton1'>
      <Link to='Reservation' className='homebuttoncolor' style={{textDecoration:'none'}}>Reservation</Link></button>
     <button className='homebutton2'>
      <Link to='Menu' className='homebuttoncolor' style={{textDecoration:'none'}}>Explore Menu</Link>
      </button>
    
    </div>
  )
}
