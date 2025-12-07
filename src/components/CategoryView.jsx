import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import carsData from '../data/carsData.json';
import './FeaturedCars.css';
import CarDetailsModal from './CarDetailsModal.jsx';

// Cargar todas las imágenes locales de la carpeta `src/assets/img` como URLs
const images = import.meta.glob('../assets/img/*.{jpg,jpeg,png,gif}', { eager: true, as: 'url' });

const getImageUrl = (imgValue) => {
  // placeholder desde las imágenes importadas o fallback a ruta esperada
  const placeholderKey = '../assets/img/placeholder.jpg';
  const placeholder = images[placeholderKey] || '/src/assets/img/placeholder.jpg';

  if (!imgValue) return placeholder;

  // Si ya es una URL absoluta o empieza con '/', tratamos de extraer el nombre
  if (typeof imgValue === 'string' && (imgValue.startsWith('http') || imgValue.startsWith('/'))) {
    const parts = imgValue.split('/');
    const filename = parts[parts.length - 1];
    const key = `../assets/img/${filename}`;
    return images[key] || imgValue || placeholder;
  }

  // Si se pasó sólo el nombre del archivo, buscamos en el map
  const key = `../assets/img/${imgValue}`;
  return images[key] || placeholder;
};

const CategoryView = () => {
  const { category } = useParams();
  const [selectedCar, setSelectedCar] = useState(null);
  if (!category) return <div>No category</div>;

  const filtered = carsData.filter(
    (c) => c.category && c.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="featured-container">
      <h2 className="featured-title">• {category.toUpperCase()} CARS •</h2>
      {filtered.length === 0 ? (
        <div className="no-results">
          <p>No se encontraron autos en esta categoría.</p>
          <Link to="/">Volver</Link>
        </div>
      ) : (
        <div className="featured-row cards-grid">
          {filtered.map((car) => (
            <div key={car.id} className="featured-card">
              <div className="featured-image" style={{ cursor: 'default' }}>
                <img
                  src={getImageUrl(car.image)}
                  alt={car.name}
                  className="featured-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = images['../assets/img/placeholder.jpg'] || '/src/assets/img/placeholder.jpg';
                  }}
                />
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

export default CategoryView;
