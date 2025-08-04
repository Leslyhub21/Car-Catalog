import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "boxicons/css/boxicons.min.css";
import "./Login.css";
import FacebookLogin from "react-facebook-login";
import { FaFacebookF } from "react-icons/fa";


const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [animationClass, setAnimationClass] = useState("fade-in");
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  useEffect(() => {
    if (location.state?.initialPanel === "register") {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location.state]);

  const responseFacebook = (response) => {
  console.log("Respuesta de Facebook:", response);
  Swal.fire({
    icon: "success",
    title: "¡Sesión iniciada!",
    text: `Bienvenido ${response.name}`,
    confirmButtonColor: "#667eea",
  });
};


  const handleReturn = (e) => {
    e.preventDefault();
    setAnimationClass("fade-out");
    setTimeout(() => {
      navigate("/");
    }, 600);
  };

  const handleResetPassword = () => {
    if (!resetEmail) {
      Swal.fire({
        icon: "warning",
        title: "Correo requerido",
        text: "Por favor ingresa un correo electrónico válido.",
        confirmButtonColor: "#667eea"
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "¡Correo enviado!",
      text: `Se ha enviado un enlace de recuperación a: ${resetEmail}`,
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
    });

    setShowResetModal(false);
    setResetEmail("");
  };

  return (
    <div className="login-wrapper">
      <div className={`login-container ${active ? "active" : ""} ${animationClass}`}>
        <div className="form-box login">
          <form>
            <h1>Inicia Sesión</h1>
            <div className="input-box">
              <input type="text" placeholder="Usuario" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Contraseña" required />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="forgot-link">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowResetModal(true);
                }}
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <button type="submit" className="btn">Inicia Sesión</button>
            <p>o inicia sesión con plataformas sociales</p>
            <div className="social-icons">
              <a href="http://localhost:3000/auth/google"><i className="bx bxl-google"></i></a>
              {/*<a href=""><i className="bx bxl-facebook"></i></a> */}
              
              <FacebookLogin
                appId="3139564199555683"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                render={renderProps => (
                  <button onClick={renderProps.onClick} className="btn-facebook-icon">
                    <FaFacebookF />
                  </button>
                )}
              />
              
              <a href="#"><i className="bx bxl-github"></i></a>
            </div>
            <br />
            <a href="/" className="btn boton-link-texto" onClick={handleReturn}>
              Regresar a la página
            </a>
          </form>
        </div>

        <div className="form-box register">
          <form>
            <h1>Registrarse</h1>
            <div className="input-box">
              <input type="text" placeholder="Usuario" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Contraseña" required />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="btn">Registrarse</button>
            <p>o regístrate en plataformas sociales</p>
            <div className="social-icons">
              <a href="http://localhost:3000/auth/google"><i className="bx bxl-google"></i></a>
              <a href="#"><i className="bx bxl-facebook"></i></a>
              <a href="#"><i className="bx bxl-github"></i></a>
            </div>
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1 className="texto-bienvenida">¡Bienvenido de Nuevo</h1>
            <h2 className="texto-bienvenida">A Trocas San Jose!!</h2>
            <p className="texto-bienvenida">¿No tienes una cuenta?</p>
            <button className="btn register-btn" onClick={() => setActive(true)}>Regístrate</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 className="texto-bienvenida">¡Hola, Bienvenido</h1>
            <h2 className="texto-bienvenida">A Trocas San Jose!!</h2>
            <p className="texto-bienvenida">¿Ya tienes una cuenta?</p>
            <button className="btn login-btn" onClick={() => setActive(false)}>Inicia Sesión</button>
          </div>
        </div>
      </div>

      {/* Modal de recuperación de contraseña */}
      {showResetModal && (
        <div className="modal-overlay" onClick={() => setShowResetModal(false)}>
          <div className="modal-content animate" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setShowResetModal(false)}>&times;</span>
            <h2>Restablecer Contraseña</h2>
            <p>Ingresa tu correo electrónico para restablecerla:</p>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <button className="btn" onClick={handleResetPassword}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
