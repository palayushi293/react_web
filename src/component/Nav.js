import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { useAuth0 } from "@auth0/auth0-react";

export default function Nav(props) {
  const { loginWithRedirect, logout ,isAuthenticated} = useAuth0();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://imgs.search.brave.com/FV6qjrv5FJdSovsLV74y57SqHSMe19kbRvLxyQyrmxw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/c3ZlY3Rvci5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMTMv/MDUvc3V6dWtpLWVw/cy12ZWN0b3ItbG9n/by0yMDB4MjAwLnBu/Zw"
                height="60"
                alt="Maruti"
                loading="lazy"
              />
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginTop: 30, height: 40 }}>
              <li className="nav-item">
                <b><Link className="nav-link" style={{ fontFamily: 'Roboto' }} to="/">{props.home}</Link></b>
              </li>
              <li className="nav-item">
                <b><Link className="nav-link" style={{ fontFamily: 'Roboto' }} to="/about">{props.about}</Link></b>
              </li>
              <li className="nav-item">
                <b><Link className="nav-link" style={{ fontFamily: 'Roboto' }} to="/financing">{props.financing}</Link></b>
              </li>
              <li className="nav-item">
                <b><Link className="nav-link" style={{ fontFamily: 'Roboto' }} to="/collections">{props.sample}</Link></b>
              </li>
              <li className="nav-item" style={{ marginLeft: 60, paddingLeft: 640 }}>
                <div className="input-group">
                  <div className="form-outline" data-mdb-input-init>
                    <input type="search" id="form1" placeholder="Search" className="form-control" style={{ height: 40, width: 210 }} />
                  </div>
                  <button type="button" className="btn btn-light mx-1">
                    <img src="https://imgs.search.brave.com/XqDSlT3Ga2caqpEEeK7aB3bsgx_1EHCKHRX2oh8cG7I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvaGF3Y29ucy8z/Mi82OTg1MzMtaWNv/bi0xMTEtc2VhcmNo/LTEyOC5wbmc" style={{ height: 20 }} alt="Search Icon" />
                  </button>
                </div>
              </li>
              <li className="nav-item">
                { isAuthenticated ?
               
              
              (  <button  style={{borderRadius:6,height:46,width:80,backgroundColor:"blue",color:"white"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>):
              (<button style={{borderRadius:6,height:46,width:80,backgroundColor:"blue",color:"white"}} onClick={() => loginWithRedirect()}>Log In</button>)
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
