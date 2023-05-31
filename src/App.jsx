import React, { useEffect, useState } from "react";
import { getData } from "./request";
import "./App.css";

const App = () => {
  const [populares, setPopulares] = useState([]);
  const [topRated, setTopRated] = useState([]);

  async function usarDadosDaAPI() {
    const popular = await getData("https://api.themoviedb.org/3/movie/popular");
    const top_rated = await getData("https://api.themoviedb.org/3/movie/top_rated");
    const populares = [...popular.results];
    const top = [...top_rated.results]
    setPopulares(populares);
    setTopRated(top)
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
          {populares.map((filme) => (
            <img
              src={`https://image.tmdb.org/t/p/original${filme.poster_path}?api_key=5f080ba816591e52e96822a9e1fdbcf9`}
              alt="Filme"
              key={filme.id}
              width={180}
            />
          ))}
        </div>
      </div>
      <div className="top-rated">
        <h1>Mais vistos</h1>
        <div className="filmes">
          {topRated.map((filme) => (
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
