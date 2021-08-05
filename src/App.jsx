import { useEffect, useState } from "react";
import { api, apiSearch } from "./api/api";

import CardMovie from "./components/CardMovie/CardMovie";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";

import { Main } from "./components/CardMovie/Style";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovies, SetSearchMovies] = useState("");

  const handleMovieChange = (e) => {
    SetSearchMovies(e.target.value);
  };

  const handleMovieClick = (e) => {
    e.preventDefault();

    console.log(searchMovies);

    const searchMovie = async () => {
      const resp = await apiSearch.get(searchMovies);
      const respData = resp;
      // console.log(respData.data.results);
      setMovies(respData.data.results);
    };
    searchMovie();
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const resp = await api.get("");
      const respData = resp;
      // console.log(respData.data.results);
      setMovies(respData.data.results);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <Header
        handleMovieChange={handleMovieChange}
        handleMovieClick={handleMovieClick}
        value={searchMovies}
      />
      <Info />
      <Main>
        {movies.length > 0 &&
          movies.map((movie) => (
            <CardMovie
              key={movie.id}
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
