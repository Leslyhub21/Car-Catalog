import React, { useState } from "react";
import "./Seccion01.css";

const Seccion01 = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [price, setPrice] = useState(50000);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ keyword, category, minYear, maxYear, price });
  };

  return (
    <section className="hero-search">
      {/* Fondo con imagen */}
      <div
        className="hero-background"
        style={{
          backgroundImage: "url('/src/assets/img/autofondo.jpg')",
        }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Porsche 356</h1>
          <p className="hero-subtitle">
            Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor
            incididunt ut labore
          </p>
        </div>
      </div>

      {/* Formulario de búsqueda */}
      <div className="search-container">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter Keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Catego ry</option>
            <option value="classic">Classic</option>
            <option value="sports">Sports</option>
            <option value="luxury">Luxury</option>
          </select>

          <select value={minYear} onChange={(e) => setMinYear(e.target.value)}>
            <option value="">Min Year</option>
            {Array.from({ length: 34 }, (_, i) => 1990 + i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select value={maxYear} onChange={(e) => setMaxYear(e.target.value)}>
            <option value="">Max Year</option>
            {Array.from({ length: 34 }, (_, i) => 1990 + i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <div className="price-slider">
            <label>Price ${price.toLocaleString()}</label>
            <input
              type="range"
              min="0"
              max="200000"
              step="1000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

          <button type="submit" className="btn-search">
            🔍
          </button>
        </form>
      </div>
    </section>
  );
};

export default Seccion01;
