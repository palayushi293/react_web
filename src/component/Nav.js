import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
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
                alt="Maruti "
                loading="lazy"
              />
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contat">Contact</Link>
              </li>
            </ul>
          </div>

          </div>

           

        
      </nav>
    </div>
  );
}
