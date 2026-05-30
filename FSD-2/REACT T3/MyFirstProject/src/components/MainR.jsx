import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Usi from '../Usi.jsx'
import Color from '../Color.jsx'
import Task2 from '../Task2.jsx'
import Task5 from '../Task5.jsx'
import Task6 from '../Task6.jsx'
import Task7 from '../Task7.jsx'
import Todo from '../Todo.jsx'
import Task9 from '../Task9.jsx'
import Task10 from '../Task10.jsx'
import Task_spe  from "../Task_spe.jsx";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Us1", path: "/usi" },
  { label: "Color", path: "/color" },
  { label: "Task 2", path: "/task2" },
  { label: "Task 5", path: "/task5" },
  { label: "Task 6", path: "/task6" },
  { label: "Task 7", path: "/task7" },
  { label: "Todo", path: "/todo" },
  { label: "Task 9", path: "/task9" },
  { label: "Task 10", path: "/task10" },
  { label :"Task Special", path:'/task_spe'}
];

export default function MainR() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div style={styles.pageShell}>
        <nav style={styles.navbar}>
          <NavLink to="/" style={styles.logo} onClick={() => setMenuOpen(false)}>
            <span style={styles.logoMark}>M</span>
            MyApp
          </NavLink>

          <div style={styles.dropdown}>
            <button
              type="button"
              style={styles.menuButton}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Open navigation menu"
            >
              <span style={styles.menuIcon}>
                <span style={styles.menuLine}></span>
                <span style={styles.menuLine}></span>
                <span style={styles.menuLine}></span>
              </span>
              <span style={styles.menuText}>Menu</span>
            </button>

            {menuOpen && (
              <ul style={styles.dropdownMenu}>
                {navItems.map((item) => (
                  <li key={item.path} style={styles.dropdownItem}>
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      style={({ isActive }) => ({
                        ...styles.dropdownLink,
                        ...(isActive ? styles.activeLink : {}),
                      })}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/usi" element={<Usi />} />
          <Route path="/color" element={<Color />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path='/task5' element={<Task5 />} />
          <Route path='/task6' element={<Task6 />} />
          <Route path='/task7' element={<Task7 />} />
          <Route path='/todo' element={<Todo/>} />
          <Route path='/task9' element={<Task9/>} />
          <Route path="/task10" element={<Task10 />} />
          <Route path='/task_spe' element={<Task_spe/>} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  pageShell: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 8% 20%, rgba(34, 197, 94, 0.22), transparent 28%), radial-gradient(circle at 85% 12%, rgba(249, 115, 22, 0.2), transparent 24%), linear-gradient(135deg, #111827 0%, #172033 48%, #0f172a 100%)",
    paddingTop: "18px",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "min(1180px, calc(100% - 32px))",
    margin: "0 auto",
    padding: "12px 16px",
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.22)",
    borderRadius: "18px",
    boxShadow: "0 20px 45px rgba(0, 0, 0, 0.28)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    position: "sticky",
    top: "18px",
    zIndex: 20,
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "white",
    textDecoration: "none",
    fontSize: "30px",
    fontWeight: "800",
    letterSpacing: "0",
  },

  logoMark: {
    display: "grid",
    placeItems: "center",
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #22c55e, #f97316)",
    color: "#07111f",
    fontSize: "22px",
    fontWeight: "900",
  },

  dropdown: {
    position: "relative",
  },

  menuButton: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "1px solid rgba(255, 255, 255, 0.24)",
    borderRadius: "14px",
    padding: "10px 14px",
    background: "rgba(255, 255, 255, 0.14)",
    color: "#ffffff",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "700",
    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.18)",
  },

  menuIcon: {
    display: "grid",
    gap: "4px",
    width: "18px",
  },

  menuLine: {
    display: "block",
    width: "18px",
    height: "2px",
    borderRadius: "20px",
    background: "#ffffff",
  },

  menuText: {
    lineHeight: 1,
  },

  dropdownMenu: {
    position: "absolute",
    top: "calc(100% + 12px)",
    right: 0,
    width: "min(260px, calc(100vw - 32px))",
    maxHeight: "min(420px, calc(100vh - 112px))",
    overflowY: "auto",
    overscrollBehavior: "contain",
    boxSizing: "border-box",
    margin: 0,
    padding: "8px",
    listStyle: "none",
    background: "rgba(15, 23, 42, 0.78)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    borderRadius: "16px",
    boxShadow: "0 24px 55px rgba(0, 0, 0, 0.36)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    scrollbarWidth: "thin",
  },

  dropdownItem: {
    margin: 0,
  },

  dropdownLink: {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    padding: "9px 12px",
    borderRadius: "8px",
    color: "rgba(255, 255, 255, 0.86)",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: 1.2,
  },

  activeLink: {
    background: "rgba(34, 197, 94, 0.18)",
    color: "#ffffff",
    boxShadow: "inset 3px 0 0 #22c55e",
  },
};
