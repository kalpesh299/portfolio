import React from 'react'
import "./Bio.css"
import { FaUserAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillHourglass } from "react-icons/ai";

export const BioCard = () => {
  return (
    <div className="Bio">

     <div className='bio_card'>
     
        <img src="https://oktayshakirov.com/assets/images/avatar.jpg" alt='img'/>
        <h1>Oktay Shakirov</h1>
        <h4>Hello, World !</h4>
        <h1>_________________________</h1>
          <div className="additinal_bio"><div className='symbol'><AiFillHourglass/></div><div className='info'><p>AGE</p><p>29 Years old</p></div></div>
          <div className="additinal_bio"><div className='symbol'><FaMapMarkerAlt/></div><div className='info'><p >LOCATION</p> <p>berlin</p></div></div>
          <div className="additinal_bio"><div className='symbol'><FaUserAlt/></div><div className='info'><p>PERONALITY T</p><p>INTJ-T</p></div></div>

     </div>


    </div>
  )
}
