// Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

/* ============================================================
   PAA Logo — official PNG from Wikimedia Commons
   ============================================================ */
const PAALogo = ({ size = 70 }) => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/76/Pakistan_Airports_Authority_logo.png"
    alt="Pakistan Airports Authority"
    width={size}
    height={size}
    style={{ display: "block", objectFit: "contain" }}
    loading="eager"
    decoding="async"
  />
);

function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-icon">
            <PAALogo size={70} />
          </div>

          <div className="logo-text">
            <strong>QUETTA</strong>
            <span>INTERNATIONAL AIRPORT</span>
          </div>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/flights" onClick={closeMenu}>Flights</NavLink>
          <NavLink to="/flight-status" onClick={closeMenu}>Flight Status</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/facilities" onClick={closeMenu}>Facilities</NavLink>
          <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
          <NavLink to="/news" onClick={closeMenu}>News</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

          <ThemeToggle />

          <Link to="/reservations" className="nav-button" onClick={closeMenu}>
            Service Request
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;