import { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Github from '../assets/imgs/github.svg';
import Website from '../assets/imgs/website.svg';
import SkullImg from '../assets/imgs/skull-split-large.webp';

import 'react-lazy-load-image-component/src/effects/blur.css';

function Skull() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <div>
      <Helmet>
        <title>Big Mike | Skull Split</title>
      </Helmet>
      <ProjectBox>
        <TitleMainImg>
          <h1>Skull Split</h1>
          <LazyLoadImage
            alt='Screenshot of my skull split gaming website'
            src={SkullImg}
            effect='blur'
          />
        </TitleMainImg>
        <ProjectInfo>
          <ProjectLinks>
            <p>Project Links:</p>
            <a
              href='https://skull-split.netlify.app/'
              target='_blank'
              rel='nofollow'
            >
              <img src={Website} />
            </a>
            <a
              href='https://github.com/soupy96/skull-split'
              target='_blank'
              rel='nofollow'
            >
              <img src={Github} />
            </a>
          </ProjectLinks>
          <ProjectBody>
            <p>
              After learning the basics of ReactJS I took it upon myself to
              create my first website using what I had learned. Skull Split is a
              website that mockup of a fake video game. With every year that
              passes, new technologies emerge that change the way the industry
              does things. ReactJS sure is one of them. This is where I started
              to learn about ReactJS.
            </p>
            <p>
              While creating this website I used NPM to take advantage of the
              styled-components, react-router-dom, react-burger-menu,
              swiper/react node modules. I learned to use a Layout.js file that
              uses the same components on every page like the navbar, footer and
              sticky socials while outputing each pages unique content. I've
              learned how to use re-usable components while using flexbox and
              brushing up on my CSS grid.
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

export default Skull;
