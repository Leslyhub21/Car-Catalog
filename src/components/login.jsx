import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "boxicons/css/boxicons.min.css";
import "./Login.css";
import FacebookLogin from "react-facebook-login";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  //Funcionalidad form Inicio
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [animationClass, setAnimationClass] = useState("fade-in");
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  //Funcionalidad form Fin


  //Campos del formulario Inicio
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");

  const [registerUser, setRegisterUser] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  //Campos del formulario Fin

  const SubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loginUser, loginPass }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        Swal.fire({
          title: "Inicio de sesion exitoso",
          text: data.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.message || "Algo salió mal de parte del servidor!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al enviar el formulario!",
      });
      console.error("Error al enviar el formulario", error);
    }
  };

  const SubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ registerUser, registerEmail, registerPass }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        Swal.fire({
          title: "Registro exitoso",
          text: data.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.message || "Algo salió mal de parte del servidor!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al enviar el formulario!",
      });
      console.error("Error al enviar el formulario", error);
    }
  };

  useEffect(() => {
    if (location.state?.initialPanel === "register") {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location.state]);

  const responseFacebook = (response) => {
    console.log("Respuesta de Facebook:", response);
    localStorage.setItem(
      "facebookUser",
      JSON.stringify({
        name: response.name,
        email: response.email,
        picture: response.picture?.data?.url || "",
      })
    );
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
        confirmButtonColor: "#667eea",
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
      <div
        className={`login-container ${
          active ? "active" : ""
        } ${animationClass}`}
      >
        <div className="form-box login">
          <form onSubmit={SubmitLogin}>
            <h1>Inicia Sesión</h1>
            <div className="input-box">
              <input
                value={loginUser}
                onChange={(e) => {
                  setLoginUser(e.target.value);
                }}
                type="text"
                placeholder="Usuario"
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                value={loginPass}
                onChange={(e) => {
                  setLoginPass(e.target.value);
                }}
                type="password"
                placeholder="Contraseña"
                required
              />
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
            <button type="submit" className="btn">
              Inicia Sesión
            </button>
            <p>o inicia sesión con plataformas sociales</p>
            <div className="social-icons">
              <a href="http://localhost:3000/auth/google">
                <i className="bx bxl-google"></i>
              </a>
              <FacebookLogin
                appId="3139564199555683"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    className="btn-facebook-icon"
                  >
                    <FaFacebookF />
                  </button>
                )}
              />
             
            </div>
            <br />
          </form>
        </div>

        <div className="form-box register">
          <form onSubmit={SubmitRegister}>
            <h1>Registrarse</h1>
            <div className="input-box">
              <input
                value={registerUser}
                onChange={(e) => {
                  setRegisterUser(e.target.value);
                }}
                type="text"
                placeholder="Usuario"
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                value={registerEmail}
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                }}
                type="email"
                placeholder="Email"
                required
              />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input
                value={registerPass}
                onChange={(e) => {
                  setRegisterPass(e.target.value);
                }}
                type="password"
                placeholder="Contraseña"
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit" className="btn">
              Registrarse
            </button>
            <p>o regístrate en plataformas sociales</p>
            <div className="social-icons">
              <a href="http://localhost:3000/auth/google">
                <i className="bx bxl-google"></i>
              </a>
              <FacebookLogin
                appId="3139564199555683"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    className="btn-facebook-icon"
                  >
                    <FaFacebookF />
                  </button>
                )}
              />
              
            </div>
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1 className="texto-bienvenida">¡Bienvenido de Nuevo</h1>
            <h2 className="texto-bienvenida">A Trocas San Jose!!</h2>
            <p className="texto-bienvenida">¿No tienes una cuenta?</p>
            <button
              className="btn register-btn"
              onClick={() => setActive(true)}
            >
              Regístrate
            </button>
            <br />
            <a href="/" className="boton-link-texto" onClick={handleReturn}>
              Regresar a la página
            </a>
          </div>
          <div className="toggle-panel toggle-right">
            <h1 className="texto-bienvenida">¡Hola, Bienvenido</h1>
            <h2 className="texto-bienvenida">A Trocas San Jose!!</h2>
            <p className="texto-bienvenida">¿Ya tienes una cuenta?</p>
            <button className="btn login-btn" onClick={() => setActive(false)}>
              Inicia Sesión
            </button>
            <br />
            <a href="/" className="boton-link-texto" onClick={handleReturn}>
              Regresar a la página
            </a>
          </div>
        </div>
      </div>

      {/* Modal de recuperación de contraseña */}
      {showResetModal && (
        <div className="modal-overlay" onClick={() => setShowResetModal(false)}>
          <div
            className="modal-content animate"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={() => setShowResetModal(false)}>
              &times;
            </span>
            <h2>Restablecer Contraseña</h2>
            <p>Ingresa tu correo electrónico para restablecerla:</p>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <button className="btn" onClick={handleResetPassword}>
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
