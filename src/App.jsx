import { useEffect, useState } from "react";
import api from "./api/api";

import CardMovie from "./components/CardMovie/CardMovie";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";

import { Main } from "./components/CardMovie/Style";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const resp = await api.get("");
      const respData = resp;
      console.log(respData.data.results);
      setMovies(respData.data.results);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <Header />
      <Info />
      <Main>
        {movies.length > 0 &&
          movies.map((movie) => (
            <CardMovie
              countrie={movie.original_language}
              date={movie.release_date}
              name={movie.original_title}
              votes={movie.vote_average}
              type={movie.original_language}
              poster_path={movie.poster_path}
            />
          ))}
      </Main>
    </>
  );
}

export default App;
