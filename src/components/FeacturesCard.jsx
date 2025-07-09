import React from 'react';
import carro1 from '../assets/img/carro1.jpg';
import carro2 from '../assets/img/carro2.jpg';
import './FeaturedCars.css';

const FeaturedCars = () => {
  return (
    <div className="featured-container">
      <h2 className="featured-title">• FEATURES CARS •</h2>
      <div className="featured-row ">
        {}
        <div className="featured-image">
          <img src={carro1} alt="Car 1" className="featured-img" />
        </div>
        {}
        <div className="featured-card-mini">
          <h5>Lorem Ipsum</h5>
          <p>
            "Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt"
          </p>
          <p className="price">P r i c e €</p>
          <button>Read More</button>
        </div>
        {}
        <div className="featured-image">
          <img src={carro2} alt="Car 2" className="featured-img" />
        </div>
        {}
        <div className="featured-card-mini">
          <h5>Lorem Ipsum</h5>
          <p>
            "Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt"
          </p>
          <p className="price">P r i c e €</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
