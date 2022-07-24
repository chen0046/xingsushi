import React from 'react'
import '../css_files/aboutus.css';
import img from '../pictures/baggrund1.png'
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { SiJusteat } from "react-icons/si";
export const AboutUS = () => {

  return (

    <div style={{ backgroundImage: `url(${img})`}}>
      <img src='Logo2.png' className='logo2'></img>
      <h1 className='text'>Contact Us</h1>
      <p className='text '> <AiFillPhone /> 38 10 11 10 </p>
      <p className='text'> <AiOutlineMail/> xingsushi@hotmail.com</p>

      <a href="https://www.facebook.com/search/top?q=xing%20sushi" target="_blank"   >
          <button> <BsFacebook/> </button>
        </a>
      <h1 className='text'>Order Food</h1>
        <a href="https://www.just-eat.dk/menu/xing-sushi-takeaway" target="_blank"   >
          <button> <SiJusteat/> </button>
        </a>

    </div>
  )
}
