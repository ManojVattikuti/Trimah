import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles.css';
import { Provider } from "react-redux";
import store from "./redux/Store.jsx"; 

import { MainProvider } from './context/mainContex.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
   <MainProvider>
   <Provider store={store}>
  <App />
  </Provider>
  </MainProvider>
  
  </React.StrictMode>,
  
)
