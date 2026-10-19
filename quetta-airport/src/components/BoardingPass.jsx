import {
  X,
  Plane,
  MapPin,
  Armchair,
} from "lucide-react";

function BoardingPass({
  flight,
  onClose,
}) {
  const gate = flight.gate || "04";
  const seat = flight.seat || "12A";
  const boarding =
    flight.boarding || "08:00";

  return (
    <div
      className="pass-overlay"
      onClick={onClose}
    >

      <div
        className="boarding-pass"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        <button
          className="pass-close"
          onClick={onClose}
          aria-label="Close boarding pass"
        >
          <X size={20} />
        </button>

        <div className="pass-header">

          <div>
            <span>
              QUETTA INTERNATIONAL AIRPORT
            </span>

            <strong>
              BOARDING PASS
            </strong>
          </div>

          <Plane size={30} />

        </div>

        <div className="pass-route">

          <div>
            <small>FROM</small>
            <strong>{flight.from}</strong>
          </div>

          <Plane size={25} />

          <div>
            <small>TO</small>
            <strong>{flight.to}</strong>
          </div>

        </div>

        <div className="pass-info">

          <div>
            <small>FLIGHT</small>
            <strong>{flight.flight}</strong>
          </div>

          <div>
            <small>DATE</small>
            <strong>18 SEP</strong>
          </div>

          <div>
            <small>BOARDING</small>
            <strong>{boarding}</strong>
          </div>

          <div>
            <small>GATE</small>
            <strong>{gate}</strong>
          </div>

          <div>
            <small>SEAT</small>
            <strong>{seat}</strong>
          </div>

        </div>

        <div className="pass-bottom">

          <div>
            <MapPin size={18} />
            Terminal 1
          </div>

          <div>
            <Armchair size={18} />
            Group A
          </div>

        </div>

        <div className="fake-barcode">
          {Array.from({
            length: 42,
          }).map((_, index) => (
            <span key={index} />
          ))}
        </div>

        <p className="demo-label">
          Frontend demonstration boarding pass
        </p>

      </div>
    </div>
  );
}

export default BoardingPass;