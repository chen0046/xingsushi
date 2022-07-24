import React, { useState } from 'react';
import '../css_files/datepicker.css';
import Popup from 'reactjs-popup';
import { GoCheck } from 'react-icons/go'

export const Datepicker = () => {
    const [date,setDate]=useState();
    const [time,setTime]=useState();
    const [number,setNumber]=useState();

  return (

    <div className='main'>
        <h1>Selected number of guests: {number} </h1>
        <input type="number" onChange={e=>setNumber(e.target.value)} min="1" step="1"/>
        <p className='text10'>Please contact us if the number are more than 10</p>

        <h1>Selected Date: {date} </h1>
        <input type="date" onChange={e=>setDate(e.target.value)}/>

        <h1>Selected Time: {time} </h1>
        <input type="time" onChange={e=>setTime(e.target.value)} className="timeinput"/>
        <p></p>


        <Popup trigger={<button className='confirmbutton'> 
            Confirm The Reservation</button>} position="bottom center">
            <div className='buttontext'>Your Booking Has Been Confirmed <GoCheck className='checkicon'/></div>
         </Popup>
    
    </div>
    
  )
}

