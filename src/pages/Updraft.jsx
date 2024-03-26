import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Github from '../assets/imgs/github.svg';
import Website from '../assets/imgs/website.svg';
import UpdraftImg from '../assets/imgs/blackridge-large.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

function Updraft() {
  return (
    <div>
      <Helmet>
        <title>Big Mike | Updraft</title>
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
            <h1>Updraft</h1>
            <LazyLoadImage
              alt='Screenshot of my updraft website'
              src={UpdraftImg}
              effect='blur'
            />
          </motion.div>
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
              I initially undertook this project as a technical test for a job
              interview. However, following my successful employment, I
              transformed it into a refined website intended to showcase our
              services to potential clients. The creation process commenced with
              an in-depth analysis of the project requirements and target
              audience, allowing me to tailor the website's design and
              functionality to effectively communicate our offerings.
            </p>
            <p>
              Throughout the development process, I prioritized user-centric
              design principles, incorporating easy to use navigation and clear
              messaging to guide visitors through the website seamlessly.
              Additionally, I created features such as call-to-action buttons to
              encourage engagement and conversion.
            </p>
            <p>
              With the website now live, my focus remains on monitoring its
              performance and gathering feedback from users to further refine
              and optimize the platform. By leveraging this project as a
              powerful marketing tool, we aim to attract and convert potential
              clients, showcasing our expertise and capabilities in the field.
            </p>
            <p>
              Since completing this project, my journey as a developer has been
              marked by significant growth and learning. Each project, including
              this one, has served as a stepping stone towards honing my skills
              and expanding my knowledge in web development. My latest project
              showcases not only my continued progress but also my ability to
              apply newfound knowledge and insights to create even more robust
              and innovative solutions. As I continue to evolve as a developer,
              I am excited to tackle new challenges and push the boundaries of
              what I can achieve in the world of web development.
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

export default Updraft;
