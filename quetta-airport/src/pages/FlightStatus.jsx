import { useState } from "react";
import { Search, Plane, Clock3, MapPin } from "lucide-react";

import { flights } from "../data/mockData";

function FlightStatus() {

  const [query, setQuery] = useState("");
  const [flight, setFlight] = useState(null);

  function searchFlight(e) {
    e.preventDefault();

    const result = flights.find(
      (item) =>
        item.flight.toLowerCase() === query.trim().toLowerCase()
    );

    setFlight(result || "not-found");
  }

  return (
    <div className="inner-page">

      <section className="page-hero">

        <div className="container">

          <span className="eyebrow">
            REAL-TIME STYLE SEARCH
          </span>

          <h1>Flight Status</h1>

          <p>
            Search for a flight using its flight number.
          </p>

        </div>

      </section>

      <section className="section">

        <div className="container narrow">

          <div className="status-search-card">

            <div className="status-icon">
              <Plane />
            </div>

            <h2>Check your flight</h2>

            <p>
              Enter your flight number below.
            </p>

            <form onSubmit={searchFlight}>

              <div className="large-search">

                <Search size={20} />

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Example: PK-310"
                />

                <button className="primary-btn">
                  Search
                </button>

              </div>

            </form>

          </div>

          {flight && flight !== "not-found" && (

            <div className="result-card">

              <div className="result-top">

                <div>

                  <span>FLIGHT</span>

                  <h2>{flight.flight}</h2>

                  <p>{flight.airline}</p>

                </div>

                <span className="status on-time">
                  {flight.status}
                </span>

              </div>

              <div className="result-route">

                <div>
                  <small>FROM</small>
                  <strong>{flight.from}</strong>
                </div>

                <Plane />

                <div>
                  <small>TO</small>
                  <strong>{flight.to}</strong>
                </div>

              </div>

              <div className="result-details">

                <div>
                  <Clock3 />
                  <span>
                    <small>Scheduled Time</small>
                    <strong>{flight.time}</strong>
                  </span>
                </div>

                <div>
                  <MapPin />
                  <span>
                    <small>Airport</small>
                    <strong>Quetta Airport</strong>
                  </span>
                </div>

              </div>

            </div>

          )}

          {flight === "not-found" && (

            <div className="empty-state">
              No flight found. Try <strong>PK-310</strong>,
              <strong>PK-326</strong> or <strong>ER-541</strong>.
            </div>

          )}

        </div>

      </section>

    </div>
  );
}

export default FlightStatus;