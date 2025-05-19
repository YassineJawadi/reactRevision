import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {data, Route, Routes} from "react-router-dom";
import Property from './componenets/Property';
import Properties from './componenets/Properties';
function App() {
  const sampleProperty = {
    id: 1,
    title: "Appartement centre-ville",
    price: 1200,
    available: true,
    views: 0,
  };

  return (
     <div>
      <h1>Test all properties Component</h1>
     
       <Properties />

    </div>
  )
}

export default App
