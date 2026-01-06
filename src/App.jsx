import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Amenities from './sections/Amenities';
import Rooms from './sections/Rooms';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Rooms />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
