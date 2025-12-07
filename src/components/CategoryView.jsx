import React from 'react';
import { useParams, Link } from 'react-router-dom';
import carsData from '../data/carsData.json';
import './FeaturedCars.css';

const CategoryView = () => {
  const { category } = useParams();
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
        <div className="featured-row">
          {filtered.map((car) => (
            <div key={car.id} className="featured-card">
              <div className="featured-image" style={{ cursor: 'default' }}>
                <img src={car.image} alt={car.name} className="featured-img" />
              </div>
              <div className="featured-card-mini">
                <h5>{car.name} — {car.model}</h5>
                <p className="price1">{car.description}</p>
                <p className="price">${car.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryView;
