import React from 'react';
import "./Sig.css"
export default function Sign() {
  return (
    <>
      <div>
        <div className="sign" style={{ height: 450, width: 500, marginLeft: 'auto', marginRight: 'auto', marginTop: 60, backgroundColor: "black", color: "white", padding: 20 }}>
          <h1 style={{ color: "white", textAlign: "center ", borderTop:100 }}>Signup</h1>
          <div style={{ marginTop: 100 }}></div>
          <input type="text" placeholder="Enter email" style={{ height: 40, width: 400, borderRadius: 15, textAlign: "center", marginBottom: 20 }} />
          <input type="password" placeholder="Enter password" style={{ height: 40, width: 400, borderRadius: 15, textAlign: "center", marginBottom: 20 }} />
          <p style={{ textAlign: "center" }}>Have you? <a href="#" style={{ color: "white" }}>Forgot Password</a></p>
        </div>
      </div>
    </>
  );
}
