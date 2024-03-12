import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

// TODO
// include smooth scrolling

function Layout() {
  return (
    <MainBG>
      <Suspense
        fallback={
          <Centered>
            <LoadingSpinner />
          </Centered>
        }
      >
        <Nav />
        <Outlet />
        <Footer />
      </Suspense>
    </MainBG>
  );
}

const MainBG = styled.div`
  width: 95%;
  height: 100vh;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default Layout;
