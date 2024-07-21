import React, { useState } from 'react';


export default function Web() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
 

  return (
    <div>
      <nav classNameName="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div classNameName="container-fluid">
          <div classNameName="collapse navbar-collapse" id="navbarSupportedContent" style={{ backgroundColor: "black", color: "white" }}>
            <a classNameName="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white",flex:"inline" }} onClick={() => handleNavigation('Home')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }} onClick={() => handleNavigation('About')}>About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }} onClick={() => handleNavigation('Contact')}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        {currentPage === 'Home' && <Home />}
        {currentPage === 'About' && <About />}
        {currentPage === 'Contact' && <Contact />}
      </div>
    </div>
  );
}
const handle=()=>
  {
    alert('Successfully submitted')
  }

function Home() {
  return (
    <div style={{ backgroundImage: `url(C:\\Users\\palay\\OneDrive\\Desktop\\react\\react_web\\react_web\\src\\component\\car.webp)`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    </div>
  );
}

function About() {
  return (
    <div style={{backgroundColor:"black",backgroundSize:"cover"}}>
      <h1 style={{color:"white"}}> WE BRAND BUILDERS </h1>
      <br/>
     <h2 style={{backgroundColor:"white"}}>Products and Innovations</h2>
     <p style={{color:"white"}}>
      Compact Cars: Maruti Suzuki is known for its compact and affordable cars, including the Alto, Wagon R and swift.
      SUVs and MPVs: The company has expanded into the SUV and MPV segments with models like the Vitara Brezza, Ertiga, and S-Cross.
      Electric Vehicles: Maruti Suzuki has shown interest in electric vehicles and is working on developing eco-friendly solutions
     </p>
     <h2 style={{backgroundColor:"white"}}>Market Position</h2>
     <p style={{color:"white"}}>
     Dominance: Maruti Suzuki has a significant market share in India, consistently leading in terms of sales volume.
     Service Network: The company boasts an extensive service network across the country, ensuring accessibility and customer satisfaction.

     </p>
     <h2 style={{backgroundColor:"white"}}>Corporate Social Responsibility</h2>
     <p style={{color:"white"}}>
     Maruti Suzuki is involved in various social initiatives, including environmental sustainability, education, and health.

     </p>
     <h2 style={{backgroundColor:"white"}}>
     Recent Developments
     </h2>
     <p style={{color:"white"}}>
     New Models: Maruti Suzuki continues to innovate with new models and upgrades, focusing on safety, technology, and customer preferences.
     Sustainability: The company is increasingly focusing on sustainability, including energy-efficient manufacturing processes and exploring alternative fuel options.

     </p>
     <h3>If you have specific questions about Maruti Suzuki or need detailed information about a particular model or aspect of the company, feel free to ask!</h3>
    </div>
  );
}

function Contact() {
  return (
    <div >
   
   <div style={{backgroundColor:"black",height:540,width:550,marginLeft:270,marginTop:50}}>
   <br/>
   <b><i> <h1 style={{color:"white"}}>Contact Us</h1></i></b>
  
    <input type="text" placeholder="Name" style={{textAlign:"center",marginTop:20,height:40,width:400}} required></input>
    
    <input type="text" placeholder="Email" style={{textAlign:"center",marginTop:20,height:40,width:400}} required>
    </input>
    
    <input type="text" placeholder="Phone No" style={{textAlign:"center",marginTop:20,height:40,width:400}} required>
    </input>
    <textarea className="form-control mx-2 my-5" placeholder="Write message" id="exampleFormControlTextarea1" rows="3" style={{textAlign:"center",height:100,width:515}}></textarea>
    <button type="button" className="btn btn-success" style={{height:50,width:250,borderRadius:20}} onClick={handle}
>Submit</button>

</div>
   </div>
  
  );
}
