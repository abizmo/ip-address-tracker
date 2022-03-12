import Details from './components/Details';
import Footer from './components/Footer';
import Map from './components/Map';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div>
      <h1>IP Address Tracker</h1>
      <SearchBox />

      <Details />

      <Map />

      <Footer />
    </div>
  );
}

export default App;
