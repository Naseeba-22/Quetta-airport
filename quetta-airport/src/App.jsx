import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import AirportAssistant from "./components/AirportAssistant";

import Home from "./pages/Home";
import Flights from "./pages/Flights";
import FlightStatus from "./pages/FlightStatus";
import Services from "./pages/Services";
import Facilities from "./pages/Facilities";
import Airlines from "./pages/Airlines";
import Transport from "./pages/Transport";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <ScrollToTop />

      <ScrollProgress />

      <Navbar />

      <main>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/flights"
            element={<Flights />}
          />

          <Route
            path="/flight-status"
            element={<FlightStatus />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/facilities"
            element={<Facilities />}
          />

          <Route
            path="/airlines"
            element={<Airlines />}
          />

          <Route
            path="/transport"
            element={<Transport />}
          />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/news"
            element={<News />}
          />

          <Route
            path="/reservations"
            element={<Reservations />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      <Footer />

      <AirportAssistant />
    </>
  );
}

export default App;