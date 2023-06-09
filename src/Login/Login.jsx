import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  function submit(e) {
    e.preventDefault();
    window.location.href = "/";
  }
  return (
    <>
      <div className="wrapper-bg">
        <img src="../img/bg.jpg" alt="" id="backdrop" />
        <img src="../img/logobg.png" alt="" width={180} id="login-logo" />
        <main className="login-container">
          <div className="wrapper-form">
            <form onSubmit={submit}>
              <h2>Entrar</h2>
              <label htmlFor="email">Email ou número de telefone</label>
              <input type="email" name="email" id="email" required />
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" id="senha" required />
              <input type="submit" value="Entrar" />
              <div className="embaixo">
                <div className="lembre">
                  <input type="checkbox" name="check" id="check" />
                  <label htmlFor="check">Lembre-se de mim</label>
                </div>
                <a href="">Precisa de ajuda?</a>
              </div>
            </form>
            <div className="outro">
              <p>Novo por aqui?</p>
              <a href="">Assine agora.</a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
