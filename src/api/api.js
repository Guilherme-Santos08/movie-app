import axios from "axios";

// function teste({ page }) {
//   axios.create({
//     baseURL: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=40698a7bda352049c103b665527f1793&page=${page}`,
//   });
// }

export const apiSearchMovies = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=40698a7bda352049c103b665527f1793&query=",
});

export const apiSearch = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?&api_key=40698a7bda352049c103b665527f1793&query=`,
});

export const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/discover/movie?api_key=40698a7bda352049c103b665527f1793&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=`,
  // https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=40698a7bda352049c103b665527f1793&page=1
  // https://api.themoviedb.org/3/discover/movie?api_key=40698a7bda352049c103b665527f1793&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate
});
