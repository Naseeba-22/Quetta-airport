import {
  CloudSun,
  Wind,
  Droplets,
} from "lucide-react";

function WeatherWidget() {
  return (
    <div className="wow-widget weather-widget">

      <div className="weather-top">
        <div>
          <span className="widget-label">
            QUETTA WEATHER
          </span>

          <h3>Clear Sky</h3>
        </div>

        <CloudSun size={48} />
      </div>

      <div className="weather-temp">
        28°
      </div>

      <div className="weather-details">

        <span>
          <Wind size={16} />
          12 km/h
        </span>

        <span>
          <Droplets size={16} />
          34%
        </span>

      </div>

      <small className="demo-label">
        Demo weather data • API can be connected later
      </small>

    </div>
  );
}

export default WeatherWidget;