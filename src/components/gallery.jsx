import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="container-fluid mt-4 galeria">
      <div className="container mb-3">
        <h1 className="gallery-title text-center">
          • LATEST CARS •
        </h1>
      </div>

      <div className="gallery-sort d-flex justify-content-center flex-wrap gap-3 mb-4">
        <span className="gallery-sort-label fw-bold">SORT BY:</span>
        <a href="#" className="gallery-sort-link">MOST RECENT</a>
        <a href="#" className="gallery-sort-link">MOST POPULAR</a>
        <a href="#" className="gallery-sort-link">ALPHABETICAL</a>
        <a href="#" className="gallery-sort-link">HIGHEST PRICE</a>
        <a href="#" className="gallery-sort-link">LOWEST PRICE</a>
      </div>

      <div className="row g-0">
        {[
          { src: "src/assets/carro1.jpg", name: "Ford Camioneta", price: "$50,000" },
          { src: "src/assets/carro2.jpg", name: "Nissan tsuru", price: "$45,000" },
          { src: "src/assets/carro3.jpg", name: "Chevrolet Camaro", price: "$47,000" },
          { src: "src/assets/carro9.jpg", name: "WolksWagen Combi", price: "$80,000" },
          { src: "src/assets/carro6.jpg", name: "BMW M4", price: "$70,000" },
          { src: "src/assets/carro7.jpg", name: "Audi R8", price: "$130,000" },
          { src: "src/assets/carro8.jpg", name: "Vocho", price: "$60,000" },
          { src: "src/assets/carro4.jpg", name: "Chevrolet Ranger", price: "$200,000" },
        ].map((car, index) => (
          <div key={index} className="col-6 col-md-3">
            <div className="gallery-card position-relative overflow-hidden">
              <img
                src={car.src}
                alt={car.name}
                loading="lazy"
                className="gallery-image w-100 h-100"
              />
              <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center">
                <h5>{car.name}</h5>
                <p>{car.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
