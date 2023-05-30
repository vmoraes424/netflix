import React, { useEffect, useState } from "react";
import { getData } from "./request";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  async function usarDadosDaAPI() {
    const data = await getData();
    const data2 = [...data.results];
    setData(data2);
  }

  useEffect(() => {
    usarDadosDaAPI();
  }, []);

  return (
    <div>
      {/* <nav>
        <img src="./img/logo.jpg" alt="" width={150} />
      </nav> */}
      <div className="header">
        <div className="esquerda">
        <h1>John Wick 4</h1>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original/h8gHn0OzBoaefsYseUByqsmEDMY.jpg?api_key=5f080ba816591e52e96822a9e1fdbcf9`}
          alt=""
          className="image-container"
        />
      </div>
      <div className="populares">
        <h1>Populares na Netflix</h1>
        <div className="filmes">
          {data.map((filme) => (
            <img
              src={`https://image.tmdb.org/t/p/original${filme.poster_path}?api_key=5f080ba816591e52e96822a9e1fdbcf9`}
              alt="Filme"
              key={filme.id}
              width={180}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
