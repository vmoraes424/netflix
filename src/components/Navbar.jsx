import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ color }) => {
  function popup() {
    const popup = document.querySelector(".wrapper");
    popup.classList.toggle("ativo");
    if (popup.classList == "ativo") {
      window.addEventListener("click", () => {
        popup.classList.toggle("ativo");
      });
    }
  }

  return (
    <nav style={{ backgroundColor: color }}>
      <img src="../img/logobg.png" alt="" width={120} />
      <div className="direita" onClick={popup}>
        <div className="avatar">
          <img src="../img/avatar.png" alt="" width={40} />⏷
        </div>
      </div>
      <div className="wrapper">
        <div className="cima">
          <img src="../img/avatar.png" alt="" width={40} />
        </div>
        <hr />
        <div className="baixo">
          <Link to={"/contas"}>
            <p>Contas</p>
          </Link>
          <Link to={"https://help.netflix.com/pt"} target="_blank">
            <p>Ajuda</p>
          </Link>
          <Link to={"/login"}>
            <p>Sair da Netflix</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
