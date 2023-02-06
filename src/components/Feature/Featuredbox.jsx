import React from "react";

function Featuredbox (props) {
    return (
        <div className="a-box">
          <div className="a-b-img">
             <img src={props.image}>
             </img>
             
          </div>
          <div className="a-b-text">
              <h2>{props.title}</h2>
              <p>{props.des}</p>
          </div>
          
        </div>
    )
}
export default Featuredbox;