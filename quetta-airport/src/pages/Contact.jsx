import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

function Contact() {
  return (
    <div className="inner-page">

      <section className="page-hero">

        <div className="container">

          <span className="eyebrow">
            GET IN TOUCH
          </span>

          <h1>Contact Quetta Airport</h1>

          <p>
            We're here to help with your airport questions.
          </p>

        </div>

      </section>

      <section className="section">

        <div className="container">

          <div className="contact-grid">

            <div className="contact-info">

              <h2>Airport Information</h2>

              <p>
                Contact our information team for assistance
                with airport services and passenger information.
              </p>

              <div className="contact-item">
                <Phone />
                <div>
                  <small>Phone</small>
                  <strong>+92 81 0000000</strong>
                </div>
              </div>

              <div className="contact-item">
                <Mail />
                <div>
                  <small>Email</small>
                  <strong>info@quettaairport.example</strong>
                </div>
              </div>

              <div className="contact-item">
                <MapPin />
                <div>
                  <small>Location</small>
                  <strong>Quetta, Balochistan, Pakistan</strong>
                </div>
              </div>

              <div className="contact-item">
                <Clock3 />
                <div>
                  <small>Information Desk</small>
                  <strong>Available during airport operations</strong>
                </div>
              </div>

            </div>

            <div className="map-placeholder">

              <MapPin size={42} />

              <h2>Quetta Airport</h2>

              <p>
                Interactive map can be connected here later.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;