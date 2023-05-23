import React, { useEffect, useState } from "react";
import { getData } from "./request";

const App = () => {
  const [data, setData] = useState(null);
  const [imagem, setImagem] = useState("")

  async function usarDadosDaAPI() {
    const data = await getData();
    setData(data);
    setImagem(`https://image.tmdb.org/t/p/original${data.poster_path}?api_key=5f080ba816591e52e96822a9e1fdbcf9`)
    console.log(data);
  }
  useEffect(() => {
    usarDadosDaAPI();
  }, []);

  return (
    <div>
      {data && (
        <>
          <h1>{data.original_title}</h1>
          <img src={imagem} alt="asdas" width={200}/>
        </>
      )}
    </div>
  );
};

export default App;
