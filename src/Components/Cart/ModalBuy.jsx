
const ModalBuy = ({ handleSubmit, setIsModalOpen, email, setEmail }) => {
    return (
      <div>
        <div className="emailModal">
          <form onSubmit={handleSubmit}>
            <h3>Ingrese su correo electrónico:</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="email_btn_ctn">
              <button className="email_btn" type="submit">
                Continuar
              </button>
              <button className="email_btn" onClick={() => setIsModalOpen(false)}>
  
                Cancelar
              </button>
            </div>
          </form>
        </div>
  
        <div class="modal-background"></div>
  
      </div>
    );
  };
  export default ModalBuy;