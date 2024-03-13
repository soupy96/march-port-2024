import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function NotFound() {
  return (
    <div>
      <Helmet>
        <title>Big Mike | 404</title>
      </Helmet>
      <Text>404 Page</Text>
    </div>
  );
}

const Text = styled.div`
  text-align: center;
  margin: 25% 0px;
  font-family: 'Source Serif 4', serif;
  font-size: 5vw;
`;

export default NotFound;
