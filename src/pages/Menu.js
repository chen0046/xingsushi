import { collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import {db} from '../firebase-connection'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import {MenuCard}  from '../Components/MenuCard'
import img from '../pictures/baggrund1.png'
import '../css_files/menucard.css'

export const Menu = () => {


  return (
    
    <div style={{ backgroundImage: `url(${img})`}} className="img">
      <h1 className='reservationheader'>Most Popular Menus</h1>
      <MenuCard/>



      <a
        href="https://drive.google.com/file/d/1QNPoAxTN8DSWmXHIVlrZC41Hh_mhJjq0/view?usp=sharing"
      >
       <button className='seeWholeMenuButton'>View Whole Menu</button>
      </a>
    </div>
  )
}
