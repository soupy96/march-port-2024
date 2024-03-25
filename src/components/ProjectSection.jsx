import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ProjectSection() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const mainControls1 = useAnimation();
  const mainControls2 = useAnimation();
  const mainControls3 = useAnimation();

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
  }, [isInView1, isInView2, isInView3]);

  return (
    <MainProjectBox>
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
              delay: 0.4,
            }}
          >
            <div className='card todo-card' ref={ref1}>
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
              delay: 0.6,
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
              delay: 0.8,
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
      </div>
      <ViewMoreProjects>
        <Link to='/projects'>View more</Link>
      </ViewMoreProjects>
    </MainProjectBox>
  );
}

const MainProjectBox = styled.div`
  margin-bottom: 150px;
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

const ViewMoreProjects = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  margin-top: 10px;

  a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: #f27830;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  a:hover::after,
  a:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }

  a {
    overflow: hidden;
    color: inherit;
    text-decoration: none;
    display: block;
    position: relative;
    padding: 0.2em 0;
  }

  a::after {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }

  a:hover::after,
  a:focus::after {
    transform: translate3d(0, 0, 0);
  }

  @media only screen and (max-width: 1024px) {
    width: 85vw;
  }
`;

export default ProjectSection;
