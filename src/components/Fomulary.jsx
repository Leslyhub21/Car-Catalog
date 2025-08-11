import React, { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Formulary = () => {
  const estilo = {
    minWidth: "320px",
    height: "700px",
  };

  //* Script de calendly inicio
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  //* Script de calendly Fin
  //? Escuchar el evento de calendly ---- Inicio
  useEffect(() => {
    const CalendlyEvent = async (e) => {
      if (e.data.event === "calendly.event_scheduled") {

        await MySwal.fire({
          title: "¡Cita agendada con éxito!",
          text: "Ahora serás redirigido a Gmail.",
          icon: "success",
          confirmButtonText: "Ir a Gmail",
        });

        window.open("https://mail.google.com", "_self");

        try {
          await fetch("http://localhost:4000/enviarformulario", {
            method: "POST",
          });
          console.log(" POST enviado");
        } catch (error) {
          console.error("Error enviando: ", error);
        }
      }
    };

    window.addEventListener("message", CalendlyEvent);
    return () => {
      window.removeEventListener("message", CalendlyEvent);
    };
  }, []);

  //? Escuchar el evento de calendly ---- Fin

  return (
    <div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/ic3386941/reunion-con-el-cliente"
        style={estilo}
      ></div>
    </div>
  );
};

export default Formulary;
