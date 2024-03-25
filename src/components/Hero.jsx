import React from 'react';
import { motion } from 'framer-motion';

import styled from 'styled-components';
import hero from '../assets/imgs/oleg-laptev-unsplash.webp';

function Hero() {
  return (
    <HeroBG>
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
        <HeroOneLiner>
          Crafting intuitive user experiences with pixel-perfect precision to
          bring digital visions to life.
        </HeroOneLiner>
      </motion.div>
    </HeroBG>
  );
}

const HeroBG = styled.div`
  background-image: url(${hero});
  background-size: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 76px;
  height: calc(100vh - 76px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    background-position: right;
  }

  @media only screen and (max-width: 900px) {
    background-position: left;
  }

  @media only screen and (max-width: 425px) {
    background-position: left;
  }
`;

const HeroOneLiner = styled.h2`
  font-size: 6rem;
  width: 60%;
  margin-left: 100px;
  font-family: 'Source Serif 4', serif;
  font-weight: bold;

  @media only screen and (max-width: 1440px) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 1024px) {
    margin-left: 50px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 425px) {
    font-size: 2rem;
    width: 100%;
    margin: 0;
    text-align: center;
  }

  @media only screen and (max-width: 375px) {
    font-size: 1.5rem;
  }
`;

export default Hero;
