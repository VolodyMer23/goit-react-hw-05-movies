import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { fetchMovieSearch } from 'services/movie-api';
import MovieList from 'components/MovieList/MovieList';
import SearchBox from 'components/SearchBox/SearchBox';
import { PageWrapper } from './Movies.styled';

export default function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const searchValue = searchParams.get('search') || '';

  const onFormSubmit = query => {
    if (query === searchQuery) {
      return;
    }
    setSearchQuery(query);
    setSearchParams({ search: query });
  };

  useEffect(() => {
    fetchMovieSearch(searchValue)
      .then(({ data }) => {
        setMoviesData(data.results);
      })
      .catch(error => {
        toast.error(`Sorry something went wrong. ${error.message}`);
      });
  }, [searchValue]);

  return (
    <PageWrapper>
      <ToastContainer autoClose={2000} theme="colored" pauseOnHover />
      <SearchBox onSubmit={onFormSubmit} />
      <MovieList movies={moviesData} />
    </PageWrapper>
  );
}
