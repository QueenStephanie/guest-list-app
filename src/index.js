import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';        // Global CSS styles
import App from './App';     // Main App component
import reportWebVitals from './reportWebVitals'; // Performance measuring tool

// Create the root element where the entire React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside <React.StrictMode>
// StrictMode helps highlight potential problems in development
root.render(
  <React.StrictMode>
    <App />   {/* Main component that holds your whole application */}
  </React.StrictMode>
);

// Optional: Measure app performance
// You can pass a function to log results (example: reportWebVitals(console.log))
// or send to an analytics endpoint
reportWebVitals();
