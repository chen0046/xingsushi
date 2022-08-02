import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Layout } from './pages/Layout';
import { AboutUS } from './pages/AboutUS';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import './css_files/homepage.css';
import { Reservation } from './pages/Reservation';
import { ChangeReservation } from './pages/ChangeReservation'

function App() {

  return (
    
  <div >


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about-us' element={<AboutUS/>}/>
          <Route path='menu' element={<Menu/>}/>
          <Route path='reservation' element={<Reservation/>}/>
          <Route path='changereservation' element={<ChangeReservation/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
     </div>
  );

}
export default App;

