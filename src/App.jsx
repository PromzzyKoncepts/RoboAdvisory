import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';
import Section2b from './components/sections/Section2b';
import Section3 from './components/sections/Section3';
import Section4 from './components/sections/Section4';
import Section5 from './components/sections/Section5';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
useEffect(() => {
  AOS.init();
}, []);

  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section2b />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
}

export default App
