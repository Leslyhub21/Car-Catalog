import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import './PostCar.css';

const initial = {
  name: '',
  model: '',
  year: '',
  category: 'sports',
  price: '',
  image: '',
  description: '',
  dealer: ''
};

const PostCar = () => {
  const [form, setForm] = useState(initial);
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    // basic validation
    if (!file.type.startsWith('image/')) {
      alert('Por favor selecciona un archivo de imagen.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert('Imagen demasiado grande. Máx 5MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setForm((f) => ({ ...f, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Minimal validation
    if (!form.name || !form.model || !form.year || !form.price) {
      alert('Por favor completa los campos requeridos: Nombre, Modelo, Año y Precio.');
      return;
    }

    const newCar = {
      id: Date.now(),
      name: form.name,
      model: form.model,
      year: Number(form.year),
      category: form.category,
      price: Number(form.price),
      image: form.image,
      description: form.description,
      dealer: form.dealer
    };

    // Save to localStorage under key 'postedCars' for demo persistence
    try {
      const existing = JSON.parse(localStorage.getItem('postedCars') || '[]');
      existing.unshift(newCar);
      localStorage.setItem('postedCars', JSON.stringify(existing));
      console.log('Post New Car (demo) saved:', newCar);
      setSaved(true);
      setForm(initial);
      // short delay for UX then redirect to gallery (home)
      setTimeout(() => setSaved(false), 2500);
      // navigate to home to show in gallery
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Error guardando en localStorage.');
    }
  };


  return (
    <div className="contact-container">
      <h2 className="contact-title">Post New Car (Demo)</h2>
      <p className="contact-intro">Formulario demo.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="postcar-top-row">
          <small className="postcar-note">Rellena el formulario. Selecciona la imagen desde tu dispositivo abajo.</small>
        </div>
        <label className="contact-label">Nombre
          <input name="name" value={form.name} onChange={handleChange} className="contact-input" required />
        </label>

        <label className="contact-label">Modelo
          <input name="model" value={form.model} onChange={handleChange} className="contact-input" required />
        </label>

        <label className="contact-label">Año
          <input name="year" type="number" value={form.year} onChange={handleChange} className="contact-input" required min="1900" max={new Date().getFullYear()} />
        </label>

        <label className="contact-label">Categoría
          <select name="category" value={form.category} onChange={handleChange} className="contact-input">
            <option value="classic">Classic</option>
            <option value="sports">Sports</option>
            <option value="luxury">Luxury</option>
          </select>
        </label>

        <label className="contact-label">Precio
          <input name="price" type="number" step="0.01" inputMode="decimal" placeholder="Ej: 49999.99" value={form.price} onChange={handleChange} className="contact-input" required min="0" />
        </label>

        <label className="contact-label">Imagen (sube desde tu dispositivo)
          <input type="file" accept="image/*" onChange={handleFile} className="contact-input" />
        </label>
        {form.image && (
          <div className="postcar-preview">
            <div className="postcar-preview-label">Vista previa:</div>
            <img src={form.image} alt="preview" className="postcar-preview-img" />
          </div>
        )}

        <label className="contact-label">Dealer (opcional)
          <input name="dealer" value={form.dealer} onChange={handleChange} className="contact-input" placeholder="dealer-a" />
        </label>

        <label className="contact-label">Descripción
          <textarea name="description" value={form.description} onChange={handleChange} className="contact-input contact-textarea" />
        </label>

        <div className="contact-actions">
          <button type="submit" className="contact-btn">Publicar (demo)</button>
          {saved && <span className="contact-sent">Guardado en demo.</span>}
        </div>
      </form>
      
    </div>
  );
};

export default PostCar;
