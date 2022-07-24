import React from 'react'
import { Datepicker } from '../Components/Datepicker';
import '../css_files/aboutus.css';
import img from '../pictures/baggrund1.png'


export const Reservation = () => {
  return (
    <div style={{ backgroundImage: `url(${img})`}} className="img">
      <h1 className='reservationheader'>Xing Sushi</h1>
      <Datepicker></Datepicker>

    </div>
  )
}