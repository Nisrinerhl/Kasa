import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';

//creation du root qui servira au rendu de l application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*utilisation du composant root de notre application pour gerer les differentes routes du composant app*/}
    <App />
  </React.StrictMode>
);
