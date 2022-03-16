import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 75%;
`;

function Details() {
  const {
    ip, location, timezone, isp,
  } = useSelector(({ tracker }) => tracker);

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
          UTC
          {' '}
          {timezone}
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
