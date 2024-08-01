import React from 'react';
import video from './Smoky_Background.mp4';
import "./Sig.css"
export default function Sign() {
  return (
    <>
      <div >
        <div classNmae="v">
        
       
        <div className="sign" style={{ height: 450, width: 500, marginLeft: 'auto', marginRight: 'auto', marginTop: 60, color: "white", padding: 20 }}>
          <video src={video} autoPlay loop muted>
          <h1 style={{ color: "white", textAlign: "center ", borderTop:100 }}>Signup</h1>
          <div style={{ marginTop: 100 }}></div>
          <input type="text" placeholder="Enter email" style={{ height: 40, width: 400, borderRadius: 15, textAlign: "center", marginBottom: 20 }} />
          <input type="password" placeholder="Enter password" style={{ height: 40, width: 400, borderRadius: 15, textAlign: "center", marginBottom: 20 }} />
          <p style={{ textAlign: "center" }}>Have you? <a href="#" style={{ color: "white" }}>Forgot Password</a></p>
         </video>
        </div>
       
      </div>
     
      </div>
    </>
  );
}
