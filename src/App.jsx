import React from 'react';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import FeaturedCar from './components/FeaturedCar';
import TravelersBand from './components/TravelersBand';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F0F11] text-white">
      <div className="mx-auto max-w-[480px] md:max-w-5xl px-4">
        <Hero />
        <ValueProps />
        <FeaturedCar />
        <TravelersBand />
      </div>
    </div>
  );
}
