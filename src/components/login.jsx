import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import "./Login.css";

const Login = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (location.state?.initialPanel === "register") {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location.state]);

  return (
    <div className="login-wrapper">
      <div className={`login-container ${active ? "active" : ""}`}>
        <div className="form-box login">
          <form>
            <h1>Inicia Sesión</h1>
            <div className="input-box">
              <input type="text" placeholder="Usuario" required />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Contraseña" required />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div className="forgot-link">
              <a href="#">Olvidaste tu contraseña?</a>
            </div>
            <button type="submit" className="btn">Inicia Sesión</button>
            <p>o inicia sesión con plataformas sociales</p>
            <div className="social-icons">
              <a href="#"><i className='bx bxl-google'></i></a>
              <a href="#"><i className='bx bxl-facebook'></i></a>
              <a href="#"><i className='bx bxl-github'></i></a>
              <a href="#"><i className='bx bxl-linkedin'></i></a>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form>
            <h1>Registrarse</h1>
            <div className="input-box">
              <input type="text" placeholder="Usuario" required />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <i className='bx bxs-envelope'></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Contraseña" required />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <button type="submit" className="btn">Registrarse</button>
            <p>o regístrate en plataformas sociales</p>
            <div className="social-icons">
              <a href="#"><i className='bx bxl-google'></i></a>
              <a href="#"><i className='bx bxl-facebook'></i></a>
              <a href="#"><i className='bx bxl-github'></i></a>
              <a href="#"><i className='bx bxl-linkedin'></i></a>
            </div>
          </form>
        </div>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>¡Hola, bienvenido!</h1>
            <p>¿No tienes una cuenta?</p>
            <button className="btn register-btn" onClick={() => setActive(true)}>Registrate</button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>¡Bienvenido de nuevo!</h1>
            <p>¿Ya tienes una cuenta?</p>
            <button className="btn login-btn" onClick={() => setActive(false)}>Inicia Sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
