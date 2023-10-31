import React from 'react'
import "./PrimaryFocus.css"
import { FaConnectdevelop } from "react-icons/fa";
import { FaMobileAlt,FaRegFileCode,FaChartBar } from "react-icons/fa";

export const PrimaryFocus = () => {
  return (
    <div className='PrimaryFocus'>
         
         <h1>Primary Focus</h1>

         <div className='skills'>
            <div className='card'>
                <div className='icon'>
                    <h1><FaConnectdevelop/></h1>
                </div>
                <div className='skillinfo'><h2>Web Design & Development</h2>
                <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p></div>
            </div>
            <div className='card'>
            <div className='icon'>
                    <h1><FaMobileAlt/></h1>
                </div>
                <div className='skillinfo'><h2>Mobile Apps & Games</h2>
                <p>Creating and developing engaging mobile apps and games for iOS and Android devices.</p></div>
            </div>
            <div className='card'>
            <div className='icon'>
                    <h1><FaRegFileCode/></h1>
                </div>
                <div className='skillinfo'><h2>Development Solutions</h2>
                <p>Utilizing JavaScript javascript frameworks like React, Node, Next, Vue and more to build interactive web applications.</p></div>
            </div>
            <div className='card'>
            <div className='icon'>
                    <h1><FaChartBar/></h1>
                </div>
                <div className='skillinfo'><h2>Marketing & SEO</h2>
                <p>Using SEO and marketing strategies to boost online visibility and promote products or services.</p></div>
            </div>
         </div>

    </div>
  )
}
