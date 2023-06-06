import React, { useEffect, useState } from "react";
import { getData } from "./request";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [populares, setPopulares] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [agora, setAgora] = useState([]);

  async function usarDadosDaAPI() {
    const popular = await getData("movie/popular");
    const top_rated = await getData("movie/top_rated");
    const agora_tocando = await getData("tv/top_rated");
    const populares = [...popular.results];
    const top = [...top_rated.results];
    const agora = [...agora_tocando.results];
    setPopulares(populares);
    setTopRated(top);
    setAgora(agora);
  }

  const API_KEY = "5f080ba816591e52e96822a9e1fdbcf9";

  useEffect(() => {
    usarDadosDaAPI();
    setCor("transparent");
    window.addEventListener("scroll", scroll)
    return () => window.removeEventListener("scroll", scroll)
  }, []);

  const [cor, setCor] = useState("");

  function scroll() {
    if (window.scrollY <= 100) {
      setCor("transparent");
    } else {
      setCor("black");
    }
  }

  return (
    <div>
      <Navbar color={cor}/>
      <div className="header">
        <div className="esquerda">
          <h1>Breaking Bad</h1>
          <h3>☆☆☆☆☆ &nbsp; 2012 • 5 temporadas</h3>
          <p>
            When Walter White, a New Mexico chemistry teacher, is diagnosed with
            Stage III cancer and given a prognosis of only two years left to
            live.
          </p>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original/84XPpjGvxNyExjSuLQe0SzioErt.jpg?api_key=${API_KEY}`}
          alt=""
          className="image-container"
        />
      </div>
      <div className="populares">
        <h1>Populares na Netflix</h1>
        <div className="filmes">
          {populares.map((filme) => (
            <img
              src={`https://image.tmdb.org/t/p/original${filme.poster_path}?api_key=${API_KEY}`}
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
              src={`https://image.tmdb.org/t/p/original${filme.poster_path}?api_key=${API_KEY}`}
              alt="Filme"
              key={filme.id}
              width={180}
            />
          ))}
        </div>
      </div>
      <div className="agora">
        <h1>Séries Mais Bem Avaliadas</h1>
        <div className="filmes">
          {agora.map((filme) => (
            <img
              src={`https://image.tmdb.org/t/p/original${filme.poster_path}?api_key=${API_KEY}`}
              alt="Filme"
              key={filme.id}
              width={180}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
