import { useState } from "react";

import {
  Plane,
  Luggage,
  ShieldCheck,
  Coffee,
  Car,
  DoorOpen,
} from "lucide-react";

const locations = [
  {
    id: "checkin",
    name: "Check-in",
    icon: Plane,
    position: "map-checkin",
    description:
      "Airline check-in counters and baggage drop.",
  },
  {
    id: "security",
    name: "Security",
    icon: ShieldCheck,
    position: "map-security",
    description:
      "Passenger security screening area.",
  },
  {
    id: "gates",
    name: "Departure Gates",
    icon: DoorOpen,
    position: "map-gates",
    description:
      "Boarding gates for departing passengers.",
  },
  {
    id: "baggage",
    name: "Baggage Claim",
    icon: Luggage,
    position: "map-baggage",
    description:
      "Collect your checked baggage after arrival.",
  },
  {
    id: "lounge",
    name: "Passenger Lounge",
    icon: Coffee,
    position: "map-lounge",
    description:
      "Relax while waiting for your flight.",
  },
  {
    id: "parking",
    name: "Parking",
    icon: Car,
    position: "map-parking",
    description:
      "Passenger vehicle parking area.",
  },
];

function AirportMap() {
  const [selected, setSelected] =
    useState(locations[0]);

  return (
    <div className="airport-map-wrapper">

      <div className="airport-map">

        <div className="map-title">
          TERMINAL MAP
        </div>

        <div className="map-building">

          <div className="map-runway">
            <span>RUNWAY</span>
          </div>

          {locations.map((location) => {
            const Icon = location.icon;

            return (
              <button
                key={location.id}
                className={`map-location ${
                  location.position
                } ${
                  selected.id === location.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setSelected(location)
                }
              >
                <Icon size={18} />
                <span>
                  {location.name}
                </span>
              </button>
            );
          })}

        </div>
      </div>

      <div className="map-info">

        <span className="eyebrow">
          SELECTED AREA
        </span>

        <h3>{selected.name}</h3>

        <p>
          {selected.description}
        </p>

        <div className="map-status">
          <span />
          Area information available
        </div>

      </div>

    </div>
  );
}

export default AirportMap;