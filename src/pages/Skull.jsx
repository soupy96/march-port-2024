import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Github from '../assets/imgs/github.svg';
import Website from '../assets/imgs/website.svg';
import SkullImg from '../assets/imgs/skull-split-large.webp';

import 'react-lazy-load-image-component/src/effects/blur.css';

function Skull() {
  return (
    <div>
      <Helmet>
        <title>Big Mike | Skull Split</title>
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
            <h1>Skull Split</h1>
            <LazyLoadImage
              alt='Screenshot of my skull split gaming website'
              src={SkullImg}
              effect='blur'
            />
          </motion.div>
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
              My goal for this website was to create an immersive platform that
              caters to the gaming community's diverse interests. From the
              onset, my goal was to curate a space that offers engaging content,
              resources, and possibly interactive features to enrich the gaming
              experience.
            </p>
            <p>
              The creation process unfolded through a series of deliberate
              steps. It commenced with thorough conceptualization and planning,
              where I identified the target audience and outlined the specific
              needs and preferences the website seeks to address within the
              gaming community. With a clear vision in mind, I transitioned into
              the design phase, sculpting the user interface (UI) and user
              experience (UX) to provide an engaging and intuitive platform for
              users.
            </p>
            <p>
              Development was an exciting phase, turning the design into
              functional components and features. Each section of the website
              was meticulously crafted to enhance the overall gaming experience.
              Rigorous testing followed suit, ensuring that the website operates
              flawlessly and delivers on its promises before deployment.
            </p>
            <p>
              With the website primed and ready, deployment to Netlify was the
              final step in making it accessible to gamers worldwide. To better
              update and develop the website for future plans, I streamlined
              updates and enhancements from the GitHub repository to the live
              website seamlessly.
            </p>
            <p>
              I welcome feedback and suggestions from gamers, as they play a
              pivotal role in shaping the future direction of the website. My
              mission is to continue refining and expanding the features of the
              website, ensuring that it remains a trusted destination for gamers
              to connect, explore, and indulge in their passion for gaming.
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

export default Skull;
