import React from "react";


function About (props) {
    return (
        <div id="about">
          <div className="about-image">
             <img src={props.image} alt=''>

             </img>
          </div>
          <div className="about-text">
            <h2>{props.title}</h2>
            <p>Taylor Swift's cat Olivia Benson is 3rd richest pet 
                in world, worth ₹800 cr</p>
            {/* <button>{props.button}</button> */}
          </div>
        </div>
    )
}
export default About;