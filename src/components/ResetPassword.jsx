import { useState } from "react";
import "./ResetPassword.css";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();
  const [show, setShow] = useState(null);
  const [show2, setShow2] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setMessage("Por favor completa todos los campos.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }
    if (newPassword.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/resetpassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ newPassword, token }),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "!Operación exitosa¡",
          text: data.message,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        setNewPassword("");
        setConfirmPassword("");
        navigate("/Login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid token",
          text: data.message,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        navigate("/login");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrio un error al enviar la nueva contraseña" + error,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className="reset-container">
      <form className="reset-form" onSubmit={handleSubmit}>
        <h2>Restablecer Contraseña</h2>
        <p className="reset-subtext">
          Ingresa tu nueva contraseña y confírmala para continuar.
        </p>

        <div className="input-box">
          <input
            type={show ? "text" : "password"}
            placeholder="Contraseña"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          <button
            onClick={() => setShow(!show)}
            type="button"
            style={{
              position: "absolute",
              right: 10,
              top: "15%",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {show ? (
              <i className="bi bi-eye-fill"></i>
            ) : (
              <i className="bi bi-eye-slash-fill"></i>
            )}
          </button>
        </div>
        <div className="input-box">
          <input
            type={show2 ? "text" : "password"}
            placeholder="Contraseña"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <button
            onClick={() => setShow2(!show2)}
            type="button"
            style={{
              position: "absolute",
              right: 10,
              top: "15%",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {show2 ? (
              <i className="bi bi-eye-fill"></i>
            ) : (
              <i className="bi bi-eye-slash-fill"></i>
            )}
          </button>
        </div>

        <button className="boton_submit" type="submit">
          Guardar contraseña
        </button>

        {message && <p className="reset-message">{message}</p>}
      </form>
    </div>
  );
};
