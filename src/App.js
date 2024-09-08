import './assets/css/style.css';
import './assets/css/landmark.css';
import './assets/css/states.css';
import './assets/css/footer.css';
import Header from './components/Header';
import Landmarks from './components/Landmarks';
import States from './components/States';
import UnionTerritories from './components/UnionTerritories';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Landmarks />
        <States />
        <UnionTerritories />
      </main>
      <ScrollToTop/>
      <Footer />
    </div>
  );
}

export default App;
