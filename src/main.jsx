import React from 'react';
import { createRoot } from 'react-dom/client';

import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import CoinContextProvider from './context/CoinContext.jsx'; // Correct import path and usage

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CoinContextProvider> {/* Use CoinContextProvider as a component */}
        <App />
      </CoinContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
