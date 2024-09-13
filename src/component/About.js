import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import carab from "./carab.json";

export default function About() {
  useEffect(() => {
    document.title = "Maruti About";
  }, 20);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: carab,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <h3>WE BRAND BUILDER</h3>
      <div style={{}}>
<Lottie style={{height:800,width:800,marginLeft:300}}animationData={carab} loop={true}/>
      </div>
      <div style={{backgroundColor:"#0096FF", fontFamily:"cursive",color:"white",marginLeft:50,marginRight:50}}>
        <h3>Popular Models</h3>
        <p>
        Maruti Suzuki is known for its wide range of vehicles, including popular models like the Maruti 800 (now discontinued), Alto, Swift, Dzire, Baleno, and Vitara Brezza.
        Maruti Suzuki has one of the largest dealership networks in India, providing extensive service and support to customers across urban and rural areas.
        </p>
       <h3>Market Leader</h3>
       <p>
       Maruti has maintained a dominant position in the Indian car market for decades, often capturing over 50% of the market share.

       </p>
       <h3>
       Manufacturing
       </h3>
       <p>
       he company has several manufacturing plants across India, with significant facilities in Gurgaon, Manesar, and Gujarat.
       </p>
       <h3>
       Technology
       </h3>
       <p>
       Maruti Suzuki has also been at the forefront of introducing new technologies, including fuel-efficient engines, hybrid systems, and more recently, electric vehicles.
       </p>
       <h3>
       Dealer Network
       </h3>
       <p> Maruti Suzuki has one of the largest dealership networks in India, providing extensive service and support to customers across urban and rural areas.</p>
      </div>
    </div>
  );
}
