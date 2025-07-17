import "./Suscribe.css";
import { useState } from "react";
import Swal from "sweetalert2";

const Suscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/suscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setEmail("");

      if (res.ok) {
        Swal.fire({
          title: "¡Te has suscrito con éxito!",
          text: "Te hemos enviado un correo. Puedes revisarlo en Gmail.",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Ir a Gmail",
          cancelButtonText: "Cerrar",
        }).then((result) => {
          if (result.isConfirmed) {
            window.open("https://mail.google.com", "_blank");
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal.",
        });
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="suscribe-container">
      <div className="suscribe-left">
        <div className="suscribe-content-box">
          <h2 className="suscribe-title">NEWSLETTER</h2>
          <p className="suscribe-text">
            Subscribe to the COLLECTIONCARS mailing list to receive updates on
            new arrivals, special offers and other discount information.
          </p>
        </div>
      </div>

      <div className="suscribe-right">
        <form className="suscribe-form" onSubmit={handleSubmit}>
          <div className="suscribe-form-content">
            <input
              type="email"
              placeholder="EMAIL"
              className="suscribe-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="suscribe-button">
              SUSCRIBE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Suscribe;
