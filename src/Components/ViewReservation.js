import React, { useEffect, useState } from 'react';
import {db} from '../firebase-connection';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import '../css_files/viewReservation.css';
import { Link } from 'react-router-dom';

export const ViewReservation = () => {

  const reservationCollectionRef = collection(db,"reservations");
  const [reservation,setReservation] = useState([]);

  useEffect(() =>{
    const getReservations = async () => {
      const data = await getDocs(reservationCollectionRef);
      setReservation(data.docs.map((doc) => ({...doc.data(),id: doc.id})));
    };
    getReservations();
  },[reservationCollectionRef]);

    const deleteReservation =async (id) =>{
      const reservationDoc = doc(db,"reservations", id);
      await deleteDoc(reservationDoc);
    }

    const increasenumberOfGuests = async (id, numberOfGuests) => {
      const reservationDoc = doc(db,"reservations",id)
      const newFields ={ numberOfGuests: numberOfGuests + 1};
      await updateDoc(reservationDoc,newFields);
    };

    const decreasenumberOfGuests = async (id, numberOfGuests) => {
      const reservationDoc = doc(db,"reservations",id)
      const newFields ={ numberOfGuests: numberOfGuests - 1};
      await updateDoc(reservationDoc,newFields);
    };

  return (
    <div>
           {reservation.map((reservation) => {
      return(
        <div className='main'>
          <h1 className='reservationheader'>Your Reservation</h1>
          <h3>Date: {reservation.date}</h3>
          <h3>Time: {reservation.time}</h3>
          <h3>Costumers: {reservation.numberOfGuests}</h3>
          <button className='increasebutton'  onClick={() => { increasenumberOfGuests(reservation.id, reservation.numberOfGuests);}}>Increase</button>
          <button className='decreasebutton'  onClick={() => { decreasenumberOfGuests(reservation.id, reservation.numberOfGuests);}}>Decrease</button>


          <button className='deletebutton' onClick={()=>{deleteReservation(reservation.id)}}> Delete The Reservation</button>

          <button className='deletebutton' onClick={()=>{deleteReservation(reservation.id)}}>
          <Link to= '/reservation' onClick={()=>{deleteReservation(reservation.id)}} style={{textDecoration:'none'}} className='textcolor5'>
            Delete&Create A New Reservation
          </Link>
          </button>

        </div>
      );
     })} 
        
    </div>
  )
}
