import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="container mb-3">
        <h1 className="text-center">• LATEST CARS •</h1>
      </div>

      {/* Barra de filtros */}
      <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
        <span className="fw-bold">SORT BY:</span>
        <a href="#" className="text-decoration-none text-dark">Most Recent</a>
        <a href="#" className="text-decoration-none text-dark">Most Popular</a>
        <a href="#" className="text-decoration-none text-dark">Alphabetical</a>
        <a href="#" className="text-decoration-none text-dark">Highest Price</a>
        <a href="#" className="text-decoration-none text-dark">Lowest Price</a>
      </div>

      {/* Galería */}
      <div className="row g-0">
        <div className="col-6 col-md-3">
          <div className="position-relative overflow-hidden fixed-box">
            <img
              src="src/assets/carro1.jpg"
              alt="Toyota Supra"
              className="w-100 h-100 object-cover"
            />
            <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center">
              <h5>Toyota Supra</h5>
              <p>$50,000</p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="position-relative overflow-hidden fixed-box">
            <img
              src="src/assets/carro2.jpg"
              alt="Ford Mustang"
              className="w-100 h-100 object-cover"
            />
            <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center">
              <h5>Ford Mustang</h5>
              <p>$45,000</p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="position-relative overflow-hidden fixed-box">
            <img
              src="src/assets/carro3.jpg"
              alt="Chevrolet Camaro"
              className="w-100 h-100 object-cover"
            />
            <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center">
              <h5>Chevrolet Camaro</h5>
              <p>$47,000</p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="position-relative overflow-hidden fixed-box">
            <img
              src="src/assets/carro5.jpg"
              alt="Nissan GTR"
              className="w-100 h-100 object-cover"
            />
            <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center">
              <h5>Nissan GTR</h5>
              <p>$80,000</p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="position-relative overflow-hidden fixed-box">
            <img
              src="src/assets/carro6.jpg"
              alt="BMW M4"
              className="w-100 h-100 object-cover"
            />
            <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center">
              <h5>BMW M4</h5>
              <p>$70,000</p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="position-relative overflow-hidden fixed-box">
            <img
              src="src/assets/carro7.jpg"
              alt="Audi R8"
              className="w-100 h-100 object-cover"
            />
            <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center">
              <h5>Audi R8</h5>
              <p>$130,000</p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="position-relative overflow-hidden fixed-box">
            <img
              src="src/assets/carro8.jpg"
              alt="Mazda RX-7"
              className="w-100 h-100 object-cover"
            />
            <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center">
              <h5>Mazda RX-7</h5>
              <p>$60,000</p>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="position-relative overflow-hidden fixed-box">
            <img
              src="src/assets/carro4.jpg"
              alt="Lamborghini Huracán"
              className="w-100 h-100 object-cover"
            />
            <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center">
              <h5>Lamborghini Huracán</h5>
              <p>$200,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos personalizados */}
      <style>{`
        .fixed-box {
          height: 300px;
        }
        .object-cover {
          object-fit: cover;
        }
        .fixed-box img {
          transition: opacity 0.3s ease;
        }
        .overlay {
          background-color: rgba(0, 0, 0, 0.6);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .fixed-box:hover img {
          opacity: 0.5;
        }
        .fixed-box:hover .overlay {
          opacity: 1;
          pointer-events: auto;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
