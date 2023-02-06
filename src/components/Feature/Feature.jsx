import React from "react";
import Featuredbox from "./Featuredbox";
import feature1 from '../../images/olivia1.webp'
import feature2 from '../../images/olivia2.webp'
import feature3 from '../../images/olivia3.webp'

function Feature () {
    return (
        <div id="features">
           <div className="a-container">
               <Featuredbox image={feature1} title="Born" des="2014"/>
               <Featuredbox image={feature2} title="Gender"  des="Female"/>
               <Featuredbox image={feature3} title="Occupation" des="Taylor Swift's cat"/>

           </div>
        </div>
    )
}
export default Feature;