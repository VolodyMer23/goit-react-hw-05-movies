import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { fetchTrends } from 'services/movie-api';
import MovieList from 'components/MovieList/MovieList';
import { Title, Wrapper } from 'styles/GlobalStyles';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrends()
      .then(resp => {
        const data = resp.data.results;
        setMovies(data);
      })
      .catch(error => {
        toast.error(`Sorry something went wrong. ${error.message}`);
      });
  }, []);

  return (
    <Wrapper>
      <ToastContainer autoClose={2000} theme="colored" pauseOnHover />
      <Title>Trending Movies</Title>
      <MovieList movies={movies} />
    </Wrapper>
  );
}
