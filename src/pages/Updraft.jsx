import { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Github from '../assets/imgs/github.svg';
import Website from '../assets/imgs/website.svg';
import UpdraftImg from '../assets/imgs/blackridge-large.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

function Updraft() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <div>
      <Helmet>
        <title>Big Mike | Updraft</title>
      </Helmet>
      <ProjectBox>
        <TitleMainImg>
          <h1>Updraft</h1>
          <LazyLoadImage
            alt='Screenshot of my updraft website'
            src={UpdraftImg}
            effect='blur'
          />
        </TitleMainImg>
        <ProjectInfo>
          <ProjectLinks>
            <p>Project Links:</p>
            <a
              href='https://soupy96.github.io/BRS.github.io/'
              target='_blank'
              rel='nofollow'
            >
              <img src={Website} />
            </a>
            <a
              href='https://github.com/soupy96/updraft'
              target='_blank'
              rel='nofollow'
            >
              <img src={Github} />
            </a>
          </ProjectLinks>
          <ProjectBody>
            <p>
              This project was first done as a technical test for a job
              interview but, after getting said job, turned into a more refined
              website to advertise to clients.
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

export default Updraft;
