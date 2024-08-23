import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import run from './run.json';
import manImage from './father.webp';


import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import './Home.css'; // Ensure Home.css has your necessary styles

export default function Home() {
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
          <b>THE BEST WAY TO BUY A CAR</b>
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
            <h2> WELCOME TO MARUTI!</h2>
            <br />
            <h4>
              At Maruti, we believe that our relationship doesn’t end with
              getting you a new car. It's just the beginning of a long
              relationship that will need constant support and quality
              experience. Bimal is Bangalore’s largest Maruti Suzuki car
              dealership serving customers throughout the city from its 34+
              locations, providing a comfortable and superior experience.
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
          <h2 style={{ fontFamily: 'cursive' }}>TESTIMONIALS</h2>
          <br />
          <div style={{ display: 'flex' }}>
            <div style={{ height: 200, width: 400 }}>
              <img
                src="https://imgs.search.brave.com/EBWRv_OKxEhoAxMi4cHEguUCzpeHOku7fQMgY2NFUQI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZHJ5aWNvbnMu/Y29tL3VwbG9hZHMv/aWNvbi9wcmV2aWV3/Lzc3ODkvc21hbGxf/MXhfMzhjYmNkNzct/YjNlNy00MGQ5LWE4/N2MtZDkxMDk4MWNj/ZjRmLnBuZw"
                alt="Customer testimonial"
              />
              <p>
                The service personnel take very good care of the car. Best car
                service center I could find in Bangalore. Especially I
                appreciate Mr. Ahmed, who is always ready to help and remembers
                each customer and the details about their car’s previous
                service. Thanks for the good service experience. Thanks Bimal.
              </p>
              <b>~ Tintu Jessy Joseph (TJ)</b>
            </div>
            <div style={{ height: 200, width: 400, marginLeft: 50 }}>
              <img
                src="https://imgs.search.brave.com/EBWRv_OKxEhoAxMi4cHEguUCzpeHOku7fQMgY2NFUQI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZHJ5aWNvbnMu/Y29tL3VwbG9hZHMv/aWNvbi9wcmV2aWV3/Lzc3ODkvc21hbGxf/MXhfMzhjYmNkNzct/YjNlNy00MGQ5LWE4/N2MtZDkxMDk4MWNj/ZjRmLnBuZw"
                alt="Customer testimonial"
              />
              <p>
                This is one of the best showrooms with top-notch customer
                service. We just walked into the place not so sure about our
                choices, but Mr. Vedamurthy was really helpful and polite to
                explain to us and guide us throughout from the beginning till
                the delivery. We had an excellent experience. This place is
                definitely recommended.
              </p>
              <b>~ Nithi P</b>
            </div>
            <div style={{ height: 200, width: 400, marginLeft: 50 }}>
              <img
                src="https://imgs.search.brave.com/EBWRv_OKxEhoAxMi4cHEguUCzpeHOku7fQMgY2NFUQI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZHJ5aWNvbnMu/Y29tL3VwbG9hZHMv/aWNvbi9wcmV2aWV3/Lzc3ODkvc21hbGxf/MXhfMzhjYmNkNzct/YjNlNy00MGQ5LWE4/N2MtZDkxMDk4MWNj/ZjRmLnBuZw"
                alt="Customer testimonial"
              />
              <p>
                We contacted Bimal Auto Agency in Whitefield, Bangalore to buy
                our first car and they were extremely helpful. They helped us
                with everything. Especially the sales executive Mr. Rama
                Krishna was outstanding in his customer service. They helped us
                even more with discounts, the loan process, and even the test
                drive was a pleasant experience.
              </p>
              <b>~ Jancy Joseph</b>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}
