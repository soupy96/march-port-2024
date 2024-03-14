import styled from 'styled-components';

// TODO
// have each number slide out and the new number slide in

function Body() {
  return (
    <BodyBox>
      <RowSection>
        <BigNumber>
          <p>01</p>
        </BigNumber>
        <RightInfo>
          <Info>
            <h2>Career pursuit</h2>
            <p>
              I'm all about chasing my career dreams while squeezing in time for
              what I love. Whether it's getting lost in the great outdoors,
              gaming with friends, or just kicking back with a good book, I'm
              all about balancing work and play. Connecting with friends over
              shared interests keeps me grounded, and I'm always up for trying
              something new. Life's a journey, and I'm just enjoying the ride,
              one adventure at a time.
            </p>
          </Info>
          <Square>
            <span></span>
          </Square>
        </RightInfo>
      </RowSection>
      <RowSection>
        <BigNumber>
          <p>02</p>
        </BigNumber>
        <RightInfo>
          <Info>
            <h2>Passionate innovation</h2>
            <p>
              In the midst of chasing my career dreams and enjoying life's
              adventures, I've found a true passion for web development. There's
              something incredibly rewarding about bringing ideas to life online
              and creating meaningful digital experiences. Whether I'm coding
              late into the night or collaborating with fellow developers, I'm
              constantly honing my skills and pushing the boundaries of what's
              possible. It's a dynamic field that keeps me engaged and inspired,
              and I can't wait to see where this journey takes me next.
            </p>
          </Info>
          <Square>
            <span></span>
          </Square>
        </RightInfo>
      </RowSection>
      <RowSection>
        <BigNumber>
          <p>03</p>
        </BigNumber>
        <RightInfo>
          <Info>
            <h2>Creative expertise</h2>
            <p>
              Detail-oriented and creative Front-End Web Developer with 4 years
              of experience in designing and implementing responsive and
              user-friendly web applications. Proficient in a wide range of
              front-end technologies and dedicated to delivering high-quality,
              visually appealing websites.
            </p>
            <br />
            <br />
            <p>Let's create captivating online experiences together!</p>
          </Info>
          <Square>
            <span></span>
          </Square>
        </RightInfo>
      </RowSection>
      {/* <NumberSide>
        <LeftSide>
          <p>0</p>
          <p>0</p>
          <p>0</p>
        </LeftSide>
        <RightSide>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </RightSide>
      </NumberSide>
      <BodySide>
        <SingleBody>
          <Info>
            <h2>Career pursuit</h2>
            <p>
              I'm all about chasing my career dreams while squeezing in time for
              what I love. Whether it's getting lost in the great outdoors,
              gaming with friends, or just kicking back with a good book, I'm
              all about balancing work and play. Connecting with friends over
              shared interests keeps me grounded, and I'm always up for trying
              something new. Life's a journey, and I'm just enjoying the ride,
              one adventure at a time.
            </p>
          </Info>
          <Number>01</Number>
        </SingleBody>
        <SingleBody>
          <Info>
            <h2>Passionate innovation</h2>
            <p>
              In the midst of chasing my career dreams and enjoying life's
              adventures, I've found a true passion for web development. There's
              something incredibly rewarding about bringing ideas to life online
              and creating meaningful digital experiences. Whether I'm coding
              late into the night or collaborating with fellow developers, I'm
              constantly honing my skills and pushing the boundaries of what's
              possible. It's a dynamic field that keeps me engaged and inspired,
              and I can't wait to see where this journey takes me next.
            </p>
          </Info>
          <Number>02</Number>
        </SingleBody>
        <SingleBody>
          <Info>
            <h2>Creative expertise</h2>
            <p>
              Detail-oriented and creative Front-End Web Developer with 4 years
              of experience in designing and implementing responsive and
              user-friendly web applications. Proficient in a wide range of
              front-end technologies and dedicated to delivering high-quality,
              visually appealing websites.
            </p>
            <br />
            <br />
            <p>Let's create captivating online experiences together!</p>
          </Info>
          <Number>03</Number>
        </SingleBody>
      </BodySide> */}
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
