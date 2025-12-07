import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import carsData from '../data/carsData.json';
import dealersData from '../data/dealers.json';
import './FeaturedCars.css';
import CarDetailsModal from './CarDetailsModal.jsx';

const images = import.meta.glob('../assets/img/*.{jpg,jpeg,png,gif,avif}', { eager: true, as: 'url' });

const getImageUrl = (imgValue) => {
  const placeholderKey = '../assets/img/placeholder.jpg';
  const placeholder = images[placeholderKey] || '/src/assets/img/placeholder.jpg';
  if (!imgValue) return placeholder;
  if (typeof imgValue === 'string' && (imgValue.startsWith('http') || imgValue.startsWith('/'))) {
    const parts = imgValue.split('/');
    const filename = parts[parts.length - 1];
    const key = `../assets/img/${filename}`;
    return images[key] || imgValue || placeholder;
  }
  const key = `../assets/img/${imgValue}`;
  return images[key] || placeholder;
};

const DealerView = () => {
  const { dealer } = useParams();
  const [selectedCar, setSelectedCar] = useState(null);
  const dealerInfo = dealersData.find((d) => d.id === dealer);
  const filtered = carsData.filter((c) => c.dealer === dealer);

  return (
    <div className="featured-container">
      <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
        <h2 className="featured-title">{dealerInfo ? dealerInfo.name : dealer}</h2>
        {dealerInfo && (
          <img src={getImageUrl(dealerInfo.image)} alt={dealerInfo.name} style={{width: 80, height: 80, objectFit: 'cover', borderRadius: 8}} />
        )}
      </div>

      {dealerInfo && (
        <div style={{marginBottom: '1rem', color: '#444'}}>
          <p>{dealerInfo.description}</p>
          <p><strong>Tel:</strong> {dealerInfo.phone} &nbsp; <strong>Dirección:</strong> {dealerInfo.address}</p>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="no-results">
          <p>No hay autos listados para este concesionario.</p>
          <Link to="/">Volver</Link>
        </div>
      ) : (
        <div className="featured-row cards-grid">
          {filtered.map((car) => (
            <div key={car.id} className="featured-card">
              <div className="featured-image">
                <img src={getImageUrl(car.image)} alt={car.name} className="featured-img" />
              </div>
              <div className="featured-card-mini">
                <h5>{car.name} — {car.model}</h5>
                <p className="card-description">{car.description}</p>
                <p className="price">${car.price.toLocaleString()}</p>
                <button onClick={() => setSelectedCar(car)} style={{marginTop: '0.5rem'}}>Ver detalles</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedCar && (
        <CarDetailsModal car={selectedCar} imageUrl={getImageUrl(selectedCar.image)} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
};

export default DealerView;
