import { Link } from "react-router-dom";
import {
  Car,
  Bus,
  MapPin,
  Clock3,
  ArrowRight,
  Phone,
} from "lucide-react";

function Transport() {
  const transportOptions = [
    {
      icon: Car,
      title: "Private Cars",
      description:
        "Passengers can use private vehicles to travel to and from Quetta Airport.",
    },
    {
      icon: Bus,
      title: "Public Transport",
      description:
        "Public transportation options are available for passengers traveling around Quetta.",
    },
    {
      icon: Car,
      title: "Car Rental",
      description:
        "Car rental services can help passengers arrange transportation after arriving at the airport.",
    },
  ];

  return (
    <div className="inner-page">

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">GETTING AROUND</span>

          <h1>Airport Transport</h1>

          <p>
            Convenient transportation options for getting to and from
            Quetta International Airport.
          </p>
        </div>
      </section>

      {/* TRANSPORT OPTIONS */}
      <section className="section">
        <div className="container">

          <div className="section-title">
            <span className="eyebrow">
              TRANSPORT OPTIONS
            </span>

            <h2>
              Choose Your Way to Travel
            </h2>

            <p>
              Explore the available transportation options for your
              airport journey.
            </p>
          </div>

          <div className="services-grid">

            {transportOptions.map((option, index) => {
              const Icon = option.icon;

              return (
                <div
                  className="service-card"
                  key={index}
                >
                  <div className="service-icon">
                    <Icon size={30} />
                  </div>

                  <h3>
                    {option.title}
                  </h3>

                  <p>
                    {option.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* AIRPORT LOCATION */}
      <section className="section light-section">
        <div className="container">

          <div className="transport-location">

            <div className="transport-location-content">

              <span className="eyebrow">
                AIRPORT LOCATION
              </span>

              <h2>
                Getting to Quetta Airport
              </h2>

              <p>
                Quetta International Airport is located in Quetta,
                Balochistan. Passengers should plan their journey
                according to traffic and airport arrival requirements.
              </p>

              <div className="location-info">

                <div>
                  <MapPin size={20} />

                  <div>
                    <strong>Location</strong>
                    <span>
                      Quetta, Balochistan, Pakistan
                    </span>
                  </div>
                </div>

                <div>
                  <Clock3 size={20} />

                  <div>
                    <strong>Travel Planning</strong>
                    <span>
                      Allow sufficient time before your flight.
                    </span>
                  </div>
                </div>

                <div>
                  <Phone size={20} />

                  <div>
                    <strong>Airport Assistance</strong>
                    <span>
                      Contact the airport for passenger assistance.
                    </span>
                  </div>
                </div>

              </div>

            </div>

            <div className="transport-map">

              <div className="map-placeholder">

                <MapPin size={50} />

                <h3>
                  Quetta International Airport
                </h3>

                <p>
                  Quetta, Balochistan
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* TRAVEL TIP */}
      <section className="section">
        <div className="container">

          <div className="info-banner">

            <div>
              <span className="eyebrow">
                TRAVEL TIP
              </span>

              <h2>
                Plan Your Airport Journey Early
              </h2>

              <p>
                We recommend allowing extra travel time so you can
                reach the terminal comfortably before your scheduled
                departure.
              </p>
            </div>

            <Link
              to="/flight-status"
              className="primary-btn"
            >
              Check Flight Status
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Transport;