import React from 'react';

const CarDetailsModal = ({ car, imageUrl, onClose }) => {
  if (!car) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-desc-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h3 className="modal-desc-title">{car.name} — {car.model}</h3>
        <img src={imageUrl} alt={car.name} className="modal-desc-img" />
        <p className="modal-desc-text">{car.description}</p>
        <p style={{fontWeight: 700, marginBottom: '0.5rem'}}>Year: {car.year} • Price: ${car.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CarDetailsModal;
