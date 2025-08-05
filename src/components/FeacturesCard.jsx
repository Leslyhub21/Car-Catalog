import React, { useState } from 'react';
import carro1 from '../assets/img/carro1.jpg';
import carro2 from '../assets/img/carro2.jpg';
import './FeaturedCars.css';

const cars = [
  {
    img: carro1,
    title: 'Carro Elegante',
    description: 'Este es un carro elegante, con motor V8, asientos de cuero y tecnología de última generación.',
    price: 'P r i c e'
  },
  {
    img: carro2,
    title: 'Carro Deportivo',
    description: 'Deportivo de alto rendimiento, aceleración rápida, diseño aerodinámico y máxima seguridad.',
    price: 'P r i c e'
  }
];

const FeaturedCars = () => {
  const [modalImg, setModalImg] = useState(null);
  const [descModal, setDescModal] = useState({ open: false, car: null });

  const handleImgClick = (imgSrc) => {
    setModalImg(imgSrc);
  };

  const closeModalImg = () => {
    setModalImg(null);
  };

  const handleReadMore = (car) => {
    setDescModal({ open: true, car });
  };

  const closeDescModal = () => {
    setDescModal({ open: false, car: null });
  };

  return (
    <div className="featured-container">
      <h2 className="featured-title">• FEATURES CARS •</h2>
      <div className="featured-row">
        {cars.map((car, idx) => (
          <React.Fragment key={idx}>
            <div className="featured-image" onClick={() => handleImgClick(car.img)} style={{cursor: 'pointer'}}>
              <img src={car.img} alt={car.title} className="featured-img" />
            </div>
            <div className="featured-card-mini">
              <h5>{car.title}</h5>
              <p className='price1'>
                "Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt"
              </p>
              <p className="price">
                {car.price}
              </p>
              <button onClick={() => handleReadMore(car)}>Read More</button>
            </div>
          </React.Fragment>
        ))}
      </div>
      {/* Modal para expandir imagen */}
      {modalImg && (
        <div className="modal-overlay" onClick={closeModalImg}>
          <div className="modal-img-container" onClick={e => e.stopPropagation()}>
            <img src={modalImg} alt="Expanded Car" className="modal-img" />
            <button className="modal-close" onClick={closeModalImg}>×</button>
          </div>
        </div>
      )}
      {/* Modal para descripción del auto */}
      {descModal.open && descModal.car && (
        <div className="modal-overlay" onClick={closeDescModal}>
          <div className="modal-desc-container" onClick={e => e.stopPropagation()}>
            <h3 className="modal-desc-title">{descModal.car.title}</h3>
            <img src={descModal.car.img} alt={descModal.car.title} className="modal-desc-img" />
            <p className="modal-desc-text">{descModal.car.description}</p>
            <button className="modal-close" onClick={closeDescModal}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedCars;