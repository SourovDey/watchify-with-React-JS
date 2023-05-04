import React from "react";
import Logo from '../assets/images/logo.png'
import profileLogo from '../assets/images/sourov.jpeg'
const menu = () =>{
    return(
    <div className="header-menu">
              <div className="logo">
                <img src={Logo} alt="logo" />
              </div>
              <div className="menu">
                <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">Movies</a></li>
                  <li><a href="">TV Shows</a></li>
                </ul>
              </div>
              <div className="search-profile">
                <div className="search"><input type="text" placeholder='Search...'/></div>
                <div className="profile"><img src={profileLogo} alt="sourov" /></div>
              </div>
          </div>
    )
}

export default menu