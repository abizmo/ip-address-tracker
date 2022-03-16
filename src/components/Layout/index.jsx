import styled from 'styled-components';

import Details from '../Details';
import Footer from '../Footer';
import Map from '../Map';
import SearchBox from '../SearchBox';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr min-content;
  gap: 0px 0px;
  height: 100vh;
  width: 100vw;
`;

function Layout() {
  return (
    <Container>
      <div style={{ backgroundColor: 'hsl(188 61% 56%)' }}>
        <h1>IP Address Tracker</h1>
        <SearchBox />
        <Details />
      </div>

      <Map />

      <Footer />
    </Container>
  );
}

export default Layout;
