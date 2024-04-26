import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import GlobalStyle from './pages/styles/global';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Login />
  </React.StrictMode>
);

