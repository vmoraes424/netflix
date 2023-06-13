import React, { useState } from "react";
import "./Contas.css";
import { Link } from "react-router-dom";

export default function Contas() {

  const [gerenciar, setGerenciar] = useState("gerenciar perfil")

  return (
    <>
      <Link to={"/"}>
        <img src="../img/logobg.png" alt="" width={120} id="logo" />
      </Link>
      <div className="container-contas">
        <div className="texto">Quem está assistindo?</div>
        <div className="avatares">
          <figure>
            <Link to={"editar"}><img src="../img/avatar.png" alt="" className="avatar" /></Link>
            <figcaption>Vinícius</figcaption>
          </figure>
          <figure>
          <Link to={"editar"}><img src="../img/avatar2.png" alt="" className="avatar" /></Link>
            <figcaption>Ítalo</figcaption>
          </figure>
          <figure>
          <Link to={"editar"}><img src="../img/avatar3.png" alt="" className="avatar" /></Link>
            <figcaption>Hans</figcaption>
          </figure>
          <figure>
          <Link to={"editar"}><img src="../img/avatar4.png" alt="" className="avatar" /></Link>
            <figcaption>Mendes</figcaption>
          </figure>
        </div>

        <button className="gerenciar">{gerenciar.toUpperCase()}</button>
      </div>
    </>
  );
}
