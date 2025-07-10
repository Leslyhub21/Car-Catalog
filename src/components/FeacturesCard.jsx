import React, { useState } from 'react';
import carro1 from '../assets/img/carro1.jpg';
import carro2 from '../assets/img/carro2.jpg';
import './FeaturedCars.css';

const FeaturedCars = () => {
  const [modalImg, setModalImg] = useState(null);

  const handleImgClick = (imgSrc) => {
    setModalImg(imgSrc);
  };

  const closeModal = () => {
    setModalImg(null);
  };

  return (
    <div className="featured-container">
      <h2 className="featured-title">• FEATURES CARS •</h2>
      <div className="featured-row ">
        {/* Imagen 1 */}
        <div className="featured-image" onClick={() => handleImgClick(carro1)} style={{cursor: 'pointer'}}>
          <img src={carro1} alt="Car 1" className="featured-img" />
        </div>
        {/* Card 1 */}
        <div className="featured-card-mini">
          <h5>Lorem Ipsum</h5>
          <p>
            "Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt"
          </p>
          <p className="price">P r i c e €</p>
          <button>Read More</button>
        </div>
        {/* Imagen 2 */}
        <div className="featured-image" onClick={() => handleImgClick(carro1)} style={{cursor: 'pointer'}}>
          <img src={carro1} alt="Car 2" className="featured-img" />
        </div>
        {/* Card 2 */}
        <div className="featured-card-mini">
          <h5>Lorem Ipsum</h5>
          <p>
            "Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt"
          </p>
          <p className="price">P r i c e €</p>
          <button>Read More</button>
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
