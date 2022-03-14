import styled from 'styled-components';
import Details from './components/Details';
import Footer from './components/Footer';
import Map from './components/Map';
import SearchBox from './components/SearchBox';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr min-content;
  gap: 0px 0px;
  height: 100vh;
  width: 100vw;
`;

function App() {
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

export default App;
