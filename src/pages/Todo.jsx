import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Github from '../assets/imgs/github.svg';
import Website from '../assets/imgs/website.svg';
import TodoImg from '../assets/imgs/todo-app-large.webp';

import 'react-lazy-load-image-component/src/effects/blur.css';

function Todo() {
  return (
    <div>
      <Helmet>
        <title>Big Mike | Todo App</title>
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
            <h1>Todo App</h1>
            <LazyLoadImage
              alt='Screenshot of my todo app'
              src={TodoImg}
              effect='blur'
            />
          </motion.div>
        </TitleMainImg>
        <ProjectInfo>
          <ProjectLinks>
            <p>Project Links:</p>
            <a
              href='https://michael-todo.netlify.app/'
              target='_blank'
              rel='nofollow'
            >
              <img src={Website} />
            </a>
            <a
              href='https://github.com/soupy96/react-todo'
              target='_blank'
              rel='nofollow'
            >
              <img src={Github} />
            </a>
          </ProjectLinks>
          <ProjectBody>
            <p>
              My goal for this project was pretty simple: to create a tool that
              helps people keep track of their tasks easily. It all started with
              planning out what features I wanted—like adding, updating
              deleting, and reading tasks form local storage—so the website
              would be super helpful for anyone using it.
            </p>
            <p>
              Then came the fun part: designing how everything would look and
              work. I spent time figuring out the best colors, layouts, and
              buttons to make sure the website was easy to use and looked nice.
              I decided to use Material-UI, a handy library, to help me create a
              sleek and modern design. With its pre-made components and styles,
              I could focus more on making the website user-friendly and less on
              reinventing the wheel.
            </p>
            <p>
              After that, I got into building the website itself. I used React
              to make it happen. With React, I could break down the website into
              smaller, reusable parts. I created different components for tasks,
              task lists, and buttons, among others. To make things look better
              and follow a consistent design, I used Material-UI, a library with
              pre-made components and styles. This helped me save time and
              ensure a polished look for the website. Of course, I made sure
              everything worked smoothly together, and I tested it all
              rigorously to catch any bugs.
            </p>
            <p>
              Upon reaching deployment, I entrusted the website to Netlify,
              configuring continuous deployment through integration with the
              GitHub repository. This seamless deployment process ensured that
              the todo list application was readily accessible to users, ready
              to streamline their task management workflows.
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

export default Todo;
