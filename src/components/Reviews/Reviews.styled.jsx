import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  margin-top: 16px;
`;

export const ReviewsListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Author = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  margin-top: 8px;
`;

export const Content = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  margin-top: 4px;
`;
