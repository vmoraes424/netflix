import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <main className="container">
      <img src="../img/bg.jpg" alt="" id="bg-principal" />
      <div className="wrapper-form">
        <form>
          <h2>Entrar</h2>
          <label htmlFor="email">Email ou número de telefone</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" id="senha" />
          <input type="button" value="Entrar" />
          <div className="embaixo">

          <div className="lembre">
            <input type="checkbox" name="check" id="check" />
            <label htmlFor="check">Lembre-se de mim</label>
          </div>
          <a href="">Precisa de ajuda?</a>
          </div>
        </form>
        <div className="outro"></div>
      </div>
    </main>
  );
}
