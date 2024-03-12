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
      <h1 className='text-3xl font-bold '>
        <Link to='/'>Michael Campbell </Link>
      </h1>
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
  padding: 20px 0px;
`;

export default Nav;
