import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Projects() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });
  const isInView6 = useInView(ref6, { once: true });
  const isInView7 = useInView(ref7, { once: true });

  const mainControls1 = useAnimation();
  const mainControls2 = useAnimation();
  const mainControls3 = useAnimation();
  const mainControls4 = useAnimation();
  const mainControls5 = useAnimation();
  const mainControls6 = useAnimation();
  const mainControls7 = useAnimation();

  useEffect(() => {
    if (isInView1) {
      mainControls1.start('visible');
    }
    if (isInView2) {
      mainControls2.start('visible');
    }
    if (isInView3) {
      mainControls3.start('visible');
    }
    if (isInView4) {
      mainControls4.start('visible');
    }
    if (isInView5) {
      mainControls5.start('visible');
    }
    if (isInView6) {
      mainControls6.start('visible');
    }
    if (isInView7) {
      mainControls7.start('visible');
    }
  }, [
    isInView1,
    isInView2,
    isInView3,
    isInView4,
    isInView5,
    isInView6,
    isInView7,
  ]);

  return (
    <MainProjectBox>
      <Helmet>
        <title>Big Mike | Projects</title>
      </Helmet>
      <h1>Showcase</h1>
      <div className='projectbox'>
        <Link to='/todo' ref={ref1}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 1 },
            }}
            initial='hidden'
            animate={mainControls1}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <div className='card todo-card'>
              <Info>
                <p>Todo App</p>
                <DotBox />
              </Info>
            </div>
          </motion.div>
        </Link>
        <Link to='/skull' ref={ref2}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 1 },
            }}
            initial='hidden'
            animate={mainControls2}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
          >
            <div className='card skull-split-card'>
              <Info>
                <p>Skull Split</p>
                <DotBox />
              </Info>
            </div>
          </motion.div>
        </Link>
        <Link to='/hockey' ref={ref3}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 1 },
            }}
            initial='hidden'
            animate={mainControls3}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
          >
            <div className='card hockey-card'>
              <Info>
                <p>The Pro Hockey Group</p>
                <DotBox />
              </Info>
            </div>
          </motion.div>
        </Link>
        <Link to='/jim-chapman' ref={ref4}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 1 },
            }}
            initial='hidden'
            animate={mainControls4}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <div className='card jim-chapman'>
              <Info>
                <p>Jim Chapman</p>
                <DotBox />
              </Info>
            </div>
          </motion.div>
        </Link>
        <Link to='/github-finder' ref={ref5}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 1 },
            }}
            initial='hidden'
            animate={mainControls5}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
          >
            <div className='card github-finder'>
              <Info>
                <p>Github Finder</p>
                <DotBox />
              </Info>
            </div>
          </motion.div>
        </Link>
        <Link to='/fifty-in-fifty' ref={ref6}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 1 },
            }}
            initial='hidden'
            animate={mainControls6}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
          >
            <div className='card fifty-in-fifty'>
              <Info>
                <p>Fifty In Fifty</p>
                <DotBox />
              </Info>
            </div>
          </motion.div>
        </Link>
        <Link to='/updraft' ref={ref7}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 1 },
            }}
            initial='hidden'
            animate={mainControls7}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
          >
            <div className='card updraft'>
              <Info>
                <p>Updraft</p>
                <DotBox />
              </Info>
            </div>
          </motion.div>
        </Link>
      </div>
    </MainProjectBox>
  );
}

const MainProjectBox = styled.div`
  margin-bottom: 150px;

  h1 {
    font-size: 150px;
    font-family: 'Source Serif 4', serif;
    margin: 50px 0px;
    text-align: center;
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

const Info = styled.div`
  width: 90%;
  color: #f2e1c2;
  padding: 20px 0px;
  border-top: 1px solid #f2e1c2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DotBox = styled.span`
  width: 10px;
  height: 10px;
  background-color: #f2e1c2;
`;

export default Projects;
