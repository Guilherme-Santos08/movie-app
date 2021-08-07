import { useEffect, useState } from "react";
import { api, apiSearch } from "./api/api";

import Header from "./components/Header/Header";
import CardMovie from "./components/CardMovie/CardMovie";
import Info from "./components/Info/Info";
import ButtonSkiporPrev from "./components/ButtonSkipOrPrev/ButtonSkipOrPrev";

import { Main } from "./components/CardMovie/Style";
import axios from "axios";
import Loading from "./components/Loading/Loading";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovies, SetSearchMovies] = useState("");
  const [pagesMovies, SetPagesMovies] = useState(1);
  // console.log(pagesMovies);

  useEffect(() => {
    const fetchMovie = async () => {
      const resp = await api.get("0");
      const respData = resp;
      console.log(respData.data.results);
      setMovies(respData.data.results);
    };
    fetchMovie();
  }, []);

  const handleMovieChange = (e) => {
    SetSearchMovies(e.target.value);
  };

  const handleMovieClick = (e) => {
    e.preventDefault();

    // console.log(searchMovies);

    const searchMovie = async () => {
      const resp = await apiSearch.get(searchMovies);
      const respData = resp;
      // console.log(respData.data.results);
      setMovies(respData.data.results);
    };
    searchMovie();
  };

  useEffect(() => {
    const searchMovie = async () => {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=40698a7bda352049c103b665527f1793&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=${pagesMovies}`
      );
      const respData = resp;
      // console.log(respData.data.results);
      setMovies(respData.data.results);
    };
    searchMovie();
  }, [pagesMovies]);

  const handlePrevClick = () => {
    SetPagesMovies(pagesMovies - 1);
    if (pagesMovies <= 1) {
      SetPagesMovies(1);
    }
  };

  const handleNextClick = () => {
    SetPagesMovies(pagesMovies + 1);
  };

  return (
    <>
      <Header
        handleMovieChange={handleMovieChange}
        handleMovieClick={handleMovieClick}
        value={searchMovies}
      />
      <Info />
      <Loading />
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
              moviesId={movie.id}
            />
          ))}
      </Main>
      <ButtonSkiporPrev
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
        blockOrPass={pagesMovies}
      />
    </>
  );
}

export default App;
