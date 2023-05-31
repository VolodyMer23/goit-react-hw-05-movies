import React from 'react';
import { useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import {
  ListWrapper,
  MovieItem,
  MoviePoster,
  MovieTitle,
  MoviesList,
  RLink,
} from './MovieList.styled';
import defaultPoster from 'images/default-movie.jpg';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ListWrapper>
      <MoviesList>
        {movies.map(
          ({ id, poster_path, original_title, title, release_date }) => (
            <MovieItem key={id}>
              <RLink to={`/movies/${id}`} state={location} cover={poster_path}>
                <MoviePoster
                  src={
                    poster_path === null || undefined
                      ? defaultPoster
                      : `https://image.tmdb.org/t/p/w500/${poster_path}`
                  }
                  alt={original_title}
                  width="300"
                />
                <MovieTitle>
                  {title} ({release_date.slice(0, 4)})
                </MovieTitle>
              </RLink>
            </MovieItem>
          )
        )}
      </MoviesList>
    </ListWrapper>
  );
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      poster_path: propTypes.string,
    })
  ),
};
