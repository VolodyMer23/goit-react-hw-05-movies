import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/movie-api';
import defaultProfile from 'images/defaultProfile.jpg';
import { CastList, CastListItem, CastWrapper, Character, Name } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);
  
  useEffect(() => {
    fetchMovieCast(movieId)
      .then(({ data }) => {
        setCastData(data.cast);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <CastWrapper>
      <CastList>
        {castData.map(({ character, original_name, id, profile_path }) => {
          return (
            <CastListItem key={id}>
              <img
                src={
                  profile_path === null
                    ? defaultProfile
                    : `https://image.tmdb.org/t/p/w500/${profile_path}`
                }
                alt={original_name}
                width="200"
              />
              <Name>{original_name}</Name>
              <Character>{`Character: ${character}`}</Character>
            </CastListItem>
          );
        })}
      </CastList>
    </CastWrapper>
  );
}
