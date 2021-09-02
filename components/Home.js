import React from 'react';
import Hero from './Hero';
import SocialBar from './SocialBar';
import Services from './Services';
import About from './About';

export default function Home() {
  return (
    <div>
      <Hero />
      <SocialBar />
      <Services />
      <About />
    </div>
  );
}
