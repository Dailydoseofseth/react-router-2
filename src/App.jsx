import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const handleClick = (page) => {
    console.log(`${page} link clicked`);
  };
  return (
    <div>
      <nav className="flex-nav">
        <ul>
          <li>
            <Link to="/" onClick={() => handleClick("Home")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => handleClick("Gallery")}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => handleClick("Contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
