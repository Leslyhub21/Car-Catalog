import React, { useState } from "react";
import "./Formulary.css";

const Formulary = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !apellidos || !telefono) {
      alert("Por favor completa todos los campos");
      return;
    }

    console.log({ nombre, apellidos, telefono });
    alert(`Formulario enviado: ${nombre} ${apellidos} - ${telefono}`);

     try {
          const res = await fetch("http://localhost:3000//enviarformulario", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ nombre, apellidos, telefono }),
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
                popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
              },
              hideClass: {
                popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
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
              text: "Algo salio mal!",
            });
          }
        } catch (error) {
          console.error("Error al enviar el formulario", error);
          setMensaje("Error en el servidor.");
        }
  };

  return (
    <form className="formulario__container__abc123" onSubmit={handleSubmit}>
      <h2 className="formulario__titulo__abc123">Formulario</h2>

      <input
        className="formulario__input__abc123"
        type="text"
        name="Nombre"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        className="formulario__input__abc123"
        type="text"
        name="Apellidos"
        placeholder="Apellidos"
        value={apellidos}
        onChange={(e) => setApellidos(e.target.value)}
      />

      <input
        className="formulario__input__abc123"
        type="tel"
        name="Telefono"
        placeholder="Número de teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <button className="formulario__boton__abc123" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Formulary;
