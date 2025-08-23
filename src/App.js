import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <Router>
      <>
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
