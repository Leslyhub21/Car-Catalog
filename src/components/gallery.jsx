import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="container mb-3">
        <h1
          className="text-center"
          style={{
            fontSize: '2.5rem',
            color: '#000E4D',
            letterSpacing: '1rem',
            marginBottom: '3rem',
            fontWeight: 300 
          }}
        >
          • LATEST CARS •
        </h1>
      </div>

      <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
        <span style={{fontWeight: 300 }} className="fw-bold">SORT BY:</span>
        <a href="#" style={{fontWeight: 300 }} className="text-decoration-none text-dark">MOST RECENT</a>
        <a href="#" style={{fontWeight: 300 }} className="text-decoration-none text-dark">MOST POPULAR</a>
        <a href="#" style={{fontWeight: 300 }} className="text-decoration-none text-dark">ALPHABETICAL</a>
        <a href="#" style={{fontWeight: 300 }} className="text-decoration-none text-dark">HIGHEST PRICE</a>
        <a href="#" style={{fontWeight: 300 }} className="text-decoration-none text-dark">LOWEST PRICE</a>
      </div>

      <div className="row g-0">
        {[
          { src: "src/assets/carro1.jpg", name: "Ford Camioneta", price: "$50,000" },
          { src: "src/assets/carro2.jpg", name: "Nissan tsuru", price: "$45,000" },
          { src: "src/assets/carro3.jpg", name: "Chevrolet Camaro", price: "$47,000" },
          { src: "src/assets/carro5.jpg", name: "WolksWagen Combi", price: "$80,000" },
          { src: "src/assets/carro6.jpg", name: "BMW M4", price: "$70,000" },
          { src: "src/assets/carro7.jpg", name: "Audi R8", price: "$130,000" },
          { src: "src/assets/carro8.jpg", name: "Vocho", price: "$60,000" },
          { src: "src/assets/carro4.jpg", name: "Chevrolet Ranger", price: "$200,000" },
        ].map((car, index) => (
          <div key={index} className="col-6 col-md-3">
            <div className="position-relative overflow-hidden fixed-box">
              <img
                src={car.src}
                alt={car.name}
                loading="lazy"
                className="w-100 h-100 object-cover"
              />
              <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center">
                <h5>{car.name}</h5>
                <p>{car.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        * {
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .fixed-box {
          height: 300px;
        }

        .object-cover {
          object-fit: cover;
        }

        .fixed-box img,
        .overlay {
          transition: opacity 0.3s ease;
          will-change: opacity;
        }

        .overlay {
          background-color: rgba(0, 0, 0, 0.6);
          opacity: 0;
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
