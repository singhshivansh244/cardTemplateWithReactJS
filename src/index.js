import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from '../src/components/Navbar'
import Card from './components/Card'
import Rand from './Data'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Navbar />
      <Rand />
    </div>
  </React.StrictMode>
);