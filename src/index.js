import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkModeContextProvider } from './Pages/Context/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
    
);


reportWebVitals();
