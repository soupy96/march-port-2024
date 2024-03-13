import { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Github from '../assets/imgs/github.svg';
import Website from '../assets/imgs/website.svg';
import FiftyImg from '../assets/imgs/fifty-in-fifty-large.webp';

import 'react-lazy-load-image-component/src/effects/blur.css';

function FiftyInFifty() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <div>
      <Helmet>
        <title>Big Mike | Fifty In Fifty</title>
      </Helmet>
      <ProjectBox>
        <TitleMainImg>
          <h1>Fifty In Fifty</h1>
          <LazyLoadImage
            alt='Screenshot of my Fifty Javascript Projects in Fifty Days website'
            src={FiftyImg}
            effect='blur'
          />
        </TitleMainImg>
        <ProjectInfo>
          <ProjectLinks>
            <p>Project Links:</p>
            <a
              href='https://www.bigmike.ca/fifty-projects-fifty-days/'
              target='_blank'
              rel='nofollow'
            >
              <img src={Website} />
            </a>
            <a
              href='https://github.com/soupy96/50-Projects-In-50-Days'
              target='_blank'
              rel='nofollow'
            >
              <img src={Github} />
            </a>
          </ProjectLinks>
          <ProjectBody>
            <p>
              This was a chance for me to practice and brush up on my JavaScript
              skills before I took a crack at ReactJS. It's simple - 50 projects
              in 50 days.
            </p>
            <p>
              Every day I would watch enough to understand what the project was
              and what it was trying to achieve. I then attempted to create it
              with the knowledge and resources I had first and then watched the
              rest to learn more.
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
    font-size: 5vw;
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
  font-family: 'Source Serif 4', serif;

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
    transform: translateY(0px);
    transition: transform 0.5s;
  }

  img:hover {
    transform: translateY(-5px);
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

export default FiftyInFifty;
