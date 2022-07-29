import React from 'react'
import { ViewReservation } from '../Components/ViewReservation'
import img from '../pictures/baggrund1.png'


export const ChangeReservation = () => {
  return (
    <div style={{ backgroundImage: `url(${img})`}} className="img">
        <ViewReservation/>
    </div>
  )
}
