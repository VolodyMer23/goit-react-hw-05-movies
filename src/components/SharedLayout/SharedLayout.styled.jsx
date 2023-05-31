import styled from 'styled-components';
import { BiCameraMovie } from 'react-icons/bi';

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
`;

export const NavItem = styled.ul`
  display: flex;
  width: 150px;
`;

export const Button = styled.button`
  display: flex;
  border: none;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  background-color: #ffffff;
  color: #252525;
  padding: 6px 12px;
  transition: 300ms ease-in-out;
  border-radius: 4px;
  margin-right: 4px;
  &:hover,
  &:focus {
    color: #516c7a;
  }
  &:active {
    background-color: #516c7a;
    color: #ffffff;
  }
`;

export const Logo = styled(BiCameraMovie)`
  color: #252525;
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;
