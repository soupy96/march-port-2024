import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Nav() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <NavBox>
      <HomeTitle>
        <h1 className='text-3xl font-bold '>
          <Link to='/'>Michael Campbell </Link>
        </h1>
      </HomeTitle>
      <p>
        {dateState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
      </p>
    </NavBox>
  );
}

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  font-family: 'Source Serif 4', serif;

  p {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 375px) {
    p {
      font-size: 1.5rem;
    }
  }
`;

const HomeTitle = styled.div`
  a {
    color: inherit;
    text-decoration: underline 0.15em rgba(242, 120, 48, 0);
    transition: text-decoration-color 300ms;
  }

  a:hover {
    text-decoration-color: rgba(242, 120, 48, 1);
  }

  @media only screen and (max-width: 375px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export default Nav;
