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
              I started this challenge to enhance my JavaScript skills through
              practical application. This website serves as a compilation of
              small projects, each completed over fifty days, allowing me to
              delve into various aspects of JavaScript and its capabilities. The
              creation process began with a commitment to daily learning and
              experimentation, as I tackled a new project each day to broaden my
              understanding of JavaScript.
            </p>
            <p>
              Using the GitHub repository that I created documented each
              project's codebase, providing insights into the implementation and
              demonstrating the evolution of my skills over time. From basic
              concepts like DOM manipulation and event handling to more advanced
              topics such as animations and API integration, each project
              offered valuable insights and hands-on experience.
            </p>
            <p>
              Throughout the development journey, I focused on iterative
              learning and improvement, continuously refining my coding
              practices and exploring new techniques and libraries. As a result,
              the website serves not only as a showcase of completed projects
              but also as a testament to my growth and proficiency in JavaScript
              development.
            </p>
            <p>
              By sharing this collection of projects, I hope to inspire and
              educate others on their own coding journeys, showcasing the power
              and versatility of JavaScript in creating dynamic and interactive
              web experiences.
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
    font-size: 150px;
    font-family: 'Source Serif 4', serif;
    margin: 50px 0px;
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

const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0px;
  position: relative;
  height: 100%;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 0;
  }

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
  width: 200px;
  border-top: 1px solid #401515;
  border-bottom: 1px solid #401515;
  padding: 10px 0px;
  height: 150px;
  font-family: 'Source Serif 4', serif;

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

  @media only screen and (max-width: 1024px) {
    position: static;
    width: 100%;
    margin-bottom: 50px;
    height: auto;
    align-items: center;
    justify-content: flex-end;
    border: 0;

    p {
      width: auto;
      margin-right: 20px;
      display: none;
    }

    img {
      margin-right: 20px;
    }
  }
`;

const ProjectBody = styled.div`
  width: 60%;

  p {
    font-size: 3rem;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;

    p {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 425px) {
    p {
      font-size: 1.5rem;
    }
  }
`;

export default FiftyInFifty;
