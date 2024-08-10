import React from "react";
import './About.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';


const About=()=>{


    return(
        <div>
            

            <div className="About-section">
                <div className="about-content-para">
                <h1> <span>About</span> GameVault</h1>
                <div className="about-content">
                <h3>Explore Diverse Game Category.</h3>
                
                <h3>Find Your Next Favorite Game.</h3>
                <h3>Coneect with a Vibrant Gaming Community.</h3>
                <button className="about-button">Explore community </button>
                </div>
              




 

                </div>
                <div className="about-content-carousal">
                   
                     <div className="about-img">

                     </div>
                      

                </div>


            </div>
        </div>
    )

}

export default About;