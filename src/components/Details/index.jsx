import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 75%;
`;

function Details() {
  const [ip] = useState('192.212.174.101');
  const [location] = useState('Brooklyn, NY 10001');
  const [timezone] = useState('UTC');
  const [offset] = useState('-05:00');
  const [isp] = useState('SpaceX Starlink');

  return (
    <Container>
      <div>
        <h2>IP Address</h2>
        <p>{ip}</p>
      </div>
      <div>
        <h2>Location</h2>
        <p>{location}</p>
      </div>
      <div>
        <h2>Timezone</h2>
        <p>
          {timezone}
          {' '}
          {offset}
        </p>
      </div>
      <div>
        <h2>ISP</h2>
        <p>{isp}</p>
      </div>
    </Container>
  );
}

export default Details;
