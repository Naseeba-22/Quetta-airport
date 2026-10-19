import { useEffect, useState } from "react";

import {
  Plane,
  RefreshCw,
  MapPin,
  Clock3,
} from "lucide-react";

function LiveFlightTracker() {
  const [progress, setProgress] =
    useState(38);

  const [updated, setUpdated] =
    useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) =>
        old >= 92 ? 38 : old + 1
      );
    }, 1800);

    return () =>
      clearInterval(timer);
  }, []);

  function refreshTracker() {
    setUpdated(true);

    setTimeout(() => {
      setUpdated(false);
    }, 1200);
  }

  return (
    <section className="live-tracker-section">

      <div className="container">

        <div className="tracker-heading">

          <div>
            <span className="eyebrow">
              FLIGHT TRACKER
            </span>

            <h2>
              Track Your Journey
            </h2>

            <p>
              Follow your flight route and
              estimated journey progress.
            </p>
          </div>

          <button
            className={`tracker-refresh ${
              updated ? "rotating" : ""
            }`}
            onClick={refreshTracker}
          >
            <RefreshCw size={17} />
            Refresh
          </button>

        </div>

        <div className="live-tracker">

          <div className="tracker-top">

            <div>
              <span className="live-dot" />
              LIVE TRACKING
            </div>

            <span className="demo-tracker">
              DEMO DATA
            </span>

          </div>

          <div className="tracker-route">

            <div className="airport-point">

              <div className="airport-code">
                UET
              </div>

              <strong>Quetta</strong>

              <span>Departure</span>

              <small>08:30</small>

            </div>

            <div className="flight-path">

              <div className="path-line">

                <div
                  className="path-progress"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

              <div
                className="moving-plane"
                style={{
                  left: `${progress}%`,
                }}
              >
                <Plane size={25} />
              </div>

              <div className="route-label">
                PK-310 • PIA
              </div>

            </div>

            <div className="airport-point arrival">

              <div className="airport-code">
                ISB
              </div>

              <strong>Islamabad</strong>

              <span>Arrival</span>

              <small>09:45</small>

            </div>

          </div>

          <div className="tracker-details">

            <div>
              <MapPin size={18} />

              <div>
                <small>ROUTE</small>
                <strong>
                  Quetta → Islamabad
                </strong>
              </div>
            </div>

            <div>
              <Clock3 size={18} />

              <div>
                <small>STATUS</small>

                <strong className="on-time">
                  On Time
                </strong>
              </div>
            </div>

            <div>
              <Plane size={18} />

              <div>
                <small>FLIGHT</small>
                <strong>PK-310</strong>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LiveFlightTracker;