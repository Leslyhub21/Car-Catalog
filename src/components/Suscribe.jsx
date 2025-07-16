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
          title: "Te has suscrito con éxito",
          text: "Te hemos enviado un correo. Puedes revisarlo en Gmail.",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "Ir a Gmail",
          cancelButtonText: "Cerrar",
          showClass: {
            popup: `animate__animated animate__fadeInUp animate__faster`,
          },
          hideClass: {
            popup: `animate__animated animate__fadeOutDown animate__faster`,
          },
        }).then((result) => {
          if (result.isConfirmed) {
            window.open("https://mail.google.com", "_blank");
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal!",
        });
      }
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    }
  };

  return (
    <div className="suscribe-container">
      <div className="suscribe-left">
        <div className="suscribe-box">
          {/* Pentágonos dentro del box para escalar */}
          <div className="pentagon-left"></div>
          <div className="pentagon-left2"></div>

          <div className="suscribe-box2">
            <h2 className="suscribe-title">NEWSLETTER</h2>
            <p className="suscribe-text">
              Subscribe to the COLLECTIONCARS mailing list to receive updates on
              new arrivals, special offers and other discount information.
            </p>
          </div>
        </div>
      </div>

      <div className="suscribe-right">
        <div className="suscribe-form">
          <form onSubmit={handleSubmit}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="EMAIL"
              className="suscribe-input"
            />
            <button className="suscribe-button">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Suscribe;
