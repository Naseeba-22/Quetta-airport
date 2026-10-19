import SectionTitle from "../components/SectionTitle";

const facilities = [
  ["🛋️", "Waiting Areas", "Comfortable spaces for passengers."],
  ["🕌", "Prayer Facilities", "Dedicated prayer area for passengers."],
  ["🚻", "Restrooms", "Clean and accessible restroom facilities."],
  ["🧳", "Baggage Claim", "Convenient baggage collection area."],
  ["🍽️", "Food & Refreshments", "Refreshments and passenger dining options."],
  ["📶", "Connectivity", "Stay connected while travelling."],
];

function Facilities() {
  return (
    <div className="inner-page">

      <section className="page-hero">

        <div className="container">

          <span className="eyebrow">
            AIRPORT AMENITIES
          </span>

          <h1>Airport Facilities</h1>

          <p>
            Explore facilities designed for passenger comfort.
          </p>

        </div>

      </section>

      <section className="section">

        <div className="container">

          <SectionTitle
            title="Everything Under One Roof"
            description="Explore the facilities available throughout the airport."
          />

          <div className="facility-grid">

            {facilities.map((facility, index) => (

              <div className="facility-card" key={index}>

                <div className="facility-icon">
                  {facility[0]}
                </div>

                <h3>{facility[1]}</h3>

                <p>{facility[2]}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Facilities;