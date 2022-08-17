import './App.css';
import Header from './Header';
import Map1 from './Map1';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="map">
        <Map1 />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
