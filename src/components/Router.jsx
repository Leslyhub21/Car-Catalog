import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Gallery from './gallery';
import FeacturesCard from './FeacturesCard';
import Footer from './Footer';
import Seccion01 from './Seccion01';
import SeccionPrueba from './SeccionPrueba';
import Suscribe from './Suscribe';

const Router = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/features" element={<FeacturesCard />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/section01" element={<Seccion01 />} />
      <Route path="/test-section" element={<SeccionPrueba />} />
      <Route path="/subscribe" element={<Suscribe />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;