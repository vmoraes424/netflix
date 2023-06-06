import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ color }) => {
  function popup() {
    const popup = document.querySelector(".wrapper");
    popup.classList.toggle("ativo");
  }

  return (
    <nav style={{ backgroundColor: color }}>
      <img src="../img/logo.jpg" alt="" width={120} />
      <div className="direita" onClick={popup}>
        <img src="../img/avatar.png" alt="" width={40} />⏷
      </div>
      <div className="wrapper">
        <div className="cima">
          <img src="../img/avatar.png" alt="" width={40} />
          <Link to=""><p>Gerenciar Perfil</p></Link>
        </div>
        <hr />
        <div className="baixo">
            <Link to=""><p>Conta</p></Link>
            <Link to="https://help.netflix.com/pt" target="_blank"><p>Ajuda</p></Link>
            <Link to=""><p>Sair da Netflix</p></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
