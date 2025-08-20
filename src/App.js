import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
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
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
