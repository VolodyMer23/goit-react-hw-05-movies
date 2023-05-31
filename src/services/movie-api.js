import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'bc2a6dba0771d9712995c1a12aa94664';

export const fetchTrends = async () => {
  return await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
};

export const fetchMovieSearch = async query => {
  return await axios.get(
    `${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}&include_adult=false&language=en-US&page=1`
  );
};

export const fetchMovieDetails = async movieId => {
  return await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
};

export const fetchMovieCast = async movieId => {
  return await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
};

export const fetchMovieReviews = async movieId => {
  return await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};
