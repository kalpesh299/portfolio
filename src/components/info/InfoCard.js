import React from 'react'
import "./Info.css"
import { PrimaryFocus } from '../primaryfocus/PrimaryFocus';

export const InfoCard = () => {
  let flag=false;
  function showmore(){
 
    //console.log(document.querySelector(".hiddentext"))
    if(flag==false){document.querySelector(".hiddentext").style.display="inline"
    document.querySelector(".showmore").innerText="⬆ Show less ⬆";
  flag=true;}else{
    document.querySelector(".hiddentext").style.display="none"
    document.querySelector(".showmore").innerText="⬇ Show More ⬇";
    flag=false;
    }
    
  }


  return (
    <div className="Info">
     <nav>
      <ul>
        <li style={{color:'#f6d56e'}}>About</li>
        <li>Certaficates</li>
        <li>Project</li>
        <li>More</li>
        <li>Contact</li>
      </ul>
     </nav>
     <h1>
      About Me
     </h1>

     <p className='para'>
     Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.
     
     <span className='hiddentext'>
     In my free time, I enjoy exploring my other passions, such as photography and music production, which provide me with creative outlets. I am also very passionate about Web3 and everything related to crypto, NFTs and blockchain technology as I believe they have the potential to revolutionize business and online interactions.
     If you have an innovative idea for a project that needs to be developed, I would love to hear from you. Your vision can be turned into a real product. Don't hesitate to reach out and let's start a conversation about your concept. I'm excited to collaborate and help bring your ideas to life.
     </span>
     
     <h4 onClick={showmore} className='showmore'>⬇ Show More ⬇</h4>
     </p>

      <PrimaryFocus/>
    
    </div>
  )
}
