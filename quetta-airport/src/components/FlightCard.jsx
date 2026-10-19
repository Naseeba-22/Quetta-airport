import { useState } from "react";
import {
  Plane,
  Clock3,
} from "lucide-react";

import BoardingPass from "./BoardingPass";

function FlightCard({ flight }) {
  const [showPass, setShowPass] =
    useState(false);

  return (
    <>
      <div className="flight-row">

        <div className="flight-number">
          <Plane size={18} />
          <strong>{flight.flight}</strong>
        </div>

        <div>
          <strong>{flight.airline}</strong>
        </div>

        <div>
          <span className="route">
            {flight.from} → {flight.to}
          </span>
        </div>

        <div className="flight-time">
          <Clock3 size={16} />
          {flight.time}
        </div>

        <div className="flight-status-cell">

          <span
            className={`status ${flight.status
              .toLowerCase()
              .replace(" ", "-")}`}
          >
            {flight.status}
          </span>

          <button
            className="pass-trigger"
            onClick={() =>
              setShowPass(true)
            }
          >
            Pass
          </button>

        </div>

      </div>

      {showPass && (
        <BoardingPass
          flight={flight}
          onClose={() =>
            setShowPass(false)
          }
        />
      )}
    </>
  );
}

export default FlightCard;