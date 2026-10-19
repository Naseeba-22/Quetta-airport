import { Link } from "react-router-dom";

import {
  ArrowRight,
  Search,
  Plane,
  Luggage,
  Car,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import FlightCard from "../components/FlightCard";
import AirportClock from "../components/AirportClock";
import WeatherWidget from "../components/WeatherWidget";
import AnimatedCounter from "../components/AnimatedCounter";
import AirportMap from "../components/AirportMap";
import LiveFlightTracker from "../components/LiveFlightTracker";

import {
  flights,
  services,
  news,
} from "../data/mockData";

function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero">

        <div className="hero-overlay" />

        <div className="container hero-content">

          <span className="hero-badge">
            ✈ WELCOME TO QUETTA INTERNATIONAL AIRPORT
          </span>

          <h1>
            Your Gateway to
            <span> Balochistan</span>
          </h1>

          <p>
            A smarter, simpler and more connected
            airport experience. Check flights, explore
            services and plan your journey with ease.
          </p>

          <div className="hero-buttons">

            <Link
              to="/flights"
              className="primary-btn"
            >
              Explore Flights
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/services"
              className="secondary-btn"
            >
              Airport Services
            </Link>

          </div>

        </div>

        {/* HERO WIDGETS */}
        <div className="container hero-widgets">

          <AirportClock />

          <WeatherWidget />

          <div className="wow-widget terminal-status">

            <div className="status-icon">
              <CheckCircle2 size={25} />
            </div>

            <span className="widget-label">
              TERMINAL STATUS
            </span>

            <h3>
              All Systems Operational
            </h3>

            <p>
              Passenger services are operating normally.
            </p>

            <div className="status-live">
              <span />
              Live monitoring
            </div>

          </div>

        </div>

      </section>

      {/* SEARCH */}
      <section className="section search-section">

        <div className="container">

          <div className="flight-search">

            <div className="search-heading">

              <Search size={22} />

              <div>
                <h3>Find Your Flight</h3>

                <p>
                  Search arrivals and departures
                </p>
              </div>

            </div>

            <Link
              to="/flight-status"
              className="primary-btn"
            >
              Check Flight Status
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="stats-section">

        <div className="container stats-grid">

          <div className="stat-box">
            <Plane size={28} />

            <strong>
              <AnimatedCounter value={24} />
            </strong>

            <span>
              Daily Flights
            </span>
          </div>

          <div className="stat-box">
            <Plane size={28} />

            <strong>
              <AnimatedCounter value={12} />
            </strong>

            <span>
              Arrivals
            </span>
          </div>

          <div className="stat-box">
            <Plane size={28} />

            <strong>
              <AnimatedCounter value={12} />
            </strong>

            <span>
              Departures
            </span>
          </div>

          <div className="stat-box">
            <CheckCircle2 size={28} />

            <strong>
              <AnimatedCounter
                value={98}
                suffix="%"
              />
            </strong>

            <span>
              On-Time Performance
            </span>
          </div>

        </div>

      </section>

      {/* FLIGHT BOARD */}
      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="FLIGHT INFORMATION"
            title="Today's Flight Board"
            description="Quickly check the latest arrival and departure information."
          />

          <div className="flight-board">

            <div className="flight-board-head">
              <span>Flight</span>
              <span>Airline</span>
              <span>Route</span>
              <span>Time</span>
              <span>Status</span>
            </div>

            {flights.map((flight) => (
              <FlightCard
                key={flight.id}
                flight={flight}
              />
            ))}

          </div>

          <div className="center-button">

            <Link
              to="/flights"
              className="outline-btn"
            >
              View All Flights
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="section light-section">

        <div className="container">

          <SectionTitle
            eyebrow="PASSENGER SERVICES"
            title="Everything You Need"
            description="Designed to make your airport journey comfortable and convenient."
          />

          <div className="services-grid">

            {services.map(
              (service, index) => (
                <div
                  className="service-card"
                  key={index}
                >

                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <Link to="/services">
                    Learn More
                    <ArrowRight size={15} />
                  </Link>

                </div>
              )
            )}

          </div>

        </div>

      </section>

      {/* LIVE TRACKER */}
      <LiveFlightTracker />

      {/* AIRPORT MAP */}
      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="SMART TERMINAL"
            title="Explore the Airport"
            description="Interactive terminal guide to help you find important passenger areas."
          />

          <AirportMap />

        </div>

      </section>

      {/* QUICK ACCESS */}
      <section className="section light-section">

        <div className="container">

          <SectionTitle
            eyebrow="QUICK ACCESS"
            title="Plan Your Journey"
            description="Everything you need before arriving at the airport."
          />

          <div className="quick-grid">

            <Link
              to="/flight-status"
              className="quick-card"
            >
              <Plane size={28} />

              <div>
                <h3>
                  Flight Status
                </h3>

                <p>
                  Track your flight information.
                </p>
              </div>

              <ArrowRight size={18} />
            </Link>

            <Link
              to="/transport"
              className="quick-card"
            >
              <Car size={28} />

              <div>
                <h3>
                  Transport
                </h3>

                <p>
                  Find transportation options.
                </p>
              </div>

              <ArrowRight size={18} />
            </Link>

            <Link
              to="/facilities"
              className="quick-card"
            >
              <ShieldCheck size={28} />

              <div>
                <h3>
                  Facilities
                </h3>

                <p>
                  Explore airport facilities.
                </p>
              </div>

              <ArrowRight size={18} />
            </Link>

            <Link
              to="/services"
              className="quick-card"
            >
              <Luggage size={28} />

              <div>
                <h3>
                  Passenger Services
                </h3>

                <p>
                  Get help during your journey.
                </p>
              </div>

              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

      {/* NEWS */}
      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="LATEST NEWS"
            title="Airport Updates"
            description="Stay informed about airport announcements and passenger information."
          />

          <div className="news-grid">

            {news.map(
              (item, index) => (
                <article
                  className="news-card"
                  key={index}
                >

                  <span className="news-category">
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <small>
                    {item.date}
                  </small>

                  <p>
                    {item.description}
                  </p>

                  <Link to="/news">
                    Read More
                    <ArrowRight size={15} />
                  </Link>

                </article>
              )
            )}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="cta-section">

        <div className="container cta-content">

          <div>

            <span className="eyebrow">
              NEED ASSISTANCE?
            </span>

            <h2>
              We're Here to Make Your Journey Easier
            </h2>

            <p>
              Have a question about flights,
              facilities or airport services?
              Our digital assistant can help.
            </p>

          </div>

          <Link
            to="/contact"
            className="primary-btn"
          >
            Contact Airport
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;