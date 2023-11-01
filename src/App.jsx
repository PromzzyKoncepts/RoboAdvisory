import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';

function App() {

  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
    </>
  );
}

export default App
