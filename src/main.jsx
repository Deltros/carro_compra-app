import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarroApp } from './CarroApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarroApp />
    </BrowserRouter>
  </React.StrictMode>,
)
