import styled from 'styled-components';

export const CastWrapper = styled.div`
  width: 1280px;
  display: flex;
  margin: auto;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  list-style: none;
  margin-top: 16px;
`;

export const CastListItem = styled.li`
  display: flex;
  width: 200px;
  height: 375px;
  flex-direction: column;
  text-align: center;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  margin-top: 8px;
`;

export const Character = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  margin-top: 4px;
`;