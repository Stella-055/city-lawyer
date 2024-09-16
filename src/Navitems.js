import React, { useState } from 'react'
import { Link } from 'react-scroll';

import {  FaHome} from 'react-icons/fa'
function Navitems() {
  const [tog ,setTog]=useState(false)
  function toggleMenu(){
   setTog(!tog)
  }
  return (
    <div>
 <div>
 <div className="hamburger" onClick={ () =>toggleMenu()}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
        <nav  className={tog?"navbar-linksopen":"navbar"} >
      <div className='logo'><p><b>SA</b></p></div>
            <div className="navbar-links">
              
        <Link className='linknav' to="Home" smooth={true} duration={500}>
        <FaHome/>Home
      </Link>
      <Link className='linknav' to="Services" smooth={true} duration={500}>
         Services
      </Link>
      <Link className='linknav' to="Contacts" smooth={true} duration={500}>
      {tog?  "Contacts":
       <button className="contact-button">Contacts</button> }
      </Link> 
      </div>
     
    </nav>
    </div>
    </div>
  )
}

export default Navitems