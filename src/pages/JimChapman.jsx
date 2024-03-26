import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Website from '../assets/imgs/website.svg';
import JimImg from '../assets/imgs/jim-chapman-large.webp';

import 'react-lazy-load-image-component/src/effects/blur.css';

function JimChapman() {
  return (
    <div>
      <Helmet>
        <title>Big Mike | Jim Chapman</title>
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
            <h1>Jim Chapman</h1>
            <LazyLoadImage
              alt='Screenshot of Jim Chapmans website'
              src={JimImg}
              effect='blur'
            />
          </motion.div>
        </TitleMainImg>
        <ProjectInfo>
          <ProjectLinks>
            <p>Project Links:</p>
            <a href='https://jimchapman.ca/' target='_blank' rel='nofollow'>
              <img src={Website} />
            </a>
          </ProjectLinks>
          <ProjectBody>
            <p>
              For this website I needed to leverage WordPress to create a
              versatile platform capable of hosting multiple blogs. This
              endeavor began with lots of planning to structure the site
              effectively and identify the necessary functionalities to better
              serve Jim Chapman's audience.
            </p>
            <p>
              Next, I started the design of the website, collaborating closely
              with Jim Chapman to bring his vision to life. While trying to
              modernize his website while keeping its rustic feel, I created and
              developed custom child themes and layouts that worked with
              WordPress, maintaining a cohesive design across the various blogs.
              Every aspect, from typography to color schemes, was carefully
              chosen to reflect Jim Chapman's brand and resonate with his
              audience.
            </p>
            <p>
              Development started by the implementing custom features and
              functionalities tailored to each blog's unique requirements.
              Whether integrating custom post types, user comment feature, or
              optimizing performance for seamless browsing experiences, I coded
              and tested each element to ensure optimal functionality and user
              experience. Additionally, I prioritized maintaining a
              user-friendly backend interface within WordPress, ensuring it
              remained easy to use and accessible even for less tech-savvy
              users.
            </p>
            <p>
              With development complete, I facilitated the deployment of the
              website to a AWS Lightsail instance, ensuring high availability
              and performance for Jim Chapman's audience. Overall, the website
              represents a collaborative effort aimed at delivering a engaging
              digital platform for Jim Chapman's audience, leveraging the power
              and versatility of WordPress to accommodate multiple blogs.
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

export default JimChapman;
