import React, { useState } from 'react';
import car from "./car.json";
import Lottie from "lottie-react"
import run from "./run.json"
import contact from "./contact.json"
import carab from "./carab.json"
const clicked=()=>
{
alert('Successfully Ordered')
}
function Home() {
  return (
   <div style={{backgroundColor:"black",display:"flex"}}>
    <div  style={{height:500,marginTop:100}} >
      <Lottie style= {{height:550,width:700,marginTop:20,marginLeft:50,backgroundColor:"white"}} animationData={run} loop={true}/>
      </div>
      
      <h1 style={{color:"white",marginTop:150,marginLeft:100}}>
        DRIVE YOUR DREAMS

      <br/>
      
      Discover the Maruti Experience
At Maruti, we blend innovation with reliability to create vehicles that redefine your driving experience. Embrace the journey with unmatched performance and exceptional comfort.

</h1>
    </div>
    
  );
}


  function About() {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-start', padding: 20,backgroundColor:"black",height:"100%" }}>
        <div style={{ backgroundColor: "black", padding: 20, flex: 1 }}>
          <header><h1 style={{ color: "white" , fontFamily: 'Arial, sans-serif',
        fontSize: '3rem',
        
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        margin: '20px 0',}}>WE BRAND BUILDERS</h1></header>
          <br />
          <h2 style={{ backgroundColor: "white", color: "black", padding: 5 }}>Products and Innovations</h2>
          <p style={{ color: "white" }}>
            Compact Cars: Maruti Suzuki is known for its compact and affordable cars, including the Alto, Wagon R and Swift.
            SUVs and MPVs: The company has expanded into the SUV and MPV segments with models like the Vitara Brezza, Ertiga, and S-Cross.
            Electric Vehicles: Maruti Suzuki has shown interest in electric vehicles and is working on developing eco-friendly solutions.
          </p>
          <h2 style={{ backgroundColor: "white", color: "black", padding: 5 }}>Market Position</h2>
          <p style={{ color: "white" }}>
            Dominance: Maruti Suzuki has a significant market share in India, consistently leading in terms of sales volume.
            Service Network: The company boasts an extensive service network across the country, ensuring accessibility and customer satisfaction.
          </p>
          <h2 style={{ backgroundColor: "white", color: "black", padding: 5 }}>Corporate Social Responsibility</h2>
          <p style={{ color: "white" }}>
            Maruti Suzuki is involved in various social initiatives, including environmental sustainability, education, and health.
          </p>
          <h2 style={{ backgroundColor: "white", color: "black", padding: 5 }}>Recent Developments</h2>
          <p style={{ color: "white" }}>
            New Models: Maruti Suzuki continues to innovate with new models and upgrades, focusing on safety, technology, and customer preferences.
            Sustainability: The company is increasingly focusing on sustainability, including energy-efficient manufacturing processes and exploring alternative fuel options.
          </p>
          <footer style={{ color: "white" }}>
            <b>If you have specific questions about Maruti Suzuki or need detailed information about a particular model or aspect of the company, feel free to ask!</b>
          </footer>
        </div>
        <div >
          <br/>
          <br/>
          
         <Lottie animationData={carab} loop={true} style={{height:450,width:800}}/>
        
        
          <img  style={{width:700,height:400}} src="https://imgs.search.brave.com/W2PTPXjlHgZLUkBdhRazrs7pyqFXaTiMLTFjffk6fpU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzMx/MzguanBn" />
       </div>
      </div>
    );
  }
  

function Contact() {
  const handle = () => {
    alert('Successfully submitted');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', padding: 20 ,backgroundColor:"black"}}>
      <div style={{backgroundColor:"brown",height:540,width:550,  padding: 0 ,borderColor:"white",marginLeft:100,marginTop:50}}>
        <br/>
        <b><i><h1 style={{color:"white"}}>Contact Us</h1></i></b>
        <br/>
        <input type="text" placeholder="Name" style={{textAlign:"center",marginTop:20,height:40,width:400,borderRadius:20}} required />
        <input type="text" placeholder="Email" style={{textAlign:"center",marginTop:20,height:40,width:400,borderRadius:20}} required />
        <input type="text" placeholder="Phone No" style={{textAlign:"center",marginTop:20,height:40,width:400,borderRadius:20}} required />
        <textarea className="form-control mx-2 my-5" placeholder="Write message" id="exampleFormControlTextarea1" rows="3" style={{textAlign:"center",height:100,width:515}}></textarea>
        <button type="button" className="btn btn-success" style={{height:50,width:250,borderRadius:20}} onClick={handle}>Submit</button>
      </div>
      <div style={{dispaly:"flex",marginLeft:10,float:"right"}}>
       <Lottie animationData={contact} loop={true} style={{height:500}}/>
       
      </div>
    </div>
  );
}

export default function Web() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div >
      <div style={{backgroundColor:"b"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"blue"}}>
        <a className="navbar-brand" href="#">Maruti</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick={() => handleNavigation('Home')}>Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleNavigation('About')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleNavigation('Contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      {currentPage === 'Home' && <Home />}
      {currentPage === 'About' && <About />}
      {currentPage === 'Contact' && <Contact />}
    </div>
  );
}
