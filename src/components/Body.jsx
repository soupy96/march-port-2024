import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import styled from 'styled-components';

// TODO
// have each number slide out and the new number slide in

function Body() {
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
    <BodyBox>
      <RowSection>
        <BigNumber ref={ref1}>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 1 },
            }}
            initial='hidden'
            animate={mainControls1}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
          >
            <p>01</p>
          </motion.div>
        </BigNumber>
        <RightInfo>
          <Info ref={ref1}>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 1 },
              }}
              initial='hidden'
              animate={mainControls1}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
            >
              <h2>Career pursuit</h2>
              <p>
                I'm all about chasing my career dreams while squeezing in time
                for what I love. Whether it's getting lost in the great
                outdoors, gaming with friends, or just kicking back with a good
                book, I'm all about balancing work and play. Connecting with
                friends over shared interests keeps me grounded, and I'm always
                up for trying something new. Life's a journey, and I'm just
                enjoying the ride, one adventure at a time.
              </p>
            </motion.div>
          </Info>
          <Square>
            <span></span>
          </Square>
        </RightInfo>
      </RowSection>
      <RowSection>
        <BigNumber ref={ref2}>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 1 },
            }}
            initial='hidden'
            animate={mainControls2}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
          >
            <p>02</p>
          </motion.div>
        </BigNumber>
        <RightInfo>
          <Info ref={ref2}>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 1 },
              }}
              initial='hidden'
              animate={mainControls2}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
            >
              <h2>Passionate innovation</h2>
              <p>
                In the midst of chasing my career dreams and enjoying life's
                adventures, I've found a true passion for web development.
                There's something incredibly rewarding about bringing ideas to
                life online and creating meaningful digital experiences. Whether
                I'm coding late into the night or collaborating with fellow
                developers, I'm constantly honing my skills and pushing the
                boundaries of what's possible. It's a dynamic field that keeps
                me engaged and inspired, and I can't wait to see where this
                journey takes me next.
              </p>
            </motion.div>
          </Info>
          <Square>
            <span></span>
          </Square>
        </RightInfo>
      </RowSection>
      <RowSection>
        <BigNumber ref={ref3}>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 1 },
            }}
            initial='hidden'
            animate={mainControls3}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
          >
            <p>03</p>
          </motion.div>
        </BigNumber>
        <RightInfo>
          <Info ref={ref3}>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 1 },
              }}
              initial='hidden'
              animate={mainControls3}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
            >
              <h2>Creative expertise</h2>
              <p>
                Detail-oriented and creative Front-End Web Developer with 4
                years of experience in designing and implementing responsive and
                user-friendly web applications. Proficient in a wide range of
                front-end technologies and dedicated to delivering high-quality,
                visually appealing websites.
              </p>
              <br />
              <br />
              <p>Let's create captivating online experiences together!</p>
            </motion.div>
          </Info>
          <Square>
            <span></span>
          </Square>
        </RightInfo>
      </RowSection>
    </BodyBox>
  );
}

const BodyBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 100vh;
  padding: 20px 0px;
`;

const RowSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BigNumber = styled.div`
  width: 40%;
  font-size: 45rem;
  font-family: 'Bebas Neue', sans-serif;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1440px) {
    font-size: 30rem;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 25rem;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const RightInfo = styled.div`
  border-top: 1px solid #401515;
  padding-top: 100px;
  padding-bottom: 150px;
  display: flex;
  justify-content: space-between;
  width: 60%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 90%;

  h2 {
    font-size: 150px;
    margin-bottom: 50px;
  }

  p {
    font-size: 30px;
  }

  @media only screen and (max-width: 1440px) {
    h2 {
      font-size: 100px;
    }

    p {
      font-size: 25px;
    }
  }

  @media only screen and (max-width: 1024px) {
    h2 {
      font-size: 65px;
    }

    p {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;

    h2 {
      font-size: 65px;
    }

    p {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 425px) {
    h2 {
      font-size: 55px;
    }

    p {
      font-size: 20px;
    }
  }
`;

const Square = styled.div`
  width: 5%;
  display: flex;
  justify-content: flex-end;
  margin-top: 60px;

  span {
    width: 10px;
    height: 10px;
    background-color: #401515;
  }
`;

// const NumberSide = styled.div`
//   width: 40%;
//   font-size: 45rem;
//   display: flex;
//   justify-content: space-evenly;
//   font-family: 'Bebas Neue', sans-serif;
// `;

// const LeftSide = styled.div`
//   position: sticky;
//   line-height: 850px;
//   top: 0;
//   overflow: hidden;
// `;

// const RightSide = styled.div`
//   background-color: #f2e1c2;
//   position: sticky;
//   line-height: 850px;
//   top: 0;
//   overflow: hidden;
// `;

// const BodySide = styled.div`
//   width: 60%;
// `;

// const SingleBody = styled.div`
//   padding-top: 100px;
//   padding-bottom: 150px;
//   border-top: 1px solid #401515;
//   display: flex;
//   justify-content: space-between;
// `;

// const Info = styled.div`
//   width: 80%;

//   h2 {
//     font-size: 150px;
//     line-height: 200px;
//     margin-bottom: 50px;
//   }

//   p {
//     font-size: 30px;
//   }
// `;

// const Number = styled.div`
//   width: 5%;
//   text-align: right;
//   font-size: 30px;
//   font-family: 'Source Serif 4', serif;
//   margin-top: 40px;
// `;

export default Body;
