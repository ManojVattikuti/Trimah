import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles.css';

import { MainProvider } from './context/mainContex.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
   <MainProvider>
  <App />
  </MainProvider>
  
  </React.StrictMode>,
  
)
