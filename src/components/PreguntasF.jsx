import React, { useState } from 'react';
import './PreguntasF.css';
import './Footer.css';

const faqData = [
  {
    question: ' ¿Cómo puedo agendar una cita para ver un auto?',
    answer: 'Da clic en el botón “Suscribir” y sigue los pasos que aparecerán en pantalla: elige la fecha y hora que más te convenga y confirma tus datos. Recibirás un correo electrónico con la confirmación de tu cita.'
  },
  {
    question: '¿Cuándo es válida la garantía?',
    answer: 'La garantía será válida a partir de la firma del contrato.'
  },
  {
    question: '¿Puedo apartar un vehículo antes de comprarlo?',
    answer: 'Sí, puedes apartar el auto con un pago inicial. El tiempo de apartado y las condiciones varían según el modelo y disponibilidad.'
  },
  {
    question: '¿Ofrecen financiamiento?',
    answer: 'Sí, trabajamos con diversas instituciones financieras para ofrecerte planes de financiamiento accesibles.'
  },
  {
    question: '¿Puedo comprar un auto sin historial crediticio?',
    answer: 'Sí, contamos con planes especiales para personas sin historial crediticio. Se analiza cada caso individualmente.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
      <section className="faq">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggle(index)}>
                {item.question}
                <i
                  className={`bi bi-chevron-down arrow-icon ${openIndex === index ? 'open' : ''}`}
                ></i>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
