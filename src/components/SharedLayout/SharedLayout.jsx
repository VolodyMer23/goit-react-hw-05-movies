import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Main, RNavLink, Wrapper } from 'styles/GlobalStyles';
import { Button, Logo, Nav } from './SharedLayout.styled';
export default function SharedLayout() {
  return (
    <Wrapper>
      <Header>
        <Logo />
        <Nav>
          <Button>
            <RNavLink to="/">Home</RNavLink>
          </Button>
          <Button>
            <RNavLink to="/movies">Movies</RNavLink>
          </Button>
        </Nav>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <footer></footer>
    </Wrapper>
  );
}
