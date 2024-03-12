import styled from 'styled-components';

// TODO

function Body() {
  return (
    <BodyBox>
      <NumberSide>
        {/* have each number slide out and the new number slide in */}
        <LeftSide>
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
      </BodySide>
    </BodyBox>
  );
}

const BodyBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 100vh;
  padding: 20px 0px;
`;

const NumberSide = styled.div`
  width: 40%;
  font-size: 35rem;
  display: flex;
  justify-content: space-evenly;

  p {
    position: sticky;
    line-height: 450px;
    top: 0;
    overflow: hidden;
  }
`;

const LeftSide = styled.div``;

const RightSide = styled.div``;

const BodySide = styled.div`
  width: 60%;
`;

const SingleBody = styled.div`
  height: 550px;
  border-top: 1px solid #401515;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  width: 70%;
  font-size: 20px;

  h2 {
    font-size: 100px;
    margin-bottom: 20px;
  }
`;

const Number = styled.div`
  width: 5%;
  text-align: right;
`;

export default Body;
