import axios from "axios";
export async function getData() {
const api_key = "5f080ba816591e52e96822a9e1fdbcf9";
const options = {
  method: "GET",
  url: `https://api.themoviedb.org/3/movie/550?api_key=${api_key}`,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjA4MGJhODE2NTkxZTUyZTk2ODIyYTllMWZkYmNmOSIsInN1YiI6IjYxYzUxY2FhZWZjZWE5MDA4NTUwMTRkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5uGtdfpPgvKQnBPigpdeej4P8ciKJjxDv83XBEEMyo4",
  },
};

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
