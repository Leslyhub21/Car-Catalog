import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Seccion01.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Seccion01 = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [priceRange, setPriceRange] = useState([306292, 858500]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ keyword, category, minYear, maxYear, priceRange });
  };

  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = Number(value);

    // Asegurar que min <= max
    if (index === 0 && newRange[0] > newRange[1]) newRange[1] = newRange[0];
    if (index === 1 && newRange[1] < newRange[0]) newRange[0] = newRange[1];

    setPriceRange(newRange);
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
          <h2>SEARCH TEXT</h2> {/* Título arriba de todo */}
          <div className="search-inputs">
            {" "}
            {/* Contenedor para todos los inputs */}
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
              {Array.from({ length: 34 }, (_, i) => 1990 + i).map((year) => (
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
              {Array.from({ length: 34 }, (_, i) => 1990 + i).map((year) => (
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
                  max="1000000"
                  step="1000"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(0, e.target.value)}
                />
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="1000"
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
    </section>
  );
};

export default Seccion01;
