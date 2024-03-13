import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ProjectSection() {
  return (
    <MainProjectBox>
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
      </div>
      <ViewMoreProjects>
        <Link to='/projects'>View more</Link>
      </ViewMoreProjects>
    </MainProjectBox>
  );
}

const MainProjectBox = styled.div`
  margin-bottom: 150px;
  margin-top: 100px;
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

const ViewMoreProjects = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 0.75vw;
  margin-top: 10px;

  a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: #f27830;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  a:hover::after,
  a:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }

  a {
    overflow: hidden;
    color: inherit;
    text-decoration: none;
    display: block;
    position: relative;
    padding: 0.2em 0;
  }

  a::after {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }

  a:hover::after,
  a:focus::after {
    transform: translate3d(0, 0, 0);
  }
`;

export default ProjectSection;
