import React from 'react'
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
