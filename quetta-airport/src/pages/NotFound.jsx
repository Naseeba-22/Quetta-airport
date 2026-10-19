import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

function NotFound() {
  return (
    <div className="not-found">

      <Plane size={60} />

      <span>404</span>

      <h1>Page Not Found</h1>

      <p>
        Looks like this flight has gone somewhere else.
      </p>

      <Link to="/" className="primary-btn">
        Return Home
      </Link>

    </div>
  );
}

export default NotFound;