import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import carab from "./carab.json";

export default function About() {
  useEffect(() => {
    document.title = "Maruti About";
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: carab,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', padding: 20, backgroundColor: "black", height: "100%" }}>
      <div style={{ backgroundColor: "black", padding: 20, flex: 1 }}>
        <header>
          <h1 style={{
            color: "white", fontFamily: 'Arial, sans-serif',
            fontSize: '3rem',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            margin: '20px 0',
          }}>WE BRAND BUILDERS</h1>
        </header>
        <br />
        <h2 style={{ backgroundColor: "white", color: "black", padding: 5 }}>Products and Innovations</h2>
        <p style={{ color: "white" }}>
          Compact Cars: Maruti Suzuki is known for its compact and affordable cars, including the Alto, Wagon R, and Swift.
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
      <div>
        <br />
        <br />

        <Lottie
          options={defaultOptions}
          height={450}
          width={800}
        />

        <img style={{ width: 700, height: 400 }} src="https://imgs.search.brave.com/W2PTPXjlHgZLUkBdhRazrs7pyqFXaTiMLTFjffk6fpU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzMx/MzguanBn" alt="Maruti Car" />
      </div>
    </div>
  );
}
