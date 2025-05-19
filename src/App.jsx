import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {data} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
          <h4>{data.title}</h4>
          <p><strong>Adresse:</strong> {data.address}</p>
          <p><strong>Prix:</strong> {data.price} DT</p>
          <p><strong>Nombre de Vue:</strong> {data.views}</p>
      </div>
  )
}

export default App
