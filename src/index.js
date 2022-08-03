import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from '../src/components/Navbar'
import Data from './components/Data'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Navbar />
      <Data />
    </div>
  </React.StrictMode>
);