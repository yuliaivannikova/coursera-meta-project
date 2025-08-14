import Header from './components/Header';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

import "./App.css";

function App() {
  return (
    <>
    <Header />
    <main>
      <Highlights />
      <Testimonials />
      <About />
    </main>
    <Footer />
  </>
  );
}

export default App;
