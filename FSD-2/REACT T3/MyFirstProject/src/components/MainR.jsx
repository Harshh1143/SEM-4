import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function MainR() {
  return (
    <Router>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>MyApp</h2>

        <ul style={styles.navLinks}>
          <li>
            <Link style={styles.link} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link style={styles.link} to="/about">
              About
            </Link>
          </li>

          <li>
            <Link style={styles.link} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111827",
    padding: "15px 40px",
  },

  logo: {
    color: "white",
    margin: 0,
  },

  navLinks: {
    display: "flex",
    gap: "25px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
  },
};