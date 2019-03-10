import React from 'react';
import './Navbar.css';

const Navbar = () =>{
 
    return (
      <>
      <div className="Navbar">
        <ul>
        <div className="home">
              <li>Home</li>
              <li>Notification</li>
              <li>messages</li>
              </div>
              <div>
              <li><i class="fa fa-twitter"></i></li>

              </div>
           <div className="menu">
            <li>Profile</li>
            <li><i class="fa fa-search"></i></li>
            <li>Tweet</li>
           </div>
        </ul>
         </div> 
      </>
    );
  
}

export default Navbar;