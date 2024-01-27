import React from "react";
import './Footer.css'
import iconGit from '../assets/icons8-github-24.png'
import iconInsta from '../assets/icons8-instagram-48.png'
import iconLinkedIn from '../assets/icons8-linked-in-50.png'
import whatsapp from '../assets/icons8-whatsapp-30.png'

export default function Footer(){
    return(
       <footer>
            <div className="footer-content">
           <label>dashanwd@gmail.com</label>
            <label>075-184-5440</label>
            </div>
           <div className="icons">
           <img src={iconGit} width="28px" height="28px"></img>
           <img src={iconInsta} width="32px" height="32px"></img>
           <img src={iconLinkedIn} width="32px" height="32px"></img>
           <img src={whatsapp} width="32px" height="32px"></img>
           </div>
          
           <span id="copyright">&copy; 2024 All Rights Reserved Personal Project by Dashan Nadeema  </span>
          
          
        </footer>
      
    )
}