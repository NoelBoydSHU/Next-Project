import Gallery from './Components/Gallery';
import Banner from './Components/Banner';
import WhyChoose from './Components/WhyChoose.js';
import React from 'react';
import CSDesign from './Components/CS&Design';
import { FaCode, FaPaintBrush, FaChartLine, FaRobot } from 'react-icons/fa';

export default function Home() {
  return (
      <main>
        <title>Home</title>
      <Banner
      title="Welcome to Cantor College"
      subtitle="Empowering Students for a Bright Future"
      buttonText="Learn More"
      buttonLink="/aboutus"
      leftLogo="/images/logo.png"  
      rightLogo="/images/logo.png" 
      />
      <WhyChoose/>
        <h1>Meet Our Campus</h1>
        <h2 id="HomeGallery">Life at Cantor College</h2>
        <Gallery/>
      <CSDesign/>
      </main>
  );
}
