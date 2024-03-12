import { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Website from '../assets/imgs/website.svg';
import HockeyImg from '../assets/imgs/prohockey-large.jpg.png';

function Hockey() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <div>
      <Helmet>
        <title>Big Mike | Hockey</title>
      </Helmet>
      <ProjectBox>
        <TitleMainImg>
          <h1>The Pro Hockey Group</h1>
          <img src={HockeyImg} />
        </TitleMainImg>
        <ProjectInfo>
          <ProjectLinks>
            <p>Project Links:</p>
            <a
              href='https://theprohockeygroup.com/'
              target='_blank'
              rel='nofollow'
            >
              <img src={Website} />
            </a>
          </ProjectLinks>
          <ProjectBody>
            <p>
              An online, queryable website that pulls information about hockey
              players from around the globe and displays it as an interactive
              hockey card.
            </p>
            <p>
              This project started from the ground up. As the primary developer
              for this project, I developed and currently maintain the code that
              queries various APIs to sort and display data based on what player
              was queried.
            </p>
          </ProjectBody>
        </ProjectInfo>
      </ProjectBox>
    </div>
  );
}

const ProjectBox = styled.div`
  margin: 50px 0px;
`;

const TitleMainImg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 5rem;
    font-family: 'Source Serif 4', serif;
    margin: 50px 0px;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0px;
  position: relative;
  height: 100%;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  top: 50px;
  width: 10%;
  border-top: 1px solid #401515;
  border-bottom: 1px solid #401515;
  padding: 10px 0px;
  height: 150px;

  @media only screen and (max-width: 768px) {
    position: relative;
    width: 100%;
    top: 25px;
    margin-bottom: 50px;
  }

  p {
    font-size: 1.5rem;
    width: 100%;
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    filter: invert(9%) sepia(15%) saturate(5622%) hue-rotate(331deg)
      brightness(99%) contrast(94%);
  }
`;

const ProjectBody = styled.div`
  width: 60%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  p {
    font-size: 3rem;
    margin-bottom: 30px;
  }
`;

export default Hockey;
