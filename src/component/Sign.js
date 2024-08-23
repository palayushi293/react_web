import React, { useState } from 'react';
import "./Sig.css";
import Lottie from 'lottie-react';
import axios from 'axios';
import login from './login1.json';

export default function Sign() {
  

  const clicked = () => {
    alert('Successfully logged in');
  }

 

  return (
    <>
      <form >
        <div style={{ backgroundColor: "white", height: 20, width: 30 }}>
          <Lottie style={{ height: 450, width: 700, marginTop: 20, marginLeft: 50, backgroundColor: "white" }} animationData={login} loop={true} />
        </div>
        <div style={{ height: 380, width: 450, backgroundColor: "yellow", marginLeft: 550, marginTop: 40 }}>
          <br />
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Enter your email"
            style={{ height: 40, width: 300, marginTop: 40, borderRadius: 20, textAlign: "center" }}
           
            
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            style={{ height: 40, width: 300, borderRadius: 20, textAlign: "center" }}
            
            
          />
          <br />
          <br />
          <br />
          <button type="submit" className="btn btn-primary" style={{ height: 50, width: 200, borderRadius: 15 ,marginTop:1}}>Login</button>
          <p>Don't have account <a href="#">Signup</a></p>
        </div>
      </form>
    </>
  );
}
