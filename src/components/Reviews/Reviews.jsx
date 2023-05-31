import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/movie-api';
import {
  ReviewsList,
  ReviewsListItem,
  Author,
  Content,
} from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(({ data }) => {
        setReviewsData(data.results);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      {reviewsData && reviewsData.length > 0 ? (
        <>
          <ReviewsList>
            {reviewsData.map(({ author, content, id }) => {
              return (
                <ReviewsListItem key={id}>
                  <Author>Author: {author}</Author>
                  <Content>{content}</Content>
                </ReviewsListItem>
              );
            })}
          </ReviewsList>
        </>
      ) : (
        <div>We don't have any rewiews for this movie.</div>
      )}
    </>
  );
}
