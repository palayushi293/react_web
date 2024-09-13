import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import run from './run.json';
import manImage from './father.webp';


import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import './Home.css'; // Ensure Home.css has your necessary styles

export default function Home(props) {
  useEffect(() => {
    document.title = 'Maruti Home';
  }, []);

  return (
    <div>
      <div
        className="back"
        style={{height:500}}
      >
        <h1 style={{ color: 'white' ,marginTop:120}}>
          <b>{props.head}</b>
        </h1>
      </div>
      <div style={{ marginTop: 200, marginLeft: 100 }}>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              height: 400,
              width: 700,
              fontFamily: 'cursive',
              color: 'blue',
            }}
          >
            <h2> {props.start}</h2>
            <br />
            <h4>
             {props.explain}
            </h4>
          </div>
          <div style={{ marginLeft: 100, marginTop: 1, height: 100 }}>
            <Lottie animationData={run} loop={true} />
          </div>
        </div>
        <div style={{ backgroundColor: 'red', display: 'flex' }}>
          <div>
            <h3 style={{ color: 'white', height: 100 }}>
              40k+ Google Reviews
            </h3>
          </div>
          <div>
            <h3 style={{ color: 'white', height: 100 }}>34+ locations</h3>
          </div>
          <div>
            <h3 style={{ color: 'white', height: 100 }}>
              2,50,000+ Happy Customers
            </h3>
          </div>
        </div>
        <div style={{ marginTop: 60 }}>
          <h2 style={{ fontFamily: 'cursive' }}>{props.test}</h2>
          <br />
          <div style={{ display: 'flex' }}>
            <div style={{ height: 200, width: 400 }}>
              <img
                src="https://imgs.search.brave.com/EBWRv_OKxEhoAxMi4cHEguUCzpeHOku7fQMgY2NFUQI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZHJ5aWNvbnMu/Y29tL3VwbG9hZHMv/aWNvbi9wcmV2aWV3/Lzc3ODkvc21hbGxf/MXhfMzhjYmNkNzct/YjNlNy00MGQ5LWE4/N2MtZDkxMDk4MWNj/ZjRmLnBuZw"
                alt="Customer testimonial"
              />
              <p>
           {props.cos1re}
              </p>
              <b>{props.name1} (TJ)</b>
            </div>
            <div style={{ height: 200, width: 400, marginLeft: 50 }}>
              <img
                src="https://imgs.search.brave.com/EBWRv_OKxEhoAxMi4cHEguUCzpeHOku7fQMgY2NFUQI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZHJ5aWNvbnMu/Y29tL3VwbG9hZHMv/aWNvbi9wcmV2aWV3/Lzc3ODkvc21hbGxf/MXhfMzhjYmNkNzct/YjNlNy00MGQ5LWE4/N2MtZDkxMDk4MWNj/ZjRmLnBuZw"
                alt="Customer testimonial"
              />
              <p>
               {props.cos2}
              </p>
              <b>{props.cosname}</b>
            </div>
            <div style={{ height: 200, width: 400, marginLeft: 50 }}>
              <img
                src="https://imgs.search.brave.com/EBWRv_OKxEhoAxMi4cHEguUCzpeHOku7fQMgY2NFUQI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZHJ5aWNvbnMu/Y29tL3VwbG9hZHMv/aWNvbi9wcmV2aWV3/Lzc3ODkvc21hbGxf/MXhfMzhjYmNkNzct/YjNlNy00MGQ5LWE4/N2MtZDkxMDk4MWNj/ZjRmLnBuZw"
                alt="Customer testimonial"
              />
              <p>
               {props.cos3}
              </p>
              <b>{props.cosn}</b>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}
