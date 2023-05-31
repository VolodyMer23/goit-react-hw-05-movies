import { Link, NavLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        font-size: 16px;
        color: #000;
        overflow-y: scroll;    
        overflow: overlay;
    }  

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

export const Wrapper = styled.div`
  /* background-color: #ffffff; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-content: center;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #252525;
`;

export const Header = styled.div`
  width: 100%;
  min-height: 64px;
  display: flex;
  top: 0;
  left: 0;
  position: sticky;
  background-color: #ffffff;
  z-index: 1100;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  flex-basis: 100%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Main = styled.main`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 0;
`;

export const RLink = styled(Link)`
display: flex;
text-align: center;
justify-content: center;
margin: auto;
  position: relative;
  width: 100%;
  text-decoration: none;
  color: #252525;
  &:link,
  &:visited {
    color: #252525;
  }
  &:hover,
  &:focus {
    color: inherit;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: inherit;
      top: 105%;
      left: 0;
      transform: scale(1);
    }
  }
`;
export const RNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;

  &:link,
  &:visited {
    color: inherit;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #516c7a;
      top: 110%;
      left: 0;
      transform: scale(0);
      transition: 300ms ease-in-out;
    }
  }

  &.active {
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #252525;
      top: 110%;
      left: 0;
      transform: scale(1);
    }
  }
`;
