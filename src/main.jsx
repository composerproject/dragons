import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DragonContextProvider from './utils/dragonContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DragonContextProvider>
      <App />
    </DragonContextProvider>
  </React.StrictMode>,
)
