import React, { useState } from 'react';
import carro1 from '../assets/img/carro1.jpg';
import carro2 from '../assets/img/carro2.jpg';
import './FeaturedCars.css';

const FeaturedCars = () => {
  const [modalImg, setModalImg] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null); // índice de card expandida

  const handleImgClick = (imgSrc) => {
    setModalImg(imgSrc);
  };

  const closeModal = () => {
    setModalImg(null);
  };

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="featured-container">
      <h2 className="featured-title">• FEATURES CARS •</h2>
      <div className="featured-row">
        {/* CARRO 1 */}
        <div className="featured-image" onClick={() => handleImgClick(carro1)} style={{cursor: 'pointer'}}>
          <img src={carro1} alt="Car 1" className="featured-img" />
        </div>

        <div className="featured-card-mini">
          <h5>Lorem Ipsum</h5>
          <p className='price1'>
            "Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt"
          </p>
          <p className="price">P r i c e</p>
          <button onClick={() => toggleCard(1)}>Read More</button>

          {expandedCard === 1 && (
            <div className="card-description">
              <p>Este auto deportivo combina velocidad y lujo. Motor V8, interiores premium y tecnología avanzada.</p>
            </div>
          )}
        </div>

        {/* CARRO 2 */}
        <div className="featured-image" onClick={() => handleImgClick(carro2)} style={{cursor: 'pointer'}}>
          <img src={carro2} alt="Car 2" className="featured-img" />
        </div>

        <div className="featured-card-mini">
          <h5>Lorem Ipsum</h5>
          <p className='price1'>
            "Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt"
          </p>
          <p className="price">P r i c e</p>
          <button onClick={() => toggleCard(2)}>Read More</button>

          {expandedCard === 2 && (
            <div className="card-description">
              <p>Modelo eficiente y elegante para ciudad. Con sistema híbrido, conectividad inteligente y gran autonomía.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal para expandir imagen */}
      {modalImg && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-img-container" onClick={e => e.stopPropagation()}>
            <img src={modalImg} alt="Expanded Car" className="modal-img" />
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedCars;
