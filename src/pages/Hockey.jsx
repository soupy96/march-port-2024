import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Website from '../assets/imgs/website.svg';
import HockeyImg from '../assets/imgs/prohockey-large.jpg.webp';

import 'react-lazy-load-image-component/src/effects/blur.css';

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
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            <h1>The Pro Hockey Group</h1>
            <LazyLoadImage
              alt='Screenshot of The Pro Hockey Groups website'
              src={HockeyImg}
              effect='blur'
            />
          </motion.div>
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
              The Pro Hockey Group serves as a stats hub for all things related
              to professional hockey, catering to fans, players, and enthusiasts
              alike. The website boasts of features like, player profiles, team
              and player statistics.
            </p>
            <p>
              This project started from the ground up. As the primary developer
              for this project, I developed and currently maintain the code that
              queries various APIs to sort and display data based on what player
              was queried.
            </p>
            <p>
              While using JavaScript, I created a feature that seamlessly
              fetches player data from two different APIs. In receiving data
              back from the APIs the creation of virtual hockey cards was
              possible. The cards displayed comprehensive player profiles filled
              with stats, accolades, and personal information. Despite the
              challenges posed by the WordPress environment, I adeptly navigated
              through intricacies, ensuring smooth integration and optimal
              performance of these dynamic elements within the content
              management system.
            </p>
            <p>
              After receiving our website design from our talented designer, I
              embarked on the development journey, translating these visual
              blueprints into tangible digital experiences. Working within the
              WordPress ecosystem, I brought the designer's vision to life,
              ensuring pixel-perfect implementation of every detail. Using HTML,
              CSS, and JavaScript, I created the website's frontend, matching
              each element to the designer's specifications. This collaborative
              effort culminated in the creation of a visually stunning and
              navigable platform.
            </p>
            <p>
              After development was completed, I facilitated the deployment of
              the website to an AWS Lightsail server, augmenting its scalability
              and resilience with Elastic Load Balancing. The integration of
              Elastic Load Balancing optimizes resource utilization,
              distributing incoming traffic across multiple instances for
              enhanced performance and reliability. This deployment architecture
              not only bolsters the website's stability but also lays the
              foundation for future scalability as user demand grows.
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

export default Hockey;
