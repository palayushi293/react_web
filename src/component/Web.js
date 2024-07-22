import React, { useState } from 'react';
const clicked=()=>
{
alert('Successfully Ordered')
}
function Home() {
  return (
    <div style={{ backgroundColor:'black',color:"white",height:700}}>
      <img  style={{height:"50%",width:"40%"}} src="https://images.pexels.com/photos/9796261/pexels-photo-9796261.jpeg?auto=compress&cs=tinysrgb&w=600"/>
     <b><i> <h1>BENNS LUXURY RIDE</h1></i></b>
      <h3>SIMPLE & SECURE WAY TO BUY A CAR</h3>
      <h4>
        Ready to Order your first car
      </h4>
      <br/>
      <button type="button" onClick={clicked} className="btn btn-secondary mx-8" style={{height:50,width:250,borderRadius:10}}>Order Now</button>

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
        <div style={{ marginLeft: 20,height:350,width:800 }}>
          <img src="https://imgs.search.brave.com/jt5xveIpRZRFeZGYKfSqMJSvnWAtGmwqgXredyfYSEc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplLzg3/MjAxMWYyNjYxZGYy/OTE2ZjNlZmExMDA4/Y2RiNzVjNDlhNGE1/OTUvaHViLzIwMTYv/MTIvMTQvOGVhNDFk/OWQtMmE3Ni00ZjM1/LTlkOWQtMWVmNDcy/ZjdkOWRjL2Nhci1w/aG90b2dyYXBoeS1o/b3ctdG8uanBnP2F1/dG89d2VicCZmaXQ9/Y3JvcCZoZWlnaHQ9/Njc1JndpZHRoPTEy/MDA" alt="Maruti Car" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        
        
          <img  style={{width:800,height:500}} src="https://imgs.search.brave.com/W2PTPXjlHgZLUkBdhRazrs7pyqFXaTiMLTFjffk6fpU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzMx/MzguanBn" />
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
        <img style={{height:350,width:600,marginLeft:10}} src="https://images.unsplash.com/photo-1511994477422-b69e44bd4ea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D"/>
        <img style={{height:350,width:600,marginLeft:10}} src="https://imgs.search.brave.com/jt5xveIpRZRFeZGYKfSqMJSvnWAtGmwqgXredyfYSEc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplLzg3/MjAxMWYyNjYxZGYy/OTE2ZjNlZmExMDA4/Y2RiNzVjNDlhNGE1/OTUvaHViLzIwMTYv/MTIvMTQvOGVhNDFk/OWQtMmE3Ni00ZjM1/LTlkOWQtMWVmNDcy/ZjdkOWRjL2Nhci1w/aG90b2dyYXBoeS1o/b3ctdG8uanBnP2F1/dG89d2VicCZmaXQ9/Y3JvcCZoZWlnaHQ9/Njc1JndpZHRoPTEy/MDA"/>
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
