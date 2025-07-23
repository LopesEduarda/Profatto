import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// CSS global para prevenir scroll horizontal no mobile
const globalStyles = `
  * {
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
    width: 100%;
    max-width: 100%;
  }

  #root {
    overflow-x: hidden;
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    html, body, #root {
      overflow-x: hidden !important;
      width: 100vw;
      max-width: 100vw;
    }

    * {
      max-width: 100vw;
    }
  }
`;

// Injetar estilos globais
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
