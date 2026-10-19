import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";

function AirportClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const clock = new Intl.DateTimeFormat("en-PK", {
    timeZone: "Asia/Karachi",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(time);

  const date = new Intl.DateTimeFormat("en-PK", {
    timeZone: "Asia/Karachi",
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(time);

  return (
    <div className="wow-widget airport-clock">
      <div className="widget-icon">
        <Clock3 size={24} />
      </div>

      <div>
        <span className="widget-label">
          QUETTA AIRPORT LOCAL TIME
        </span>

        <strong>{clock}</strong>

        <p>{date}</p>

        <small>
          Pakistan Standard Time (PKT)
        </small>
      </div>
    </div>
  );
}

export default AirportClock;