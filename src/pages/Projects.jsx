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
          <div className='card-page todo-card'>
            <Info>
              <p>Todo App</p>
              <DotBox />
            </Info>
          </div>
        </Link>
        <Link to='/skull'>
          <div className='card-page skull-split-card'>
            <Info>
              <p>Skull Split</p>
              <DotBox />
            </Info>
          </div>
        </Link>
        <Link to='/hockey'>
          <div className='card-page hockey-card'>
            <Info>
              <p>The Pro Hockey Group</p>
              <DotBox />
            </Info>
          </div>
        </Link>
        <Link to='/jim-chapman'>
          <div className='card-page jim-chapman'>
            <Info>
              <p>Jim Chapman</p>
              <DotBox />
            </Info>
          </div>
        </Link>
        <Link to='/github-finder'>
          <div className='card-page github-finder'>
            <Info>
              <p>Github Finder</p>
              <DotBox />
            </Info>
          </div>
        </Link>
        <Link to='/fifty-in-fifty'>
          <div className='card-page fifty-in-fifty'>
            <Info>
              <p>Fifty In Fifty</p>
              <DotBox />
            </Info>
          </div>
        </Link>
        <Link to='/updraft'>
          <div className='card-page updraft'>
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
    font-size: 5rem;
    font-family: 'Source Serif 4', serif;
    margin: 50px 0px;
    text-align: center;
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
  font-size: 1.5rem;
`;

const DotBox = styled.span`
  width: 10px;
  height: 10px;
  background-color: #f2e1c2;
`;

export default Projects;
