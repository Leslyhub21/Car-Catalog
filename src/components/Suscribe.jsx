import './Suscribe.css';

const Suscribe = () => {
  return (
    <div className="suscribe-container">
      <div className="pentagon-left"></div> 
      <div className="pentagon-left2"></div> 
      <div className="suscribe-left">
        <div className="suscribe-box">
          <div className="suscribe-box2">
            <h2 className="suscribe-title">NEWSLETTER</h2>
            <p className="suscribe-text">
              Subscribe to the COLLECTIONCARS mailing list to receive updates on new arrivals, special offers and other discount information.
            </p>
          </div>
        </div>
      </div>

      <div className="suscribe-right">
        <div className="suscribe-form">
           <form action="https://15b37d9dc761.ngrok-free.app/suscribe" method="POST">
            <input
              type="email"
              name="email"
              id="email"
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
