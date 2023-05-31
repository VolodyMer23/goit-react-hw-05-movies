import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieDetails } from 'services/movie-api';
import defaultPoster from 'images/default-movie.jpg';
import { MoviePoster } from 'components/MovieList/MovieList.styled';
import {
  DetailsWrapper,
  MovieWrapper,
  MovieTitle,
  VoteCount,
  VoteText,
  TextWrapper,
  Votes,
  SubTitle,
  DetailsList,
  DetailsListItem,
  Div,
  BackBtn,
  BackBtnIcon,
} from './MovieDetails.styled';
import { RLink } from 'styles/GlobalStyles';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const location = useLocation();
  const genresList = movieData?.genres?.map(genre => genre.name).join(', ');

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(({ data }) => {
        setMovieData(data);
      })
      .catch(error => {
        toast.error(`Sorry something went wrong. ${error.message}`);
      });
  }, [movieId]);

  const {
    poster_path,
    original_title,
    title,
    release_date,
    vote_count,
    vote_average,
    overview,
    backdrop_path,
  } = movieData;

  return (
    <DetailsWrapper backdrop={backdrop_path}>
      <BackBtn>
        <RLink to={location.state}>
          <BackBtnIcon />
          Back
        </RLink>
      </BackBtn>
      <MovieWrapper>
        <Div>
          <MoviePoster
            src={
              poster_path === null || undefined
                ? defaultPoster
                : `https://image.tmdb.org/t/p/w500${poster_path}`
            }
            alt={original_title}
            width="300"
          />
          <DetailsList>
            <DetailsListItem>
              <RLink to="cast" state={location.state}>
                Cast
              </RLink>
            </DetailsListItem>
            <DetailsListItem>
              <RLink to="reviews" state={location.state}>
                Reviews
              </RLink>
            </DetailsListItem>
          </DetailsList>
        </Div>
        <TextWrapper>
          <MovieTitle>
            {title}
            {release_date && <span> ({release_date.slice(0, 4)})</span>}
          </MovieTitle>
          <>
            {vote_count > 0 ? (
              <VoteCount>
                <VoteText>
                  User score: {Math.round(vote_average * 10)}%&nbsp;
                  <Votes>
                    ({vote_count} {vote_count === 1 ? 'vote' : 'votes'})
                  </Votes>
                </VoteText>
              </VoteCount>
            ) : (
              'No votes yet'
            )}
          </>
          <SubTitle>Overview</SubTitle>
          <p>{overview}</p>
          <SubTitle>Genres</SubTitle>
          <p>{genresList !== '' ? genresList : 'No genres provided'}</p>
        </TextWrapper>
      </MovieWrapper>

      <Suspense>
        <Outlet />
      </Suspense>
    </DetailsWrapper>
  );
}
