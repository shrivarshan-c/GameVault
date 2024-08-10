import React from "react";
import logo from '../assets/gvault-color.png';
import './Header.css';
const Header=()=>{
    return(
        <nav className="Header-section">
           <img src={logo} alt='hello'></img>
           <div className="linkto">
           <a>Home</a>
           <a>About</a>
           <a>Categories </a>
           <a>Blogs</a>
           </div>
           <div className="nav-button">
           <button>Signup</button>
           <button>Login</button>

           </div>
         
             
        </nav>
    )

}

export default Header;