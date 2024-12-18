import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store/Store';
import SignIn from './Components/Authentication/SignIn/SignIn';
import ResetPassword from "./Components/Authentication/ResetPassword/ResetPassword";

const root = ReactDOM.createRoot(document.getElementById('root'));


// const tokenHash = localStorage.getItem('authToken');
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App/>

    </BrowserRouter>
  </Provider>
);

reportWebVitals();
