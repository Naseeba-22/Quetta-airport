import { Link } from "react-router-dom";
import { Plane, Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div>
          <div className="footer-logo">
            <Plane size={24} />
            <span>QUETTA AIRPORT</span>
          </div>

          <p>
            A modern digital gateway to Balochistan,
            designed to make your airport experience
            simple, comfortable and connected.
          </p>

          <div className="socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="Twitter">𝕏</a>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/flights">Flights</Link>
          <Link to="/flight-status">Flight Status</Link>
          <Link to="/services">Services</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/gallery">Gallery</Link>
        </div>

        <div>
          <h3>Passenger</h3>

          <Link to="/transport">Transport</Link>
          <Link to="/reservations">Service Request</Link>
          <Link to="/news">Airport News</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div>
          <h3>Contact</h3>

          <p className="contact-line">
            <MapPin size={17} />
            <span>Quetta, Balochistan, Pakistan</span>
          </p>

          <p className="contact-line">
            <Phone size={17} />
            <span>+92 81 0000000</span>
          </p>

          <p className="contact-line">
            <Mail size={17} />
            <span>info@quettaairport.example</span>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          © 2026 Quetta Airport — Frontend Project
        </div>
      </div>
    </footer>
  );
}

export default Footer;