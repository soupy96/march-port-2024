import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <MainProjectBox>
      <Helmet>
        <title>Big Mike | Projects</title>
      </Helmet>
      <h1>Showcase</h1>
      <div className='projectbox'>
        <Link to='/todo'>
          <div className='card todo-card'>
            <Info>
              <p>Todo App</p>
              <DotBox />
            </Info>
          </div>
        </Link>
        <Link to='/skull'>
          <div className='card skull-split-card'>
            <Info>
              <p>Skull Split</p>
              <DotBox />
            </Info>
          </div>
        </Link>
        <Link to='/hockey'>
          <div className='card hockey-card'>
            <Info>
              <p>The Pro Hockey Group</p>
              <DotBox />
            </Info>
          </div>
        </Link>
        <Link to='/jim-chapman'>
          <div className='card jim-chapman'>
            <Info>
              <p>Jim Chapman</p>
              <DotBox />
            </Info>
          </div>
        </Link>
        <Link to='/github-finder'>
          <div className='card github-finder'>
            <Info>
              <p>Github Finder</p>
              <DotBox />
            </Info>
          </div>
        </Link>
        <Link to='/fifty-in-fifty'>
          <div className='card fifty-in-fifty'>
            <Info>
              <p>Fifty In Fifty</p>
              <DotBox />
            </Info>
          </div>
        </Link>
        <Link to='/updraft'>
          <div className='card updraft'>
            <Info>
              <p>Updraft</p>
              <DotBox />
            </Info>
          </div>
        </Link>
      </div>
    </MainProjectBox>
  );
}

const MainProjectBox = styled.div`
  margin-bottom: 150px;

  h1 {
    font-size: 150px;
    font-family: 'Source Serif 4', serif;
    margin: 50px 0px;
    text-align: center;
  }

  @media only screen and (max-width: 1440px) {
    h1 {
      font-size: 125px;
    }
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 100px;
    }
  }

  @media only screen and (max-width: 425px) {
    h1 {
      font-size: 75px;
    }
  }
`;

const Info = styled.div`
  width: 90%;
  color: #f2e1c2;
  padding: 20px 0px;
  border-top: 1px solid #f2e1c2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DotBox = styled.span`
  width: 10px;
  height: 10px;
  background-color: #f2e1c2;
`;

export default Projects;
