import React, { useState } from 'react';
import './PreguntasF.css'

const faqData = [
  {
    question: '¿Cómo me registro?',
    answer: 'Para registrarte, haz clic en "Crear cuenta" y llena el formulario.'
  },
  {
    question: '¿Puedo cambiar mi contraseña?',
    answer: 'Sí, desde tu perfil puedes cambiarla en cualquier momento.'
  },
  {
    question: '¿Ofrecen soporte técnico?',
    answer: 'Sí, puedes contactarnos 24/7 por el formulario de contacto.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="faq">
      <h2>Preguntas Frecuentes</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggle(index)}>
            {item.question}
          </button>
          <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
