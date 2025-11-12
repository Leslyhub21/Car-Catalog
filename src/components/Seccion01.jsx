import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Seccion01.css";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import carsData from "../data/carsData.json";

const Seccion01 = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [priceRange, setPriceRange] = useState([306292, 858500]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    const results = carsData.filter((car) => {
      const matchesKeyword =
        car.name.toLowerCase().includes(keyword.toLowerCase()) ||
        car.model.toLowerCase().includes(keyword.toLowerCase());

      const matchesCategory = category ? car.category === category : true;
      const matchesYearMin = minYear ? car.year >= parseInt(minYear) : true;
      const matchesYearMax = maxYear ? car.year <= parseInt(maxYear) : true;
      const matchesPrice =
        car.price >= priceRange[0] && car.price <= priceRange[1];

      return (
        matchesKeyword &&
        matchesCategory &&
        matchesYearMin &&
        matchesYearMax &&
        matchesPrice
      );
    });

    setFilteredCars(results);
    setShowModal(true); // mostrar modal al buscar
  };

  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = Number(value);
    if (index === 0 && newRange[0] > newRange[1]) newRange[1] = newRange[0];
    if (index === 1 && newRange[1] < newRange[0]) newRange[0] = newRange[1];
    setPriceRange(newRange);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const carImages = [
    "/src/assets/img/autofondo.jpg",
    "/src/assets/img/car2.jpg",
    "/src/assets/img/car3.jpg",
  ];

  return (
    <section className="hero-search">
      {/* Carrusel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="hero-carousel"
      >
        {carImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              <img
                src={image}
                alt={`Car ${index + 1}`}
                className="hero-image"
              />
              <div className="hero-overlay">
                <h1 className="hero-title">Porsche 356</h1>
                <p className="hero-subtitle">
                  Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor
                  incididunt ut labore
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Formulario de búsqueda */}
      <div className="search-container">
        <form className="search-form" onSubmit={handleSearch}>
          <h2>SEARCH TEXT</h2>
          <div className="search-inputs">
            <input
              type="text"
              placeholder="ENTER KEYWORD"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Category</option>
              <option value="classic">Classic</option>
              <option value="sports">Sports</option>
              <option value="luxury">Luxury</option>
            </select>
            <select
              value={minYear}
              onChange={(e) => setMinYear(e.target.value)}
            >
              <option value="">MIN YEAR</option>
              {Array.from({ length: 40 }, (_, i) => 1985 + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <select
              value={maxYear}
              onChange={(e) => setMaxYear(e.target.value)}
            >
              <option value="">MAX YEAR</option>
              {Array.from({ length: 40 }, (_, i) => 1985 + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <div className="price-slider">
              <label>
                Price ${priceRange[0].toLocaleString()} - $
                {priceRange[1].toLocaleString()}
              </label>
              <div className="range-container">
                <input
                  type="range"
                  min="0"
                  max="1200000"
                  step="10000"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(0, e.target.value)}
                />
                <input
                  type="range"
                  min="0"
                  max="1200000"
                  step="10000"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(1, e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn-search">
              <FaMagnifyingGlass />
            </button>
          </div>
        </form>
      </div>

      {/* 🪟 Modal de resultados */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Evitar cierre al hacer clic dentro
          >
            <button className="close-btn" onClick={closeModal}>
              <FaXmark />
            </button>
            <h2>Resultados</h2>
            {filteredCars.length > 0 ? (
              <div className="car-grid">
                {filteredCars.map((car) => (
                  <div className="car-card" key={car.id}>
                    <img src={car.image} alt={car.name} className="car-image" />
                    <div className="car-info">
                      <h3>{car.name}</h3>
                      <p>{car.model}</p>
                      <p>
                        <strong>Year:</strong> {car.year}
                      </p>
                      <p>
                        <strong>Category:</strong> {car.category}
                      </p>
                      <p>
                        <strong>Price:</strong> $
                        {car.price.toLocaleString()}
                      </p>
                      <p className="car-desc">{car.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-results">No se encontraron resultados.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Seccion01;
