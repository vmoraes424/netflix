import React from "react";
import "./Contas.css"
import { Link } from "react-router-dom";

export default function Contas() {
  return (
    <>
      <Link to={"/"}><img src="../img/logo.jpg" alt="" width={120} /></Link>
      <div className="container-contas">
        <div className="texto">Quem está assistindo?</div>
        <div className="avatares">
            <figure>
            <img src="../img/avatar.png" alt="" className="avatar"/>
            <figcaption>Vinícius</figcaption>
            </figure>
            <figure>
            <img src="../img/avatar2.png" alt="" className="avatar"/>
            <figcaption>Ítalo</figcaption>
            </figure>
            <figure>
            <img src="../img/avatar3.png" alt="" className="avatar"/>
            <figcaption>Hans</figcaption>
            </figure>
            <figure>
            <img src="../img/avatar4.png" alt="" className="avatar"/>
            <figcaption>Mendes</figcaption>
            </figure>
        </div>
        
      <button>GERENCIAR PERFIL</button>
      </div>
    </>
  );
}
