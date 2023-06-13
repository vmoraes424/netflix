import React from "react";
import "./Editar.css";

export default function Editar() {
  return (
    <>
    <img src="../img/logobg.png" alt="" className="logo-editar"/>
      <div className="editar">
        <div className="editar-cima">
          <h1 className="editar-perfil">Editar perfil</h1>
        </div>
        <hr className="primeiro-hr" />
        <section className="editar-meio">
          <div className="editar-esquerda">
            <img src="../img/avatar.png" alt="Avatar" />
          </div>
          <div className="editar-direita">
            <input type="text" name="Nome" id="nome" value={"Vinícius"} />
            <section className="idioma">
              <label htmlFor="idioma">Idioma:</label>
              <select name="idioma" id="idioma">
                <option value="portugues" selected>
                  Português
                </option>
                <option value="">Inglês</option>
                <option value="opel">Francês</option>
                <option value="audi">Catalão</option>
              </select>
            </section>
            <section className="game-id">
              <h1 className="dentro">Game ID:</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
                quaerat!
              </p>
              <input type="text" placeholder="Criar Game ID" />
            </section>
            <hr />
            <section className="etaria">
              <h1 className="dentro">Configurações de classificação etária:</h1>
              <button className="etaria-btn">
                Todas as classificações etárias
              </button>
              <p>
                Mostrar títulos de todas as classificações etárias para este
                perfil
              </p>
              <button className="editar-button">Editar</button>
            </section>
            <hr />
            <section className="controles">
              <h1 className="dentro">Controles de início automático</h1>
              <input type="checkbox" name="episodio" id="episodio" />
              <label htmlFor="episodio">
                Iniciar automaticamente o próximo episódio de uma série em todos
                os aparelhos
              </label>
              <br />
              <input type="checkbox" name="reproduzir" id="reproduzir" />
              <label htmlFor="reproduzir">
                Reproduzir automaticamente as prévias ao navegar em todos os
                aparelhos
              </label>
            </section>
          </div>
        </section>
        <hr className="ultimo-hr"/>
        <section className="editar-baixo">
            <button className="salvar botao">Salvar</button>
            <button className="botao">Cancelar</button>
            <button className="botao">Excluir perfil</button>
        </section>
      </div>
    </>
  );
}
