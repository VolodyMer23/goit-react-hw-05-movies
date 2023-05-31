import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  margin: 0 auto;
  margin-top: 16px;
`;

export const MoviesList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
  }
`;

export const MovieItem = styled.li`
  max-width: 300px;
  margin: 0;
  flex-direction: column;
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  transition: transform 200ms ease-in-out;
  &:hover,
  &focus {
    transform: scale(1.03);
  }
`;
export const RLink = styled(Link)`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  position: relative;
  width: 100%;
  text-decoration: none;
  color: #252525;
`;

export const MovieTitle = styled.h2`
  margin: 0;
  padding: 5px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const MoviePoster = styled.img`
  margin: 0;
  height: 450px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;
