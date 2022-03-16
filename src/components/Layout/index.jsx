import Details from '../Details';
import Footer from '../Footer';
import Map from '../Map';
import SearchBox from '../SearchBox';
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
