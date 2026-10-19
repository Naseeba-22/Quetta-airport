import { services } from "../data/mockData";
import SectionTitle from "../components/SectionTitle";

function Services() {
  return (
    <div className="inner-page">

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">PASSENGER EXPERIENCE</span>
          <h1>Passenger Services</h1>
          <p>
            Everything you need for a comfortable airport experience.
          </p>
        </div>
      </section>

      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="OUR SERVICES"
            title="Designed Around You"
            description="Explore the services available to passengers."
          />

          <div className="service-grid">

            {services.map((service, index) => (

              <div className="service-card large" key={index}>

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className="service-link">
                  Available at airport →
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Services;