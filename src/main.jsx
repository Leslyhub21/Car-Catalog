// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Formulary from './components/Fomulary.jsx';
import Login from './components/login.jsx';
import { ResetPassword } from './components/ResetPassword.jsx';
import CategoryView from './components/CategoryView.jsx';
import DealerView from './components/DealerView.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Form" element={<Formulary />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/category/:category" element={<CategoryView />} />
        <Route path="/dealers/:dealer" element={<DealerView />} />
        <Route path="/Reset/:token" element={<ResetPassword/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
