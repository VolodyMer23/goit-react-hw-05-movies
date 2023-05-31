import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';

export const DetailsWrapper = styled.div`
  position: relative;
  width: 1280px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  text-align: left;
  &::after {
    content: '';
    position: fixed;
    z-index: -1;
    width: calc(100% + 10px);
    height: calc(100vh + 10px);
    background-image: ${props =>
      props.backdrop
        ? `url('https://image.tmdb.org/t/p/original/${props.backdrop}')`
        : `none`};
    background-repeat: no-repeat;
    background-size: cover;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.25;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieWrapper = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const MovieTitle = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const VoteCount = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const VoteText = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  margin-left: 16px;
`;
export const Votes = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const SubTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
`;

export const DetailsList = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  margin-top: 16px;
`;

export const DetailsListItem = styled.li`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  height: 24px;
  background-color: #ffffff;
  border: 1px solid #252525;
  border-radius: 4px;
  &:hover,
  &:focus {
    background-color: #252525;
    color: #ffffff;
  }
`;

export const BackBtn = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: row;
  width: 100px;
  height: 24px;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const BackBtnIcon = styled(BsArrowLeft)`
  color: #252525;
  width: 32px;
`;