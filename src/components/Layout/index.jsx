import Details from 'components/Details';
import Footer from 'components/Footer';
import Map from 'components/Map';
import SearchBox from 'components/SearchBox';

import { Container, Header, Title } from './styles';

function Layout() {
  return (
    <Container>
      <Header>
        <Title>IP Address Tracker</Title>
        <SearchBox />
        <Details />
      </Header>

      <Map />

      <Footer />
    </Container>
  );
}

export default Layout;
