import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo behaviour: just mark as sent and log to console
    console.log('Contact form (demo):', form);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contacto (Demo)</h2>
      <p className="contact-intro">Formulario</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label className="contact-label">
          Nombre
          <input name="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" required className="contact-input" />
        </label>

        <label className="contact-label">
          Correo electrónico
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="tu@correo.com" required className="contact-input" />
        </label>

        <label className="contact-label">
          Mensaje
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Escribe tu mensaje..." rows={6} className="contact-input contact-textarea" />
        </label>

        <div className="contact-actions">
          <button type="submit" className="contact-btn">Enviar (demo)</button>
          {sent && <span className="contact-sent">Mensaje enviado (demo).</span>}
        </div>
      </form>

      <hr className="contact-sep" />

      <div className="contact-info">
        <p><strong>Teléfono (demo):</strong> +1 555-0000</p>
        <p><strong>Email (demo):</strong> contacto@example.com</p>
        <p><strong>Dirección (demo):</strong> Calle Demo 123, Ciudad Ejemplo</p>
      </div>

      <p className="contact-back"><Link to="/">Volver al inicio</Link></p>
    </div>
  );
};

export default Contact;
