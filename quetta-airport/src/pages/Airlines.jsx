import { Plane } from "lucide-react";
import { airlines } from "../data/mockData";
import SectionTitle from "../components/SectionTitle";

function Airlines() {
  return (
    <div className="inner-page">

      <section className="page-hero">

        <div className="container">

          <span className="eyebrow">
            AIR TRAVEL PARTNERS
          </span>

          <h1>Airlines</h1>

          <p>
            Airlines represented in our demonstration flight system.
          </p>

        </div>

      </section>

      <section className="section">

        <div className="container">

          <SectionTitle
            title="Our Airline Partners"
            description="Airline information can later be connected to a live API or database."
          />

          <div className="airline-grid">

            {airlines.map((airline, index) => (

              <div className="airline-card" key={index}>

                <div className="airline-logo">
                  <Plane />
                </div>

                <div>
                  <h3>{airline}</h3>
                  <span>Passenger Airline</span>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Airlines;