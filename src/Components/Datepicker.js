import React, { useEffect, useState } from 'react';
import '../css_files/datepicker.css';
import Popup from 'reactjs-popup';
import { GoCheck } from 'react-icons/go'
import {db} from '../firebase-connection';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const Datepicker = () => {

  const [newNumber,setNewNumber] =useState(0);
  const [newTime,setNewTime] =useState(0);
  const [newDate,setNewDate] = useState(Date());
  const reservationCollectionRef = collection(db,"reservations");

    const [reservation,setReservation] = useState([]);
    const createReservation = async () =>{
      await addDoc(reservationCollectionRef, {numberOfGuests: Number(newNumber), date: newDate, time: newTime});
    }
    const popup =  () => {
       window.alert("Your Reservation at Is Confirmed")
    };

   useEffect(() =>{
      const getUsers = async () => {
        const data = await getDocs(reservationCollectionRef);
        setReservation(data.docs.map((doc) => ({...doc.data(),id: doc.id})));
      };
      
      getUsers();
   },[]);



  return (

    <div className='main'>
      <h1>Please Select Number of Guests</h1>
      <input type="number" placeholder="numberOfGuests..." 
        onChange={(event) => 
      {setNewNumber(event.target.value);}}/>
      <p className='text10'>Please Contact Us If You Are More Than 10</p>

      <h1>Select The Date</h1>
      <input type ="date" placeholder ="Date..."
       onChange={(event) => 
      {setNewDate(event.target.value);}}/>

      <h1>Select The Time</h1>
       <input type ="time" placeholder ="Time..." className='timeinput'
         onChange={(event) => 
      {setNewTime(event.target.value);}}/>
      <p></p>
          
   <button    onClick={() => {
          createReservation();
          popup();
        }} className="confirmbutton">
    Confirm Reservation
    </button>
          
    </div>
      
    
  )
}

