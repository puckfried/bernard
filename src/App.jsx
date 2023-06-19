import './App.css';
import About from './components/about/About';
import Social from './components/Social/Social';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Banner from './components/navbar/banner/Banner';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Works from './components/works/Works';

// import about war fehlerhaft, Schreibfehler im Verzeichnis

function App() {
  return (
    <div className="App">
      <Social />
      <Navbar />
      <Banner />
      <About />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
