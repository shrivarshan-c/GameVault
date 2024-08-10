import React from "react";
import video from '../assets/video2.mp4';
import './Home.css';
import './Header.css';




const Home=()=>{


    return(
       <div className="Home-content">


        
            <div className="overlay">  </div>
            <video src={video} autoPlay loop muted>Not Available</video>

            <div className="home-page-content">
            <h1>Welcome to GameVault</h1>
            <p>Discover and explore your favorite games across various genres. Browse, find, and enjoy the best games, all in one place.</p>
            <button>Explore Now</button>
            </div>
            
        </div>
        
       
    )
}

export default Home;