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
      <ViewMoreProjects>
        <h1 className='text-3xl font-bold '>
          <Link to='/'>Michael Campbell </Link>
        </h1>
      </ViewMoreProjects>
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
  /* font-family: 'Bebas Neue', sans-serif; */

  p {
    font-size: 0.75vw;
  }
`;

const ViewMoreProjects = styled.div`
  a {
    color: inherit;
    text-decoration: underline 0.15em rgba(242, 120, 48, 0);
    transition: text-decoration-color 300ms;
  }

  a:hover {
    text-decoration-color: rgba(242, 120, 48, 1);
  }
`;

export default Nav;
